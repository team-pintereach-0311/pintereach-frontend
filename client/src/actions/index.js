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
      console.log(res.data.id);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    });
};

export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios
    .post("https://testsite.akiradj.com/auth/register", creds)
    .then(res => {
      localStorage.setItem("token", res.data.token);
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

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get(`https://testsite.akiradj.com/users`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    // .then(res => console.log("data", res.data.user))
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.user });
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
    .get(`https://testsite.akiradj.com/users/id/article/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    // .then(res => console.log("data", res.data.user))
    .then(res => {
      dispatch({ type: DELETE_SUCCESS, payload: res.data.user });
    })
    .catch(err => {
      dispatch({ type: DELETE_FAILURE, payload: err.response });
    });
};
