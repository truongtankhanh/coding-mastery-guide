## Thuật Toán Duyệt Đồ Thị

- Thuật toán duyệt đồ thị là các phương pháp để truy cập mọi đỉnh và cạnh trong đồ thị một cách hệ thống. DFS (Depth-First Search) và BFS (Breadth-First Search) là hai phương pháp phổ biến được sử dụng để thực hiện việc này.

### Cấu Trúc Cơ Bản:

#### DFS (Depth-First Search):

- DFS duyệt đồ thị theo chiều sâu bằng cách đi sâu vào một nhánh và sau đó trở lại để khám phá các nhánh khác.
- Sử dụng ngăn xếp (stack) hoặc đệ quy để duyệt qua các đỉnh.

#### BFS (Breadth-First Search):

- BFS duyệt đồ thị theo chiều rộng bằng cách khám phá tất cả các đỉnh kề với đỉnh hiện tại trước khi đi sâu hơn vào các đỉnh kế tiếp.
- Sử dụng hàng đợi (queue) để duyệt qua các đỉnh.

#### Ngữ Cảnh và Cách Sử Dụng:

1. **DFS - Duyệt Đồ Thị Theo Chiều Sâu:**

   - Ngữ cảnh: Thường được sử dụng để tìm kiếm đường đi từ một đỉnh đến một đỉnh khác hoặc để tìm kiếm các thành phần liên thông trong đồ thị.
   - Ví dụ (Python - Đệ Quy):

     ```python
     def dfs(graph, start, visited=None):
         if visited is None:
             visited = set()
         visited.add(start)
         print(start)
         for neighbor in graph[start] - visited:
             dfs(graph, neighbor, visited)
         return visited

     # Sử dụng DFS
     graph = {
         'A': {'B', 'C'},
         'B': {'A', 'D', 'E'},
         'C': {'A', 'F'},
         'D': {'B'},
         'E': {'B', 'F'},
         'F': {'C', 'E'}
     }
     dfs(graph, 'A')
     ```

2. **BFS - Duyệt Đồ Thị Theo Chiều Rộng:**

   - Ngữ cảnh: Thường được sử dụng để tìm kiếm ngắn nhất giữa hai đỉnh trong đồ thị hoặc để tìm kiếm theo tầng (level-order) trong cây.
   - Ví dụ (Python - Queue):

     ```python
     from collections import deque

     def bfs(graph, start):
         visited = set()
         queue = deque([start])
         visited.add(start)
         while queue:
             vertex = queue.popleft()
             print(vertex)
             for neighbor in graph[vertex] - visited:
                 visited.add(neighbor)
                 queue.append(neighbor)

     # Sử dụng BFS
     graph = {
         'A': {'B', 'C'},
         'B': {'A', 'D', 'E'},
         'C': {'A', 'F'},
         'D': {'B'},
         'E': {'B', 'F'},
         'F': {'C', 'E'}
     }
     bfs(graph, 'A')
     ```

DFS và BFS là hai phương pháp quan trọng để duyệt đồ thị. Trong thực tế, chúng có thể được sử dụng để giải quyết nhiều vấn đề, từ tìm kiếm đường đi đến phân loại dữ liệu, dựa vào ngữ cảnh và yêu cầu cụ thể của bài toán.

---

## Thuật Toán Tìm Đường Đi Ngắn Nhất

- Thuật toán tìm đường đi ngắn nhất là các thuật toán được sử dụng để tìm đường đi có chi phí (hoặc trọng số) nhỏ nhất giữa hai đỉnh trong một đồ thị có trọng số. Các thuật toán phổ biến bao gồm Dijkstra, Bellman-Ford và A\*.

### Cấu Trúc Cơ Bản:

#### Dijkstra:

- Dijkstra sử dụng một hàng đợi ưu tiên (priority queue) để duyệt qua các đỉnh và cập nhật các đường đi ngắn nhất từ đỉnh bắt đầu đến các đỉnh khác.
- Thuật toán này hoạt động tốt trên đồ thị có trọng số không âm.

#### Bellman-Ford:

- Bellman-Ford duyệt qua tất cả các cạnh và cập nhật các đường đi ngắn nhất từ đỉnh bắt đầu đến các đỉnh khác.
- Có thể xử lý được các đồ thị có trọng số âm, nhưng đòi hỏi thêm một số điều kiện kiểm tra để tránh vòng lặp vô hạn.

#### A\* (A-Star):

- A\* là một thuật toán tìm kiếm thông minh sử dụng cả hàm heuristic để ước lượng chi phí còn lại đến đích.
- Thường được sử dụng trong tìm kiếm đường đi trên bản đồ hoặc trong các bài toán trò chơi.

#### Ngữ Cảnh và Cách Sử Dụng:

1. **Dijkstra - Tìm Đường Đi Trong Mạng Lưới:**

   - Ngữ cảnh: Thường được sử dụng trong tìm đường đi ngắn nhất trong mạng lưới đường đi hoặc hệ thống định tuyến.
   - Ví dụ (Python - Sử dụng Thư viện `networkx`):

     ```python
     import networkx as nx

     G = nx.DiGraph()
     G.add_edge('A', 'B', weight=4)
     G.add_edge('A', 'C', weight=2)
     G.add_edge('B', 'C', weight=5)
     G.add_edge('B', 'D', weight=10)
     G.add_edge('C', 'D', weight=3)

     shortest_path = nx.shortest_path(G, 'A', 'D', weight='weight')
     print(shortest_path)
     ```

