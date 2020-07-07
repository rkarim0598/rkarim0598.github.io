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
        if (this.hoveredButton === null) return;
        this.hideHover();
        this.hoveredButton === 4 ?
            this.hoveredButton = 0 : this.hoveredButton++;;
        this.displayHover();

    }

    decrementHoveredButton() {
        if (this.hoveredButton === null) return;
        this.hideHover();
        this.hoveredButton === 0  ?
            this.hoveredButton = 4 : this.hoveredButton--;
        this.displayHover();
    }

    setHoveredButton(value) {
        if (this.hoveredButton === null) return;
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
        if (this.hoveredButton === null) return;
        this.hoveredButton !== null && this.buttons[this.hoveredButton].children[0].classList.remove('icon-visible');
    }

    handleEnterPress() {
        if (this.hoveredButton === null) return;
        this.hoveredButton !== null && this.buttons[this.hoveredButton].children[1].onclick !== null && this.buttons[this.hoveredButton].children[1].onclick();
    }
}