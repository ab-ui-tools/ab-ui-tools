/*! For license information please see stories-Image-stories.d9a369ba.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4302],{"../../node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(e,r,t){return(r=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.A)(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}},"../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>toPropertyKey});var esm_typeof=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/typeof.js");function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=(0,esm_typeof.A)(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=(0,esm_typeof.A)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==(0,esm_typeof.A)(i)?i:i+""}},"../../node_modules/@babel/runtime/helpers/esm/typeof.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{A:()=>_typeof})},"../../node_modules/ab-ui-library/components/Image/Image.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Image});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),Image=function Image(props){var name=props.name,_props$imagePath=props.imagePath,imagePath=void 0===_props$imagePath?"static/media/src/assets/images/image-placeholder.png":_props$imagePath,isBackgroundImage=props.isBackgroundImage,backgroundSize=props.backgroundSize,_props$className=props.className,className=void 0===_props$className?"":_props$className,isFullWidth=props.isFullWidth,isFullHeight=props.isFullHeight,ratio=props.ratio;return isBackgroundImage?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"image image--bg ".concat(className),style:{backgroundImage:"".concat(imagePath?"url(".concat(imagePath,")"):""),backgroundSize,aspectRatio:ratio}}):react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{className:"image ".concat(className),src:imagePath,alt:name,style:{aspectRatio:ratio,width:isFullWidth?"100%":"",height:isFullHeight?"100%":""}})}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/assets/images/avatar.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/avatar.bf272857.jpg"},"./src/stories/Image.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Image:()=>Image,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),ab_ui_library_components_Image__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/ab-ui-library/components/Image/Image.js")),_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/assets/images/avatar.jpg"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var image={src:_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_2__,alt:"my image"};const __WEBPACK_DEFAULT_EXPORT__={title:"Image",component:ab_ui_library_components_Image__WEBPACK_IMPORTED_MODULE_4__._,argTypes:{backgroundSize:{options:["cover","contain"],control:{type:"radio"}},ratio:{options:["1/1","2/1","3/1","4/3","16/9","1/1.618","2/3"],control:{type:"radio"}}}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{width:300},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ab_ui_library_components_Image__WEBPACK_IMPORTED_MODULE_4__._,_objectSpread({},args))})};Template.displayName="Template";var Image=Template.bind({});Image.args={imagePath:image.src,isBackgroundImage:!1,backgroundSize:"contain",isFullWidth:!1,isFullHeight:!1,ratio:"1/1"};const __namedExportsOrder=["Image"]}}]);