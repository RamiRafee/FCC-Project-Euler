class TreeNode {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.right = null;
        this.down = null;
    }
}

function countPaths(node, gridSize, memo) {
    // If we reach the bottom-right corner, it's a valid path
    if (node.x === gridSize && node.y === gridSize) {
        return 1;
    }

    // Check if the result for this node is already computed
    const key = `${node.x},${node.y}`;
    if (memo.has(key)) {
        return memo.get(key);
    }

    // Initialize paths count
    let paths = 0;

    // Move right if possible
    if (node.x < gridSize) {
        node.right = new TreeNode(node.x + 1, node.y);
        paths += countPaths(node.right, gridSize, memo);
    }

    // Move down if possible
    if (node.y < gridSize) {
        node.down = new TreeNode(node.x, node.y + 1);
        paths += countPaths(node.down, gridSize, memo);
    }

    // Store the result in memoization table
    memo.set(key, paths);

    return paths;
}

function latticePaths(gridSize) {
    let root = new TreeNode(0, 0);
    let memo = new Map(); // Memoization table
    return countPaths(root, gridSize, memo);
}

// Example Usage
let gridSize = 20; // Larger grid size for testing
console.log(latticePaths(gridSize));  // Output: 137846528820
