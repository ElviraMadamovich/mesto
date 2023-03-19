import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, submit }) {
        super(popupSelector);
        this._submit = submit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__content');
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener("submit", (event) => {
            event.preventDefault();
            this._submit(this._getInputValues());
        });
    }

    setInputValues(formValues) {
        this._inputList.forEach((input) => {
            input.value = formValues[input.name]
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}