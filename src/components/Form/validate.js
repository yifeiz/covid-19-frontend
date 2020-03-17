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

  return errors;
};

export default validate;
