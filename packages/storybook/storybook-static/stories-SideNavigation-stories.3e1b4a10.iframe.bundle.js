"use strict";(self.webpackChunk_ab_uitools_storybook=self.webpackChunk_ab_uitools_storybook||[]).push([[1236],{"../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||(0,unsupportedIterableToArray.A)(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r,a):void 0}}},"../../node_modules/ab-ui-library/components/Avatar/Avatar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Avatar});var _slicedToArray_83ed3e4c_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/ab-ui-library/slicedToArray-83ed3e4c.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_FileUpload_FileUpload_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/ab-ui-library/components/FileUpload/FileUpload.js"),_FileUpload_types_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/ab-ui-library/components/FileUpload/types.js"),Avatar=(__webpack_require__("../../node_modules/dayjs/dayjs.min.js"),function Avatar(_ref){var dataId=_ref.dataId,id=_ref.id,_ref$color=_ref.color,color=void 0===_ref$color?"default":_ref$color,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,type=_ref.type,_ref$imagePath=_ref.imagePath,imagePath=void 0===_ref$imagePath?"":_ref$imagePath,_ref$initials=_ref.initials,initials=void 0===_ref$initials?"":_ref$initials,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$isEditable=_ref.isEditable,isEditable=void 0!==_ref$isEditable&&_ref$isEditable,_ref$allowedTypes=_ref.allowedTypes,allowedTypes=void 0===_ref$allowedTypes?".png, .jpg, .jpeg, image/jpeg, image/png, image/jpg":_ref$allowedTypes,onError=_ref.onError,fileAllowedSize=_ref.fileAllowedSize,onAvatarChange=_ref.onAvatarChange,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(imagePath),_useState2=(0,_slicedToArray_83ed3e4c_js__WEBPACK_IMPORTED_MODULE_3__._)(_useState,2),image=_useState2[0],setImage=_useState2[1],style={backgroundImage:image?"url(".concat(image,")"):"none"};return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setImage(imagePath)}),[imagePath]),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id,"data-id":dataId,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("avatar avatar--".concat(color," avatar--").concat(type," avatar--").concat(size),className,{"avatar--image":image,"avatar--edit":isEditable}),style},image?null:initials,isEditable&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FileUpload_FileUpload_js__WEBPACK_IMPORTED_MODULE_4__.e,{onError,fileAllowedSize,multiple:!1,withFilePreview:!1,getFiles:function getFiles(files){files&&files[0]&&(setImage(URL.createObjectURL(files[0])),null==onAvatarChange||onAvatarChange(files[0]))},allowedTypes,mode:_FileUpload_types_js__WEBPACK_IMPORTED_MODULE_5__.F.edit}))})},"../../node_modules/ab-ui-library/components/Badge/Badge.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Badge});var react=__webpack_require__("../../node_modules/react/index.js"),Text=__webpack_require__("../../node_modules/ab-ui-library/components/Text/Text.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),TEXT_SIZE_MAPPING={large:"standard",small:"small"},COLOR_TYPE_MAPPING={transparent:"tertiary",red:"inverse",grey:"secondary",greyDark:"secondary",green:"inverse"},Badge=(__webpack_require__("../../node_modules/dayjs/dayjs.min.js"),function Badge(props){var _props$type=props.type,type=void 0===_props$type?"red":_props$type,_props$size=props.size,size=void 0===_props$size?"large":_props$size,text=props.text,_props$className=props.className,className=void 0===_props$className?"":_props$className;return react.createElement("div",{className:classnames_default()("badge badge--".concat(type,"  badge--").concat(size),className)},text?react.createElement(Text.E,{size:TEXT_SIZE_MAPPING[size],type:COLOR_TYPE_MAPPING[type],className:"badge__inner"},react.createElement(react.Fragment,null,text)):null)})},"../../node_modules/ab-ui-library/components/Divider/Divider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>Divider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),Divider=function Divider(props){var _props$type=props.type,type=void 0===_props$type?"primary":_props$type,_props$color=props.color,color=void 0===_props$color?"dark":_props$color,isHorizontal=props.isHorizontal,className=props.className;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("divider","divider--".concat(type),"divider--".concat(color),{"divider--horizontal":isHorizontal,"divider--vertical":!isHorizontal},className)})}},"../../node_modules/ab-ui-library/components/Image/Image.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Image});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),Image=function Image(props){var name=props.name,_props$imagePath=props.imagePath,imagePath=void 0===_props$imagePath?"static/media/src/assets/images/image-placeholder.png":_props$imagePath,isBackgroundImage=props.isBackgroundImage,backgroundSize=props.backgroundSize,_props$className=props.className,className=void 0===_props$className?"":_props$className,isFullWidth=props.isFullWidth,isFullHeight=props.isFullHeight,ratio=props.ratio;return isBackgroundImage?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"image image--bg ".concat(className),style:{backgroundImage:"".concat(imagePath?"url(".concat(imagePath,")"):""),backgroundSize,aspectRatio:ratio}}):react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{className:"image ".concat(className),src:imagePath,alt:name,style:{aspectRatio:ratio,width:isFullWidth?"100%":"",height:isFullHeight?"100%":""}})}},"../../node_modules/ab-ui-library/components/SideNavigation/NavigationItem/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>NavigationItem});var _slicedToArray_83ed3e4c_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/ab-ui-library/slicedToArray-83ed3e4c.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_types_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/ab-ui-library/components/SideNavigation/NavigationItem/types.js"),_Badge_Badge_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/ab-ui-library/components/Badge/Badge.js"),_helperComponents_IconDynamicComponent_IconDynamicComponent_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/ab-ui-library/helperComponents/IconDynamicComponent/IconDynamicComponent.js"),_SVGIcons_IconChevronDown_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/ab-ui-library/components/SVGIcons/IconChevronDown.js"),NavigationItem=(__webpack_require__("../../node_modules/dayjs/dayjs.min.js"),function NavigationItem(props){var As=props.As,type=props.type,isOpen=props.isOpen,iconName=props.iconName,showBadge=props.showBadge,_props$expandable=props.expandable,expandable=void 0!==_props$expandable&&_props$expandable,_props$showAction=props.showAction,showAction=void 0!==_props$showAction&&_props$showAction,actionElm=props.actionElm,_props$active=props.active,active=void 0!==_props$active&&_props$active,_props$badgeType=props.badgeType,badgeType=void 0===_props$badgeType?"green":_props$badgeType,badgeContent=props.badgeContent,_props$expandIconProp=props.expandIconProps,expandIconProps=void 0===_props$expandIconProp?{Component:_SVGIcons_IconChevronDown_js__WEBPACK_IMPORTED_MODULE_3__.r,size:"medium"}:_props$expandIconProp,children=props.children,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),_useState2=(0,_slicedToArray_83ed3e4c_js__WEBPACK_IMPORTED_MODULE_4__._)(_useState,2),childOpen=_useState2[0],setChildOpen=_useState2[1],displayHeader=isOpen&&type===_types_js__WEBPACK_IMPORTED_MODULE_5__.L.HEADER&&showAction&&actionElm&&actionElm;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("navigation-item","navigation-item--".concat(type)),onClick:function onClick(){return setChildOpen(!childOpen)}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("navigation-item__inner",active&&"active")},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,!isOpen&&type===_types_js__WEBPACK_IMPORTED_MODULE_5__.L.HEADER&&As(),displayHeader,function displayNavigationItem(){return type!==_types_js__WEBPACK_IMPORTED_MODULE_5__.L.HEADER||isOpen?As():null}(),type===_types_js__WEBPACK_IMPORTED_MODULE_5__.L.USER&&iconName&&isOpen&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_helperComponents_IconDynamicComponent_IconDynamicComponent_js__WEBPACK_IMPORTED_MODULE_6__.G,{componentName:iconName})),showBadge&&badgeContent&&isOpen&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Badge_Badge_js__WEBPACK_IMPORTED_MODULE_7__.E,{type:badgeType,text:badgeContent,size:"small",className:"mr-12"}),expandable&&isOpen&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("navigation-item__expandable-icon",childOpen&&"opened")},expandIconProps.Component&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(expandIconProps.Component,{size:expandIconProps.size||"small",className:"mr-12"}))),children&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("navigation-item__child",childOpen&&"active")},children)))})},"../../node_modules/ab-ui-library/components/SideNavigation/NavigationItem/types.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>NavigationItemTypes});var NavigationItemTypes=function(NavigationItemTypes){return NavigationItemTypes.MAIN="main",NavigationItemTypes.SUB="sub",NavigationItemTypes.HEADER="header",NavigationItemTypes.USER="user",NavigationItemTypes.PRODUCT="product",NavigationItemTypes.ACTION="action",NavigationItemTypes}({})},"../../node_modules/ab-ui-library/consts/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cv:()=>DROPDOWN_AND_INPUT_GAP,KR:()=>MONTHS,NA:()=>FILE_UPLOAD_ERRORS,OZ:()=>CUSTOM_SCROLL_MESSAGE,Qh:()=>CUSTOM_SCROLL_NAME,UZ:()=>SCREEN_SIZES,cc:()=>CARD_SELECT_TYPES});var SCREEN_SIZES={SMALL:768,MEDIUM:992,LARGE:1200},FILE_UPLOAD_ERRORS=function(FILE_UPLOAD_ERRORS){return FILE_UPLOAD_ERRORS[FILE_UPLOAD_ERRORS.size=0]="size",FILE_UPLOAD_ERRORS[FILE_UPLOAD_ERRORS.type=1]="type",FILE_UPLOAD_ERRORS}({}),CARD_SELECT_TYPES=function(CARD_SELECT_TYPES){return CARD_SELECT_TYPES.cardRadio="cardRadio",CARD_SELECT_TYPES.card="card",CARD_SELECT_TYPES}({}),CUSTOM_SCROLL_MESSAGE="Custom scroll event has fired",CUSTOM_SCROLL_NAME="CUSTOM_SCROLL_EVENT",MONTHS=[{label:"January",value:0},{label:"February",value:1},{label:"March",value:2},{label:"April",value:3},{label:"May",value:4},{label:"June",value:5},{label:"July",value:6},{label:"August",value:7},{label:"September",value:8},{label:"October",value:9},{label:"November",value:10},{label:"December",value:11}],DROPDOWN_AND_INPUT_GAP=10},"../../node_modules/ab-ui-library/extends-bd5bc174.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}__webpack_require__.d(__webpack_exports__,{_:()=>_extends})},"../../node_modules/ab-ui-library/helperComponents/ErrorMessage/ErrorMessage.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>ErrorMessage});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/ab-ui-library/components/Text/Text.js"),_IconDynamicComponent_IconDynamicComponent_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/ab-ui-library/helperComponents/IconDynamicComponent/IconDynamicComponent.js"),ErrorMessage=(__webpack_require__("../../node_modules/classnames/index.js"),__webpack_require__("../../node_modules/dayjs/dayjs.min.js"),function ErrorMessage(props){var message=props.message,icon=props.icon,dataId=props.dataId,className=props.className;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_3__.E,{className:"error-message ".concat(className),size:"small",type:"danger",dataId:dataId?"".concat(dataId,"-error-message"):""},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IconDynamicComponent_IconDynamicComponent_js__WEBPACK_IMPORTED_MODULE_4__.G,{componentName:icon,className:"mr-4",size:"xsmall",type:"danger"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,message)))})},"../../node_modules/ab-ui-library/helperComponents/IconDynamicComponent/IconDynamicComponent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>IconDynamicComponent});var react=__webpack_require__("../../node_modules/react/index.js"),IconComponentMapping={warningFilled:(0,react.lazy)((function(){return __webpack_require__.e(8845).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/ab-ui-library/components/SVGIcons/IconWarningFilled.js"))})),checkmarkCircleFilled:(0,react.lazy)((function(){return __webpack_require__.e(6400).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/ab-ui-library/components/SVGIcons/IconCheckmarkCircleFilled.js"))})),errorCircleFilled:(0,react.lazy)((function(){return __webpack_require__.e(8327).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/ab-ui-library/components/SVGIcons/IconErrorCircleFilled.js"))})),infoFilled:(0,react.lazy)((function(){return __webpack_require__.e(3945).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/ab-ui-library/components/SVGIcons/IconInfoFilled.js"))})),checkmark:(0,react.lazy)((function(){return __webpack_require__.e(4512).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/ab-ui-library/components/SVGIcons/IconCheckmark.js"))})),subtract:(0,react.lazy)((function(){return __webpack_require__.e(2545).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/ab-ui-library/components/SVGIcons/IconSubtract.js"))})),am:(0,react.lazy)((function(){return __webpack_require__.e(1315).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/ab-ui-library/components/SVGIcons/IconAm.js"))})),ru:(0,react.lazy)((function(){return __webpack_require__.e(8508).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/ab-ui-library/components/SVGIcons/IconRu.js"))})),us:(0,react.lazy)((function(){return __webpack_require__.e(9108).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/ab-ui-library/components/SVGIcons/IconGb.js"))}))},IconDynamicComponent=function IconDynamicComponent(_ref){var componentName=_ref.componentName,_ref$size=_ref.size,size=void 0===_ref$size?"small":_ref$size,_ref$type=_ref.type,type=void 0===_ref$type?"inverse":_ref$type,className=_ref.className;if(!componentName||!IconComponentMapping[componentName])return null;var Component=IconComponentMapping[componentName];return react.createElement(react.Suspense,{fallback:null},react.createElement(Component,{type,size,className}))}},"../../node_modules/ab-ui-library/helperComponents/Label/Label.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/ab-ui-library/components/Text/Text.js"),Label=(__webpack_require__("../../node_modules/classnames/index.js"),__webpack_require__("../../node_modules/dayjs/dayjs.min.js"),function Label(props){var text=props.text,_props$size=props.size,size=void 0===_props$size?"standard":_props$size,_props$required=props.required,required=void 0!==_props$required&&_props$required,_props$disabled=props.disabled,disabled=void 0!==_props$disabled&&_props$disabled,_props$className=props.className,className=void 0===_props$className?"":_props$className,labelAddons=props.labelAddons;return text?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_3__.E,{size,weight:"semibold",type:disabled?"disabled":"primary",className:"label flexbox align-items--start mb-8 ".concat(className)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,text,required?react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup",null,"*"):null,labelAddons)):null})},"../../node_modules/ab-ui-library/objectWithoutProperties-e1328986.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{_:()=>_objectWithoutProperties})},"../../node_modules/ab-ui-library/slicedToArray-83ed3e4c.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||_unsupportedIterableToArray(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{_:()=>_slicedToArray,a:()=>_arrayLikeToArray,b:()=>_unsupportedIterableToArray})},"./src/assets/images/avatar.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/avatar.bf272857.jpg"},"./src/stories/SideNavigation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SideNavigation:()=>SideNavigation_stories_SideNavigation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SideNavigation_stories});var defineProperty=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),slicedToArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("../../node_modules/react/index.js"),Text=__webpack_require__("../../node_modules/ab-ui-library/components/Text/Text.js"),IconWallet=__webpack_require__("../../node_modules/ab-ui-library/components/SVGIcons/IconWallet.js"),IconSignOut=__webpack_require__("../../node_modules/ab-ui-library/components/SVGIcons/IconSignOut.js"),IconSavings=__webpack_require__("../../node_modules/ab-ui-library/components/SVGIcons/IconSavings.js"),IconLockClosed=__webpack_require__("../../node_modules/ab-ui-library/components/SVGIcons/IconLockClosed.js"),IconHome=__webpack_require__("../../node_modules/ab-ui-library/components/SVGIcons/IconHome.js"),IconDocumentFilled=__webpack_require__("../../node_modules/ab-ui-library/components/SVGIcons/IconDocumentFilled.js"),IconDocument=__webpack_require__("../../node_modules/ab-ui-library/components/SVGIcons/IconDocument.js"),types=__webpack_require__("../../node_modules/ab-ui-library/components/SideNavigation/NavigationItem/types.js"),Divider=__webpack_require__("../../node_modules/ab-ui-library/components/Divider/Divider.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Block=(__webpack_require__("../../node_modules/dayjs/dayjs.min.js"),function Block(props){var children=props.children,label=props.label;return react.createElement("div",{className:"navigation-block"},react.createElement("div",{className:"navigation-block__label"},react.createElement(react.Fragment,null,react.createElement(Text.E,{size:"standard",type:"tertiary",className:"navigation-block__label__text"},label),react.createElement(Divider.c,{type:"primary",isHorizontal:!0,className:"navigation-block__label__divider"}))),react.createElement("div",{className:"navigation-block__inner"},children))}),IconChevronRight=__webpack_require__("../../node_modules/ab-ui-library/components/SVGIcons/IconChevronRight.js"),Button=__webpack_require__("../../node_modules/ab-ui-library/components/Button/Button.js"),SideNavigation=function SideNavigation(props){var children=props.children,_props$isOpen=props.isOpen,isOpen=void 0===_props$isOpen||_props$isOpen,setOpen=props.setOpen,_props$showToggleIcon=props.showToggleIcon,showToggleIcon=void 0===_props$showToggleIcon||_props$showToggleIcon,_props$className=props.className,className=void 0===_props$className?"":_props$className;return react.createElement("div",{className:classnames_default()("side-navigation",isOpen?"side-navigation--opened":null,className)},showToggleIcon&&react.createElement(Button.$,{iconProps:{Component:IconChevronRight.V},size:"small",className:"side-navigation__btn",onClick:function handleToggleOpen(){null==setOpen||setOpen(!isOpen)}}),children)},NavigationItem=__webpack_require__("../../node_modules/ab-ui-library/components/SideNavigation/NavigationItem/index.js"),Image=__webpack_require__("../../node_modules/ab-ui-library/components/Image/Image.js"),Avatar=__webpack_require__("../../node_modules/ab-ui-library/components/Avatar/Avatar.js");const logo_namespaceObject=__webpack_require__.p+"static/media/logo.830419fc.svg",logo_closed_namespaceObject=__webpack_require__.p+"static/media/logo-closed.018fabad.svg";var avatar=__webpack_require__("./src/assets/images/avatar.jpg"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const SideNavigation_stories={title:"Side Navigation",component:SideNavigation,argTypes:{}};var Template=function Template(args){var _useState=(0,react.useState)(!0),_useState2=(0,slicedToArray.A)(_useState,2),isOpen=_useState2[0],setIsOpen=_useState2[1];return(0,jsx_runtime.jsxs)(SideNavigation,_objectSpread(_objectSpread({},args),{},{setOpen:setIsOpen,isOpen,children:[(0,jsx_runtime.jsx)("header",{children:(0,jsx_runtime.jsx)(NavigationItem.s,{As:function As(){return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Image._,{imagePath:isOpen?logo_namespaceObject:logo_closed_namespaceObject,isBackgroundImage:!1})})},type:types.L.MAIN,isOpen})}),(0,jsx_runtime.jsxs)("main",{children:[(0,jsx_runtime.jsx)(Block,{isOpen,label:"Finance",children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(NavigationItem.s,{As:function As(){return(0,jsx_runtime.jsxs)("a",{href:"/https://ameriabank.am",children:[(0,jsx_runtime.jsx)(IconDocumentFilled.A,{}),(0,jsx_runtime.jsx)(Text.E,{children:"Accounts"})]})},type:types.L.MAIN,isOpen,active:!0}),(0,jsx_runtime.jsx)(NavigationItem.s,{As:function As(){return(0,jsx_runtime.jsxs)("a",{href:"/https://ameriabank.am",children:[(0,jsx_runtime.jsx)(IconLockClosed.A,{}),(0,jsx_runtime.jsx)(Text.E,{children:"Test"})]})},type:types.L.MAIN,isOpen,showAction:args.showAction}),(0,jsx_runtime.jsx)(NavigationItem.s,{As:function As(){return(0,jsx_runtime.jsxs)("a",{children:[(0,jsx_runtime.jsx)(IconHome.A,{}),(0,jsx_runtime.jsx)(Text.E,{children:"Cards"})]})},type:types.L.MAIN,isOpen,expandable:!0,children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(NavigationItem.s,{As:function As(){return(0,jsx_runtime.jsxs)("a",{href:"/https://ameriabank.am",children:[(0,jsx_runtime.jsx)(IconDocument.A,{}),(0,jsx_runtime.jsx)(Text.E,{children:"Accounts"})]})},type:types.L.SUB,isOpen}),(0,jsx_runtime.jsx)(NavigationItem.s,{As:function As(){return(0,jsx_runtime.jsxs)("a",{href:"/https://ameriabank.am",children:[(0,jsx_runtime.jsx)(IconSavings.A,{}),(0,jsx_runtime.jsx)(Text.E,{children:"Savings"})]})},type:types.L.SUB,isOpen}),(0,jsx_runtime.jsx)(NavigationItem.s,{As:function As(){return(0,jsx_runtime.jsxs)("a",{href:"/https://ameriabank.am",children:[(0,jsx_runtime.jsx)(IconWallet.A,{}),(0,jsx_runtime.jsx)(Text.E,{children:"Overdraft"})]})},type:types.L.SUB,isOpen})]})}),(0,jsx_runtime.jsx)(NavigationItem.s,{As:function As(){return(0,jsx_runtime.jsxs)("a",{href:"/https://ameriabank.am",children:[(0,jsx_runtime.jsx)(IconSavings.A,{}),(0,jsx_runtime.jsx)(Text.E,{children:"Savings"})]})},type:types.L.MAIN,isOpen,showBadge:!0,badgeContent:"888+"})]})}),(0,jsx_runtime.jsx)(Block,{isOpen,label:"Finance",children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(NavigationItem.s,{As:function As(){return(0,jsx_runtime.jsxs)("a",{href:"/https://ameriabank.am",children:[(0,jsx_runtime.jsx)(IconWallet.A,{}),(0,jsx_runtime.jsx)(Text.E,{children:"Overdraft"})]})},type:types.L.MAIN,isOpen}),(0,jsx_runtime.jsx)(NavigationItem.s,{As:function As(){return(0,jsx_runtime.jsxs)("a",{href:"/https://ameriabank.am",children:[(0,jsx_runtime.jsx)(IconHome.A,{}),(0,jsx_runtime.jsx)(Text.E,{children:"Mortgage"})]})},type:types.L.MAIN,isOpen}),(0,jsx_runtime.jsx)(NavigationItem.s,{As:function As(){return(0,jsx_runtime.jsxs)("a",{children:[(0,jsx_runtime.jsx)(IconSavings.A,{}),(0,jsx_runtime.jsx)(Text.E,{children:"Car Leon"})]})},type:types.L.MAIN,isOpen,expandable:!0,children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(NavigationItem.s,{As:function As(){return(0,jsx_runtime.jsxs)("a",{href:"/https://ameriabank.am",children:[(0,jsx_runtime.jsx)(IconSavings.A,{}),(0,jsx_runtime.jsx)(Text.E,{children:"Savings"})]})},type:types.L.SUB,isOpen}),(0,jsx_runtime.jsx)(NavigationItem.s,{As:function As(){return(0,jsx_runtime.jsxs)("a",{href:"/https://ameriabank.am",children:[(0,jsx_runtime.jsx)(IconDocument.A,{}),(0,jsx_runtime.jsx)(Text.E,{children:"Accounts"})]})},type:types.L.SUB,isOpen})]})})]})})]}),(0,jsx_runtime.jsx)("footer",{children:(0,jsx_runtime.jsx)(Block,{children:(0,jsx_runtime.jsx)(NavigationItem.s,{type:types.L.USER,isOpen,expandable:!0,As:function As(){return(0,jsx_runtime.jsxs)("div",{className:"flexbox align-items--center",children:[(0,jsx_runtime.jsx)(Avatar.e,{imagePath:avatar,size:"xsmall"}),isOpen?(0,jsx_runtime.jsx)(Text.E,{className:"flexbox align-items--center justify-content--between profile-text",children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Zhorzhik Grigoryan",(0,jsx_runtime.jsx)("a",{href:"https://ameriabank.am",children:(0,jsx_runtime.jsx)(IconSignOut.A,{})})]})}):null]})},children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(NavigationItem.s,{As:function As(){return(0,jsx_runtime.jsx)("a",{href:"/",children:(0,jsx_runtime.jsx)(Text.E,{className:"text-truncate",children:" Zhorzhik Grigoryan"})})},type:types.L.SUB,isOpen}),(0,jsx_runtime.jsx)(NavigationItem.s,{As:function As(){return(0,jsx_runtime.jsxs)("a",{href:"/https://ameriabank.am",children:[(0,jsx_runtime.jsx)(IconSignOut.A,{}),(0,jsx_runtime.jsx)(Text.E,{children:"Logout"})]})},type:types.L.SUB,isOpen})]})})})})]}))};Template.displayName="Template";var SideNavigation_stories_SideNavigation=Template.bind({});SideNavigation_stories_SideNavigation.args={};const __namedExportsOrder=["SideNavigation"]}}]);