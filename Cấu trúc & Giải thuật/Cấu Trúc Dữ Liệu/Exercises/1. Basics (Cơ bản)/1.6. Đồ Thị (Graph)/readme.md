Dưới đây là một số bài tập cơ bản liên quan đến đồ thị:

# 1. **Cài đặt đồ thị vô hướng đơn giản:**

Để cài đặt một đồ thị vô hướng đơn giản, chúng ta cần lưu trữ các đỉnh và các cạnh. Đối với một đồ thị vô hướng, chúng ta có thể sử dụng danh sách kề (adjacency list) hoặc ma trận kề (adjacency matrix) để lưu trữ cấu trúc này.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Thêm các đỉnh và các cạnh vào đồ thị.
- Các thao tác như thêm đỉnh, thêm cạnh.

**Output:**

- Đồ thị vô hướng đã được tạo và cập nhật.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Đồ thị vô hướng được sử dụng để mô hình hóa các mối quan hệ không hướng giữa các phần tử.

### Cách giải và mã nguồn (JavaScript - Sử dụng Danh sách Kề):

Dưới đây là cách cài đặt một đồ thị vô hướng sử dụng danh sách kề:

```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return false;

    if (!this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1].push(vertex2);
    }

    if (!this.adjacencyList[vertex2].includes(vertex1)) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return false;

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return false;

    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
console.log(graph.adjacencyList);
```

Trong mã nguồn trên, một đồ thị vô hướng được tạo bằng cách sử dụng một danh sách kề. Các phương thức như `addVertex`, `addEdge`, `removeEdge`, và `removeVertex` được thêm vào để thực hiện các thao tác cơ bản trên đồ thị.

---

# 2. **Duyệt đồ thị:**

## a. **Duyệt theo chiều rộng (BFS - Breadth-First Search):**

Duyệt theo chiều rộng (BFS) là một thuật toán duyệt đồ thị để tìm kiếm hoặc truy cập tất cả các đỉnh của đồ thị, bắt đầu từ một đỉnh xuất phát và duyệt theo các đỉnh kề theo chiều rộng.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Đồ thị và đỉnh xuất phát.
- Cấu trúc dữ liệu biểu diễn đồ thị.

**Output:**

- Các đỉnh được duyệt theo chiều rộng từ đỉnh xuất phát.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

BFS được sử dụng để duyệt các đỉnh của đồ thị một cách hệ thống, phù hợp để tìm kiếm ngắn nhất trong đồ thị vô hướng hoặc có trọng số đồng nhất.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách cài đặt thuật toán BFS trên một đồ thị vô hướng sử dụng danh sách kề:

```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return false;

    if (!this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1].push(vertex2);
    }

    if (!this.adjacencyList[vertex2].includes(vertex1)) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  breadthFirstSearch(start) {
    const visited = {};
    const result = [];
    const queue = [start];
    let currentVertex;

    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.breadthFirstSearch("A")); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
```

Trong mã nguồn trên, hàm `breadthFirstSearch` thực hiện việc duyệt đồ thị theo chiều rộng từ một đỉnh xuất phát, sử dụng hàng đợi (queue) để duyệt lần lượt các đỉnh kề theo chiều rộng.

---

## b. **Duyệt theo chiều sâu (DFS - Depth-First Search):**

Duyệt theo chiều sâu (DFS) là một thuật toán duyệt đồ thị để tìm kiếm hoặc truy cập tất cả các đỉnh của đồ thị, bắt đầu từ một đỉnh xuất phát và tiếp tục "sâu" vào đồ thị trước khi quay lại duyệt các đỉnh khác.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Đồ thị và đỉnh xuất phát.
- Cấu trúc dữ liệu biểu diễn đồ thị.

**Output:**

- Các đỉnh được duyệt theo chiều sâu từ đỉnh xuất phát.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

DFS được sử dụng để duyệt các đỉnh của đồ thị theo một cách "sâu", thích hợp để tìm kiếm trong đồ thị, kiểm tra đường đi, hay tìm kiếm một phần tử cụ thể.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách cài đặt thuật toán DFS trên một đồ thị vô hướng sử dụng danh sách kề:

