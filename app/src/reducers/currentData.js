const currentDate = (state = "", action) => {
  switch (action.type) {
    case "CURRENT_Date":
      return action.date;
    case "EMPTY_STRING":
      return (state = "");
  }
  return state;
};
export default currentDate;
