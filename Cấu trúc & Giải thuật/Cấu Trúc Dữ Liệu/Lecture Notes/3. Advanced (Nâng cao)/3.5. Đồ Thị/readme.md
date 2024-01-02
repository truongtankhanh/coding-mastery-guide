## Thuật Toán Tìm Chu Trình Eulerian/Hamiltonian

- Thuật toán tìm chu trình Eulerian và Hamiltonian là hai thuật toán quan trọng trong đồ thị.

### Chu Trình Eulerian và Hamiltonian:

- **Chu trình Eulerian:** Là một chu trình trong đồ thị mà đi qua mọi cạnh đúng một lần.
- **Chu trình Hamiltonian:** Là một chu trình trong đồ thị mà đi qua mọi đỉnh đúng một lần.

### Ngữ Cảnh và Cách Sử Dụng:

- **Thuật Toán Tìm Chu Trình Eulerian:** Thuật toán Fleury hoặc Hierholzer thường được sử dụng để tìm chu trình Eulerian.
- **Thuật Toán Tìm Chu Trình Hamiltonian:** Các thuật toán như thuật toán quay lui hoặc giải thuật Brute-Force thường được sử dụng để tìm chu trình Hamiltonian.

### Ví Dụ và Code (Tìm Chu Trình Eulerian):

Dưới đây là một ví dụ sử dụng thuật toán Fleury để tìm chu trình Eulerian trong một đồ thị có hướng:

```python
from collections import defaultdict

class Graph:
    def __init__(self):
        self.graph = defaultdict(list)

    def add_edge(self, u, v):
        self.graph[u].append(v)
        self.graph[v].append(u)

    def remove_edge(self, u, v):
        self.graph[u].remove(v)
        self.graph[v].remove(u)

    def dfs(self, start, visited):
        visited[start] = True
        for neighbor in self.graph[start]:
            if not visited[neighbor]:
                self.dfs(neighbor, visited)

    def is_connected(self):
        visited = {node: False for node in self.graph}
        for node in self.graph:
            if len(self.graph[node]) > 0:
                self.dfs(node, visited)
                break
        for val in visited.values():
            if not val:
                return False
        return True

    def eulerian_path(self):
        if not self.is_connected():
            return "Không có chu trình Eulerian"

        odd_count = 0
        start_node = list(self.graph.keys())[0]
        for node in self.graph:
            if len(self.graph[node]) % 2 != 0:
                odd_count += 1
                start_node = node

        if odd_count > 2:
            return "Không có chu trình Eulerian"

        current = start_node
        path = []
        while self.graph[current]:
            path.append(current)
            neighbor = self.graph[current][0]
            self.remove_edge(current, neighbor)
            current = neighbor

        path.append(current)
        return path

# Sử dụng thuật toán Fleury để tìm chu trình Eulerian
g = Graph()
g.add_edge(1, 2)
g.add_edge(1, 3)
g.add_edge(2, 3)
g.add_edge(2, 4)
g.add_edge(3, 4)
print(g.eulerian_path())  # Kết quả sẽ là một chu trình Eulerian
```

Việc tìm chu trình Hamiltonian thường phức tạp hơn và thường được thực hiện thông qua các thuật toán quay lui hoặc giải thuật tìm kiếm trong không gian trạng thái. Trong thực tế, việc áp dụng chu trình Eulerian và Hamiltonian thường xuất hiện trong việc phân tích dữ liệu mạng hoặc lập kế hoạch di chuyển trong các hệ thống vận chuyển.

---

## Thuật Toán Thuật Ngữ (Graph Isomorphism)

- Thuật ngữ "Graph Isomorphism" đề cập đến khái niệm kiểm tra xem hai đồ thị có cùng cấu trúc hay không. Trong lý thuyết đồ thị, hai đồ thị được coi là cùng cấu trúc nếu chúng có cùng cấu trúc mạng lưới và có thể biểu diễn các đỉnh và cạnh của mình một cách tương đương.

### Ngữ Cảnh và Cách Sử Dụng:

- **Thuật Toán Kiểm Tra Đồ Thị Isomorphic:** Thuật toán thường sử dụng phép duyệt đồ thị, so sánh cấu trúc đồ thị, hoặc sử dụng các thuật toán như thuật toán Weisfeiler-Lehman để kiểm tra tính đồng đẳng giữa các đồ thị.
- **Áp Dụng trong Lý Thuyết và Thực Tiễn:** Graph Isomorphism thường được áp dụng trong nhiều lĩnh vực như mô hình hóa mạng lưới, hóa học, mã hóa thông tin, và lý thuyết đồ thị.

### Ví Dụ và Code (Kiểm Tra Đồ Thị Isomorphic):

Dưới đây là một ví dụ sử dụng thuật toán Weisfeiler-Lehman để kiểm tra tính đồng đẳng giữa hai đồ thị:

```python
from collections import defaultdict

def color_graph(graph):
    colors = {}
    current_color = 0
    for node in graph:
        neighbors = tuple(sorted(graph[node]))
        if neighbors not in colors:
            colors[neighbors] = current_color
            current_color += 1
    return [colors[tuple(sorted(graph[node]))] for node in graph]

def is_isomorphic(graph1, graph2):
    colors1 = color_graph(graph1)
    colors2 = color_graph(graph2)
    return sorted(colors1) == sorted(colors2)

# Sử dụng thuật toán kiểm tra đồ thị Isomorphic
g1 = {1: [2, 3], 2: [1, 3], 3: [1, 2]}
g2 = {4: [5, 6], 5: [4, 6], 6: [4, 5]}
g3 = {1: [2, 3], 2: [1, 3], 3: [1, 2], 4: [5, 6], 5: [4, 6], 6: [4, 5]}

print(is_isomorphic(g1, g2))  # False - Không cùng cấu trúc
print(is_isomorphic(g1, g3))  # True - Cùng cấu trúc
```

Việc kiểm tra đồ thị isomorphic thường phức tạp và yêu cầu các thuật toán phức tạp. Trong thực tế, nó được sử dụng để phân tích và so sánh các mô hình mạng lưới trong nhiều lĩnh vực, từ khoa học máy tính đến sinh học và hóa học.

---
