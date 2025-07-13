/**
 * conversion temperature scales
 *
 * @param {number} - value - value temperature
 * @param {'C'|'F'|'K'} fromScale - Source temperature scale:
 *   - 'C' for Celsius
 *   - 'F' for Fahrenheit
 *   - 'K' for Kelvin
 * @param {string} - toScale - target scale
 * @returns {number} - result conversion
 * @throws {Error} - if transferred wrong parametrs
 * @example
 * console.log(convertTemp(0, "C", "K")); // 273.15
 * @example
 * Throw error for invalid input
 * console.log(convertTemp("", "C", "F"));
 **/

function convertTemp(value, fromScale, toScale) {
  if (typeof value !== "number") throw new Error("value must be number");
  if (typeof fromScale !== "string" || typeof toScale !== "string")
    throw new Error("scales must be string");

  let lowerFromScale = fromScale.toLowerCase();
  let lowerToScale = toScale.toLowerCase();

  const validScale = ["c", "f", "k"];

  if (
    !validScale.includes(lowerFromScale) ||
    !validScale.includes(lowerToScale)
  ) {
    throw new Error(`Invalid scale. Use ${validScale.join(",")}`);
  }
  if (lowerFromScale === lowerToScale) return value;

  if (lowerFromScale === "c" && lowerToScale === "f")
    return (value * 9) / 5 + 32;
  if (lowerFromScale === "f" && lowerToScale === "c")
    return ((value - 32) * 5) / 9;
  if (lowerFromScale === "c" && lowerToScale === "k") return value + 273.15;
  if (lowerFromScale === "k" && lowerToScale === "c") return value - 273.15;
  if (lowerFromScale === "f" && lowerToScale === "k")
    return ((value - 32) * 5) / 9 + 273.15;
  if (lowerFromScale === "k" && lowerToScale === "f")
    return ((value - 273.15) * 9) / 5 + 32;

  throw new Error(`Conversion ${fromScale} to ${toScale} not supported`);
}

console.log(convertTemp(0, "C", "F")); // 32
console.log(convertTemp(32, "F", "C")); // 0
console.log(convertTemp(0, "C", "K")); // 273.15
console.log(convertTemp(273.15, "K", "C")); // 0

// Errors;
console.log(convertTemp("", "C", "F")); // Error: Value must be a number
console.log(convertTemp(0, "X", "F")); // Error: Invalid scale
