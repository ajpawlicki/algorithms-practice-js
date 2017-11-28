const LinkedList = require('./linked-list');

const list = new LinkedList();
list.add(1,2,3);

const reverseList = (head) => {
  let node = head;
  let prev = null;

  while (node) {
    let next = node.next;
    
    node.next = prev;
    prev = node;

    node = next;
  }

  return prev;
};

console.log(list.head);
const reversed = reverseList(list.head);
console.log('reversed:', reversed);
reverseList(reversed);
console.log(list.head);
