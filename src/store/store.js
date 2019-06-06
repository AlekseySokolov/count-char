import { createStore , combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import dataReducer from '../reducers/dataReducer';
import listReducer from '../reducers/listReducer';
import totalAmountReducer from '../reducers/totalAmountReducer';
import sortStatusReducer from '../reducers/sortStatusReducer';

const reducers = {
    form : formReducer,
    html : dataReducer,
    list : listReducer,
    totalAmount : totalAmountReducer,
    sortStatus : sortStatusReducer
};

const rootReducer = combineReducers(reducers);
let store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));

export default store;