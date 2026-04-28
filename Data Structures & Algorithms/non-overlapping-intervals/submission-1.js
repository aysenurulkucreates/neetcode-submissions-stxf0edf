class Solution {
    eraseOverlapIntervals(intervals) {
        if(intervals.length === 0) return 0;

        intervals.sort((a,b) => a[1] - b[1]);

        let removeCount = 0;
        let currentEnd = intervals[0][1];

        for(let i = 1; i < intervals.length; i++) {
            let currentBrick = intervals[i];

            if(currentBrick[0] < currentEnd){
                removeCount++;
            } else {
                currentEnd = currentBrick[1];
            }
        }
       return removeCount;
    }
}
