**Khái niệm:**
- Cây nhị phân là một cấu trúc dữ liệu phân cấp gồm các nút, mỗi nút có tối đa hai nút con, gọi là nút trái và nút phải. Nút gốc của cây là nút đầu tiên, nút không có nút cha. Các nút lá là các nút không có nút con.

**Ngữ cảnh:**
- **Cấu trúc dữ liệu phân cấp:** Cây nhị phân phân chia dữ liệu thành các cấp độ, từ gốc (nút đầu tiên) đến các nút lá (nút không có nút con).
- **Áp dụng rộng rãi:** Được sử dụng trong nhiều lĩnh vực như thuật toán tìm kiếm, cơ sở dữ liệu, cấu trúc dữ liệu...
- **Các loại cây nhị phân:** Có nhiều dạng cây nhị phân khác nhau như cây nhị phân tìm kiếm, cây nhị phân cân bằng...

**Cách sử dụng và ví dụ về cây nhị phân:**

Dưới đây là một ví dụ triển khai cơ bản của cây nhị phân trong Python:

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self, root_value):
        self.root = Node(root_value)

    def insert(self, value):
        self._insert_recursively(self.root, value)

    def _insert_recursively(self, current_node, value):
        if value < current_node.value:
            if current_node.left is None:
                current_node.left = Node(value)
            else:
                self._insert_recursively(current_node.left, value)
        elif value > current_node.value:
            if current_node.right is None:
                current_node.right = Node(value)
            else:
                self._insert_recursively(current_node.right, value)

    def inorder_traversal(self, node):
        if node:
            self.inorder_traversal(node.left)
            print(node.value, end=" ")
            self.inorder_traversal(node.right)

# Sử dụng cây nhị phân
tree = BinaryTree(5)
tree.insert(3)
tree.insert(8)
tree.insert(2)
tree.insert(4)
tree.insert(7)
tree.insert(9)

tree.inorder_traversal(tree.root)
# Output: 2 3 4 5 7 8 9
```

Trong ví dụ này, chúng ta triển khai một lớp `Node` để đại diện cho mỗi nút trong cây nhị phân và một lớp `BinaryTree` để quản lý cây. Phương thức `insert` được sử dụng để chèn một giá trị mới vào cây theo quy tắc cây nhị phân. Phương thức `inorder_traversal` được sử dụng để duyệt cây theo thứ tự trái-gốc-phải và in ra giá trị của các nút theo thứ tự tăng dần.

Cây nhị phân là một cấu trúc dữ liệu quan trọng trong lập trình với nhiều ứng dụng như tìm kiếm, sắp xếp, xử lý dữ liệu có cấu trúc phân cấp và nhiều thuật toán khác.