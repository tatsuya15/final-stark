import React, { useState } from 'react';

const Header = (props) => {

    const [ARROW_UP, ARROW_DOWN] = ['keyboard_arrow_up', 'keyboard_arrow_down'];

    const [arrowState, setArrowState] = useState(ARROW_UP);

    function handleMenu(e) {
        setArrowState(arrowState === ARROW_UP ? ARROW_DOWN : ARROW_UP);
        props.handleClick(e);
    }

    return (
        <li className="header" onClick={handleMenu}>{props.title}<i className="material-icons float-right">{arrowState}</i></li>
    )
}

export default Header;
