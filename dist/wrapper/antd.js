!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.antd=t(require("react")):(e.noformWrapper=e.noformWrapper||{},e.noformWrapper.antd=t(e.React))}(window,function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=41)}([function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,r){e.exports=!r(0)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){var r=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,r){var n=r(22);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},function(e,t,r){var n=r(7),a=r(6);e.exports=function(e){return n(a(e))}},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(t,r){t.exports=e},function(e,t,r){var n=r(6);e.exports=function(e){return Object(n(e))}},function(e,t){t.f={}.propertyIsEnumerable},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},function(e,t){e.exports=!0},function(e,t,r){var n=r(3),a=r(4),u=a["__core-js_shared__"]||(a["__core-js_shared__"]={});(e.exports=function(e,t){return u[e]||(u[e]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:r(16)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(e,t,r){var n=r(17)("keys"),a=r(15);e.exports=function(e){return n[e]||(n[e]=a(e))}},function(e,t,r){var n=r(5),a=Math.max,u=Math.min;e.exports=function(e,t){return(e=n(e))<0?a(e+t,0):u(e,t)}},function(e,t,r){var n=r(5),a=Math.min;e.exports=function(e){return e>0?a(n(e),9007199254740991):0}},function(e,t,r){var n=r(8),a=r(20),u=r(19);e.exports=function(e){return function(t,r,o){var i,l=n(t),c=a(l.length),f=u(o,c);if(e&&r!=r){for(;c>f;)if((i=l[f++])!=i)return!0}else for(;c>f;f++)if((e||f in l)&&l[f]===r)return e||f||0;return!e&&-1}}},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t,r){var n=r(9),a=r(8),u=r(21)(!1),o=r(18)("IE_PROTO");e.exports=function(e,t){var r,i=a(e),l=0,c=[];for(r in i)r!=o&&n(i,r)&&c.push(r);for(;t.length>l;)n(i,r=t[l++])&&(~u(c,r)||c.push(r));return c}},function(e,t,r){var n=r(23),a=r(14);e.exports=Object.keys||function(e){return n(e,a)}},function(e,t,r){"use strict";var n=r(24),a=r(13),u=r(12),o=r(11),i=r(7),l=Object.assign;e.exports=!l||r(0)(function(){var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach(function(e){t[e]=e}),7!=l({},e)[r]||Object.keys(l({},t)).join("")!=n})?function(e,t){for(var r=o(e),l=arguments.length,c=1,f=a.f,s=u.f;l>c;)for(var d,p=i(arguments[c++]),v=f?n(p).concat(f(p)):n(p),m=v.length,h=0;m>h;)s.call(p,d=v[h++])&&(r[d]=p[d]);return r}:l},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){var n=r(2);e.exports=function(e,t){if(!n(e))return e;var r,a;if(t&&"function"==typeof(r=e.toString)&&!n(a=r.call(e)))return a;if("function"==typeof(r=e.valueOf)&&!n(a=r.call(e)))return a;if(!t&&"function"==typeof(r=e.toString)&&!n(a=r.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},function(e,t,r){var n=r(2),a=r(4).document,u=n(a)&&n(a.createElement);e.exports=function(e){return u?a.createElement(e):{}}},function(e,t,r){e.exports=!r(1)&&!r(0)(function(){return 7!=Object.defineProperty(r(28)("div"),"a",{get:function(){return 7}}).a})},function(e,t,r){var n=r(2);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t,r){var n=r(30),a=r(29),u=r(27),o=Object.defineProperty;t.f=r(1)?Object.defineProperty:function(e,t,r){if(n(e),t=u(t,!0),n(r),a)try{return o(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},function(e,t,r){var n=r(31),a=r(26);e.exports=r(1)?function(e,t,r){return n.f(e,t,a(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,r){var n=r(33);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,a){return e.call(t,r,n,a)}}return function(){return e.apply(t,arguments)}}},function(e,t,r){var n=r(4),a=r(3),u=r(34),o=r(32),i=r(9),l=function(e,t,r){var c,f,s,d=e&l.F,p=e&l.G,v=e&l.S,m=e&l.P,h=e&l.B,y=e&l.W,b=p?a:a[t]||(a[t]={}),x=b.prototype,g=p?n:v?n[t]:(n[t]||{}).prototype;for(c in p&&(r=t),r)(f=!d&&g&&void 0!==g[c])&&i(b,c)||(s=f?g[c]:r[c],b[c]=p&&"function"!=typeof g[c]?r[c]:h&&f?u(s,n):y&&g[c]==s?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(s):m&&"function"==typeof s?u(Function.call,s):s,m&&((b.virtual||(b.virtual={}))[c]=s,e&l.R&&x&&!x[c]&&o(x,c,s)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,e.exports=l},function(e,t,r){var n=r(35);n(n.S+n.F,"Object",{assign:r(25)})},function(e,t,r){r(36),e.exports=r(3).Object.assign},function(e,t,r){e.exports={default:r(37),__esModule:!0}},function(e,t,r){"use strict";t.__esModule=!0;var n,a=r(38),u=(n=a)&&n.__esModule?n:{default:n};t.default=u.default||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}},function(e,t,r){var n,a,u;a=[e,t,r(40),r(39),r(10)],void 0===(u="function"==typeof(n=function(e,t,r,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=l(r),o=l(n),i=l(a);function l(e){return e&&e.__esModule?e:{default:e}}var c=parseInt(i.default.version,10)>15,f=void 0,s="ant",d=function(e){return e};function p(e){return null===e||void 0===e?"":e}function v(e){return null!==e&&void 0!==e&&(!0===e||"true"===e)}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={},n=t.keyname,a=void 0===n?"value":n,u=t.defaultValue,o=void 0===u?"":u,i=t.format,l=void 0===i?d:i;return"value"in e&&(r[a]=l(e.value||o)),r}function h(e){if(null===e||void 0===e)return null;if(Array.isArray(e)){var t=e.map(function(e){return i.default.createElement("span",{className:"multi-value-item"},e)});return i.default.createElement("div",{className:"multi-value-item-wrapper"},t)}return c?e:i.default.createElement("span",{className:"multi-value-item"},e)}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=p(e.value),r=[].concat(t);if(Array.isArray(e.dataSource)||Array.isArray(e.options)){var n=e.dataSource||e.options,a=[];return n.forEach(function(e){-1!==r.indexOf(e.value)&&a.push(e.label)}),h(a)}if(Array.isArray(e.children)){var u=[];return e.children.forEach(function(e){e.props&&e.props.children&&-1!==r.indexOf(e.props.value)&&u.push(e.props.children)}),h(u)}return null}var b={fileList:[],beforeUpload:function(){},onChange:function(){},onSuccess:function(){}};function x(e){e.error,e.status;var t=e.value,r=m(e);return"preview"===e.status?h(p(t)):i.default.createElement(f.Input,(0,o.default)({},e,r))}function g(e){e.error,e.status;var t=e.value,r=m(e);return"preview"===e.status?h(p(t)):i.default.createElement(f.Input.TextArea,(0,o.default)({},e,r))}function w(e){var t=e.className,r=void 0===t?"":t,n=e.value,a=e.options,l=(0,u.default)(e,["options"]),c={};a&&Array.isArray(a)&&!e.children&&(c.children=a.map(function(e){var t=e.label,r=e.value;return i.default.createElement(f.Select.Option,{value:r},t)}));var d=m(e);return"preview"===e.status?i.default.createElement(f.Select,(0,o.default)({placeholder:""},e,{disabled:!0,className:(r||"")+" "+s+"-preview-select",value:p(n)})):i.default.createElement(f.Select,(0,o.default)({},l,c,d))}function E(e){var t=m(e);return"preview"===e.status?y(e):i.default.createElement(f.Checkbox.Group,(0,o.default)({},e,t))}function O(e){var t=m(e);return"preview"===e.status?y(e):i.default.createElement(f.Radio.Group,(0,o.default)({},e,t))}function S(e){var t=m(e,{format:v,keyname:"checked"});if("preview"===e.status){var r=v(e.value);return e.children?r?h(e.children):null:(console.warn("label必须写在Checkbox内，如需编写外部label, 请使用suffix、prefix等熟悉"),null)}return i.default.createElement(f.Checkbox,(0,o.default)({},e,t,{onChange:function(t){var r=t.target.checked,n=e.onChange;n&&n(r)}}))}function _(e){var t=m(e,{format:v,keyname:"checked"});if("preview"===e.status){var r=v(e.value);return e.children?r?h(e.children):null:(console.warn("label必须写在Radio内，如需编写外部label, 请使用suffix、prefix等熟悉"),null)}return i.default.createElement(f.Radio,(0,o.default)({},e,t,{onChange:function(t){var r=t.target.checked,n=e.onChange;n&&n(r)}}))}function C(e){var t=m(e,{format:v,keyname:"checked"});if("preview"===e.status){var r=v(e.value);if(e.checkedChildren||e.unCheckedChildren){var n=r?e.checkedChildren:e.unCheckedChildren;return h(n)}return h(""+r)}return i.default.createElement(f.Switch,(0,o.default)({},e,t))}function j(e){var t=e.className,r=void 0===t?"":t,n=e.value,a=m(e);return"preview"===e.status?i.default.createElement(f.Slider,(0,o.default)({className:(r||"")+" "+s+"-preview-slider"},e,{disabled:!0,value:p(n)})):i.default.createElement(f.Slider,(0,o.default)({},e,a))}function k(e){var t=e.className,r=void 0===t?"":t,n=e.value,a=m(e);return"preview"===e.status?i.default.createElement(f.DatePicker,(0,o.default)({placeholder:""},e,{value:n,locale:{datePlaceholder:"",monthPlaceholder:"",yearPlaceholder:"",rangeStartPlaceholder:"",rangeEndPlaceholder:""},disabled:!0,className:(r||"")+" "+s+"-preview-datepicker"})):i.default.createElement(f.DatePicker,(0,o.default)({},e,a,{onChange:function(t,r){var n=e.onChange;n&&n(t,{escape:!0})}}))}function P(e){var t=e.className,r=void 0===t?"":t,n=e.value,a=m(e);return"preview"===e.status?i.default.createElement(f.TimePicker,(0,o.default)({placeholder:""},e,{value:n,locale:{placeholder:""},disabled:!0,className:(r||"")+" "+s+"-preview-datepicker"})):i.default.createElement(f.TimePicker,(0,o.default)({},e,a,{onChange:function(t,r){var n=e.onChange;n&&n(t,{escape:!0})}}))}function N(e){var t=e.value,r=m(e);return"preview"===e.status?h(t):i.default.createElement(f.InputNumber,(0,o.default)({},e,r))}function M(e){var t=e.value,r=m(e);return"preview"===e.status?i.default.createElement(f.Rate,(0,o.default)({},e,{disabled:!0,value:p(t)})):i.default.createElement(f.Rate,(0,o.default)({},e,r))}function A(e){var t=e.className,r=void 0===t?"":t,n=e.value,a=m(e);return"preview"===e.status?i.default.createElement(f.Cascader,(0,o.default)({placeholder:""},e,{className:(r||"")+" "+s+"-preview-select",disabled:!0,value:p(n)})):i.default.createElement(f.Cascader,(0,o.default)({},e,a))}function T(e){var t=e.className,r=void 0===t?"":t,n=e.value,a=m(e);return"preview"===e.status?i.default.createElement(f.TreeSelect,(0,o.default)({placeholder:""},e,{className:(r||"")+" "+s+"-preview-select",disabled:!0,value:p(n)})):i.default.createElement(f.TreeSelect,(0,o.default)({},e,a))}function R(e){var t=function(e){return null===e||void 0===e?[]:e}(e.value),r=(e.name,(0,u.default)(e,["name"])),n=e.className,a=void 0===n?"":n;if("preview"===e.status)return i.default.createElement(f.Upload,(0,o.default)({},b,r,{onChange:l,className:(a||"")+" "+s+"-preview-upload",disabled:!0,fileList:t}));var l=function(t){var r=t||{},n=r.fileList,a=void 0===n?[]:n;e.onChange&&e.onChange(a)};return i.default.createElement(f.Upload,(0,o.default)({},b,r,{onChange:l,fileList:t}))}function I(e){var t=e.className,r=void 0===t?"":t,n=e.value,a=e.options,l=(0,u.default)(e,["options"]),c=m(e),d={};return a&&Array.isArray(a)&&!e.children&&(d.children=a.map(function(e){var t=e.label,r=e.value;return i.default.createElement(f.AutoComplete.Option,{key:r},t)})),"preview"===e.status?i.default.createElement(f.AutoComplete,(0,o.default)({placeholder:""},e,{disabled:!0,className:(r||"")+" "+s+"-preview-select",value:p(n)})):i.default.createElement(f.AutoComplete,(0,o.default)({},l,d,c))}function G(e){var t=e.className,r=void 0===t?"":t,n=e.value,a=e.options,l=(0,u.default)(e,["value","options"]),c=f.Mention,d=c.toContentState,v=(c.toString,m(e,{format:function(e){return"string"==typeof e?d(e||""):e}})),h={};return!Array.isArray(a)||"suggestions"in e||(h.suggestions=a),"preview"===e.status?i.default.createElement(f.Mention,(0,o.default)({placeholder:""},h,e,{disabled:!0,className:(r||"")+" "+s+"-preview-select",value:p(n)})):i.default.createElement(f.Mention,(0,o.default)({},l,h,v,{onChange:function(t){var r=e.onChange;r&&r(t,{escape:!0})}}))}t.default=function(e){return(f=e).Select&&f.Select.Option&&(w.Option=f.Select.Option),S.Group=E,_.Group=O,f.TreeSelect&&(T.Node=f.TreeSelect.Node),x.Textarea=g,(0,o.default)({},e,{Input:x,Select:w,Checkbox:S,Radio:_,AutoComplete:I,Switch:C,Slider:j,DatePicker:k,TimePicker:P,InputNumber:N,Rate:M,Mention:G,Cascader:A,TreeSelect:T,Upload:R})},e.exports=t.default})?n.apply(t,a):n)||(e.exports=u)}])});