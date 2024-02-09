"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-from-html-isomorphic";
exports.ids = ["vendor-chunks/hast-util-from-html-isomorphic"];
exports.modules = {

/***/ "(ssr)/./node_modules/hast-util-from-html-isomorphic/lib/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/hast-util-from-html-isomorphic/lib/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromHtmlIsomorphic: () => (/* binding */ fromHtmlIsomorphic)\n/* harmony export */ });\n/* harmony import */ var hast_util_from_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hast-util-from-html */ \"(ssr)/./node_modules/hast-util-from-html/lib/index.js\");\n/* harmony import */ var unist_util_remove_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unist-util-remove-position */ \"(ssr)/./node_modules/unist-util-remove-position/lib/index.js\");\n/**\n * @typedef {import('hast').Root} Root\n * @typedef {Pick<import('hast-util-from-html').Options, 'fragment'>} Options\n */ \n\n/**\n * Turn HTML into a syntax tree, using browser APIs when available, so it has\n * a smaller bundle size there.\n *\n * @param {string} value\n *   Serialized HTML to parse.\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n * @returns {Root}\n *   Tree.\n */ function fromHtmlIsomorphic(value, options) {\n    const tree = (0,hast_util_from_html__WEBPACK_IMPORTED_MODULE_0__.fromHtml)(value, options);\n    (0,unist_util_remove_position__WEBPACK_IMPORTED_MODULE_1__.removePosition)(tree, {\n        force: true\n    });\n    delete tree.data;\n    return tree;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWZyb20taHRtbC1pc29tb3JwaGljL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7O0NBR0MsR0FFMkM7QUFDYTtBQUV6RDs7Ozs7Ozs7OztDQVVDLEdBQ00sU0FBU0UsbUJBQW1CQyxLQUFLLEVBQUVDLE9BQU87SUFDL0MsTUFBTUMsT0FBT0wsNkRBQVFBLENBQUNHLE9BQU9DO0lBQzdCSCwwRUFBY0EsQ0FBQ0ksTUFBTTtRQUFDQyxPQUFPO0lBQUk7SUFDakMsT0FBT0QsS0FBS0UsSUFBSTtJQUNoQixPQUFPRjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vS25vd2xlZGdlR3JhcGhRUy8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtZnJvbS1odG1sLWlzb21vcnBoaWMvbGliL2luZGV4LmpzPzNhNWUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUm9vdH0gUm9vdFxuICogQHR5cGVkZWYge1BpY2s8aW1wb3J0KCdoYXN0LXV0aWwtZnJvbS1odG1sJykuT3B0aW9ucywgJ2ZyYWdtZW50Jz59IE9wdGlvbnNcbiAqL1xuXG5pbXBvcnQge2Zyb21IdG1sfSBmcm9tICdoYXN0LXV0aWwtZnJvbS1odG1sJ1xuaW1wb3J0IHtyZW1vdmVQb3NpdGlvbn0gZnJvbSAndW5pc3QtdXRpbC1yZW1vdmUtcG9zaXRpb24nXG5cbi8qKlxuICogVHVybiBIVE1MIGludG8gYSBzeW50YXggdHJlZSwgdXNpbmcgYnJvd3NlciBBUElzIHdoZW4gYXZhaWxhYmxlLCBzbyBpdCBoYXNcbiAqIGEgc21hbGxlciBidW5kbGUgc2l6ZSB0aGVyZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgU2VyaWFsaXplZCBIVE1MIHRvIHBhcnNlLlxuICogQHBhcmFtIHtPcHRpb25zIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdGlvbnNdXG4gKiAgIENvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtSb290fVxuICogICBUcmVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbUh0bWxJc29tb3JwaGljKHZhbHVlLCBvcHRpb25zKSB7XG4gIGNvbnN0IHRyZWUgPSBmcm9tSHRtbCh2YWx1ZSwgb3B0aW9ucylcbiAgcmVtb3ZlUG9zaXRpb24odHJlZSwge2ZvcmNlOiB0cnVlfSlcbiAgZGVsZXRlIHRyZWUuZGF0YVxuICByZXR1cm4gdHJlZVxufVxuIl0sIm5hbWVzIjpbImZyb21IdG1sIiwicmVtb3ZlUG9zaXRpb24iLCJmcm9tSHRtbElzb21vcnBoaWMiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJ0cmVlIiwiZm9yY2UiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hast-util-from-html-isomorphic/lib/index.js\n");

/***/ })

};
;