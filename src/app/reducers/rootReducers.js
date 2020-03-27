import { combineReducers } from 'redux';
import testReducer from '../../features/testarea/testReducer';

const rootReducers = combineReducers({
  test: testReducer
});

export default rootReducers;
