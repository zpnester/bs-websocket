type closeEvent;

[@bs.get] external code: closeEvent => int = "code";
[@bs.get] external reason: closeEvent => string = "reason";
[@bs.get] external wasClean: closeEvent => bool = "wasClean";

type messageEvent;

[@bs.get] external data: messageEvent => Js.Json.t = "data";

type t;
[@bs.new]
external make:
  (
    string,
    ~protocols: [@bs.unwrap] [ | `String(string) | `Strings(array(string))]
                  =?,
    unit
  ) =>
  t =
  "WebSocket";

[@bs.set] external onmessage: (t, messageEvent => unit) => unit = "onmessage";
[@bs.set] external onopen: (t, unit => unit) => unit = "onopen";
[@bs.set] external onclose: (t, closeEvent => unit) => unit = "onclose";
[@bs.set] external onerror: (t, unit => unit) => unit = "onerror";

[@bs.send]
external close: (t, ~code: int=?, ~reason: string=?, unit) => unit = "close";

/* missing send Blob and ArrayBufferView */
[@bs.send]
external send:
  (
    t,
    [@bs.unwrap] [
      | `String(string)
      | `ArrayBuffer(Js.Typed_array.ArrayBuffer.t)
    ]
  ) =>
  unit =
  "send";