Dưới đây là một số bài tập cơ bản liên quan đến cây nhị phân:

---

# 1. **Tạo cây nhị phân đơn giản:**

Tạo cây nhị phân đơn giản đòi hỏi một cấu trúc dữ liệu để đại diện cho mỗi nút trong cây và các thao tác để thêm nút vào cây. Cây nhị phân bao gồm các nút có một nút gốc và mỗi nút có tối đa hai nút con (nút trái và nút phải).

### Yêu cầu bài toán (Input/Output):

**Input:**

- Các giá trị để thêm vào cây nhị phân.

**Output:**

- Cây nhị phân với các nút được thêm vào.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Cây nhị phân thường được sử dụng để lưu trữ và tìm kiếm dữ liệu một cách hiệu quả. Chúng có thể được sử dụng để triển khai các thuật toán tìm kiếm như tìm kiếm nhị phân, duyệt cây và nhiều thuật toán khác.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách triển khai cây nhị phân đơn giản bằng JavaScript:

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
}

// Test case
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(7);
console.log(tree);
```

Trong mã trên, `Node` được sử dụng để tạo các nút trong cây nhị phân với giá trị và hai con trỏ `left` và `right` để chỉ đến nút con trái và nút con phải. Lớp `BinarySearchTree` triển khai việc thêm các nút mới vào cây thông qua phương thức `insert()`. Đây chỉ là một cách đơn giản để tạo cây nhị phân và thêm các nút vào cây.

---

# 2. **Duyệt cây nhị phân:**

## a. **Duyệt tiền thứ tự (Pre-order traversal):**

Duyệt tiền thứ tự trong cây nhị phân là một trong ba cách duyệt cây (tiền thứ tự, trung thứ tự và hậu thứ tự). Trong duyệt tiền thứ tự, trước khi duyệt cây con trái và cây con phải, chúng ta trước tiên duyệt nút gốc. Yêu cầu của bài toán là viết một hàm để thực hiện việc này.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Cây nhị phân.

**Output:**

- Một mảng hoặc danh sách chứa giá trị của các nút theo thứ tự tiền thứ tự.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Duyệt tiền thứ tự là một trong những phương pháp để truy cập tất cả các nút trong cây. Nó có thể được sử dụng để sao chép hoặc in ra tất cả các giá trị trong cây.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách triển khai duyệt tiền thứ tự trong cây nhị phân bằng JavaScript:

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  preOrder() {
    const result = [];
    function traverse(node) {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }
}

// Test case
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.preOrder()); // Output: [10, 6, 3, 8, 15, 20]
```

Trong mã trên, `preOrder()` duyệt cây theo thứ tự tiền thứ tự bằng cách sử dụng đệ quy. Nó bắt đầu từ nút gốc, sau đó duyệt sang nút con trái và cuối cùng là nút con phải. Kết quả được lưu trữ trong một mảng và trả về để hiển thị giá trị của các nút theo thứ tự tiền thứ tự.

---

## b. **Duyệt trung thứ tự (In-order traversal):**

Duyệt trung thứ tự trong cây nhị phân là một trong ba cách duyệt cây (tiền thứ tự, trung thứ tự và hậu thứ tự). Trong duyệt trung thứ tự, chúng ta duyệt cây con trái trước khi duyệt nút gốc và sau đó duyệt cây con phải. Yêu cầu của bài toán là viết một hàm để thực hiện việc này.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Cây nhị phân.

**Output:**

- Một mảng hoặc danh sách chứa giá trị của các nút theo thứ tự trung thứ tự.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Duyệt trung thứ tự cung cấp một danh sách các giá trị được sắp xếp theo thứ tự tăng dần nếu giá trị của các nút là các số, hoặc theo thứ tự chúng được thêm vào cây.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách triển khai duyệt trung thứ tự trong cây nhị phân bằng JavaScript:

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  inOrder() {
    const result = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }
}

