import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Counter = ({ counter, inc, dec, rnd }) => {

    const style = {
        margin: "5px"
    }

    return (
        <div className="jumbotron">
            <h2>{counter}</h2>     
            <button 
                onClick={dec}
                className="btn btn-primary btn-lg">DEC</button>
            <button 
                onClick={inc}   
                className="btn btn-primary btn-lg"
                style={style}>INC</button>
            <button 
                onClick={rnd}   
                className="btn btn-primary btn-lg">RND</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state,
    };
};


export default connect(mapStateToProps, actions)(Counter);