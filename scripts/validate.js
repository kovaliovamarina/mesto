//  func add class-error  
const showInputError = (formElement, inputElement, errorMessage, { errorClass, inputErrorClass }) => {

    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
}

// function delete class-error 
const hideInputError = (formElement, inputElement, config) => {
    const { inputErrorClass, errorClass, } = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
};

// function check input validity
const checkInputValidity = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
        hideInputError(formElement, inputElement, config);
    }
};

// function button activity
const toggleButtonState = (formElement, buttonElement, inactiveButtonClass) => {
    if (formElement.checkValidity()) {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.disabled = false;
    } else {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.disabled = true;
    }
}
const setEventListeners = (formElement, config) => {
    const {
        inputSelector,
        submitButtonSelector,
        inactiveButtonClass,
        errorClass,
        inputErrorClass
    } = config

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    toggleButtonState(formElement, buttonElement, inactiveButtonClass);


    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, { errorClass, inputErrorClass });
            toggleButtonState(formElement, buttonElement, inactiveButtonClass);
        });
    });
};

const enableValidation = (config) => {
    const { formSelector, ...props } = config;
    const inputList = Array.from(document.querySelectorAll(formSelector));
    inputList.forEach((formElement) => {

        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, props);
    });
};