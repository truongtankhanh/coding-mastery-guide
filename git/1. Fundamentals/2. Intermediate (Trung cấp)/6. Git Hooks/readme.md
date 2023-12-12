**Khái niệm:**

- Git Hooks là các kịch bản (scripts) được kích hoạt tự động trong Git khi một sự kiện cụ thể xảy ra trong quá trình làm việc với repository. Chúng cung cấp một cơ chế mở rộng để thực hiện các tác vụ tự động trước hoặc sau một số hành động như commit, merge, hoặc push.

---

**Ngữ cảnh:**

- Git Hooks được sử dụng để tự động hóa các quy trình kiểm tra, kiểm soát chất lượng mã nguồn, triển khai tự động, hay thậm chí chặn những hành động không mong muốn như commit code chưa đúng chuẩn. Chúng giúp cải thiện quy trình làm việc của nhóm và đảm bảo chất lượng mã nguồn.

---

**Cách sử dụng:**

1. **Định vị thư mục hooks:**
   Trong thư mục `.git` của repository, có một thư mục tên là `hooks` chứa các tập tin script hooks mẫu.

2. **Tạo hoặc chỉnh sửa Git Hooks:**

   - Tạo một tệp tin script trong thư mục `hooks` với tên tương ứng với hook bạn muốn kích hoạt (ví dụ: `pre-commit`, `post-commit`).
   - Script hook phải có quyền thực thi (`chmod +x <tên_script>` trên Unix-like systems).

3. **Sử dụng các sự kiện hooks:**
   Các hooks có tên có liên quan đến các sự kiện cụ thể. Ví dụ:

   - `pre-commit`: Chạy trước khi commit diễn ra.
   - `post-commit`: Chạy sau khi commit diễn ra.
   - `pre-push`: Chạy trước khi push diễn ra.
   - ...

4. **Xử lý logic trong script hook:**
   - Sử dụng ngôn ngữ kịch bản (bash, python, ruby, v.v.) để viết logic kiểm tra, xử lý hoặc thông báo.
   - Trả về giá trị 0 để tiếp tục thực hiện hành động, hoặc giá trị khác để ngăn chặn hành động đó.

---

**Ví dụ:**

1. **Tạo pre-commit hook:**

   - Trong thư mục `.git/hooks`, tạo hoặc chỉnh sửa tệp tin `pre-commit`.
   - Đảm bảo script có quyền thực thi:
     ```bash
     chmod +x pre-commit
     ```
   - Script `pre-commit` có thể chứa các kiểm tra code style, kiểm tra unit test trước khi commit.
   - Ví dụ một đoạn script pre-commit kiểm tra cú pháp Python:

     ```bash
     #!/bin/bash

     echo "Running pre-commit hook..."

     if ! pylint --output-format=text *.py; then
         echo "Linting failed, please fix the issues before commit."
         exit 1
     fi
     ```

   - Khi bạn thực hiện commit, hook này sẽ chạy `pylint` để kiểm tra cú pháp Python trước khi cho phép commit.

2. **Sử dụng hook mẫu:**
   - Trong thư mục `.git/hooks`, có các tệp tin mẫu (ví dụ: `pre-commit.sample`, `post-commit.sample`).
   - Bạn có thể sao chép tệp mẫu và đổi tên thành tên tương ứng với hook bạn muốn sử dụng, sau đó chỉnh sửa nội dung theo nhu cầu của dự án.

---

Git Hooks là một cách mạnh mẽ để tự động hóa các quy trình trong quá trình làm việc với repository Git, giúp tăng cường quản lý mã nguồn và đảm bảo chất lượng của dự án.

---
