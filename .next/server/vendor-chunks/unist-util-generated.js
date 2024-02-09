"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-generated";
exports.ids = ["vendor-chunks/unist-util-generated"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-generated/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/unist-util-generated/lib/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generated: () => (/* binding */ generated)\n/* harmony export */ });\n/**\n * @typedef PointLike\n * @property {number | null | undefined} [line]\n * @property {number | null | undefined} [column]\n * @property {number | null | undefined} [offset]\n *\n * @typedef PositionLike\n * @property {PointLike | null | undefined} [start]\n * @property {PointLike | null | undefined} [end]\n *\n * @typedef NodeLike\n * @property {PositionLike | null | undefined} [position]\n */ /**\n * Check if `node` is generated.\n *\n * @param {NodeLike | null | undefined} [node]\n *   Node to check.\n * @returns {boolean}\n *   Whether `node` is generated (does not have positional info).\n */ function generated(node) {\n    return !node || !node.position || !node.position.start || !node.position.start.line || !node.position.start.column || !node.position.end || !node.position.end.line || !node.position.end.column;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1nZW5lcmF0ZWQvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0NBWUMsR0FFRDs7Ozs7OztDQU9DLEdBQ00sU0FBU0EsVUFBVUMsSUFBSTtJQUM1QixPQUNFLENBQUNBLFFBQ0QsQ0FBQ0EsS0FBS0MsUUFBUSxJQUNkLENBQUNELEtBQUtDLFFBQVEsQ0FBQ0MsS0FBSyxJQUNwQixDQUFDRixLQUFLQyxRQUFRLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxJQUN6QixDQUFDSCxLQUFLQyxRQUFRLENBQUNDLEtBQUssQ0FBQ0UsTUFBTSxJQUMzQixDQUFDSixLQUFLQyxRQUFRLENBQUNJLEdBQUcsSUFDbEIsQ0FBQ0wsS0FBS0MsUUFBUSxDQUFDSSxHQUFHLENBQUNGLElBQUksSUFDdkIsQ0FBQ0gsS0FBS0MsUUFBUSxDQUFDSSxHQUFHLENBQUNELE1BQU07QUFFN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Lbm93bGVkZ2VHcmFwaFFTLy4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtZ2VuZXJhdGVkL2xpYi9pbmRleC5qcz9lNGExIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYgUG9pbnRMaWtlXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bGwgfCB1bmRlZmluZWR9IFtsaW5lXVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29sdW1uXVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkfSBbb2Zmc2V0XVxuICpcbiAqIEB0eXBlZGVmIFBvc2l0aW9uTGlrZVxuICogQHByb3BlcnR5IHtQb2ludExpa2UgfCBudWxsIHwgdW5kZWZpbmVkfSBbc3RhcnRdXG4gKiBAcHJvcGVydHkge1BvaW50TGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IFtlbmRdXG4gKlxuICogQHR5cGVkZWYgTm9kZUxpa2VcbiAqIEBwcm9wZXJ0eSB7UG9zaXRpb25MaWtlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Bvc2l0aW9uXVxuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYG5vZGVgIGlzIGdlbmVyYXRlZC5cbiAqXG4gKiBAcGFyYW0ge05vZGVMaWtlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW25vZGVdXG4gKiAgIE5vZGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBgbm9kZWAgaXMgZ2VuZXJhdGVkIChkb2VzIG5vdCBoYXZlIHBvc2l0aW9uYWwgaW5mbykuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZWQobm9kZSkge1xuICByZXR1cm4gKFxuICAgICFub2RlIHx8XG4gICAgIW5vZGUucG9zaXRpb24gfHxcbiAgICAhbm9kZS5wb3NpdGlvbi5zdGFydCB8fFxuICAgICFub2RlLnBvc2l0aW9uLnN0YXJ0LmxpbmUgfHxcbiAgICAhbm9kZS5wb3NpdGlvbi5zdGFydC5jb2x1bW4gfHxcbiAgICAhbm9kZS5wb3NpdGlvbi5lbmQgfHxcbiAgICAhbm9kZS5wb3NpdGlvbi5lbmQubGluZSB8fFxuICAgICFub2RlLnBvc2l0aW9uLmVuZC5jb2x1bW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImdlbmVyYXRlZCIsIm5vZGUiLCJwb3NpdGlvbiIsInN0YXJ0IiwibGluZSIsImNvbHVtbiIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-generated/lib/index.js\n");

/***/ })

};
;