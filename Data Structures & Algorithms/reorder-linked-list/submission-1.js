
class Solution {
    reorderList(head) {
        if(!head || !head.next) return;

        let slow = head;
        let fast = head;

        while(fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let secondHalf = slow.next;

        slow.next = null;

        let prev = null;
        let curr = secondHalf;

        while(curr !== null){
            let nextTemp = curr.next;

            curr.next = prev;

            prev = curr;

            curr = nextTemp;

        }

        let first = head;
        let second = prev;

        while(second !== null) {
            let temp1 = first.next;
            let temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;

        }
    }
}
