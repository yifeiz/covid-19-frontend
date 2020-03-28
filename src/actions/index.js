import db from "../apis/db";

export const submitForm = formValues => async dispatch => {
  let submitSuccess;
  try {
    const response = await db.post("/submit", formValues);
    submitSuccess = response.data;
  } catch(e) {
    console.error(e);
    submitSuccess = false;
  }

  dispatch({ type: "SUBMIT_FORM", payload: submitSuccess });
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
