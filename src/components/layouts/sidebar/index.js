import React from 'react';
import Header from './Header';
import NavLink from './NavLink';
import LogoSVG from '../../../assets/images/svg/stark_industries_logo_2.svg';
import BG from '../../../assets/images/ironman_sidebar.png';

const menus = [
    {
        group: 'general',
        links: [
            {
                title: 'team',
                route: 'team'
            },
            {
                title: 'squads',
                route: 'squads'
            },


        ]
    },
    {
        group: 'Web Mastering',
        links: [
            {
                title: 'applications',
                route: 'applications',
                authorization: ['webmaster']
            },
            {
                title: 'servers',
                route: 'servers',
                authorization: ['webmaster']
            },


        ]
    },
    {
        group: 'Administration',
        links: [
            {
                title: 'users',
                route: 'users',
                authorization: ['admin']
            }
        ]
    }
];

const Sidebar = ({ id }) => {

    const displayMenu = (e) => {
        e.currentTarget.nextSibling.classList.toggle('expanded');
    }

    return (
        <div id={id} className="sidebar col-xl-2 col-sm-12 no-print">

            <div className="logo">
                <img src={LogoSVG} alt="logo" />
            </div>

            <div className="bg">
                <img src={BG} alt="bg" />
            </div>

            <ul>
                {menus.map((menu, i) => {
                    return (
                        <React.Fragment key={i}>
                            <Header title={menu.group} handleClick={displayMenu} />
                            <ul className="header-content expanded">
                                {menu.links.map((link, i) => {
                                    return (
                                        <NavLink key={i} title={link.title} route={link.route} />
                                    );
                                })}
                            </ul>
                        </React.Fragment>
                    )
                })}
            </ul>

        </div>
    )
};

export default Sidebar;
