import { createStackNavigator } from '@react-navigation/stack';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from './reducers';

const rootReducer = combineReducers({newsReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));