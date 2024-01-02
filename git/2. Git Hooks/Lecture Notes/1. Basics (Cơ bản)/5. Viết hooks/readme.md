Git hooks là các tập lệnh hoặc mã lệnh được sử dụng để thực hiện các hành động tự động trước hoặc sau khi các sự kiện xảy ra trong quá trình làm việc với Git. Viết Git hooks đòi hỏi bạn tạo hoặc chỉnh sửa các tập tin script để thực hiện những hành động cụ thể bạn mong muốn.

---

### Ngữ cảnh:

- Viết Git hooks cho phép bạn tùy chỉnh hành vi của Git bằng cách thêm các hành động tùy chỉnh trước hoặc sau các sự kiện như commit, push, merge, và nhiều sự kiện khác. Bạn có thể sử dụng Git hooks để thực hiện các kiểm tra, triển khai tự động, thông báo, hoặc bất kỳ hành động nào phù hợp với quy trình làm việc của bạn.

---

### Cách sử dụng:

Để viết Git hooks, bạn cần tuân thủ các bước sau:

1. **Di chuyển đến thư mục hooks trong repository của bạn:** Mở terminal hoặc command prompt và đi đến thư mục `.git/hooks` trong repository.

2. **Tạo hoặc chỉnh sửa hook cụ thể:** Tùy thuộc vào sự kiện mà bạn muốn hook kích hoạt, tạo hoặc chỉnh sửa tập tin script tương ứng. Ví dụ, để tạo một pre-commit hook:

   ```bash
   # Di chuyển đến thư mục hooks
   cd .git/hooks

   # Tạo hoặc chỉnh sửa pre-commit hook
   nano pre-commit
   ```

   Trong tập tin `pre-commit`, bạn có thể viết mã lệnh cho các kiểm tra hoặc hành động trước khi commit.

3. **Lưu và cấp quyền thực thi cho hook:** Lưu tập tin và đảm bảo rằng nó được cấp quyền thực thi. Sử dụng lệnh `chmod +x pre-commit` (thay thế `pre-commit` bằng tên hook bạn đang sử dụng) để cấp quyền thực thi.

4. **Kiểm tra hook:** Thực hiện hành động trigger hook để kiểm tra xem nó hoạt động như mong đợi hay không. Ví dụ, nếu bạn chỉnh sửa pre-commit hook, thực hiện một commit và xem xét kết quả.

---

Viết Git hooks cho phép bạn tùy chỉnh quy trình làm việc với Git và tự động hóa các tác vụ quan trọng. Bạn có thể tận dụng chúng để thực hiện các hành động cụ thể phù hợp với quy trình phát triển và quản lý mã nguồn của bạn.

---
