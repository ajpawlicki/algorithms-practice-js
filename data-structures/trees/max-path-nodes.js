const tree1 = {
  val: 7,
  left: {
    val: 6,
    left: {
      val: 12,
      left: null,
      right: {
        val: -9,
        left: null,
        right: null
      }
    },
    right: {
      val: 5,
      left: null,
      right: {
        val: 9,
        left: null,
        right: {
          val: 17,
          left: null,
          right: {
            val: 8,
            left: null,
            right: null
          }
        }
      }
    }
  },
  right: {
    val: 6,
    left: {
      val: 12,
      left: null,
      right: null
    },
    right: {
      val: 22,
      left: null,
      right: {
        val: -6,
        left: null,
        right: null
      }
    }
  }
};

const tree2 = {
  val: -1,
  left: {
    val: 0,
    left: null,
    right: {
      val: 4,
      left: {
        val: 1,
        left: {
          val: -1,
          left: null,
          right: {
            val: 2,
            left: null,
            right: null
          }
        },
        right: null
      },
      right: null
    }
  },
  right: {
    val: 5,
    right: null,
    left: null
  }
};

const findMaxPathNodes = (tree) => {
  if (!tree) return [];
  
  let path = [tree];
  
  const left = findMaxPathNodes(tree.left);
  const right = findMaxPathNodes(tree.right);

  const leftSum = left.reduce((acc, node) => acc + node.val, 0);
  const rightSum = right.reduce((acc, node) => acc + node.val, 0);

  if (leftSum > rightSum) {
    path = path.concat(left);
  } else {
    path = path.concat(right);
  }

  return path;
};

console.log(findMaxPathNodes(tree1));
console.log(findMaxPathNodes(tree2));
