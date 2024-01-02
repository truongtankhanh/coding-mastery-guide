Git hooks là các scripts tự động được chạy khi các sự kiện xảy ra trong quá trình làm việc với Git, như commit, push, hoặc merge. Đây là một cách mạnh mẽ để tùy chỉnh và tự động hóa các công việc trong quá trình phát triển phần mềm. Hãy bắt đầu từ cơ bản:

---

### Các loại Git hooks cơ bản:

1. **Pre-commit hooks**: Chạy trước khi commit được thực hiện.
2. **Pre-receive hooks**: Chạy trước khi remote repository nhận commit.
3. **Post-commit hooks**: Chạy sau khi commit được thực hiện.
4. **Post-receive hooks**: Chạy sau khi remote repository đã nhận commit.

---

### Cách sử dụng Git hooks:

1. **Định nghĩa hooks**: Điều này thường được thực hiện bằng cách tạo các scripts và đặt chúng trong thư mục `.git/hooks` trong local repository của bạn. Tên của các file script phải phù hợp với tên hook và không có đuôi file.
2. **Phân quyền cho hooks**: Đảm bảo rằng các scripts hook có quyền thực thi bằng cách sử dụng lệnh `chmod +x <tên_script>`.

3. **Viết logic trong hooks**: Sử dụng các ngôn ngữ như Bash, Python, hoặc bất kỳ ngôn ngữ script nào bạn thích để thực hiện công việc cần thiết, như kiểm tra mã nguồn, chạy tests, hoặc tự động định dạng code trước khi commit.

---

### Ví dụ:

#### Pre-commit hook:

```bash
#!/bin/bash

# Kiểm tra xem có file .txt nào không được thêm vào commit hay không
for file in $(git diff --cached --name-only); do
    if [[ $file == *.txt ]]; then
        echo "Không thể commit file .txt. Vui lòng loại bỏ chúng hoặc thay đổi commit."
        exit 1
    fi
done
exit 0
```

---

#### Post-commit hook:

```bash
#!/bin/bash

# Hiển thị thông báo sau mỗi commit
echo "Commit thành công!"
```

---

### Lưu ý:

- Hooks là scripts local, nên không được chia sẻ tự động với các remote repository.
- Cẩn thận khi sử dụng hooks, chúng có thể ảnh hưởng đến quá trình làm việc với Git của bạn.

---

Điều này chỉ là một cái nhìn tổng quan về Git hooks. Khi bạn muốn đi sâu hơn, có thể tùy chỉnh và tự động hóa nhiều hơn với hooks để phù hợp với quy trình làm việc cụ thể của bạn.

---
