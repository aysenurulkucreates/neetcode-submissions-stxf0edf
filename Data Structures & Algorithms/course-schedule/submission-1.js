class Solution {
    canFinish(numCourses, prerequisites) {
        const preMap = Array.from({length: numCourses}, () => []);
        for(const [course, pre] of prerequisites) {
            preMap[course].push(pre);
        }

        const visitSet = new Set();

        const dfs = (course) => {
            if(visitSet.has(course)) return false;
            if(preMap[course].length === 0) return true;

            visitSet.add(course);

            for(const pre of preMap[course]) {
                if(!dfs(pre)) return false;
            }

            visitSet.delete(course);

            preMap[course] = [];

            return true;
        }
        for(let i = 0; i < numCourses; i++){
            if(!dfs(i)) return false;
        }

        return true;
    }
}
