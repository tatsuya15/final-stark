import React from 'react';
import EDIT_SVG from '../assets/images/svg/edit.svg';
import SEE_SVG from '../assets/images/svg/see.svg';
import UserSkills from './UserSkills';
import { IMG_USER_PATH, IMG_USER_DEFAULT } from '../constants/config';

const UserCard = (props) => {
    
    const {firstname, lastname, jobtitle, teamtitle, squadtitle, photo, skills} = props.data;

    const handleDisplaySkills = (e) => {
        e.stopPropagation();
        const card = e.currentTarget;
        card.querySelector('.skills').classList.toggle('expanded');
    }

    let picture = photo !== null ? IMG_USER_PATH + photo : IMG_USER_PATH + IMG_USER_DEFAULT;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-0" onClick={handleDisplaySkills}>
            <div className="our-team">
                <div className="picture">
                    <img className="img-fluid" src={picture} alt={`${firstname} ${lastname}`}/>
                </div>
                <div className="team-content">
                    <h3 className="name">{`${firstname} ${lastname}`}</h3>
                    <h4 className="title">{jobtitle} <span className="white"> - </span> {teamtitle}</h4>
                    <h4 className="title-squad">Squad {squadtitle}</h4>
                </div>
                <ul className="tools">
                    <li><img src={EDIT_SVG} className="icon-grid icon-btn" title="edit" alt="edit"/></li>
                    <li><img src={SEE_SVG} className="icon-grid icon-btn" title="see" alt="see"/></li>
                </ul>
                <UserSkills skills={skills}/>
            </div>
        </div>
    )
};

export default UserCard;