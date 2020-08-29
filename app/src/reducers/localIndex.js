const localIndex = (state = 0, action) => {
  switch (action.type) {
    case "LOCAL_INDEX":
      return action.localkey;
  }
  return state;
};

export default localIndex;
