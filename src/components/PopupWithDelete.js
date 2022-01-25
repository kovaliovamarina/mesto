import Popup from "./Popup";

export default class PopupWithDelete extends Popup {
    constructor(selectorPopup, submit) {
        super(selectorPopup);
        this._btmConfirm = this._popup.querySelector('.popup__button');
        this._submit = submit;
        // debugger;
    }
    openPopupDel(elem) {
        this._elem = elem;
        super.open();
    }

    setEventListeners() {
        this._btmConfirm.addEventListener('click', (evt) => {
            // debugger
            // console.log(this._elem);
            this._submit(evt, this._elem);


        });
        super.setEventListeners();
    }

}