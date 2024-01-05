const compose = (...rest) =>
  rest.reduce(
    (pre, now) =>
      (...args) =>
        pre(now(...args))
  );
const add10 = (x) => x + 10;
const mul10 = (x) => x * 10;
const add100 = (x) => x + 100;
compose(add10, mul10, add100)(10);