```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return false;

    if (!this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1].push(vertex2);
    }

    if (!this.adjacencyList[vertex2].includes(vertex1)) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  depthFirstSearch(start) {
    const result = [];
    const visited = {};

    const dfs = (vertex) => {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      });
    };

    dfs(start);
    return result;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.depthFirstSearch("A")); // Output: [ 'A', 'B', 'D', 'E', 'C', 'F' ]
```

Trong mã nguồn trên, hàm `depthFirstSearch` thực hiện việc duyệt đồ thị theo chiều sâu từ một đỉnh xuất phát, sử dụng đệ quy để duyệt các đỉnh kề theo chiều sâu.

---

# 3. **Kiểm tra đồ thị liên thông:**

Để kiểm tra xem đồ thị có phải là đồ thị liên thông hay không, chúng ta cần thực hiện một kiểm tra từ đỉnh bất kỳ trong đồ thị để xem liệu nó có thể kết nối được với tất cả các đỉnh khác hay không.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Đồ thị và đỉnh xuất phát.
- Cấu trúc dữ liệu biểu diễn đồ thị.

**Output:**

- Giá trị true nếu đồ thị là liên thông và false nếu không.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Để kiểm tra đồ thị liên thông, chúng ta sử dụng các thuật toán duyệt đồ thị như DFS hoặc BFS từ một đỉnh xuất phát. Nếu tất cả các đỉnh có thể được duyệt từ đỉnh xuất phát, đồ thị được coi là liên thông.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách kiểm tra đồ thị liên thông sử dụng DFS trong đồ thị vô hướng:

```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return false;

    if (!this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1].push(vertex2);
    }

    if (!this.adjacencyList[vertex2].includes(vertex1)) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  depthFirstSearch(start) {
    const visited = {};
    const dfs = (vertex) => {
      visited[vertex] = true;
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      });
    };

    dfs(start);
    return (
      Object.keys(visited).length === Object.keys(this.adjacencyList).length
    );
  }

  isGraphConnected() {
    const startVertex = Object.keys(this.adjacencyList)[0];
    return this.depthFirstSearch(startVertex);
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");

console.log(graph.isGraphConnected()); // Output: true
```

Trong mã nguồn trên, hàm `isGraphConnected` sử dụng DFS để kiểm tra xem đồ thị có phải là đồ thị liên thông hay không. Nó bắt đầu từ một đỉnh bất kỳ trong đồ thị và kiểm tra xem có thể duyệt tới tất cả các đỉnh khác không. Nếu đồ thị là liên thông, hàm sẽ trả về true, ngược lại trả về false.

---

# 4. **Tính độ lệch (degree) của một đỉnh:**

Để tính độ lệch của một đỉnh trong đồ thị (degree của một đỉnh), chúng ta cần lặp qua danh sách kề của đỉnh đó và đếm số lượng đỉnh kề với nó.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Đồ thị.
- Đỉnh cần tính độ lệch.

**Output:**

- Độ lệch của đỉnh được cung cấp.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Chúng ta sử dụng cấu trúc đồ thị được biểu diễn bằng danh sách kề hoặc ma trận kề để tính độ lệch của một đỉnh. Danh sách kề chứa các đỉnh kề với mỗi đỉnh trong đồ thị.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách tính độ lệch của một đỉnh trong đồ thị vô hướng sử dụng danh sách kề:

```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return false;

    if (!this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1].push(vertex2);
    }

    if (!this.adjacencyList[vertex2].includes(vertex1)) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  degreeOfVertex(vertex) {
    if (!this.adjacencyList[vertex]) return null;
    return this.adjacencyList[vertex].length;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

console.log(graph.degreeOfVertex("A")); // Output: 2
```

Trong mã nguồn trên, hàm `degreeOfVertex` tính độ lệch của một đỉnh bằng cách đếm số lượng đỉnh kề với đỉnh được cung cấp. Nó trả về số lượng cạnh kết nối với đỉnh đó.

---

# 5. **Tìm đường đi giữa hai đỉnh:**

