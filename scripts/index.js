//declaration let and const
const popup = document.querySelectorAll('.popup');
const popupForm = document.querySelectorAll('.popup__form');
const editButtonProfile = document.querySelector('.profile__edit-button');
const addButtonElement = document.querySelector('.profile__add-button');
const editPopup = document.querySelector('.popup_type_profile');
const addPopup = document.querySelector('.popup_type_card-add');
const viewPopup = document.querySelector('.popup_type_picture');
const addCardForm = document.forms.formCreate;
const editProfileForm = document.forms.formEdit;
const popupNameProfile = formEdit.querySelector('.popup__input_text_name');
const popupJobProfile = formEdit.querySelector('.popup__input_text_job');
const nameProfile = document.querySelector('.profile__data-name');
const jobProfile = document.querySelector('.profile__data-job');
const popupImg = document.querySelector('.popup__img');
const popupTitle = document.querySelector('.popup__title');
const elementsDom = document.querySelector('.elements');
const viewButtonElement = document.querySelectorAll('.element');
const template = document.querySelector('.template');
const popupError = document.querySelectorAll('.popup__error');

//create template, get and write date in fields per page
const createDomNode = (item) => {
    const divTempate = template.content.querySelector('.element').cloneNode(true);
    divTempate.querySelector('.element__text').textContent = item.name;
    divTempate.querySelector('.element__img').src = item.link;
    divTempate.querySelector('.element__img').alt = 'Картинка ' + item.name;

    //Delete template-element
    const deleteButton = divTempate.querySelector('.element__delete-button');
    deleteButton.addEventListener('click', () => {
        divTempate.remove();
    });

    //like template-element
    const likeButton = divTempate.querySelector('.element__like-button');
    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('element__like-button_active');
    });
    // view template-element
    const viewImg = divTempate.querySelector('.element__img');
    const viewInfo = divTempate.querySelector('.element__text');
    viewImg.addEventListener('click', () => {
        popupTitle.textContent = viewInfo.textContent;
        popupImg.src = viewImg.src;
        popupImg.alt = 'Картинка ' + popupTitle.textContent;
        openPopup(viewPopup);

    })

    return divTempate;
}

const myInitialCards = initialCards.map((item) => {
    return createDomNode(item);
});

//create new element and add element
function submitFormHandlerAdd(evt) {
    evt.preventDefault();

    const popupAddName = addPopup.querySelector('.popup__input_text_name-add');
    const popupAddLink = addPopup.querySelector('.popup__input_text_link-add');
    const taskName = createDomNode({ name: popupAddName.value, link: popupAddLink.value });

    elementsDom.prepend(taskName);

    closePopup(addPopup);

}
addCardForm.addEventListener('submit', submitFormHandlerAdd);

elementsDom.append(...myInitialCards);

//declaration function open popup 
function openPopup(popup) {

    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

//declaration function for clear form error
function cleanError(popupError) {
    popupError.forEach((evt) => {
        evt.classList.remove('popup__error_visible');
        evt.previousElementSibling.classList.remove('popup__input_type_error');
    })
};

// declaration function reset data form
function resetFormPopup() {
    popupForm.forEach((evt) => {
        evt.reset();
        cleanError(popupError);
    });
}

function resetButton() {
    popupForm.forEach((elem) => {
        const popupButton = elem.querySelector('.popup__button');
        toggleButtonState(elem, popupButton, validation.inactiveButtonClass);
    })
}
//declaration function close popup 
function closePopup(elem) {
    elem.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}

//declaration function close popup with escape
function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

// declaration function close popup with buttonClose and overlay
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
    resetFormPopup(editPopup);
    editForm(editPopup);
    resetButton(editPopup);
    openPopup(editPopup);
});

addButtonElement.addEventListener('click', function() {
    resetFormPopup(addPopup);
    resetButton(addPopup);
    openPopup(addPopup);

});

// declaration function reading data the popup for edit
function editForm() {

    popupNameProfile.value = nameProfile.textContent;
    popupJobProfile.value = jobProfile.textContent;
}

//write data in profile
function submitFormHandlerEdit(evt) {
    evt.preventDefault();

    nameProfile.textContent = popupNameProfile.value;
    jobProfile.textContent = popupJobProfile.value;

    closePopup(editPopup);

}
editProfileForm.addEventListener('submit', submitFormHandlerEdit);
closePopupButtonOrOverlay();
enableValidation(validation);