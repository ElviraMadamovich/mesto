class FormValidator {
    constructor(settings) {
        this._settings = settings;
    }

    _checkValidity(inputElement) {
        const errorElement = this._formElement.getElementById(`${inputElement.id}-error`);
        if (inputElement.validity.valid) {
            this._hideInputError(errorElement, inputElement);
        } else {
            this._showInputError(errorElement, inputElement);
        }
    };

    _hideInputError(errorElement, inputElement) {
        errorElement.textContent = '';
        inputElement.classList.remove(this._inputError);
    };

    _showInputError = (errorElement, inputElement) => {
        errorElement.textContent = inputElement.validationMessage;
        inputElement.classList.add(this._inputError);
    };

    _hasInvalidInput() {
        return !this._inputList.every((inputElement) => {
            return inputElement.validity.valid;
        });
    };

    _addEventListeners(settings, formElement) {
        const inputList = Array.from(formElement.querySelectorAll(this._settings.inputSelector));
        const button = this._formElement.querySelector(this._submitButtonSelector);
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                _checkValidity(inputElement);
                _toggleButtonState();
            });
        });
    }

    _disableButton() {
        this._button.setAttribute("disabled", true);
        this._button.classList.add(this._inactiveButtonClass);
    }

    _enableButton() {
        this._button.removeAttribute("disabled", true);
        this._button.classList.remove(this._inactiveButtonClass);
    }

    _toggleButtonState() {
        if (_hasInvalidInput(inputList)) {
            _disableButton();
        } else {
            _enableButton();
        }
    }

    enableValidation = (settings) => {
        const formList = Array.from(document.querySelectorAll(settings.formSelector));

        formList.forEach((formElement) => {
            this._formElement.addEventListener("submit", (evt) => {
                evt.preventDefault();
            });
            _addEventListeners(settings, formElement);
        });
    };
}

export default FormValidator;