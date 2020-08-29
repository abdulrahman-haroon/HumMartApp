const innerIncrement = (state = 0, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return (state = state + 1);
  }
  return state;
};

export default innerIncrement;
