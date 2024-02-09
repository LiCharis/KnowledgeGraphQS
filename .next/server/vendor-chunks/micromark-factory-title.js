"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-title";
exports.ids = ["vendor-chunks/micromark-factory-title"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-factory-title/dev/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark-factory-title/dev/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factoryTitle: () => (/* binding */ factoryTitle)\n/* harmony export */ });\n/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-factory-space */ \"(ssr)/./node_modules/micromark-factory-space/dev/index.js\");\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-character */ \"(ssr)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol/codes.js */ \"(ssr)/./node_modules/micromark-util-symbol/codes.js\");\n/* harmony import */ var micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol/constants.js */ \"(ssr)/./node_modules/micromark-util-symbol/constants.js\");\n/* harmony import */ var micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol/types.js */ \"(ssr)/./node_modules/micromark-util-symbol/types.js\");\n/**\n * @typedef {import('micromark-util-types').Code} Code\n * @typedef {import('micromark-util-types').Effects} Effects\n * @typedef {import('micromark-util-types').State} State\n * @typedef {import('micromark-util-types').TokenType} TokenType\n */ \n\n\n\n\n/**\n * Parse titles.\n *\n * ###### Examples\n *\n * ```markdown\n * \"a\"\n * 'b'\n * (c)\n * \"a\n * b\"\n * 'a\n *     b'\n * (a\\)b)\n * ```\n *\n * @param {Effects} effects\n *   Context.\n * @param {State} ok\n *   State switched to when successful.\n * @param {State} nok\n *   State switched to when unsuccessful.\n * @param {TokenType} type\n *   Type of the whole title (`\"a\"`, `'b'`, `(c)`).\n * @param {TokenType} markerType\n *   Type for the markers (`\"`, `'`, `(`, and `)`).\n * @param {TokenType} stringType\n *   Type for the value (`a`).\n * @returns {State}\n *   Start state.\n */ // eslint-disable-next-line max-params\nfunction factoryTitle(effects, ok, nok, type, markerType, stringType) {\n    /** @type {NonNullable<Code>} */ let marker;\n    return start;\n    /**\n   * Start of title.\n   *\n   * ```markdown\n   * > | \"a\"\n   *     ^\n   * ```\n   *\n   * @type {State}\n   */ function start(code) {\n        if (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.quotationMark || code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.apostrophe || code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis) {\n            effects.enter(type);\n            effects.enter(markerType);\n            effects.consume(code);\n            effects.exit(markerType);\n            marker = code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis ? micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis : code;\n            return begin;\n        }\n        return nok(code);\n    }\n    /**\n   * After opening marker.\n   *\n   * This is also used at the closing marker.\n   *\n   * ```markdown\n   * > | \"a\"\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */ function begin(code) {\n        if (code === marker) {\n            effects.enter(markerType);\n            effects.consume(code);\n            effects.exit(markerType);\n            effects.exit(type);\n            return ok;\n        }\n        effects.enter(stringType);\n        return atBreak(code);\n    }\n    /**\n   * At something, before something else.\n   *\n   * ```markdown\n   * > | \"a\"\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */ function atBreak(code) {\n        if (code === marker) {\n            effects.exit(stringType);\n            return begin(marker);\n        }\n        if (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.eof) {\n            return nok(code);\n        }\n        // Note: blank lines can’t exist in content.\n        if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code)) {\n            // To do: use `space_or_tab_eol_with_options`, connect.\n            effects.enter(micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding);\n            effects.consume(code);\n            effects.exit(micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding);\n            return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__.factorySpace)(effects, atBreak, micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_2__.types.linePrefix);\n        }\n        effects.enter(micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_2__.types.chunkString, {\n            contentType: micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_4__.constants.contentTypeString\n        });\n        return inside(code);\n    }\n    /**\n   *\n   *\n   * @type {State}\n   */ function inside(code) {\n        if (code === marker || code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code)) {\n            effects.exit(micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_2__.types.chunkString);\n            return atBreak(code);\n        }\n        effects.consume(code);\n        return code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.backslash ? escape : inside;\n    }\n    /**\n   * After `\\`, at a special character.\n   *\n   * ```markdown\n   * > | \"a\\*b\"\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */ function escape(code) {\n        if (code === marker || code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.backslash) {\n            effects.consume(code);\n            return inside;\n        }\n        return inside(code);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3RvcnktdGl0bGUvZGV2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztDQUtDLEdBRW1EO0FBQ087QUFDUDtBQUNRO0FBQ1I7QUFFcEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQThCQyxHQUNELHNDQUFzQztBQUMvQixTQUFTSyxhQUFhQyxPQUFPLEVBQUVDLEVBQUUsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsVUFBVTtJQUN6RSw4QkFBOEIsR0FDOUIsSUFBSUM7SUFFSixPQUFPQztJQUVQOzs7Ozs7Ozs7R0FTQyxHQUNELFNBQVNBLE1BQU1DLElBQUk7UUFDakIsSUFDRUEsU0FBU1osaUVBQUtBLENBQUNhLGFBQWEsSUFDNUJELFNBQVNaLGlFQUFLQSxDQUFDYyxVQUFVLElBQ3pCRixTQUFTWixpRUFBS0EsQ0FBQ2UsZUFBZSxFQUM5QjtZQUNBWCxRQUFRWSxLQUFLLENBQUNUO1lBQ2RILFFBQVFZLEtBQUssQ0FBQ1I7WUFDZEosUUFBUWEsT0FBTyxDQUFDTDtZQUNoQlIsUUFBUWMsSUFBSSxDQUFDVjtZQUNiRSxTQUFTRSxTQUFTWixpRUFBS0EsQ0FBQ2UsZUFBZSxHQUFHZixpRUFBS0EsQ0FBQ21CLGdCQUFnQixHQUFHUDtZQUNuRSxPQUFPUTtRQUNUO1FBRUEsT0FBT2QsSUFBSU07SUFDYjtJQUVBOzs7Ozs7Ozs7OztHQVdDLEdBQ0QsU0FBU1EsTUFBTVIsSUFBSTtRQUNqQixJQUFJQSxTQUFTRixRQUFRO1lBQ25CTixRQUFRWSxLQUFLLENBQUNSO1lBQ2RKLFFBQVFhLE9BQU8sQ0FBQ0w7WUFDaEJSLFFBQVFjLElBQUksQ0FBQ1Y7WUFDYkosUUFBUWMsSUFBSSxDQUFDWDtZQUNiLE9BQU9GO1FBQ1Q7UUFFQUQsUUFBUVksS0FBSyxDQUFDUDtRQUNkLE9BQU9ZLFFBQVFUO0lBQ2pCO0lBRUE7Ozs7Ozs7OztHQVNDLEdBQ0QsU0FBU1MsUUFBUVQsSUFBSTtRQUNuQixJQUFJQSxTQUFTRixRQUFRO1lBQ25CTixRQUFRYyxJQUFJLENBQUNUO1lBQ2IsT0FBT1csTUFBTVY7UUFDZjtRQUVBLElBQUlFLFNBQVNaLGlFQUFLQSxDQUFDc0IsR0FBRyxFQUFFO1lBQ3RCLE9BQU9oQixJQUFJTTtRQUNiO1FBRUEsNENBQTRDO1FBQzVDLElBQUliLDRFQUFrQkEsQ0FBQ2EsT0FBTztZQUM1Qix1REFBdUQ7WUFDdkRSLFFBQVFZLEtBQUssQ0FBQ2QsaUVBQUtBLENBQUNxQixVQUFVO1lBQzlCbkIsUUFBUWEsT0FBTyxDQUFDTDtZQUNoQlIsUUFBUWMsSUFBSSxDQUFDaEIsaUVBQUtBLENBQUNxQixVQUFVO1lBQzdCLE9BQU96QixxRUFBWUEsQ0FBQ00sU0FBU2lCLFNBQVNuQixpRUFBS0EsQ0FBQ3NCLFVBQVU7UUFDeEQ7UUFFQXBCLFFBQVFZLEtBQUssQ0FBQ2QsaUVBQUtBLENBQUN1QixXQUFXLEVBQUU7WUFBQ0MsYUFBYXpCLHlFQUFTQSxDQUFDMEIsaUJBQWlCO1FBQUE7UUFDMUUsT0FBT0MsT0FBT2hCO0lBQ2hCO0lBRUE7Ozs7R0FJQyxHQUNELFNBQVNnQixPQUFPaEIsSUFBSTtRQUNsQixJQUFJQSxTQUFTRixVQUFVRSxTQUFTWixpRUFBS0EsQ0FBQ3NCLEdBQUcsSUFBSXZCLDRFQUFrQkEsQ0FBQ2EsT0FBTztZQUNyRVIsUUFBUWMsSUFBSSxDQUFDaEIsaUVBQUtBLENBQUN1QixXQUFXO1lBQzlCLE9BQU9KLFFBQVFUO1FBQ2pCO1FBRUFSLFFBQVFhLE9BQU8sQ0FBQ0w7UUFDaEIsT0FBT0EsU0FBU1osaUVBQUtBLENBQUM2QixTQUFTLEdBQUdDLFNBQVNGO0lBQzdDO0lBRUE7Ozs7Ozs7OztHQVNDLEdBQ0QsU0FBU0UsT0FBT2xCLElBQUk7UUFDbEIsSUFBSUEsU0FBU0YsVUFBVUUsU0FBU1osaUVBQUtBLENBQUM2QixTQUFTLEVBQUU7WUFDL0N6QixRQUFRYSxPQUFPLENBQUNMO1lBQ2hCLE9BQU9nQjtRQUNUO1FBRUEsT0FBT0EsT0FBT2hCO0lBQ2hCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Lbm93bGVkZ2VHcmFwaFFTLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LXRpdGxlL2Rldi9pbmRleC5qcz8yYTRmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Db2RlfSBDb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkVmZmVjdHN9IEVmZmVjdHNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuU3RhdGV9IFN0YXRlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuVHlwZX0gVG9rZW5UeXBlXG4gKi9cblxuaW1wb3J0IHtmYWN0b3J5U3BhY2V9IGZyb20gJ21pY3JvbWFyay1mYWN0b3J5LXNwYWNlJ1xuaW1wb3J0IHttYXJrZG93bkxpbmVFbmRpbmd9IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3RlcidcbmltcG9ydCB7Y29kZXN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbC9jb2Rlcy5qcydcbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICdtaWNyb21hcmstdXRpbC1zeW1ib2wvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHt0eXBlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sL3R5cGVzLmpzJ1xuXG4vKipcbiAqIFBhcnNlIHRpdGxlcy5cbiAqXG4gKiAjIyMjIyMgRXhhbXBsZXNcbiAqXG4gKiBgYGBtYXJrZG93blxuICogXCJhXCJcbiAqICdiJ1xuICogKGMpXG4gKiBcImFcbiAqIGJcIlxuICogJ2FcbiAqICAgICBiJ1xuICogKGFcXCliKVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtFZmZlY3RzfSBlZmZlY3RzXG4gKiAgIENvbnRleHQuXG4gKiBAcGFyYW0ge1N0YXRlfSBva1xuICogICBTdGF0ZSBzd2l0Y2hlZCB0byB3aGVuIHN1Y2Nlc3NmdWwuXG4gKiBAcGFyYW0ge1N0YXRlfSBub2tcbiAqICAgU3RhdGUgc3dpdGNoZWQgdG8gd2hlbiB1bnN1Y2Nlc3NmdWwuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gdHlwZVxuICogICBUeXBlIG9mIHRoZSB3aG9sZSB0aXRsZSAoYFwiYVwiYCwgYCdiJ2AsIGAoYylgKS5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSBtYXJrZXJUeXBlXG4gKiAgIFR5cGUgZm9yIHRoZSBtYXJrZXJzIChgXCJgLCBgJ2AsIGAoYCwgYW5kIGApYCkuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gc3RyaW5nVHlwZVxuICogICBUeXBlIGZvciB0aGUgdmFsdWUgKGBhYCkuXG4gKiBAcmV0dXJucyB7U3RhdGV9XG4gKiAgIFN0YXJ0IHN0YXRlLlxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuZXhwb3J0IGZ1bmN0aW9uIGZhY3RvcnlUaXRsZShlZmZlY3RzLCBvaywgbm9rLCB0eXBlLCBtYXJrZXJUeXBlLCBzdHJpbmdUeXBlKSB7XG4gIC8qKiBAdHlwZSB7Tm9uTnVsbGFibGU8Q29kZT59ICovXG4gIGxldCBtYXJrZXJcblxuICByZXR1cm4gc3RhcnRcblxuICAvKipcbiAgICogU3RhcnQgb2YgdGl0bGUuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBcImFcIlxuICAgKiAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IGNvZGVzLnF1b3RhdGlvbk1hcmsgfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLmFwb3N0cm9waGUgfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLmxlZnRQYXJlbnRoZXNpc1xuICAgICkge1xuICAgICAgZWZmZWN0cy5lbnRlcih0eXBlKVxuICAgICAgZWZmZWN0cy5lbnRlcihtYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQobWFya2VyVHlwZSlcbiAgICAgIG1hcmtlciA9IGNvZGUgPT09IGNvZGVzLmxlZnRQYXJlbnRoZXNpcyA/IGNvZGVzLnJpZ2h0UGFyZW50aGVzaXMgOiBjb2RlXG4gICAgICByZXR1cm4gYmVnaW5cbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgb3BlbmluZyBtYXJrZXIuXG4gICAqXG4gICAqIFRoaXMgaXMgYWxzbyB1c2VkIGF0IHRoZSBjbG9zaW5nIG1hcmtlci5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFwiYVwiXG4gICAqICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gYmVnaW4oY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIobWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KG1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmV4aXQodHlwZSlcbiAgICAgIHJldHVybiBva1xuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoc3RyaW5nVHlwZSlcbiAgICByZXR1cm4gYXRCcmVhayhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEF0IHNvbWV0aGluZywgYmVmb3JlIHNvbWV0aGluZyBlbHNlLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgXCJhXCJcbiAgICogICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBhdEJyZWFrKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoc3RyaW5nVHlwZSlcbiAgICAgIHJldHVybiBiZWdpbihtYXJrZXIpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IGNvZGVzLmVvZikge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIC8vIE5vdGU6IGJsYW5rIGxpbmVzIGNhbuKAmXQgZXhpc3QgaW4gY29udGVudC5cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICAvLyBUbyBkbzogdXNlIGBzcGFjZV9vcl90YWJfZW9sX3dpdGhfb3B0aW9uc2AsIGNvbm5lY3QuXG4gICAgICBlZmZlY3RzLmVudGVyKHR5cGVzLmxpbmVFbmRpbmcpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlcy5saW5lRW5kaW5nKVxuICAgICAgcmV0dXJuIGZhY3RvcnlTcGFjZShlZmZlY3RzLCBhdEJyZWFrLCB0eXBlcy5saW5lUHJlZml4KVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIodHlwZXMuY2h1bmtTdHJpbmcsIHtjb250ZW50VHlwZTogY29uc3RhbnRzLmNvbnRlbnRUeXBlU3RyaW5nfSlcbiAgICByZXR1cm4gaW5zaWRlKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gaW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyIHx8IGNvZGUgPT09IGNvZGVzLmVvZiB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlcy5jaHVua1N0cmluZylcbiAgICAgIHJldHVybiBhdEJyZWFrKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGNvZGUgPT09IGNvZGVzLmJhY2tzbGFzaCA/IGVzY2FwZSA6IGluc2lkZVxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGBcXGAsIGF0IGEgc3BlY2lhbCBjaGFyYWN0ZXIuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBcImFcXCpiXCJcbiAgICogICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBlc2NhcGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIgfHwgY29kZSA9PT0gY29kZXMuYmFja3NsYXNoKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBpbnNpZGVcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zaWRlKGNvZGUpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJmYWN0b3J5U3BhY2UiLCJtYXJrZG93bkxpbmVFbmRpbmciLCJjb2RlcyIsImNvbnN0YW50cyIsInR5cGVzIiwiZmFjdG9yeVRpdGxlIiwiZWZmZWN0cyIsIm9rIiwibm9rIiwidHlwZSIsIm1hcmtlclR5cGUiLCJzdHJpbmdUeXBlIiwibWFya2VyIiwic3RhcnQiLCJjb2RlIiwicXVvdGF0aW9uTWFyayIsImFwb3N0cm9waGUiLCJsZWZ0UGFyZW50aGVzaXMiLCJlbnRlciIsImNvbnN1bWUiLCJleGl0IiwicmlnaHRQYXJlbnRoZXNpcyIsImJlZ2luIiwiYXRCcmVhayIsImVvZiIsImxpbmVFbmRpbmciLCJsaW5lUHJlZml4IiwiY2h1bmtTdHJpbmciLCJjb250ZW50VHlwZSIsImNvbnRlbnRUeXBlU3RyaW5nIiwiaW5zaWRlIiwiYmFja3NsYXNoIiwiZXNjYXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-factory-title/dev/index.js\n");

/***/ })

};
;