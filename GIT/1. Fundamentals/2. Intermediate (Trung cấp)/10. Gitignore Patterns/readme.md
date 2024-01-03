**Khái niệm:**

- File `.gitignore` là một tệp tin trong Git được sử dụng để chỉ định các pattern (mẫu) các tệp tin hoặc thư mục mà Git sẽ bỏ qua khi theo dõi thay đổi trong repository. Các tệp hoặc thư mục được liệt kê trong `.gitignore` sẽ không xuất hiện trong danh sách untracked files của Git.

---

**Ngữ cảnh:**

- Khi làm việc trong một dự án Git, có những tệp tin hoặc thư mục mà bạn không muốn đưa vào lịch sử commit hay theo dõi sự thay đổi của chúng (ví dụ như file log, tệp cấu hình cục bộ, thư mục output của build), việc sử dụng `.gitignore` là cách để loại bỏ chúng khỏi quá trình theo dõi của Git.

---

**Cách sử dụng:**

1. **Tạo hoặc chỉnh sửa tệp `.gitignore`:**

   - Tạo một tệp tin có tên là `.gitignore` nếu nó chưa tồn tại trong thư mục gốc của repository.
   - Liệt kê các tên tệp hoặc thư mục cần bỏ qua trong `.gitignore`.

2. **Sử dụng các pattern trong `.gitignore`:**

   - `#` dùng để comment trong file `.gitignore`.
   - `*` là wildcard đại diện cho bất kỳ chuỗi ký tự nào.
   - `/` để chỉ định thư mục cụ thể.
   - `!` để phủ định một mẫu đã được định nghĩa.

3. **Ví dụ:**

   - **Bỏ qua tất cả các file `.log` trong toàn bộ repository:**

     ```
     *.log
     ```

   - **Bỏ qua tất cả các thư mục có tên là `build` trong toàn bộ repository:**

     ```
     /build/
     ```

   - **Bỏ qua tệp tin `config.ini` trong thư mục con `settings`:**

     ```
     settings/config.ini
     ```

   - **Loại bỏ tất cả mọi thứ ngoại trừ các tệp có đuôi `.txt` trong thư mục `docs`:**

     ```
     /docs/*
     !/docs/*.txt
     ```

   - **Bỏ qua tất cả các thư mục và tệp trong thư mục `.vscode`:**

     ```
     .vscode/
     ```

   - **Bỏ qua tất cả các tệp `.exe` trong toàn bộ repository:**

     ```
     *.exe
     ```

   - **Bỏ qua tất cả các tệp có tên `config` nhưng không phải là `config.txt`:**
     ```
     config
     !config.txt
     ```

---

Lưu ý rằng tệp `.gitignore` có thể được chia làm nhiều phần nhỏ hoặc được định nghĩa tại các cấp thư mục khác nhau để điều chỉnh các mẫu theo nhu cầu cụ thể của mỗi phần của dự án.

---
