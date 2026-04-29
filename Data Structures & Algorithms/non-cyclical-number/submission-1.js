/**
 * @param {number} n
 * @return {boolean}
 */
class Solution {
    isHappy(n) {
        // 1. ZEMİN ETÜDÜ: Kara Liste (Kayıt Defteri)
        let gorulenSayilar = new Set();

        // 2. ÜRETİM BANDI: Sayı 1 olmadığı sürece VE daha önce görülmediği sürece dön
        while (n !== 1 && !gorulenSayilar.has(n)) {
            // Şartlar sağlandıysa bu sayıyı hemen kara listeye ekle
            gorulenSayilar.add(n);
            
            // Parçalama motorunu çalıştır ve n'i yeni sayıyla güncelle
            n = this.getSum(n);
        }

        // 3. TESLİMAT: Döngü bitti. 1 olduğu için mi bitti, yoksa kısır döngüye girdiği için mi?
        return n === 1;
    }

    // --- PARÇALAMA MOTORU (Helper Function) ---
    getSum(num) {
        let sum = 0;
        while (num > 0) {
            let sonRakam = num % 10;          // Sayının en sağındaki rakamı kopar
            sum += sonRakam * sonRakam;       // Karesini alıp toplama ekle
            num = Math.floor(num / 10);       // Son rakamı çöpe at (Node.js ondalık tuzağına dikkat!)
        }
        return sum;
    }
}