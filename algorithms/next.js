const Nested = function() {
  this.numberOfCalls = 0;
  this.itemCount = 0
};

Nested.prototype.next = function(array) {
  let itemReached = null;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
     itemReached = this.next(array[i]);

     if (itemReached) return itemReached;
    } else {
      if (this.itemCount === this.numberOfCalls) {
        this.itemCount = 0;
        this.numberOfCalls++;
        
        return array[i];
      } else {
        this.itemCount++;
      }
    }
  }

  return itemReached;
};

const nestedArray = [[1,2],3,[],[[4],[5]],[]];

const nested = new Nested();
console.log(nested.next(nestedArray));
console.log(nested.next(nestedArray));
console.log(nested.next(nestedArray));
console.log(nested.next(nestedArray));
console.log(nested.next(nestedArray));
console.log(nested.next(nestedArray));
