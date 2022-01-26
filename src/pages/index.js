import '../pages/index.css';
import {
    nameProfile,
    jobProfile,
    popupNameProfile,
    popupJobProfile,
    popupAddName,
    popupAddLink,
    elementsDom,
    editPopup,
    addPopup,
    viewPopup,
    editButtonProfile,
    addButtonElement,
    editProfileForm,
    addCardForm,
    // initialCards,
    validation,
    deletePopup,
    avatar,
    editAvatarForm,
    avatarPopupInput,
    avatarPopup,
    url,
    token
} from '../utils/constans.js'
import FormValidator from '../components/FormValidate.js'
import Card from '../components/Card.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'

import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithDelete from '../components/PopupWithDelete.js';
import Api from '../components/Api.js';

const api = new Api({
    baseUrl: url,
    headers: {
        authorization: token,
        'Content-Type': 'application/json'
    }
});

const userProfile = new UserInfo({
    nameProfile: nameProfile,
    job: jobProfile,
    photoUser: avatar,
});

const setProfile = (evt) => {
    evt.preventDefault();
    // debugger
    editProfileFormPopup.dataLoading(true);
    api.setProfile(popupNameProfile.value, popupJobProfile.value)
        .then(res => {
            userProfile.setUserInfo(res.name, res.about);
            editProfileFormPopup.close();
        })
        .catch((err) => {
            console.log(`Ошибка обновления пользовательских данных:` + err);
        })
        .finally(() => {
            editProfileFormPopup.dataLoading(false);
        })
}

const addCardSubmit = (evt) => {
    evt.preventDefault();
    // debugger
    addCardFormPopup.dataLoading(true);
    api.addCard(popupAddName.value, popupAddLink.value)
        .then(res => {
            cardList.addItemPrepend(createCard(res));
            addCardFormPopup.close();
        })
        .catch((err) => {
            console.log(`Ошибка загрузки новой карточки:` + err); // выведем ошибку в консоль
        })
        .finally(() => {
            addCardFormPopup.dataLoading(false);
        })
}

const editAvatarSubmit = (evt) => {
    evt.preventDefault();
    // debugger
    avatarEdit.dataLoading(true);

    api.setUserAvatar(avatarPopupInput.value)
        .then(res => {
            userProfile.setUserAvatar({ avatar: res.avatar });
            avatarEdit.close();
        })
        .catch((err) => {
            console.log(`Ошибка обновления аватара:` + err);
        })
        .finally(() => {
            avatarEdit.dataLoading(false);
        })
}

const removeCardSubmit = (evt, elem) => {
    evt.preventDefault();
    // debugger;
    api.removeCard(elem._id)
        .then(() => {
            elem.delete();
            deleteCard.close();
        })
        .catch((err) => {
            console.log(err); // выведем ошибку в консоль
        })
}

const editProfileFormPopup = new PopupWithForm(editPopup, setProfile);
const addCardFormPopup = new PopupWithForm(addPopup, addCardSubmit);
const handleViewImg = new PopupWithImage(viewPopup);
const deleteCard = new PopupWithDelete(deletePopup, removeCardSubmit);
const avatarEdit = new PopupWithForm(avatarPopup, editAvatarSubmit);


const cardList = new Section({
        //items: initialCards,
        renderer: (item) => {
            cardList.addItemAppend(createCard(item));
        }
    },
    elementsDom
);

function createCard(elem) {
    // debugger;
    const userId = userProfile.getUserInfo().id;
    const card = new Card({
            data: elem,
            userId: userId,
            handleCardClick: () => {
                handleViewImg.openImage(elem);
            },
            handleDeleteClick: (elem) => {
                deleteCard.openPopupDel(elem);

            },
            handleLikeClick: () => {
                if (!card._isLike) {
                    // debugger;
                    api.setLikes(elem._id)
                        .then(res => {
                            card.handleLikePopup();
                            card.totalLikes(res.likes.length);
                            card.statusLike();
                        })
                        .catch((err) => {
                            console.log(err); // выведем ошибку в консоль
                        })
                } else {
                    api.removeLikes(elem._id)
                        .then(res => {
                            card.handleLikePopup();
                            card.totalLikes(res.likes.length);
                            card.statusLike();
                        })
                        .catch((err) => {
                            console.log(err); // выведем ошибку в консоль
                        })
                }
            }
        },
        '.template');

    const cardElement = card.generateCard();
    return cardElement;
}

editButtonProfile.addEventListener('click', function() {

    popupNameProfile.value = userProfile.getUserInfo().nameProfile;
    popupJobProfile.value = userProfile.getUserInfo().job;
    validationProfileForm.resetValidation();
    editProfileFormPopup.open();
});

addButtonElement.addEventListener('click', function() {
    validationAddForm.resetValidation();
    addCardFormPopup.open();
});

avatar.addEventListener('click', function() {
    validationAvatarForm.resetValidation();
    avatarEdit.open();
});

// Загрука инф о пользователе с сервера
api.getUserInfo()
    .then((res) => {
        userProfile.setUserInfo(res.name, res.about, res._id); // данные прользователшя
        // debugger
        userProfile.setUserAvatar({ avatar: res.avatar }); // фотография пользователя
    })
    .catch((err) => {
        console.log(`Ошибка загрузки пользовательских данных:` + err);
    });

// загрузка карточек с сервера
api.getInitialCards()
    .then(res => {
        cardList.renderer(res);
        // console.log(res);
    })
    .catch((err) => {
        console.log(`Ошибка загрузки карточек:` + err);
    });


editProfileFormPopup.setEventListeners();
addCardFormPopup.setEventListeners();
handleViewImg.setEventListeners();
deleteCard.setEventListeners();
avatarEdit.setEventListeners();

const validationProfileForm = new FormValidator(validation, editProfileForm);
const validationAddForm = new FormValidator(validation, addCardForm);
const validationAvatarForm = new FormValidator(validation, editAvatarForm);
validationProfileForm.enableValidation();
validationAddForm.enableValidation();
validationAvatarForm.enableValidation();