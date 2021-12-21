import { useState, useMemo } from 'react';

const FibonacciMemo = () => {
  const [number, setNumber] = useState(35);
  const [color, setColor] = useState('green');

  function fibonacci(n) {
    return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
  }

  const fib = useMemo(() => fibonacci(number), [number]);

  return (
    <>
      <hr />
      <h2
        style={{ color }}
        onClick={() => setColor(color === 'green' ? 'red' : 'green')}
      >
        Fibonacci header
      </h2>
      <p>
        Fibonachi sum: {fib} for number: {number}
      </p>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </>
  );
};

export default FibonacciMemo;
