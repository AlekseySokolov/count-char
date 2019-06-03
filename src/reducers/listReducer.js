import toColl from '../secondaryFunctions/conversionFunctions/toColl';
import sortAsc from '../secondaryFunctions/sortFunctions/sortAsc';
import sortDesc from '../secondaryFunctions/sortFunctions/sortDesc';

const listReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_LIST' :
            return state = toColl(action.payload)
        case 'SORT_ASC' :
            return state = sortAsc(state)
        case  'SORT_DESC' :
            return state = sortDesc(state)
        default :
            return state
    }
};

export default listReducer;