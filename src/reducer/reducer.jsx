export default function reducer(state, action) {
  switch(action.type) {

    case 'minus':
      return state-1;
    case 'plus':
      return state+1;

    default:
      throw new Error();
  }
}
