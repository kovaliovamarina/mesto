(()=>{"use strict";var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".profile__add-button"),n=document.querySelector(".popup_type_profile"),r=document.querySelector(".popup_type_card-add"),o=document.querySelector(".popup_type_picture"),i=document.querySelector(".popup_type_delete"),a=document.querySelector(".popup_type_avatar"),u=document.forms.formCreate,c=document.forms.formEdit,s=document.forms.formAvatar,l=formEdit.querySelector(".popup__input_text_name"),f=formEdit.querySelector(".popup__input_text_job"),p=r.querySelector(".popup__input_text_name-add"),h=r.querySelector(".popup__input_text_link-add"),d=document.querySelector(".profile__data-name"),_=document.querySelector(".profile__data-job"),y=document.querySelector(".popup__img"),v=document.querySelector(".popup__title"),m=document.querySelector(".elements"),b=document.querySelector(".profile__photo"),k=document.querySelector(".popup__input_text_link-avatar"),g={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formSelector=t.formSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButtonSelector=this._formElement.querySelector(t.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_toggleButtonState",value:function(){this._formElement.checkValidity()?(this._submitButtonSelector.classList.remove(this._inactiveButtonClass),this._submitButtonSelector.disabled=!1):(this._submitButtonSelector.classList.add(this._inactiveButtonClass),this._submitButtonSelector.disabled=!0)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),e._setEventListeners()}))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t,n){var r=t.data,o=t.userId,i=t.handleCardClick,a=t.handleDeleteClick,u=t.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r.name,this._link=r.link,this._cardSelector=n,this._handleCardClick=i,this._handleDeleteClick=a,this._cardId=r.cardId,this._owner=r.owner,this._ownerId=this._owner._id,this._id=r._id,this._userId=o,this._likes=r.likes,this._handleLikeClick=u,this._isLike=!1}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){var e=this,t=document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0);return this._ownerId===this._userId&&t.querySelector(".element__delete-button").classList.add("element__delete-button_owner"),this._likes.forEach((function(n){e._userId===n._id&&(t.querySelector(".element__like-button").classList.add("element__like-button_active"),e._isLike=!e._isLike)})),t}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._image=this._element.querySelector(".element__img"),this._likeButton=this._element.querySelector(".element__like-button"),this._image.src=this._link,this._element.querySelector(".element__text").textContent=this._name,this._image.alt=this._name,this._element.querySelector(".element__like-number").textContent=this._likes.length,this._setEventListeners(),this._element}},{key:"delete",value:function(){this._element.remove(),this._element=null}},{key:"statusLike",value:function(){this._isLike=!this._isLike}},{key:"totalLikes",value:function(e){this._likes.length=e,this._element.querySelector(".element__like-number").textContent=this._likes.length}},{key:"handleLikePopup",value:function(){this._likeButton.classList.toggle("element__like-button_active")}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__delete-button").addEventListener("click",(function(){e._handleDeleteClick(e)})),this._likeButton.addEventListener("click",(function(){e._handleLikeClick()})),this._image.addEventListener("click",(function(){e._handleCardClick()}))}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerSelector=n}var t,n;return t=e,(n=[{key:"renderer",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItemAppend",value:function(e){this._containerSelector.append(e)}},{key:"addItemPrepend",value:function(e){this._containerSelector.prepend(e)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){var n=t.nameProfile,r=t.job,o=t.photoUser;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._job=r,this._avatar=o,this._id=""}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{nameProfile:this._name.textContent,job:this._job.textContent,id:this._id}}},{key:"setUserInfo",value:function(e,t,n){this._name.textContent=e,this._job.textContent=t,this._id=n}},{key:"setUserAvatar",value:function(e){var t=e.avatar;this._avatar.style.backgroundImage="url('".concat(t,"')")}}],n&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close-button")&&e.close()}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=x(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},T.apply(this,arguments)}function x(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}function B(e,t){return B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},B(e,t)}function D(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&B(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popupForm=n._popup.querySelector(".popup__form"),n._submitForm=t,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues=this._popupForm.querySelectorAll(".popup__input"),this._formInput={},this._inputValues.forEach((function(t){e._formInput[t.name]=t.value})),this._formInput}},{key:"setEventListeners",value:function(){var e=this;T(V(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){e._submitForm(t,e._getInputValues())}))}},{key:"close",value:function(){T(V(a.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"dataLoading",value:function(e){this._popup.querySelector(".popup__button").textContent=e?"Сохранить...":"Сохранить"}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(q);function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(){return J="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=G(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},J.apply(this,arguments)}function G(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}function H(e,t){return H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},H(e,t)}function z(e,t){if(t&&("object"===F(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&H(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(r);if(o){var n=M(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"openImage",value:function(e){y.src=e.link,v.textContent=e.name,y.alt=v.textContent,J(M(a.prototype),"open",this).call(this)}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(q);function Q(e){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(e)}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(){return X="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},X.apply(this,arguments)}function Y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ee(e)););return e}function Z(e,t){return Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Z(e,t)}function $(e,t){if(t&&("object"===Q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function ee(e){return ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ee(e)}var te=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&Z(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ee(r);if(o){var n=ee(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return $(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._btmConfirm=n._popup.querySelector(".popup__button"),n._submit=t,n}return t=a,(n=[{key:"openPopupDel",value:function(e){this._elem=e,X(ee(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._btmConfirm.addEventListener("click",(function(t){e._submit(t,e._elem)})),X(ee(a.prototype),"setEventListeners",this).call(this)}}])&&W(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(q);function ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var re=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"/cards",{method:"GET",headers:this._headers}).then(oe)}},{key:"getUserInfo",value:function(){return fetch(this._baseUrl+"/users/me",{method:"GET",headers:this._headers}).then(oe)}},{key:"setProfile",value:function(e,t){return fetch(this._baseUrl+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(oe)}},{key:"setUserAvatar",value:function(e){return fetch(this._baseUrl+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(oe)}},{key:"addCard",value:function(e,t){return fetch(this._baseUrl+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(oe)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(oe)}},{key:"setLikes",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(oe)}},{key:"removeLikes",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(oe)}}])&&ne(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),oe=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},ie=new re({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-34",headers:{authorization:"37fe7dee-eecf-45fa-a2c0-beeee86375ae","Content-Type":"application/json"}}),ae=new P({nameProfile:d,job:_,photoUser:b}),ue=new A(n,(function(e){e.preventDefault(),ue.dataLoading(!0),ie.setProfile(l.value,f.value).then((function(e){ae.setUserInfo(e.name,e.about),ue.close()})).catch((function(e){console.log("Ошибка обновления пользовательских данных:"+e)})).finally((function(){ue.dataLoading(!1)}))})),ce=new A(r,(function(e){e.preventDefault(),ce.dataLoading(!0),ie.addCard(p.value,h.value).then((function(e){pe.addItemPrepend(he(e)),ce.close()})).catch((function(e){console.log("Ошибка загрузки новой карточки:"+e)})).finally((function(){ce.dataLoading(!1)}))})),se=new K(o),le=new te(i,(function(e,t){e.preventDefault(),ie.removeCard(t._id).then((function(){t.delete(),le.close()})).catch((function(e){console.log(e)}))})),fe=new A(a,(function(e){e.preventDefault(),fe.dataLoading(!0),ie.setUserAvatar(k.value).then((function(e){ae.setUserAvatar({avatar:e.avatar}),fe.close()})).catch((function(e){console.log("Ошибка обновления аватара:"+e)})).finally((function(){fe.dataLoading(!1)}))})),pe=new O({renderer:function(e){pe.addItemAppend(he(e))}},m);function he(e){var t=ae.getUserInfo().id,n=new L({data:e,userId:t,handleCardClick:function(){se.openImage(e)},handleDeleteClick:function(e){le.openPopupDel(e)},handleLikeClick:function(){n._isLike?ie.removeLikes(e._id).then((function(e){n.handleLikePopup(),n.totalLikes(e.likes.length),n.statusLike()})).catch((function(e){console.log(e)})):ie.setLikes(e._id).then((function(e){n.handleLikePopup(),n.totalLikes(e.likes.length),n.statusLike()})).catch((function(e){console.log(e)}))}},".template");return n.generateCard()}e.addEventListener("click",(function(){l.value=ae.getUserInfo().nameProfile,f.value=ae.getUserInfo().job,de.resetValidation(),ue.open()})),t.addEventListener("click",(function(){_e.resetValidation(),ce.open()})),b.addEventListener("click",(function(){ye.resetValidation(),fe.open()})),ie.getUserInfo().then((function(e){ae.setUserInfo(e.name,e.about,e._id),ae.setUserAvatar({avatar:e.avatar})})).catch((function(e){console.log("Ошибка загрузки пользовательских данных:"+e)})),ie.getInitialCards().then((function(e){pe.renderer(e)})).catch((function(e){console.log("Ошибка загрузки карточек:"+e)})),ue.setEventListeners(),ce.setEventListeners(),se.setEventListeners(),le.setEventListeners(),fe.setEventListeners();var de=new E(g,c),_e=new E(g,u),ye=new E(g,s);de.enableValidation(),_e.enableValidation(),ye.enableValidation()})();