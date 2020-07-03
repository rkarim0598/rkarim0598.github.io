export default class Router {
    constructor() {
        this.currentScreen = null;
        this.setCurrentScreen('welcome');
    }

    setCurrentScreen(value) {
        if (this.currentScreen) {
            document.getElementById(this.currentScreen).classList.add('hide');
            document.getElementsByClassName('root-container')[0].classList.remove(`${this.currentScreen}-container`);
        }
        this.currentScreen = value;
        document.getElementsByClassName('root-container')[0].classList.add(`${this.currentScreen}-container`);
        document.getElementById(value).classList.remove('hide');
    }
}