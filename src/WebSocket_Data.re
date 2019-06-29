type t;

/* missing Blob and ArrayBufferView */

external string: string => t = "%identity";
external arrayBuffer: Js.Typed_array.ArrayBuffer.t => t = "%identity";
