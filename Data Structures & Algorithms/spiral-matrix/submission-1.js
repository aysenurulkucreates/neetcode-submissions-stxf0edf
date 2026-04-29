/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
class Solution {
    spiralOrder(matrix) {
        let result = [];
        
        // Arazi yoksa işlemi iptal et
        if (matrix.length === 0) return result;

        // 1. DUVARLARI KUR
        let top = 0;
        let bottom = matrix.length - 1;
        let left = 0;
        let right = matrix[0].length - 1;

        // 2. KAZI İŞLEMİ (Duvarlar ezilene kadar dön)
        while (top <= bottom && left <= right) {
            
            // ADIM 1: ÜST DUVARI SÜPÜR (Soldan Sağa)
            for (let i = left; i <= right; i++) {
                result.push(matrix[top][i]);
            }
            top++; // Üst sınır kazındı, duvarı 1 birim aşağı daralt
            
            // ADIM 2: SAĞ DUVARI SÜPÜR (Yukarıdan Aşağıya)
            for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][right]);
            }
            right--; // Sağ sınır kazındı, duvarı 1 birim sola daralt
            
            // EDGE CASE: DİKDÖRTGEN ARAZİ KONTROLÜ
            // Üst ve sağ duvar daraldıktan sonra sınırlar birbirini geçmiş olabilir!
            if (top <= bottom && left <= right) {
                
                // ADIM 3: ALT DUVARI SÜPÜR (Sağdan Sola)
                for (let i = right; i >= left; i--) {
                    result.push(matrix[bottom][i]);
                }
                bottom--; // Alt sınır kazındı, duvarı 1 birim yukarı daralt
                
                // ADIM 4: SOL DUVARI SÜPÜR (Aşağıdan Yukarıya)
                for (let i = bottom; i >= top; i--) {
                    result.push(matrix[i][left]);
                }
                left++; // Sol sınır kazındı, duvarı 1 birim sağa daralt
            }
        }

        // 3. TESLİMAT
        return result;
    }
}