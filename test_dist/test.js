/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/Test.bs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./test/Test.bs.js":
/*!*************************!*\
  !*** ./test/Test.bs.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE\n\n\nvar Curry = __webpack_require__(/*! bs-platform/lib/js/curry.js */ \"C:\\\\Users\\\\and\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\bs-platform\\\\lib\\\\js\\\\curry.js\");\nvar Js_json = __webpack_require__(/*! bs-platform/lib/js/js_json.js */ \"C:\\\\Users\\\\and\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\bs-platform\\\\lib\\\\js\\\\js_json.js\");\nvar Belt_Option = __webpack_require__(/*! bs-platform/lib/js/belt_Option.js */ \"C:\\\\Users\\\\and\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\bs-platform\\\\lib\\\\js\\\\belt_Option.js\");\n\nconsole.log(\"hello test\");\n\nvar ws = new WebSocket(\"ws://demos.kaazing.com/echo\", undefined);\n\nws.onclose = (function (e) {\n    console.log(\"close\");\n    console.log(\"code\", e.code);\n    console.log(\"reason\", e.reason);\n    console.log(\"typeof reason\", typeof e.reason);\n    console.log(\"wasClean\", e.wasClean);\n    return /* () */0;\n  });\n\nws.onopen = (function (e) {\n    console.log(\"open\");\n    return /* () */0;\n  });\n\nws.onmessage = (function (e) {\n    console.log(\"msg data\", e.data);\n    console.log(\"msg is string\", Belt_Option.isSome(Js_json.decodeString(e.data)));\n    var f = (\n        data => {\n            var reader = new FileReader();\n            reader.onload = function() {\n                // ABC\n                console.log(reader.result);\n            }\n            reader.readAsText(data);\n        }\n    );\n    return Curry._1(f, e.data);\n  });\n\nsetInterval((function (param) {\n        var ab = new Int8Array(/* array */[\n              65,\n              66,\n              67\n            ]);\n        ws.send(ab.buffer);\n        return /* () */0;\n      }), 2000);\n\nsetTimeout((function (param) {\n        ws.close(3000, \"oops\");\n        return /* () */0;\n      }), 5000);\n\nexports.ws = ws;\n/*  Not a pure module */\n\n\n//# sourceURL=webpack:///./test/Test.bs.js?");

/***/ }),

/***/ "C:\\Users\\and\\AppData\\Roaming\\npm\\node_modules\\bs-platform\\lib\\js\\belt_Option.js":
/*!***************************************************************************************!*\
  !*** C:/Users/and/AppData/Roaming/npm/node_modules/bs-platform/lib/js/belt_Option.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Curry = __webpack_require__(/*! ./curry.js */ \"C:\\\\Users\\\\and\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\bs-platform\\\\lib\\\\js\\\\curry.js\");\nvar Js_primitive = __webpack_require__(/*! ./js_primitive.js */ \"C:\\\\Users\\\\and\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\bs-platform\\\\lib\\\\js\\\\js_primitive.js\");\n\nfunction getExn(param) {\n  if (param !== undefined) {\n    return Js_primitive.valFromOption(param);\n  } else {\n    throw new Error(\"getExn\");\n  }\n}\n\nfunction mapWithDefaultU(opt, $$default, f) {\n  if (opt !== undefined) {\n    return f(Js_primitive.valFromOption(opt));\n  } else {\n    return $$default;\n  }\n}\n\nfunction mapWithDefault(opt, $$default, f) {\n  return mapWithDefaultU(opt, $$default, Curry.__1(f));\n}\n\nfunction mapU(opt, f) {\n  if (opt !== undefined) {\n    return Js_primitive.some(f(Js_primitive.valFromOption(opt)));\n  }\n  \n}\n\nfunction map(opt, f) {\n  return mapU(opt, Curry.__1(f));\n}\n\nfunction flatMapU(opt, f) {\n  if (opt !== undefined) {\n    return f(Js_primitive.valFromOption(opt));\n  }\n  \n}\n\nfunction flatMap(opt, f) {\n  return flatMapU(opt, Curry.__1(f));\n}\n\nfunction getWithDefault(opt, $$default) {\n  if (opt !== undefined) {\n    return Js_primitive.valFromOption(opt);\n  } else {\n    return $$default;\n  }\n}\n\nfunction isSome(param) {\n  return param !== undefined;\n}\n\nfunction isNone(x) {\n  return x === undefined;\n}\n\nfunction eqU(a, b, f) {\n  if (a !== undefined) {\n    if (b !== undefined) {\n      return f(Js_primitive.valFromOption(a), Js_primitive.valFromOption(b));\n    } else {\n      return false;\n    }\n  } else {\n    return b === undefined;\n  }\n}\n\nfunction eq(a, b, f) {\n  return eqU(a, b, Curry.__2(f));\n}\n\nfunction cmpU(a, b, f) {\n  if (a !== undefined) {\n    if (b !== undefined) {\n      return f(Js_primitive.valFromOption(a), Js_primitive.valFromOption(b));\n    } else {\n      return 1;\n    }\n  } else if (b !== undefined) {\n    return -1;\n  } else {\n    return 0;\n  }\n}\n\nfunction cmp(a, b, f) {\n  return cmpU(a, b, Curry.__2(f));\n}\n\nexports.getExn = getExn;\nexports.mapWithDefaultU = mapWithDefaultU;\nexports.mapWithDefault = mapWithDefault;\nexports.mapU = mapU;\nexports.map = map;\nexports.flatMapU = flatMapU;\nexports.flatMap = flatMap;\nexports.getWithDefault = getWithDefault;\nexports.isSome = isSome;\nexports.isNone = isNone;\nexports.eqU = eqU;\nexports.eq = eq;\nexports.cmpU = cmpU;\nexports.cmp = cmp;\n/* No side effect */\n\n\n//# sourceURL=webpack:///C:/Users/and/AppData/Roaming/npm/node_modules/bs-platform/lib/js/belt_Option.js?");

