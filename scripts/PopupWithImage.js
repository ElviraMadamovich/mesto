import Popup from './Popup.js';
import { imageMax, imageName } from './index.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imageMax = imageMax;
        this._imageName = imageName;
    }

    open(name, link) {
        super.open();   
        this._imageMax.src = link;
        this._imageName.textContent = name;
        this._imageMax.alt = name;
    }
}