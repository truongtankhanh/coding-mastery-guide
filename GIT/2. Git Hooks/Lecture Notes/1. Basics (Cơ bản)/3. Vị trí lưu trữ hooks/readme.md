Hooks trong Git là các tập lệnh hoặc mã lệnh được thiết lập để tự động thực thi khi các sự kiện nhất định xảy ra trong quá trình làm việc với Git. Các hooks này giúp thực hiện các hành động tùy chỉnh trước hoặc sau khi các sự kiện như commit, push, merge diễn ra.

---

### Vị trí lưu trữ hooks:

- Các hooks được lưu trữ trong thư mục `.git/hooks` bên trong repository của bạn. Đây là thư mục mặc định để Git tìm kiếm và thực thi các hooks.

---

### Ngữ cảnh:

- Thư mục `.git/hooks` chứa các tập lệnh mẫu cho các hooks khác nhau, ví dụ như `pre-commit`, `post-commit`, `pre-receive`, `post-receive`, và nhiều loại hooks khác. Bạn có thể tạo hoặc chỉnh sửa các tập lệnh trong thư mục này để tùy chỉnh hành vi của Git tương ứng với các sự kiện cụ thể.

---

### Cách sử dụng:

Để sử dụng hooks, bạn có thể thực hiện các bước sau:

1. **Di chuyển đến thư mục hooks trong repository của bạn:** Mở terminal hoặc command prompt và đi đến thư mục `.git/hooks` bên trong repository của bạn.

2. **Tạo hoặc chỉnh sửa hook:** Bạn có thể tạo hoặc chỉnh sửa các tập tin script cho các hooks cụ thể mà bạn muốn sử dụng. Ví dụ, để tạo một pre-commit hook:

   ```bash
   # Di chuyển đến thư mục hooks
   cd .git/hooks

   # Tạo hoặc chỉnh sửa pre-commit hook
   nano pre-commit
   ```

   Trong tập tin `pre-commit`, bạn có thể viết mã lệnh cho các kiểm tra mà bạn muốn thực hiện trước khi commit.

3. **Lưu và cấp quyền thực thi cho hook:** Lưu tập tin và đảm bảo rằng nó được cấp quyền thực thi. Sử dụng lệnh `chmod +x pre-commit` (thay thế `pre-commit` bằng tên hook bạn đang sử dụng) để cấp quyền thực thi.

4. **Kiểm tra hook:** Thực hiện hành động trigger hook để kiểm tra xem nó hoạt động như mong đợi hay không. Ví dụ, nếu bạn chỉnh sửa pre-commit hook, thực hiện một commit và xem xét kết quả.

---

Hooks trong `.git/hooks` là một phần mở rộng mạnh mẽ của Git, cho phép bạn tùy chỉnh quy trình làm việc với mã nguồn của mình và thực hiện tự động hóa các hành động quan trọng trong quy trình phát triển.

---
