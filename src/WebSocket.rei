type closeEvent;

[@bs.get] external code: closeEvent => int = "code";
[@bs.get] external reason: closeEvent => string = "reason";
[@bs.get] external wasClean: closeEvent => bool = "wasClean";

type messageEvent;

[@bs.get] external data: messageEvent => Js.Json.t = "data";

type t;

// constructor, avoid external
let make: string => t;

let make2: (string, ~protocol: string) => t;

let make2_: (string, ~protocols: array(string)) => t;

[@bs.set] external onmessage: (t, messageEvent => unit) => unit = "onmessage";
[@bs.set] external onopen: (t, Dom.event => unit) => unit = "onopen";
[@bs.set] external onclose: (t, closeEvent => unit) => unit = "onclose";
[@bs.set] external onerror: (t, Dom.event => unit) => unit = "onerror";

[@bs.send] external close: t => unit = "close";
[@bs.send] external close1: (t, ~code: int) => unit = "close";
[@bs.send] external close2: (t, ~code: int, ~reason: string) => unit = "close";

[@bs.send] external send: (t, WebSocket_Data.t) => unit = "send";

module Data = WebSocket_Data;
