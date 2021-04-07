import { combineReducers, createStore, compose } from 'redux';
import todos from './todo/reducer';
import shop from './shop/reducer';

const rootReducer = combineReducers({ todos, shop });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const mdl = composeEnhancers();
const store = createStore(rootReducer, mdl);

export { store };
