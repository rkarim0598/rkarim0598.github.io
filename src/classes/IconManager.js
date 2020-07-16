export default class IconManager {
    constructor(props) {
        console.log(props);
        this.hoveredButton = 0;
        this.buttons = Object.values(props.buttons.children);
        this.onClicks = props.onClicks;
        const self = this;
        
        Object.values(this.buttons).forEach((button, index) => {
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
        this.setHoveredButton(this.hoveredButton === 4 || this.hoveredButton === null ? 0 : this.hoveredButton + 1);
    }

    decrementHoveredButton() {
        this.setHoveredButton(this.hoveredButton === 0 || this.hoveredButton === null ? 4 : this.hoveredButton - 1);
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
        if (this.hoveredButton === null) return;
        this.hoveredButton !== null && this.buttons[this.hoveredButton].children[0].classList.remove('icon-visible');
    }

    handleEnterPress() {
        if (this.hoveredButton === null) return;
        this.hoveredButton !== null && this.onClicks[this.hoveredButton].onClick();
    }
}