import db from "../apis/db";

export const submitForm = formValues => async dispatch => {
  const response = await db.post("/submit", formValues);

  dispatch({ type: "SUBMIT_FORM", payload: response.data });
};
