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


const HandleEscClose = function (evt) {
    const popupOpened = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        closePopup(popupOpened);
    }
}

const HandleOverlayClose = function (evt) {
    const popupOpened = document.querySelector('.popup_opened');
    if (evt.target === popupOpened) {
        closePopup(popupOpened);
    }
}

function openPopup(popups) {
    popups.classList.add('popup_opened');
    popups.addEventListener('click', HandleOverlayClose);
    document.addEventListener('keydown', HandleEscClose);
}

function OpenProfilePopup(profilePopup) {
    popupName.value = profileName.textContent;
    popupWork.value = profileWork.textContent;
    openPopup(profilePopup);
}

function openPopupImage(element) {
    imageMax.setAttribute('src', element.link);
    imageMax.setAttribute('alt', element.name);
    imageName.textContent = element.name;
    openPopup(imagePopup);
}

addButton.addEventListener('click', () => openPopup(cardPopup));
editButton.addEventListener('click', () => openProfilePopup(profilePopup));

function closePopup(popups) {
    popups.classList.remove('popup_opened');
    document.addEventListener('click', HandleOverlayClose);
    document.addEventListener('keydown', HandleEscClose);
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
    disableButton(config, button);
};

cardPopupForm.addEventListener('submit', handleCardAdd);
profilePopupForm.addEventListener('submit', handleProfileEdit);

const handleDeleteCard = (event) => {
    event.target.closest('.elements__pic').remove();
}

const handleLike = (event) => {
    event.target.classList.toggle('elements__like_active');
}

const handleOverlayClose = () => {
    document.addEventListener('click', () => closePopup(popups));
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

const createCard = (element) => {
    const newCard = elementsTemplate.cloneNode(true);
    const cardTitle = newCard.querySelector('.elements__name');
    const cardPic = newCard.querySelector('.elements__image');

    cardTitle.textContent = element.name;
    cardPic.setAttribute('src', element.link);
    cardPic.setAttribute('alt', element.name);

    const deleteBtn = newCard.querySelector('.elements__delete');
    deleteBtn.addEventListener('click', handleDeleteCard);

    const likes = newCard.querySelector('.elements__like');
    likes.addEventListener('click', handleLike);

    cardPic.addEventListener('click', () => openPopupImage(element));

    return newCard;
}

const renderCard = (element) => {
    elementsContainer.prepend(createCard(element));
};

elementsPics.forEach((element) => {
    renderCard(element);
});