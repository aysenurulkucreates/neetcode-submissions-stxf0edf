class Solution {
    longestCommonSubsequence(text1, text2) {
        let m = text1.length;
        let n = text2.length;
        
        // 1. ŞANTİYE KURULUMU: (m+1) x (n+1) boyutunda 0 dolu matris.
        // +1 yapıyoruz çünkü "hiç harf yokken" (0. satır/sütun) sonuç 0'dır.
        let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

        // 2. İNŞAAT BAŞLIYOR
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                
                // Eğer harfler aynıysa (i-1 ve j-1 çünkü string indexleri 0'dan başlar)
                if (text1[i - 1] === text2[j - 1]) {
                    // Çaprazdan gel, 1 ekle
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    // Üstteki veya soldakinden büyük olanı miras al
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        // 3. TESLİMAT: Matrisin en sağ alt köşesi en uzun ortak diziyi verir.
        return dp[m][n];
    }
}