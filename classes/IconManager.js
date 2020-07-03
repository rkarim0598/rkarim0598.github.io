export default class IconManager {
    constructor() {
        this.hoveredButton = 0;
        this.buttons = Object.values(document.getElementsByClassName('icon-button-container'));
        const self = this;

        Object.values(this.buttons).map((button, index) => {
            button.addEventListener('mouseover', function (event) {
                self.setHoveredButton(index);
            })
            button.addEventListener('mouseout', function (event) {
                self.setHoveredButton(null);
            })
        })

        this.displayHover();
    }

    incrementHoveredButton() {
        this.hideHover();
        this.hoveredButton === 4 || this.hoveredButton === null ?
            this.hoveredButton = 0 : this.hoveredButton++;;
        this.displayHover();

    }

    decrementHoveredButton() {
        this.hideHover();
        this.hoveredButton === 0 || this.hoveredButton === null ?
            this.hoveredButton = 4 : this.hoveredButton--;
        this.displayHover();
    }

    setHoveredButton(value) {
        this.hideHover();

        this.hoveredButton = value;
        this.displayHover();
    }

    displayHover() {
        if (this.hoveredButton !== null) {
            this.buttons[this.hoveredButton].children[0].classList.add('icon-visible');
        }
    }

    hideHover() {
        this.hoveredButton !== null && this.buttons[this.hoveredButton].children[0].classList.remove('icon-visible');
    }

    handleEnterPress() {
        this.hoveredButton !== null && this.buttons[this.hoveredButton].children[1].onclick !== null && this.buttons[this.hoveredButton].children[1].onclick();
    }
}