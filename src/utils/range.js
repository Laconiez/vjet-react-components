const range = ({ from = 0, to = 10, step = 1 }) => {
  const result = [];
  for (let i = from; i <= to; i += step) {
    result.push(i);
  }
  return result;
};

export default range;
