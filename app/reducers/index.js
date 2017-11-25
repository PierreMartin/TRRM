import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import courses from './courses';

const rootReducer = combineReducers({
  courses,
  routing
});

export default rootReducer;