2. **Bellman-Ford - Điều Khiển Tuyến:**

   - Ngữ cảnh: Thường được sử dụng trong hệ thống định tuyến và có khả năng xử lý các đồ thị với trọng số âm.
   - Ví dụ (Python):

     ```python
     class Graph:
         def __init__(self, vertices):
             self.V = vertices
             self.graph = []

         def add_edge(self, u, v, w):
             self.graph.append([u, v, w])

         def bellman_ford(self, src):
             dist = [float("Inf")] * self.V
             dist[src] = 0

             for _ in range(self.V - 1):
                 for u, v, w in self.graph:
                     if dist[u] != float("Inf") and dist[u] + w < dist[v]:
                         dist[v] = dist[u] + w

             for u, v, w in self.graph:
                 if dist[u] != float("Inf") and dist[u] + w < dist[v]:
                     print("Graph contains negative weight cycle")
                     return

             print("Shortest distances from source:", dist)

     # Sử dụng Bellman-Ford
     g = Graph(4)
     g.add_edge(0, 1, 4)
     g.add_edge(0, 2, 2)
     g.add_edge(1, 2, 5)
     g.add_edge(1, 3, 10)
     g.add_edge(2, 3, 3)

     g.bellman_ford(0)
     ```

3. **A\* - Tìm Đường Đi Trong Bản Đồ:**

   - Ngữ cảnh: Thường được sử dụng trong tìm đường đi trong bản đồ hoặc các bài toán trò chơi cần tối ưu hóa hiệu suất.
   - Ví dụ: A\* thường được sử dụng trong các trò chơi video để tìm đường đi cho nhân vật chính.

     Để triển khai A\* cụ thể có thể đòi hỏi việc xây dựng hàm heuristic và việc xử lý thông tin cụ thể về bản đồ hoặc trò chơi.

Các thuật toán này đều có thể giúp giải quyết các vấn đề liên quan đến tìm đường đi ngắn nhất trong đồ thị hoặc mạng lưới. Tùy thuộc vào bối cảnh cụ thể của bài toán, việc chọn thuật toán phù hợp sẽ giúp tối ưu hóa hiệu suất và độ chính xác của việc tìm kiếm đường đi ngắn nhất.

---

## Thuật Toán Topological Sort

- Thuật toán Topological Sort được sử dụng để sắp xếp các đỉnh trong một đồ thị có hướng sao cho mọi cạnh chỉ đi từ đỉnh có chỉ số thấp đến đỉnh có chỉ số cao, tức là không có chu trình (cycle) trong đồ thị. Đây là một cách để sắp xếp các công việc, nhiệm vụ theo thứ tự thực hiện sao cho mỗi công việc được thực hiện sau khi các công việc liên quan trước đó đã hoàn thành.

### Cấu Trúc Cơ Bản:

#### Topological Sort:

- Sử dụng DFS hoặc BFS để tìm kiếm và sắp xếp các đỉnh trong đồ thị có hướng.
- Đối với mỗi đỉnh, sau khi duyệt hết tất cả các đỉnh kề, đưa đỉnh đó vào đầu danh sách kết quả hoặc ngăn xếp.
- Sắp xếp kết quả là thứ tự thực hiện công việc một cách hợp lý.

#### Ngữ Cảnh và Cách Sử Dụng:

1. **Sắp Xếp Công Việc theo Thứ Tự Thực Hiện:**

   - Ngữ cảnh: Được sử dụng trong lập lịch, quản lý dự án, hay bất kỳ nhiệm vụ nào có thứ tự thực hiện cụ thể.
   - Ví dụ (Python - Sử dụng Thư viện `networkx`):

     ```python
     import networkx as nx
     import matplotlib.pyplot as plt

     # Tạo đồ thị có hướng
     G = nx.DiGraph()
     G.add_edges_from([
         ('A', 'B'),
         ('A', 'C'),
         ('B', 'D'),
         ('C', 'D'),
         ('E', 'F'),
         ('F', 'D')
     ])

     # Topological Sort
     topological_order = list(nx.topological_sort(G))
     print("Topological order:", topological_order)

     # Vẽ đồ thị
     pos = nx.spring_layout(G)
     nx.draw(G, pos, with_labels=True, node_color='skyblue', node_size=800, font_weight='bold', arrows=True)
     plt.show()
     ```

2. **Lập Lịch Công Việc:**
   - Ngữ cảnh: Thường được sử dụng trong lập lịch các công việc, quy trình sản xuất để đảm bảo rằng các công việc được thực hiện theo đúng thứ tự.
   - Ví dụ: Trong quản lý dự án, bạn có thể sử dụng topological sort để xác định thứ tự thực hiện các công việc theo một cách hợp lý, tránh việc bị kẹt đụng giữa các công việc.

Thuật toán Topological Sort là một công cụ quan trọng để sắp xếp đồ thị có hướng sao cho không có chu trình. Trong thực tế, việc triển khai có thể đòi hỏi xử lý ngoại lệ và điều chỉnh để phù hợp với yêu cầu cụ thể của bài toán.

---
