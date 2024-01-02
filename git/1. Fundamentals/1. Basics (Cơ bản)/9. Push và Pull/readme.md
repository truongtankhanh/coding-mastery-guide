**Khái niệm:**

- **Push:** Là quá trình đẩy các thay đổi từ local repository của bạn lên remote repository. Khi bạn đã commit các thay đổi ở local repository, bạn có thể sử dụng push để cập nhật remote repository với những thay đổi mới.

- **Pull:** Là quá trình kéo các thay đổi từ remote repository về local repository. Khi có những thay đổi mới ở remote repository mà bạn chưa có ở local repository, bạn sử dụng pull để cập nhật local repository với những thay đổi mới đó.

---

**Ngữ cảnh:**

- Push và pull là hai hành động cơ bản trong quá trình làm việc với hệ thống kiểm soát phiên bản như Git. Khi làm việc trên dự án cùng với nhóm hoặc từ xa, bạn cần push để chia sẻ những thay đổi của bạn với mọi người và pull để cập nhật local repository của mình với những thay đổi mới nhất từ remote repository.

---

**Cách sử dụng:**

- **Push:**

  - Để đẩy các thay đổi từ local repository lên remote repository:
    ```bash
    git push <remote_name> <branch_name>
    ```
  - Ví dụ: `git push origin main`.

- **Pull:**
  - Để kéo (pull) các thay đổi từ remote repository về local repository:
    ```bash
    git pull <remote_name> <branch_name>
    ```
  - Ví dụ: `git pull origin main`.

**Ví dụ:**

1. **Push:**

   ```bash
   git add .  # Thêm tất cả các thay đổi vào staging area
   git commit -m "Thêm tính năng mới"
   git push origin main
   ```

   Đoạn mã trên sẽ thêm tất cả các thay đổi, commit chúng và đẩy chúng lên remote repository (origin) ở nhánh main.

2. **Pull:**
   ```bash
   git pull origin main
   ```
   Đoạn mã trên sẽ kéo các thay đổi mới nhất từ remote repository (origin) ở nhánh main về local repository của bạn.

Push và pull cho phép bạn làm việc cùng nhóm một cách hiệu quả trên cùng một dự án, cập nhật và chia sẻ các thay đổi một cách linh hoạt và thuận tiện.

---
