import React from 'react';
import ironman_bg from '../assets/images/ironman_usercard.png';

const UserSkills = (props) => {
    return (
        <div className="skills">
            <ul className="character-stats">
                {props.skills.map((skill, key) => (
                    <li key={key}>
                        <p>{skill.title}</p>
                        <ul className="statbar">
                            <li
                                data-progress-percent="1"
                                className={skill.note >= 1 ? "stat active" : "stat"}
                            />
                            <li
                                data-progress-percent="2"
                                className={skill.note >= 2 ? "stat active" : "stat"}
                            />
                            <li
                                data-progress-percent="3"
                                className={skill.note >= 3 ? "stat active" : "stat"}
                            />
                            <li
                                data-progress-percent="4"
                                className={skill.note >= 4 ? "stat active" : "stat"}
                            />
                            <li
                                data-progress-percent="5"
                                className={skill.note >= 5 ? "stat active" : "stat"}
                            />
                        </ul>
                    </li>
                ))}
            </ul>
            <div className="bg">
                <img className="bg" src={ironman_bg} alt="ironman" />
            </div>
        </div>
    )
};

export default UserSkills;
