import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor({ name, link }, selector) {
        super(selector);
        this._name = name;
        this._link = link;
    }

    open() {
        super.open();
        const imageMax = this._selector.querySelector(".image-popup__pic");
        const imageName = this._selector.querySelector(".image-popup__name");
        imageMax.src = this._link;
        imageName.textContent = this._name;
        imageMax.alt = this._name;
    }
}