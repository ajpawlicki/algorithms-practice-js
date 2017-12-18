const LinkedList = require('../linked-lists/linked-list');

const simpleHash = (str, maxLength) => {
  if (str && maxLength) return str.toString().length % maxLength;
  return null;
};

const HashTable = function() {
  this.storage = [];
  this.size = 10;
};

HashTable.prototype.set = function(key, val) {
  if (!key || !val) throw new Error('Please call set with key and val as arguments.');

  const index = simpleHash(key, this.size);

  if (!this.storage[index]) this.storage[index] = new LinkedList();

  const bucket = this.storage[index];

  let hasKey = false;
  let node = bucket.head;
  
  while (node) {
    if (node.val[0] === key) {
      node.val[1] = val;

      hasKey = true;
    }

    node = node.next;
  }
  
  if (!hasKey) bucket.add([key, val]);
};

HashTable.prototype.get = function(key) {
  if (!key) throw new Error('Need key as argument.');

  const index = simpleHash(key, this.size);

  if (!this.storage[index]) throw new Error('Key does not exist.');

  const bucket = this.storage[index];
  
  let node = bucket.head;

  while (node) {
    if (node.val[0] === key) return node.val[1];
    node = node.next;
  }

  throw new Error('Key does not exist.');
};

HashTable.prototype.remove = function(key) {
  if (!key) throw new Error('Need key as argument.');
  
  const index = simpleHash(key, this.size);

  if (!this.storage[index]) throw new Error('Key does not exist.');

  const bucket = this.storage[index];

  let node = bucket.head;

  let savedValue = null;
  let prev = null;

  while (node) {
    if (node.val[0] === key) {
      savedValue = node.val[1];

      // remove node
      // if it's only item in ll
      if (node === bucket.head && node === bucket.tail) {
        bucket.head = bucket.tail = null;
      } else if (node === bucket.head) { // if it's head
        bucket.head = bucket.head.next;
      } else { // if it's neither of above
        // if it's tail
        if (node === bucket.tail) bucket.tail = prev;
        prev.next = node.next;
      }
      
      break;
    }

    prev = node;
    node = node.next;
  }

  return savedValue;
};

const hashTable = new HashTable();
hashTable.set(1, 4);
hashTable.set(2, 3);
console.log(hashTable.get(1));
hashTable.set(1, 5);
hashTable.set(3, 7);
console.log(hashTable.get(1));
console.log(hashTable.get(2));
console.log(hashTable.remove(3));
console.log(hashTable.remove(8));
