const INITIAL_STATE = {
  page: 1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "NEXT_PAGE":
      return { ...state, page: state.page + 1 };
    case "PREVIOUS_PAGE":
      return { ...state, page: state.page - 1 };

    default:
      return state;
  }
};
