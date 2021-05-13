console.log(JSON.parse(localStorage.getItem("userData")));

const userPicture = (
  state = JSON.parse(localStorage.getItem("userData")) !== null
    ? JSON.parse(localStorage.getItem("userData")).picture
    : "",
  action
) => {
  switch (action.type) {
    case "SET_USER_PICTURE":
      return (state = action.payload);
    default:
      return state;
  }
};

export default userPicture;
