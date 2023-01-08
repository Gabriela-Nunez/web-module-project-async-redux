import React from 'react';
import './App.css';
import JokesForm from './components/jokesForm';
import { connect } from 'react-redux';



function App(props) {
  console.log(props);

  const { jokeData, loading, error } = props;

  

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

export default connect(mapStateToProps)(App);