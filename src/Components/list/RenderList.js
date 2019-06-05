import React, {Component} from 'react';

const RenderList = () => {
    return class extends Component {
        render () {
            const {list, View} = this.props;
            return (
            <div className='charactersList'>
            <ul className='list'>
            { list.map((obj, index) =><li key={index}><View {...this.props} obj={obj} /></li>) }
             </ul>
            </div>
            )
        }
    }
};

export default RenderList();