/***/ }),

/***/ "C:\\Users\\and\\AppData\\Roaming\\npm\\node_modules\\bs-platform\\lib\\js\\block.js":
/*!*********************************************************************************!*\
  !*** C:/Users/and/AppData/Roaming/npm/node_modules/bs-platform/lib/js/block.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n\nfunction __(tag, block) {\n  block.tag = tag;\n  return block;\n}\n\nfunction record(meta, xs) {\n  return Object.defineProperty(xs, Symbol.for(\"BsRecord\"), {\n              value: meta\n            });\n}\n\nfunction variant(meta, tag, xs) {\n  xs.tag = tag;\n  return Object.defineProperty(xs, Symbol.for(\"BsVariant\"), {\n              value: meta\n            });\n}\n\nfunction simpleVariant(meta, xs) {\n  return Object.defineProperty(xs, Symbol.for(\"BsVariant\"), {\n              value: meta\n            });\n}\n\nfunction localModule(meta, xs) {\n  return Object.defineProperty(xs, Symbol.for(\"BsLocalModule\"), {\n              value: meta\n            });\n}\n\nfunction polyVar(meta, xs) {\n  return Object.defineProperty(xs, Symbol.for(\"BsPolyVar\"), {\n              value: meta\n            });\n}\n\nexports.__ = __;\nexports.record = record;\nexports.variant = variant;\nexports.simpleVariant = simpleVariant;\nexports.localModule = localModule;\nexports.polyVar = polyVar;\n/* No side effect */\n\n\n//# sourceURL=webpack:///C:/Users/and/AppData/Roaming/npm/node_modules/bs-platform/lib/js/block.js?");

/***/ }),

