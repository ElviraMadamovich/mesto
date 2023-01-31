import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imageMax = this._popup.querySelector('.image-popup__pic');
        this._imageName = this._popup.querySelector('.image-popup__name');
    }

    open(name, link) {
        super.open();   
        this._imageMax.src = link;
        this._imageName.textContent = name;
        this._imageMax.alt = name;
    }
}