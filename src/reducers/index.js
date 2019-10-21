import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import artistReducer from './artistReducer';
import tweetReducer from './tweetReducer';

export default combineReducers({
  artist: artistReducer,
  form: formReducer,
  tweet: tweetReducer,
});
