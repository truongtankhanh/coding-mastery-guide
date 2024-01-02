**Khái niệm:**

- Đồ thị là một cấu trúc dữ liệu bao gồm tập hợp các đỉnh (nodes) và các cạnh (edges) kết nối các đỉnh với nhau. Đỉnh đại diện cho các đối tượng và cạnh đại diện cho mối quan hệ giữa các đối tượng đó. Đồ thị không yêu cầu mỗi cặp đỉnh phải kết nối bằng cạnh và có thể có các cấu trúc phức tạp như đồ thị có hướng hay không hướng.

**Ngữ cảnh:**

- **Mô hình hóa mối quan hệ:** Đồ thị được sử dụng để mô tả mối quan hệ giữa các đối tượng trong nhiều lĩnh vực, từ mạng lưới máy tính đến mạng xã hội, đồ thị đường đi trong điều hướng GPS, v.v.
- **Cấu trúc dữ liệu linh hoạt:** Có thể có đồ thị có hướng hoặc không hướng, có thể là đồ thị có trọng số hoặc không trọng số, có thể có chu trình hoặc không có chu trình.

**Cách sử dụng và ví dụ về đồ thị:**

Dưới đây là một ví dụ về cách triển khai đồ thị không hướng (undirected graph) bằng Python sử dụng danh sách kề (adjacency list):

```python
class Graph:
    def __init__(self):
        self.graph = {}

    def add_edge(self, node1, node2):
        if node1 not in self.graph:
            self.graph[node1] = []
        if node2 not in self.graph:
            self.graph[node2] = []

        # Thêm cạnh cho đồ thị không hướng
        self.graph[node1].append(node2)
        self.graph[node2].append(node1)

    def print_graph(self):
        for node in self.graph:
            print(node, "->", " -> ".join(str(neighbor) for neighbor in self.graph[node]))

# Sử dụng đồ thị
graph = Graph()
graph.add_edge(1, 2)
graph.add_edge(1, 3)
graph.add_edge(2, 3)
graph.add_edge(2, 4)

graph.print_graph()
# Output:
# 1 -> 2 -> 3
# 2 -> 1 -> 3 -> 4
# 3 -> 1 -> 2
# 4 -> 2
```

Trong ví dụ này, chúng ta triển khai một đồ thị không hướng sử dụng danh sách kề. Phương thức `add_edge` được sử dụng để thêm cạnh giữa các đỉnh và phương thức `print_graph` để in ra các cạnh và đỉnh của đồ thị.

Đồ thị là một cấu trúc dữ liệu quan trọng trong lập trình với nhiều ứng dụng trong việc mô hình hóa và giải quyết các vấn đề có liên quan đến mối quan hệ giữa các đối tượng.
