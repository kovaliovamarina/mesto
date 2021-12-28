export const editButtonProfile = document.querySelector('.profile__edit-button');
export const addButtonElement = document.querySelector('.profile__add-button');
export const editPopup = document.querySelector('.popup_type_profile');
export const addPopup = document.querySelector('.popup_type_card-add');
export const viewPopup = document.querySelector('.popup_type_picture');
export const addCardForm = document.forms.formCreate;
export const editProfileForm = document.forms.formEdit;
export const popupNameProfile = formEdit.querySelector('.popup__input_text_name');
export const popupJobProfile = formEdit.querySelector('.popup__input_text_job');
export const popupAddName = addPopup.querySelector('.popup__input_text_name-add');
export const popupAddLink = addPopup.querySelector('.popup__input_text_link-add');
export const nameProfile = document.querySelector('.profile__data-name');
export const jobProfile = document.querySelector('.profile__data-job');
export const popupImg = document.querySelector('.popup__img');
export const popupTitle = document.querySelector('.popup__title');
export const elementsDom = document.querySelector('.elements');

export const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const validation = ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});