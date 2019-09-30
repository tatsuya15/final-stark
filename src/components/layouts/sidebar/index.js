import React, { useState } from 'react';
// import Header from './Header';
import ToolLink from './ToolLink';
import LogoSVG from '../../../assets/images/svg/stark_industries_logo_2.svg';
import BG from '../../../assets/images/ironman_sidebar.png';
import Loader from '../../../components/Loader';

const menus = [
    {
        group: 'general',
        links: [
            {
                title: 'Your team',
                route: 'team',
                icon: 'icon-team'
            },
            {
                title: 'squads',
                route: 'squads',
                icon: 'icon-squad'
            },
            {
                title: 'mind map',
                route: 'mindmap',
                icon: 'icon-mindmap'
            },
            {
                title: 'gantt',
                route: 'gantt',
                icon: 'icon-gantt'
            },


        ]
    },
    {
        group: 'Web Mastering',
        links: [
            {
                title: 'applications',
                route: 'applications',
                icon: 'icon-application',
                authorization: ['webmaster']
            },
        ]
    },
    {
        group: 'Testing',
        links: [
            {
                title: 'Business rules',
                route: 'businessRules',
                icon: 'icon-rule',
                authorization: ['tester']
            },
        ]
    },
    {
        group: 'Administration',
        links: [
            {
                title: 'users',
                route: 'users',
                icon: 'icon-users',
                authorization: ['admin']
            },
            {
                title: 'licenses',
                route: 'licenses',
                icon: 'icon-license',
                authorization: ['admin']
            }
        ]
    }
];

const Sidebar = ({ id }) => {

    const displayMenu = (e) => {
        e.currentTarget.nextSibling.classList.toggle('expanded');
    }

    const handleDisplayToggle = (e) => {
        e.currentTarget.classList.toggle('open');
        document.getElementById(id).classList.toggle('closed');
    }

    return (
        <nav id={id} className="sidebar no-print">

            <div id="nav-icon" className="open" onClick={handleDisplayToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="logo">
                <img src={LogoSVG} alt="logo" />
            </div>

            <div className="bg">
                <img src={BG} alt="bg" />
            </div>

            <ul className="container-menu">
                {menus.map((menu, i) => {
                    return (
                        <React.Fragment key={i}>
                            {/* <Header title={menu.group} handleClick={displayMenu} /> */}
                            <ul className="header-content expanded">
                                {menu.links.map((link, i) => {
                                    return (
                                        <ToolLink key={i} title={link.title} route={link.route} icon={link.icon} />
                                    );
                                })}
                            </ul>
                        </React.Fragment>
                    )
                })}
            </ul>

        </nav>
    )
};

export default Sidebar;
