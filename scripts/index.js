import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";

const popups = document.querySelectorAll('.popup');
const popupOpened = document.querySelectorAll('.popup_opened');
const profilePopup = document.querySelector('.profile-popup');
const cardPopup = document.querySelector('.card-popup');
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

const profileValidator = new FormValidator(settings, profilePopupForm);
const newCardValidator = new FormValidator(settings, cardPopupForm);
profileValidator.enableValidation();
newCardValidator.enableValidation();

const userInfo = new UserInfo({
    name: '.profile__title',
    job: '.profile__subtitle',
});

const popupWithCard = new PopupWithForm(
    {
        popupSelector: '.card-popup',
        submit: (formValues) => {
            cardGallery.addItem(createCard({ name: formValues.title, link: formValues.url }));
            popupWithCard.close();
        }
    }
)

const popupWithProfile = new PopupWithForm(
    {
        popupSelector: '.profile-popup',
        submit: (formValues) => {
            userInfo.setUserInfo(formValues);
            popupWithProfile.close();
        }
    });

addButton.addEventListener('click', () => {
    newCardValidator.disableButton();
    popupWithCard.open();
});

editButton.addEventListener('click', () => {
    const authorInfo = userInfo.getUserInfo();
    popupName.value = authorInfo.name;
    popupWork.value = authorInfo.job;
    popupWithProfile.open();
});

const popupWithImage = new PopupWithImage('.image-popup');

popupWithProfile.setEventListeners();
popupWithImage.setEventListeners();
popupWithCard.setEventListeners();

const handleCardClick = (name, link) => {
    popupWithImage.open(name, link);
}

const createCard = (element) => {
    const card = new Card(element, '#elements-template', handleCardClick).createCard();
    return card;
}

const cardGallery = new Section({
    items: elementsPics,
    renderer: (element) => {
        cardGallery.addItem(createCard(element));
    }
}, elementsContainer);

cardGallery.renderItems();

//const openProfilePopup = new PopupWithForm('.profile__popup', {
//    formSubmit: ({ name, job }) => {
//        inputValues.setUserInfo(name, job);
//    }
//});

//const handleEscClose = function (evt) {
//    if (evt.key === 'Escape') {
//        const popupOpened = document.querySelector('.popup_opened');
//        closePopup(popupOpened);
//    }
//}

//const handleOverlayClose = function (evt) {
//    if (evt.target === evt.currentTarget) {
//        closePopup(evt.target);
//    }
//}

//export function openPopup(popups) {
//    popups.classList.add('popup_opened');
//    popups.addEventListener('click', handleOverlayClose);
//    document.addEventListener('keydown', handleEscClose);
//}

//function openProfilePopup(profilePopup) {
//    popupName.value = profileName.textContent;
//    popupWork.value = profileWork.textContent;
//    openPopup(profilePopup);
//}

//function openCardPopup(cardPopup) {
//    openPopup(cardPopup);
//    newCardValidator.disableButton();
//}

//addButton.addEventListener('click', () => openCardPopup(cardPopup));
//editButton.addEventListener('click', () => openProfilePopup(profilePopup));

//function closePopup(popups) {
//    popups.classList.remove('popup_opened');
//    popups.removeEventListener('click', handleOverlayClose);
//    document.removeEventListener('keydown', handleEscClose);
//}

//closeButtons.forEach((button) => {
//    const popups = button.closest('.popup');
//    button.addEventListener('click', () => closePopup(popups));
//});

//function handleProfileEdit(event) {
//    event.preventDefault();
//    profileName.textContent = popupName.value;
//    profileWork.textContent = popupWork.value;
//    closePopup(profilePopup);
//}

//function handleCardAdd(event) {
//    event.preventDefault();
//    renderCard({ name: popupTitle.value, link: popupLink.value });
//    event.target.reset();
//    closePopup(cardPopup);
//}

//cardPopupForm.addEventListener('submit', handleCardAdd);
//profilePopupForm.addEventListener('submit', handleProfileEdit);