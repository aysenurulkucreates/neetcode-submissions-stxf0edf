class Solution {
    isInterleave(s1, s2, s3) {
        if (s1.length + s2.length !== s3.length) return false;

        let m = s1.length;
        let n = s2.length;

        let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(false));
        dp[0][0] = true;

        for (let i = 0; i <= m; i++) {
            for (let j = 0; j <= n; j++) {
                if (i === 0 && j === 0) continue;

                let currentS3Index = i + j - 1;

                let takenFromS1 = (i > 0) && (s1[i - 1] === s3[currentS3Index]) && (dp[i - 1][j]);
                let takenFromS2 = (j > 0) && (s2[j - 1] === s3[currentS3Index]) && (dp[i][j - 1]);

                dp[i][j] = takenFromS1 || takenFromS2;
            }
        }
        return dp[m][n];
    }
}
