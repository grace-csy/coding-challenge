const parseValue = value => {
  if (typeof value === 'undefined' || value === null) return value;
  if (typeof value === 'string') return `${value} AI`;
  if (Number.isInteger(value)) return value + 1;
  if (Array.isArray(value)) return value.map((v) => parseValue(v));
  if (typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, val]) => [key, parseValue(val)]));
  }
  return value;
};

const transformValue = obj => {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, parseValue(value)]));
};
