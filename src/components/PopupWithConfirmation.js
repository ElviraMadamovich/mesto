import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
    }

    handleConfirmation(handleDelete) {
        this._handleDelete = handleDelete;
    }

    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (evt) => this._handleDelete(evt));
    }
}
