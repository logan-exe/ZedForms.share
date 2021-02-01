export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const logged = () => {
  return {
    type: "SIGN_IN",
  };
};

export const formList = (compList) => {
  return {
    type: "SET_CURRENT_FORM",
    payload: compList,
  };
};

export const prevListSetter = (myList) => {
  return {
    type: "SET_PRE_CURRENT_FORM",
    payload: myList,
  };
};

export const resListSetter = (myFinalList) => {
  return {
    type: "SET_FINAL_FORM",
    payload: myFinalList,
  };
};

export const userDetails = (details) => {
  return {
    type: "SET_USER_DETAILS",
    payload: details,
  };
};
