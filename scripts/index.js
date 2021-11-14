const initialCards = [{
        name: 'Минск',
        link: '/images/minsk.jpg'
    },
    {
        name: 'Нарочь, Минская область',
        link: '/images/naroch.jpg'
    },
    {
        name: 'Гомель',
        link: '/images/Gomel1.jpg'
    },
    {
        name: 'Витебск',
        link: '/images/VitebskNew.jpg'
    },
    {
        name: 'Гродно',
        link: '/images/grodno.jpg'
    },
    {
        name: 'Брест',
        link: '/images/BrestNew.jpg'
    }
];

//declaration let and const
const popup = document.querySelector('.popup');
const popupForm = popup.querySelector('.popup__form');

const editButtonProfile = document.querySelector('.profile__edit-button');
const addButtonElement = document.querySelector('.profile__add-button');

const editPopup = document.querySelector('#popup-edit');
const addPopup = document.querySelector('#popup-add');
const viewPopup = document.querySelector('#popup-view');

const closeButton = document.querySelectorAll('.popup__close-button');
const saveButtonAdd = document.forms.formCreate;
const saveButtonEdit = document.forms.formEdit;

const popupNameProfile = popupForm.querySelector('.popup__input_text_name');
const popupJobProfile = popupForm.querySelector('.popup__input_text_job');

const nameProfile = document.querySelector('.profile__data-name');
const jobProfile = document.querySelector('.profile__data-job');

const popupImg = document.querySelector('.popup__img');
const popupTitle = document.querySelector('.popup__title');

const ElementsDom = document.querySelector('.elements');
const viewButtonElement = document.querySelectorAll('.element');
const template = document.querySelector('.template');

//create template, get and write date in fields per page
const createDomNode = (item) => {
    const divTempate = template.content.querySelector('.element').cloneNode(true);
    divTempate.querySelector('.element__text').textContent = item.name;
    divTempate.querySelector('.element__img').src = item.link;


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
        openPopup(viewPopup);
        popupTitle.textContent = viewInfo.textContent;
        popupImg.src = viewImg.src;
    })

    return divTempate;
}

const myInitialCards = initialCards.map((item) => {
    return createDomNode(item);
});

//create new element and add element
function formSubmitHandlerAdd(evt) {
    evt.preventDefault();

    const popupAddName = addPopup.querySelector('.popup__input_text_name-add').value;
    const popupAddLink = addPopup.querySelector('.popup__input_text_link-add').value;
    const taskName = createDomNode({ name: popupAddName, link: popupAddLink });

    ElementsDom.prepend(taskName);

    addPopup.querySelector('.popup__input_text_name-add').value = '';
    addPopup.querySelector('.popup__input_text_link-add').value = '';
    closeForm(addPopup);

}
saveButtonAdd.addEventListener('submit', formSubmitHandlerAdd);

ElementsDom.append(...myInitialCards);

//declaration function open popup 
function openPopup(popup) {
    popup.classList.add('popup_opened');
}

editButtonProfile.addEventListener('click', function() {
    editForm();
    openPopup(editPopup);
});

addButtonElement.addEventListener('click', function() {
    openPopup(addPopup);
});

//declaration function close popup 
function closeForm(elem) {
    elem.classList.remove('popup_opened');
}

// close popup with button
closeButton.forEach(function(elem) {
    elem.addEventListener('click', function(evt) {
        evt.target.closest('.popup').classList.remove('popup_opened');
    })
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