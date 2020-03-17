const INITIAL_STATE = {
  page: 1,
  tested: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "NEXT_PAGE":
      return { ...state, page: state.page + 1 };
    case "PREVIOUS_PAGE":
      return { ...state, page: state.page - 1 };
    case "TESTED_TRUE":
      return {...state, page: state.page + 1, tested: true}
    case "TESTED_FALSE":
      return {...state, page: state.page + 1, tested: false}
  
    default:
      return state;
  }
};
