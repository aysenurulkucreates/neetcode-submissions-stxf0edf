/**
 * function Node(val, neighbors) {
 * this.val = val === undefined ? 0 : val;
 * this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

class Solution {
    cloneGraph(node) {
        // 1. Güvenlik Duvarı: Harita boşsa null dön.
        if (!node) {
            return null;
        }

        // 2. Kayıt Defteri: Eski düğüm -> Yeni kopya eşleşmesi
        const visited = new Map();

        // 3. DFS Ajanı (Kopya İnşaat Ekibi)
        const dfs = (oldNode) => {
            // Sonsuz Döngü Kırıcı: Bu binayı daha önce kopyaladık mı?
            if (visited.has(oldNode)) {
                // Kopyaladıysak, defterden kopyasını al ve direkt onu ver.
                return visited.get(oldNode);
            }

            // İlk defa görüyoruz. Sıfırdan yeni bir bina dik.
            const copyNode = new Node(oldNode.val);

            // KRİTİK ADIM: Komşuları gezmeden önce yeni binayı deftere kaydet!
            visited.set(oldNode, copyNode);

            // Şimdi eski binanın komşularını gez ve yeni binaya bağla.
            for (let neighbor of oldNode.neighbors) {
                // Komşunun da kopyasını yaratması için DFS'i yolla ve dönen kopyayı ekle.
                copyNode.neighbors.push(dfs(neighbor));
            }

            return copyNode;
        }

        // Motoru ilk düğümle ateşle
        return dfs(node);
    }
}
