import axiosInstance from '../apis/jsonplaceholder';

export const fetchArtists = () => async dispatch => {
  try {
    const response = await axiosInstance.get('/users');
    dispatch({ type: 'FETCH_ARTISTS', payload: response.data });
    console.log(response.data);
  }
  catch (error) {
    if (error.message === 'Network Error') return alert('No or poor network connection.');
    dispatch({ type: 'FETCH_ARTISTS', payload: {} });
    console.log(error.message);
  }
}

export const fetchAlbums = () => async dispatch => {
  try {
    const response = await axiosInstance.get('/albums');
    dispatch({ type: 'FETCH_ARTIST_ALBUMS', payload: response.data });
    console.log(response.data);
  }
  catch (error) {
    if (error.message === 'Network Error') return alert('No or poor network connection.');
    dispatch({ type: 'FETCH_ARTIST_ALBUMS', payload: {} });
    console.log(error.message);
  }
}

export const fetchAlbumPhotos = (id) => async dispatch => {
	try {
		const response = await axiosInstance.get(`/albums/${id}/photos`);
		dispatch({ type: 'FETCH_ALBUM_PHOTOS', payload: response.data });
	}
	catch (error) {
		if (error.message === 'Network Error') return alert('No or poor network connection.');
		dispatch({ type: 'FETCH_ALBUM_PHOTOS', payload: {} });
	}
}

export const fetchTweets = () => async dispatch => {
	try {
		const response = await axiosInstance.get('/comments');
		dispatch({ type: 'FETCH_TWEETS', payload: response.data });
		console.log(response.data);
	}
	catch (error) {
		if (error.message === 'Network Error') return alert('No or poor network connection.');
		dispatch({ type: 'FETCH_TWEETS', payload: {} });
		console.log(error.message);
	}
}

export const createTweet = () => async dispatch => {
	try {
		const response = await axiosInstance.post('/comments');
		dispatch({ type: 'POST_TWEET', payload: response.data });
		console.log(response.data);
	}
	catch (error) {
		if (error.message === 'Network Error') return alert('No or poor network connection.');
		dispatch({ type: 'POST_TWEET', payload: {} });
		console.log(error.message);
	}
}

export const updateTweet = (id) => async dispatch => {
	try {
		const response = await axiosInstance.put(`/comments/${id}`);
		dispatch({ type: 'UPDATE_TWEET', payload: response.data });
		console.log(response.data);
	}
	catch (error) {
		if (error.message === 'Network Error') return alert('No or poor network connection.');
		dispatch({ type: 'UPDATE_TWEET', payload: {} });
		console.log(error.message);
	}
}

export const deleteTweet = (id) => async dispatch => {
	try {
		const response = await axiosInstance.put(`/comments/${id}`);
		dispatch({ type: 'DELETE_TWEET', payload: response.data });
		console.log(response.data);
	}
	catch (error) {
		if (error.message === 'Network Error') return alert('No or poor network connection.');
		dispatch({ type: 'DELETE_TWEET', payload: {} });
		console.log(error.message);
	}
}