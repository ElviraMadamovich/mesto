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

    _setEventListeners() {
        const deleteCard = this._newCard.querySelector('.elements__delete');
        deleteCard.addEventListener('click', () => this._handleDelete())

        const likeButton = this._newCard.querySelector('.elements__like');
        likeButton.addEventListener('click', () => this._handleLike());
    }

    _setData() {
        const name = this._newCard.querySelector('.elements__name');
        const link = this._newCard.querySelector('.elements__image');
        name.textContent = this._name;
        link.setAttribute('src', this._link);
        link.setAttribute('alt', this._name);
    }

    getView() {
        this._newCard = this._getElementsTemplate();
        this._setEventListeners();
        this._setData();

        return this._newCard;
    }
}

export default Card;