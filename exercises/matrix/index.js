// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i += 1) {
    results.push([]);
  }

  let counter = 1;

  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i += 1) {
      results[startRow][i] = counter;
      counter += 1;
    }
    startRow += 1;

    // Right Column
    for (let i = startRow; i <= endRow; i += 1) {
      results[i][endColumn] = counter;
      counter += 1;
    }
    endColumn -= 1;

    // Bottom row
    for (let i = endColumn; i >= startColumn; i -= 1) {
      results[endRow][i] = counter;
      counter += 1;
    }
    endRow -= 1;

    // Left Column
    for (let i = endRow; i >= startRow; i -= 1) {
      results[i][startColumn] = counter;
      counter += 1;
    }

    startColumn += 1;
  }

  return results;
}

module.exports = matrix;
