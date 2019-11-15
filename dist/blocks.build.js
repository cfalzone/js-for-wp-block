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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shoutout_block_block_js__ = __webpack_require__(/*! ./shoutout-block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9zaG91dG91dC1ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*************************************!*\
  !*** ./src/shoutout-block/block.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\n * BLOCK: shoutout-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    MediaUpload = _wp$editor.MediaUpload;\nvar Button = wp.components.Button;\n\n\nregisterBlockType('cgb/block-shoutout-block', {\n\ttitle: __('my-blocks - Shoutout Block'), // Block title.\n\ticon: 'admin-comments', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('my-blocks — Shoutout Block'), __('CGB Example'), __('create-guten-block')],\n\n\tattributes: {\n\t\theader: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'html',\n\t\t\tselector: 'h2'\n\t\t},\n\t\tbody: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: '.shoutout-body'\n\t\t},\n\t\timgUrl: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'attribute',\n\t\t\tattribute: 'src',\n\t\t\tselector: 'img'\n\t\t},\n\t\timgId: {\n\t\t\ttype: 'number'\n\t\t},\n\t\timgAlt: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'attribute',\n\t\t\tattribute: 'alt',\n\t\t\tselector: 'img'\n\t\t}\n\t},\n\n\tedit: function edit(props) {\n\t\tvar _props$attributes = props.attributes,\n\t\t    header = _props$attributes.header,\n\t\t    body = _props$attributes.body,\n\t\t    imgId = _props$attributes.imgId,\n\t\t    imgUrl = _props$attributes.imgUrl,\n\t\t    imgAlt = _props$attributes.imgAlt,\n\t\t    className = props.className,\n\t\t    setAttributes = props.setAttributes;\n\n\n\t\tvar onMediaSelect = function onMediaSelect(img) {\n\t\t\tsetAttributes({\n\t\t\t\timgId: img.id,\n\t\t\t\timgUrl: img.url,\n\t\t\t\timgAlt: img.alt\n\t\t\t});\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\tonSelect: onMediaSelect,\n\t\t\t\ttype: 'image',\n\t\t\t\tvalue: imgId,\n\t\t\t\trender: function render(_ref) {\n\t\t\t\t\tvar open = _ref.open;\n\t\t\t\t\treturn imgId ? wp.element.createElement('img', { src: imgUrl, onClick: open, alt: imgAlt }) : wp.element.createElement(\n\t\t\t\t\t\tButton,\n\t\t\t\t\t\t{ onClick: open },\n\t\t\t\t\t\t__('Choose an Image', 'my-blocks')\n\t\t\t\t\t);\n\t\t\t\t} }),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'shoutout-content' },\n\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\ttagName: 'h2',\n\t\t\t\t\tplaceholder: __('Enter header text', 'my-blocks'),\n\t\t\t\t\tvalue: header,\n\t\t\t\t\tmultiline: false,\n\t\t\t\t\tformattingControls: [],\n\t\t\t\t\tonChange: function onChange(h) {\n\t\t\t\t\t\treturn setAttributes({ header: h });\n\t\t\t\t\t} }),\n\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\ttagName: 'div',\n\t\t\t\t\tclassName: 'shoutout-body',\n\t\t\t\t\tplaceholder: __('Enter body text', 'my-blocks'),\n\t\t\t\t\tvalue: body,\n\t\t\t\t\tmultiline: 'p',\n\t\t\t\t\tonChange: function onChange(b) {\n\t\t\t\t\t\treturn setAttributes({ body: b });\n\t\t\t\t\t} })\n\t\t\t)\n\t\t);\n\t},\n\n\tsave: function save(props) {\n\t\tvar _props$attributes2 = props.attributes,\n\t\t    header = _props$attributes2.header,\n\t\t    body = _props$attributes2.body,\n\t\t    imgUrl = _props$attributes2.imgUrl,\n\t\t    imgAlt = _props$attributes2.imgAlt,\n\t\t    className = props.className;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\timgUrl ? wp.element.createElement('img', { src: imgUrl, alt: imgAlt }) : null,\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'shoutout-content' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'h2',\n\t\t\t\t\tnull,\n\t\t\t\t\theader\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'shoutout-body' },\n\t\t\t\t\tbody\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zaG91dG91dC1ibG9jay9ibG9jay5qcz8xMGQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHNob3V0b3V0LWJsb2NrXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgX3dwJGVkaXRvciA9IHdwLmVkaXRvcixcbiAgICBSaWNoVGV4dCA9IF93cCRlZGl0b3IuUmljaFRleHQsXG4gICAgTWVkaWFVcGxvYWQgPSBfd3AkZWRpdG9yLk1lZGlhVXBsb2FkO1xudmFyIEJ1dHRvbiA9IHdwLmNvbXBvbmVudHMuQnV0dG9uO1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjZ2IvYmxvY2stc2hvdXRvdXQtYmxvY2snLCB7XG5cdHRpdGxlOiBfXygnbXktYmxvY2tzIC0gU2hvdXRvdXQgQmxvY2snKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICdhZG1pbi1jb21tZW50cycsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cblx0Y2F0ZWdvcnk6ICdjb21tb24nLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0a2V5d29yZHM6IFtfXygnbXktYmxvY2tzIOKAlCBTaG91dG91dCBCbG9jaycpLCBfXygnQ0dCIEV4YW1wbGUnKSwgX18oJ2NyZWF0ZS1ndXRlbi1ibG9jaycpXSxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0aGVhZGVyOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdHNvdXJjZTogJ2h0bWwnLFxuXHRcdFx0c2VsZWN0b3I6ICdoMidcblx0XHR9LFxuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6ICdhcnJheScsXG5cdFx0XHRzb3VyY2U6ICdjaGlsZHJlbicsXG5cdFx0XHRzZWxlY3RvcjogJy5zaG91dG91dC1ib2R5J1xuXHRcdH0sXG5cdFx0aW1nVXJsOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdHNvdXJjZTogJ2F0dHJpYnV0ZScsXG5cdFx0XHRhdHRyaWJ1dGU6ICdzcmMnLFxuXHRcdFx0c2VsZWN0b3I6ICdpbWcnXG5cdFx0fSxcblx0XHRpbWdJZDoge1xuXHRcdFx0dHlwZTogJ251bWJlcidcblx0XHR9LFxuXHRcdGltZ0FsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzb3VyY2U6ICdhdHRyaWJ1dGUnLFxuXHRcdFx0YXR0cmlidXRlOiAnYWx0Jyxcblx0XHRcdHNlbGVjdG9yOiAnaW1nJ1xuXHRcdH1cblx0fSxcblxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0dmFyIF9wcm9wcyRhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcblx0XHQgICAgaGVhZGVyID0gX3Byb3BzJGF0dHJpYnV0ZXMuaGVhZGVyLFxuXHRcdCAgICBib2R5ID0gX3Byb3BzJGF0dHJpYnV0ZXMuYm9keSxcblx0XHQgICAgaW1nSWQgPSBfcHJvcHMkYXR0cmlidXRlcy5pbWdJZCxcblx0XHQgICAgaW1nVXJsID0gX3Byb3BzJGF0dHJpYnV0ZXMuaW1nVXJsLFxuXHRcdCAgICBpbWdBbHQgPSBfcHJvcHMkYXR0cmlidXRlcy5pbWdBbHQsXG5cdFx0ICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXM7XG5cblxuXHRcdHZhciBvbk1lZGlhU2VsZWN0ID0gZnVuY3Rpb24gb25NZWRpYVNlbGVjdChpbWcpIHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRpbWdJZDogaW1nLmlkLFxuXHRcdFx0XHRpbWdVcmw6IGltZy51cmwsXG5cdFx0XHRcdGltZ0FsdDogaW1nLmFsdFxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChNZWRpYVVwbG9hZCwge1xuXHRcdFx0XHRvblNlbGVjdDogb25NZWRpYVNlbGVjdCxcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0dmFsdWU6IGltZ0lkLFxuXHRcdFx0XHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG5cdFx0XHRcdFx0dmFyIG9wZW4gPSBfcmVmLm9wZW47XG5cdFx0XHRcdFx0cmV0dXJuIGltZ0lkID8gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogaW1nVXJsLCBvbkNsaWNrOiBvcGVuLCBhbHQ6IGltZ0FsdCB9KSA6IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdEJ1dHRvbixcblx0XHRcdFx0XHRcdHsgb25DbGljazogb3BlbiB9LFxuXHRcdFx0XHRcdFx0X18oJ0Nob29zZSBhbiBJbWFnZScsICdteS1ibG9ja3MnKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gfSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ3Nob3V0b3V0LWNvbnRlbnQnIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuXHRcdFx0XHRcdHRhZ05hbWU6ICdoMicsXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6IF9fKCdFbnRlciBoZWFkZXIgdGV4dCcsICdteS1ibG9ja3MnKSxcblx0XHRcdFx0XHR2YWx1ZTogaGVhZGVyLFxuXHRcdFx0XHRcdG11bHRpbGluZTogZmFsc2UsXG5cdFx0XHRcdFx0Zm9ybWF0dGluZ0NvbnRyb2xzOiBbXSxcblx0XHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoaCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBoZWFkZXI6IGggfSk7XG5cdFx0XHRcdFx0fSB9KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG5cdFx0XHRcdFx0dGFnTmFtZTogJ2RpdicsXG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAnc2hvdXRvdXQtYm9keScsXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6IF9fKCdFbnRlciBib2R5IHRleHQnLCAnbXktYmxvY2tzJyksXG5cdFx0XHRcdFx0dmFsdWU6IGJvZHksXG5cdFx0XHRcdFx0bXVsdGlsaW5lOiAncCcsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgYm9keTogYiB9KTtcblx0XHRcdFx0XHR9IH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0dmFyIF9wcm9wcyRhdHRyaWJ1dGVzMiA9IHByb3BzLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIGhlYWRlciA9IF9wcm9wcyRhdHRyaWJ1dGVzMi5oZWFkZXIsXG5cdFx0ICAgIGJvZHkgPSBfcHJvcHMkYXR0cmlidXRlczIuYm9keSxcblx0XHQgICAgaW1nVXJsID0gX3Byb3BzJGF0dHJpYnV0ZXMyLmltZ1VybCxcblx0XHQgICAgaW1nQWx0ID0gX3Byb3BzJGF0dHJpYnV0ZXMyLmltZ0FsdCxcblx0XHQgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuXG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG5cdFx0XHRpbWdVcmwgPyB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiBpbWdVcmwsIGFsdDogaW1nQWx0IH0pIDogbnVsbCxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnc2hvdXRvdXQtY29udGVudCcgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdoMicsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRoZWFkZXJcblx0XHRcdFx0KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnc2hvdXRvdXQtYm9keScgfSxcblx0XHRcdFx0XHRib2R5XG5cdFx0XHRcdClcblx0XHRcdClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaG91dG91dC1ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!****************************************!*\
  !*** ./src/shoutout-block/editor.scss ***!
  \****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zaG91dG91dC1ibG9jay9lZGl0b3Iuc2Nzcz9hMTRmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hvdXRvdXQtYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***************************************!*\
  !*** ./src/shoutout-block/style.scss ***!
  \***************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zaG91dG91dC1ibG9jay9zdHlsZS5zY3NzP2M4YWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaG91dG91dC1ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);