const preFormDetails = (state = [], action) => {
  switch (action.type) {
    case "SET_PRE_CURRENT_FORM": {
      // localStorage.setItem()
      return (state = action.payload);
    }

    default:
      return state;
  }
};

export default preFormDetails;
