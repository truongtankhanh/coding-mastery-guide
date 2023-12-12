### **Grafts:**

**Khái niệm:**

- `Grafts` trong Git là một cách để tạo một mối quan hệ giữa các commit, thay đổi cấu trúc lịch sử của repository mà không thay đổi lịch sử thực tế của các commit.

---

**Ngữ cảnh:**

- Khi bạn muốn "ghép nối" lịch sử của một nhánh hoặc commit cụ thể vào một vị trí khác trong lịch sử của repository mà không muốn thay đổi lịch sử chính thức của các commit, `Grafts` có thể giúp bạn làm điều này.

---

**Cách sử dụng và ví dụ lệnh:**

1. **Tạo Graft:**

   - **Khái niệm:**
     File `.git/info/grafts` lưu trữ thông tin về các "ghép nối" giữa các commit. Mỗi dòng trong file này định nghĩa một mối quan hệ.

   - **Ví dụ:**
     Tạo hoặc chỉnh sửa file `.git/info/grafts` với cấu trúc: `<commit-to-be-grafted> <parent-of-the-destination>`.
     ```plaintext
     1234567890abcdef 9876543210fedcba
     ```
     Điều này sẽ "ghép nối" commit có ID `1234567890abcdef` vào sau commit có ID `9876543210fedcba`.

2. **Hiển thị Grafts:**

   - **Khái niệm:**

     ```bash
     git log --graph
     ```

     Xem lịch sử commit với các mối quan hệ được "ghép nối" thông qua file `.git/info/grafts`.

   - **Ví dụ:**
     ```bash
     git log --graph
     ```
     Lệnh này sẽ hiển thị lịch sử commit với các "ghép nối" từ file `.git/info/grafts`.

---

### **Replace:**

**Khái niệm:**

- `Replace` trong Git cung cấp một cách khác để thay đổi cấu trúc lịch sử của repository bằng cách thay thế một commit bằng một commit khác.

---

**Ngữ cảnh:**

- Khi bạn cần thay thế một commit cụ thể trong lịch sử bằng một commit khác mà bạn tạo ra, `Replace` có thể giúp bạn thực hiện điều này mà không cần phải sửa đổi lịch sử thực sự của commit.

---

**Cách sử dụng và ví dụ lệnh:**

1. **Thay thế một commit bằng commit khác:**

   - **Khái niệm:**

     ```bash
     git replace <commit-to-be-replaced> <replacement-commit>
     ```

     Thay thế commit có ID là `<commit-to-be-replaced>` bằng commit có ID là `<replacement-commit>`.

   - **Ví dụ:**
     ```bash
     git replace 1234567890abcdef 9876543210fedcba
     ```
     Lệnh này thay thế commit có ID `1234567890abcdef` bằng commit có ID `9876543210fedcba`.

2. **Hiển thị Replace:**

   - **Khái niệm:**

     ```bash
     git log --graph
     ```

     Xem lịch sử commit với các thay thế được áp dụng thông qua `git replace`.

   - **Ví dụ:**
     ```bash
     git log --graph
     ```
     Lệnh này sẽ hiển thị lịch sử commit với các thay thế từ `git replace`.

---

Lưu ý: Cả `Grafts` và `Replace` là các cách không phải làm thay đổi lịch sử commit thực sự. Chúng chỉ là cách tạm thời và không ảnh hưởng đến lịch sử chính thức của repository.

---
