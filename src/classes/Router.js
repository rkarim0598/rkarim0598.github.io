export default class Router {
    constructor() {
        this.currentScreen = null;
        this.setCurrentScreen('welcome');
    }

    setCurrentScreen(value) {
        if (this.currentScreen === 'welcome' && value !== 'welcome') {
            document.getElementsByClassName('bottom-half-container')[0].classList.add('hide');
            document.getElementsByClassName('image-container')[0].classList.add('blur');
        }

        if (this.currentScreen !== 'welcome' && value === 'welcome') {
            document.getElementsByClassName('bottom-half-container')[0].classList.remove('hide');
            document.getElementsByClassName('image-container')[0].classList.remove('blur');
        }
        if (this.currentScreen) {
            document.getElementsByClassName('bottom-half-container')
            // document.getElementById(this.currentScreen).classList.add('hide');
            // document.getElementsByClassName('root-container')[0].classList.remove(`${this.currentScreen}-container`);
        }
        this.currentScreen = value;
        document.getElementsByClassName('root-container')[0].classList.add(`${this.currentScreen}-container`);
        document.getElementById(value).classList.remove('hide');
    }
}