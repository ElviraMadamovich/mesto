let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.profile__edit');
let closePopup = document.querySelector('.popup__close');
let popupName = document.querySelector('.popup__content_input_name');
let popupWork = document.querySelector('.popup__content_input_work');
let popupSave = document.querySelector('.popup__confirm');
let profileName = document.querySelector('.profile__title');
let profileWork = document.querySelector('.profile__subtitle');
const addButton = document.querySelector('.profile__button');
const elementsContainer = document.querySelector('.elements__pics');
const elementsTemplate = document.querySelector('#elements-template').content.querySelector('.elements__pic');

popupSave.addEventListener('click', popupSubmit);

function popupSubmit(event) {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileWork.textContent = popupWork.value;
    popupHide();
}
popupSave.addEventListener('click', popupSubmit);

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

const addImage = elementsPics.map(function (element) {
    return {
        name: element.name,
        link: element.link
    }
});

function addCard({ name, link }) {
    const addInfo = elementsTemplate.cloneNode(true);
    const imagePopup = document.querySelector('.image-popup');
    const imageMax = document.querySelector('.image-popup__pic');
    const imageName = document.querySelector('.image-popup__name');
    const imageClose = document.querySelector('.image-popup__close');
    const cardTitle = addInfo.querySelector('.elements__name');
    const cardPic = addInfo.querySelector('.elements__image');

    cardTitle.textContent = name;;
    cardPic.src = link;
    elementsContainer.prepend(addInfo);

    const likes = document.querySelectorAll('.elements__like');
    likes.forEach(function (likes) {
        likes.addEventListener('click', (event) => {
            event.target.classList.add('elements__like_active');
        });
    });

    function openImage() {
        imagePopup.classList.add('image-popup_active');
        imageMax.src = cardPic.src;
        imageName.textContent = cardTitle.textContent;
    }
    cardPic.addEventListener('click', openImage);

    function CloseImage() {
        imagePopup.classList.remove('image-popup_active');
    }
    imageClose.addEventListener('click', CloseImage);

    let modal = document.querySelector('.modal');
    let closeModal = document.querySelector('.modal__close');
    let modalName = document.querySelector('.modal__content_input_title');
    let modalImage = document.querySelector('.modal__content_input_link');
    let modalButton = document.querySelector('.modal__confirm');

    function ModalShow() {
        modal.classList.add('modal_opened');
    }
    addButton.addEventListener('click', ModalShow);

    function modalSubmit(event) {
        event.preventDefault();
        const addInfo = elementsTemplate.cloneNode(true);
        modalImage.src = cardPic.src;
        modalName.textContent = cardTitle.textContent;
        elementsContainer.prepend(addInfo);
        modalHide();
    }
    modalButton.addEventListener('click', modalSubmit);

    function modalHide() {
        modal.classList.remove('modal_opened');
    }
    closeModal.addEventListener('click', modalHide);

    const deleteButton = document.querySelectorAll('.elements__delete');
    deleteButton.forEach(function (deleteButton) {
        deleteButton.addEventListener('click', function (event) {
            event.target.closest('.elements__pic').remove();
        });
    });
}

function render() {
    addImage.forEach(addCard);
}
render();