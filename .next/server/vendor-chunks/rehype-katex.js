"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rehype-katex";
exports.ids = ["vendor-chunks/rehype-katex"];
exports.modules = {

/***/ "(ssr)/./node_modules/rehype-katex/index.js":
/*!********************************************!*\
  !*** ./node_modules/rehype-katex/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rehypeKatex)\n/* harmony export */ });\n/* harmony import */ var katex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! katex */ \"(ssr)/./node_modules/katex/dist/katex.mjs\");\n/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unist-util-visit */ \"(ssr)/./node_modules/unist-util-visit/lib/index.js\");\n/* harmony import */ var hast_util_to_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hast-util-to-text */ \"(ssr)/./node_modules/hast-util-to-text/lib/index.js\");\n/* harmony import */ var hast_util_from_html_isomorphic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hast-util-from-html-isomorphic */ \"(ssr)/./node_modules/hast-util-from-html-isomorphic/lib/index.js\");\n/**\n * @typedef {import('hast').Root} Root\n * @typedef {import('katex').KatexOptions} Options\n */ \n\n\n\nconst assign = Object.assign;\nconst source = \"rehype-katex\";\n/**\n * Plugin to transform `<span class=math-inline>` and `<div class=math-display>`\n * with KaTeX.\n *\n * @type {import('unified').Plugin<[Options?]|void[], Root>}\n */ function rehypeKatex(options) {\n    const settings = options || {};\n    const throwOnError = settings.throwOnError || false;\n    return (tree, file)=>{\n        (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_1__.visit)(tree, \"element\", (element)=>{\n            const classes = element.properties && Array.isArray(element.properties.className) ? element.properties.className : [];\n            const inline = classes.includes(\"math-inline\");\n            const displayMode = classes.includes(\"math-display\");\n            if (!inline && !displayMode) {\n                return;\n            }\n            const value = (0,hast_util_to_text__WEBPACK_IMPORTED_MODULE_2__.toText)(element, {\n                whitespace: \"pre\"\n            });\n            /** @type {string} */ let result;\n            try {\n                result = katex__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderToString(value, assign({}, settings, {\n                    displayMode,\n                    throwOnError: true\n                }));\n            } catch (error_) {\n                const error = /** @type {Error} */ error_;\n                const fn = throwOnError ? \"fail\" : \"message\";\n                const origin = [\n                    source,\n                    error.name.toLowerCase()\n                ].join(\":\");\n                file[fn](error.message, element.position, origin);\n                // KaTeX can handle `ParseError` itself, but not others.\n                // Generate similar markup if this is an other error.\n                // See: <https://github.com/KaTeX/KaTeX/blob/5dc7af0/docs/error.md>.\n                if (error.name !== \"ParseError\") {\n                    element.children = [\n                        {\n                            type: \"element\",\n                            tagName: \"span\",\n                            properties: {\n                                className: [\n                                    \"katex-error\"\n                                ],\n                                title: String(error),\n                                style: \"color:\" + (settings.errorColor || \"#cc0000\")\n                            },\n                            children: [\n                                {\n                                    type: \"text\",\n                                    value\n                                }\n                            ]\n                        }\n                    ];\n                    return;\n                }\n                result = katex__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderToString(value, assign({}, settings, {\n                    displayMode,\n                    throwOnError: false,\n                    strict: \"ignore\"\n                }));\n            }\n            const root = (0,hast_util_from_html_isomorphic__WEBPACK_IMPORTED_MODULE_3__.fromHtmlIsomorphic)(result, {\n                fragment: true\n            });\n            // @ts-expect-error: assume no `doctypes` in KaTeX result.\n            element.children = root.children;\n        });\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVoeXBlLWthdGV4L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7OztDQUdDLEdBRXdCO0FBQ2E7QUFDRTtBQUN5QjtBQUVqRSxNQUFNSSxTQUFTQyxPQUFPRCxNQUFNO0FBRTVCLE1BQU1FLFNBQVM7QUFFZjs7Ozs7Q0FLQyxHQUNjLFNBQVNDLFlBQVlDLE9BQU87SUFDekMsTUFBTUMsV0FBV0QsV0FBVyxDQUFDO0lBQzdCLE1BQU1FLGVBQWVELFNBQVNDLFlBQVksSUFBSTtJQUU5QyxPQUFPLENBQUNDLE1BQU1DO1FBQ1pYLHVEQUFLQSxDQUFDVSxNQUFNLFdBQVcsQ0FBQ0U7WUFDdEIsTUFBTUMsVUFDSkQsUUFBUUUsVUFBVSxJQUFJQyxNQUFNQyxPQUFPLENBQUNKLFFBQVFFLFVBQVUsQ0FBQ0csU0FBUyxJQUM1REwsUUFBUUUsVUFBVSxDQUFDRyxTQUFTLEdBQzVCLEVBQUU7WUFDUixNQUFNQyxTQUFTTCxRQUFRTSxRQUFRLENBQUM7WUFDaEMsTUFBTUMsY0FBY1AsUUFBUU0sUUFBUSxDQUFDO1lBRXJDLElBQUksQ0FBQ0QsVUFBVSxDQUFDRSxhQUFhO2dCQUMzQjtZQUNGO1lBRUEsTUFBTUMsUUFBUXBCLHlEQUFNQSxDQUFDVyxTQUFTO2dCQUFDVSxZQUFZO1lBQUs7WUFFaEQsbUJBQW1CLEdBQ25CLElBQUlDO1lBRUosSUFBSTtnQkFDRkEsU0FBU3hCLDZDQUFLQSxDQUFDeUIsY0FBYyxDQUMzQkgsT0FDQWxCLE9BQU8sQ0FBQyxHQUFHSyxVQUFVO29CQUFDWTtvQkFBYVgsY0FBYztnQkFBSTtZQUV6RCxFQUFFLE9BQU9nQixRQUFRO2dCQUNmLE1BQU1DLFFBQVEsa0JBQWtCLEdBQUlEO2dCQUNwQyxNQUFNRSxLQUFLbEIsZUFBZSxTQUFTO2dCQUNuQyxNQUFNbUIsU0FBUztvQkFBQ3ZCO29CQUFRcUIsTUFBTUcsSUFBSSxDQUFDQyxXQUFXO2lCQUFHLENBQUNDLElBQUksQ0FBQztnQkFFdkRwQixJQUFJLENBQUNnQixHQUFHLENBQUNELE1BQU1NLE9BQU8sRUFBRXBCLFFBQVFxQixRQUFRLEVBQUVMO2dCQUUxQyx3REFBd0Q7Z0JBQ3hELHFEQUFxRDtnQkFDckQsb0VBQW9FO2dCQUNwRSxJQUFJRixNQUFNRyxJQUFJLEtBQUssY0FBYztvQkFDL0JqQixRQUFRc0IsUUFBUSxHQUFHO3dCQUNqQjs0QkFDRUMsTUFBTTs0QkFDTkMsU0FBUzs0QkFDVHRCLFlBQVk7Z0NBQ1ZHLFdBQVc7b0NBQUM7aUNBQWM7Z0NBQzFCb0IsT0FBT0MsT0FBT1o7Z0NBQ2RhLE9BQU8sV0FBWS9CLENBQUFBLFNBQVNnQyxVQUFVLElBQUksU0FBUTs0QkFDcEQ7NEJBQ0FOLFVBQVU7Z0NBQUM7b0NBQUNDLE1BQU07b0NBQVFkO2dDQUFLOzZCQUFFO3dCQUNuQztxQkFDRDtvQkFDRDtnQkFDRjtnQkFFQUUsU0FBU3hCLDZDQUFLQSxDQUFDeUIsY0FBYyxDQUMzQkgsT0FDQWxCLE9BQU8sQ0FBQyxHQUFHSyxVQUFVO29CQUNuQlk7b0JBQ0FYLGNBQWM7b0JBQ2RnQyxRQUFRO2dCQUNWO1lBRUo7WUFFQSxNQUFNQyxPQUFPeEMsa0ZBQWtCQSxDQUFDcUIsUUFBUTtnQkFBQ29CLFVBQVU7WUFBSTtZQUN2RCwwREFBMEQ7WUFDMUQvQixRQUFRc0IsUUFBUSxHQUFHUSxLQUFLUixRQUFRO1FBQ2xDO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL0tub3dsZWRnZUdyYXBoUVMvLi9ub2RlX21vZHVsZXMvcmVoeXBlLWthdGV4L2luZGV4LmpzPzFiNzIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUm9vdH0gUm9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgna2F0ZXgnKS5LYXRleE9wdGlvbnN9IE9wdGlvbnNcbiAqL1xuXG5pbXBvcnQga2F0ZXggZnJvbSAna2F0ZXgnXG5pbXBvcnQge3Zpc2l0fSBmcm9tICd1bmlzdC11dGlsLXZpc2l0J1xuaW1wb3J0IHt0b1RleHR9IGZyb20gJ2hhc3QtdXRpbC10by10ZXh0J1xuaW1wb3J0IHtmcm9tSHRtbElzb21vcnBoaWN9IGZyb20gJ2hhc3QtdXRpbC1mcm9tLWh0bWwtaXNvbW9ycGhpYydcblxuY29uc3QgYXNzaWduID0gT2JqZWN0LmFzc2lnblxuXG5jb25zdCBzb3VyY2UgPSAncmVoeXBlLWthdGV4J1xuXG4vKipcbiAqIFBsdWdpbiB0byB0cmFuc2Zvcm0gYDxzcGFuIGNsYXNzPW1hdGgtaW5saW5lPmAgYW5kIGA8ZGl2IGNsYXNzPW1hdGgtZGlzcGxheT5gXG4gKiB3aXRoIEthVGVYLlxuICpcbiAqIEB0eXBlIHtpbXBvcnQoJ3VuaWZpZWQnKS5QbHVnaW48W09wdGlvbnM/XXx2b2lkW10sIFJvb3Q+fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWh5cGVLYXRleChvcHRpb25zKSB7XG4gIGNvbnN0IHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICBjb25zdCB0aHJvd09uRXJyb3IgPSBzZXR0aW5ncy50aHJvd09uRXJyb3IgfHwgZmFsc2VcblxuICByZXR1cm4gKHRyZWUsIGZpbGUpID0+IHtcbiAgICB2aXNpdCh0cmVlLCAnZWxlbWVudCcsIChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBjbGFzc2VzID1cbiAgICAgICAgZWxlbWVudC5wcm9wZXJ0aWVzICYmIEFycmF5LmlzQXJyYXkoZWxlbWVudC5wcm9wZXJ0aWVzLmNsYXNzTmFtZSlcbiAgICAgICAgICA/IGVsZW1lbnQucHJvcGVydGllcy5jbGFzc05hbWVcbiAgICAgICAgICA6IFtdXG4gICAgICBjb25zdCBpbmxpbmUgPSBjbGFzc2VzLmluY2x1ZGVzKCdtYXRoLWlubGluZScpXG4gICAgICBjb25zdCBkaXNwbGF5TW9kZSA9IGNsYXNzZXMuaW5jbHVkZXMoJ21hdGgtZGlzcGxheScpXG5cbiAgICAgIGlmICghaW5saW5lICYmICFkaXNwbGF5TW9kZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsdWUgPSB0b1RleHQoZWxlbWVudCwge3doaXRlc3BhY2U6ICdwcmUnfSlcblxuICAgICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgICBsZXQgcmVzdWx0XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdCA9IGthdGV4LnJlbmRlclRvU3RyaW5nKFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIGFzc2lnbih7fSwgc2V0dGluZ3MsIHtkaXNwbGF5TW9kZSwgdGhyb3dPbkVycm9yOiB0cnVlfSlcbiAgICAgICAgKVxuICAgICAgfSBjYXRjaCAoZXJyb3JfKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gLyoqIEB0eXBlIHtFcnJvcn0gKi8gKGVycm9yXylcbiAgICAgICAgY29uc3QgZm4gPSB0aHJvd09uRXJyb3IgPyAnZmFpbCcgOiAnbWVzc2FnZSdcbiAgICAgICAgY29uc3Qgb3JpZ2luID0gW3NvdXJjZSwgZXJyb3IubmFtZS50b0xvd2VyQ2FzZSgpXS5qb2luKCc6JylcblxuICAgICAgICBmaWxlW2ZuXShlcnJvci5tZXNzYWdlLCBlbGVtZW50LnBvc2l0aW9uLCBvcmlnaW4pXG5cbiAgICAgICAgLy8gS2FUZVggY2FuIGhhbmRsZSBgUGFyc2VFcnJvcmAgaXRzZWxmLCBidXQgbm90IG90aGVycy5cbiAgICAgICAgLy8gR2VuZXJhdGUgc2ltaWxhciBtYXJrdXAgaWYgdGhpcyBpcyBhbiBvdGhlciBlcnJvci5cbiAgICAgICAgLy8gU2VlOiA8aHR0cHM6Ly9naXRodWIuY29tL0thVGVYL0thVGVYL2Jsb2IvNWRjN2FmMC9kb2NzL2Vycm9yLm1kPi5cbiAgICAgICAgaWYgKGVycm9yLm5hbWUgIT09ICdQYXJzZUVycm9yJykge1xuICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW4gPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICAgICAgICAgICAgdGFnTmFtZTogJ3NwYW4nLFxuICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBbJ2thdGV4LWVycm9yJ10sXG4gICAgICAgICAgICAgICAgdGl0bGU6IFN0cmluZyhlcnJvciksXG4gICAgICAgICAgICAgICAgc3R5bGU6ICdjb2xvcjonICsgKHNldHRpbmdzLmVycm9yQ29sb3IgfHwgJyNjYzAwMDAnKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjaGlsZHJlbjogW3t0eXBlOiAndGV4dCcsIHZhbHVlfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgPSBrYXRleC5yZW5kZXJUb1N0cmluZyhcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBhc3NpZ24oe30sIHNldHRpbmdzLCB7XG4gICAgICAgICAgICBkaXNwbGF5TW9kZSxcbiAgICAgICAgICAgIHRocm93T25FcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBzdHJpY3Q6ICdpZ25vcmUnXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb290ID0gZnJvbUh0bWxJc29tb3JwaGljKHJlc3VsdCwge2ZyYWdtZW50OiB0cnVlfSlcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IGFzc3VtZSBubyBgZG9jdHlwZXNgIGluIEthVGVYIHJlc3VsdC5cbiAgICAgIGVsZW1lbnQuY2hpbGRyZW4gPSByb290LmNoaWxkcmVuXG4gICAgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbImthdGV4IiwidmlzaXQiLCJ0b1RleHQiLCJmcm9tSHRtbElzb21vcnBoaWMiLCJhc3NpZ24iLCJPYmplY3QiLCJzb3VyY2UiLCJyZWh5cGVLYXRleCIsIm9wdGlvbnMiLCJzZXR0aW5ncyIsInRocm93T25FcnJvciIsInRyZWUiLCJmaWxlIiwiZWxlbWVudCIsImNsYXNzZXMiLCJwcm9wZXJ0aWVzIiwiQXJyYXkiLCJpc0FycmF5IiwiY2xhc3NOYW1lIiwiaW5saW5lIiwiaW5jbHVkZXMiLCJkaXNwbGF5TW9kZSIsInZhbHVlIiwid2hpdGVzcGFjZSIsInJlc3VsdCIsInJlbmRlclRvU3RyaW5nIiwiZXJyb3JfIiwiZXJyb3IiLCJmbiIsIm9yaWdpbiIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImpvaW4iLCJtZXNzYWdlIiwicG9zaXRpb24iLCJjaGlsZHJlbiIsInR5cGUiLCJ0YWdOYW1lIiwidGl0bGUiLCJTdHJpbmciLCJzdHlsZSIsImVycm9yQ29sb3IiLCJzdHJpY3QiLCJyb290IiwiZnJhZ21lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rehype-katex/index.js\n");

/***/ })

};
;