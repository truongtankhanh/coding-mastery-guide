## Danh Sách Liên Kết Nhị Phân

- Danh sách liên kết nhị phân là một cấu trúc dữ liệu kết hợp các tính chất của danh sách liên kết và mảng. Nó lưu trữ dữ liệu dưới dạng các nút được liên kết với nhau theo cách tương tự như danh sách liên kết thông thường, nhưng cũng có khả năng truy cập ngẫu nhiên giống như mảng thông qua việc sử dụng chỉ mục.

### Cấu Trúc Cơ Bản:

#### Danh Sách Liên Kết Nhị Phân:

- Mỗi nút trong danh sách liên kết nhị phân chứa dữ liệu cùng với hai con trỏ: một con trỏ trỏ đến nút tiếp theo và một con trỏ trỏ đến nút trước đó.
- Khả năng truy cập ngẫu nhiên tốt hơn so với danh sách liên kết thông thường, nhưng không hiệu quả bằng mảng vì việc truy cập cần thời gian O(n/2).

#### Ngữ Cảnh và Cách Sử Dụng:

1. **Kết hợp Tính Chất Danh Sách Liên Kết và Mảng:**

   - Ngữ cảnh: Sử dụng khi cần tận dụng ưu điểm của cả danh sách liên kết và mảng: khả năng chèn, xóa linh hoạt của danh sách liên kết và khả năng truy cập ngẫu nhiên của mảng.
   - Ví dụ (Python):

     ```python
     class Node:
         def __init__(self, data):
             self.data = data
             self.next = None
             self.prev = None

     class DoublyLinkedList:
         def __init__(self):
             self.head = None
             self.tail = None

         def append(self, data):
             new_node = Node(data)
             if not self.head:
                 self.head = new_node
             else:
                 self.tail.next = new_node
                 new_node.prev = self.tail
             self.tail = new_node

         def access_by_index(self, index):
             current = self.head
             count = 0
             while current:
                 if count == index:
                     return current.data
                 count += 1
                 current = current.next
             return None

     # Sử dụng danh sách liên kết nhị phân
     dll = DoublyLinkedList()
     dll.append(1)
     dll.append(2)
     dll.append(3)
     dll.append(4)

     print("Element at index 2:", dll.access_by_index(2))  # Output: 3
     ```

Danh sách liên kết nhị phân cung cấp một sự kết hợp linh hoạt giữa danh sách liên kết và mảng, cho phép bạn thực hiện các thao tác chèn, xóa linh hoạt và truy cập ngẫu nhiên một cách tương đối hiệu quả. Tuy nhiên, việc truy cập ngẫu nhiên vẫn không hiệu quả như mảng thông thường.

---

## Cây Segment (Segment Tree)

- Cây Segment (Segment Tree) là một cấu trúc dữ liệu cây được sử dụng để thực hiện các truy vấn phạm vi trên một mảng một cách hiệu quả. Nó cho phép thực hiện các truy vấn như tìm tổng, tìm giá trị lớn nhất/nhỏ nhất trong một đoạn, cập nhật giá trị mảng một cách nhanh chóng.

### Cấu Trúc Cơ Bản:

#### Cây Segment:

- Cây Segment được xây dựng dựa trên mảng ban đầu và được biểu diễn dưới dạng cây nhị phân.
- Mỗi nút lá của cây Segment đại diện cho một phần tử trong mảng.
- Mỗi nút trong cây Segment bên trên là tổng (hoặc giá trị tùy chọn khác) của các nút con của nó.
- Cây Segment thường được dựng dựa trên phép phân chia đệ quy của mảng để giảm thiểu thời gian truy vấn.

#### Ngữ Cảnh và Cách Sử Dụng:

1. **Thực Hiện Truy Vấn Phạm Vi Một Cách Hiệu Quả:**

   - Ngữ cảnh: Sử dụng khi cần thực hiện các truy vấn phạm vi (ví dụ: tính tổng các phần tử từ vị trí l đến r) trên mảng một cách hiệu quả.
   - Ví dụ (Python):

     ```python
     class SegmentTree:
         def __init__(self, arr):
             self.n = len(arr)
             self.tree = [0] * (4 * self.n)
             self.build_tree(arr, 0, 0, self.n - 1)

         def build_tree(self, arr, idx, left, right):
             if left == right:
                 self.tree[idx] = arr[left]
                 return

             mid = (left + right) // 2
             self.build_tree(arr, 2 * idx + 1, left, mid)
             self.build_tree(arr, 2 * idx + 2, mid + 1, right)
             self.tree[idx] = self.tree[2 * idx + 1] + self.tree[2 * idx + 2]

         def query(self, idx, left, right, q_left, q_right):
             if q_left > right or q_right < left:
                 return 0

             if q_left <= left and q_right >= right:
                 return self.tree[idx]

             mid = (left + right) // 2
             left_sum = self.query(2 * idx + 1, left, mid, q_left, q_right)
             right_sum = self.query(2 * idx + 2, mid + 1, right, q_left, q_right)
             return left_sum + right_sum

     # Sử dụng cây Segment
     arr = [1, 3, 5, 7, 9, 11]
     seg_tree = SegmentTree(arr)
     print(seg_tree.query(0, 0, len(arr) - 1, 1, 4))  # Output: 24 (tổng các phần tử từ vị trí 1 đến 4)
     ```

Cây Segment cung cấp một cách hiệu quả để thực hiện các truy vấn phạm vi trên mảng. Tuy nhiên, triển khai chi tiết của cây Segment có thể đòi hỏi kiến thức về cây nhị phân và đệ quy. Cấu trúc này được sử dụng rộng rãi trong các bài toán yêu cầu truy vấn phạm vi trên dãy số một cách nhanh chóng và hiệu quả.

---
