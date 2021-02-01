const userDetails = (state = [], action) => {
  switch (action.type) {
    case "SET_USER_DETAILS": {
      // localStorage.setItem()
      return (state = action.payload);
    }

    default:
      return state;
  }
};

export default userDetails;
