class Card {
    constructor({ name, link }, handleCardClick, selector) {
        this._name = name;
        this._link = link;
        this._selector = selector;
        this._handleCardClick = handleCardClick;
        this._card = this._getElementsTemplate();
    }

    _getElementsTemplate() {
        this._selector = '#elements-template';
        const card = document.querySelector(this._selector).content.querySelector('.elements__pic').cloneNode(true);
        return card;
    }

    _handleDelete() {
        this._newCard.remove();
    }

    _handleLike() {
        this._likeButton.classList.toggle('elements__like_active');
    }

    _setEventListeners() {
        const deleteCard = this._newCard.querySelector('.elements__delete');
        deleteCard.addEventListener('click', () => this._handleDelete())

        this._likeButton = this._newCard.querySelector('.elements__like');
        this._likeButton.addEventListener('click', () => this._handleLike());

        this._cardPic = this._newCard.querySelector('.elements__image');
        this._cardPic.addEventListener('click', () => this._handleCardClick(this._name, this._link));
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