// https://leetcode.com/problems/reverse-linked-list-ii/
// Given the head of a singly linked list and two integers left and right where left <= right, 
// reverse the nodes of the list from position left to position right, and return the reversed list.

// Constraints:

//     The number of nodes in the list is n.
//     1 <= n <= 500
//     -500 <= Node.val <= 500
//     1 <= left <= right <= n

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
}

const printList = (head) => {
    if(!head) {
      return;
    }
  
    console.log(head.val);
    printList(head.next);
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    let position = 1;
    let currentNode = head;
    let start = head;
    
    while(position < left) {
        start = currentNode;
        currentNode = currentNode.next;
        position++;
    }

    let newList = null; tail = currentNode;
    while(position <= right) {
        nextTemp = currentNode.next;
        currentNode.next = newList;
        
        newList = currentNode;
        currentNode = nextTemp;
        position++;
    }

    start.next = newList;
    tail.next = currentNode; 

    if(left === 1) {
        return newList;
    } else {
        return head;
    }
};

// ---- Generate our linked list ----
const linkedList = [7, 6, 5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);

printList(linkedList);
console.log('after reverse')
printList(reverseBetween(linkedList, 3, 5));