/***/ "C:\\Users\\and\\AppData\\Roaming\\npm\\node_modules\\bs-platform\\lib\\js\\caml_array.js":
/*!**************************************************************************************!*\
  !*** C:/Users/and/AppData/Roaming/npm/node_modules/bs-platform/lib/js/caml_array.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Caml_builtin_exceptions = __webpack_require__(/*! ./caml_builtin_exceptions.js */ \"C:\\\\Users\\\\and\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\bs-platform\\\\lib\\\\js\\\\caml_builtin_exceptions.js\");\n\nfunction caml_array_sub(x, offset, len) {\n  var result = new Array(len);\n  var j = 0;\n  var i = offset;\n  while(j < len) {\n    result[j] = x[i];\n    j = j + 1 | 0;\n    i = i + 1 | 0;\n  };\n  return result;\n}\n\nfunction len(_acc, _l) {\n  while(true) {\n    var l = _l;\n    var acc = _acc;\n    if (l) {\n      _l = l[1];\n      _acc = l[0].length + acc | 0;\n      continue ;\n    } else {\n      return acc;\n    }\n  };\n}\n\nfunction fill(arr, _i, _l) {\n  while(true) {\n    var l = _l;\n    var i = _i;\n    if (l) {\n      var x = l[0];\n      var l$1 = x.length;\n      var k = i;\n      var j = 0;\n      while(j < l$1) {\n        arr[k] = x[j];\n        k = k + 1 | 0;\n        j = j + 1 | 0;\n      };\n      _l = l[1];\n      _i = k;\n      continue ;\n    } else {\n      return /* () */0;\n    }\n  };\n}\n\nfunction caml_array_concat(l) {\n  var v = len(0, l);\n  var result = new Array(v);\n  fill(result, 0, l);\n  return result;\n}\n\nfunction caml_array_set(xs, index, newval) {\n  if (index < 0 || index >= xs.length) {\n    throw [\n          Caml_builtin_exceptions.invalid_argument,\n          \"index out of bounds\"\n        ];\n  } else {\n    xs[index] = newval;\n    return /* () */0;\n  }\n}\n\nfunction caml_array_get(xs, index) {\n  if (index < 0 || index >= xs.length) {\n    throw [\n          Caml_builtin_exceptions.invalid_argument,\n          \"index out of bounds\"\n        ];\n  } else {\n    return xs[index];\n  }\n}\n\nfunction caml_make_vect(len, init) {\n  var b = new Array(len);\n  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){\n    b[i] = init;\n  }\n  return b;\n}\n\nfunction caml_make_float_vect(len) {\n  var b = new Array(len);\n  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){\n    b[i] = 0;\n  }\n  return b;\n}\n\nfunction caml_array_blit(a1, i1, a2, i2, len) {\n  if (i2 <= i1) {\n    for(var j = 0 ,j_finish = len - 1 | 0; j <= j_finish; ++j){\n      a2[j + i2 | 0] = a1[j + i1 | 0];\n    }\n    return /* () */0;\n  } else {\n    for(var j$1 = len - 1 | 0; j$1 >= 0; --j$1){\n      a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];\n    }\n    return /* () */0;\n  }\n}\n\nfunction caml_array_dup(prim) {\n  return prim.slice(0);\n}\n\nexports.caml_array_dup = caml_array_dup;\nexports.caml_array_sub = caml_array_sub;\nexports.caml_array_concat = caml_array_concat;\nexports.caml_make_vect = caml_make_vect;\nexports.caml_make_float_vect = caml_make_float_vect;\nexports.caml_array_blit = caml_array_blit;\nexports.caml_array_get = caml_array_get;\nexports.caml_array_set = caml_array_set;\n/* No side effect */\n\n\n//# sourceURL=webpack:///C:/Users/and/AppData/Roaming/npm/node_modules/bs-platform/lib/js/caml_array.js?");

/***/ }),

/***/ "C:\\Users\\and\\AppData\\Roaming\\npm\\node_modules\\bs-platform\\lib\\js\\caml_builtin_exceptions.js":
/*!***************************************************************************************************!*\
  !*** C:/Users/and/AppData/Roaming/npm/node_modules/bs-platform/lib/js/caml_builtin_exceptions.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n\nvar out_of_memory = /* tuple */[\n  \"Out_of_memory\",\n  0\n];\n\nvar sys_error = /* tuple */[\n  \"Sys_error\",\n  -1\n];\n\nvar failure = /* tuple */[\n  \"Failure\",\n  -2\n];\n\nvar invalid_argument = /* tuple */[\n  \"Invalid_argument\",\n  -3\n];\n\nvar end_of_file = /* tuple */[\n  \"End_of_file\",\n  -4\n];\n\nvar division_by_zero = /* tuple */[\n  \"Division_by_zero\",\n  -5\n];\n\nvar not_found = /* tuple */[\n  \"Not_found\",\n  -6\n];\n\nvar match_failure = /* tuple */[\n  \"Match_failure\",\n  -7\n];\n\nvar stack_overflow = /* tuple */[\n  \"Stack_overflow\",\n  -8\n];\n\nvar sys_blocked_io = /* tuple */[\n  \"Sys_blocked_io\",\n  -9\n];\n\nvar assert_failure = /* tuple */[\n  \"Assert_failure\",\n  -10\n];\n\nvar undefined_recursive_module = /* tuple */[\n  \"Undefined_recursive_module\",\n  -11\n];\n\nout_of_memory.tag = 248;\n\nsys_error.tag = 248;\n\nfailure.tag = 248;\n\ninvalid_argument.tag = 248;\n\nend_of_file.tag = 248;\n\ndivision_by_zero.tag = 248;\n\nnot_found.tag = 248;\n\nmatch_failure.tag = 248;\n\nstack_overflow.tag = 248;\n\nsys_blocked_io.tag = 248;\n\nassert_failure.tag = 248;\n\nundefined_recursive_module.tag = 248;\n\nexports.out_of_memory = out_of_memory;\nexports.sys_error = sys_error;\nexports.failure = failure;\nexports.invalid_argument = invalid_argument;\nexports.end_of_file = end_of_file;\nexports.division_by_zero = division_by_zero;\nexports.not_found = not_found;\nexports.match_failure = match_failure;\nexports.stack_overflow = stack_overflow;\nexports.sys_blocked_io = sys_blocked_io;\nexports.assert_failure = assert_failure;\nexports.undefined_recursive_module = undefined_recursive_module;\n/*  Not a pure module */\n\n\n//# sourceURL=webpack:///C:/Users/and/AppData/Roaming/npm/node_modules/bs-platform/lib/js/caml_builtin_exceptions.js?");