// Test case
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.inOrder()); // Output: [3, 6, 8, 10, 15, 20]
```

Trong mã trên, `inOrder()` duyệt cây theo thứ tự trung thứ tự bằng cách sử dụng đệ quy. Nó bắt đầu từ nút gốc, sau đó duyệt sang nút con trái, tiếp theo là nút gốc và cuối cùng là nút con phải. Kết quả được lưu trữ trong một mảng và trả về để hiển thị giá trị của các nút theo thứ tự trung thứ tự.

---

## c. **Duyệt hậu thứ tự (Post-order traversal):**

Duyệt hậu thứ tự trong cây nhị phân là một trong ba cách duyệt cây (tiền thứ tự, trung thứ tự và hậu thứ tự). Trong duyệt hậu thứ tự, chúng ta duyệt cây con trái trước, sau đó duyệt cây con phải và cuối cùng là duyệt nút gốc. Yêu cầu của bài toán là viết một hàm để thực hiện việc này.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Cây nhị phân.

**Output:**

- Một mảng hoặc danh sách chứa giá trị của các nút theo thứ tự hậu thứ tự.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Duyệt hậu thứ tự thường được sử dụng để giải phóng bộ nhớ từ cây, vì khi duyệt hậu thứ tự, chúng ta trước tiên giải phóng các nút lá và sau đó giải phóng nút gốc.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách triển khai duyệt hậu thứ tự trong cây nhị phân bằng JavaScript:

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  postOrder() {
    const result = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    }
    traverse(this.root);
    return result;
  }
}

// Test case
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.postOrder()); // Output: [3, 8, 6, 20, 15, 10]
```

Trong mã trên, `postOrder()` duyệt cây theo thứ tự hậu thứ tự bằng cách sử dụng đệ quy. Nó bắt đầu từ nút gốc, sau đó duyệt sang nút con trái, tiếp theo là nút con phải và cuối cùng là nút gốc. Kết quả được lưu trữ trong một mảng và trả về để hiển thị giá trị của các nút theo thứ tự hậu thứ tự.

---

# 3. **Tính chiều cao của cây:**

Yêu cầu bài toán yêu cầu viết một hàm để tính chiều cao của cây nhị phân. Chiều cao của cây là độ sâu tối đa từ nút gốc đến lá xa nhất.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Cây nhị phân.

**Output:**

- Chiều cao của cây (số nguyên).

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Chiều cao của cây thường được sử dụng để đánh giá độ phức tạp của cây và cũng cung cấp thông tin quan trọng về cấu trúc của nó.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách tính chiều cao của cây nhị phân bằng JavaScript:

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  height() {
    function calculateHeight(node) {
      if (node === null) {
        return -1;
      }
      const leftHeight = calculateHeight(node.left);
      const rightHeight = calculateHeight(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
    return calculateHeight(this.root);
  }
}

// Test case
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.height()); // Output: 2
```

Trong mã trên, phương thức `height()` duyệt cây và tính chiều cao của nó bằng cách sử dụng đệ quy. Chiều cao của một nút bằng chiều cao lớn nhất của nút con trái và nút con phải cộng thêm một. Chiều cao của cây là chiều cao của nút gốc.

---

# 4. **Tìm giá trị lớn nhất và nhỏ nhất trong cây:**

Yêu cầu bài toán là viết một hàm để tìm giá trị lớn nhất và nhỏ nhất trong cây nhị phân.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Cây nhị phân.

**Output:**

- Giá trị lớn nhất và nhỏ nhất trong cây.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Tìm giá trị lớn nhất và nhỏ nhất trong cây nhị phân giúp xác định giá trị cực đại và cực tiểu của tập dữ liệu được lưu trữ trong cây.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách tìm giá trị lớn nhất và nhỏ nhất trong cây nhị phân bằng JavaScript:

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  findMin() {
    if (!this.root) return null;
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }

  findMax() {
    if (!this.root) return null;
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.value;
  }
}

// Test case
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.findMin()); // Output: 3
console.log(tree.findMax()); // Output: 20
```

Phương thức `findMin()` và `findMax()` tìm giá trị nhỏ nhất và lớn nhất trong cây bằng cách duyệt từ gốc theo hướng trái để tìm giá trị nhỏ nhất và theo hướng phải để tìm giá trị lớn nhất.

---

# 5. **Tìm kiếm một giá trị trong cây:**

Yêu cầu bài toán là viết một hàm để tìm kiếm một giá trị cụ thể trong cây nhị phân.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Cây nhị phân.
- Giá trị cần tìm kiếm.

**Output:**

- Giá trị cần tìm kiếm nếu nó tồn tại trong cây, hoặc thông báo không tìm thấy nếu giá trị không có trong cây.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Tìm kiếm giá trị trong cây nhị phân là một trong những thao tác cơ bản và quan trọng, giúp kiểm tra xem một giá trị cụ thể có tồn tại trong cây hay không.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách tìm kiếm một giá trị cụ thể trong cây nhị phân bằng JavaScript:

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  search(value) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

