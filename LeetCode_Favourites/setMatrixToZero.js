//Problem Statement: Given a matrix if an element in the matrix is 0 then
//you will have to set its entire column and row to 0 and then return the matrix.
//URL - https://takeuforward.org/data-structure/set-matrix-zero/

function setMatrixToZero(matrix) {
  let rows = matrix.length, cols = matrix[0].length;

  //Creating 2 dummy 1 D arrays and filling with -1
  let dummy1 = [];
  let dummy2 = [];
  dummy1.fill(-1);
  dummy2.fill(-1);

  //filling zeroes when an item in matrix is 0.
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] == 0) {
        dummy1[i] = 0;
        dummy2[j] = 0;
      }
    }
  }

  //When either of the dummy arrays contains a zero, that means that position should be 0 in matrix.
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dummy1[i] == 0 || dummy2[j]==0) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
//op = [[1,0,1],[0,0,0],[1,0,1]]

console.log(setMatrixToZero(matrix));

//Time Complexity: O(N*M + N*M)

//Space Complexity: O(M + N) = O(N)


//further optimization can be achieved by treating the first row and column of the matrix as dummy row and column matrix.
//then filling the matrix in reverse direction.
//optimized code.
/*
import java.util.*;
class TUF{
static void setZeroes(int[][] matrix) {
        int col0 = 1, rows = matrix.length, cols = matrix[0].length;

        for (int i = 0; i < rows; i++) {
            if (matrix[i][0] == 0) col0 = 0;
            for (int j = 1; j < cols; j++)
                if (matrix[i][j] == 0)
                    matrix[i][0] = matrix[0][j] = 0;
        }

        for (int i = rows - 1; i >= 0; i--) {
            for (int j = cols - 1; j >= 1; j--)
                if (matrix[i][0] == 0 || matrix[0][j] == 0)
                    matrix[i][j] = 0;
            if (col0 == 0) matrix[i][0] = 0;
        }
    }
public static void main(String args[]) {
        int arr[][] = {{0, 1, 2, 0}, {3, 4, 5, 2}, {1, 3, 1, 5}};
        setZeroes(arr);
        System.out.println("The Final Matrix is ");
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
}
}
*/
