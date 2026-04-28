class Solution {
    merge(intervals) {
        if(intervals.length <= 1) return intervals;

        intervals.sort((a, b) => a[0] - b[0]);

        let result = [];
        result.push(intervals[0]);

        for(let i = 0; i < intervals.length; i++) {
            let currentBrick = intervals[i];
            let lastBrickInBox = result[result.length - 1];

            if(currentBrick[0] <= lastBrickInBox[1]) {
                lastBrickInBox[1] = Math.max(lastBrickInBox[1], currentBrick[1]);
            } else {
                result.push(currentBrick);
            }
        }
        return result;
    }
}