/***/ }),

/***/ "C:\\Users\\and\\AppData\\Roaming\\npm\\node_modules\\bs-platform\\lib\\js\\curry.js":
/*!*********************************************************************************!*\
  !*** C:/Users/and/AppData/Roaming/npm/node_modules/bs-platform/lib/js/curry.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Caml_array = __webpack_require__(/*! ./caml_array.js */ \"C:\\\\Users\\\\and\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\bs-platform\\\\lib\\\\js\\\\caml_array.js\");\n\nfunction app(_f, _args) {\n  while(true) {\n    var args = _args;\n    var f = _f;\n    var arity = f.length;\n    var len = args.length;\n    var d = arity - len | 0;\n    if (d === 0) {\n      return f.apply(null, args);\n    } else if (d < 0) {\n      _args = Caml_array.caml_array_sub(args, arity, -d | 0);\n      _f = f.apply(null, Caml_array.caml_array_sub(args, 0, arity));\n      continue ;\n    } else {\n      return (function(f,args){\n      return function (x) {\n        return app(f, args.concat(/* array */[x]));\n      }\n      }(f,args));\n    }\n  };\n}\n\nfunction curry_1(o, a0, arity) {\n  switch (arity) {\n    case 1 : \n        return o(a0);\n    case 2 : \n        return (function (param) {\n            return o(a0, param);\n          });\n    case 3 : \n        return (function (param, param$1) {\n            return o(a0, param, param$1);\n          });\n    case 4 : \n        return (function (param, param$1, param$2) {\n            return o(a0, param, param$1, param$2);\n          });\n    case 5 : \n        return (function (param, param$1, param$2, param$3) {\n            return o(a0, param, param$1, param$2, param$3);\n          });\n    case 6 : \n        return (function (param, param$1, param$2, param$3, param$4) {\n            return o(a0, param, param$1, param$2, param$3, param$4);\n          });\n    case 7 : \n        return (function (param, param$1, param$2, param$3, param$4, param$5) {\n            return o(a0, param, param$1, param$2, param$3, param$4, param$5);\n          });\n    default:\n      return app(o, /* array */[a0]);\n  }\n}\n\nfunction _1(o, a0) {\n  var arity = o.length;\n  if (arity === 1) {\n    return o(a0);\n  } else {\n    return curry_1(o, a0, arity);\n  }\n}\n\nfunction __1(o) {\n  var arity = o.length;\n  if (arity === 1) {\n    return o;\n  } else {\n    return (function (a0) {\n        return _1(o, a0);\n      });\n  }\n}\n\nfunction curry_2(o, a0, a1, arity) {\n  switch (arity) {\n    case 1 : \n        return app(o(a0), /* array */[a1]);\n    case 2 : \n        return o(a0, a1);\n    case 3 : \n        return (function (param) {\n            return o(a0, a1, param);\n          });\n    case 4 : \n        return (function (param, param$1) {\n            return o(a0, a1, param, param$1);\n          });\n    case 5 : \n        return (function (param, param$1, param$2) {\n            return o(a0, a1, param, param$1, param$2);\n          });\n    case 6 : \n        return (function (param, param$1, param$2, param$3) {\n            return o(a0, a1, param, param$1, param$2, param$3);\n          });\n    case 7 : \n        return (function (param, param$1, param$2, param$3, param$4) {\n            return o(a0, a1, param, param$1, param$2, param$3, param$4);\n          });\n    default:\n      return app(o, /* array */[\n                  a0,\n                  a1\n                ]);\n  }\n}\n\nfunction _2(o, a0, a1) {\n  var arity = o.length;\n  if (arity === 2) {\n    return o(a0, a1);\n  } else {\n    return curry_2(o, a0, a1, arity);\n  }\n}\n\nfunction __2(o) {\n  var arity = o.length;\n  if (arity === 2) {\n    return o;\n  } else {\n    return (function (a0, a1) {\n        return _2(o, a0, a1);\n      });\n  }\n}\n\nfunction curry_3(o, a0, a1, a2, arity) {\n  switch (arity) {\n    case 1 : \n        return app(o(a0), /* array */[\n                    a1,\n                    a2\n                  ]);\n    case 2 : \n        return app(o(a0, a1), /* array */[a2]);\n    case 3 : \n        return o(a0, a1, a2);\n    case 4 : \n        return (function (param) {\n            return o(a0, a1, a2, param);\n          });\n    case 5 : \n        return (function (param, param$1) {\n            return o(a0, a1, a2, param, param$1);\n          });\n    case 6 : \n        return (function (param, param$1, param$2) {\n            return o(a0, a1, a2, param, param$1, param$2);\n          });\n    case 7 : \n        return (function (param, param$1, param$2, param$3) {\n            return o(a0, a1, a2, param, param$1, param$2, param$3);\n          });\n    default:\n      return app(o, /* array */[\n                  a0,\n                  a1,\n                  a2\n                ]);\n  }\n}\n\nfunction _3(o, a0, a1, a2) {\n  var arity = o.length;\n  if (arity === 3) {\n    return o(a0, a1, a2);\n  } else {\n    return curry_3(o, a0, a1, a2, arity);\n  }\n}\n\nfunction __3(o) {\n  var arity = o.length;\n  if (arity === 3) {\n    return o;\n  } else {\n    return (function (a0, a1, a2) {\n        return _3(o, a0, a1, a2);\n      });\n  }\n}\n\nfunction curry_4(o, a0, a1, a2, a3, arity) {\n  switch (arity) {\n    case 1 : \n        return app(o(a0), /* array */[\n                    a1,\n                    a2,\n                    a3\n                  ]);\n    case 2 : \n        return app(o(a0, a1), /* array */[\n                    a2,\n                    a3\n                  ]);\n    case 3 : \n        return app(o(a0, a1, a2), /* array */[a3]);\n    case 4 : \n        return o(a0, a1, a2, a3);\n    case 5 : \n        return (function (param) {\n            return o(a0, a1, a2, a3, param);\n          });\n    case 6 : \n        return (function (param, param$1) {\n            return o(a0, a1, a2, a3, param, param$1);\n          });\n    case 7 : \n        return (function (param, param$1, param$2) {\n            return o(a0, a1, a2, a3, param, param$1, param$2);\n          });\n    default:\n      return app(o, /* array */[\n                  a0,\n                  a1,\n                  a2,\n                  a3\n                ]);\n  }\n}\n\nfunction _4(o, a0, a1, a2, a3) {\n  var arity = o.length;\n  if (arity === 4) {\n    return o(a0, a1, a2, a3);\n  } else {\n    return curry_4(o, a0, a1, a2, a3, arity);\n  }\n}\n\nfunction __4(o) {\n  var arity = o.length;\n  if (arity === 4) {\n    return o;\n  } else {\n    return (function (a0, a1, a2, a3) {\n        return _4(o, a0, a1, a2, a3);\n      });\n  }\n}\n\nfunction curry_5(o, a0, a1, a2, a3, a4, arity) {\n  switch (arity) {\n    case 1 : \n        return app(o(a0), /* array */[\n                    a1,\n                    a2,\n                    a3,\n                    a4\n                  ]);\n    case 2 : \n        return app(o(a0, a1), /* array */[\n                    a2,\n                    a3,\n                    a4\n                  ]);\n    case 3 : \n        return app(o(a0, a1, a2), /* array */[\n                    a3,\n                    a4\n                  ]);\n    case 4 : \n        return app(o(a0, a1, a2, a3), /* array */[a4]);\n    case 5 : \n        return o(a0, a1, a2, a3, a4);\n    case 6 : \n        return (function (param) {\n            return o(a0, a1, a2, a3, a4, param);\n          });\n    case 7 : \n        return (function (param, param$1) {\n            return o(a0, a1, a2, a3, a4, param, param$1);\n          });\n    default:\n      return app(o, /* array */[\n                  a0,\n                  a1,\n                  a2,\n                  a3,\n                  a4\n                ]);\n  }\n}\n\nfunction _5(o, a0, a1, a2, a3, a4) {\n  var arity = o.length;\n  if (arity === 5) {\n    return o(a0, a1, a2, a3, a4);\n  } else {\n    return curry_5(o, a0, a1, a2, a3, a4, arity);\n  }\n}\n\nfunction __5(o) {\n  var arity = o.length;\n  if (arity === 5) {\n    return o;\n  } else {\n    return (function (a0, a1, a2, a3, a4) {\n        return _5(o, a0, a1, a2, a3, a4);\n      });\n  }\n}\n\nfunction curry_6(o, a0, a1, a2, a3, a4, a5, arity) {\n  switch (arity) {\n    case 1 : \n        return app(o(a0), /* array */[\n                    a1,\n                    a2,\n                    a3,\n                    a4,\n                    a5\n                  ]);\n    case 2 : \n        return app(o(a0, a1), /* array */[\n                    a2,\n                    a3,\n                    a4,\n                    a5\n                  ]);\n    case 3 : \n        return app(o(a0, a1, a2), /* array */[\n                    a3,\n                    a4,\n                    a5\n                  ]);\n    case 4 : \n        return app(o(a0, a1, a2, a3), /* array */[\n                    a4,\n                    a5\n                  ]);\n    case 5 : \n        return app(o(a0, a1, a2, a3, a4), /* array */[a5]);\n    case 6 : \n        return o(a0, a1, a2, a3, a4, a5);\n    case 7 : \n        return (function (param) {\n            return o(a0, a1, a2, a3, a4, a5, param);\n          });\n    default:\n      return app(o, /* array */[\n                  a0,\n                  a1,\n                  a2,\n                  a3,\n                  a4,\n                  a5\n                ]);\n  }\n}\n\nfunction _6(o, a0, a1, a2, a3, a4, a5) {\n  var arity = o.length;\n  if (arity === 6) {\n    return o(a0, a1, a2, a3, a4, a5);\n  } else {\n    return curry_6(o, a0, a1, a2, a3, a4, a5, arity);\n  }\n}\n\nfunction __6(o) {\n  var arity = o.length;\n  if (arity === 6) {\n    return o;\n  } else {\n    return (function (a0, a1, a2, a3, a4, a5) {\n        return _6(o, a0, a1, a2, a3, a4, a5);\n      });\n  }\n}\n\nfunction curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity) {\n  switch (arity) {\n    case 1 : \n        return app(o(a0), /* array */[\n                    a1,\n                    a2,\n                    a3,\n                    a4,\n                    a5,\n                    a6\n                  ]);\n    case 2 : \n        return app(o(a0, a1), /* array */[\n                    a2,\n                    a3,\n                    a4,\n                    a5,\n                    a6\n                  ]);\n    case 3 : \n        return app(o(a0, a1, a2), /* array */[\n                    a3,\n                    a4,\n                    a5,\n                    a6\n                  ]);\n    case 4 : \n        return app(o(a0, a1, a2, a3), /* array */[\n                    a4,\n                    a5,\n                    a6\n                  ]);\n    case 5 : \n        return app(o(a0, a1, a2, a3, a4), /* array */[\n                    a5,\n                    a6\n                  ]);\n    case 6 : \n        return app(o(a0, a1, a2, a3, a4, a5), /* array */[a6]);\n    case 7 : \n        return o(a0, a1, a2, a3, a4, a5, a6);\n    default:\n      return app(o, /* array */[\n                  a0,\n                  a1,\n                  a2,\n                  a3,\n                  a4,\n                  a5,\n                  a6\n                ]);\n  }\n}\n\nfunction _7(o, a0, a1, a2, a3, a4, a5, a6) {\n  var arity = o.length;\n  if (arity === 7) {\n    return o(a0, a1, a2, a3, a4, a5, a6);\n  } else {\n    return curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity);\n  }\n}\n\nfunction __7(o) {\n  var arity = o.length;\n  if (arity === 7) {\n    return o;\n  } else {\n    return (function (a0, a1, a2, a3, a4, a5, a6) {\n        return _7(o, a0, a1, a2, a3, a4, a5, a6);\n      });\n  }\n}\n\nfunction curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity) {\n  switch (arity) {\n    case 1 : \n        return app(o(a0), /* array */[\n                    a1,\n                    a2,\n                    a3,\n                    a4,\n                    a5,\n                    a6,\n                    a7\n                  ]);\n    case 2 : \n        return app(o(a0, a1), /* array */[\n                    a2,\n                    a3,\n                    a4,\n                    a5,\n                    a6,\n                    a7\n                  ]);\n    case 3 : \n        return app(o(a0, a1, a2), /* array */[\n                    a3,\n                    a4,\n                    a5,\n                    a6,\n                    a7\n                  ]);\n    case 4 : \n        return app(o(a0, a1, a2, a3), /* array */[\n                    a4,\n                    a5,\n                    a6,\n                    a7\n                  ]);\n    case 5 : \n        return app(o(a0, a1, a2, a3, a4), /* array */[\n                    a5,\n                    a6,\n                    a7\n                  ]);\n    case 6 : \n        return app(o(a0, a1, a2, a3, a4, a5), /* array */[\n                    a6,\n                    a7\n                  ]);\n    case 7 : \n        return app(o(a0, a1, a2, a3, a4, a5, a6), /* array */[a7]);\n    default:\n      return app(o, /* array */[\n                  a0,\n                  a1,\n                  a2,\n                  a3,\n                  a4,\n                  a5,\n                  a6,\n                  a7\n                ]);\n  }\n}\n\nfunction _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {\n  var arity = o.length;\n  if (arity === 8) {\n    return o(a0, a1, a2, a3, a4, a5, a6, a7);\n  } else {\n    return curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity);\n  }\n}\n\nfunction __8(o) {\n  var arity = o.length;\n  if (arity === 8) {\n    return o;\n  } else {\n    return (function (a0, a1, a2, a3, a4, a5, a6, a7) {\n        return _8(o, a0, a1, a2, a3, a4, a5, a6, a7);\n      });\n  }\n}\n\nexports.app = app;\nexports.curry_1 = curry_1;\nexports._1 = _1;\nexports.__1 = __1;\nexports.curry_2 = curry_2;\nexports._2 = _2;\nexports.__2 = __2;\nexports.curry_3 = curry_3;\nexports._3 = _3;\nexports.__3 = __3;\nexports.curry_4 = curry_4;\nexports._4 = _4;\nexports.__4 = __4;\nexports.curry_5 = curry_5;\nexports._5 = _5;\nexports.__5 = __5;\nexports.curry_6 = curry_6;\nexports._6 = _6;\nexports.__6 = __6;\nexports.curry_7 = curry_7;\nexports._7 = _7;\nexports.__7 = __7;\nexports.curry_8 = curry_8;\nexports._8 = _8;\nexports.__8 = __8;\n/* No side effect */\n\n\n//# sourceURL=webpack:///C:/Users/and/AppData/Roaming/npm/node_modules/bs-platform/lib/js/curry.js?");

