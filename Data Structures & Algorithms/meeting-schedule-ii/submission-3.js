class Solution {
    minMeetingRooms(intervals) {
        if(intervals.length === 0) return 0;

        let starts = intervals.map(meet => meet.start);
        let ends = intervals.map(meet => meet.end);

        starts.sort((a,b) => a - b);
        ends.sort((a, b) => a - b);

        let rooms = 0;
        let s = 0;
        let e = 0;

        while(s < intervals.length) {
            if(starts[s] < ends[e]){
             rooms++;
            } else {
                e++;
            }
            s++
        }
       return rooms;
    }
}
