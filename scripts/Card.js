import { openPopup, imageMax, imageName, imagePopup } from "./index.js";
class Card {
    constructor({ name, link }) {
        this._name = name;
        this._link = link;
        this._template = document.querySelector('#elements-template');
    }

    _getElementsTemplate() {
        const card = this._template.content.querySelector('.elements__pic').cloneNode(true);
        return card;
    }

    _handleDelete() {
        this._newCard.remove();
    }

    _handleLike() {
        this._likeButton.classList.toggle('elements__like_active');
    }

    _openImage() {
        imageMax.setAttribute('src', this._link);
        imageMax.setAttribute('alt', this._name);
        imageName.textContent = this._name; 
        openPopup(imagePopup);
    }

    _setEventListeners() {
        const deleteCard = this._newCard.querySelector('.elements__delete');
        deleteCard.addEventListener('click', () => this._handleDelete())

        this._likeButton = this._newCard.querySelector('.elements__like');
        this._likeButton.addEventListener('click', () => this._handleLike());

        this._cardPic = this._newCard.querySelector('.elements__image');
        this._cardPic.addEventListener('click', () => this._openImage());
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