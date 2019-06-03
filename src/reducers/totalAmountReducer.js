import calculateTotal from '../secondaryFunctions/calculateFunctions/calculateTotal';

const totalAmountReducer = (state = 0, action) => {
    switch (action.type) {
        case 'GET_LIST' :
            return state = calculateTotal(action.payload)
        default :
            return state
    }
};

export default totalAmountReducer;