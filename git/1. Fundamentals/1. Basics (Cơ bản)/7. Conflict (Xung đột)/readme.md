**Khái niệm:**

- Conflict (Xung đột) xảy ra trong hệ thống kiểm soát phiên bản (VCS) khi hai phiên bản của cùng một tệp tin hoặc dòng mã bị sửa đổi mà không thể hợp nhất một cách tự động. Xung đột xuất hiện khi Git không thể tự động hòa nhập các thay đổi từ hai nguồn khác nhau.

---

**Ngữ cảnh:**

- Xung đột thường xảy ra khi hai người cùng làm việc trên cùng một tệp tin hoặc cùng một dòng mã, và cả hai đã thực hiện các thay đổi khác nhau mà không thể hòa nhập tự động.

---

**Cách sử dụng:**

1. **Xác định xung đột:**

   - Khi bạn thực hiện `git pull` hoặc `git merge` và có xung đột, Git sẽ thông báo về xung đột và không thể tự động hòa nhập.

2. **Xử lý xung đột:**

   - Để xử lý xung đột, bạn cần mở tệp tin bị xung đột bằng trình soạn thảo văn bản và xem xét các đoạn mã bị xung đột.
   - Git sẽ thêm đánh dấu xung đột vào các đoạn mã trong tệp tin để bạn có thể thấy các phần bị xung đột.
   - Bạn cần chọn phiên bản nào phù hợp hoặc kết hợp hai phiên bản lại với nhau để giải quyết xung đột.

3. **Giải quyết xung đột và commit:**
   - Sau khi giải quyết xung đột, bạn cần thêm lại tệp tin đã sửa đổi vào vùng staging sử dụng `git add <filename>`.
   - Tiếp theo, commit các thay đổi đã giải quyết xung đột bằng `git commit`.

---

**Ví dụ:**
Giả sử hai người cùng làm việc trên cùng một tệp tin và xảy ra xung đột:

1. Thực hiện `git pull` hoặc `git merge` và nhận thông báo về xung đột.
2. Mở tệp tin bị xung đột bằng trình soạn thảo văn bản và xử lý xung đột bằng cách chỉnh sửa các đoạn mã bị xung đột.
3. Thêm tệp tin đã giải quyết xung đột vào staging area:
   ```bash
   git add <filename>
   ```
4. Commit các thay đổi đã giải quyết xung đột:
   ```bash
   git commit -m "Resolved conflict in <filename>"
   ```

Xung đột là một phần không thể tránh khỏi trong quá trình làm việc đồng thời trên cùng một tệp tin hoặc dòng mã. Quan trọng nhất là cách bạn giải quyết và hòa nhập các thay đổi để duy trì tính nhất quán và chất lượng của mã nguồn.

---
