import {
  LOGIN_START,
  SIGNUP_START,
  LOGIN_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
  DELETE_START,
  DELETE_SUCCESS,
  ADD_STUDY_START,
  ADD_STUDY_SUCCESS,
  ADD_STUDY_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from "../actions";

const initialState = {
  addingStudy: false,
  articles: [],
  loggingIn: false,
  error: "",
  token: localStorage.getItem("token"),
  fetchingArticles: false,
  errorStatusCode: null,
  signingUp: false,
  message: "",
  deletingArticle: false,
  id: 8,
  loggingOut: false
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
        token: action.payload.token,
        message: action.payload.message,
        id: action.payload.id
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
    case ADD_STUDY_START:
      return {
        ...state,
        addingStudy: true
      };
    case ADD_STUDY_SUCCESS:
      return {
        ...state,
        addingStudy: false
      };
    case LOGOUT_START:
      return {
        ...state,
        loggingOut: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        logginOut: false
      };
    default:
      return state;
  }
};

export default reducer;
