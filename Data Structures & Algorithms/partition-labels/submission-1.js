class Solution {
    partitionLabels(S) {
        let lastOccurences = {};
        for(let i = 0; i < S.length; i++) {
          lastOccurences[S[i]] = i;
        }

        let result = [];
        let start = 0;
        let currentEnd = 0;

        for(let i = 0; i < S.length; i++) {
           let char = S[i];

           currentEnd = Math.max(currentEnd, lastOccurences[char]);

           if( i === currentEnd) {
             result.push(currentEnd - start + 1);

             start = currentEnd + 1;
           }
        }
        return result;
    }
}
