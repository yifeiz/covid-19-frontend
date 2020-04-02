export const validate = formValues => {
  const errors = {};
  if (!formValues.q1) {
    errors.q1 = "Required";
  }
  if (!formValues.q2) {
    errors.q2 = "Required";
  }
  if (!formValues.q3) {
    errors.q3 = "Required";
  }
  if (!formValues.q4) {
    errors.q4 = "Required";
  }
  if (!formValues.q5) {
    errors.q5 = "Required";
  }
  if (!formValues.q6) {
    errors.q6 = "Required";
  }
  if (!formValues.q7) {
    errors.q7 = "Required";
  }
  if (!formValues.q8) {
    errors.q8 = "Required";
  }

  if (!formValues.postalCode) {
    errors.postalCode = "Vous devez entrer un code postal";
  } else if (
    !/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]$/i.test(formValues.postalCode)
  ) {
    errors.postalCode = "Code postal invalide. Devrait être formaté comme A1A";
  }

  return errors;
};
