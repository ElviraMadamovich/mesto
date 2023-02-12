class Card {
    constructor(data, handleCardClick, selector, userId, handleLike, handleDeleteButton) {
        this._name = data.name;
        this._link = data.link;
        this._selector = selector;
        this._handleCardClick = handleCardClick;
        this._userId = userId;
        this._cardOwnerId = data.owner._id;
        this._cardId = data._id;
        this._handleLike = handleLike;
        this._handleDeleteButton = handleDeleteButton;
        this._likes = likes;
    }

    _getElementsTemplate() {
        const card = document.querySelector(this._selector).content.querySelector('.elements__pic').cloneNode(true);
        return card;
    }

    _setEventListeners() {
        if (!this._cardOwnerId) {
            this._deleteButton.remove();
            this._deleteButton = null;
        } else {
            this._newCard.querySelector('.elements__delete').addEventListener('click', (event) => {
                this._handleDelete(event);
            });
        }

        this._likeButton.addEventListener('click', () => this._handleLike());

        this._cardPic.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    }

    _handleLikesCounter() {
        if (this._checkLikes()) {
            this.putLike();
        } else {
            this.removeLike();
        };
    }

    _checkLikes() {
        return this._likes.some(item => item._id === this._userId);
    }

    putLike() {
        this._likeButton.classList.add('elements__like_active');
        this.isLiked = true;
    }

    removeLike() {
        this._likeButton.classList.remove('elements__like_active');
        this.isLiked = false;
    }

    updatelikesCounter(data) {
        this._likesCounter.textContent = data.length;
    }

    createCard() {
        this._newCard = this._getElementsTemplate();
        this._cardCaption = this._newCard.querySelector('.elements__name');
        this._cardCaption.textContent = this._cardName;

        this._cardPic = this._newCard.querySelector('.elements__image');
        this._cardPic.src = this._cardLink;
        this._cardPic.alt = `${this._cardName}. Фото`;

        this._deleteButton = this._newCard.querySelector('.elements__delete');

        this._likeButton = this._newCard.querySelector('.elements__like');
        this._likesCounter = this._newCard.querySelector('.elements__likes-counter');
        this._likesCounter.textContent = this._likes.length;

        this._setEventListeners();
        this._handleLikesCounter();

        return this._newCard;
    }

    getCardId() {
        return this._cardId;
    }

}

export default Card;