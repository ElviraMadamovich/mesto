class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
        this._button = this._formElement.querySelector(this._settings.submitButtonSelector);
    }

    _checkValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _hideInputError(inputElement) {
        const errorElement = document.getElementById(`${inputElement.id}-error`);
        errorElement.textContent = '';
        errorElement.classList.remove(this._settings.errorClass);
        inputElement.classList.remove(this._settings.inputError);
    };

    _showInputError(inputElement, errorMessage) {
        const errorElement = document.getElementById(`${inputElement.id}-error`);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._settings.errorClass);
        inputElement.classList.add(this._settings.inputError);
    }

    _hasInvalidInput() {
        return !this._inputList.every((inputElement) => {
            return inputElement.validity.valid;
        });
    }

    _addEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkValidity(inputElement);
                this._toggleButtonState();
            });
        });
    }

    _disableButton() {
        this._button.setAttribute("disabled", true);
        this._button.classList.add(this._settings.inactiveButtonClass);
    }

    _enableButton() {
        this._button.removeAttribute("disabled", true);
        this._button.classList.remove(this._settings.inactiveButtonClass);

    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._disableButton();
        } else {
            this._enableButton();
        }
    }

    resetValidation() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });
    }

    enableValidation() {
        this._addEventListeners();
    }
}

export default FormValidator; 