Việc tìm đường đi ngắn nhất giữa hai đỉnh trong đồ thị thường được giải quyết bằng thuật toán Dijkstra hoặc thuật toán Bellman-Ford. Dijkstra thường được sử dụng trong trường hợp đồ thị không có trọng số âm, trong khi Bellman-Ford có thể xử lý cả trọng số âm, nhưng hiệu suất có thể không tốt bằng Dijkstra cho đồ thị không có trọng số âm.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Đồ thị.
- Đỉnh xuất phát và đỉnh đích.
- Các trọng số (nếu có).

**Output:**

- Đường đi ngắn nhất từ đỉnh xuất phát đến đỉnh đích.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Sử dụng cấu trúc đồ thị để biểu diễn các đỉnh và cạnh, cùng với trọng số nếu đồ thị có trọng số.

### Cách giải và mã nguồn (JavaScript - Dijkstra's Algorithm):

Dưới đây là cách thực hiện thuật toán Dijkstra trong JavaScript để tìm đường đi ngắn nhất giữa hai đỉnh trong đồ thị:

```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijkstra(start, end) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === end) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;

          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstra("A", "E")); // Output: ["A", "C", "D", "E"]
```

Trong mã nguồn trên, chúng ta đã triển khai thuật toán Dijkstra để tìm đường đi ngắn nhất giữa hai đỉnh trong đồ thị. Mã này sử dụng một hàng đợi ưu tiên để lưu trữ các đỉnh và trọng số của chúng. Mỗi lần lặp, nó chọn đỉnh có trọng số nhỏ nhất từ hàng đợi ưu tiên và cập nhật các đỉnh kề của nó. Khi đến được đỉnh đích, thuật toán sẽ truy ngược lại để xác định đường đi ngắn nhất từ đỉnh xuất phát đến đỉnh đích.

---

# 6. **Kiểm tra chu trình trong đồ thị:**

Để kiểm tra xem một đồ thị có chứa chu trình hay không, chúng ta có thể sử dụng thuật toán DFS (Duyệt theo chiều sâu). Mục tiêu là kiểm tra xem trong quá trình duyệt DFS, khi đến một đỉnh mà đã được duyệt trước đó và không phải là đỉnh cha của đỉnh hiện tại, thì đồ thị chứa chu trình.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Đồ thị.

**Output:**

- True nếu đồ thị chứa chu trình, ngược lại trả về False.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Sử dụng cấu trúc đồ thị để biểu diễn các đỉnh và cạnh.

### Cách giải và mã nguồn (JavaScript - Detect Cycle in Graph using DFS):

Dưới đây là cách thực hiện thuật toán để kiểm tra xem đồ thị có chứa chu trình hay không bằng DFS trong JavaScript:

```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  hasCycle() {
    const visited = {};
    for (let vertex in this.adjacencyList) {
      if (!visited[vertex]) {
        if (this.detectCycle(vertex, visited, null)) {
          return true;
        }
      }
    }
    return false;
  }

  detectCycle(vertex, visited, parent) {
    visited[vertex] = true;
    for (let neighbor of this.adjacencyList[vertex]) {
      if (!visited[neighbor]) {
        if (this.detectCycle(neighbor, visited, vertex)) {
          return true;
        }
      } else if (neighbor !== parent) {
        return true;
      }
    }
    return false;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "A"); // Chu trình được tạo bởi cạnh này
graph.addEdge("C", "E");

console.log(graph.hasCycle()); // Output: true
```

Trong mã nguồn trên, chúng ta sử dụng thuật toán DFS để duyệt đồ thị. Khi một đỉnh được duyệt, nếu chúng ta gặp một đỉnh kề đã được duyệt trước đó và không phải là đỉnh cha của đỉnh hiện tại, đồ thị chứa chu trình và hàm sẽ trả về true. Nếu không tìm thấy chu trình nào, hàm sẽ trả về false.

---

# 7. **Tìm thành phần liên thông:**

Để tìm và liệt kê các thành phần liên thông trong đồ thị, chúng ta có thể sử dụng DFS (Duyệt theo chiều sâu) hoặc BFS (Duyệt theo chiều rộng) để duyệt từng đỉnh trong đồ thị và xác định các đỉnh thuộc cùng một thành phần liên thông.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Đồ thị.

