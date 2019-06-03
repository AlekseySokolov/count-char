import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../../actions/actions";


const RenderList = (props) => {
    const {list, displayFunction, totalAmount} = props
    return (
        <ul className='list'>
            {list.map((obj, index) =><li key={index}>{displayFunction(obj, totalAmount)}</li>)}
        </ul>
    )
};


const mapStateToProps = (state) => {
    return {
        totalAmount : state.totalAmount
    }
};
export default connect(mapStateToProps, actions)(RenderList);