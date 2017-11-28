const LinkedList = require('./linked-list');

const list = new LinkedList();
list.add(1,2,3);

const reverseList = (head) => {
  if (!head || !head.next) return head;
  
  const rest = reverseList(head.next);

  head.next.next = head;
  head.next = null;
  
  return rest;
};

console.log(list.head);
const reversed = reverseList(list.head);
console.log(reversed);
