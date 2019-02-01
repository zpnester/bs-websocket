open WebSocket;

Js.log("hello test");

let ws = WebSocket.make("ws://demos.kaazing.com/echo", ());
ws->onclose(e => {
    Js.log("close");
    Js.log2("code", e->CloseEvent.code);
    Js.log2("reason", e->CloseEvent.reason);
    Js.log2("typeof reason", Js.typeof(e->CloseEvent.reason));
    Js.log2("wasClean", e->CloseEvent.wasClean);
});
ws->onopen(() => {
    Js.log("open");
});
ws->onmessage(e => {
    Js.log2("msg data", e->MessageEvent.data);

    Js.log2("msg is string", e->MessageEvent.data->Js.Json.decodeString->Belt.Option.isSome);

    let f: Js.Json.t => unit = [%raw {|
        data => {
            var reader = new FileReader();
            reader.onload = function() {
                // ABC
                console.log(reader.result);
            }
            reader.readAsText(data);
        }
    |}];

    f(e->MessageEvent.data);
});

Js.Global.setInterval(() => {
    /* ws->send(`String("hello")) */
    let ab = Js.Typed_array.Int8Array.make([|65, 66, 67|]);
    ws->send(`ArrayBuffer(ab->Js.Typed_array.Int8Array.buffer))
}, 2000);

Js.Global.setTimeout(() => {
    ws->close(~code=3000, ~reason="oops", ());
}, 5000);