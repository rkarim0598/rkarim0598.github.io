import { useState, useEffect } from 'react';

export default function useIconManager(props) {
    const [hoveredButton, setHoveredButton] = useState(0);

    useEffect(() => {
        console.log(props);
        Object.values(props.buttons).forEach((button, index) => {
            button.addEventListener('mouseover', function (event) {
                updateHoveredButton(index);
            })
            button.addEventListener('mouseout', function (event) {
                updateHoveredButton(null);
            })
        })

        displayHover();
    })

    const incrementHoveredButton = () => {
        if (hoveredButton === null) return;
        updateHoveredButton(hoveredButton === 4 ? 0 : hoveredButton + 1);
        // hideHover();
        // setHoveredButton(hoveredButton === 4 ? 0 : hoveredButton + 1);
        // displayHover();

    }

    const decrementHoveredButton = () => {
        if (hoveredButton === null) return;
        updateHoveredButton(hoveredButton === 0 ? 4 : hoveredButton - 1);

        // hideHover();
        // setHoveredButton(hoveredButton === 0 ? 4 : hoveredButton - 1);
        // displayHover();
    }

    const updateHoveredButton = (value) => {
        hideHover();
        setHoveredButton(value);
        displayHover();
    }

    const displayHover = () => {
        if (hoveredButton !== null) {
            props.buttons[hoveredButton].children[0].classList.add('icon-visible');
        }
    }

    const hideHover = () => {
        if (hoveredButton === null) return;
        hoveredButton !== null && props.buttons[hoveredButton].children[0].classList.remove('icon-visible');
    }

    const handleEnterPress = () => {
        if (hoveredButton === null) return;
        console.log('processing');
        hoveredButton !== null && props.buttons[hoveredButton].children[1].onclick !== null && buttons[hoveredButton].children[1].onclick();
    }

    return hoveredButton;
}