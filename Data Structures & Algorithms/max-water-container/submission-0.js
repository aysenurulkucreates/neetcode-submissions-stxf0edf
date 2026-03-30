class Solution {
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;

        while (left < right ) {
            let width = right - left;
            let height = Math.min(heights[left], heights[right]);
            let currentArea = width * height;

            maxArea = Math.max(maxArea, currentArea);

            if(heights[left] < heights[right]){
                left++
            } else {
                right--;
            }
        }

        return maxArea;
    }
}
