const globalIndexAuth = (state = [], action) => {
  switch (action.type) {
    case "GET_INDEX":
      return [...state, action.index];
  }
  return state;
};

export default globalIndexAuth;
