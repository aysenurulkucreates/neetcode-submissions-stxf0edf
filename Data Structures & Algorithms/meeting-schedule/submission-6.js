class Solution {
    canAttendMeetings(intervals) {
        intervals.sort((a,b) => a.start - b.start);

        for(let i = 1; i < intervals.length; i++) {
            const curr = intervals[i];
            const prev = intervals[i - 1];

            if(curr.start < prev.end) {
                return false;
            }
        }
        return true;
    }
}