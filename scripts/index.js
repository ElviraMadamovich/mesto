import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const popups = document.querySelectorAll('.popup');
const popupOpened = document.querySelectorAll('.popup_opened');
const profilePopup = document.querySelector('.profile-popup');
const cardPopup = document.querySelector('.card-popup');
const imagePopup = document.querySelector('.image-popup');
const editButton = document.querySelector('.profile__edit');
const closeButtons = document.querySelectorAll('.popup__close');
const popupInput = document.querySelectorAll('.popup__content');
const popupName = document.querySelector('.popup__content_input_name');
const popupWork = document.querySelector('.popup__content_input_work');
const popupForm = document.querySelectorAll('.popup__form');
const cardPopupForm = document.querySelector('.card-popup__form');
const profilePopupForm = document.querySelector('.profile-popup__form');
const profileName = document.querySelector('.profile__title');
const profileWork = document.querySelector('.profile__subtitle');
const addButton = document.querySelector('.profile__button');
const elementsTemplate = document.querySelector('#elements-template').content.querySelector('.elements__pic');
const elementsContainer = document.querySelector('.elements__pics');
const imageName = document.querySelector('.image-popup__name');
const imageMax = document.querySelector('.image-popup__pic');
const cardTitle = document.querySelector('.elements__name');
const cardPic = document.querySelector('.elements__image');
const popupLink = document.querySelector('.popup__content_input_link');
const popupTitle = document.querySelector('.popup__content_input_title');
const saveButton = cardPopup.querySelector('.popup__confirm');
const settings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__content",
    inputError: "popup__content_error_active",
    submitButtonSelector: ".popup__confirm",
    inactiveButtonClass: "popup__confirm_disabled",
    inputErrorClass: "popup__error",
    errorClass: "popup__error_active",
};

const handleEscClose = function (evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
    }
}

const handleOverlayClose = function (evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target);
    }
}

function openPopup(popups) {
    popups.classList.add('popup_opened');
    popups.addEventListener('click', handleOverlayClose);
    document.addEventListener('keydown', handleEscClose);
}

function openProfilePopup(profilePopup) {
    popupName.value = profileName.textContent;
    popupWork.value = profileWork.textContent;
    openPopup(profilePopup);
}

function openCardPopup(cardPopup) {
    openPopup(cardPopup);
    FormValidator.disableButton(settings, saveButton);
}

function openPopupImage(element) {
    imageMax.setAttribute('src', element.link);
    imageMax.setAttribute('alt', element.name);
    imageName.textContent = element.name;
    openPopup(imagePopup);
}

addButton.addEventListener('click', () => openCardPopup(cardPopup));
editButton.addEventListener('click', () => openProfilePopup(profilePopup));

function closePopup(popups) {
    popups.classList.remove('popup_opened');
    popups.removeEventListener('click', handleOverlayClose);
    document.removeEventListener('keydown', handleEscClose);
}

closeButtons.forEach((button) => {
    const popups = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popups));
});

function handleProfileEdit(event) {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileWork.textContent = popupWork.value;
    closePopup(profilePopup);
}

function handleCardAdd(event) {
    event.preventDefault();
    renderCard({ name: popupTitle.value, link: popupLink.value });
    event.target.reset();
    closePopup(cardPopup);
}

cardPopupForm.addEventListener('submit', handleCardAdd);
profilePopupForm.addEventListener('submit', handleProfileEdit);

const handleDeleteCard = (event) => {
    event.target.closest('.elements__pic').remove();
}

const handleLike = (event) => {
    event.target.classList.toggle('elements__like_active');
}

const elementsPics = [
    {
        name: 'Каспийское море',
        link: 'images/kaspijskoe-more.jpg'
    },
    {
        name: 'Баренцево море',
        link: 'images/barentsevo_more.jpg'
    },
    {
        name: 'Японское море',
        link: 'images/yaponskoye_more.jpg'
    },
    {
        name: 'Чёрное море',
        link: 'images/chernoye_more.jpg'
    },
    {
        name: 'Балтийское море',
        link: 'images/baltiyskoye_more.jpg'
    },
    {
        name: 'Охотское море',
        link: 'images/okhotskoye_more.jpg'
    }
];

const renderCard = (element) => {
    const card = new Card (element);
    elementsContainer.prepend(card.getView());
};

elementsPics.forEach((element) => {
    renderCard(element);
});