## Danh Sách Liên Kết Đa Hướng

- Danh sách liên kết đa hướng là một cấu trúc dữ liệu trong đó mỗi nút có thể có nhiều hơn hai con, không giới hạn số con mà một nút có thể có. Cấu trúc này cho phép một nút có thể trỏ đến nhiều nút con hơn so với danh sách liên kết thông thường, nơi mà mỗi nút chỉ trỏ đến một nút con duy nhất.

### Cấu Trúc Cơ Bản:

#### Danh Sách Liên Kết Đa Hướng:

- Mỗi nút trong danh sách liên kết đa hướng có thể trỏ đến nhiều nút con.
- Có thể được triển khai dưới dạng danh sách liên kết hoặc cây, tùy thuộc vào cách tổ chức các nút và mối quan hệ giữa chúng.

#### Ngữ Cảnh và Cách Sử Dụng:

1. **Biểu Diễn Cấu Trúc Dữ Liệu Phức Tạp:**

   - Ngữ cảnh: Khi cần biểu diễn mối quan hệ phức tạp giữa các đối tượng hoặc khi dữ liệu có thể có nhiều hơn một kết nối với các thành phần khác.
   - Ví dụ:

     ```python
     class Node:
         def __init__(self, data):
             self.data = data
             self.children = []

     class MultiDirectionalLinkedList:
         def __init__(self):
             self.head = None

         def add_child(self, parent, child_data):
             if not self.head:
                 self.head = Node(child_data)
             else:
                 new_child = Node(child_data)
                 parent.children.append(new_child)

     # Tạo danh sách liên kết đa hướng
     my_list = MultiDirectionalLinkedList()
     node_a = my_list.head
     my_list.add_child(node_a, "Child 1")
     my_list.add_child(node_a, "Child 2")
     ```

2. **Biểu Diễn Cây Trong Cấu Trúc Dữ Liệu:**

   - Ngữ cảnh: Đôi khi, cấu trúc dữ liệu cây có thể được biểu diễn thông qua danh sách liên kết đa hướng, nơi mỗi nút có thể có nhiều hơn một nút con.
   - Ví dụ:

     ```python
     class Node:
         def __init__(self, data):
             self.data = data
             self.children = []

     # Tạo cây thông qua danh sách liên kết đa hướng
     root = Node("Root")
     child1 = Node("Child 1")
     child2 = Node("Child 2")
     root.children.extend([child1, child2])
     ```

Danh sách liên kết đa hướng cung cấp linh hoạt trong việc biểu diễn cấu trúc dữ liệu phức tạp, đặc biệt là khi mối quan hệ giữa các thành phần không dừng lại ở mức đơn giản. Minh họa trên là một ví dụ cơ bản để thể hiện cách triển khai danh sách liên kết đa hướng, trong thực tế, việc sử dụng và triển khai có thể phức tạp hơn, phụ thuộc vào bối cảnh ứng dụng cụ thể.

---

## Danh Sách Phi Tuyến (Skip List)

- Danh sách phi tuyến, hay Skip List, là một cấu trúc dữ liệu linh hoạt cho phép việc truy cập nhanh vào dữ liệu bằng cách bỏ qua các nút không cần thiết. Skip List có thể được coi là một biến thể của danh sách liên kết được cấu trúc với nhiều tầng (layers) và các liên kết bỏ qua (skip links) để tối ưu hóa việc tìm kiếm.

### Cấu Trúc Cơ Bản:

#### Danh Sách Phi Tuyến (Skip List):

- Có thể được coi như một danh sách liên kết nơi mỗi phần tử có thể có nhiều liên kết với các phần tử khác trong danh sách.
- Cấu trúc của Skip List có thể bao gồm nhiều tầng (levels) khác nhau, với các phần tử được liên kết ở các tầng khác nhau để tạo ra các "đường băng" (paths) để tìm kiếm nhanh chóng.
- Các skip link cho phép bỏ qua một số nút khi tìm kiếm, giúp tối ưu hóa thời gian tìm kiếm.

#### Ngữ Cảnh và Cách Sử Dụng:

1. **Truy Cập Nhanh vào Dữ Liệu:**

   - Ngữ cảnh: Khi cần tìm kiếm, chèn, hoặc xóa dữ liệu một cách nhanh chóng trong một danh sách lớn.
   - Ví dụ:

     ```python
     import random

     class SkipNode:
         def __init__(self, value):
             self.value = value
             self.next = None
             self.down = None

     class SkipList:
         def __init__(self):
             self.head = SkipNode(float("-inf"))
             self.tail = SkipNode(float("inf"))
             self.head.next = self.tail

         def search(self, value):
             current = self.head
             while current:
                 while current.next and current.next.value < value:
                     current = current.next
                 if current.next and current.next.value == value:
                     return True
                 current = current.down
             return False

         # Các phương thức khác: chèn, xóa...

     # Tạo Skip List và thực hiện truy vấn
     skip_list = SkipList()
     for i in range(10):
         skip_list.insert(random.randint(1, 100))

     print(skip_list.search(5))  # Kiểm tra xem giá trị 5 có trong Skip List hay không
     ```

2. **Tối Ưu Hóa Thao Tác Thêm/Xóa:**
   - Ngữ cảnh: Khi cần thực hiện thêm hoặc xóa dữ liệu một cách hiệu quả trong danh sách lớn mà không làm giảm hiệu suất tìm kiếm.
   - Ví dụ: Cập nhật danh sách các sản phẩm trong cửa hàng trực tuyến, với khả năng thêm mới hoặc xóa sản phẩm một cách hiệu quả mà vẫn duy trì khả năng tìm kiếm nhanh chóng.

Skip List cung cấp một cách linh hoạt và hiệu quả để thực hiện các thao tác tìm kiếm, chèn, và xóa trong danh sách lớn. Minh họa trên là một ví dụ cơ bản, còn triển khai thực tế có thể đòi hỏi xử lý ngoại lệ và cải thiện hiệu suất để đáp ứng yêu cầu của ứng dụng cụ thể.

---
