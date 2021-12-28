export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._containerSelector = containerSelector;

    }
    renderer() {
        this._renderedItems.forEach(item => this._renderer(item));
    }

    addItemAppend(element) {
        this._containerSelector.append(element);
    }
    addItemPrepend(element) {
        this._containerSelector.prepend(element);
    }
}