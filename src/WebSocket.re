

module CloseEvent = {
    type t;

    [@bs.get] external code: t => int = "code";
    [@bs.get] external reason: t => string = "reason";
    [@bs.get] external wasClean: t => bool = "wasClean";
};

module MessageEvent = {
    type t;

    [@bs.get] external data: t => Js.Json.t = "data";
}

type t;
[@bs.new] external make: (string, ~protocols: [`String(string) |`Strings(array(string)) ]=?, unit) => t = "WebSocket";

[@bs.set] external onmessage: (t, MessageEvent.t => unit) => unit = "onmessage";
[@bs.set] external onopen: (t, unit => unit) => unit = "onopen";
[@bs.set] external onclose: (t, CloseEvent.t => unit) => unit = "onclose";
[@bs.set] external onerror: (t, unit => unit) => unit = "onerror";

[@bs.send] external close: (t, ~code: int=?, ~reason: string=?, unit) => unit = "close";
[@bs.send] external send: (t, [@bs.unwrap] [ `String(string) | `ArrayBuffer(Js.Typed_array.ArrayBuffer.t ) | `Unsafe('a)]) => unit = "send";
