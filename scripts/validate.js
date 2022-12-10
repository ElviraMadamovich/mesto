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
    inputElement.classList.remove(settings.inputError);
};

const showInputError = (settings, errorElement, inputElement) => {
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(settings.inputError);
};

const hasInvalidInput = (inputList) => {
    return inputList.every((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const addEventListeners = (settings, formElement, inactiveButtonClass) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const button = formElement.querySelector(settings.submitButtonSelector);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
            checkValidity(settings, inputElement);
            toggleButtonState(inputList, inactiveButtonClass, button);
        });
    });
}

const disableButton = (inactiveButtonClass, button) => {
    inactiveButtonClass = settings.inactiveButtonClass;
    button.setAttribute("disabled", true);
    button.classList.add(settings.inactiveButtonClass);
}

const enableButton = (inactiveButtonClass, button) => {
    inactiveButtonClass = settings.inactiveButtonClass;
    button.removeAttribute("disabled", true);
    button.classList.remove(settings.inactiveButtonClass);
}

const toggleButtonState = (inputList, inactiveButtonClass, button) => {
    if (hasInvalidInput(inputList)) {
        disableButton(inactiveButtonClass, button);
    } else {
        enableButton(inactiveButtonClass, button);
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


enableValidation(settings);

