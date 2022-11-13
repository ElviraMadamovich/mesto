let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.profile__edit');
let closePopup = document.querySelector('.popup__close');
let popupName = document.querySelector('.popup__content_input_name');
let popupWork = document.querySelector('.popup__content_input_work');
let popupSave = document.querySelector('.popup__confirm');
let profileName = document.querySelector('.profile__title');
let profileWork = document.querySelector('.profile__subtitle');

function popupHide() {
    popup.classList.remove('popup_opened');
}
closePopup.addEventListener('click', popupHide);

function popupShow() {
    popup.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupWork.value = profileWork.textContent;
}
openPopup.addEventListener('click', popupShow);

function popupSubmit(event) {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileWork.textContent = popupWork.value;
    popupHide();
}
popupSave.addEventListener('click', popupSubmit);