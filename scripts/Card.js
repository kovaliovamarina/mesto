import {
    popupImg,
    popupTitle,
    viewPopup,
    openPopup
} from './index.js'

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

export class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();

        this._element.querySelector('.element__img').src = this._link;
        this._element.querySelector('.element__text').textContent = this._name;
        this._element.querySelector('.element__text').alt = this._name;

        this._setEventListeners();

        return this._element;
    }

    _handleDeletePopup() {
        this._element.remove();
    }

    _handleLikePopup() {
        this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
    }

    _handleViewImg() {
        popupImg.src = this._link;
        popupTitle.textContent = this._name;
        popupImg.alt = 'Картинка ' + popupTitle.textContent;
        openPopup(viewPopup);
    }

    _setEventListeners() {
        this._element.querySelector('.element__delete-button').addEventListener('click', () => {
            this._handleDeletePopup();
        });
        this._element.querySelector('.element__like-button').addEventListener('click', () => {
            this._handleLikePopup();
        });
        this._element.querySelector('.element__img').addEventListener('click', () => {
            this._handleViewImg();
        });
    }
}