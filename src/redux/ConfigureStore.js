import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { MembersReducer } from './MembersReducer';
const reducer = combineReducers({
  MembersReducer
});

export const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);