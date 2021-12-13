import {
    popupForm,
    popupError
} from './index.js'

export const validation = ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});

export class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._inputSelector = config.inputSelector;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._formElement = formElement;
        this._submitButtonSelector = this._formElement.querySelector(this._config.submitButtonSelector);
    }

    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._errorClass);

    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
    };

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _toggleButtonState() {
        if (this._formElement.checkValidity()) {
            this._submitButtonSelector.classList.remove(this._config.inactiveButtonClass);
            this._submitButtonSelector.disabled = false;
        } else {
            this._submitButtonSelector.classList.add(this._config.inactiveButtonClass);
            this._submitButtonSelector.disabled = true;
        }
    }
    _setEventListeners() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));

        this._toggleButtonState();

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    };

    enableValidation() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('submit', (evt) => {
                evt.preventDefault();
            });
            this._setEventListeners();
        });
    };

    _cleanError(popupError) {
        popupError.forEach((evt) => {
            evt.classList.remove(this._errorClass);
            evt.previousElementSibling.classList.remove(this._inputErrorClass);
        })
    };

    // declaration function reset data form
    resetFormPopup() {
        popupForm.forEach((evt) => {
            evt.reset();
            this._cleanError(popupError);
        });

    }
}