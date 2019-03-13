import {
  LOGIN_START,
  SIGNUP_START,
  LOGIN_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
  DELETE_START,
  DELETE_SUCCESS
} from "../actions";

const initialState = {
  articles: [
    { link: "https://www.google.com", id: 1 },
    { link: "https://www.google.com", id: 2 },
    { link: "https://www.google.com", id: 3 },
    { link: "https://www.google.com", id: 4 },
    { link: "https://www.google.com", id: 5 },
    { link: "https://www.google.com", id: 6 },
    { link: "https://www.google.com", id: 7 },
    { link: "https://www.google.com", id: 8 }
  ],
  loggingIn: false,
  error: "",
  token: localStorage.getItem("token"),
  fetchingArticles: false,
  errorStatusCode: null,
  signingUp: "",
  message: "",
  deletingArticle: false
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
        token: action.payload.token,
        message: action.payload.message
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
    case DELETE_START:
      return {
        ...state,
        deletingArticle: true
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        deletingArticle: false,
        error: "",
        errorStatusCode: null,
        articles: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
