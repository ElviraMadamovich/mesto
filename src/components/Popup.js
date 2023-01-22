export default class Popup {
    constructor(selector) {
        this._selector = selector;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
    }

    open() {
        this._selector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._selector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    handleOverlayClose(event) {
        if (event.target === evt.currentTarget) {
            this.close();
        }
    }

    setEventListeners() {
        this._selector
            .querySelector('.popup__close')
            .addEventListener('click', () => {
                this.close();
            });
        this._selector.addEventListener('mousedown', this._handleOverlayClose);
    }
}