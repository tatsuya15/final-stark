import React from "react";

function TeamCard(props) {
    const data = props.data;
    const backgroundCss = {
        backgroundImage: "url(../../media/squads/" + data.image + ")"
    };
    return (
        <div className="card">
            <div className="card-img-container">
                <div className="card-img" style={backgroundCss}>
                    <h2 className="fade-out">{data.title}</h2>
                </div>
            </div>
            <div className="card-body">
                <ul className="squad-member">
                    {data.members.map((member, key) => (
                        <li key={key} className="row-user">
                            <div
                                className="picture"
                                style={{
                                    backgroundImage: "url(../../media/users/" + ((member.photo != null) ? member.photo : 'ironman.png') + ")"
                                }}
                            />
                            <div className="data">
                                <ul>
                                    <li className="role">{member.jobtitle}</li>
                                    <li className="info">{member.firstname + " " + member.lastname}</li>
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TeamCard;