// Test case
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.search(8)); // Output: true
console.log(tree.search(11)); // Output: false
```

Phương thức `search()` tìm kiếm một giá trị cụ thể trong cây bằng cách so sánh giá trị cần tìm với giá trị của các nút trong cây. Nó duyệt từ nút gốc và so sánh giá trị cần tìm với giá trị của nút hiện tại, sau đó di chuyển sang nút con trái hoặc phải tương ứng. Nếu tìm thấy giá trị, nó trả về true; nếu không, nó trả về false.

---

# 6. **Kiểm tra xem cây có phải là cây nhị phân tìm kiếm (BST) hay không:**

Bài toán yêu cầu viết một hàm để kiểm tra xem một cây có phải là cây nhị phân tìm kiếm (BST) hay không.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Cây nhị phân.

**Output:**

- Trả về true nếu cây là cây nhị phân tìm kiếm, ngược lại trả về false.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Cây nhị phân tìm kiếm (BST) là một cấu trúc dữ liệu trong đó mỗi nút có giá trị và đáp ứng đặc tính rằng giá trị của mọi nút con bên trái nhỏ hơn giá trị của nút hiện tại và giá trị của mọi nút con bên phải lớn hơn giá trị của nút hiện tại.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách kiểm tra xem cây có phải là cây nhị phân tìm kiếm (BST) hay không bằng JavaScript:

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  isBST() {
    function isBSTUtil(node, min, max) {
      if (node === null) return true;
      if (node.value < min || node.value > max) return false;
      return (
        isBSTUtil(node.left, min, node.value - 1) &&
        isBSTUtil(node.right, node.value + 1, max)
      );
    }
    return isBSTUtil(
      this.root,
      Number.MIN_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER
    );
  }
}

// Test case
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.isBST()); // Output: true
```

Phương thức `isBST()` sử dụng một hàm trợ giúp `isBSTUtil()` để kiểm tra điều kiện BST. Nó kiểm tra từng nút và xác minh rằng giá trị của nút hiện tại nằm trong khoảng quy định (min, max) và tiếp tục kiểm tra với nút con trái và nút con phải của nút hiện tại. Nếu tất cả các nút đều thỏa mãn điều kiện BST, phương thức trả về true; ngược lại, trả về false.

---

# 7. **Xóa một phần tử khỏi cây:**

Để xóa một phần tử từ cây nhị phân, chúng ta cần thực hiện một số trường hợp:

1. **Nếu nút cần xóa là nút lá:** Trong trường hợp này, chúng ta có thể đơn giản gỡ nút đó khỏi cây.

2. **Nếu nút cần xóa có một con:** Chúng ta sẽ thay thế nút cần xóa bằng con của nó.

3. **Nếu nút cần xóa có hai con:** Chúng ta cần tìm nút thay thế, thường là nút trái nhất của cây con bên phải của nút cần xóa (hoặc nút phải nhất của cây con bên trái của nút cần xóa), sau đó thay thế nút cần xóa bằng nút thay thế và xóa nút thay thế từ cây con.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Giá trị cần xóa từ cây nhị phân.

**Output:**

- Cây sau khi xóa phần tử cần xóa.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Xóa một phần tử từ cây nhị phân yêu cầu việc duyệt cây để tìm phần tử cần xóa, sau đó thực hiện việc xóa phù hợp với trường hợp cụ thể.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách xóa một phần tử từ cây nhị phân bằng JavaScript:

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  remove(value) {
    this.root = this._removeNode(this.root, value);
  }

  _removeNode(node, value) {
    if (node === null) {
      return null;
    } else if (value < node.value) {
      node.left = this._removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this._removeNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      let minRight = this._findMinNode(node.right);
      node.value = minRight.value;
      node.right = this._removeNode(node.right, minRight.value);
      return node;
    }
  }

  _findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this._findMinNode(node.left);
    }
  }
}

// Test case
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log("Before deletion:");
console.log(tree);

tree.remove(6);

