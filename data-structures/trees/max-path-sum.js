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

const findMaxPathSum = (tree) => {
  if (!tree) return 0;
  
  const left = findMaxPathSum(tree.left);
  const right = findMaxPathSum(tree.right);

  return tree.val + Math.max(left, right);
};

console.log(findMaxPathSum(tree1));
console.log(findMaxPathSum(tree2));
