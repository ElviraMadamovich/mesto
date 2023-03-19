export const editButton = document.querySelector('.profile__edit');
export const popupName = document.querySelector('.popup__content_input_name');
export const popupWork = document.querySelector('.popup__content_input_work');
export const cardPopupForm = document.querySelector('.card-popup__form');
export const profilePopupForm = document.querySelector('.profile-popup__form');
export const avatarPopupForm = document.querySelector('.avatar-popup__form');
export const addButton = document.querySelector('.profile__button');
export const avatarButton = document.querySelector('.profile__button-avatar');
export const profileSubmitButton = document.querySelector('#profile-submit');
export const avatarSubmitButton = document.querySelector('#avatar-submit');
export const deleteSubmitButton = document.querySelector('#delete-submit');
export const cardSubmitButton = document.querySelector('#card-submit');
export const kaspijskoe_more = new URL('../images/kaspijskoe_more.jpg', import.meta.url);
export const barentsevo_more = new URL('../images/barentsevo_more.jpg', import.meta.url);
export const yaponskoye_more = new URL('../images/yaponskoye_more.jpg', import.meta.url);
export const chernoye_more = new URL('../images/chernoye_more.jpg', import.meta.url);
export const baltiyskoye_more = new URL('../images/baltiyskoye_more.jpg', import.meta.url);
export const okhotskoye_more = new URL('../images/okhotskoye_more.jpg', import.meta.url);

export const settings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__content",
    inputError: "popup__content_error_active",
    submitButtonSelector: ".popup__confirm",
    inactiveButtonClass: "popup__confirm_disabled",
    inputErrorClass: "popup__error",
    errorClass: "popup__error_active",
};

export const elementsPics = [
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

export const apiConfig = {
    url: 'https://mesto.nomoreparties.co/v1/cohort-61',
    headers: {
        authorization: '794ac1be-5763-4261-9759-e13254ae56ae',
        'Content-Type': 'application/json',
    },
};