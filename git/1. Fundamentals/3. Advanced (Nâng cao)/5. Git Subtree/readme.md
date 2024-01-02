**Khái niệm:**

- `Git Subtree` là một tính năng trong Git cho phép bạn tích hợp một repository Git khác vào dự án hiện tại dưới dạng một thư mục con của repository chính. Nó cho phép quản lý codebase phức tạp hơn, tích hợp các project riêng lẻ vào một dự án lớn hơn.

---

**Ngữ cảnh:**

- Khi bạn phát triển một dự án lớn mà cần sử dụng code từ các repository khác hoặc module riêng biệt, `Git Subtree` giúp bạn tích hợp các project này vào một thư mục con trong dự án hiện tại mà không cần phải làm việc trên nhiều repository.

---

**Cách sử dụng và ví dụ lệnh:**

1. **Thêm một subtree vào repository:**

   - **Khái niệm:**

     ```bash
     git subtree add --prefix=<prefix> <repository> <branch> --squash
     ```

     - `<prefix>`: Đường dẫn thư mục con trong repository hiện tại.
     - `<repository>`: Đường dẫn đến repository bạn muốn tích hợp.
     - `<branch>`: Nhánh trong repository bạn muốn tích hợp.
     - `--squash`: Gộp tất cả các commit của repository con thành một commit duy nhất.

   - **Ví dụ:**
     ```bash
     git subtree add --prefix=libs/utility https://github.com/example/utility.git main --squash
     ```
     Lệnh này sẽ thêm repository từ `https://github.com/example/utility.git` vào thư mục `libs/utility` trong repository hiện tại, chỉ ghi lại một commit tổng hợp.

2. **Cập nhật subtree từ repository con:**

   - **Khái niệm:**

     ```bash
     git subtree pull --prefix=<prefix> <repository> <branch> --squash
     ```

     - `<prefix>`: Đường dẫn thư mục con trong repository hiện tại.
     - `<repository>`: Đường dẫn đến repository bạn muốn cập nhật từ.
     - `<branch>`: Nhánh trong repository bạn muốn cập nhật từ.
     - `--squash`: Gộp tất cả các commit của repository con thành một commit duy nhất.

   - **Ví dụ:**
     ```bash
     git subtree pull --prefix=libs/utility https://github.com/example/utility.git main --squash
     ```
     Lệnh này sẽ cập nhật thư mục `libs/utility` trong repository hiện tại từ nhánh `main` của `https://github.com/example/utility.git` và gộp tất cả các commit thành một commit duy nhất.

3. **Push các thay đổi trong subtree lên repository con:**

   - **Khái niệm:**

     ```bash
     git subtree push --prefix=<prefix> <repository> <branch>
     ```

     - `<prefix>`: Đường dẫn thư mục con trong repository hiện tại.
     - `<repository>`: Đường dẫn đến repository bạn muốn đẩy các thay đổi lên.
     - `<branch>`: Nhánh trong repository bạn muốn đẩy các thay đổi lên.

   - **Ví dụ:**
     ```bash
     git subtree push --prefix=libs/utility https://github.com/example/utility.git main
     ```
     Lệnh này sẽ đẩy các thay đổi từ thư mục `libs/utility` trong repository hiện tại lên nhánh `main` của `https://github.com/example/utility.git`.

---

`Git Subtree` là một công cụ hữu ích để tích hợp các project khác vào một repository lớn hơn. Tuy nhiên, việc quản lý các thay đổi giữa các thư mục con và repository chính cần phải được thực hiện cẩn thận để tránh xung đột và hiểu rõ về quá trình tích hợp này.

---
