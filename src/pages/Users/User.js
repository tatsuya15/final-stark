import React, { Component } from 'react';
import Loader from '../../components/Loader';
import { connect } from 'react-redux';
// import { getLicensesList } from '../../actions/actionsLicense';

class User extends Component {

    componentDidMount() {
        this.props.getLicensesList();
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="main">User Details</h1>
                { this.props.licenses === null ? (
                <Loader />
                ) : (
                    <React.Fragment>


                </React.Fragment>
                )}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        // user: state.helpdesk.licenses
    }
};

const mapDispatchToProps = dispatch => ({
    // getLicensesList: (id) => dispatch(getLicensesList())
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
