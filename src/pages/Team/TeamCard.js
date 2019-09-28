import React from "react";
import { IMG_TEAM_PATH } from '../../constants/config';

function TeamCard(props) {
    const data = props.data;
    const backgroundCss = {
        backgroundImage: `url(${IMG_TEAM_PATH}${data.image})`
    };
    return (
        <div className="card">
            <div className="card-img-container">
                <div className="card-img" style={backgroundCss}>
                    <h2 className="fade-out">{data.title}</h2>
                </div>
            </div>
            <div className="card-body"><div dangerouslySetInnerHTML={{ __html: data.description }} /></div>
        </div>
    );
}

export default TeamCard;
