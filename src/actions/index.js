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
