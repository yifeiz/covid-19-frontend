const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.sex) {
    errors.sex = "Required";
  }
  if (!values.favoriteColor) {
    errors.favoriteColor = "Required";
  }
  if(!values.DOB){
    errors.DOB = "Required";
  }
  else if(!/([0-9]{2})+\/([0-9]{2})+\/([0-9]{4})/i.test(values.DOB)){
    errors.DOB = "Format as MM/DD/YYYY";
  }
  if(!values.sex){
    errors.sex = "Required";
  }
  if(!values.postal){
    errors.postal = "Required";
  }
  else if(!/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/i.test(values.postal)){
    errors.postal = "Invalid Postal Code, should be formatted as A1A 1A1"
  }
  if(!values.familyDoctor){
    errors.familyDoctor = "Required";
  }

  return errors;
};

export default validate;
