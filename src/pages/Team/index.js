import React, { Component } from 'react';
import Loader from '../../components/Loader';
import { connect } from 'react-redux';
import { getTeamById } from '../../actions/actionsOrganization';
import TeamCard from './TeamCard';

class Team extends Component {

    componentDidMount() {
        this.props.getTeamById(1);
    }

    render() {
        return (
            this.props.team === null ? (
                <Loader />
            ) : (
                    <React.Fragment>
                        <h1 className="main">{this.props.team.title}</h1>
                        <div className="row container-team">
                            {this.props.team.subteams.map((subteam, key) => (
                                <div className="col-lg-4 col-sm-12">
                                    <TeamCard key={key} data={subteam} />
                                </div>
                            ))}
                        </div>
                    </React.Fragment>
                )
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        team: state.organization.team
    }
};

const mapDispatchToProps = dispatch => ({
    getTeamById: (id) => dispatch(getTeamById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);
