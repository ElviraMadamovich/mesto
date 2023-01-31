export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._elementsTemplate = document.querySelector(containerSelector); 
    }

    renderItems() {
        this._items.forEach((item) => {
            this._renderer(item);
        });
    }

    addItem(item) {
        this._elementsTemplate.prepend(item);
    }
}