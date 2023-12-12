Pre-receive hooks là các kịch bản hoặc mã lệnh được thực thi trước khi các thay đổi được nhận và áp dụng vào repository từ một hoạt động như push. Chúng được thực hiện trên máy chủ Git trước khi dữ liệu được chấp nhận và lưu trữ trong repository chính.

---

### Ngữ cảnh:

- Pre-receive hooks được sử dụng để kiểm tra và xác định xem các thay đổi nhất định có đáng được chấp nhận hay không trước khi chúng được áp dụng vào repository chính. Điều này cho phép quản trị viên thiết lập các quy tắc cụ thể, chẳng hạn như yêu cầu phê duyệt từ các nguồn tin cậy trước khi chấp nhận các thay đổi, kiểm tra tính hợp lệ của mã nguồn, hoặc áp dụng bất kỳ quy tắc nào phù hợp với quy trình làm việc của team.

---

### Cách sử dụng:

Để tạo và sử dụng pre-receive hooks trong Git, thực hiện các bước sau:

1. **Truy cập vào thư mục hooks trên máy chủ Git:** Đây là thư mục hooks trên máy chủ Git mà bạn quản lý. Đường dẫn có thể là `/path/to/your/repo.git/hooks`.

2. **Tạo hoặc chỉnh sửa pre-receive hook:** Tạo hoặc chỉnh sửa tập tin `pre-receive` và thêm mã lệnh kiểm tra bạn muốn thực thi trước khi áp dụng các thay đổi vào repository. Ví dụ:

```bash
#!/bin/bash

# Kiểm tra sự hợp lệ của các thay đổi
while read oldrev newrev refname; do
    # Check các thay đổi giữa oldrev và newrev
    if ! git diff --name-only $oldrev $newrev | grep -q "quy_tac_cu_the"; then
        echo "Các thay đổi không tuân theo quy tắc cụ thể."
        exit 1
    fi
done
```

3. **Lưu và cấp quyền thực thi:** Lưu tập tin và cấp quyền thực thi cho nó bằng lệnh `chmod +x pre-receive`.

4. **Kiểm tra pre-receive hook:** Thực hiện hoạt động push từ một máy client đến máy chủ Git. Pre-receive hook sẽ được kích hoạt và kiểm tra các thay đổi được gửi đến repository. Nếu có bất kỳ điều kiện nào không đáp ứng, push sẽ bị từ chối và bạn sẽ nhận được thông báo lỗi.

---

Pre-receive hooks có thể được sử dụng để triển khai các chính sách an toàn, kiểm tra tính hợp lệ của các thay đổi, hoặc bất kỳ quy tắc nào phù hợp với quy trình làm việc của team. Điều này giúp bảo vệ repository chính khỏi những thay đổi không mong muốn hoặc không hợp lý.

---
