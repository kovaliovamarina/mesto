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
    initialCards,
    validation
} from '../utils/constans.js'
import FormValidator from '../components/FormValidate.js'
import Card from '../components/Card.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'

import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';

const userProfile = new UserInfo({
    nameProfile: nameProfile,
    job: jobProfile
});

const setProfile = (evt) => {
    evt.preventDefault()
    userProfile.setUserInfo(popupNameProfile, popupJobProfile);
    editProfileFormPopup.close();
}

const addCardSubmit = (evt) => {
    evt.preventDefault();

    cardList.addItemPrepend(createCard({ name: popupAddName.value, link: popupAddLink.value }));
    addCardFormPopup.close();
}

const editProfileFormPopup = new PopupWithForm(editPopup, setProfile);
const addCardFormPopup = new PopupWithForm(addPopup, addCardSubmit);
const handleViewImg = new PopupWithImage(viewPopup);

const handleCardClick = (elem) => {
    handleViewImg.openImage(elem);
}

const cardList = new Section({
        items: initialCards,
        renderer: (item) => {
            cardList.addItemAppend(createCard(item));
        }
    },
    elementsDom
);

function createCard(elem) {

    const card = new Card(elem, '.template', () => { handleCardClick(elem); });
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

cardList.renderer();

editProfileFormPopup.setEventListeners();
addCardFormPopup.setEventListeners();
handleViewImg.setEventListeners();

const validationProfileForm = new FormValidator(validation, editProfileForm);
const validationAddForm = new FormValidator(validation, addCardForm);
validationProfileForm.enableValidation();
validationAddForm.enableValidation();