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
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let len = 0;
    let dummy = head;

    while (dummy) {
        dummy = dummy.next;
        len++;
    }

    // Removing head
    if (n === len) {
        return head.next;
    }

    let prevNode = head;
    let count = 1;

    while (count < len - n) {
        prevNode = prevNode.next;
        count++;
    }

    prevNode.next = prevNode.next.next;

    return head;
        
    }
}
