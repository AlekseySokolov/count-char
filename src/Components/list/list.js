import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import Buttons from './Buttons';
import RenderList from './RenderList';
import DisplayFunc from './displayFunctions/DisplayFunc';
import './list.css';


const List = (props) => {
    const {html, list, totalAmount, getList, asc, desc} = props
    return (
        <>
            <Buttons getList={getList} asc={asc} desc={desc} html={html} list={list} />
            <RenderList list={list} View={DisplayFunc} totalAmount={totalAmount} />
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        html : state.html,
        list : state.list,
        totalAmount : state.totalAmount
    }
};
export default connect(mapStateToProps, actions)(List);