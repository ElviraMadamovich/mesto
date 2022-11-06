let popup = document.querySelector('.popup');
let popupField = document.querySelector('.popup__field');
let openPopupButtons = document.querySelectorAll('.profile__edit');
let closePopupButton = document.querySelector('.popup__close');
openPopupButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        popup.classList.add('popup__opened');
        popupField.classList.add('popup__field_active');
    })
});
closePopupButton.addEventListener('click', () => {
    popup.classList.remove('popup__opened');
    popupField.classList.remove('popup__field_active');
});
document.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('popup__opened');
        popupField.classList.remove('popup__field_active');
    }
});

let popupName = document.querySelector('.popup__name');
let popupWork = document.querySelector('.popup__work');
let popupSave = document.querySelector('.popup__confirm');

let profileAuthor = document.querySelector('.profile__author');
let profileName = document.querySelector('.profile__title');
let profileWork = document.querySelector('.profile__subtitle');

popupSave.addEventListener('click', (event) => {
    event.preventDefault();
    profileName.innerHTML = popupName.value;
    profileWork.innerHTML = popupWork.value;
});

const likes = document.querySelectorAll('.elements__like');
likes.forEach(function (element) {
    element.addEventListener('click', function (event) {
        if(event.target.classList.contains('elements__like_active'))
    {
        event.target.classList.remove('elements__like_active');
    }
        else {
        event.target.classList.add('elements__like_active');
    }
});
});