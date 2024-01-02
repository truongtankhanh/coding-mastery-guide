## Cây Splay

- Cây Splay là một loại cây cân bằng động có khả năng tự cân bằng khi các nút được truy cập gần đây. Nó là một loại cây tìm kiếm nhị phân được thiết kế để đảm bảo thời gian truy xuất trung bình là O(log n), trong đó n là số nút trong cây. Cây Splay điều chỉnh cấu trúc của nó dựa trên việc truy cập gần đây để giữ cho các nút được truy cập thường xuyên ở cận trên cùng, giúp cải thiện hiệu suất truy cập trong tương lai.

### Cấu Trúc Cơ Bản:

#### Cây Splay:

- **Cân Bằng Động:** Khi một nút được truy cập, cây Splay thực hiện một loạt các phép xoay và cân bằng để đưa nút đó lên cận trên cùng của cây.
- **Phép Xoay (Splaying):** Phép xoay là phép thay đổi cấu trúc của cây để đưa một nút lên cận trên cùng bằng cách thực hiện các xoay phù hợp.
- **Ngữ Cảnh và Cách Sử Dụng:** Cây Splay thường được sử dụng trong các ứng dụng yêu cầu truy cập tần suất cao vào dữ liệu được truy cập gần đây để cải thiện hiệu suất truy cập.

#### Ví Dụ và Code:

```python
class Node:
    def __init__(self, key):
        self.key = key
        self.left = self.right = None

class SplayTree:
    def __init__(self):
        self.root = None

    def right_rotate(self, x):
        y = x.left
        x.left = y.right
        y.right = x
        return y

    def left_rotate(self, x):
        y = x.right
        x.right = y.left
        y.left = x
        return y

    def splay(self, key):
        self.root = self._splay(self.root, key)

    def _splay(self, node, key):
        if node is None or node.key == key:
            return node

        if key < node.key:
            if node.left is None:
                return node
            if key < node.left.key:
                node.left.left = self._splay(node.left.left, key)
                node = self.right_rotate(node)
            elif key > node.left.key:
                node.left.right = self._splay(node.left.right, key)
                if node.left.right:
                    node.left = self.left_rotate(node.left)
            return node if node.left is None else self.right_rotate(node)

        else:
            if node.right is None:
                return node
            if key < node.right.key:
                node.right.left = self._splay(node.right.left, key)
                if node.right.left:
                    node.right = self.right_rotate(node.right)
            elif key > node.right.key:
                node.right.right = self._splay(node.right.right, key)
                node = self.left_rotate(node)
            return node if node.right is None else self.left_rotate(node)

    def insert(self, key):
        if self.root is None:
            self.root = Node(key)
        else:
            self.splay(key)
            if self.root.key != key:
                new_node = Node(key)
                if key < self.root.key:
                    new_node.right = self.root
                    new_node.left = self.root.left
                    self.root.left = None
                else:
                    new_node.left = self.root
                    new_node.right = self.root.right
                    self.root.right = None
                self.root = new_node

    def search(self, key):
        self.splay(key)
        return self.root is not None and self.root.key == key
```

Cây Splay cung cấp khả năng cân bằng động và cải thiện hiệu suất truy cập cho các nút gần đây được truy cập nhiều. Tuy nhiên, việc triển khai chi tiết của cây Splay có thể đòi hỏi kiến thức vững về cây tìm kiếm nhị phân và phép xoay.

---

## Cây Trie Nén (Trie Compression)

- Cây Trie nén là một biến thể của cấu trúc dữ liệu Trie (còn được gọi là "cây tiền tố" hoặc "cây từ điển") nhằm tối ưu hóa không gian bộ nhớ. Cây Trie ban đầu có thể tiêu tốn nhiều bộ nhớ khi lưu trữ các từ với các tiền tố giống nhau hoặc trùng lặp. Việc nén Trie giúp giảm không gian bộ nhớ bằng cách gộp các nút có thể hợp nhất thành một nút duy nhất.

### Cấu Trúc Cơ Bản:

#### Cây Trie và Nén Trie:

- **Cây Trie (Trie):** Là cấu trúc dữ liệu cây mà mỗi nút biểu diễn một ký tự. Đường đi từ gốc đến nút lá tạo thành một từ hoặc một phần của từ.
- **Cây Trie Nén (Compressed Trie):** Là một biến thể của cây Trie. Khi có thể, các nút có thể được gộp lại thành một nút duy nhất, giảm số lượng nút cần lưu trữ.

#### Ngữ Cảnh và Cách Sử Dụng:

1. **Giảm Không Gian Bộ Nhớ:**

   - Ngữ Cảnh: Trie có thể tiêu tốn nhiều bộ nhớ, đặc biệt khi có nhiều từ có các tiền tố giống nhau. Nén Trie giúp giảm không gian bộ nhớ bằng cách gộp các nút có thể.
   - Ví Dụ (Python):

     ```python
     class TrieNode:
         def __init__(self):
             self.children = {}
             self.is_end = False

     class CompressedTrie:
         def __init__(self):
             self.root = TrieNode()

         def insert(self, word):
             node = self.root
             for char in word:
                 if char not in node.children:
                     node.children[char] = TrieNode()
                 node = node.children[char]
             node.is_end = True

         def compress(self, node):
             if not node.children:
                 return
             compressed = {}
             for char, child in node.children.items():
                 self.compress(child)
                 if len(child.children) == 1 and not child.is_end:
                     key = list(child.children.keys())[0]
                     compressed[char + key] = child.children[key]
                 else:
                     compressed[char] = child
             node.children = compressed

         def compress_trie(self):
             self.compress(self.root)
     ```

2. **Tối Ưu Hóa Hiệu Suất:**

   - Ngữ Cảnh: Nén Trie có thể cải thiện hiệu suất của việc tìm kiếm và lưu trữ từ điển.
   - Ví Dụ (Python):

     ```python
     compressed_trie = CompressedTrie()
     words = ["apple", "app", "apricot", "bear", "ball"]
     for word in words:
         compressed_trie.insert(word)
     compressed_trie.compress_trie()
     ```

Nén Trie là một cải tiến của Trie để giảm không gian bộ nhớ thông qua việc gộp các nút có thể. Việc triển khai cụ thể có thể đòi hỏi xử lý và hiểu biết về cấu trúc Trie và thuật toán duyệt cây. Trong ứng dụng thực tế, nén Trie thường được sử dụng để tối ưu hóa không gian lưu trữ trong các từ điển, công cụ tìm kiếm và xử lý ngôn ngữ tự nhiên.

---
