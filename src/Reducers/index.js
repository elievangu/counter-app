const reducers = (state = 0, action) => {
  switch(action.type) {
      case 'DECREMENT':
        return state - 1;

      case 'INCREMENT':
        return state + 1;

      default:
        return state;
  }
}

export default reducers;
