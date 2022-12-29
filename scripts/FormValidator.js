class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.formInput));
        this._button = this._formElement.querySelector(this._settings.submitButtonSelector);
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _hideInputError(inputElement) {
        const errorElement = this._formElement.getElementById(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._settings.inputErrorClass);
        errorElement.classList.remove(this._settings.inputError);
        errorElement.textContent = '';
    };

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.getElementById(`#${inputElement.id}-error`);
        inputElement.classList.add(this.settings.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._settings.inputError);
    };

    _addEventListeners() {
        toggleButtonState();

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                toggleButtonState();
            });
        })
        this._formElement.addEventListener('submit', (event) => {
            event.preventDefault();
        })
    }
    enableValidation() {
        this._addEventListeners();
    }
}

function disableButton() {
    this._button.setAttribute("disabled", true);
    this._button.classList.add(this._settings.inactiveButtonClass);
}

function enableButton() {
    this._button.removeAttribute("disabled", true);
    this._button.classList.remove(this._settings.inactiveButtonClass);
}

_hasInvalidInput() {
    return !this._inputList.every((inputElement) => {
        return inputElement.validity.valid;
    });
};

function toggleButtonState() {
    if (this._hasInvalidInput(inputList)) {
        disableButton();
    } else {
        enableButton();
    }
}

function enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._settings.formSelector));

    formList.forEach(() => {
        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this._addEventListeners();
    });
}

export default FormValidator;