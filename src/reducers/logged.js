const logReducer = (
  state = JSON.parse(localStorage.getItem("islogged")) ? true : false,
  action
) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    default:
      return state;
  }
};

export default logReducer;
