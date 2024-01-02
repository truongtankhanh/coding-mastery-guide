## Persistent Data Structures

- Cấu trúc dữ liệu Persistent Data Structures là loại cấu trúc dữ liệu cho phép thực hiện các thay đổi, thêm mới hoặc xóa dữ liệu mà không ảnh hưởng đến phiên bản trước đó của cấu trúc dữ liệu. Mỗi lần thực hiện một thay đổi, một phiên bản mới của cấu trúc dữ liệu sẽ được tạo ra, giữ lại phiên bản cũ không bị thay đổi.

### Ngữ Cảnh và Cách Sử Dụng:

- **Bảo Toàn Phiên Bản Trước:** Persistent Data Structures thường được sử dụng trong các ứng dụng yêu cầu theo dõi lịch sử thay đổi hoặc cần bảo toàn dữ liệu trong trạng thái cũ sau khi thực hiện các thay đổi.
- **Áp Dụng Trong Lý Thuyết Và Thực Tiễn:** Cấu trúc dữ liệu này thường được sử dụng trong việc lưu trữ dữ liệu trong hệ thống versioning, truy vết, hoặc hệ thống quản lý tài nguyên.

### Ví Dụ và Code (Persistent Stack):

Dưới đây là một ví dụ về cấu trúc dữ liệu Persistent Stack:

```python
class Node:
    def __init__(self, val, prev=None):
        self.val = val
        self.prev = prev

class PersistentStack:
    def __init__(self):
        self.top = None

    def push(self, val):
        new_node = Node(val)
        new_node.prev = self.top
        return PersistentStack(new_node)

    def pop(self):
        if self.top is None:
            return None
        return PersistentStack(self.top.prev)

    def peek(self):
        if self.top is None:
            return None
        return self.top.val

# Sử dụng Persistent Stack
stack1 = PersistentStack()
stack2 = stack1.push(5)
stack3 = stack2.push(10)
stack4 = stack3.pop()

print(stack1.peek())  # None - Stack gốc không thay đổi
print(stack2.peek())  # 5 - Phiên bản stack2
print(stack3.peek())  # 10 - Phiên bản stack3
print(stack4.peek())  # 5 - Phiên bản stack4
```

Trong ví dụ trên, khi thêm hoặc loại bỏ phần tử từ Persistent Stack, các phiên bản mới của Stack được tạo ra mà không làm thay đổi phiên bản trước đó. Điều này cho phép chúng ta duy trì và sử dụng các phiên bản của cấu trúc dữ liệu trong trạng thái cũ sau khi thực hiện các thay đổi. Trong thực tế, Persistent Data Structures cung cấp một cách tiếp cận linh hoạt trong việc lưu trữ và quản lý lịch sử của dữ liệu.

---

## Cache-Oblivious Data Structures

- Cấu trúc dữ liệu Cache-Oblivious được thiết kế để tối ưu hóa hiệu suất trên các cấu trúc bộ nhớ đệm mà không cần biết hoặc điều chỉnh cho trước kích thước hoặc cấu trúc chính xác của bộ nhớ đệm. Điều này có nghĩa là chúng có khả năng tự điều chỉnh cho các cấu trúc bộ nhớ đệm với kích thước khác nhau mà không cần thông tin trước về kích thước bộ nhớ hoặc các tham số cụ thể.

### Ngữ Cảnh và Cách Sử Dụng:

- **Tối Ưu Hóa Độ Hiệu Quả:** Cấu trúc dữ liệu này thường được sử dụng trong các ứng dụng cần tối ưu hóa hiệu suất trên bộ nhớ đệm mà không cần biết cụ thể về cấu trúc bộ nhớ.
- **Áp Dụng Trong Lý Thuyết Và Thực Tiễn:** Cache-Oblivious Data Structures thường được sử dụng trong lý thuyết và thực tế khi cần tối ưu hóa truy cập bộ nhớ trong các ứng dụng như cơ sở dữ liệu, đồ họa máy tính, xử lý ảnh và video, hoặc các thuật toán tìm kiếm phức tạp.

### Ví Dụ và Code (Cache-Oblivious Search Tree):

Dưới đây là một ví dụ về cấu trúc dữ liệu Cache-Oblivious Search Tree, ví dụ về B-tree:

```python
class Node:
    def __init__(self, t):
        self.keys = []
        self.children = []
        self.is_leaf = True
        self.t = t

    def insert(self, key):
        if not self.is_leaf:
            i = len(self.keys) - 1
            while i >= 0 and key < self.keys[i]:
                i -= 1
            if self.children[i + 1].size() == 2 * self.t - 1:
                self.split_child(i + 1, self.children[i + 1])
                if key > self.keys[i + 1]:
                    i += 1
            self.children[i + 1].insert_non_full(key)
        else:
            self.insert_non_full(key)

    def insert_non_full(self, key):
        i = len(self.keys) - 1
        if len(self.keys) == 0:
            self.keys.append(key)
            return
        while i >= 0 and key < self.keys[i]:
            self.keys[i + 1] = self.keys[i]
            i -= 1
        self.keys[i + 1] = key

    def split_child(self, i, y):
        z = Node(y.t)
        z.is_leaf = y.is_leaf
        z.keys = y.keys[self.t:]
        y.keys = y.keys[:self.t - 1]
        if not y.is_leaf:
            z.children = y.children[self.t:]
            y.children = y.children[:self.t]
        self.keys.insert(i, y.keys[self.t - 1])
        self.children.insert(i + 1, z)

    def size(self):
        return len(self.keys)

class BTree:
    def __init__(self, t):
        self.root = Node(t)
        self.t = t

    def insert(self, key):
        root = self.root
        if len(root.keys) == 2 * self.t - 1:
            new_root = Node(self.t)
            new_root.children.append(self.root)
            new_root.split_child(0, self.root)
            self.root = new_root
        self.root.insert(key)

    def search(self, key):
        return self.root.search(key)

# Sử dụng Cache-Oblivious Search Tree (B-tree)
b_tree = BTree(3)
for i in range(1, 10):
    b_tree.insert(i)

print(b_tree.search(6))  # True - Tìm thấy key = 6 trong B-tree
```

Trong ví dụ trên, chúng ta sử dụng cấu trúc dữ liệu B-tree, một cấu trúc dữ liệu tối ưu hóa cho việc tìm kiếm và truy cập dữ liệu trên bộ nhớ đệm mà không cần biết trước kích thước cụ thể của bộ nhớ đệm. B-tree có khả năng tự điều chỉnh cho các cấu trúc bộ nhớ đệm khác nhau mà không cần thông tin trước về kích thước b

ộ nhớ.

---
