import React from 'react';
import { NavLink } from 'react-router-dom';

const ToolLink = ({title, route, icon}) => {

    const linkClass = `item ${icon}`

    /**
     * UGLY CODE - Fix Activate NavLink is not working...???
     * @param {event} e 
     */
    const handleActiveLink = e => {
        const navLinks = document.querySelectorAll('#stark-sidebar .header-content a');
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        e.currentTarget.classList.add('active');
    }

    return (
        <NavLink to={route} activeClassName="XYZ" onClick={(e) => handleActiveLink(e)}>
            <li className={linkClass} title={title}><span className="label">{title}</span></li>
        </NavLink>
    )
}

export default ToolLink;
