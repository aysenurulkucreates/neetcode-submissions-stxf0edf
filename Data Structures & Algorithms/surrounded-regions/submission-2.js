class Solution {
    solve(board) {
        // 1. GÜVENLİK DUVARI
        if (!board || board.length === 0) return;

        const ROWS = board.length;
        const COLS = board[0].length;

        // 2. DFS AJANI (Kurtarma Ekibi)
        // Görevi: Sınırla bağlantısı olan 'O' ları bulup güvenli damgası ('T') vurmak.
        const dfs = (r, c) => {
            // Uçurum, Çarpışma ve Hedef Kontrolü
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] !== 'O') {
                return;
            }

            // Toprağı Boya: Bu 'O' kıyıya bağlı, güvende! ('T' = Temporary/Safe)
            board[r][c] = 'T';

            // 4 yöne kurtarma ekibini yay
            dfs(r + 1, c); // Güney
            dfs(r - 1, c); // Kuzey
            dfs(r, c + 1); // Doğu
            dfs(r, c - 1); // Batı
        };

        // 3. SINIRLARI (KIYILARI) TARA VE AJANLARI İÇERİ SAL
        
        // Sol ve Sağ Kıyılar (Satırları dön)
        for (let r = 0; r < ROWS; r++) {
            if (board[r][0] === 'O') dfs(r, 0);                 // Sol Kıyı
            if (board[r][COLS - 1] === 'O') dfs(r, COLS - 1);   // Sağ Kıyı
        }

        // Üst ve Alt Kıyılar (Sütunları dön)
        for (let c = 0; c < COLS; c++) {
            if (board[0][c] === 'O') dfs(0, c);                 // Üst Kıyı
            if (board[ROWS - 1][c] === 'O') dfs(ROWS - 1, c);   // Alt Kıyı
        }

        // 4. BÜYÜK SÜPÜRME (İnfaz ve Geri Yükleme)
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === 'O') {
                    // Sınırla bağlantısı yok, hapsolmuş. İnfaz et!
                    board[r][c] = 'X';
                } else if (board[r][c] === 'T') {
                    // Sınıra bağlıydı (Kurtarıldı), eski haline getir.
                    board[r][c] = 'O';
                }
            }
        }
    }
}
