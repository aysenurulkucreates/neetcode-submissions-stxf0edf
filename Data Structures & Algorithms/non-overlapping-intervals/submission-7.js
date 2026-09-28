class Solution {
    eraseOverlapIntervals(intervals) {
        intervals.sort((a,b) => a[1] - b[1]);

        let removeCount = 0;
        let currEnd = intervals[0][1];

        for(let i = 1; i < intervals.length; i++) {
            let curr = intervals[i];

            if(curr[0] < currEnd) {
                removeCount++;
            } else {
                currEnd = curr[1];
            }
        }
        return removeCount;
    }
}