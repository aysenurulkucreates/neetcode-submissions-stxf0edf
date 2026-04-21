class Solution {
    networkDelayTime(times, n, k) {
        // 1. Şantiye Planı
        const adj = Array.from({ length: n + 1 }, () => []);
        
        for (const [u, v, time] of times) {
            adj[u].push([v, time]); // [Gidilecek_Ofis, Gidiş_Süresi]
        }

        // 2. KÜTÜPHANENİN TAM İSTEDİĞİ KURAL 
        // Parantez içine doğrudan x => x[0] yazarak "Zamana göre sırala" diyoruz.
        const minHeap = new MinPriorityQueue(x => x[0]);
        
        // Sinyal Başladı! İçeri [Zaman, Ofis] dizisi atıyoruz.
        minHeap.enqueue([0, k]);

        const visited = new Set();
        let maxTime = 0;

        while (!minHeap.isEmpty()) {
            // 3. VERSİYON HATALARINI EZEN O HAYAT KURTARICI SATIR:
            const item = minHeap.dequeue();
            // Eğer kütüphane eskiyse item.element'i al, yeniyse doğrudan item'ı al!
            const [time, node] = item.element ? item.element : item;

            // Ofise daha önce sinyal geldiyse pas geç
            if (visited.has(node)) continue;

            // Ofise sinyal ulaştı, deftere yaz ve saati güncelle
            visited.add(node);
            maxTime = Math.max(maxTime, time);

            // Çekmeceyi aç ve bu ofisten gidilebilecek diğer komşulara bak
            for (const [neighbor, travelTime] of adj[node]) {
                // Eğer o komşuya henüz sinyal gitmediyse onu da sıraya al
                if (!visited.has(neighbor)) {
                    minHeap.enqueue([time + travelTime, neighbor]);
                }
            }
        }

        // Her yere ulaştıysa saati dön, ulaşmadıysa -1 dön
        return visited.size === n ? maxTime : -1;
    }
}