let cardNumber = "4556364607935616";

function maskify(cardNumber) {
  const n = cardNumber.length;

  const lastFour = cardNumber.slice(-4);
  const remaining = cardNumber.slice(0, n - 4);
  const masked = "#".repeat(remaining.length) + lastFour;

  return masked;
}
console.log(maskify(cardNumber));
