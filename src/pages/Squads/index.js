import React, { Component } from 'react';
import Loader from '../../components/Loader';
import SquadCard from './SquadCard';
import { connect } from 'react-redux';
import { getSquadsList } from '../../actions/actionsOrganization';

class Squads extends Component {

    componentDidMount() {
        this.props.getSquadsList();
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="main">squads organization</h1>

                {this.props.squads === null ? (
                    <Loader />
                ) : (
                    <div className="row container-squad">
                        {this.props.squads.map((squad, key) => (
                            <div className="col-lg-3 col-sm-12" key={key}>
                                <SquadCard data={squad} />
                            </div>
                        ))}
                    </div>
                    )}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        squads: state.organization.squads
    }
};

const mapDispatchToProps = dispatch => ({
    getSquadsList: () => dispatch(getSquadsList())
});


export default connect(mapStateToProps, mapDispatchToProps)(Squads);


