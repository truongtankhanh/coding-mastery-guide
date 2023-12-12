**Khái niệm:**

- **.gitignore:** Đây là một tệp tin đặc biệt trong hệ thống kiểm soát phiên bản Git được sử dụng để chỉ định các tệp tin và thư mục mà Git sẽ bỏ qua khi theo dõi thay đổi (tracking) trong repository. Các tệp tin và thư mục được liệt kê trong tệp .gitignore sẽ không được Git theo dõi, không hiển thị trong trạng thái không gian làm việc (untracked), và không được đề xuất khi commit.

---

**Ngữ cảnh:**

- Tệp tin .gitignore thường được sử dụng để loại bỏ các tệp tin hoặc thư mục không mong muốn khỏi repository. Điều này bao gồm các tệp tin tạm thời, dữ liệu tạo ra tự động, thư mục build, cài đặt hệ thống, hay bất kỳ thông tin nhạy cảm nào không nên được chia sẻ hoặc theo dõi bởi hệ thống kiểm soát phiên bản.

---

**Cách sử dụng:**

- **Thêm Tệp tin và Thư mục vào .gitignore:**

  - Bạn có thể mở tệp tin .gitignore trong trình soạn thảo văn bản và thêm tên các tệp tin hoặc thư mục mà bạn muốn bỏ qua. Ví dụ:

    ```plaintext
    # Bỏ qua tất cả các tệp .log
    *.log

    # Bỏ qua thư mục build
    build/

    # Bỏ qua tệp secret.txt
    secret.txt
    ```

- **Sử dụng Wildcards:**

  - Bạn có thể sử dụng wildcards như `*` để áp dụng cho nhiều tệp tin cùng một định dạng hoặc `!` để loại trừ một tệp tin cụ thể. Ví dụ:
    ```plaintext
    # Bỏ qua tất cả các tệp .log ngoại trừ error.log
    *.log
    !error.log
    ```

- **Cách Sử Dụng Đường Dẫn Tuyệt Đối hoặc Tương Đối:**

  - Bạn cũng có thể sử dụng đường dẫn tuyệt đối hoặc tương đối đến tệp tin hoặc thư mục mà bạn muốn bỏ qua. Ví dụ:

    ```plaintext
    # Bỏ qua tệp và thư mục trong thư mục logs
    /logs/

    # Bỏ qua tệp cụ thể
    /config/database.yml
    ```

---

**Ví dụ:**

Một ví dụ về .gitignore:

```plaintext
# Bỏ qua tất cả các tệp .log
*.log

# Bỏ qua thư mục build
/build/

# Bỏ qua tệp secret.txt
secret.txt
```

Tệp tin .gitignore này sẽ loại bỏ các tệp có đuôi .log, thư mục build, và tệp secret.txt khỏi việc theo dõi của Git.

.gitignore rất hữu ích để loại bỏ các tệp và thư mục không cần thiết khỏi quá trình theo dõi của Git, giúp làm sạch lịch sử commit và trạng thái làm việc.

---
