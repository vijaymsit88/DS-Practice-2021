//URL https://leetcode.com/problems/container-with-most-water/submissions/
/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
*/
 var maxArea = function(height) {
    let n = height.length;
     let maxArea = 0;
     let l = 0;
     let r = n-1;
     
     while(l < r) {
         // update the max area
         let minHeight = Math.min(height[l], height[r]);
         maxArea = Math.max(maxArea, minHeight * (r-l));
         // Move the shorter lines each time
         if(height[l]<=height[r]){
             l++;
         } else {
             r--;
         }
     }
     
     return maxArea;
 };