export function formatCurrency(num) {
  if (num < 1000) return num;
  const makeString = String(num);
  return `${makeString[1]},${makeString.substring(1)}`;
}
