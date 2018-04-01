// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxCh = '';
  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (const char in charMap) {
    console.log(char);
    if (charMap[char] > max) {
      max = charMap[char];
      maxCh = char;
    }
  }
  return maxCh;
}

module.exports = maxChar;
