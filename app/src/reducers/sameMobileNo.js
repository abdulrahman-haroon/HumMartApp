const sameMobileNo = (state = false, action) => {
  switch (action.type) {
    case "CHECK":
      return action.check;
  }
  return state;
};

export default sameMobileNo;
