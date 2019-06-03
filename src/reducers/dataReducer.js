import filterHTML from '../secondaryFunctions/conversionFunctions/filterHTML';

const dataReducer = (state = '', action) => {
    switch (action.type) {
        case 'GET_REQUEST' :
            return state = filterHTML(action.payload)
        default :
            return state
    }
};

export default dataReducer;