class Solution {
    copyRandomList(head) {
        if (!head) return null;

        let curr = head;
        while (curr !== null) {
            let clone = new Node(curr.val);
            clone.next = curr.next;
            curr.next = clone;
            curr = clone.next;
        }

        curr = head;
        while (curr !== null) {
            if (curr.random !== null) {
                curr.next.random = curr.random.next;
            }
            curr = curr.next.next;
        }

        curr = head;
        let copyHead = head.next;
        let copyCurr = copyHead;

        while (curr !== null) {
            curr.next = curr.next.next;
            
            if (copyCurr.next !== null) {
                copyCurr.next = copyCurr.next.next;
            }
            
            curr = curr.next;
            copyCurr = copyCurr.next;
        }

        return copyHead;
    }
}
