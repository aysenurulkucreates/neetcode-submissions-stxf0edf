class Solution {
    canAttendMeetings(intervals) {
        if (intervals.length <= 1) return true;

        intervals.sort((a, b) => a.start - b.start);

        for (let i = 1; i < intervals.length; i++) {
            let currentToplanti = intervals[i];
            let oncekiToplanti = intervals[i - 1];

            if (currentToplanti.start < oncekiToplanti.end) {
                return false; 
            }
        }
        return true;
    }
}