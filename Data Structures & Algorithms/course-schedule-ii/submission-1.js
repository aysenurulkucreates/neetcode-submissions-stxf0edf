class Solution {
    findOrder(numCourses, prerequisites) {
        const preMap = Array.from({length: numCourses}, () => []);
        for(const [course, pre] of prerequisites){
            preMap[course].push(pre);
        }

        const cycleSet = new Set();
        const visitedSet = new Set();
        const output = [];

        const dfs = (course) => {
            if(cycleSet.has(course)) return false;
            if(visitedSet.has(course)) return true;

            cycleSet.add(course);

            for(const pre of preMap[course]) {
                if(!dfs(pre)) return false;
            }

            cycleSet.delete(course);
            visitedSet.add(course);
            output.push(course);

            return true;
        }
        for(let i = 0; i < numCourses; i++) {
            if(!dfs(i)) return [];
        }

        return output;
    }

}
