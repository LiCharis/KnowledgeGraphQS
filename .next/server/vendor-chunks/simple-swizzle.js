/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/simple-swizzle";
exports.ids = ["vendor-chunks/simple-swizzle"];
exports.modules = {

/***/ "(ssr)/./node_modules/simple-swizzle/index.js":
/*!**********************************************!*\
  !*** ./node_modules/simple-swizzle/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar isArrayish = __webpack_require__(/*! is-arrayish */ \"(ssr)/./node_modules/simple-swizzle/node_modules/is-arrayish/index.js\");\nvar concat = Array.prototype.concat;\nvar slice = Array.prototype.slice;\nvar swizzle = module.exports = function swizzle(args) {\n    var results = [];\n    for(var i = 0, len = args.length; i < len; i++){\n        var arg = args[i];\n        if (isArrayish(arg)) {\n            // http://jsperf.com/javascript-array-concat-vs-push/98\n            results = concat.call(results, slice.call(arg));\n        } else {\n            results.push(arg);\n        }\n    }\n    return results;\n};\nswizzle.wrap = function(fn) {\n    return function() {\n        return fn(swizzle(arguments));\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN3aXp6bGUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxhQUFhQyxtQkFBT0EsQ0FBQztBQUV6QixJQUFJQyxTQUFTQyxNQUFNQyxTQUFTLENBQUNGLE1BQU07QUFDbkMsSUFBSUcsUUFBUUYsTUFBTUMsU0FBUyxDQUFDQyxLQUFLO0FBRWpDLElBQUlDLFVBQVVDLE9BQU9DLE9BQU8sR0FBRyxTQUFTRixRQUFRRyxJQUFJO0lBQ25ELElBQUlDLFVBQVUsRUFBRTtJQUVoQixJQUFLLElBQUlDLElBQUksR0FBR0MsTUFBTUgsS0FBS0ksTUFBTSxFQUFFRixJQUFJQyxLQUFLRCxJQUFLO1FBQ2hELElBQUlHLE1BQU1MLElBQUksQ0FBQ0UsRUFBRTtRQUVqQixJQUFJWCxXQUFXYyxNQUFNO1lBQ3BCLHVEQUF1RDtZQUN2REosVUFBVVIsT0FBT2EsSUFBSSxDQUFDTCxTQUFTTCxNQUFNVSxJQUFJLENBQUNEO1FBQzNDLE9BQU87WUFDTkosUUFBUU0sSUFBSSxDQUFDRjtRQUNkO0lBQ0Q7SUFFQSxPQUFPSjtBQUNSO0FBRUFKLFFBQVFXLElBQUksR0FBRyxTQUFVQyxFQUFFO0lBQzFCLE9BQU87UUFDTixPQUFPQSxHQUFHWixRQUFRYTtJQUNuQjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vS25vd2xlZGdlR3JhcGhRUy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3dpenpsZS9pbmRleC5qcz9jOTk4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQXJyYXlpc2ggPSByZXF1aXJlKCdpcy1hcnJheWlzaCcpO1xuXG52YXIgY29uY2F0ID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdDtcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxudmFyIHN3aXp6bGUgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN3aXp6bGUoYXJncykge1xuXHR2YXIgcmVzdWx0cyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcmdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0dmFyIGFyZyA9IGFyZ3NbaV07XG5cblx0XHRpZiAoaXNBcnJheWlzaChhcmcpKSB7XG5cdFx0XHQvLyBodHRwOi8vanNwZXJmLmNvbS9qYXZhc2NyaXB0LWFycmF5LWNvbmNhdC12cy1wdXNoLzk4XG5cdFx0XHRyZXN1bHRzID0gY29uY2F0LmNhbGwocmVzdWx0cywgc2xpY2UuY2FsbChhcmcpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0cy5wdXNoKGFyZyk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdHM7XG59O1xuXG5zd2l6emxlLndyYXAgPSBmdW5jdGlvbiAoZm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZm4oc3dpenpsZShhcmd1bWVudHMpKTtcblx0fTtcbn07XG4iXSwibmFtZXMiOlsiaXNBcnJheWlzaCIsInJlcXVpcmUiLCJjb25jYXQiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwic3dpenpsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcmdzIiwicmVzdWx0cyIsImkiLCJsZW4iLCJsZW5ndGgiLCJhcmciLCJjYWxsIiwicHVzaCIsIndyYXAiLCJmbiIsImFyZ3VtZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/simple-swizzle/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/simple-swizzle/node_modules/is-arrayish/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/simple-swizzle/node_modules/is-arrayish/index.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("module.exports = function isArrayish(obj) {\n    if (!obj || typeof obj === \"string\") {\n        return false;\n    }\n    return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== \"String\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Lbm93bGVkZ2VHcmFwaFFTLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zd2l6emxlL25vZGVfbW9kdWxlcy9pcy1hcnJheWlzaC9pbmRleC5qcz9jNjlkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBcnJheWlzaChvYmopIHtcblx0aWYgKCFvYmogfHwgdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXkgfHwgQXJyYXkuaXNBcnJheShvYmopIHx8XG5cdFx0KG9iai5sZW5ndGggPj0gMCAmJiAob2JqLnNwbGljZSBpbnN0YW5jZW9mIEZ1bmN0aW9uIHx8XG5cdFx0XHQoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIChvYmoubGVuZ3RoIC0gMSkpICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnU3RyaW5nJykpKTtcbn07XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImlzQXJyYXlpc2giLCJvYmoiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJzcGxpY2UiLCJGdW5jdGlvbiIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImNvbnN0cnVjdG9yIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxXQUFXQyxHQUFHO0lBQ3ZDLElBQUksQ0FBQ0EsT0FBTyxPQUFPQSxRQUFRLFVBQVU7UUFDcEMsT0FBTztJQUNSO0lBRUEsT0FBT0EsZUFBZUMsU0FBU0EsTUFBTUMsT0FBTyxDQUFDRixRQUMzQ0EsSUFBSUcsTUFBTSxJQUFJLEtBQU1ILENBQUFBLElBQUlJLE1BQU0sWUFBWUMsWUFDekNDLE9BQU9DLHdCQUF3QixDQUFDUCxLQUFNQSxJQUFJRyxNQUFNLEdBQUcsTUFBT0gsSUFBSVEsV0FBVyxDQUFDQyxJQUFJLEtBQUssUUFBUTtBQUMvRiIsImZpbGUiOiIoc3NyKS8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3dpenpsZS9ub2RlX21vZHVsZXMvaXMtYXJyYXlpc2gvaW5kZXguanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/simple-swizzle/node_modules/is-arrayish/index.js\n");

/***/ })

};
;