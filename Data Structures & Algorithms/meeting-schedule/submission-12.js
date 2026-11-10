// bookings may be 0. So we'd add control for this.
// start may be 0 and start always smaller than end, also max 10^6.
// 1,5 and 5,1 are overlap so I only add <, not with equal.
// bookings are mixed order. So I'd sort them.
// The family is intervals. In brute force, I compare them one by one without sorting. Instead, I sort them by start time and I compare them O(n log n) time.
class Solution {
    canAttendMeetings(intervals) {
        if(intervals.length === 0) return true; // First I check for intervals may be 0.

        intervals.sort((a,b) => a.start - b.start); // Then I sort them by their start time because since there could be overlapping start times- which might necessitate multiple merge operations within the code- I resolve this issue by sorting the entries based on their start times.

        for(let i = 1; i < intervals.length; i++) { // I start the loop with  because I cmpare the curr and previous value.
            const curr = intervals[i]; // I define the curr and previous one.
            const prev = intervals[i - 1];

            if(curr.start < prev.end) { // Then I compare them, if curr.start is smaller than prev.end, there is a overlap.
                return false;
            }
        }
        return true; // Finally I return true.
    }
}

// time is O(n log n) because of the sort.
// space is O(1) because sorting only change the intervals's positions, and there is no extra memory.