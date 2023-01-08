const jokeData = 
  {
  type: "general",
  setup: "Want to hear my pizza joke?",
  punchline: "Never mind, it's too cheesy.",
  id: 154
}

const initialState = {
  jokeData: jokeData,
  loading: false,
  error: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
     default:
      return(state);
  }
}

export default reducer;