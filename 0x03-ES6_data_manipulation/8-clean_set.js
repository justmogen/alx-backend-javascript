export default function cleanSet(set, startString) {
  if (!(set instanceof Set || typeof startString !== 'string')) {
    throw new Error('Invalid input');
  }

  const filteredValue = Array.from(set).filter((value) => value.startsWith(startString));
  const cleanedString = filteredValue.map((value) => value.slice(startString.length)).join('-');
  return cleanedString;
}
