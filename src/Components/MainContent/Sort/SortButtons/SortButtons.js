import React from 'react';
import {connect} from 'react-redux';
import {asc, desc, getList} from "../../../../actions/actions";
import ascButtonEvent from './events/ascButtonEvent';
import descButtonEvent from './events/descButtonEvent';

const SortButtons = (props) => {
    return (
        <div className='sortBtnContainer'>
        <button className='btn' onClick={() => ascButtonEvent(props)}>Asc</button>
        <button className='btn' onClick={() => descButtonEvent(props)}>Desc</button>
        </div>
    )
};

const mapDispatchToProps = {
    asc,
    desc,
    getList
}

export default connect(null, mapDispatchToProps)(SortButtons);