/***/ }),

/***/ "C:\\Users\\and\\AppData\\Roaming\\npm\\node_modules\\bs-platform\\lib\\js\\js_json.js":
/*!***********************************************************************************!*\
  !*** C:/Users/and/AppData/Roaming/npm/node_modules/bs-platform/lib/js/js_json.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Block = __webpack_require__(/*! ./block.js */ \"C:\\\\Users\\\\and\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\bs-platform\\\\lib\\\\js\\\\block.js\");\nvar Js_primitive = __webpack_require__(/*! ./js_primitive.js */ \"C:\\\\Users\\\\and\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\bs-platform\\\\lib\\\\js\\\\js_primitive.js\");\n\nfunction classify(x) {\n  var ty = typeof x;\n  if (ty === \"string\") {\n    return /* JSONString */Block.__(0, [x]);\n  } else if (ty === \"number\") {\n    return /* JSONNumber */Block.__(1, [x]);\n  } else if (ty === \"boolean\") {\n    if (x === true) {\n      return /* JSONTrue */1;\n    } else {\n      return /* JSONFalse */0;\n    }\n  } else if (x === null) {\n    return /* JSONNull */2;\n  } else if (Array.isArray(x)) {\n    return /* JSONArray */Block.__(3, [x]);\n  } else {\n    return /* JSONObject */Block.__(2, [x]);\n  }\n}\n\nfunction test(x, v) {\n  switch (v) {\n    case 0 : \n        return typeof x === \"string\";\n    case 1 : \n        return typeof x === \"number\";\n    case 2 : \n        if (x !== null && typeof x === \"object\") {\n          return !Array.isArray(x);\n        } else {\n          return false;\n        }\n    case 3 : \n        return Array.isArray(x);\n    case 4 : \n        return typeof x === \"boolean\";\n    case 5 : \n        return x === null;\n    \n  }\n}\n\nfunction decodeString(json) {\n  if (typeof json === \"string\") {\n    return json;\n  }\n  \n}\n\nfunction decodeNumber(json) {\n  if (typeof json === \"number\") {\n    return json;\n  }\n  \n}\n\nfunction decodeObject(json) {\n  if (typeof json === \"object\" && !Array.isArray(json) && json !== null) {\n    return Js_primitive.some(json);\n  }\n  \n}\n\nfunction decodeArray(json) {\n  if (Array.isArray(json)) {\n    return json;\n  }\n  \n}\n\nfunction decodeBoolean(json) {\n  if (typeof json === \"boolean\") {\n    return json;\n  }\n  \n}\n\nfunction decodeNull(json) {\n  if (json === null) {\n    return null;\n  }\n  \n}\n\nexports.classify = classify;\nexports.test = test;\nexports.decodeString = decodeString;\nexports.decodeNumber = decodeNumber;\nexports.decodeObject = decodeObject;\nexports.decodeArray = decodeArray;\nexports.decodeBoolean = decodeBoolean;\nexports.decodeNull = decodeNull;\n/* No side effect */\n\n\n//# sourceURL=webpack:///C:/Users/and/AppData/Roaming/npm/node_modules/bs-platform/lib/js/js_json.js?");

