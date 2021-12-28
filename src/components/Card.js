export default class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;

        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();

        this._image = this._element.querySelector('.element__img');
        this._likeButton = this._element.querySelector('.element__like-button');
        this._image.src = this._link;
        this._element.querySelector('.element__text').textContent = this._name;
        this._image.alt = this._name;

        this._setEventListeners();

        return this._element;
    }

    _handleDeletePopup() {
        this._element.remove();
    }

    _handleLikePopup() {
        this._likeButton.classList.toggle('element__like-button_active');
    }

    _setEventListeners() {
        this._element.querySelector('.element__delete-button').addEventListener('click', () => {
            this._handleDeletePopup();
        });

        this._likeButton.addEventListener('click', () => {
            this._handleLikePopup();
        });
        this._image.addEventListener('click', () => {
            this._handleCardClick();
        });
    }
}