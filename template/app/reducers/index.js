import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';

import hello from './hello';


const rootReducer = combineReducers({
  routing,
  hello,

});

export default rootReducer;