**Output:**

- Các thành phần liên thông trong đồ thị.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Sử dụng cấu trúc đồ thị để biểu diễn các đỉnh và cạnh.

### Cách giải và mã nguồn (JavaScript - Tìm thành phần liên thông bằng DFS):

Dưới đây là cách thực hiện thuật toán để tìm và liệt kê các thành phần liên thông trong đồ thị bằng DFS trong JavaScript:

```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  findConnectedComponents() {
    const visited = {};
    const connectedComponents = [];

    for (let vertex in this.adjacencyList) {
      if (!visited[vertex]) {
        const currentComponent = [];
        this.dfs(vertex, visited, currentComponent);
        connectedComponents.push(currentComponent);
      }
    }

    return connectedComponents;
  }

  dfs(vertex, visited, currentComponent) {
    visited[vertex] = true;
    currentComponent.push(vertex);

    for (let neighbor of this.adjacencyList[vertex]) {
      if (!visited[neighbor]) {
        this.dfs(neighbor, visited, currentComponent);
      }
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("D", "E");

console.log(graph.findConnectedComponents());
```

Trong mã nguồn trên, chúng ta sử dụng thuật toán DFS để duyệt đồ thị. Mỗi khi bắt đầu từ một đỉnh chưa được duyệt trước đó, chúng ta thực hiện DFS để xác định các đỉnh thuộc cùng một thành phần liên thông và lưu chúng vào một mảng đại diện cho các thành phần liên thông. Kết quả cuối cùng trả về danh sách các thành phần liên thông trong đồ thị.

---

# 8. **Tìm chu trình Euler trong đồ thị:**

Tìm chu trình Euler trong đồ thị là tìm một chu trình qua tất cả các cạnh trong đồ thị sao cho mỗi cạnh chỉ được đi qua một lần.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Đồ thị có thể được biểu diễn bằng danh sách cạnh hoặc ma trận kề.

**Output:**

- Chu trình Euler (nếu tồn tại).

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Sử dụng cấu trúc đồ thị để biểu diễn các đỉnh và cạnh.

### Cách giải và mã nguồn (JavaScript - Tìm chu trình Euler):

Dưới đây là cách thực hiện thuật toán để tìm chu trình Euler trong đồ thị bằng JavaScript:

```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  eulerCycle() {
    const cycle = [];

    const startVertex = this.findEulerStart();
    if (!startVertex) return cycle;

    this.dfsEuler(startVertex, cycle);

    return cycle.length === Object.keys(this.adjacencyList).length ? cycle : [];
  }

  findEulerStart() {
    for (let vertex in this.adjacencyList) {
      if (this.adjacencyList[vertex].length % 2 !== 0) {
        return vertex;
      }
    }
    return Object.keys(this.adjacencyList)[0];
  }

  dfsEuler(vertex, cycle) {
    while (this.adjacencyList[vertex].length) {
      const nextVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, nextVertex);
      this.dfsEuler(nextVertex, cycle);
    }
    cycle.unshift(vertex);
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "A");

console.log(graph.eulerCycle());
```

Mã nguồn trên sử dụng thuật toán Hierholzer để tìm chu trình Euler trong đồ thị. Thuật toán này bắt đầu từ một đỉnh, sau đó đi qua từng cạnh một và loại bỏ chúng cho đến khi không còn cạnh nào có thể đi được nữa. Kết quả cuối cùng sẽ là chu trình Euler của đồ thị.

---

# 9. **Tìm cây bao phủ nhỏ nhất (Minimum Spanning Tree - MST):**

Tìm cây bao phủ nhỏ nhất (Minimum Spanning Tree - MST) trong một đồ thị có trọng số là việc tìm một tập hợp con các cạnh sao cho nó tạo thành một cây và tổng trọng số của các cạnh đó là nhỏ nhất.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Đồ thị có trọng số, có thể được biểu diễn bằng ma trận trọng số hoặc danh sách kề.

**Output:**

- Cây bao phủ nhỏ nhất hoặc danh sách các cạnh trong cây đó.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Sử dụng cấu trúc đồ thị và thuật toán tìm kiếm cây bao phủ nhỏ nhất như Prim's hoặc Kruskal.

