import { openPopup } from "./index.js";
class Card {
    constructor({ name, link }) {
        this._name = name;
        this._link = link;
    }

    _getElementsTemplate() {
        const card = document.querySelector('#elements-template').content.querySelector('.elements__pic').cloneNode(true);
        return card;
    }

    _handleDelete() {
        this._newCard.closest('.elements__pic').remove();
    }

    _handleLike() {
        const likeButton = this._newCard.querySelector('.elements__like');
        likeButton.classList.toggle('elements__like_active');
    }

    _openImage() {
        const imagePopup = document.querySelector('.image-popup');
        const imageName = document.querySelector('.image-popup__name');
        const imageMax = document.querySelector('.image-popup__pic')
        imageMax.setAttribute('src', this._link);
        imageMax.setAttribute('alt', this._name);
        imageName.textContent = this._name;
        openPopup(imagePopup);
    }

    _setEventListeners() {
        const deleteCard = this._newCard.querySelector('.elements__delete');
        deleteCard.addEventListener('click', () => this._handleDelete())

        const likeButton = this._newCard.querySelector('.elements__like');
        likeButton.addEventListener('click', () => this._handleLike());

        const cardPic = this._newCard.querySelector('.elements__image');
        const imagePopup = this._newCard.querySelector('.image-popup');
        cardPic.addEventListener('click', () => this._openImage(imagePopup));
    }

    _setData() {
        const name = this._newCard.querySelector('.elements__name');
        const link = this._newCard.querySelector('.elements__image');
        name.textContent = this._name;
        link.setAttribute('src', this._link);
        link.setAttribute('alt', this._name);
    }

    createCard() {
        this._newCard = this._getElementsTemplate();
        this._setEventListeners();
        this._setData();

        return this._newCard;
    }

}

export default Card;