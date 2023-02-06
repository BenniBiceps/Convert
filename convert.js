const args = process.argv;

function roundTo4Decimals(num) {
  return +(Math.round(num + "e+4") + "e-4");
}

function convertInchesToMetric(inches, metricUnit) {
  const mmPerInch = 25.4;
  if (metricUnit === "mm") {
    return roundTo4Decimals(inches * mmPerInch);
  } else if (metricUnit === "cm") {
    return roundTo4Decimals(inches * mmPerInch / 10);
  } else if (metricUnit === "m") {
    return roundTo4Decimals(inches * mmPerInch / 1000);
  } else {
    return "Invalid metric unit argument, expected mm, cm or m. Got: "
  }
}

if (args[2] === "-t") {
  // Tests
  console.log("Running tests:")
  const expectedmm = 101.6;
  const mm = convertInchesToMetric(4, "mm");
  console.log(`4 inches to mm. Expected: ${expectedmm} got ${mm}, success: ${mm == expectedmm}`)

  const expectedcm = 7.62;
  const cm = convertInchesToMetric(3, "cm");
  console.log(`3 inches to cm. Expected: ${expectedcm} got ${cm}, success: ${cm == expectedcm}`)

  const expectedm = 1.4224;
  const m = convertInchesToMetric(56, "m");
  console.log(`56 inches to m, Expected: ${expectedm} got ${m}, success: ${m == expectedm}`)
} else {
  // Normal user input
  const inches = args[2]
  const unit = args[3].replace('-', '').toLowerCase();
  const result = convertInchesToMetric(inches, unit);
  console.log(`${result} ${unit}`)
}
