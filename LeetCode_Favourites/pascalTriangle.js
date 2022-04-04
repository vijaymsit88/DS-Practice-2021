//Problem Statement: Given an integer N, return the first N rows of Pascal’s triangle.
//In Pascal’s triangle, each number is the sum of the two numbers directly above it as shown in the figure below:
//URL: https://takeuforward.org/data-structure/program-to-generate-pascals-triangle/

function printPascalTriangle(n) {
  let tri = [[]];
  tri = [[1]];
  for (let i = 1; i < n; i++) {
    let entry = [1];
    for (let j = 1; j < i; j++) {
      entry.push(tri[i - 1][j - 1] + tri[i - 1][j]);
    }
    entry.push(1);
    tri.push(entry);
  }
  console.log(tri);
}
printPascalTriangle(5);
