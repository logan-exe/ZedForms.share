const userIdReducer = (
  state = JSON.parse(localStorage.getItem("userData")) !== null
    ? JSON.parse(localStorage.getItem("userData")).userId
    : "",
  action
) => {
  switch (action.type) {
    case "SET_USER_ID":
      return (state = action.payload);
    default:
      return state;
  }
};

export default userIdReducer;
