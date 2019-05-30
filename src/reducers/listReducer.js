import numberOfCharacters from '../secondaryFunctions/number-of-characters';
import filterHTML from '../secondaryFunctions/filterHTML';
import sortAsc from '../secondaryFunctions/sortAsc';
import sortDesc from '../secondaryFunctions/sortDesc';

const listReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_LIST' :
            return state = numberOfCharacters(filterHTML(action.payload))
        case 'SORT_ASC' :
            return state = sortAsc(state)
        case  'SORT_DESC' :
            return state = sortDesc(state)
        default :
            return state
    }
}

export default listReducer;