## Cấu Trúc Dữ Liệu K-Dimensional Tree

- Cấu trúc dữ liệu K-Dimensional Tree (còn gọi là cấu trúc dữ liệu cây K-chiều) là một cấu trúc dữ liệu được sử dụng để tổ chức và tìm kiếm dữ liệu trong không gian nhiều chiều. Nó được thiết kế đặc biệt để xử lý và truy vấn dữ liệu trong không gian K chiều, nơi mà mỗi điểm được biểu diễn bằng một tập hợp K giá trị.

### Cấu Trúc Cơ Bản:

#### Cấu Trúc Cây K-Dimensional:

- **Cây K-Dimensional:** Là một biểu diễn dữ liệu trong không gian K chiều thông qua cấu trúc cây. Mỗi nút trong cây đại diện cho một điểm trong không gian K chiều.
- **Phân Tích Khoảng Cách:** Cấu trúc cây K-Dimensional thường cung cấp khả năng tìm kiếm điểm gần nhất hoặc các điểm trong khoảng cách xác định từ một điểm cho trước trong không gian K chiều.
- **Ngữ Cảnh và Cách Sử Dụng:** Cấu trúc cây K-Dimensional được sử dụng trong các bài toán liên quan đến dữ liệu không gian, như tìm kiếm gần nhất, phân loại dữ liệu, xử lý hình ảnh và dữ liệu địa lý.

#### Ví Dụ và Code:

```python
class KDNode:
    def __init__(self, point, left=None, right=None):
        self.point = point
        self.left = left
        self.right = right

class KDTree:
    def __init__(self, points, depth=0):
        k = len(points[0])  # Số chiều
        if not points:
            self.root = None
        else:
            axis = depth % k  # Chọn trục để phân chia cây
            sorted_points = sorted(points, key=lambda x: x[axis])
            median = len(sorted_points) // 2

            self.root = KDNode(sorted_points[median])
            self.root.left = KDTree(sorted_points[:median], depth + 1).root
            self.root.right = KDTree(sorted_points[median + 1:], depth + 1).root

    def closest_point(self, target):
        best = None
        best_dist = float('inf')

        def closest_point_helper(node, target, depth=0, best=None, best_dist=float('inf')):
            if node is None:
                return best, best_dist

            k = len(target)
            axis = depth % k
            if target[axis] < node.point[axis]:
                next_node = node.left
                opposite_node = node.right
            else:
                next_node = node.right
                opposite_node = node.left

            best, best_dist = closest_point_helper(next_node, target, depth + 1, best, best_dist)

            if best is None or abs(node.point[axis] - target[axis]) < best_dist:
                if best is None:
                    best_dist = abs(node.point[axis] - target[axis])
                    best = node.point
                else:
                    best_dist = min(best_dist, abs(node.point[axis] - target[axis]))
                    best = node.point

            if abs(node.point[axis] - target[axis]) < best_dist:
                best, best_dist = closest_point_helper(opposite_node, target, depth + 1, best, best_dist)

            return best, best_dist

        return closest_point_helper(self.root, target)[0]


# Sử dụng cây K-Dimensional
points = [(2, 3), (5, 4), (9, 6), (4, 7), (8, 1), (7, 2)]
kd_tree = KDTree(points)
print(kd_tree.closest_point((9, 2)))  # Tìm điểm gần nhất với (9, 2)
```

Cây K-Dimensional là một cấu trúc dữ liệu mạnh mẽ cho việc tổ chức và tìm kiếm dữ liệu trong không gian nhiều chiều. Việc triển khai cụ thể của nó đòi hỏi kiến thức vững về thuật toán và xử lý dữ liệu trong không gian nhiều chiều. Trong thực tế, cây K-Dimensional thường được sử dụng trong các ứng dụng liên quan đến xử lý hình ảnh, máy học, và công cụ địa lý.

---

## Cây Fenwick (Fenwick Tree) hoặc Cây BIT (Binary Indexed Tree)

Cây Fenwick (Fenwick Tree) hoặc Cây BIT (Binary Indexed Tree) là một cấu trúc dữ liệu được sử dụng để thực hiện truy vấn tích lũy (prefix sum) nhanh chóng trên mảng. Nó cung cấp khả năng cập nhật một phần tử cụ thể trong mảng và tính tổng tích lũy của các phần tử từ đầu đến phần tử chỉ định một cách hiệu quả.

### Cấu Trúc Cơ Bản:

#### Cây Fenwick (BIT):

- **Tổng Tích Lũy (Prefix Sum):** Cho phép tính tổng của các phần tử từ đầu đến một vị trí cụ thể trong mảng.
- **Cập Nhật Nhanh Chóng:** Cho phép cập nhật một phần tử cụ thể trong mảng và tổng tích lũy tương ứng trong thời gian O(log n), trong đó n là số lượng phần tử trong mảng.
- **Ngữ Cảnh và Cách Sử Dụng:** Cây Fenwick thường được sử dụng trong các bài toán yêu cầu tính tổng tích lũy nhanh chóng trên các dãy số, ví dụ như phân tích dữ liệu số học và tính toán tổng tích lũy.

#### Ví Dụ và Code:

```python
class FenwickTree:
    def __init__(self, n):
        self.size = n
        self.tree = [0] * (n + 1)

    def update(self, idx, val):
        while idx <= self.size:
            self.tree[idx] += val
            idx += idx & -idx

    def prefix_sum(self, idx):
        total = 0
        while idx > 0:
            total += self.tree[idx]
            idx -= idx & -idx
        return total

# Sử dụng cây Fenwick
arr = [1, 3, 5, 2, 6, 8, 9]
fenwick = FenwickTree(len(arr))
for i in range(len(arr)):
    fenwick.update(i + 1, arr[i])

print(fenwick.prefix_sum(5))  # Tính tổng tích lũy đến phần tử thứ 5 (1 + 3 + 5 + 2 + 6 = 17)
```

Cây Fenwick là một cấu trúc dữ liệu linh hoạt và hiệu quả để tính toán tổng tích lũy nhanh chóng. Tuy nhiên, việc triển khai chi tiết của nó đòi hỏi hiểu biết sâu sắc về nguyên lý hoạt động của cây Fenwick và phép toán bit. Trong thực tế, cây Fenwick thường được sử dụng trong các thuật toán yêu cầu tính toán tổng tích lũy, như trong lập trình cạnh tranh, xử lý dữ liệu số học và quản lý tài nguyên.

---
