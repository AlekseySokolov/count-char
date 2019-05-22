import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import axiosRequest from './axiosRequest';
import  * as actions from '../../actions/actions';

const InputForm = (props) => {
    const { handleSubmit , getRequest } = props
    const submit = (value) => {
        axiosRequest(value['inputURL'], getRequest)
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <Field
            name ='inputURL'
            component ='input'
            type ='text'
            label = 'url'
            ></Field>
            <button type='submit'>getRequest</button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        html : state.html
    }
}

const toConnect = connect(
    mapStateToProps,
    actions
)(InputForm);

export default reduxForm({
    form : 'inputURL'
})(toConnect)