export default function byteHuman(bytes = 0) {
  // If not a number, use Zero
  bytes = typeof bytes !== "number" ? 0 : bytes
  // If negative, change to positive
  let NoP = bytes < 0 ? bytes * (-1) : bytes
  // Decimal Unit Array
  const UNIT = [
    'B', 'kB', 'MB',
    'GB', 'TB', 'PB',
    'EB', 'ZB', 'YB',
    'RB', 'QB'
  ];
  // For unit array index
  let index = 0;
  // When more than 900, divided with 1000 and increase index
  while (NoP >= 900) {
    NoP = NoP / 1000;
    index++;
  };
  // Round (17.939292838 => 17.94)
  NoP = Math.round(NoP * 100) / 100;
  // If initially negative, return to negative
  return (bytes < 0 ? NoP * (-1) : NoP) + UNIT[index];
}