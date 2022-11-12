let popup = document.querySelector('.popup');
let popupField = document.querySelector('.popup__container');
let openPopup = document.querySelector('.profile__edit');
let closePopup = document.querySelector('.popup__close');
let popupName = document.querySelector('.popup__content_input_name');
let popupWork = document.querySelector('.popup__content_input_work');
let popupSave = document.querySelector('.popup__confirm');
let profileAuthor = document.querySelector('.profile__author');
let profileName = document.querySelector('.profile__title');
let profileWork = document.querySelector('.profile__subtitle');

function popupHide() {
    popup.classList.remove('popup_opened');
    popupField.classList.remove('popup__container_active');
}
closePopup.addEventListener('click', popupHide);

function popupShow() {
    popup.classList.add('popup_opened');
    popupField.classList.add('popup__container_active');
}
openPopup.addEventListener('click', popupShow);

function popupSubmit(event) {
    event.preventDefault();
    popupName.getAttribute('value');
    popupWork.getAttribute('value');
    profileName.textContent = popupName.value;
    profileWork.textContent = popupWork.value;
}
popupSave.addEventListener('click', popupSubmit);