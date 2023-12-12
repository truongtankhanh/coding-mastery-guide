**Khái niệm:**

- **Tag:** Trong hệ thống kiểm soát phiên bản như Git, tag là một cách đánh dấu (label) trạng thái cụ thể của mã nguồn tại một thời điểm nhất định. Tag thường được sử dụng để đánh dấu các phiên bản phát hành, các bản vá lỗi, hoặc các điểm cố định trong lịch sử của dự án.

---

**Ngữ cảnh:**

- Tag là một cách để gắn nhãn cho một snapshot cụ thể của repository, giúp dễ dàng xác định và quay trở lại các phiên bản hoặc điểm cố định trong quá trình phát triển dự án. Các tag thường được sử dụng trong quá trình quản lý version để đảm bảo tính ổn định và theo dõi sự phát triển của mã nguồn.

---

**Cách sử dụng:**

- **Tạo Tag:**

  - Để tạo một tag mới, bạn sử dụng lệnh `git tag` kèm theo tên tag và commit ID mà bạn muốn đánh dấu.
    ```bash
    git tag <tag_name> <commit_id>
    ```
    Ví dụ: `git tag v1.0 3a2ffce` tạo một tag với tên `v1.0` trỏ tới commit với ID là `3a2ffce`.

- **Xem Danh Sách Tag:**

  - Để xem danh sách các tag trong repository:
    ```bash
    git tag
    ```

- **Xóa Tag:**

  - Để xóa một tag:
    ```bash
    git tag -d <tag_name>
    ```
    Ví dụ: `git tag -d v1.0` xóa tag có tên `v1.0`.

- **Push Tag Lên Remote Repository:**
  - Để đẩy tag từ local repository lên remote repository:
    ```bash
    git push <remote_name> <tag_name>
    ```
    Ví dụ: `git push origin v1.0`.

**Ví dụ:**

1. **Tạo Tag:**

   ```bash
   git tag v1.0 3a2ffce
   ```

   Tạo một tag với tên `v1.0` trỏ tới commit có ID là `3a2ffce`.

2. **Xem Danh Sách Tag:**

   ```bash
   git tag
   ```

   Hiển thị danh sách các tag có trong repository.

3. **Xóa Tag:**

   ```bash
   git tag -d v1.0
   ```

   Xóa tag có tên `v1.0`.

4. **Push Tag Lên Remote Repository:**
   ```bash
   git push origin v1.0
   ```
   Đẩy tag `v1.0` từ local repository lên remote repository (origin).

Tag là một cách hiệu quả để đánh dấu và quản lý các phiên bản, bản vá lỗi hoặc các điểm cố định quan trọng trong quá trình phát triển phần mềm.

---
