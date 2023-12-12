Pre-commit hooks là các tập lệnh hoặc mã được thực thi tự động trước khi một commit thực sự được thực hiện trong Git. Chúng là một phần quan trọng trong việc kiểm soát chất lượng mã và đảm bảo rằng các thay đổi sẽ tuân theo các tiêu chuẩn hoặc quy tắc nhất định trước khi được lưu trữ trong repository.

---

### Ngữ cảnh:

- Pre-commit hooks được sử dụng để thực hiện các kiểm tra tự động trước khi commit. Điều này có thể bao gồm kiểm tra cú pháp, quy tắc coding, xác nhận sự tồn tại của tệp đã thay đổi, hay bất kỳ kiểm tra nào khác cần thiết để đảm bảo chất lượng mã trước khi lưu trữ nó.

--

### Cách sử dụng:

Để tạo và sử dụng pre-commit hooks trong Git, bạn có thể thực hiện các bước sau:

1. **Di chuyển đến thư mục hooks:** Mở terminal hoặc command prompt và di chuyển đến thư mục `.git/hooks` trong repository của bạn.

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

4. **Kiểm tra pre-commit hook:** Bạn có thể thực hiện một commit để kiểm tra xem pre-commit hook có hoạt động không. Nếu có lỗi, commit sẽ bị ngăn chặn và bạn sẽ nhận được thông báo lỗi.

---

Ví dụ trên chỉ là một trong những cách sử dụng pre-commit hooks. Bạn có thể tùy chỉnh chúng để thực hiện các kiểm tra khác nhau dựa trên nhu cầu cụ thể của dự án hoặc team phát triển. Một số kiểm tra phổ biến khác có thể bao gồm kiểm tra định dạng code, kiểm tra tự động việc cập nhật tài liệu, hoặc bất kỳ kiểm tra nào khác mà team của bạn cần thực hiện trước khi commit.

---
