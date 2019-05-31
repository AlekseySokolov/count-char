import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import buttons from './buttons';
import RenderList from './renderList';
import displayFuncCountChar from './displayFunctions/displayFuncCountChar';
import anotherDisplayFunc from './displayFunctions/anotherDisplayFucn';
import './list.css'


const List = ({list, html, getList, asc, desc}) => {
    return (
        <>
         <div className='btnContainer'>
            {buttons(getList, asc, desc, html, list)}
         </div>
         <div className='charactersList'>
             <RenderList list={list} displayFunction={displayFuncCountChar}/>
             <RenderList list={list} displayFunction={anotherDisplayFunc}/>
         </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        html : state.html,
        list : state.list
    }
}
export default connect(mapStateToProps, actions)(List)