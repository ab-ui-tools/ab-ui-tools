"use strict";(self.webpackChunk_ab_uitools_storybook=self.webpackChunk_ab_uitools_storybook||[]).push([[4033],{"../../node_modules/ab-ui-library/components/Link/Link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>Link});var _defineProperty_6969136a_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/ab-ui-library/defineProperty-6969136a.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),Link=function Link(props){var _props$type=props.type,type=void 0===_props$type?"primary":_props$type,_props$weight=props.weight,weight=void 0===_props$weight?"regular":_props$weight,children=props.children,afterLink=props.afterLink,beforeLink=props.beforeLink,disabled=props.disabled,_props$className=props.className,className=void 0===_props$className?"":_props$className,url=props.url,_props$dataId=props.dataId,dataId=void 0===_props$dataId?"":_props$dataId,target=props.target,iconProps=props.iconProps,onclick=props.onclick,isDecorated=beforeLink||afterLink,linkClass=classnames__WEBPACK_IMPORTED_MODULE_1___default()("link","link--".concat(disabled?"disabled":type),weight,(0,_defineProperty_6969136a_js__WEBPACK_IMPORTED_MODULE_2__._)({},"link--icon-".concat((null==iconProps?void 0:iconProps.alignment)||"left"),(null==iconProps?void 0:iconProps.Component)&&!isDecorated),className),linkProps={href:disabled?void 0:url,className:linkClass,"data-id":"".concat(dataId,"-link"),target:disabled?void 0:target,onClick:function handleClick(e){disabled?e.preventDefault():onclick&&(e.preventDefault(),onclick())}},linkContent=react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,(null==iconProps?void 0:iconProps.Component)&&!isDecorated&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(iconProps.Component,{size:"small",className:"link__icon"}),children);return isDecorated?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({"color-disabled":disabled},className)},beforeLink&&"".concat(beforeLink," "),react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",linkProps,children),afterLink&&" ".concat(afterLink)):react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",linkProps,linkContent)}},"../../node_modules/ab-ui-library/components/Popover/Popover.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Popover});var _slicedToArray_83ed3e4c_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/ab-ui-library/slicedToArray-83ed3e4c.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_hooks_useGetTooltipStyles_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/ab-ui-library/hooks/useGetTooltipStyles.js"),_hooks_useHideOnScroll_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/ab-ui-library/hooks/useHideOnScroll.js"),_hooks_useOnOutsideClick_js__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("../../node_modules/dayjs/dayjs.min.js"),__webpack_require__("../../node_modules/ab-ui-library/hooks/useOnOutsideClick.js")),_Text_Text_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/ab-ui-library/components/Text/Text.js"),_Link_Link_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/ab-ui-library/components/Link/Link.js"),Popover=function Popover(props){var dataId=props.dataId,text=props.text,linkAddons=props.linkAddons,_props$className=props.className,className=void 0===_props$className?"":_props$className,_props$position=props.position,position=void 0===_props$position?"top-left":_props$position,children=props.children,elemRef=props.elemRef,id=props.id,_props$clicked=props.clicked,clicked=void 0!==_props$clicked&&_props$clicked,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(clicked),_useState2=(0,_slicedToArray_83ed3e4c_js__WEBPACK_IMPORTED_MODULE_3__._)(_useState,2),isClicked=_useState2[0],setIsClicked=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),_useState4=(0,_slicedToArray_83ed3e4c_js__WEBPACK_IMPORTED_MODULE_3__._)(_useState3,2),popoverRef=_useState4[0],setPopoverRef=_useState4[1],_useState5=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(elemRef||null),_useState6=(0,_slicedToArray_83ed3e4c_js__WEBPACK_IMPORTED_MODULE_3__._)(_useState5,2),parent=_useState6[0],setElement=_useState6[1],_useGetTooltipStyles=(0,_hooks_useGetTooltipStyles_js__WEBPACK_IMPORTED_MODULE_4__.N)({elemRef:parent,tooltipRef:popoverRef,initialPosition:position}),popoverPosition=_useGetTooltipStyles.tooltipPosition,popoverStyles=_useGetTooltipStyles.tooltipStyles,showMessage=function showMessage(){return setIsClicked(!0)},hideMessage=function hideMessage(){return setIsClicked(!1)};return(0,_hooks_useHideOnScroll_js__WEBPACK_IMPORTED_MODULE_5__.U)(hideMessage),(0,_hooks_useOnOutsideClick_js__WEBPACK_IMPORTED_MODULE_6__.g)(popoverRef,hideMessage,isClicked,(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)()),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(id){var element=document.getElementById(id.toString());setElement(element)}}),[id]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){parent&&parent.addEventListener("click",showMessage)}),[parent]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,isClicked&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-id":"".concat(dataId,"-content"),className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("popover popover--".concat(popoverPosition),className),ref:setPopoverRef,style:popoverStyles},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"popover__inner scrollbar scrollbar--vertical pr-8"},linkAddons?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Link_Link_js__WEBPACK_IMPORTED_MODULE_7__.N,{dataId:linkAddons.dataId,url:linkAddons.url,beforeLink:linkAddons.beforeLink,afterLink:linkAddons.afterLink,target:linkAddons.target,className:"popover__link"},text):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Text_Text_js__WEBPACK_IMPORTED_MODULE_8__.E,{dataId:"".concat(dataId,"-text"),type:"primary",weight:"regular",lineHeight:"medium",size:"small"},text)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"popover__arrow"})),children)}},"../../node_modules/ab-ui-library/components/SVGIcons/IconInfo.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconInfo,G:()=>IconInfo});var _defineProperty_6969136a_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/ab-ui-library/defineProperty-6969136a.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),IconInfo=function IconInfo(_ref){var size=_ref.size,type=_ref.type,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,onClick=_ref.onClick,refHandler=_ref.refHandler,id=_ref.id,dataId=_ref.dataId;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("svg-icon",(0,_defineProperty_6969136a_js__WEBPACK_IMPORTED_MODULE_2__._)((0,_defineProperty_6969136a_js__WEBPACK_IMPORTED_MODULE_2__._)((0,_defineProperty_6969136a_js__WEBPACK_IMPORTED_MODULE_2__._)({},"svg-icon__size-".concat(size),size),"svg-icon__type-".concat(type),type),className,className)),viewBox:"0 0 24 24",fill:"none",onClick,ref:refHandler,id,"data-id":dataId?"".concat(dataId,"-svg-icon"):""},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12.0001 1.99902C17.5238 1.99902 22.0016 6.47687 22.0016 12.0006C22.0016 17.5243 17.5238 22.0021 12.0001 22.0021C6.47638 22.0021 1.99854 17.5243 1.99854 12.0006C1.99854 6.47687 6.47638 1.99902 12.0001 1.99902ZM12.0001 3.49902C7.30481 3.49902 3.49854 7.3053 3.49854 12.0006C3.49854 16.6959 7.30481 20.5021 12.0001 20.5021C16.6954 20.5021 20.5016 16.6959 20.5016 12.0006C20.5016 7.3053 16.6954 3.49902 12.0001 3.49902ZM11.9964 10.4996C12.3761 10.4994 12.6901 10.7813 12.74 11.1473L12.7469 11.2491L12.7505 16.7507C12.7508 17.1649 12.4152 17.5009 12.001 17.5012C11.6213 17.5014 11.3073 17.2195 11.2574 16.8535L11.2505 16.7517L11.2469 11.2501C11.2467 10.8359 11.5822 10.4999 11.9964 10.4996ZM12.0005 7.00184C12.5521 7.00184 12.9992 7.44896 12.9992 8.0005C12.9992 8.55205 12.5521 8.99917 12.0005 8.99917C11.449 8.99917 11.0019 8.55205 11.0019 8.0005C11.0019 7.44896 11.449 7.00184 12.0005 7.00184Z",fill:"#222222"}))}},"../../node_modules/ab-ui-library/components/SVGIcons/IconPerson.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconPerson,j:()=>IconPerson});var _defineProperty_6969136a_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/ab-ui-library/defineProperty-6969136a.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),IconPerson=function IconPerson(_ref){var size=_ref.size,type=_ref.type,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,onClick=_ref.onClick,refHandler=_ref.refHandler,id=_ref.id,dataId=_ref.dataId;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("svg-icon",(0,_defineProperty_6969136a_js__WEBPACK_IMPORTED_MODULE_2__._)((0,_defineProperty_6969136a_js__WEBPACK_IMPORTED_MODULE_2__._)((0,_defineProperty_6969136a_js__WEBPACK_IMPORTED_MODULE_2__._)({},"svg-icon__size-".concat(size),size),"svg-icon__type-".concat(type),type),className,className)),viewBox:"0 0 24 24",fill:"none",onClick,ref:refHandler,id,"data-id":dataId?"".concat(dataId,"-svg-icon"):""},react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{id:"Size=24, Theme=Regular"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{id:"Shape",d:"M17.7542 13.9999C18.9962 13.9999 20.003 15.0068 20.003 16.2488V16.8242C20.003 17.7185 19.6835 18.5833 19.1019 19.2627C17.5326 21.0962 15.1454 22.0011 12 22.0011C8.85414 22.0011 6.46812 21.0959 4.90182 19.2617C4.32206 18.5828 4.00354 17.7193 4.00354 16.8265V16.2488C4.00354 15.0068 5.0104 13.9999 6.25242 13.9999H17.7542ZM17.7542 15.4999H6.25242C5.83882 15.4999 5.50354 15.8352 5.50354 16.2488V16.8265C5.50354 17.3622 5.69465 17.8802 6.04251 18.2876C7.29582 19.7553 9.26169 20.5011 12 20.5011C14.7383 20.5011 16.7059 19.7553 17.9624 18.2873C18.3113 17.8797 18.503 17.3608 18.503 16.8242V16.2488C18.503 15.8352 18.1678 15.4999 17.7542 15.4999ZM12 2.00464C14.7614 2.00464 17 4.24321 17 7.00464C17 9.76606 14.7614 12.0046 12 12.0046C9.23857 12.0046 7 9.76606 7 7.00464C7 4.24321 9.23857 2.00464 12 2.00464ZM12 3.50464C10.067 3.50464 8.5 5.07164 8.5 7.00464C8.5 8.93764 10.067 10.5046 12 10.5046C13.933 10.5046 15.5 8.93764 15.5 7.00464C15.5 5.07164 13.933 3.50464 12 3.50464Z",fill:"#222222"})))}},"../../node_modules/ab-ui-library/defineProperty-6969136a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>_defineProperty});var _typeof_676f6f93_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/ab-ui-library/typeof-676f6f93.js");function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=(0,_typeof_676f6f93_js__WEBPACK_IMPORTED_MODULE_0__._)(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=(0,_typeof_676f6f93_js__WEBPACK_IMPORTED_MODULE_0__._)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==(0,_typeof_676f6f93_js__WEBPACK_IMPORTED_MODULE_0__._)(i)?i:i+""}function _defineProperty(e,r,t){return(r=toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}},"../../node_modules/ab-ui-library/extends-bd5bc174.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}__webpack_require__.d(__webpack_exports__,{_:()=>_extends})},"../../node_modules/ab-ui-library/hooks/useOnOutsideClick.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>useOnOutsideClick});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),callbackStack=[];function handleMouseDownEvent(event){var callbackObject=callbackStack[callbackStack.length-1];if(callbackObject){var ref=callbackObject.ref,callback=callbackObject.callback,shouldRemoveCallback=callbackObject.shouldRemoveCallback,isContained=!1;(ref&&Array.isArray(ref)&&ref.some((function(eachElement){return null==eachElement?void 0:eachElement.contains(event.target)}))||ref&&!Array.isArray(ref)&&ref.contains(event.target))&&(isContained=!0),isContained||(shouldRemoveCallback&&callbackStack.splice(callbackStack.length-1,1),callback(event))}}var useOnOutsideClick=function useOnOutsideClick(ref,callback,state,uid){var shouldRemoveCallback=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(ref&&state&&uid)return callbackStack.push({ref,callback,uid,shouldRemoveCallback}),1===callbackStack.length&&document.addEventListener("mousedown",handleMouseDownEvent),function(){var activeElementIndex=callbackStack.findIndex((function(stack){return stack.uid===uid}));activeElementIndex>=0&&callbackStack.splice(activeElementIndex,1),0===callbackStack.length&&document.removeEventListener("mousedown",handleMouseDownEvent)}}),[ref,state,uid]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(!state&&callbackStack.length>0){var activeElementIndex=callbackStack.findIndex((function(stack){return stack.uid===uid}));activeElementIndex>=0&&callbackStack.splice(activeElementIndex,1)}}),[state])}},"../../node_modules/ab-ui-library/typeof-676f6f93.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{_:()=>_typeof})},"./src/stories/Status.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Status:()=>Status_stories_Status,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Status_stories});var defineProperty=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../node_modules/react/index.js"),Text=__webpack_require__("../../node_modules/ab-ui-library/components/Text/Text.js"),IconPerson=__webpack_require__("../../node_modules/ab-ui-library/components/SVGIcons/IconPerson.js"),IconInfo=__webpack_require__("../../node_modules/ab-ui-library/components/SVGIcons/IconInfo.js"),defineProperty_6969136a=__webpack_require__("../../node_modules/ab-ui-library/defineProperty-6969136a.js"),extends_bd5bc174=__webpack_require__("../../node_modules/ab-ui-library/extends-bd5bc174.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),StatusTextSize=(__webpack_require__("../../node_modules/dayjs/dayjs.min.js"),function(StatusTextSize){return StatusTextSize.large="standard",StatusTextSize.medium="small",StatusTextSize.small="xsmall",StatusTextSize}(StatusTextSize||{})),Status=function Status(props){var _props$type=props.type,type=void 0===_props$type?"primary":_props$type,_props$size=props.size,size=void 0===_props$size?"large":_props$size,_props$text=props.text,text=void 0===_props$text?"":_props$text,children=props.children,_props$className=props.className,className=void 0===_props$className?"":_props$className,leftIconProps=props.leftIconProps,rightIconProps=props.rightIconProps,_props$withCircle=props.withCircle,withCircle=void 0===_props$withCircle||_props$withCircle,dataId=props.dataId;return react.createElement("div",{className:classnames_default()("status status--".concat(size),className)},null!=leftIconProps&&leftIconProps.Component?react.createElement(leftIconProps.Component,(0,extends_bd5bc174._)({size:"xsmall",type,className:"mr-6"},leftIconProps)):null,!withCircle||null!=leftIconProps&&leftIconProps.Component?null:react.createElement("span",{className:classnames_default()("status__circle","mr-8",(0,defineProperty_6969136a._)({},"status__circle--".concat(type),!0))}),react.createElement("div",{className:"status__label"},react.createElement(Text.E,{dataId:"".concat(dataId,"-text"),type:withCircle?"primary":type,size:StatusTextSize[size]},text),children),rightIconProps)},Popover=__webpack_require__("../../node_modules/ab-ui-library/components/Popover/Popover.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Status_stories={title:"Status",component:Status,argTypes:{type:{options:["primary","disabled","brand","danger","warning","success","information","discovery"],control:{type:"radio"}},size:{options:["large","medium","small"],control:{type:"radio"}}}};var Status_stories_Status=function Template(args){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Status,_objectSpread(_objectSpread({},args),{},{type:"danger",children:(0,jsx_runtime.jsx)(Text.E,{type:"secondary",size:"small",children:"Status subtext"})})),(0,jsx_runtime.jsx)(Status,_objectSpread(_objectSpread({},args),{},{type:"information",children:(0,jsx_runtime.jsx)(Text.E,{type:"information",size:"small",children:"Status subtext"})}))]})}.bind({});Status_stories_Status.args={text:"Status text",type:"primary",size:"large",withCircle:!0,leftIconProps:{Component:IconPerson.A},rightIconProps:(0,jsx_runtime.jsx)(Popover.A,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:(0,jsx_runtime.jsx)("div",{id:"beneficiary-tooltip",children:(0,jsx_runtime.jsx)(IconInfo.A,{type:"information",size:"xsmall",className:"ml-4 pointer"})})})};const __namedExportsOrder=["Status"]}}]);