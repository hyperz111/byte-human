export default function byteHuman(bytes = 0) {
  const UNIT = [
    'B', 'kB', 'MB',
    'GB', 'TB', 'PB',
    'EB', 'ZB', 'YB',
    'RB', 'QB'
  ];
  let index = 0;
  while (bytes >= 900) {
    bytes = bytes / 1000;
    index++;
  };
  bytes = Math.round(bytes * 100) / 100;
  return bytes + UNIT[index];
}