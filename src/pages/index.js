import './index.css';

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import Api from "../components/Api.js";

const editButton = document.querySelector('.profile__edit');
const popupName = document.querySelector('.popup__content_input_name');
const popupWork = document.querySelector('.popup__content_input_work');
const cardPopupForm = document.querySelector('.card-popup__form');
const profilePopupForm = document.querySelector('.profile-popup__form');
const avatarPopupForm = document.querySelector('.avatar-popup__form');
const addButton = document.querySelector('.profile__button');
const avatarButton = document.querySelector('.profile__button-avatar');
const profileSubmitButton = document.querySelector('#profile-submit');
const avatarSubmitButton = document.querySelector('#avatar-submit');
const deleteSubmitButton = document.querySelector('#delete-submit');
const cardSubmitButton = document.querySelector('#card-submit');
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

const apiConfig = {
    url: 'https://mesto.nomoreparties.co/v1/cohort-61',
    headers: {
        authorization: '794ac1be-5763-4261-9759-e13254ae56ae',
        'Content-Type': 'application/json',
    },
};

const api = new Api(apiConfig);

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userInfo, initialCards]) => {
        userData.setUserName(userInfo);
        userData.setUserWork(userInfo);
        userData.setUserAvatar(userInfo);
        cardGallery.setItem(initialCards, userInfo._id);
        cardGallery.renderItems();
    })
    .catch((error) => {
        console.log(error);
    })

const createCard = (data, userId) => {
    const card = new Card(
        data,
        '#elements-template',
        userId,
        handleCardClick,
        handleDeleteButtonClick,
        handleLike);
    const newCard = card.createCard();
    function handleLike(status, card) {
        !status ? api.putLike(data._id)
            .then((res) => {
                card.handleLikes(res.likes);
            })
            .catch((error) => {
                console.log(error);
            })
            : api.removeLike(data._id)
                .then((res) => {
                    card.handleLikes(res.likes);
                })
                .catch((error) => {
                    console.log(error);
                })
    }

    function handleDeleteButtonClick() {
        popupWithConfirmation.open();
        popupWithConfirmation.updateSubmitHandler(() => {
            deleteSubmitButton.textContent = 'Удаление...';
            api.deleteUserCard(data._id)
                .then(() => {
                    newCard.remove();
                    popupWithConfirmation.close();
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    deleteSubmitButton.textContent = 'Да';
                })
        });
    }

    return newCard;
}

const cardGallery = new Section({
    items: elementsPics,
    renderer: (element, id) => {
        cardGallery.addItemAppend(createCard(element, id));
    }
}, '.elements__pics');

const userData = new UserInfo({
    name: '.profile__title',
    work: '.profile__subtitle',
    avatar: '.profile__image'
}, api.getUserInfo.bind(api));

const popupWithConfirmation = new PopupWithConfirmation('.confirmation-popup');
popupWithConfirmation.setEventListeners();

const popupWithImage = new PopupWithImage('.image-popup');
popupWithImage.setEventListeners();

const popupWithProfile = new PopupWithForm(
    {
        popupSelector: '.profile-popup',
        submit: (data) => {
            profileSubmitButton.textContent = 'Сохранение...';
            api.updateDetails(data)
                .then((userDetails) => {
                    userData.setUserName(userDetails);
                    userData.setUserWork(userDetails);
                    popupWithProfile.close();
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    profileSubmitButton.textContent = 'Сохранить';
                })
        }
    });

popupWithProfile.setEventListeners();

const popupWithCard = new PopupWithForm(
    {
        popupSelector: '.card-popup',
        submit: (cardInfo) => {
            cardSubmitButton.textContent = 'Создание...';
            api.addNewCard(cardInfo)
                .then((data) => {
                    cardGallery.addItemPrepend(createCard(data, data.owner._id));
                    popupWithCard.close();
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    cardSubmitButton.textContent = 'Создать';
                })
        }
    })

popupWithCard.setEventListeners();

const popupForAvatar = new PopupWithForm(
    {
        popupSelector: '.avatar-popup',
        submit: (formValues) => {
            avatarSubmitButton.textContent = 'Сохранение...';
            api.changeUserAvatar(formValues)
                .then((avatar) => {
                    userData.setUserAvatar(avatar);
                    popupForAvatar.close();
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    avatarSubmitButton.textContent = 'Сохранить';
                })
        }
    })

popupForAvatar.setEventListeners();

editButton.addEventListener('click', () => {
    const authorInfo = userData.getUserInfo();
    popupName.value = authorInfo.name;
    popupWork.value = authorInfo.work;
    profileValidator.toggleButtonState();
    popupWithProfile.open();
});

addButton.addEventListener('click', () => {
    newCardValidator.toggleButtonState();
    popupWithCard.open();
});

avatarButton.addEventListener('click', () => {
    avatarValidator.toggleButtonState();
    popupForAvatar.open();
});

function handleCardClick(name, link) {
    popupWithImage.open(name, link);
}

const profileValidator = new FormValidator(settings, profilePopupForm);
const newCardValidator = new FormValidator(settings, cardPopupForm);
const avatarValidator = new FormValidator(settings, avatarPopupForm);
profileValidator.enableValidation();
newCardValidator.enableValidation();
avatarValidator.enableValidation();
