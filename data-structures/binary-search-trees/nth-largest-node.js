const tree = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 8,
      left: null,
      right: null
    }
  }
};

const nthLargestNode = (tree, n, cb = node => console.log(node)) => {
  if (!tree) return n;

  n = nthLargestNode(tree.right, n, cb);
  
  n--;

  if (n === 0) cb(tree);

  return nthLargestNode(tree.left, n, cb);
};

console.log(nthLargestNode(tree, 6));
