import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const SIGNUP_START = "SIGNUP_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://testsite.akiradj.com/auth/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    });
};

export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios
    .post("https://testsite.akiradj.com/auth/register", creds)
    .then(res => {
      return axios
        .post("https://testsite.akiradj.com/auth/login", creds)
        .then(res => {
          console.log("logindata", res.data);
          localStorage.setItem("token", res.data.token);
          dispatch({ type: LOGIN_SUCCESS, payload: res.data });
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
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
    });
};

export const FETCH_DATA3_START = "FETCH_DATA3_START";
export const FETCH_DATA3_SUCCESS = "FETCH_DATA3_SUCCESS";
export const FETCH_DATA3_FAILURE = "FETCH_DATA3_FAILURE";

export const getData3 = () => dispatch => {
  dispatch({ type: FETCH_DATA3_START });
  axios
    .get("https://testsite.akiradj.com/categories/Space/articles", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: FETCH_DATA3_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA3_FAILURE, payload: err.response });
    });
};

export const FETCH_DATA2_START = "FETCH_DATA2_START";
export const FETCH_DATA2_SUCCESS = "FETCH_DATA2_SUCCESS";
export const FETCH_DATA2_FAILURE = "FETCH_DATA2_FAILURE";

export const getData2 = () => dispatch => {
  dispatch({ type: FETCH_DATA2_START });
  axios
    //57
    .get(`https://testsite.akiradj.com/categories/`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: FETCH_DATA2_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA2_FAILURE, payload: err.response });
    });
};

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

export const deleteArticle = (id, user_id) => dispatch => {
  dispatch({ type: DELETE_START });
  axios
    .delete(`https://testsite.akiradj.com/users/${user_id}/articles/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res.data);
      window.location.reload();
    })

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
    .then(res => {
      console.log("ADD STUDY RESPONDS ", res.data);
      dispatch({ type: ADD_STUDY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const ADD_BOARD_START = "ADD_BOARD_START";
export const ADD_BOARD_SUCCESS = "ADD_BOARD_SUCCESS";
export const ADD_BOARD_FAILURE = "ADD_BOARD_FAILURE";

export const addBoard = (name, id) => dispatch => {
  dispatch({ type: ADD_BOARD_START });
  axios
    .post(`https://testsite.akiradj.com/users/${id}/articles/category`, name, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res.data);
      dispatch({ type: ADD_BOARD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_START });
  localStorage.clear();
  dispatch({ type: LOGOUT_SUCCESS });
};
