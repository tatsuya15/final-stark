import React from 'react';
import Sidebar from './sidebar/';

function Layout({ Component, ...props }) {
    return (
        <React.Fragment>
            <Sidebar id="stark-sidebar" />
            <div className="main-content">
                <Component />
            </div>
        </React.Fragment>
    )
}

export default Layout;
