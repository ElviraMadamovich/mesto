import './index.css';

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import Api from '../components/Api.js';

const editButton = document.querySelector('.profile__edit');
const popupName = document.querySelector('.popup__content_input_name');
const popupWork = document.querySelector('.popup__content_input_work');
const cardPopupForm = document.querySelector('.card-popup__form');
const profilePopupForm = document.querySelector('.profile-popup__form');
const avatarPopupForm = document.querySelector('.avatar-popup__form');
const addButton = document.querySelector('.profile__button');
const avatarButton = document.querySelector('.profile__button-avatar');
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

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-61',
    headers: {
        authorization: '794ac1be-5763-4261-9759-e13254ae56ae',
        'Content-Type': 'application/json',
    }
});

let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()])
    .then(([initialCards, userData]) => {
        userInfo.setUserInfo(userData);
        userId = userData._id;
        cardGallery.renderItems(initialCards);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    });

function renderLoading(isLoading, button) {
    if (isLoading) {
        button.textContent = "Сохранение..";
    } else {
        button.textContent = "Сохранить";
    }
}

const profileValidator = new FormValidator(settings, profilePopupForm);
const newCardValidator = new FormValidator(settings, cardPopupForm);
const avatarValidator = new FormValidator(settings, avatarPopupForm);
profileValidator.enableValidation();
newCardValidator.enableValidation();
avatarValidator.enableValidation();

const userInfo = new UserInfo({
    name: '.profile__title',
    work: '.profile__subtitle',
    avatar: '.profile__image',
});

const popupWithProfile = new PopupWithForm(
    {
        popupSelector: '.profile-popup',
        submit: (formValues) => {
            editProfilePopup.loading(true);
            api.editUserInfo(formValues)
                .then((formValues) => {
                    userInfo.setUserInfo(formValues);
                    popupWithProfile.close();
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                })
                .finally(() => {
                    popupWithProfile.loading(false);
                });
        }
    });

const popupWithCard = new PopupWithForm(
    {
        popupSelector: '.card-popup',
        submit: (formValues) => {
            popupWithCard.loading(true);
            api.addCard(formValues)
                .then((formValues) => {
                    cardGallery.addItem(createCard({ name: formValues.caption, link: formValues.link }));
                    popupWithCard.close();
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                })
                .finally(() => {
                    popupWithCard.loading(false);
                });
        }
    });

const popupForAvatar = new PopupWithForm(
    {
        popupSelector: '.avatar-popup',
        submit: (formValues) => {
            popupForAvatar.loading(true);
            api.editAvatar(formValues)
                .then((formValues) => {
                    userInfo.setUserAvatar(formValues);
                    popupForAvatar.close();
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                })
                .finally(() => {
                    popupForAvatar.loading(false);
                });
        }
    });

const popupWithConfirmation = new PopupWithConfirmation('.confirmation-popup');

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

avatarButton.addEventListener('click', () => {
    avatarValidator.toggleButtonState();
    popupForAvatar.open();
});

const popupWithImage = new PopupWithImage('.image-popup');

popupWithProfile.setEventListeners();
popupWithImage.setEventListeners();
popupWithCard.setEventListeners();
popupForAvatar.setEventListeners();
popupWithConfirmation.setEventListeners();

function handleCardClick(name, link) {
    popupWithImage.open(name, link);
}

const createCard = (data) => {
    const card = new Card({
        data: data,
        userId: userId,
        handleCardClick: handleCardClick,
        handleDeleteButtonClick: (cardId) => {
            popupWithConfirmation.open();
            popupWithConfirmation.submitCallback(() => {
                api.deleteCard(cardId)
                    .then(() => {
                        popupWithConfirmation.close();
                        card.deleteCard();
                    })
                    .catch((err) => {
                        console.log(`Ошибка: ${err}`);
                    });
            });
        },
        selector: '#elements-template',
        handleSetLike: (cardId) => {
            api.setLike(cardId)
                .then((data) => {
                    card.handleLikeCard(data);
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                });
        },
        handleRemoveLike: (cardId) => {
            api.deleteLike(cardId)
                .then((data) => {
                    card.handleLikeCard(data);
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                });
        }
    }).createCard();
    return card;
}

const cardGallery = new Section({
    items: elementsPics,
    renderer: (data) => {
        cardGallery.addItem(createCard(data));
    }
}, '.elements__pics');

cardGallery.renderItems(); 