import {
  LOGIN_START,
  SIGNUP_START,
  LOGIN_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_FAILURE
} from "../actions";

const initialState = {
  articles: [],
  loggingIn: false,
  error: "",
  token: localStorage.getItem("token"),
  fetchingArticles: false,
  errorStatusCode: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case SIGNUP_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload
      };
    case FETCH_DATA_START:
      return {
        ...state,
        fetchingArticles: true
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status,
        fetchingArticles: false
      };
    default:
      return state;
  }
};

export default reducer;
