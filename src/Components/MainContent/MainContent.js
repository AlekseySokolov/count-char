import React from 'react';
import { connect } from 'react-redux';
import Sort from './Sort/Sort';
import List from './List/List';
import './mainContent.css';


const MainContent = (props) => {
    const {html, list, sortStatus} = props
    return (
        <>
            <Sort html={html} list={list} sortStatus={sortStatus} />
            <List list={list} />
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        html: state.html,
        list : state.list,
        sortStatus : state.sortStatus
    }
};

export default connect(mapStateToProps)(MainContent);