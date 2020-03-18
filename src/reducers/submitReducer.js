export default (state = {}, action) => {
  switch (action.type) {
    case "SUBMIT_FORM":
      return { ...state };
    default:
      return state;
  }
};
