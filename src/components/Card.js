class Card {
    constructor({ data, userId, handleCardClick, handleDeleteButtonClick, selector, handleSetLike, handleRemoveLike }) {
        this._name = data.name;
        this._link = data.link;
        this._selector = selector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteButtonClick = handleDeleteButtonClick;
        this._userId = userId;
        this._cardId = data._id;
        this._cardOwnerId = data.owner._id;
        this._likes = data.likes;
        this._handleSetLike = handleSetLike;
        this._handleRemoveLike = handleRemoveLike;
        // this._card = this._getElementsTemplate();
    }

    _getElementsTemplate() {
        const card = document.querySelector(this._selector).content.querySelector('.elements__pic').cloneNode(true);
        return card;
    }

    handleDelete() {
        this._newCard.remove();
        this._newCard = null;
    }

    _handleLike() {
        this._likes = data.likes;
        this._likesNumber.textContent = this._likes.length;
        this._likeButton.classList.toggle('elements__like_active');
    }

    _setEventListeners() {
        const deleteCard = this._newCard.querySelector('.elements__delete');
        deleteCard.addEventListener('click', () => this._handleDeleteButtonClick(this._cardId));

        this._likeButton = this._newCard.querySelector('.elements__like');
        this._likeButton.addEventListener('click', () => {
            if (this._likeButton.classList.contains('elements__like_active')) {
                this._handleRemoveLike(this._cardId);
            } else {
                this._handleSetLike(this._cardId);
            }
        });

        this._cardPic = this._newCard.querySelector('.elements__image');
        this._cardPic.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    }

    _isCardLiked() {
        if (this._likes.some((user) => {
            return this._userId === user._id;
        })) {
            this._likeButton.classList.add('elements__like_active');
        }
    }

    _hasDeleteBtn() {
        if (this._userId !== this._cardOwnerId) {
          this._deleteCard.remove();
        }
      }

    _setData() {
        const name = this._newCard.querySelector('.elements__name');
        const link = this._newCard.querySelector('.elements__image');
        this._likesNumber = this._newCard.querySelector('.elements__likes-qty');
        this._likesNumber.textContent = this._likes.length;
        name.textContent = this._name;
        link.setAttribute('src', this._link);
        link.setAttribute('alt', this._name);
    }

    createCard() {
        this._newCard = this._getElementsTemplate();
        this._setEventListeners();
        this._setData();
        this._hasDeleteBtn();
        this._isCardLiked();

        return this._newCard;
    }

}

export default Card;