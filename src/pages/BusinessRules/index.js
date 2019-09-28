import React, { Component } from 'react';
import Loader from '../../components/Loader';
import { connect } from 'react-redux';
import { getBRList } from '../../actions/actionsTesting';

class BusinessRules extends Component {

    componentDidMount() {
        this.props.getBRList();
    }

    render() {
        return (
            <React.Fragment>
            <h1 className="main">Business rules management</h1>
            {this.props.businessRules === null ? (
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
        businessRules: state.testing.businessRules
    }
};

const mapDispatchToProps = dispatch => ({
    getBRList: (id) => dispatch(getBRList())
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessRules);
