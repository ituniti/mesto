export default class Popup {
    constructor(popupSelector) { //
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
    }

    //Opens popup
    openPopup() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.addEventListener('click', this._handleOverlayClose);
    }

    // Closes popup
    closePopup() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        this._popup.removeEventListener('click', this._handleOverlayClose);
    }

    // Closing popup by button Escape
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    }

    // Closing popup by clicking on overlay
    _handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.closePopup();
        }
    }

    // Closing popup by clicking on close button
    setEventListeners() {
        this._popup
            .querySelector('.popup__close-button')
            .addEventListener('click', () => this.closePopup());
    }
}