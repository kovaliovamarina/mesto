let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');

let popupElement = document.querySelector('.popup');

let popupName = document.querySelector('.popup__name');
let popupJob = document.querySelector('.popup__job');

let nameProfile = document.querySelector('.profile__data-name');
let jobProfile = document.querySelector('.profile__data-job');

function editForm() {
    popupElement.classList.add('popup_opened');

    let editName = nameProfile.textContent;
    let editJob = jobProfile.textContent;

    popupName.value = editName;
    popupJob.value = editJob;

}

function closeForm() {
    popupElement.classList.remove('popup_opened');
}

editButton.addEventListener('click', editForm);
closeButton.addEventListener('click', closeForm);


function formSubmitHandler(evt) {
    evt.preventDefault();

    let nameInput = popupName.value;
    let jobInput = popupJob.value;

    nameProfile.textContent = nameInput;
    jobProfile.textContent = jobInput;

    closeForm();
}

popupElement.addEventListener('submit', formSubmitHandler);