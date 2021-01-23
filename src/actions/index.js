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