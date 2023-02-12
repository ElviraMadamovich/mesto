import './index.css';

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Api from "../components/Api.js";

const editButton = document.querySelector('.profile__edit');
const popupName = document.querySelector('.popup__content_input_name');
const popupWork = document.querySelector('.popup__content_input_work');
const cardPopupForm = document.querySelector('.card-popup__form');
const profilePopupForm = document.querySelector('.profile-popup__form');
const addButton = document.querySelector('.profile__button');
const popupTitle = document.querySelector('.popup__content_input_title');
const kaspijskoe_more = new URL('../images/kaspijskoe_more.jpg', import.meta.url);
const barentsevo_more = new URL('../images/barentsevo_more.jpg', import.meta.url);
const yaponskoye_more = new URL('../images/yaponskoye_more.jpg', import.meta.url);
const chernoye_more = new URL('../images/chernoye_more.jpg', import.meta.url);
const baltiyskoye_more = new URL('../images/baltiyskoye_more.jpg', import.meta.url);
const okhotskoye_more = new URL('../images/okhotskoye_more.jpg', import.meta.url);

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
        link: kaspijskoe_more
    },
    {
        name: 'Баренцево море',
        link: barentsevo_more
    },
    {
        name: 'Японское море',
        link: yaponskoye_more
    },
    {
        name: 'Чёрное море',
        link: chernoye_more
    },
    {
        name: 'Балтийское море',
        link: baltiyskoye_more
    },
    {
        name: 'Охотское море',
        link: okhotskoye_more
    }
];

const profileValidator = new FormValidator(settings, profilePopupForm);
const newCardValidator = new FormValidator(settings, cardPopupForm);
profileValidator.enableValidation();
newCardValidator.enableValidation();

const userInfo = new UserInfo({
    name: '.profile__title',
    work: '.profile__subtitle',
    photo: '.profile__image',
});

const popupWithAvatar = new PopupWithForm('.profile__image', (formData) => {
    popupWithAvatar.renderLoading(true);
    api.changeAvatar({ photo: formData.url }).then((data) => {
        userInfo.setAvatar({ newAvatar: data.photo });
        popupWithAvatar.close();
    }).catch((err) => {
        console.error(err);
    }).finally(() => {
        popupWithAvatar.renderLoading(false);
    });
});

const popupWithProfile = new PopupWithForm(
    {
        popupSelector: '.profile-popup',
        submit: (formValues) => {
            userInfo.setUserInfo(formValues);
            popupWithProfile.close();
        }
    });

const popupWithCard = new PopupWithForm(
    {
        popupSelector: '.card-popup',
        submit: (formValues) => {
            cardGallery.addItem(createCard({ name: formValues.caption, link: formValues.link }));
            popupWithCard.close();
        }
    }
)

editButton.addEventListener('click', () => {
    const authorInfo = userInfo.getUserInfo();
    popupName.value = authorInfo.name;
    popupWork.value = authorInfo.work;
    profileValidator.toggleButtonState();
    popupWithProfile.open();
});

addButton.addEventListener('click', () => {
    newCardValidator.toggleButtonState();
    popupWithCard.open();
});

const popupWithImage = new PopupWithImage('.image-popup');

popupWithProfile.setEventListeners();
popupWithImage.setEventListeners();
popupWithCard.setEventListeners();

function handleCardClick(name, link) {
    popupWithImage.open(name, link);
}

const api = new Api({
    baseUrl: `https://mesto.nomoreparties.co/v1/cohort-58`,
    headers: {
        authorization: 'dcb820d9-699a-4f6b-9c37-9d364ad66199',
        'Content-Type': 'application/json'
    }
});

let userId;

Promise.all([api.getElementsPics(), api.getUserInfo()])
    .then(([elementsPics, authorInfo]) => {
        userInfo.setUserInfo(authorInfo);
        userId = authorInfo._id;
        cardGallery.renderItems(elementsPics);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    });

const createCard = ({ name, link }) => {
    const card = new Card({ name, link }, handleCardClick, '#elements-template').createCard();
    return card;
}

const cardGallery = new Section({
    items: elementsPics,
    renderer: ({ name, link }) => {
        cardGallery.addItem(createCard({ name, link }));
    }
}, '.elements__pics');

cardGallery.renderItems(); 