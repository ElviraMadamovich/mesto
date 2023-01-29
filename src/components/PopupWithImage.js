import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(name, link) {
        super.open();   
        this._imageMax = this._popups.querySelector('.image-popup__pic');
        this._imageName = this._popups.querySelector('.image-popup__name');
        this._imageMax.src = link;
        this._imageName.textContent = name;
        this._imageMax.alt = name;
    }
}