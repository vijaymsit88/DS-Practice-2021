//URL - https://leetcode.com/problems/rotate-image/submissions/
//You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

var rotate = function(matrix) {
    let n = matrix.length;
    matrix.reverse();
    
    for(let i = 0; i < n ; i++) {
        for(let j = i+1; j < n ; j++) {
             let temp = matrix[i][j];
             matrix[i][j] = matrix[j][i];
             matrix[j][i] = temp;
            }
    }
};

let mat = [[1,2,3],[4,5,6],[7,8,9]];
rotate(mat);

console.log(mat);