### Cách giải và mã nguồn (JavaScript - Tìm cây bao phủ nhỏ nhất (Prim's Algorithm)):

Dưới đây là cách thực hiện thuật toán Prim's để tìm cây bao phủ nhỏ nhất trong một đồ thị có trọng số bằng JavaScript:

```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  prim(start) {
    const visited = {};
    const queue = new PriorityQueue();
    const minimumSpanningTree = [];
    let totalWeight = 0;

    for (let vertex in this.adjacencyList) {
      visited[vertex] = false;
    }

    queue.enqueue(start, 0);

    while (!queue.isEmpty()) {
      const { data: currentVertex, priority: weight } = queue.dequeue();

      if (!visited[currentVertex]) {
        visited[currentVertex] = true;
        totalWeight += weight;

        minimumSpanningTree.push(currentVertex);

        this.adjacencyList[currentVertex].forEach((neighbor) => {
          if (!visited[neighbor.node]) {
            queue.enqueue(neighbor.node, neighbor.weight);
          }
        });
      }
    }

    return { minimumSpanningTree, totalWeight };
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(vertex, priority) {
    this.values.push({ data: vertex, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }

  isEmpty() {
    return this.values.length === 0;
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B", 2);
graph.addEdge("A", "C", 3);
graph.addEdge("B", "D", 5);
graph.addEdge("C", "D", 1);
graph.addEdge("C", "E", 7);
graph.addEdge("D", "E", 4);

console.log(graph.prim("A"));
```

Mã nguồn trên triển khai thuật toán Prim's để tìm cây bao phủ nhỏ nhất trong đồ thị có trọng số. Nó sử dụng hàng đợi ưu tiên để duyệt các đỉnh và xây dựng cây bao phủ nhỏ nhất dựa trên trọng số của các cạnh.

---

# 10. **Tìm đường đi ngắn nhất (Shortest Path):**

Thuật toán tìm đường đi ngắn nhất từ một đỉnh đến tất cả các đỉnh còn lại trong đồ thị thường được giải quyết bằng thuật toán Dijkstra hoặc thuật toán Bellman-Ford.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Đồ thị có trọng số dương, có thể được biểu diễn bằng ma trận trọng số hoặc danh sách kề.
- Đỉnh xuất phát.

**Output:**

- Một mảng chứa độ dài ngắn nhất từ đỉnh xuất phát đến tất cả các đỉnh còn lại hoặc đường đi ngắn nhất từ đỉnh xuất phát đến một đỉnh cụ thể.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Sử dụng cấu trúc đồ thị và một trong hai thuật toán đã đề cập: Dijkstra hoặc Bellman-Ford để tìm đường đi ngắn nhất.

### Cách giải và mã nguồn (JavaScript - Dijkstra Algorithm):

Dưới đây là cách thực hiện thuật toán Dijkstra để tìm đường đi ngắn nhất từ một đỉnh xuất phát đến tất cả các đỉnh còn lại trong đồ thị có trọng số bằng JavaScript:

```javascript
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(vertex, priority) {
    this.values.push({ vertex, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }

  isEmpty() {
    return this.values.length === 0;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  shortestPath(start, finish) {
    const distances = {};
    const previous = {};
    const priorityQueue = new PriorityQueue();
    const path = [];
    let smallest;

    // Initialization
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        priorityQueue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        priorityQueue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // Main algorithm
    while (!priorityQueue.isEmpty()) {
      smallest = priorityQueue.dequeue().vertex;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;

          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            priorityQueue.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

const graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.shortestPath("A", "E")); // Output: [ 'A', 'C', 'D', 'E' ]
```

Mã nguồn trên triển khai thuật toán Dijkstra để tìm đường đi ngắn nhất từ một đỉnh đến tất cả các đỉnh còn lại trong đồ thị có trọng số.

---

Những bài tập này sẽ giúp bạn làm quen với cách thức thao tác và xử lý các vấn đề cơ bản trong đồ thị, cũng như hiểu rõ hơn về các thuật toán và chiến lược trong việc làm việc với đồ thị.
