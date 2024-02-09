/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/style-to-object";
exports.ids = ["vendor-chunks/style-to-object"];
exports.modules = {

/***/ "(ssr)/./node_modules/style-to-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/style-to-object/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! inline-style-parser */ \"(ssr)/./node_modules/inline-style-parser/index.js\");\n/**\n * Parses inline style to object.\n *\n * @example\n * // returns { 'line-height': '42' }\n * StyleToObject('line-height: 42;');\n *\n * @param  {String}      style      - The inline style.\n * @param  {Function}    [iterator] - The iterator function.\n * @return {null|Object}\n */ function StyleToObject(style, iterator) {\n    var output = null;\n    if (!style || typeof style !== \"string\") {\n        return output;\n    }\n    var declaration;\n    var declarations = parse(style);\n    var hasIterator = typeof iterator === \"function\";\n    var property;\n    var value;\n    for(var i = 0, len = declarations.length; i < len; i++){\n        declaration = declarations[i];\n        property = declaration.property;\n        value = declaration.value;\n        if (hasIterator) {\n            iterator(property, value, declaration);\n        } else if (value) {\n            output || (output = {});\n            output[property] = value;\n        }\n    }\n    return output;\n}\nmodule.exports = StyleToObject;\nmodule.exports[\"default\"] = StyleToObject; // ESM support\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tb2JqZWN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLElBQUlBLFFBQVFDLG1CQUFPQSxDQUFDO0FBRXBCOzs7Ozs7Ozs7O0NBVUMsR0FDRCxTQUFTQyxjQUFjQyxLQUFLLEVBQUVDLFFBQVE7SUFDcEMsSUFBSUMsU0FBUztJQUNiLElBQUksQ0FBQ0YsU0FBUyxPQUFPQSxVQUFVLFVBQVU7UUFDdkMsT0FBT0U7SUFDVDtJQUVBLElBQUlDO0lBQ0osSUFBSUMsZUFBZVAsTUFBTUc7SUFDekIsSUFBSUssY0FBYyxPQUFPSixhQUFhO0lBQ3RDLElBQUlLO0lBQ0osSUFBSUM7SUFFSixJQUFLLElBQUlDLElBQUksR0FBR0MsTUFBTUwsYUFBYU0sTUFBTSxFQUFFRixJQUFJQyxLQUFLRCxJQUFLO1FBQ3ZETCxjQUFjQyxZQUFZLENBQUNJLEVBQUU7UUFDN0JGLFdBQVdILFlBQVlHLFFBQVE7UUFDL0JDLFFBQVFKLFlBQVlJLEtBQUs7UUFFekIsSUFBSUYsYUFBYTtZQUNmSixTQUFTSyxVQUFVQyxPQUFPSjtRQUM1QixPQUFPLElBQUlJLE9BQU87WUFDaEJMLFVBQVdBLENBQUFBLFNBQVMsQ0FBQztZQUNyQkEsTUFBTSxDQUFDSSxTQUFTLEdBQUdDO1FBQ3JCO0lBQ0Y7SUFFQSxPQUFPTDtBQUNUO0FBRUFTLE9BQU9DLE9BQU8sR0FBR2I7QUFDakJZLHlCQUFzQixHQUFHWixlQUFlLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Lbm93bGVkZ2VHcmFwaFFTLy4vbm9kZV9tb2R1bGVzL3N0eWxlLXRvLW9iamVjdC9pbmRleC5qcz9mMWUwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBwYXJzZSA9IHJlcXVpcmUoJ2lubGluZS1zdHlsZS1wYXJzZXInKTtcblxuLyoqXG4gKiBQYXJzZXMgaW5saW5lIHN0eWxlIHRvIG9iamVjdC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7ICdsaW5lLWhlaWdodCc6ICc0MicgfVxuICogU3R5bGVUb09iamVjdCgnbGluZS1oZWlnaHQ6IDQyOycpO1xuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gICAgICBzdHlsZSAgICAgIC0gVGhlIGlubGluZSBzdHlsZS5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgICBbaXRlcmF0b3JdIC0gVGhlIGl0ZXJhdG9yIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bnVsbHxPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIFN0eWxlVG9PYmplY3Qoc3R5bGUsIGl0ZXJhdG9yKSB7XG4gIHZhciBvdXRwdXQgPSBudWxsO1xuICBpZiAoIXN0eWxlIHx8IHR5cGVvZiBzdHlsZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgdmFyIGRlY2xhcmF0aW9uO1xuICB2YXIgZGVjbGFyYXRpb25zID0gcGFyc2Uoc3R5bGUpO1xuICB2YXIgaGFzSXRlcmF0b3IgPSB0eXBlb2YgaXRlcmF0b3IgPT09ICdmdW5jdGlvbic7XG4gIHZhciBwcm9wZXJ0eTtcbiAgdmFyIHZhbHVlO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkZWNsYXJhdGlvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBkZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uc1tpXTtcbiAgICBwcm9wZXJ0eSA9IGRlY2xhcmF0aW9uLnByb3BlcnR5O1xuICAgIHZhbHVlID0gZGVjbGFyYXRpb24udmFsdWU7XG5cbiAgICBpZiAoaGFzSXRlcmF0b3IpIHtcbiAgICAgIGl0ZXJhdG9yKHByb3BlcnR5LCB2YWx1ZSwgZGVjbGFyYXRpb24pO1xuICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgIG91dHB1dCB8fCAob3V0cHV0ID0ge30pO1xuICAgICAgb3V0cHV0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3R5bGVUb09iamVjdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBTdHlsZVRvT2JqZWN0OyAvLyBFU00gc3VwcG9ydFxuIl0sIm5hbWVzIjpbInBhcnNlIiwicmVxdWlyZSIsIlN0eWxlVG9PYmplY3QiLCJzdHlsZSIsIml0ZXJhdG9yIiwib3V0cHV0IiwiZGVjbGFyYXRpb24iLCJkZWNsYXJhdGlvbnMiLCJoYXNJdGVyYXRvciIsInByb3BlcnR5IiwidmFsdWUiLCJpIiwibGVuIiwibGVuZ3RoIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/style-to-object/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/style-to-object/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/style-to-object/index.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"(ssr)/./node_modules/style-to-object/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_js__WEBPACK_IMPORTED_MODULE_0__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tb2JqZWN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1QztBQUV2QyxpRUFBZUEsc0NBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Lbm93bGVkZ2VHcmFwaFFTLy4vbm9kZV9tb2R1bGVzL3N0eWxlLXRvLW9iamVjdC9pbmRleC5tanM/NzhjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGVUb09iamVjdCBmcm9tICcuL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVUb09iamVjdDtcbiJdLCJuYW1lcyI6WyJTdHlsZVRvT2JqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/style-to-object/index.mjs\n");

/***/ })

};
;