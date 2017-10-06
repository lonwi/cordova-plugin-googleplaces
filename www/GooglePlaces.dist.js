"use strict";function getRawTag(e){var o=hasOwnProperty.call(e,symToStringTag$1),t=e[symToStringTag$1];try{e[symToStringTag$1]=void 0;var n=!0}catch(e){}var r=nativeObjectToString.call(e);return n&&(o?e[symToStringTag$1]=t:delete e[symToStringTag$1]),r}function objectToString(e){return nativeObjectToString$1.call(e)}function baseGetTag(e){return null==e?void 0===e?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(e)?_getRawTag(e):_objectToString(e)}function isObject(e){var o=typeof e;return null!=e&&("object"==o||"function"==o)}function isFunction(e){if(!isObject_1(e))return!1;var o=_baseGetTag(e);return o==funcTag||o==genTag||o==asyncTag||o==proxyTag}function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}var commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},freeGlobal="object"==typeof commonjsGlobal&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,_freeGlobal=freeGlobal,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=_freeGlobal||freeSelf||Function("return this")(),_root=root,Symbol$1=_root.Symbol,_Symbol=Symbol$1,objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag$1=_Symbol?_Symbol.toStringTag:void 0,_getRawTag=getRawTag,objectProto$1=Object.prototype,nativeObjectToString$1=objectProto$1.toString,_objectToString=objectToString,nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=_Symbol?_Symbol.toStringTag:void 0,_baseGetTag=baseGetTag,isObject_1=isObject,asyncTag="[object AsyncFunction]",funcTag="[object Function]",genTag="[object GeneratorFunction]",proxyTag="[object Proxy]",isFunction_1=isFunction,_createClass=function(){function e(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(o,t,n){return t&&e(o.prototype,t),n&&e(o,n),o}}(),GooglePlaces=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"currentPlace",value:function(e,o){cordova.exec(e,function(e){return o(new Error(e))},"GooglePlaces","currentPlace",[])}},{key:"autocompleteQuery",value:function(){for(var e=[],o=[],t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=!0,c=!1,l=void 0;try{for(var i,u=n[Symbol.iterator]();!(a=(i=u.next()).done);a=!0){var s=i.value;isFunction_1(s)?o.push(s):e.push(s)}}catch(e){c=!0,l=e}finally{try{!a&&u.return&&u.return()}finally{if(c)throw l}}var g=function(){},f=function(){};o.length>0&&(g=o[0],o.length>0&&(f=function(e){return o[1](new Error(e))})),e.length>3||o.length>2?f(new Error("GooglePlaces: wrong arguments for autocompleteQuery(query, bounds, filter, success, failure)")):cordova.exec(g,f,"GooglePlaces","autocompleteQuery",e)}},{key:"pickPlace",value:function(){for(var e=[],o=[],t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=!0,c=!1,l=void 0;try{for(var i,u=n[Symbol.iterator]();!(a=(i=u.next()).done);a=!0){var s=i.value;isFunction_1(s)?o.push(s):e.push(s)}}catch(e){c=!0,l=e}finally{try{!a&&u.return&&u.return()}finally{if(c)throw l}}var g=function(){},f=function(){};o.length>0&&(g=o[0],o.length>0&&(f=function(e){return o[1](new Error(e))})),e.length>1||o.length>2?f(new Error("GooglePlaces: wrong arguments for pickPlace(bounds, success, failure)")):cordova.exec(g,f,"GooglePlaces","pickPlace",[])}},{key:"showPlaceAutocomplete",value:function(e,o){cordova.exec(e,function(e){return o(new Error(e))},"GooglePlaces","showPlaceAutocomplete",[])}}]),e}(),AutocompleteFilterTypes={NoFilter:"no_filter",Geocode:"geocode",Address:"address",Establishment:"establishment",Region:"region",City:"city"};module.exports=new GooglePlaces,module.exports.AutocompleteFilterTypes=AutocompleteFilterTypes;
