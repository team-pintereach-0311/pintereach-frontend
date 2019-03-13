import {
  LOGIN_START,
  SIGNUP_START,
  LOGIN_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS
} from "../actions";

const initialState = {
  articles: [],
  loggingIn: false,
  error: "",
  token: localStorage.getItem("token"),
  fetchingArticles: false,
  errorStatusCode: null,
  signingUp: ""
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
        loggingIn: true,
        signingUp: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        signingUp: true,
        token: action.payload
      };
    case FETCH_DATA_START:
      return {
        ...state,
        fetchingArticles: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: "",
        errorStatusCode: null,
        fetchingArticles: false,
        articles: action.payload
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload.status,
        errorStatusCode: action.payload.status,
        fetchingArticles: false
      };
    default:
      return state;
  }
};

export default reducer;
