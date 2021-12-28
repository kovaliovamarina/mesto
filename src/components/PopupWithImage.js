import Popup from "../components/Popup.js";
import {
    popupImg,
    popupTitle,
} from '../utils/constans.js'

export default class PopupWithImage extends Popup {
    constructor(selectorPopup) {
        super(selectorPopup);
    }

    openImage(data) {
        popupImg.src = data.link;
        popupTitle.textContent = data.name;
        popupImg.alt = popupTitle.textContent;
        super.open();
    }
}