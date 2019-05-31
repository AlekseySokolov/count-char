import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import buttons from './buttons';
import renderList from './renderList';
import './list.css'

const List = ({list, html, getList, asc, desc}) => {
    return (
        <>
         <div className='btnContainer'>
            {buttons(getList, asc, desc, html, list)}
         </div>
         <div className='charactersList'>
            {renderList(list)}
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