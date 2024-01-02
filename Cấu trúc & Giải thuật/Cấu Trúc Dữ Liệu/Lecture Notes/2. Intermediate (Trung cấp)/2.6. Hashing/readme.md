## Hashing Functions

- Hàm băm (hashing functions) là một phần quan trọng trong việc thực hiện cấu trúc dữ liệu bảng băm (hash table). Chức năng chính của hàm băm là ánh xạ dữ liệu từ không gian lớn hơn (tập dữ liệu đầu vào) vào không gian nhỏ hơn (bảng hash) thông qua một quá trình tính toán. Hàm băm cố gắng tạo ra một giá trị băm duy nhất cho mỗi phần tử.

### Cấu Trúc Cơ Bản:

#### Hàm Băm:

- Hàm băm chuyển đổi một khóa (key) thành một vị trí trong bảng băm bằng cách sử dụng hàm tính toán.
- Mục tiêu là tạo ra một vị trí băm (hash) phân phối đều, giúp tránh việc xảy ra xung đột (collision) - khi hai khóa được ánh xạ vào cùng một vị trí băm.

#### Ngữ Cảnh và Cách Sử Dụng:

1. **Bảng Băm (Hash Table):**

   - Ngữ cảnh: Sử dụng hàm băm khi triển khai bảng băm để lưu trữ và truy xuất dữ liệu một cách hiệu quả.
   - Ví dụ (Python):

     ```python
     class HashTable:
         def __init__(self, size):
             self.size = size
             self.table = [[] for _ in range(size)]

         def hash_func(self, key):
             return key % self.size

         def insert(self, key, value):
             hash_key = self.hash_func(key)
             self.table[hash_key].append((key, value))

         def get(self, key):
             hash_key = self.hash_func(key)
             for k, v in self.table[hash_key]:
                 if k == key:
                     return v
             return None

     # Sử dụng bảng băm với hàm băm
     hash_table = HashTable(10)
     hash_table.insert(5, 'apple')
     hash_table.insert(25, 'banana')
     print(hash_table.get(5))  # Output: 'apple'
     ```

2. **Bảo Mật (Cryptography):**

   - Ngữ cảnh: Hàm băm cũng được sử dụng trong mã hóa và bảo mật để tạo các giá trị băm (hash) duy nhất cho thông tin nhạy cảm như mật khẩu.
   - Ví dụ (Python - Sử dụng Thư viện `hashlib`):

     ```python
     import hashlib

     # Tạo một giá trị băm cho mật khẩu
     password = "MyPassword123"
     hashed_password = hashlib.sha256(password.encode()).hexdigest()
     print("Hashed Password:", hashed_password)
     ```

Hàm băm là một công cụ quan trọng trong cấu trúc dữ liệu và bảo mật thông tin. Việc chọn hàm băm phù hợp và triển khai đúng cách giúp tối ưu hóa việc lưu trữ và truy xuất dữ liệu cũng như đảm bảo tính bảo mật và toàn vẹn của thông tin.

---

## Collision Resolution

- Xử lý va chạm (collision resolution) là quá trình giải quyết vấn đề khi hai hoặc nhiều khóa được ánh xạ đến cùng một vị trí trong bảng băm (hash table) bởi hàm băm. Khi một xung đột xảy ra, cần phải có cơ chế để lưu trữ và quản lý các khóa tại cùng một vị trí trong bảng băm một cách hiệu quả.

### Cấu Trúc Cơ Bản:

#### Xử Lý Va Chạm:

- **Open Addressing:** Trong phương pháp này, khi xảy ra xung đột, việc tìm kiếm vị trí mới để lưu trữ khóa sẽ được thực hiện bằng cách duyệt qua các ô trống tiếp theo trong bảng băm.
- **Separate Chaining:** Trong phương pháp này, mỗi vị trí trong bảng băm lưu trữ một danh sách liên kết của các khóa được ánh xạ đến cùng một vị trí.

#### Ngữ Cảnh và Cách Sử Dụng:

1. **Open Addressing:**

   - Ngữ cảnh: Sử dụng khi cần giải quyết xung đột bằng cách tìm kiếm vị trí trống tiếp theo trong bảng băm.
   - Ví dụ (Python):

     ```python
     class HashTable:
         def __init__(self, size):
             self.size = size
             self.table = [None] * size

         def hash_func(self, key):
             return key % self.size

         def insert(self, key, value):
             hash_key = self.hash_func(key)
             while self.table[hash_key] is not None:
                 hash_key = (hash_key + 1) % self.size
             self.table[hash_key] = (key, value)

         def get(self, key):
             hash_key = self.hash_func(key)
             while self.table[hash_key] is not None:
                 k, v = self.table[hash_key]
                 if k == key:
                     return v
                 hash_key = (hash_key + 1) % self.size
             return None
     ```

2. **Separate Chaining:**

   - Ngữ cảnh: Sử dụng khi cần lưu trữ danh sách các phần tử được ánh xạ đến cùng một vị trí trong bảng băm.
   - Ví dụ (Python):

     ```python
     class HashTable:
         def __init__(self, size):
             self.size = size
             self.table = [[] for _ in range(size)]

         def hash_func(self, key):
             return key % self.size

         def insert(self, key, value):
             hash_key = self.hash_func(key)
             self.table[hash_key].append((key, value))

         def get(self, key):
             hash_key = self.hash_func(key)
             for k, v in self.table[hash_key]:
                 if k == key:
                     return v
             return None
     ```

Xử lý va chạm là một phần quan trọng của việc triển khai bảng băm, giúp tránh việc xung đột trong quá trình lưu trữ dữ liệu. Việc chọn phương pháp xử lý va chạm phù hợp với bài toán cụ thể cũng như cài đặt đúng cơ chế này sẽ cải thiện hiệu suất của cấu trúc dữ liệu bảng băm.

---
