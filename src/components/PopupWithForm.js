import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup {
    constructor(selectorPopup, submitForm) {
        super(selectorPopup);
        this._popupForm = this._popup.querySelector('.popup__form');
        this._submitForm = submitForm;

    }
    _getInputValues() {
        this._inputValues = this._popupForm.querySelectorAll('.popup__input');
        this._formInput = {};
        this._inputValues.forEach((input) => {
            this._formInput[input.name] = input.value;
        });
        return this._formInput;

    }
    setEventListeners() {
        super.setEventListeners();

        this._popupForm.addEventListener('submit', (evt) => {
            this._submitForm(evt, this._getInputValues());
            this.close();
        });
    }

    close() {
        super.close();
        this._popupForm.reset();
    }
}