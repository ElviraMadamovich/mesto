class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.formInput));
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
        const errorElement = this._formElement.getElementbyId(`${inputElement.id}-error`);
        errorElement.textContent = '';
        errorElement.classList.remove(this._settings.inputError);
        inputElement.classList.remove(this._settings.inputErrorClass);
    };

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.getElementbyId(`${inputElement.id}-error`);
        inputElement.classList.add(this._settings.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._settings.inputError);
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
        this._formElement.addEventListener('submit', (event) => {
            event.preventDefault();
        });
    }

    enableValidation() {
        this._addEventListeners();
    }

    disableButton() {
        this._button.setAttribute("disabled", true);
        this._button.classList.add(this._settings.inactiveButtonClass);
    }

    enableButton() {
        this._button.removeAttribute("disabled", true);
        this._button.classList.remove(this._settings.inactiveButtonClass);

    }

    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this.disableButton();
        } else {
            this.enableButton();
        }
    }

    enableValidation() {
        const formList = Array.from(document.querySelectorAll(this._settings.formSelector));
        formList.forEach(() => {
            this._formElement.addEventListener("submit", (evt) => {
                evt.preventDefault();
            });
            this._addEventListeners();

        });

    };
}

export default FormValidator; 