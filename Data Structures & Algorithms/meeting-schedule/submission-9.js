// bookings may be 0. So we'd add control for this.
// start may be 0 and start always smaller than end, also max 10^6.
// 1,5 and 5,1 are overlap so I only add <, not with equal.
// bookings are mixed order. So I'd sort them.
class Solution {
    canAttendMeetings(intervals) {
        if(intervals.lenght === 0) return true;
        
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