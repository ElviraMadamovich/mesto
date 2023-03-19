(()=>{"use strict";var t={300:(t,e,n)=>{t.exports=n.p+"fb45a50f41a10dc6a5e0.jpg"},866:(t,e,n)=>{t.exports=n.p+"81465a42575c1ee17519.jpg"},616:(t,e,n)=>{t.exports=n.p+"7ef2717bf80e91b5afad.jpg"},203:(t,e,n)=>{t.exports=n.p+"6605ea0e56b512defabe.jpg"},302:(t,e,n)=>{t.exports=n.p+"25c9c053a607d7b82cc1.jpg"},841:(t,e,n)=>{t.exports=n.p+"90f629a739397a92ed66.jpg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.p="",n.b=document.baseURI||self.location.href,(()=>{var t=document.querySelector(".profile__edit"),e=document.querySelector(".popup__content_input_name"),r=document.querySelector(".popup__content_input_work"),o=document.querySelector(".card-popup__form"),i=document.querySelector(".profile-popup__form"),u=document.querySelector(".avatar-popup__form"),c=document.querySelector(".profile__button"),a=document.querySelector(".profile__button-avatar"),s=document.querySelector("#profile-submit"),l=document.querySelector("#avatar-submit"),f=document.querySelector("#delete-submit"),p=document.querySelector("#card-submit"),y={formSelector:".popup__form",inputSelector:".popup__content",inputError:"popup__content_error_active",submitButtonSelector:".popup__confirm",inactiveButtonClass:"popup__confirm_disabled",inputErrorClass:"popup__error",errorClass:"popup__error_active"};function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}new URL(n(203),n.b),new URL(n(866),n.b),new URL(n(841),n.b),new URL(n(616),n.b),new URL(n(300),n.b),new URL(n(302),n.b);var v=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._settings=e,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)),this._button=this._formElement.querySelector(this._settings.submitButtonSelector)}var e,n;return e=t,(n=[{key:"_checkValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hideInputError",value:function(t){var e=document.getElementById("".concat(t.id,"-error"));e.textContent="",e.classList.remove(this._settings.errorClass),t.classList.remove(this._settings.inputError)}},{key:"_showInputError",value:function(t,e){var n=document.getElementById("".concat(t.id,"-error"));n.textContent=e,n.classList.add(this._settings.errorClass),t.classList.add(this._settings.inputError)}},{key:"_hasInvalidInput",value:function(){return!this._inputList.every((function(t){return t.validity.valid}))}},{key:"_addEventListeners",value:function(){var t=this;this.toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkValidity(e),t.toggleButtonState()}))}))}},{key:"_disableButton",value:function(){this._button.setAttribute("disabled",!0),this._button.classList.add(this._settings.inactiveButtonClass)}},{key:"_enableButton",value:function(){this._button.removeAttribute("disabled",!0),this._button.classList.remove(this._settings.inactiveButtonClass)}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this._enableButton()}},{key:"enableValidation",value:function(){this._addEventListeners()}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const m=v;function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}var g=function(){function t(e,n,r,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._template=document.querySelector(n),this._likes=e.likes,this._ownerId=e.owner._id,this._handleLike=u,this._handleDeleteButtonClick=i,this._handleCardClick=o,this._userId=r}var e,n;return e=t,(n=[{key:"handleLikes",value:function(t){var e=this;0!==t.length?t.forEach((function(t){t._id===e._userId?e._likeButton.classList.add("elements__like_active"):e._likeButton.classList.remove("elements__like_active")})):this._likeButton.classList.remove("elements__like_active"),this._likesCounter.textContent=t.length}},{key:"createCard",value:function(){var t=this._template.content.querySelector(".elements__pic").cloneNode(!0);return this._likesCounter=t.querySelector(".elements__likes-qty"),this._likesCounter.textContent=this._likes.length,this._deleteCard=t.querySelector(".elements__delete"),t.querySelector(".elements__name").textContent=this._name,this._cardPic=t.querySelector(".elements__image"),this._cardPic.setAttribute("src",this._link),this._cardPic.setAttribute("alt","Изображение ".concat(this._name)),this._likeButton=t.querySelector(".elements__like"),this._cardId=t,this._userId===this._ownerId&&this._deleteCard.classList.add("elements__delete_inactive"),this.handleLikes(this._likes),this._setEventListeners(),this._cardId}},{key:"_checkStatusLike",value:function(){return this._likeButton.classList.contains("elements__like_active")}},{key:"_setEventListeners",value:function(){var t=this;this._deleteCard.addEventListener("click",(function(){return t._handleDeleteButtonClick(t._cardId)})),this._likeButton.addEventListener("click",(function(){return t._handleLike(t._checkStatusLike(),t)})),this._cardPic.addEventListener("click",(function(){return t._handleCardClick(t._name,t._link)}))}},{key:"getCardId",value:function(){return this._cardId}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const S=g;function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}var j=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._elementsContainer=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(){var t=this;this._items.forEach((function(e){t._renderer(e,t._id)}))}},{key:"setItem",value:function(t,e){this._items=t,this._id=e}},{key:"addItemAppend",value:function(t){this._elementsContainer.append(t)}},{key:"addItemPrepend",value:function(t){this._elementsContainer.prepend(t)}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}var P=function(){function t(e){var n=e.name,r=e.work,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=document.querySelector(n),this.work=document.querySelector(r),this.avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this.name.textContent,work:this.work.textContent}}},{key:"setUserName",value:function(t){this.name.textContent=t.name}},{key:"setUserWork",value:function(t){this.work.textContent=t.about}},{key:"setUserAvatar",value:function(t){this.avatar.src=t.avatar}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}var R=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._closeButton=this._popup.querySelector(".popup__close"),this.close=this.close.bind(this),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleOverlayClose",value:function(t){t.target.classList.contains("popup")&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._closeButton.addEventListener("mousedown",(function(){return t.close()})),document.addEventListener("mousedown",this._handleOverlayClose)}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=B(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},q.apply(this,arguments)}function B(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function U(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(r);if(o){var n=A(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return U(this,t)});function u(t){var e,n=t.popupSelector,r=t.submit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._submit=r,e._form=e._popup.querySelector(".popup__form"),e._inputList=e._form.querySelectorAll(".popup__content"),e}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;q(A(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submit(t._getInputValues())}))}},{key:"close",value:function(){q(A(u.prototype),"close",this).call(this),this._form.reset()}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(R);function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==N(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===N(o)?o:String(o)),r)}var o}function M(){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=H(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},M.apply(this,arguments)}function H(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=z(t)););return t}function J(t,e){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},J(t,e)}function W(t,e){if(e&&("object"===N(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function z(t){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},z(t)}var $=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&J(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=z(r);if(o){var n=z(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return W(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._imageMax=e._popup.querySelector(".image-popup__pic"),e._imageName=e._popup.querySelector(".image-popup__name"),e}return e=u,(n=[{key:"open",value:function(t,e){M(z(u.prototype),"open",this).call(this),this._imageMax.src=e,this._imageName.textContent=t,this._imageMax.alt=t}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(R);function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==F(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===F(o)?o:String(o)),r)}var o}function K(){return K="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=Q(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},K.apply(this,arguments)}function Q(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Z(t)););return t}function X(t,e){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},X(t,e)}function Y(t,e){if(e&&("object"===F(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function Z(t){return Z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Z(t)}var tt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&X(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Z(r);if(o){var n=Z(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Y(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._form=e._popup.querySelector(".popup__form"),e}return e=u,(n=[{key:"updateSubmitHandler",value:function(t){this._handleSubmit=t}},{key:"setEventListeners",value:function(){var t=this;K(Z(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit()}))}}])&&G(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(R);function et(t){return et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},et(t)}function nt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==et(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==et(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===et(o)?o:String(o)),r)}var o}function rt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var ot=new(function(){function t(e){var n=e.url,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=n,this._headers=r}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"updateDetails",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:"".concat(t.name),about:"".concat(t.work)})}).then((function(t){return e._checkResponse(t)}))}},{key:"addNewCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.caption,link:t.link})}).then((function(t){return e._checkResponse(t)}))}},{key:"deleteUserCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"putLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"removeLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"changeUserAvatar",value:function(t){var e=this;return fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then((function(t){return e._checkResponse(t)}))}},{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}}])&&nt(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({url:"https://mesto.nomoreparties.co/v1/cohort-61",headers:{authorization:"794ac1be-5763-4261-9759-e13254ae56ae","Content-Type":"application/json"}});Promise.all([ot.getUserInfo(),ot.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(s)throw o}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return rt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?rt(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ct.setUserName(o),ct.setUserWork(o),ct.setUserAvatar(o),ut.setItem(i,o._id),ut.renderItems()})).catch((function(t){console.log(t)}));var it=function(t,e){var n=new S(t,"#elements-template",e,yt,(function(){at.open(),at.updateSubmitHandler((function(){f.textContent="Удаление...",ot.deleteUserCard(t._id).then((function(){n.remove(),at.close()})).catch((function(t){console.log(t)})).finally((function(){f.textContent="Да"}))}))}),(function(e,n){e?ot.removeLike(t._id).then((function(t){n.handleLikes(t.likes)})).catch((function(t){console.log(t)})):ot.putLike(t._id).then((function(t){n.handleLikes(t.likes)})).catch((function(t){console.log(t)}))})).createCard();return n},ut=new j({items:elementsPics,renderer:function(t,e){ut.addItemAppend(it(t,e))}},".elements__pics"),ct=new P({name:".profile__title",work:".profile__subtitle",avatar:".profile__image"},ot.getUserInfo.bind(ot)),at=new tt(".confirmation-popup");at.setEventListeners();var st=new $(".image-popup");st.setEventListeners();var lt=new D({popupSelector:".profile-popup",submit:function(t){s.textContent="Сохранение...",ot.updateDetails(t).then((function(t){ct.setUserName(t),ct.setUserWork(t),lt.close()})).catch((function(t){console.log(t)})).finally((function(){s.textContent="Сохранить"}))}});lt.setEventListeners();var ft=new D({popupSelector:".card-popup",submit:function(t){p.textContent="Создание...",ot.addNewCard(t).then((function(t){ut.addItemPrepend(it(t,t.owner._id)),ft.close()})).catch((function(t){console.log(t)})).finally((function(){p.textContent="Создать"}))}});ft.setEventListeners();var pt=new D({popupSelector:".avatar-popup",submit:function(t){l.textContent="Сохранение...",ot.changeUserAvatar(t).then((function(t){ct.setUserAvatar(t),pt.close()})).catch((function(t){console.log(t)})).finally((function(){l.textContent="Сохранить"}))}});function yt(t,e){st.open(t,e)}pt.setEventListeners(),t.addEventListener("click",(function(){var t=ct.getUserInfo();e.value=t.name,r.value=t.work,ht.toggleButtonState(),lt.open()})),c.addEventListener("click",(function(){dt.toggleButtonState(),ft.open()})),a.addEventListener("click",(function(){vt.toggleButtonState(),pt.open()}));var ht=new m(y,i),dt=new m(y,o),vt=new m(y,u);ht.enableValidation(),dt.enableValidation(),vt.enableValidation()})()})();