class Card {
    constructor(data, selector, userId, handleCardClick, handleDeleteButtonClick, handleLike) {
        this._name = data.name;
        this._link = data.link;
        this._template = document.querySelector(selector);
        this._likes = data.likes;
        this._ownerId = data.owner._id;
        this._handleLike = handleLike;
        this._handleDeleteButtonClick = handleDeleteButtonClick;
        this._handleCardClick = handleCardClick;
        this._userId = userId;
    }

    handleLikes(likes) {
        if (likes.length !== 0) {
            likes.forEach((likeOwner) => {
                if (likeOwner._id === this._userId) {
                    this._likeButton.classList.add('elements__like_active');
                } else {
                    this._likeButton.classList.remove('elements__like_active');
                }
            });
        } else {
            this._likeButton.classList.remove('elements__like_active');
        }
        this._likesCounter.textContent = likes.length;
    }

    createCard() {
        const card = this._template.content.querySelector('.elements__pic').cloneNode(true);
        this._likesCounter = card.querySelector('.elements__likes-qty');
        this._likesCounter.textContent = this._likes.length;

        this._deleteCard = card.querySelector('.elements__delete');

        card.querySelector('.elements__name').textContent = this._name;

        this._cardPic = card.querySelector('.elements__image');
        this._cardPic.setAttribute("src", this._link);
        this._cardPic.setAttribute("alt", `Изображение ${this._name}`);

        this._likeButton = card.querySelector('.elements__like');

        this._cardId = card;

        if (this._userId === this._ownerId) {
            this._deleteCard.classList.add('elements__delete_inactive');
        }
        this.handleLikes(this._likes);

        this._setEventListeners();
        return this._cardId;
    }

    _checkStatusLike() {
        return (this._likeButton.classList.contains('elements__like_active'));
    }

    _setEventListeners() {
        this._deleteCard.addEventListener('click', () => this._handleDeleteButtonClick(this._cardId));
        this._likeButton.addEventListener('click', () => this._handleLike(this._checkStatusLike(), this));
        this._cardPic.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    }

    getCardId() {
        return this._cardId;
    }
}

export default Card;