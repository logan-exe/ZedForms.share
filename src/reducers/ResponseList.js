const resList = (state = [], action) => {
  switch (action.type) {
    case "SET_CURRENT_FORM": {
      // localStorage.setItem()
      return (state = action.payload);
    }

    default:
      return state;
  }
};

export default resList;
