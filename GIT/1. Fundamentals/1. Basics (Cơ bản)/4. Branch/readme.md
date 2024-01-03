**Khái niệm:**

- Branch trong hệ thống kiểm soát phiên bản (VCS) là một dòng phát triển song song của mã nguồn trong repository. Nó là một bản sao của mã nguồn chính với khả năng phát triển và thay đổi mà không ảnh hưởng đến mã nguồn chính (thường được gọi là master hoặc main). Branch cho phép nhóm phát triển làm việc độc lập trên các tính năng, sửa đổi, hoặc phiên bản khác nhau của dự án.

---

**Ngữ cảnh:**

- Branch rất hữu ích khi cần phát triển tính năng mới, sửa lỗi, hoặc thực hiện các thay đổi mà không muốn ảnh hưởng đến phiên bản chính của dự án. Đây là một công cụ mạnh mẽ cho việc phân chia công việc và quản lý sự phát triển đồng thời của dự án.

---

**Cách sử dụng:**

1. **Tạo một branch mới:**

   ```bash
   git branch <branch_name>
   ```

   Lệnh này tạo ra một branch mới từ commit hiện tại.

2. **Chuyển đổi giữa các branch:**

   ```bash
   git checkout <branch_name>
   ```

   Lệnh này cho phép bạn chuyển đổi giữa các branch khác nhau.

3. **Tạo và chuyển đổi sang branch mới cùng một lúc:**

   ```bash
   git checkout -b <new_branch_name>
   ```

   Lệnh này tạo ra một branch mới và chuyển đổi sang branch đó ngay lập tức.

4. **Xem danh sách các branch trong repository:**

   ```bash
   git branch
   ```

   Lệnh này liệt kê tất cả các branch có trong repository.

5. **Xóa branch:**
   ```bash
   git branch -d <branch_name>
   ```
   Lệnh này xóa branch đã chỉ định.

---

**Ví dụ:**
Giả sử bạn đang làm việc trên một dự án và muốn tạo một branch mới để phát triển một tính năng mới:

1. Tạo branch mới:
   ```bash
   git branch new_feature
   ```
2. Chuyển đổi sang branch mới:
   ```bash
   git checkout new_feature
   ```
3. Thực hiện các thay đổi và commit trên branch mới.
4. Sau khi hoàn thành, chuyển về branch chính (ví dụ: `main` hoặc `master`):
   ```bash
   git checkout main
   ```
5. Merge branch mới vào branch chính:
   ```bash
   git merge new_feature
   ```

Branch cho phép bạn làm việc độc lập trên các tính năng hoặc phiên bản cụ thể mà không ảnh hưởng đến phiên bản chính của dự án, tạo điều kiện thuận lợi cho việc quản lý và phát triển dự án phức tạp.

---
