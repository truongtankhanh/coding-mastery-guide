Hooks trong Git là các kịch bản hay đoạn mã được thiết lập để tự động thực thi trước hoặc sau khi các sự kiện cụ thể xảy ra trong quá trình làm việc với Git. Những sự kiện này có thể là commit, push, merge, hoặc bất kỳ hành động nào khác trong vòng đời của repository.

---

### Ngữ cảnh:

- Git hooks được sử dụng để mở rộng khả năng của Git bằng cách thêm các hành động tùy chỉnh trong quá trình thực hiện các hoạt động như commit, push và merge. Chúng cho phép tự động thực hiện các kiểm tra, thông báo, triển khai, hoặc bất kỳ tác vụ nào khác mà bạn muốn thực hiện trong quy trình làm việc với Git.

---

### Cách hoạt động:

- Các hooks trong Git được lưu trữ trong thư mục `.git/hooks` trong repository của bạn. Khi bạn tạo hoặc sửa đổi một hook và cấp quyền thực thi cho nó, Git sẽ tự động kích hoạt hook đó khi xảy ra sự kiện tương ứng.

---

Ví dụ, nếu bạn tạo một pre-commit hook và cấp quyền thực thi cho nó trong `.git/hooks`, hook đó sẽ được kích hoạt trước khi commit diễn ra. Bạn có thể kiểm tra mã nguồn, định dạng code, hoặc thực hiện bất kỳ hành động nào khác trước khi Git tiến hành commit.

### Ví dụ:

1. **Tạo pre-commit hook:** Mở terminal và di chuyển đến thư mục `.git/hooks` trong repository của bạn.
2. **Tạo hoặc chỉnh sửa pre-commit hook:** Tạo hoặc chỉnh sửa tập tin `pre-commit` và thêm mã lệnh kiểm tra bạn muốn thực thi trước khi commit. Ví dụ:

```bash
#!/bin/bash

# Kiểm tra mã với linter (ví dụ: ESLint cho JavaScript)
eslint .

# Kiểm tra sự tồn tại của các tệp đã thay đổi
git diff --cached --quiet || {
    echo "Có sự thay đổi chưa được commit. Hãy kiểm tra lại."
    exit 1
}

# Nếu có lỗi, dừng quá trình commit và hiển thị thông báo lỗi
```

3. **Lưu và cấp quyền thực thi:** Lưu tập tin và cấp quyền thực thi cho nó bằng lệnh `chmod +x pre-commit`.

---

Khi bạn thực hiện commit, Git sẽ tự động kích hoạt pre-commit hook này trước khi commit thực sự diễn ra. Nếu có lỗi hoặc mã không tuân theo quy tắc, quá trình commit sẽ bị ngăn chặn và bạn sẽ nhận được thông báo lỗi. Điều này cho thấy cách hooks trong Git hoạt động và có thể được sử dụng để tùy chỉnh và kiểm soát quá trình làm việc với repository của bạn.

---
