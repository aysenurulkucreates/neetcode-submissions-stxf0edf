class Solution {
    partition(s) {
        const res = [];

        const isPalindrome = (str, left, right) => {
            while(left < right) {
              if(str[left] !== str[right]) return false;

              left++
              right--;
            }
            return true;
        }

        const dfs = (startIndex, subset) => {
            if(startIndex === s.length){
                res.push([...subset]);
                return;
            }

            for(let i = startIndex; i < s.length; i++) {
                if(!isPalindrome(s, startIndex, i)){
                    continue;
                }

                subset.push(s.slice(startIndex, i + 1));
                dfs(i + 1, subset);
                subset.pop();
            }
        }
        dfs(0, []);
        return res;
    }
}
