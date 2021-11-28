//declaration let and const
const popup = document.querySelectorAll('.popup');
const popupForm = document.querySelectorAll('.popup__form');
const popupInput = document.querySelectorAll('.popup__input');

const editButtonProfile = document.querySelector('.profile__edit-button');
const addButtonElement = document.querySelector('.profile__add-button');

const editPopup = document.querySelector('.popup_type_profile');
const addPopup = document.querySelector('.popup_type_card-add');
const viewPopup = document.querySelector('.popup_type_picture');

const closeButton = document.querySelectorAll('.popup__close-button');
const saveButtonAdd = document.forms.formCreate;
const saveButtonEdit = document.forms.formEdit;

const popupNameProfile = formEdit.querySelector('.popup__input_text_name');
const popupJobProfile = formEdit.querySelector('.popup__input_text_job');

const nameProfile = document.querySelector('.profile__data-name');
const jobProfile = document.querySelector('.profile__data-job');

const popupImg = document.querySelector('.popup__img');
const popupTitle = document.querySelector('.popup__title');

const ElementsDom = document.querySelector('.elements');
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
function formSubmitHandlerAdd(evt) {
    evt.preventDefault();

    const popupAddName = addPopup.querySelector('.popup__input_text_name-add');
    const popupAddLink = addPopup.querySelector('.popup__input_text_link-add');
    const taskName = createDomNode({ name: popupAddName.value, link: popupAddLink.value });

    ElementsDom.prepend(taskName);

    popupAddName.value = '';
    popupAddLink.value = '';

    closeForm(addPopup);

}
saveButtonAdd.addEventListener('submit', formSubmitHandlerAdd);

ElementsDom.append(...myInitialCards);

//declaration function open popup 
function openPopup(popup) {
    popup.classList.add('popup_opened');
    closeEscOrOverlay();
}

function closeEscOrOverlay() {
    document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
            popup.forEach((elem) => {
                elem.classList.remove('popup_opened');
            })
        }
    })
    popup.forEach((evt) => {
        evt.addEventListener('click', (elem) => {
            elem.target.classList.remove('popup_opened');

        })
    })
}

editButtonProfile.addEventListener('click', function() {
    resetFormPopup();
    editForm();
    enableValidation(Validation);
    openPopup(editPopup);
});

//declaration function for clear form error
function cleanError(popupError) {
    popupError.forEach((evt) => {
        evt.classList.remove('popup__error_visible');
        evt.previousElementSibling.classList.remove('popup__input_type_error');
    })
};

addButtonElement.addEventListener('click', function() {
    resetFormPopup();
    openPopup(addPopup);
});

//declaration function close popup 
function closeForm(elem) {
    elem.classList.remove('popup_opened');
}
// declaration function reset data form
function resetFormPopup() {
    popupForm.forEach((evt) => {
        evt.reset();
        cleanError(popupError);
    });
}

// close popup with button
closeButton.forEach(function(elem) {
    elem.addEventListener('click', function(evt) {
        evt.target.closest('.popup').classList.remove('popup_opened');

    });
})

// declaration function reading data the popup for edit
function editForm() {

    popupNameProfile.value = nameProfile.textContent;
    popupJobProfile.value = jobProfile.textContent;

}
//write data in profile
function formSubmitHandlerEdit(evt) {
    evt.preventDefault();

    nameProfile.textContent = popupNameProfile.value;
    jobProfile.textContent = popupJobProfile.value;

    closeForm(editPopup);

}
saveButtonEdit.addEventListener('submit', formSubmitHandlerEdit);
enableValidation(Validation);