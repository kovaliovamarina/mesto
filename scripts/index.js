const popup = document.querySelectorAll('.popup');
export const popupForm = document.querySelectorAll('.popup__form');
const editButtonProfile = document.querySelector('.profile__edit-button');
const addButtonElement = document.querySelector('.profile__add-button');
const editPopup = document.querySelector('.popup_type_profile');
const addPopup = document.querySelector('.popup_type_card-add');
export const viewPopup = document.querySelector('.popup_type_picture');
export const addCardForm = document.forms.formCreate;
export const editProfileForm = document.forms.formEdit;
const popupNameProfile = formEdit.querySelector('.popup__input_text_name');
const popupJobProfile = formEdit.querySelector('.popup__input_text_job');
const nameProfile = document.querySelector('.profile__data-name');
const jobProfile = document.querySelector('.profile__data-job');
export const popupImg = document.querySelector('.popup__img');
export const popupTitle = document.querySelector('.popup__title');
const elementsDom = document.querySelector('.elements');
export const popupError = document.querySelectorAll('.popup__error');

import { validation, FormValidator } from './FormValidate.js'
import { initialCards, Card } from './Card.js'

const render = (initialCards, elementsDom) => {
    initialCards.forEach((element) => {
        const card = new Card(element, '.template');
        const cardElement = card.generateCard();

        elementsDom.append(cardElement);
    });
}

export function openPopup(popup) {

    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

function closePopup(elem) {
    elem.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

function closePopupButtonOrOverlay() {
    popup.forEach((popup) => {
        popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                closePopup(popup)
            }
            if (evt.target.classList.contains('popup__close-button')) {
                closePopup(popup)
            }
        })
    })
};

editButtonProfile.addEventListener('click', function() {
    validationProfileForm.resetFormPopup();
    editForm(editPopup);
    validationProfileForm._toggleButtonState();
    openPopup(editPopup);
});

addButtonElement.addEventListener('click', function() {
    validationAddForm.resetFormPopup();
    validationAddForm._toggleButtonState();
    openPopup(addPopup);

});

function editForm() {

    popupNameProfile.value = nameProfile.textContent;
    popupJobProfile.value = jobProfile.textContent;
}


function submitFormHandlerEdit(evt) {
    evt.preventDefault();

    nameProfile.textContent = popupNameProfile.value;
    jobProfile.textContent = popupJobProfile.value;

    closePopup(editPopup);

}

function submitFormHandlerAdd(evt) {
    evt.preventDefault();

    const popupAddName = addPopup.querySelector('.popup__input_text_name-add');
    const popupAddLink = addPopup.querySelector('.popup__input_text_link-add');

    const card = new Card({ name: popupAddName.value, link: popupAddLink.value }, '.template');
    const cardElement = card.generateCard();

    elementsDom.prepend(cardElement);

    closePopup(addPopup);

}

addCardForm.addEventListener('submit', submitFormHandlerAdd);
editProfileForm.addEventListener('submit', submitFormHandlerEdit);

render(initialCards, elementsDom);
closePopupButtonOrOverlay();

const validationProfileForm = new FormValidator(validation, editProfileForm);
const validationAddForm = new FormValidator(validation, addCardForm);
validationProfileForm.enableValidation();
validationAddForm.enableValidation();