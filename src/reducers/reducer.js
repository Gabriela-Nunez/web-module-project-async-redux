import { FETCH_FAIL, FETCH_START } from "../actions";
import { FETCH_SUCCESS } from "../actions";

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
    case FETCH_START:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        jokeData: action.payload,
        loading: false,
        error: ''
      }
    case FETCH_FAIL:
      return{
        ...state,
        jokeDate: [],
        loading:false,
        error: action.payload
      }
     default:
      return(state);
  }
}

export default reducer;