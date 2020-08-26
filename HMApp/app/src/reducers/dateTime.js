const dateTime = (state = "", action) => {
  switch (action.type) {
    case "ADD_DATE_TIME":
      return action.dateTime;
    case "EMPTY_STRING":
      return (state = "");
  }
  return state;
};
export default dateTime;
