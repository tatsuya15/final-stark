import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({title, route}) => {
    return (
        <Link  to={route}>
            <li className="item">{title}<span className="icon-stark"></span></li>
        </Link>
    )
}

export default NavLink;
