import db from "../apis/db";

export const submitForm = formValues => async dispatch => {
  const response = await db.post("/submit", formValues);

  dispatch({ type: "SUBMIT_FORM", payload: response.data });
};

export const readCookie = () => async dispatch => {
  const { data } = await db.get("/read-cookie");
  if (data.exists) {
    dispatch({
      type: "COOKIE_EXISTS",
      payload: true
    });
  } else {
    dispatch({ type: "NO_COOKIE", payload: false });
  }
};

export const SignIn = (profile) => async dispatch => {
  //TODO check if user exists/create new user
  console.log(profile)
  if (profile) {
    localStorage.setItem('imageURL', profile.imageURL);
    dispatch({
      type: "SIGN_IN",
      payload: true
    });
  }
};

export const SignOut = (profile) => async dispatch => {
  //TODO check if user exists/create new user
  if (profile) {
    dispatch({
      type: "SIGN_OUT",
      payload: true
    });
  }
};

export const SetUser = (user) => async dispatch => {
  //TODO check if user exists/create new user
  if(user) {
    dispatch({
      type: "SET_USER"
    })
  }
};