/***/ }),

/***/ "C:\\Users\\and\\AppData\\Roaming\\npm\\node_modules\\bs-platform\\lib\\js\\js_primitive.js":
/*!****************************************************************************************!*\
  !*** C:/Users/and/AppData/Roaming/npm/node_modules/bs-platform/lib/js/js_primitive.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n\nvar undefinedHeader = /* array */[];\n\nfunction some(x) {\n  if (x === undefined) {\n    var block = /* tuple */[\n      undefinedHeader,\n      0\n    ];\n    block.tag = 256;\n    return block;\n  } else if (x !== null && x[0] === undefinedHeader) {\n    var nid = x[1] + 1 | 0;\n    var block$1 = /* tuple */[\n      undefinedHeader,\n      nid\n    ];\n    block$1.tag = 256;\n    return block$1;\n  } else {\n    return x;\n  }\n}\n\nfunction nullable_to_opt(x) {\n  if (x === null || x === undefined) {\n    return undefined;\n  } else {\n    return some(x);\n  }\n}\n\nfunction undefined_to_opt(x) {\n  if (x === undefined) {\n    return undefined;\n  } else {\n    return some(x);\n  }\n}\n\nfunction null_to_opt(x) {\n  if (x === null) {\n    return undefined;\n  } else {\n    return some(x);\n  }\n}\n\nfunction valFromOption(x) {\n  if (x !== null && x[0] === undefinedHeader) {\n    var depth = x[1];\n    if (depth === 0) {\n      return undefined;\n    } else {\n      return /* tuple */[\n              undefinedHeader,\n              depth - 1 | 0\n            ];\n    }\n  } else {\n    return x;\n  }\n}\n\nfunction option_get(x) {\n  if (x === undefined) {\n    return undefined;\n  } else {\n    return valFromOption(x);\n  }\n}\n\nfunction option_get_unwrap(x) {\n  if (x === undefined) {\n    return undefined;\n  } else {\n    return valFromOption(x)[1];\n  }\n}\n\nexports.nullable_to_opt = nullable_to_opt;\nexports.undefined_to_opt = undefined_to_opt;\nexports.null_to_opt = null_to_opt;\nexports.valFromOption = valFromOption;\nexports.some = some;\nexports.option_get = option_get;\nexports.option_get_unwrap = option_get_unwrap;\n/* No side effect */\n\n\n//# sourceURL=webpack:///C:/Users/and/AppData/Roaming/npm/node_modules/bs-platform/lib/js/js_primitive.js?");

/***/ })

/******/ });