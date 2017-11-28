const Node = function(val) {
  this.val = val;
  this.next = null;
};

const LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.add = function(...vals) {
  vals.forEach(val => {
    const node = new Node(val);
  
    if (!this.head) this.head = node;
    if (this.tail) this.tail.next = node;

    this.tail = node;
  });
};

module.exports = LinkedList;
