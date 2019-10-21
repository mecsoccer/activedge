function tweetReducer(state = { tweets:[] }, action) {
    switch(action.type) {
      case 'FETCH_TWEETS':
        return { ...state, tweets: action.payload.data };
      case 'POST_TWEET':
        return { ...state, posted: action.payload };
      case 'UPDATE_TWEET':
        return { ...state, updated: action.payload.data };
      case 'DELETE_TWEET':
          return { ...state, deleted: action.payload.data };
      default:
        return state;
    }
  }
  
  export default tweetReducer;
  