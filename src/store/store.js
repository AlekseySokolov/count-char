import { createStore , combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import dataReducer from '../reducers/dataReducer';

const reducers = {
    form : formReducer,
    html : dataReducer
};

const rootReducer = combineReducers(reducers);
let store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));

export default store;