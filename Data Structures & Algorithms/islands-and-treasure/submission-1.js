class Solution {
    islandsAndTreasure(grid) {
        // 1. GÜVENLİK DUVARI
        if (grid === null || grid.length === 0) return;

        const ROWS = grid.length;
        const COLS = grid[0].length;
        const INF = 2147483647; // Müşterinin "Sonsuz" / "Boş Toprak" kodu
        
        // Şok dalgası merkezlerini tutacağımız boru (Kuyruk)
        const queue = []; 

        // 2. RADAR: HAZİNELERİ BUL VE KUYRUĞA AT
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                // SADECE hazineyi (0) arıyoruz! Boş toprağı (INF) değil.
                if (grid[r][c] === 0) { 
                    queue.push([r, c]);
                }
            }
        }

        // 4 Yön Pusulası: [Satır değişimi, Sütun değişimi]
        // Sırasıyla: Yukarı, Aşağı, Sağ, Sol
        const directions = [ [-1, 0], [1, 0], [0, 1], [0, -1] ];

        // 3. ŞOK DALGASI MOTORU (BFS)
        while (queue.length > 0) {
            // Kuyruğun başındaki koordinatı al ve listeden çıkar
            const [r, c] = queue.shift();

            // Bu merkezden 4 yöne yayıl
            for (const [dr, dc] of directions) {
                let newRow = r + dr;
                let newCol = c + dc;

                // Uçurum, Duvar veya Zaten Fethedilmiş Toprak Kontrolü
                if (newRow < 0 || newCol < 0 || newRow >= ROWS || newCol >= COLS || grid[newRow][newCol] !== INF) {
                    continue; 
                }

                // Taze bir boş toprağa (INF) ulaştık! 
                // Buranın mesafesi, geldiğimiz yerin 1 adım fazlasıdır.
                grid[newRow][newCol] = grid[r][c] + 1;

                // Bu yeni fethedilen toprağı da kuyruğa at ki, dalga oradan da yayılsın
                queue.push([newRow, newCol]);
            }
        }
    }
}
