Git Hooks là các kịch bản hoặc mã lệnh tùy chỉnh có thể được thực thi tự động khi các sự kiện xảy ra trong quá trình làm việc với Git. Các sự kiện này có thể là các hành động như commit, push, merge, và các sự kiện khác trong quá trình quản lý mã nguồn.

---

### Ngữ cảnh:

- Git Hooks được sử dụng để tăng cường quy trình làm việc với Git bằng cách thêm các hành động tùy chỉnh trước hoặc sau khi các sự kiện cụ thể xảy ra. Điều này cho phép các nhà phát triển thực hiện các hành động tự động, như kiểm tra mã, tự động định dạng code, thông báo hoặc cập nhật các tập tin khác liên quan khi có thay đổi, và nhiều hành động khác.

---

### Cách sử dụng:

- Để sử dụng Git Hooks, bạn cần đi đến thư mục `.git/hooks` trong repository của bạn. Git có sẵn một số lệnh mẫu (có tiền tố là `pre-` hoặc `post-`) mà bạn có thể sử dụng hoặc bạn có thể tạo các tập tin shell script hoặc bất kỳ mã lệnh nào tùy chỉnh bạn muốn thực thi.

---

Ví dụ, để thêm một Git Hook trước khi thực hiện commit để kiểm tra xem mã của bạn có tuân theo các quy tắc coding hay không, bạn có thể tạo một tập tin pre-commit script như sau:

1. Mở terminal hoặc command prompt.
2. Di chuyển đến thư mục `.git/hooks` trong repository của bạn.
3. Tạo hoặc chỉnh sửa tập tin `pre-commit` và thêm mã lệnh kiểm tra mã của bạn. Ví dụ:

```bash
#!/bin/bash

# Kiểm tra mã với linter (vd: ESLint cho JavaScript)
eslint .

# Kiểm tra sự tồn tại của các tập tin đã thay đổi
git diff --cached --quiet || {
    echo "Có sự thay đổi chưa được commit. Hãy kiểm tra lại."
    exit 1
}

# Nếu có lỗi, dừng quá trình commit và hiển thị thông báo lỗi
```

4. Lưu tập tin và cấp quyền thực thi cho nó bằng lệnh `chmod +x pre-commit`.

---

Khi bạn thực hiện commit, Git sẽ tự động thực thi mã lệnh trong tập tin `pre-commit` trước khi commit thực sự diễn ra. Nếu có lỗi hoặc mã không tuân theo quy tắc, quá trình commit sẽ bị ngăn chặn và bạn sẽ nhận được thông báo lỗi.

Đây chỉ là một ví dụ cơ bản về cách sử dụng Git Hooks. Bạn có thể tùy chỉnh chúng theo nhu cầu cụ thể của dự án hoặc team phát triển của mình.

---
