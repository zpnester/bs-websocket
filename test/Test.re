open WebSocket;
open Expect_;

let ws =
  WebSocket.make(
    "ws://demos.kaazing.com/echo",
    /*~protocols=`Strings([|"json"|]),*/
    (),
  );
ws->onclose(e => {
  Js.log2("code", e->code);
  expectToEqual(e->code, 3000);

  Js.log2("reason", e->reason);
  expectToEqual(e->reason, "oops");

  Js.log2("wasClean", e->wasClean);
  expectToEqual(e->wasClean, true);

  Js.log("OK");
});
ws->onopen(() => {
  Js.log("open");
  ws->send(`String("he" ++ "llo"));
});

ws->onmessage(e => {
  expectToEqual(e->data->Js.Json.decodeString->Belt.Option.getExn, "hello");

  /* send 2 */
  ws->onmessage(e => {
    let decode: (Js.Json.t, string => unit) => unit = [%raw
      {|
            (data, callback) => {
                var reader = new FileReader();
                reader.onload = function() {
                    callback(reader.result);
                }
                reader.readAsText(data);
            }
        |}
    ];

    decode(
      e->data,
      s => {
        expectToEqual(s, "ABC");

        /* close after send 2 */
        ws->close(~code=3000, ~reason="oops", ());
      },
    );
  });

  let ab = Js.Typed_array.Int8Array.make([|65, 66, 67|]);
  ws->send(`ArrayBuffer(ab->Js.Typed_array.Int8Array.buffer));
});