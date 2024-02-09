"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-destination";
exports.ids = ["vendor-chunks/micromark-factory-destination"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-factory-destination/dev/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/micromark-factory-destination/dev/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factoryDestination: () => (/* binding */ factoryDestination)\n/* harmony export */ });\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-character */ \"(ssr)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol/codes.js */ \"(ssr)/./node_modules/micromark-util-symbol/codes.js\");\n/* harmony import */ var micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol/constants.js */ \"(ssr)/./node_modules/micromark-util-symbol/constants.js\");\n/* harmony import */ var micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol/types.js */ \"(ssr)/./node_modules/micromark-util-symbol/types.js\");\n/**\n * @typedef {import('micromark-util-types').Effects} Effects\n * @typedef {import('micromark-util-types').State} State\n * @typedef {import('micromark-util-types').TokenType} TokenType\n */ \n\n\n\n/**\n * Parse destinations.\n *\n * ###### Examples\n *\n * ```markdown\n * <a>\n * <a\\>b>\n * <a b>\n * <a)>\n * a\n * a\\)b\n * a(b)c\n * a(b)\n * ```\n *\n * @param {Effects} effects\n *   Context.\n * @param {State} ok\n *   State switched to when successful.\n * @param {State} nok\n *   State switched to when unsuccessful.\n * @param {TokenType} type\n *   Type for whole (`<a>` or `b`).\n * @param {TokenType} literalType\n *   Type when enclosed (`<a>`).\n * @param {TokenType} literalMarkerType\n *   Type for enclosing (`<` and `>`).\n * @param {TokenType} rawType\n *   Type when not enclosed (`b`).\n * @param {TokenType} stringType\n *   Type for the value (`a` or `b`).\n * @param {number | undefined} [max=Infinity]\n *   Depth of nested parens (inclusive).\n * @returns {State}\n *   Start state.\n */ // eslint-disable-next-line max-params\nfunction factoryDestination(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {\n    const limit = max || Number.POSITIVE_INFINITY;\n    let balance = 0;\n    return start;\n    /**\n   * Start of destination.\n   *\n   * ```markdown\n   * > | <aa>\n   *     ^\n   * > | aa\n   *     ^\n   * ```\n   *\n   * @type {State}\n   */ function start(code) {\n        if (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.lessThan) {\n            effects.enter(type);\n            effects.enter(literalType);\n            effects.enter(literalMarkerType);\n            effects.consume(code);\n            effects.exit(literalMarkerType);\n            return enclosedBefore;\n        }\n        // ASCII control, space, closing paren.\n        if (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.eof || code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.space || code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.asciiControl)(code)) {\n            return nok(code);\n        }\n        effects.enter(type);\n        effects.enter(rawType);\n        effects.enter(stringType);\n        effects.enter(micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_2__.types.chunkString, {\n            contentType: micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_3__.constants.contentTypeString\n        });\n        return raw(code);\n    }\n    /**\n   * After `<`, at an enclosed destination.\n   *\n   * ```markdown\n   * > | <aa>\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */ function enclosedBefore(code) {\n        if (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.greaterThan) {\n            effects.enter(literalMarkerType);\n            effects.consume(code);\n            effects.exit(literalMarkerType);\n            effects.exit(literalType);\n            effects.exit(type);\n            return ok;\n        }\n        effects.enter(stringType);\n        effects.enter(micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_2__.types.chunkString, {\n            contentType: micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_3__.constants.contentTypeString\n        });\n        return enclosed(code);\n    }\n    /**\n   * In enclosed destination.\n   *\n   * ```markdown\n   * > | <aa>\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */ function enclosed(code) {\n        if (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.greaterThan) {\n            effects.exit(micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_2__.types.chunkString);\n            effects.exit(stringType);\n            return enclosedBefore(code);\n        }\n        if (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.eof || code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.lessThan || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code)) {\n            return nok(code);\n        }\n        effects.consume(code);\n        return code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.backslash ? enclosedEscape : enclosed;\n    }\n    /**\n   * After `\\`, at a special character.\n   *\n   * ```markdown\n   * > | <a\\*a>\n   *        ^\n   * ```\n   *\n   * @type {State}\n   */ function enclosedEscape(code) {\n        if (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.lessThan || code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.greaterThan || code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.backslash) {\n            effects.consume(code);\n            return enclosed;\n        }\n        return enclosed(code);\n    }\n    /**\n   * In raw destination.\n   *\n   * ```markdown\n   * > | aa\n   *     ^\n   * ```\n   *\n   * @type {State}\n   */ function raw(code) {\n        if (!balance && (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.eof || code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEndingOrSpace)(code))) {\n            effects.exit(micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_2__.types.chunkString);\n            effects.exit(stringType);\n            effects.exit(rawType);\n            effects.exit(type);\n            return ok(code);\n        }\n        if (balance < limit && code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis) {\n            effects.consume(code);\n            balance++;\n            return raw;\n        }\n        if (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis) {\n            effects.consume(code);\n            balance--;\n            return raw;\n        }\n        // ASCII control (but *not* `\\0`) and space and `(`.\n        // Note: in `markdown-rs`, `\\0` exists in codes, in `micromark-js` it\n        // doesn’t.\n        if (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.eof || code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.space || code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.asciiControl)(code)) {\n            return nok(code);\n        }\n        effects.consume(code);\n        return code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.backslash ? rawEscape : raw;\n    }\n    /**\n   * After `\\`, at special character.\n   *\n   * ```markdown\n   * > | a\\*a\n   *       ^\n   * ```\n   *\n   * @type {State}\n   */ function rawEscape(code) {\n        if (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis || code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis || code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.backslash) {\n            effects.consume(code);\n            return raw;\n        }\n        return raw(code);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3RvcnktZGVzdGluYXRpb24vZGV2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Q0FJQyxHQU1nQztBQUNtQjtBQUNRO0FBQ1I7QUFFcEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW9DQyxHQUNELHNDQUFzQztBQUMvQixTQUFTTSxtQkFDZEMsT0FBTyxFQUNQQyxFQUFFLEVBQ0ZDLEdBQUcsRUFDSEMsSUFBSSxFQUNKQyxXQUFXLEVBQ1hDLGlCQUFpQixFQUNqQkMsT0FBTyxFQUNQQyxVQUFVLEVBQ1ZDLEdBQUc7SUFFSCxNQUFNQyxRQUFRRCxPQUFPRSxPQUFPQyxpQkFBaUI7SUFDN0MsSUFBSUMsVUFBVTtJQUVkLE9BQU9DO0lBRVA7Ozs7Ozs7Ozs7O0dBV0MsR0FDRCxTQUFTQSxNQUFNQyxJQUFJO1FBQ2pCLElBQUlBLFNBQVNsQixpRUFBS0EsQ0FBQ21CLFFBQVEsRUFBRTtZQUMzQmYsUUFBUWdCLEtBQUssQ0FBQ2I7WUFDZEgsUUFBUWdCLEtBQUssQ0FBQ1o7WUFDZEosUUFBUWdCLEtBQUssQ0FBQ1g7WUFDZEwsUUFBUWlCLE9BQU8sQ0FBQ0g7WUFDaEJkLFFBQVFrQixJQUFJLENBQUNiO1lBQ2IsT0FBT2M7UUFDVDtRQUVBLHVDQUF1QztRQUN2QyxJQUNFTCxTQUFTbEIsaUVBQUtBLENBQUN3QixHQUFHLElBQ2xCTixTQUFTbEIsaUVBQUtBLENBQUN5QixLQUFLLElBQ3BCUCxTQUFTbEIsaUVBQUtBLENBQUMwQixnQkFBZ0IsSUFDL0I3QixzRUFBWUEsQ0FBQ3FCLE9BQ2I7WUFDQSxPQUFPWixJQUFJWTtRQUNiO1FBRUFkLFFBQVFnQixLQUFLLENBQUNiO1FBQ2RILFFBQVFnQixLQUFLLENBQUNWO1FBQ2ROLFFBQVFnQixLQUFLLENBQUNUO1FBQ2RQLFFBQVFnQixLQUFLLENBQUNsQixpRUFBS0EsQ0FBQ3lCLFdBQVcsRUFBRTtZQUFDQyxhQUFh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U00sVUFBVWxCLElBQUk7UUFDckIsSUFDRUEsU0FBU2xCLGlFQUFLQSxDQUFDbUMsZUFBZSxJQUM5QmpCLFNBQVNsQixpRUFBS0EsQ0FBQzBCLGdCQUFnQixJQUMvQlIsU0FBU2xCLGlFQUFLQSxDQUFDaUMsU0FBUyxFQUN4QjtZQUNBN0IsUUFBUWlCLE9BQU8sQ0FBQ0g7WUFDaEIsT0FBT1k7UUFDVDtRQUVBLE9BQU9BLElBQUlaO0lBQ2I7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL0tub3dsZWRnZUdyYXBoUVMvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3RvcnktZGVzdGluYXRpb24vZGV2L2luZGV4LmpzP2Y4MTciXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkVmZmVjdHN9IEVmZmVjdHNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuU3RhdGV9IFN0YXRlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuVHlwZX0gVG9rZW5UeXBlXG4gKi9cblxuaW1wb3J0IHtcbiAgYXNjaWlDb250cm9sLFxuICBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlLFxuICBtYXJrZG93bkxpbmVFbmRpbmdcbn0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyJ1xuaW1wb3J0IHtjb2Rlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sL2NvZGVzLmpzJ1xuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbC9jb25zdGFudHMuanMnXG5pbXBvcnQge3R5cGVzfSBmcm9tICdtaWNyb21hcmstdXRpbC1zeW1ib2wvdHlwZXMuanMnXG5cbi8qKlxuICogUGFyc2UgZGVzdGluYXRpb25zLlxuICpcbiAqICMjIyMjIyBFeGFtcGxlc1xuICpcbiAqIGBgYG1hcmtkb3duXG4gKiA8YT5cbiAqIDxhXFw+Yj5cbiAqIDxhIGI+XG4gKiA8YSk+XG4gKiBhXG4gKiBhXFwpYlxuICogYShiKWNcbiAqIGEoYilcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7RWZmZWN0c30gZWZmZWN0c1xuICogICBDb250ZXh0LlxuICogQHBhcmFtIHtTdGF0ZX0gb2tcbiAqICAgU3RhdGUgc3dpdGNoZWQgdG8gd2hlbiBzdWNjZXNzZnVsLlxuICogQHBhcmFtIHtTdGF0ZX0gbm9rXG4gKiAgIFN0YXRlIHN3aXRjaGVkIHRvIHdoZW4gdW5zdWNjZXNzZnVsLlxuICogQHBhcmFtIHtUb2tlblR5cGV9IHR5cGVcbiAqICAgVHlwZSBmb3Igd2hvbGUgKGA8YT5gIG9yIGBiYCkuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gbGl0ZXJhbFR5cGVcbiAqICAgVHlwZSB3aGVuIGVuY2xvc2VkIChgPGE+YCkuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gbGl0ZXJhbE1hcmtlclR5cGVcbiAqICAgVHlwZSBmb3IgZW5jbG9zaW5nIChgPGAgYW5kIGA+YCkuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gcmF3VHlwZVxuICogICBUeXBlIHdoZW4gbm90IGVuY2xvc2VkIChgYmApLlxuICogQHBhcmFtIHtUb2tlblR5cGV9IHN0cmluZ1R5cGVcbiAqICAgVHlwZSBmb3IgdGhlIHZhbHVlIChgYWAgb3IgYGJgKS5cbiAqIEBwYXJhbSB7bnVtYmVyIHwgdW5kZWZpbmVkfSBbbWF4PUluZmluaXR5XVxuICogICBEZXB0aCBvZiBuZXN0ZWQgcGFyZW5zIChpbmNsdXNpdmUpLlxuICogQHJldHVybnMge1N0YXRlfVxuICogICBTdGFydCBzdGF0ZS5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcbmV4cG9ydCBmdW5jdGlvbiBmYWN0b3J5RGVzdGluYXRpb24oXG4gIGVmZmVjdHMsXG4gIG9rLFxuICBub2ssXG4gIHR5cGUsXG4gIGxpdGVyYWxUeXBlLFxuICBsaXRlcmFsTWFya2VyVHlwZSxcbiAgcmF3VHlwZSxcbiAgc3RyaW5nVHlwZSxcbiAgbWF4XG4pIHtcbiAgY29uc3QgbGltaXQgPSBtYXggfHwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXG4gIGxldCBiYWxhbmNlID0gMFxuXG4gIHJldHVybiBzdGFydFxuXG4gIC8qKlxuICAgKiBTdGFydCBvZiBkZXN0aW5hdGlvbi5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IDxhYT5cbiAgICogICAgIF5cbiAgICogPiB8IGFhXG4gICAqICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IGNvZGVzLmxlc3NUaGFuKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKHR5cGUpXG4gICAgICBlZmZlY3RzLmVudGVyKGxpdGVyYWxUeXBlKVxuICAgICAgZWZmZWN0cy5lbnRlcihsaXRlcmFsTWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KGxpdGVyYWxNYXJrZXJUeXBlKVxuICAgICAgcmV0dXJuIGVuY2xvc2VkQmVmb3JlXG4gICAgfVxuXG4gICAgLy8gQVNDSUkgY29udHJvbCwgc3BhY2UsIGNsb3NpbmcgcGFyZW4uXG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gY29kZXMuZW9mIHx8XG4gICAgICBjb2RlID09PSBjb2Rlcy5zcGFjZSB8fFxuICAgICAgY29kZSA9PT0gY29kZXMucmlnaHRQYXJlbnRoZXNpcyB8fFxuICAgICAgYXNjaWlDb250cm9sKGNvZGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcih0eXBlKVxuICAgIGVmZmVjdHMuZW50ZXIocmF3VHlwZSlcbiAgICBlZmZlY3RzLmVudGVyKHN0cmluZ1R5cGUpXG4gICAgZWZmZWN0cy5lbnRlcih0eXBlcy5jaHVua1N0cmluZywge2NvbnRlbnRUeXBlOiBjb25zdGFudHMuY29udGVudFR5cGVTdHJpbmd9KVxuICAgIHJldHVybiByYXcoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBgPGAsIGF0IGFuIGVuY2xvc2VkIGRlc3RpbmF0aW9uLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgPGFhPlxuICAgKiAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGVuY2xvc2VkQmVmb3JlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gY29kZXMuZ3JlYXRlclRoYW4pIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIobGl0ZXJhbE1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdChsaXRlcmFsTWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuZXhpdChsaXRlcmFsVHlwZSlcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlKVxuICAgICAgcmV0dXJuIG9rXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcihzdHJpbmdUeXBlKVxuICAgIGVmZmVjdHMuZW50ZXIodHlwZXMuY2h1bmtTdHJpbmcsIHtjb250ZW50VHlwZTogY29uc3RhbnRzLmNvbnRlbnRUeXBlU3RyaW5nfSlcbiAgICByZXR1cm4gZW5jbG9zZWQoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBlbmNsb3NlZCBkZXN0aW5hdGlvbi5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IDxhYT5cbiAgICogICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBlbmNsb3NlZChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IGNvZGVzLmdyZWF0ZXJUaGFuKSB7XG4gICAgICBlZmZlY3RzLmV4aXQodHlwZXMuY2h1bmtTdHJpbmcpXG4gICAgICBlZmZlY3RzLmV4aXQoc3RyaW5nVHlwZSlcbiAgICAgIHJldHVybiBlbmNsb3NlZEJlZm9yZShjb2RlKVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IGNvZGVzLmVvZiB8fFxuICAgICAgY29kZSA9PT0gY29kZXMubGVzc1RoYW4gfHxcbiAgICAgIG1hcmtkb3duTGluZUVuZGluZyhjb2RlKVxuICAgICkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjb2RlID09PSBjb2Rlcy5iYWNrc2xhc2ggPyBlbmNsb3NlZEVzY2FwZSA6IGVuY2xvc2VkXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgYFxcYCwgYXQgYSBzcGVjaWFsIGNoYXJhY3Rlci5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IDxhXFwqYT5cbiAgICogICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGVuY2xvc2VkRXNjYXBlKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBjb2Rlcy5sZXNzVGhhbiB8fFxuICAgICAgY29kZSA9PT0gY29kZXMuZ3JlYXRlclRoYW4gfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLmJhY2tzbGFzaFxuICAgICkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gZW5jbG9zZWRcbiAgICB9XG5cbiAgICByZXR1cm4gZW5jbG9zZWQoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiByYXcgZGVzdGluYXRpb24uXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBhYVxuICAgKiAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gcmF3KGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICAhYmFsYW5jZSAmJlxuICAgICAgKGNvZGUgPT09IGNvZGVzLmVvZiB8fFxuICAgICAgICBjb2RlID09PSBjb2Rlcy5yaWdodFBhcmVudGhlc2lzIHx8XG4gICAgICAgIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkpXG4gICAgKSB7XG4gICAgICBlZmZlY3RzLmV4aXQodHlwZXMuY2h1bmtTdHJpbmcpXG4gICAgICBlZmZlY3RzLmV4aXQoc3RyaW5nVHlwZSlcbiAgICAgIGVmZmVjdHMuZXhpdChyYXdUeXBlKVxuICAgICAgZWZmZWN0cy5leGl0KHR5cGUpXG4gICAgICByZXR1cm4gb2soY29kZSlcbiAgICB9XG5cbiAgICBpZiAoYmFsYW5jZSA8IGxpbWl0ICYmIGNvZGUgPT09IGNvZGVzLmxlZnRQYXJlbnRoZXNpcykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBiYWxhbmNlKytcbiAgICAgIHJldHVybiByYXdcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gY29kZXMucmlnaHRQYXJlbnRoZXNpcykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBiYWxhbmNlLS1cbiAgICAgIHJldHVybiByYXdcbiAgICB9XG5cbiAgICAvLyBBU0NJSSBjb250cm9sIChidXQgKm5vdCogYFxcMGApIGFuZCBzcGFjZSBhbmQgYChgLlxuICAgIC8vIE5vdGU6IGluIGBtYXJrZG93bi1yc2AsIGBcXDBgIGV4aXN0cyBpbiBjb2RlcywgaW4gYG1pY3JvbWFyay1qc2AgaXRcbiAgICAvLyBkb2VzbuKAmXQuXG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gY29kZXMuZW9mIHx8XG4gICAgICBjb2RlID09PSBjb2Rlcy5zcGFjZSB8fFxuICAgICAgY29kZSA9PT0gY29kZXMubGVmdFBhcmVudGhlc2lzIHx8XG4gICAgICBhc2NpaUNvbnRyb2woY29kZSlcbiAgICApIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29kZSA9PT0gY29kZXMuYmFja3NsYXNoID8gcmF3RXNjYXBlIDogcmF3XG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgYFxcYCwgYXQgc3BlY2lhbCBjaGFyYWN0ZXIuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBhXFwqYVxuICAgKiAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiByYXdFc2NhcGUoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IGNvZGVzLmxlZnRQYXJlbnRoZXNpcyB8fFxuICAgICAgY29kZSA9PT0gY29kZXMucmlnaHRQYXJlbnRoZXNpcyB8fFxuICAgICAgY29kZSA9PT0gY29kZXMuYmFja3NsYXNoXG4gICAgKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiByYXdcbiAgICB9XG5cbiAgICByZXR1cm4gcmF3KGNvZGUpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJhc2NpaUNvbnRyb2wiLCJtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlIiwibWFya2Rvd25MaW5lRW5kaW5nIiwiY29kZXMiLCJjb25zdGFudHMiLCJ0eXBlcyIsImZhY3RvcnlEZXN0aW5hdGlvbiIsImVmZmVjdHMiLCJvayIsIm5vayIsInR5cGUiLCJsaXRlcmFsVHlwZSIsImxpdGVyYWxNYXJrZXJUeXBlIiwicmF3VHlwZSIsInN0cmluZ1R5cGUiLCJtYXgiLCJsaW1pdCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwiYmFsYW5jZSIsInN0YXJ0IiwiY29kZSIsImxlc3NUaGFuIiwiZW50ZXIiLCJjb25zdW1lIiwiZXhpdCIsImVuY2xvc2VkQmVmb3JlIiwiZW9mIiwic3BhY2UiLCJyaWdodFBhcmVudGhlc2lzIiwiY2h1bmtTdHJpbmciLCJjb250ZW50VHlwZSIsImNvbnRlbnRUeXBlU3RyaW5nIiwicmF3IiwiZ3JlYXRlclRoYW4iLCJlbmNsb3NlZCIsImJhY2tzbGFzaCIsImVuY2xvc2VkRXNjYXBlIiwibGVmdFBhcmVudGhlc2lzIiwicmF3RXNjYXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-factory-destination/dev/index.js\n");

/***/ })

};
;