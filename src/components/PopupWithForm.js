import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ selector, submit }) {
        super(selector);
        this._submit = submit;
    }

    _getInputValues() {
        this._inputList = Array.from(
            this._selector.querySelectorAll(".popup__content")
        );
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form = this._selector.querySelector(".popup__form");
        this._form.addEventListener("submit", (e) => {
            e.preventDefault();
            this._submit(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}