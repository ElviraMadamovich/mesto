const checkValidity = (settings, inputElement) => {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    if (inputElement.validity.valid) {
        hideInputError(settings, errorElement, inputElement);
    } else {
        showInputError(settings, errorElement, inputElement);
    }
};

const hideInputError = (settings, errorElement, inputElement) => {
    errorElement.textContent = '';
    inputElement.classList.remove(settings.errorClass);
};

const showInputError = (settings, errorElement, inputElement) => {
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(settings.errorClass);
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const addEventListeners = (settings, formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const button = formElement.querySelector(settings.submitButtonSelector);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
            checkValidity(settings, inputElement);
            toggleButtonState(settings, inputList, button);
        });
    });
}

const disableButton = (settings, button) => {
    button.setAttribute("disabled", true);
    button.classList.add(settings.inactiveButtonClass);
}

const enableButton = (settings, button) => {
    button.removeAttribute("disabled", true);
    button.classList.remove(settings.inactiveButtonClass);
}

const toggleButtonState = (settings, inputList, button) => {
    if (hasInvalidInput(inputList)) {
        disableButton(settings, button);
    } else {
        enableButton(settings, button);
    }
}

const enableValidation = (settings) => {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));

    formList.forEach((formElement) => {
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        addEventListeners(settings, formElement);
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

