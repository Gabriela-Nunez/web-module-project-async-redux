import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import axios from 'axios';

import JokesForm from './components/jokesForm';
import { fetchStart, fetchSuccess, fetchFail } from './actions';


function App(props) {
  const { jokeData, loading, error } = props;

  useEffect(() => {
    props.fetchStart();
    axios.get('https://official-joke-api.appspot.com/random_joke')
      .then(res => {
        props.fetchSuccess(res.data);
      })
      .catch(err => {
        props.fetchFail(err);
      })
  }, [])

  return (
    <div className="App">
      <h1>Life is Too Beautiful to be Stressed, Have a Joke Instead!</h1>
      <JokesForm />
      { loading ? <h3>Loading...</h3> : 
      <h2>{jokeData.setup}
      <p>{jokeData.punchline}😂</p> </h2>}
    
      {(error !== '') && <h3>{error}</h3> }

    </div>
  );
}


const mapStateToProps = state => {
  return {
    jokeData: state.jokeData,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchStart, fetchSuccess, fetchFail })(App);