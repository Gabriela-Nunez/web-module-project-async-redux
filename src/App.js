import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';

import JokesForm from './components/jokesForm';
import { getJokes } from './actions';



function App(props) {
  const { jokeData, loading, error, getJokes } = props;

  useEffect(() => {
   props.getJokes();
  }, [])

  return (
    <div className="App">
      <h1>Life is Too Beautiful to be Stressed, Have a Joke Instead!</h1>
      <img 
      className='image'
      src='.images/laughingWomen.jpg'
      alt='laughing women'
      />
   
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

export default connect(mapStateToProps, { getJokes })(App);