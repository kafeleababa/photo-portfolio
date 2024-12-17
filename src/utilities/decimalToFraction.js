function decimalToFraction(decimal) {
  const tolerance = 1.0E-6;
  let denominator = 1;
  let numerator = decimal;
  
  while (Math.abs(numerator - Math.round(numerator)) > tolerance) {
    numerator *= 10;
    denominator *= 10;
  }

  return `${Math.round(numerator)}/${denominator}`;
}

export default decimalToFraction();