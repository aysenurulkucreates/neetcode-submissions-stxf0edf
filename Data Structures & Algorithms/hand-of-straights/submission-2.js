class Solution {
    isNStraightHand(hand, groupSize) {
        if(hand.length % groupSize !== 0) return false;

        let counts = new Map();
        for(let i = 0; i < hand.length; i++) {
           let card = hand[i];
           counts.set(card, (counts.get(card) || 0) + 1);
        }

        hand.sort((a,b) => a - b);

        for(let i = 0; i < hand.length; i++) {
            let card = hand[i];

            if(counts.get(card) === 0) continue;

            for(let j = 0; j < groupSize; j++) {
                let currentCard = card + j;

                if(!counts.get(currentCard))  return false;
                
                counts.set(currentCard, counts.get(currentCard) - 1);
            
            }
        }
        return true;
    }
}
