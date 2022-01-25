export default class Card {
    constructor({ data, userId, handleCardClick, handleDeleteClick, handleLikeClick }, cardSelector) {
        // debugger;
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._cardId = data.cardId;
        this._owner = data.owner;
        this._ownerId = this._owner._id;
        this._id = data._id;
        this._userId = userId;
        this._likes = data.likes;
        this._handleLikeClick = handleLikeClick;
        this._isLike = false;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);

        // debugger
        if (this._ownerId === this._userId) {
            cardElement.querySelector('.element__delete-button').classList.add('element__delete-button_owner');
            // console.log('они совпали');
        }
        // debugger;
        this._likes.forEach(elem => {
            if (this._userId === elem._id) {

                cardElement.querySelector('.element__like-button').classList.add('element__like-button_active');
                // console.log('like');
                this._isLike = !this._isLike;
            }
        });

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();

        this._image = this._element.querySelector('.element__img');
        this._likeButton = this._element.querySelector('.element__like-button');
        this._image.src = this._link;
        this._element.querySelector('.element__text').textContent = this._name;
        this._image.alt = this._name;
        this._element.querySelector('.element__like-number').textContent = this._likes.length;

        this._setEventListeners();

        return this._element;
    }

    delete() {
        // debugger
        this._element.remove();
    }
    statusLike() {
        this._isLike = !this._isLike;
    }
    totalLikes(totalLikes) {
        this._likes.length = totalLikes;
        this._element.querySelector('.element__like-number').textContent = this._likes.length;

    }

    _handleLikePopup() {
        this._likeButton.classList.toggle('element__like-button_active');
    }

    _setEventListeners() {
        this._element.querySelector('.element__delete-button').addEventListener('click', () => {
            this._handleDeleteClick(this);

        });

        this._likeButton.addEventListener('click', () => {
            this._handleLikePopup();
            // debugger
            this._handleLikeClick();

        });
        this._image.addEventListener('click', () => {
            this._handleCardClick();
        });
    }
}