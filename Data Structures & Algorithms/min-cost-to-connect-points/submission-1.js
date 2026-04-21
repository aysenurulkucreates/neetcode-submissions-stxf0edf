class Solution {
    minCostConnectPoints(points) {
        const n = points.length;
        
        // 1. ZIRHLI MİN-HEAP (Kova): [maliyet, ofis_indeksi] tutacak
        const minHeap = new MinPriorityQueue(x => x[0]);
        
        // İlk çiviyi çakıyoruz! 0 numaralı ofisten başla, maliyeti 0.
        minHeap.enqueue([0, 0]);

        const visited = new Set();
        let totalCost = 0;

        // 2. ŞALTER KONTROLÜ: Bütün ofislere (n) elektrik gidene kadar dön!
        while (visited.size < n) {
            // 3. Kovadan EN UCUZ kablo teklifini çek
            const item = minHeap.dequeue();
            const [cost, i] = item.element ? item.element : item;

            // 4. GÜVENLİK DUVARI: Bu ofise zaten elektrik çektiysek pas geç (Kısır Döngü Engeli)
            if (visited.has(i)) continue;

            // 5. İHALEYİ ONAYLA: Elektriği bağla ve faturaya maliyeti ekle
            visited.add(i);
            totalCost += cost;

            // 6. ÇEVRE KEŞFİ: Elektrik bağlanan bu ofisten, DİĞER ofislere kablo maliyetlerini hesapla
            for (let j = 0; j < n; j++) {
                // Sadece elektriği OLMAYAN ofislere kablo çekmeyi düşün
                if (!visited.has(j)) {
                    // Manhattan Mesafesi Formülü: |x1 - x2| + |y1 - y2|
                    const dist = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
                    
                    // Hesaplanan bu yeni maliyeti teklif olarak kovaya at
                    minHeap.enqueue([dist, j]);
                }
            }
        }

        // 7. İHALEYİ TESLİM ET
        return totalCost;
    }
}
