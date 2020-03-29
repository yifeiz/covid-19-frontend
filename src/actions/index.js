import backend from "../apis/backend";

export const submitForm = formValues => async dispatch => {
  const response = await backend.post("/submit", formValues);

  dispatch({ type: "SUBMIT_FORM", payload: response.data });
};

export const readCookie = () => async dispatch => {
  const { data } = await backend.get("/read-cookie");
  if (data.exists) {
    dispatch({
      type: "COOKIE_EXISTS",
      payload: true
    });
  } else {
    dispatch({ type: "NO_COOKIE", payload: false });
  }
};

export const SignIn = (response) => async dispatch => {
  //TODO check if user exists/create new user
  console.log(response)
  if (response.profileObj) {
    
    backend.post("/login", {tokenId: response.tokenId})
    console.log(response.profileObj)
    console.log(response.profileObj.imageUrl)
    localStorage.setItem('imageURL', response.profileObj.imageUrl);
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
