import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';


export const getJokes = () => {
  return dispatch => {
    dispatch({type: FETCH_START});

    axios.get('https://official-joke-api.appspot.com/random_joke')
    .then(res => {
      dispatch({type: FETCH_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({type: FETCH_FAIL, payload: err});
    })
  }
  
}

export const fetchStart = () => {
  return({type: FETCH_START})
}

export const fetchSuccess = (jokeData) => {
  return({type: FETCH_SUCCESS, payload: jokeData})
}

export const fetchFail = (error) => {
  return({type: FETCH_FAIL, payload: error})
}