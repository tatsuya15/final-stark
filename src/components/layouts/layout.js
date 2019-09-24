import React from 'react';
import Sidebar from './sidebar/';

function Layout({Component, ...props}) {
    return (
        <React.Fragment>
            <div className="main-panel container-fluid row">
                <Sidebar id="stark-sidebar"/>
                <div className="main-content col-xl-10 col-sm-12">
                    <Component />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout;
