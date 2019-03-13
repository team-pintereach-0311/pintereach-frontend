import axios from "axios";

import { history } from "../helpers/history";

export const LOGIN_START = "LOGIN_START";
export const SIGNUP_START = "SIGNUP_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://testsite.akiradj.com/auth/login", creds)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    });
};

export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios
    .post("https://testsite.akiradj.com/auth/register", creds)
    .then(res => {
      console.log(res);
      // localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_START });
      return axios
        .post("https://testsite.akiradj.com/auth/login", creds)
        .then(res => {
          localStorage.setItem("token", res.data.token);
          dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
        });
    });
};

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const getData = id => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get(`https://testsite.akiradj.com/users/${id}/articles`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
    });
};

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

export const deleteArticle = id => dispatch => {
  dispatch({ type: DELETE_START });
  axios
    .delete(`https://testsite.akiradj.com/users/8/articles/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => console.log("data", res))
    // .then(res => {
    //   dispatch({ type: DELETE_SUCCESS, payload: res.data.user });
    // })
    .catch(err => {
      dispatch({ type: DELETE_FAILURE, payload: err.response });
    });
};

export const ADD_STUDY_START = "ADD_STUDY_START";
export const ADD_STUDY_SUCCESS = "ADD_STUDY_SUCCESS";
export const ADD_STUDY_FAILURE = "ADD_STUDY_FAILURE";

export const addStudy = study => dispatch => {
  dispatch({ type: ADD_STUDY_START });
  axios
    .post("https://testsite.akiradj.com/users/articles", study, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => console.log("ADD RES:", res))
    .catch(err => {
      console.log(err);
    });
};
