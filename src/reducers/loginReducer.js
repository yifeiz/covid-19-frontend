export default (state = {}, action) => {
    switch (action.type) {
      case "SIGN_IN":
        return { ...state, exists: true };
      case "NO_COOKIE":
        return { ...state, exists: false };
      default:
        return state;
    }
  };
  