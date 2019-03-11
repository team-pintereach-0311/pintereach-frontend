import axios from "axios";

import { history } from "../helpers/history";

export const LOGIN_START = "LOGIN_START";
export const SIGNUP_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://testsite.akiradj.com/auth/login", creds)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    });
};

export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios
    .post("https://testsite.akiradj.com/auth/register", creds)
    .then(res => {
      console.log(res);
      // localStorage.setItem("token", res.data.payload);
      // dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    });
};
