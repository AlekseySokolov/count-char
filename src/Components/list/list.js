import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import numberOfCharacters from './number-of-characters';
import './list.css'

const List = ({html}) => {
    return (
        <div>
            <ul className='charactersList'>
                {numberOfCharacters(html)
                 .map((value, index)=>
                     <li key={index}>{value[0]} = {value[1]}</li>)}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        html : state.html
    }
}
export default connect(mapStateToProps, actions)(List)