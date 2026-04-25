class Solution {
    isInterleave(s1, s2, s3) {
        // 1. EDGE CASE AVCILIĞI: Kapasite Kontrolü
        if (s1.length + s2.length !== s3.length) return false;

        let m = s1.length;
        let n = s2.length;

        // 2. DP MATRİSİNİ İNŞA ET: (m+1) x (n+1)
        let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(false));

        // 3. ZEMİN ETÜDÜ: Hiç malzeme yokken boş string elde edilebilir.
        dp[0][0] = true;

        // 4. ÜRETİM BANDI (Matrisi Doldur)
        for (let i = 0; i <= m; i++) {
            for (let j = 0; j <= n; j++) {
                
                // Başlangıç noktasını tekrar hesaplama
                if (i === 0 && j === 0) continue;

                // Şu an s3'te hangi hedefe nişan alıyoruz?
                let currentS3Index = i + j - 1;

                // İHTİMAL 1: s1'den malzeme alma (Yukarıdan gelme)
                // Şartlar: i sıfırdan büyük mü? VE s1'in güncel harfi s3'e uyuyor mu? VE üst kat true mu?
                let takenFromS1 = (i > 0) && (s1[i - 1] === s3[currentS3Index]) && (dp[i - 1][j]);

                // İHTİMAL 2: s2'den malzeme alma (Soldan gelme)
                // Şartlar: j sıfırdan büyük mü? VE s2'nin güncel harfi s3'e uyuyor mu? VE sol komşu true mu?
                let takenFromS2 = (j > 0) && (s2[j - 1] === s3[currentS3Index]) && (dp[i][j - 1]);

                // 5. KARAR ANI: İki banttan birinden başarıyla gelebildiysek bu oda 'true' olur.
                dp[i][j] = takenFromS1 || takenFromS2;
            }
        }

        // 6. TESLİMAT: Tüm malzemeler kullanıldığında ulaşılan nihai sonuç
        return dp[m][n];
    }
}
