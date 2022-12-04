const checkValidity = (myValidators, formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    if (inputElement.validity.valid) {
        hideInputError(myValidators, errorElement, inputElement);
    } else {
        showInputError(myValidators, errorElement, inputElement);
    }
};

const hideInputError = (errorElement, inputElement) => {
    errorElement.textContent = '';
    inputElement.classList.remove('popup__error_active');
};

const showInputError = (errorElement, inputElement) => {
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add('popup__error_active');
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const addEventListeners = (myValidators, formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__content'));
    const button = formElement.querySelector('.popup__confirm');
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
            checkValidity(myValidators, formElement, inputElement);
            toggleButtonState(myValidators, inputList, button);
        });
    });
};

const disableButton = (button) => {
    button.setAttribute("disabled", true);
    button.classList.add('.popup__confirm_disabled');
}

const enableButton = (button) => {
    button.removeAttribute("disabled");
    button.classList.remove('.popup__confirm_disabled');
}

const toggleButtonState = (myValidators, inputList, button) => {
    if (hasInvalidInput(inputList)) {
        disableButton(myValidators, button);
    } else {
        enableButton(myValidators, button);
    }
};

const enableValidation = (myValidators) => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));

    formList.forEach((formElement) => {
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        addEventListeners(myValidators, formElement);
    });
};


enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__content",
    submitButtonSelector: ".popup__confirm",
    inactiveButtonClass: "popup__confirm_disabled",
    inputErrorClass: "popup__error",
    errorClass: "popup__error_active",
});
