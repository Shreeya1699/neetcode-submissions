/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    reverseList(head){
        let prev = null;
        let curr = head
        while(curr){
            const temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
            
        }
        return prev;
    }

    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let fast = head;
        let slow = head;

        while(fast.next && fast.next.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        
        let h2 = slow.next;
        slow.next = null;

        h2 = this.reverseList(h2);

        let h1 = head;

    while (h2) {
        let temp1 = h1.next;
        let temp2 = h2.next;

        h1.next = h2;
        h2.next = temp1;

        h1 = temp1;
        h2 = temp2;
    }
        return head;



        
    }
}
