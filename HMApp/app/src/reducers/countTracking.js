const countTracking = (state = [], action) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { name: action.description, counter: action.counter };
    case "DECREASE_COUNT":
      return { counter: action.counter - 1 }, action.payload;

    default:
      return state;
  }
};
export default countTracking;
