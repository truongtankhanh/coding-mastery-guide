**Khái niệm:**

- Merge trong hệ thống kiểm soát phiên bản (VCS) là quá trình kết hợp các thay đổi từ hai branch hoặc nhiều branch khác nhau thành một branch duy nhất. Quá trình này cần phải xử lý một cách thông minh để hòa nhập các thay đổi từ các branch khác nhau mà không gây ra xung đột hoặc mất mát dữ liệu.

---

**Ngữ cảnh:**

- Merge thường được sử dụng khi muốn kết hợp các tính năng hoặc các sửa đổi từ các branch phụ (feature branch) vào branch chính như `main` hoặc `master`. Nó cũng có thể được sử dụng để hợp nhất các thay đổi từ nhiều nguồn khác nhau để tạo ra một phiên bản hoàn chỉnh của dự án.

---

**Cách sử dụng:**

1. **Chuyển đổi sang branch chính:**

   ```bash
   git checkout main
   ```

   Đảm bảo bạn đang ở trên branch chính mà bạn muốn merge các thay đổi vào.

2. **Merge branch phụ vào branch chính:**

   ```bash
   git merge <branch_name>
   ```

   Lệnh này hợp nhất các thay đổi từ branch đã chỉ định vào branch hiện tại (trong trường hợp này là `main`).

3. **Xử lý xung đột (nếu có):**
   Trong một số trường hợp, khi có xung đột giữa các thay đổi trên các branch khác nhau, Git không thể tự động giải quyết xung đột và sẽ yêu cầu người dùng can thiệp để giải quyết xung đột bằng cách chỉnh sửa các tệp tin bị xung đột.

4. **Commit sau khi merge thành công (nếu cần thiết):**
   Sau khi merge thành công và xử lý xung đột, bạn có thể commit lại các thay đổi nếu cần thiết.

---

**Ví dụ:**
Giả sử bạn có một branch phụ `feature_branch` và bạn muốn hợp nhất các thay đổi từ branch này vào branch chính là `main`:

1. Chuyển đổi sang branch chính:
   ```bash
   git checkout main
   ```
2. Merge branch phụ vào branch chính:
   ```bash
   git merge feature_branch
   ```
3. Xử lý xung đột nếu có bằng cách chỉnh sửa các tệp tin bị xung đột.
4. Commit các thay đổi sau khi merge thành công (nếu cần thiết):
   ```bash
   git commit -m "Merge feature_branch into main"
   ```

Merge là một bước quan trọng trong quá trình phát triển, cho phép hợp nhất các tính năng hoặc sửa đổi từ các branch khác nhau một cách linh hoạt và hiệu quả.

---
