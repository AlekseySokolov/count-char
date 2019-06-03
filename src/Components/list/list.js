import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import buttons from './buttons';
import RenderList from './renderList';
import displayFunc from './displayFunctions/displayFunc';
import './list.css'


const List = (props) => {
    const {list, html, getList, asc, desc} = props
    return (
        <>
         <div className='btnContainer'>
            {buttons(getList, asc, desc, html, list)}
         </div>
         <div className='charactersList'>
             <RenderList list={list} displayFunction={displayFunc}/>
         </div>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        html : state.html,
        list : state.list
    }
};
export default connect(mapStateToProps, actions)(List);