console.log("After deletion:");
console.log(tree);
```

Trong đoạn mã trên, phương thức `remove()` gọi phương thức `_removeNode()` để xóa một giá trị cụ thể từ cây nhị phân. `_removeNode()` thực hiện xóa giá trị đó từ cây và cập nhật lại cấu trúc cây một cách phù hợp. Điều này bao gồm xử lý các trường hợp nút cần xóa là nút lá, nút có một con và nút có hai con.

---

# 8. **Kiểm tra cây có cân bằng hay không:**

Bài toán yêu cầu viết một hàm để kiểm tra xem một cây có cân bằng hay không. Cây cân bằng là cây mà chiều cao của hai nhánh con bên trái và bên phải của mỗi nút chỉ chênh lệch không quá 1.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Cây nhị phân.

**Output:**

- Trả về true nếu cây là cây cân bằng, ngược lại trả về false.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Kiểm tra cây có cân bằng là một vấn đề quan trọng trong cải thiện hiệu suất và tránh trường hợp xấu nhất trong các thao tác trên cây nhị phân.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách kiểm tra cây có cân bằng hay không bằng JavaScript:

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  isBalanced() {
    return this._checkBalance(this.root) !== -1;
  }

  _checkBalance(node) {
    if (node === null) {
      return 0;
    }

    const leftHeight = this._checkBalance(node.left);
    if (leftHeight === -1) {
      return -1;
    }

    const rightHeight = this._checkBalance(node.right);
    if (rightHeight === -1) {
      return -1;
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
  }
}

// Test case
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.isBalanced()); // Output: true
```

Phương thức `isBalanced()` sử dụng một hàm trợ giúp `_checkBalance()` để kiểm tra cây có cân bằng hay không. Hàm này sử dụng đệ quy để tính toán chiều cao của từng nhánh con và so sánh chênh lệch chiều cao giữa các nhánh con. Nếu chênh lệch chiều cao lớn hơn 1, cây được coi là không cân bằng và trả về -1, ngược lại trả về chiều cao của cây.

---

# 9. **In các mức của cây:**

Bài toán yêu cầu viết một hàm để in các nút trên từng mức của cây nhị phân.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Cây nhị phân.

**Output:**

- Các nút trên từng mức của cây được in ra theo từng mức.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

In các nút trên từng mức của cây nhị phân giúp chúng ta hiểu cấu trúc cây và quan sát được các phần tử trên từng mức.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách in các nút trên từng mức của cây nhị phân bằng JavaScript:

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  printLevels() {
    let result = [];
    let queue = [];
    if (this.root !== null) {
      queue.push(this.root);
    }
    while (queue.length > 0) {
      let levelSize = queue.length;
      let levelNodes = [];
      for (let i = 0; i < levelSize; i++) {
        let node = queue.shift();
        levelNodes.push(node.value);
        if (node.left !== null) {
          queue.push(node.left);
        }
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
      result.push(levelNodes);
    }
    return result;
  }
}

// Test case
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.printLevels()); // Output: [[10], [6, 15], [3, 8, 20]]
```

Trong đoạn mã trên, phương thức `printLevels()` sử dụng một hàng đợi (queue) để duyệt từng mức của cây. Chúng ta sử dụng một vòng lặp while để duyệt qua từng mức, lấy từng nút ra khỏi hàng đợi, lưu giá trị của nút vào một mảng tạm thời, và đẩy các nút con của nút hiện tại vào hàng đợi. Kết quả sẽ là một mảng chứa các mảng con, mỗi mảng con chứa giá trị của các nút trên một mức.

---

# 10. **Đảo ngược cây nhị phân:**

Bài toán yêu cầu viết một hàm để đảo ngược cây nhị phân, có nghĩa là hoán đổi các nhánh trái và phải của cây.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Cây nhị phân.

**Output:**

- Cây sau khi đảo ngược, có các nhánh trái và phải của mỗi nút được hoán đổi.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Đảo ngược cây nhị phân là một phép biến đổi cấu trúc cây, thường được sử dụng để thay đổi cấu trúc của cây hoặc thực hiện một số thao tác nâng cao trên cấu trúc dữ liệu này.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách đảo ngược cây nhị phân bằng JavaScript:

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  invertTree() {
    this._invert(this.root);
  }

  _invert(node) {
    if (node === null) {
      return null;
    }
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
    this._invert(node.left);
    this._invert(node.right);
  }
}

// Test case
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log("Before inverting:");
console.log(tree);

tree.invertTree();

console.log("After inverting:");
console.log(tree);
```

Trong đoạn mã trên, phương thức `invertTree()` sử dụng một phương thức trợ giúp `_invert()` để đảo ngược cây. Đây là một thuật toán đệ quy, lặp qua từng nút trong cây và hoán đổi các nhánh trái và phải của mỗi nút. Kết quả sẽ là cây sau khi các nhánh trái và phải đã được đảo ngược.

---

Những bài tập này sẽ giúp bạn làm quen với cách thức thao tác với cây nhị phân, duyệt cây, kiểm tra và thực hiện các hoạt động cơ bản trên cây nhị phân.
