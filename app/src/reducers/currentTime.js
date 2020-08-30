const currentTime = (state = "", action) => {
  switch (action.type) {
    case "CURRENT_TIME":
      return action.time;
    case "EMPTY_STRING":
      return (state = "");
  }
  return state;
};
export default currentTime;
