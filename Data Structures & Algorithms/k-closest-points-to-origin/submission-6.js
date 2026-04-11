class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        // 1. Kütüphaneye "Öncelik Kriterini" doğrudan fonksiyon olarak ver.
        // Bu yazım tarzı (callback), o aldığın hatayı kökten çözer.
        const pq = new MaxPriorityQueue((p) => p[0] * p[0] + p[1] * p[1]);

        for (const p of points) {
            // 2. Sadece noktayı gönder. 
            // Kütüphane yukarıda verdiğimiz formülle mesafeyi kendi hesaplar.
            pq.enqueue(p);

            // 3. Kapasite kontrolü: K'yı aşarsak en uzağı (Max) at.
            if (pq.size() > k) {
                pq.dequeue();
            }
        }

        const result = [];
        // 4. Kuyrukta kalan en yakın K tane elemanı topla.
        while (pq.size() > 0) {
            // v4 sürümünde dequeue() direkt objeyi (noktayı) döner.
            // Eğer [null] hatası alırsan burayı pq.dequeue().element yap.
            // Ama önce en sade halini dene:
            const item = pq.dequeue();
            result.push(item.element || item);
        }

        return result;
    }
}