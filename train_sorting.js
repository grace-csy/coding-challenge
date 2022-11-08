const max = (a, b) => a > b ? a : b;

const train_sort = (n, trains) => {
  let res = 0;
  let begin = [];
  let end = [];

  for (let i = n; i >= 1; i -= 1) {
    begin[i] = 1;
    end[i] = 1;

    for (let j = n; j > i; j -= 1) {
      if (trains[i] > trains[j]) {
        begin[i] = max(begin[i], begin[j] + 1);
      } else {
        end[i] = max(end[i], end[j] + 1);
      }
    }

    res = max(res, end[i] + begin[i] - 1);
  }

  return res;
};
