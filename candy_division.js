const divide_candy = (n) => {
  const res = [];

  for (let i = 0; i < n; i += 1) {
    if (n % (i + 1) === 0) res.push(i);
  }

  return res;
};
