import './index.css';

import {
    editButton,
    cardPopupForm,
    profilePopupForm,
    avatarPopupForm,
    addButton,
    avatarButton,
    deleteSubmitButton,
    settings,
    apiConfig,
    elementsPics
} from "../scripts/utils/constants.js";

import FormValidator from "../scripts/components/FormValidator.js";
import Card from "../scripts/components/Card.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithConfirmation from "../scripts/components/PopupWithConfirmation.js";
import Api from "../scripts/components/Api.js";

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
            popupWithProfile.showLoadingText(true);
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
                    popupWithProfile.showLoadingText(false);
                })
        }
    });

popupWithProfile.setEventListeners();

const popupWithCard = new PopupWithForm(
    {
        popupSelector: '.card-popup',
        submit: (cardInfo) => {
            popupWithCard.showLoadingText(true);
            api.addNewCard(cardInfo)
                .then((data) => {
                    cardGallery.addItemPrepend(createCard(data, data.owner._id));
                    popupWithCard.close();
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    popupWithCard.showLoadingText(false);
                })
        }
    })

popupWithCard.setEventListeners();

const popupForAvatar = new PopupWithForm(
    {
        popupSelector: '.avatar-popup',
        submit: (formValues) => {
            popupForAvatar.showLoadingText(true);
            api.changeUserAvatar(formValues)
                .then((avatar) => {
                    userData.setUserAvatar(avatar);
                    popupForAvatar.close();
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    popupForAvatar.showLoadingText(false);
                })
        }
    })

popupForAvatar.setEventListeners();

editButton.addEventListener('click', () => {
    const authorInfo = userData.getUserInfo();
    popupWithProfile.setInputValues(authorInfo);
    profileValidator.resetValidation();
    popupWithProfile.open();
});

addButton.addEventListener('click', () => {
    newCardValidator.resetValidation();
    popupWithCard.open();
});

avatarButton.addEventListener('click', () => {
    avatarValidator.resetValidation();
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
