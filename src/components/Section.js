export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._elementsContainer = document.querySelector(containerSelector);
    }

    renderItems() {
        this._items.forEach((item) => {
            this._renderer(item, this._id);
        });
    }

    setItem(items, id) {
        this._items = items;
        this._id = id;
    }

    addItemAppend(item) {
        this._elementsContainer.append(item);
    }

    addItemPrepend(item) {
        this._elementsContainer.prepend(item);
    }
}