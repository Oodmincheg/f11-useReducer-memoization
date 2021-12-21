import { useReducer } from 'react';

import reducer, {
  initialState,
  INCREMENT_BLUE,
  INCREMENT_GREEN,
  INCREMENT_RED,
  DECREMENT_BLUE,
  DECREMENT_GREEN,
  DECREMENT_RED,
} from './reducer';

const RGBChanger = () => {
  const [{ r, g, b }, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2 style={{ backgroundColor: `rgb(${r},${g},${b})` }}>rgb header</h2>
      <div>
        red:
        <button onClick={() => dispatch({ type: INCREMENT_RED })}>+</button>
        <button onClick={() => dispatch({ type: DECREMENT_RED })}>-</button>
      </div>
      <div>
        green:
        <button onClick={() => dispatch({ type: INCREMENT_GREEN })}>+</button>
        <button onClick={() => dispatch({ type: DECREMENT_GREEN })}>-</button>
      </div>
      <div>
        blue:
        <button onClick={() => dispatch({ type: INCREMENT_BLUE })}>+</button>
        <button onClick={() => dispatch({ type: DECREMENT_BLUE })}>-</button>
      </div>
    </>
  );
};

export default RGBChanger;
