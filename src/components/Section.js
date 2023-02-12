export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._elementsContainer = document.querySelector(containerSelector); 
    }

    renderItems(data) {
        data.forEach((item) => {
            this._renderer(item);
        });
    }

    addItem(item) {
        this._elementsContainer.prepend(item);
    }
}