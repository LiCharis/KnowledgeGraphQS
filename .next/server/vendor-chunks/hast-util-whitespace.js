"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-whitespace";
exports.ids = ["vendor-chunks/hast-util-whitespace"];
exports.modules = {

/***/ "(ssr)/./node_modules/hast-util-whitespace/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hast-util-whitespace/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   whitespace: () => (/* binding */ whitespace)\n/* harmony export */ });\n/**\n * Check if the given value is *inter-element whitespace*.\n *\n * @param {unknown} thing\n *   Thing to check (typically `Node` or `string`).\n * @returns {boolean}\n *   Whether the `value` is inter-element whitespace (`boolean`): consisting of\n *   zero or more of space, tab (`\\t`), line feed (`\\n`), carriage return\n *   (`\\r`), or form feed (`\\f`).\n *   If a node is passed it must be a `Text` node, whose `value` field is\n *   checked.\n */ function whitespace(thing) {\n    /** @type {string} */ const value = // @ts-expect-error looks like a node.\n    thing && typeof thing === \"object\" && thing.type === \"text\" ? thing.value || \"\" : thing;\n    // HTML whitespace expression.\n    // See <https://infra.spec.whatwg.org/#ascii-whitespace>.\n    return typeof value === \"string\" && value.replace(/[ \\t\\n\\f\\r]/g, \"\") === \"\";\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXdoaXRlc3BhY2UvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7OztDQVdDLEdBQ00sU0FBU0EsV0FBV0MsS0FBSztJQUM5QixtQkFBbUIsR0FDbkIsTUFBTUMsUUFDSixzQ0FBc0M7SUFDdENELFNBQVMsT0FBT0EsVUFBVSxZQUFZQSxNQUFNRSxJQUFJLEtBQUssU0FFakRGLE1BQU1DLEtBQUssSUFBSSxLQUNmRDtJQUVOLDhCQUE4QjtJQUM5Qix5REFBeUQ7SUFDekQsT0FBTyxPQUFPQyxVQUFVLFlBQVlBLE1BQU1FLE9BQU8sQ0FBQyxnQkFBZ0IsUUFBUTtBQUM1RSIsInNvdXJjZXMiOlsid2VicGFjazovL0tub3dsZWRnZUdyYXBoUVMvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXdoaXRlc3BhY2UvaW5kZXguanM/YzZiNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyAqaW50ZXItZWxlbWVudCB3aGl0ZXNwYWNlKi5cbiAqXG4gKiBAcGFyYW0ge3Vua25vd259IHRoaW5nXG4gKiAgIFRoaW5nIHRvIGNoZWNrICh0eXBpY2FsbHkgYE5vZGVgIG9yIGBzdHJpbmdgKS5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIHRoZSBgdmFsdWVgIGlzIGludGVyLWVsZW1lbnQgd2hpdGVzcGFjZSAoYGJvb2xlYW5gKTogY29uc2lzdGluZyBvZlxuICogICB6ZXJvIG9yIG1vcmUgb2Ygc3BhY2UsIHRhYiAoYFxcdGApLCBsaW5lIGZlZWQgKGBcXG5gKSwgY2FycmlhZ2UgcmV0dXJuXG4gKiAgIChgXFxyYCksIG9yIGZvcm0gZmVlZCAoYFxcZmApLlxuICogICBJZiBhIG5vZGUgaXMgcGFzc2VkIGl0IG11c3QgYmUgYSBgVGV4dGAgbm9kZSwgd2hvc2UgYHZhbHVlYCBmaWVsZCBpc1xuICogICBjaGVja2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gd2hpdGVzcGFjZSh0aGluZykge1xuICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgY29uc3QgdmFsdWUgPVxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgbG9va3MgbGlrZSBhIG5vZGUuXG4gICAgdGhpbmcgJiYgdHlwZW9mIHRoaW5nID09PSAnb2JqZWN0JyAmJiB0aGluZy50eXBlID09PSAndGV4dCdcbiAgICAgID8gLy8gQHRzLWV4cGVjdC1lcnJvciBsb29rcyBsaWtlIGEgdGV4dC5cbiAgICAgICAgdGhpbmcudmFsdWUgfHwgJydcbiAgICAgIDogdGhpbmdcblxuICAvLyBIVE1MIHdoaXRlc3BhY2UgZXhwcmVzc2lvbi5cbiAgLy8gU2VlIDxodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jYXNjaWktd2hpdGVzcGFjZT4uXG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnJlcGxhY2UoL1sgXFx0XFxuXFxmXFxyXS9nLCAnJykgPT09ICcnXG59XG4iXSwibmFtZXMiOlsid2hpdGVzcGFjZSIsInRoaW5nIiwidmFsdWUiLCJ0eXBlIiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hast-util-whitespace/index.js\n");

/***/ })

};
;