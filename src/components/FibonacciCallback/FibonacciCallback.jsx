import { useState, useEffect, memo, useCallback, useMemo } from 'react';

const ExpensiveComponent = memo(({ compute, obj }) => {
  const n = 41;
  console.log('render expnsive component');
  return <div>{compute(n)}</div>;
});

const FibonacciCallback = () => {
  const [count, setCount] = useState(new Date());

  setTimeout(() => setCount(new Date()), 1000);

  const compute = useCallback(function fibonacci(n) {
    return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
  }, []);

  const obj = useMemo(
    () => ({
      a: 2,
    }),
    [],
  );

  return (
    <>
      <hr />
      <div>{count.getSeconds()}</div>
      <ExpensiveComponent compute={compute} obj={obj} />
    </>
  );
};

export default FibonacciCallback;
