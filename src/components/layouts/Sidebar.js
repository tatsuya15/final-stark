import React from 'react';
import Header from './sidebar/Header';
import NavLink from './sidebar/NavLink';

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
        group: 'tools',
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
    }
];

const Sidebar = ({ id }) => {

    const displayMenu = (e) => {
        e.currentTarget.nextSibling.classList.toggle('expanded');
    }

    return (
        <div id={id} className="sidebar col-xl-2 col-sm-12">
            <ul>
                {menus.map((menu, i) => {
                    return (
                        <React.Fragment key={i}>
                            <Header title={menu.group} handleClick={displayMenu}/>
                            <ul className="header-content expanded">
                                {menu.links.map((link, i) => {
                                    return (
                                        <NavLink title={link.title} route={link.route}/>
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
