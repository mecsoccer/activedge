function artistReducer(state = { artists:[], artistAlbums: [] }, action) {
    switch(action.type) {
      case 'FETCH_ARTISTS':
        return { ...state, artists: action.payload };
      case 'FETCH_ARTIST_ALBUMS':
        return { ...state, artistAlbums: action.payload };
      case 'FETCH_ALBUM_PHOTOS':
        return { ...state, albumPhotos: action.payload };
      default:
        return state;
    }
  }
  
export default artistReducer;
  