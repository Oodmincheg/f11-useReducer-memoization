export const initialState = { r: 100, g: 0, b: 0 };

export const INCREMENT_RED = 'INCREMENT_RED';
export const DECREMENT_RED = 'DECREMENT_RED';
export const INCREMENT_GREEN = 'INCREMENT_GREEN';
export const DECREMENT_GREEN = 'DECREMENT_GREEN';
export const INCREMENT_BLUE = 'INCREMENT_BLUE';
export const DECREMENT_BLUE = 'DECREMENT_BLUE';

const MAX_COLOR = 255;
const MIN_COLOR = 0;
const STEP = 20;

const increaseColor = (color) => {
  let newColor = color + STEP;
  if (newColor >= MAX_COLOR) {
    newColor = MAX_COLOR;
  }
  return newColor;
};

const decreaseColor = (color) => {
  let newColor = color - STEP;
  if (newColor >= MIN_COLOR) {
    newColor = MIN_COLOR;
  }
  return newColor;
};
const reducer = (state, action) => {
  // state = {r:100, g: 0, b: 0) }, action = {type: INCREMENT_RED}
  switch (action.type) {
    case INCREMENT_RED: {
      return { ...state, r: increaseColor(state.r) }; //state {r: 120, g: 0, b: 0}
    }
    case DECREMENT_RED: {
      return { ...state, r: decreaseColor };
    }
    case INCREMENT_GREEN: {
      return { ...state, g: increaseColor(state.g) };
    }
    case DECREMENT_GREEN: {
      return { ...state, g: decreaseColor(state.g) };
    }
    case INCREMENT_BLUE: {
      return { ...state, b: increaseColor(state.b) };
    }
    case DECREMENT_BLUE: {
      return { ...state, b: decreaseColor(state.b) };
    }
    default:
      return state;
  }
};

export default reducer;
