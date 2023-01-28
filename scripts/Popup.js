export default class Popup {
    constructor(popupSelector) {
        this._popups = document.querySelectorAll(popupSelector);
        this.close = this.close.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
    }

    open() {
        document.addEventListener('keydown', this._handleEscClose);
        this._popups.classList.add('popup_opened');
    }

    close() {
        this._popups.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    _handleOverlayClose(event) {
        if (event.target.classList.contains('popup')) {
            this.close();
        }
    }

    setEventListeners() {
        this._closeButtons = this._popups.querySelector('.popup__close');
        this._closeButtons.addEventListener('click', this.close);
        document.addEventListener('mousedown', this._handleOverlayClose);
    }
}