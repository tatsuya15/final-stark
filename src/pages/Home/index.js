import React from 'react';
import Sidebar from '../../components/layouts/Sidebar';

const Home = () => {
    return (
        <React.Fragment>
            <div className="main-panel container-fluid row">
                <Sidebar id="stark-sidebar"/>
                <div className="main-content col-xl-10 col-sm-12">
                    <h1>Hello world</h1>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;
