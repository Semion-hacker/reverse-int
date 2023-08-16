module.exports = function reverse (n) {
  const reverse = (s) => s.split('').reverse().join('');
  if (n > 0) {
    const result = n.toString();
    const result2 = reverse(result);
    return parseInt(result2);
  } else if (n < 0) {
    n = n * -1;
    const result3 = n.toString();
    const result4 = reverse(result3);
    return parseInt(result4);
  } else {
    return 0;
  };
};
