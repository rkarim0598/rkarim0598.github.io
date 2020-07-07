import Router from './classes/Router.js';
import IconManager from './classes/IconManager.js';
export default class Store {
    constructor() {
        this.router = new Router();
        this.iconManager = new IconManager();
    }
}