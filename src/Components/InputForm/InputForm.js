import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import axiosRequest from './axiosRequest';
import {getRequest, getList, resetSort} from '../../actions/actions';

const InputForm = (props) => {
    const {handleSubmit, getRequest, getList, resetSort} = props
    const submit = (value) => {
        axiosRequest(value['inputURL'], getRequest, getList)
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <Field
            name ='inputURL'
            component ='input'
            type ='text'
            label = 'url'
            ></Field>
            <button type='submit' onClick={() => resetSort()}>getRequest</button>
        </form>
    )
};

const mapStateToProps = (state) => {
    return {
        html : state.html,
        list : state.list
    }
};
const mapDispatchToProps = {
    getRequest,
    getList,
    resetSort
};

const toConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputForm);

export default reduxForm({
    form : 'inputURL'
})(toConnect);