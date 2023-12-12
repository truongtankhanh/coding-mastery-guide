**Khái niệm:**

- Submodule trong Git là một cách để nhúng một repository Git vào một repository Git khác, cho phép bạn duy trì một dự án lớn chứa các dự án con nhỏ hoặc thư viện bên ngoài.

---

**Ngữ cảnh:**

- Submodule thường được sử dụng khi bạn muốn tích hợp một dự án hoặc thư viện bên ngoài vào dự án của mình mà không muốn sao chép mã nguồn hoặc lịch sử commit của dự án bên ngoài vào repository của bạn. Điều này giúp duy trì sự độc lập và quản lý dễ dàng giữa các dự án khác nhau.

---

**Cách sử dụng:**

1. **Thêm Submodule:**

   ```bash
   git submodule add <URL của submodule> <đường dẫn local>
   ```

   - `<URL của submodule>`: Đường dẫn đến repository của submodule.
   - `<đường dẫn local>`: Đường dẫn thư mục trong repository của bạn để lưu trữ submodule.

2. **Khởi tạo và Cập nhật Submodule:**

   ```bash
   git submodule update --init --recursive
   ```

   - `--init`: Khởi tạo submodule nếu chưa được khởi tạo.
   - `--recursive`: Cập nhật tất cả các submodule con nếu có.

3. **Clone Repository với Submodule:**
   Khi bạn clone một repository chứa submodule, bạn cần thêm `--recursive` để đảm bảo submodule cũng được clone.

   ```bash
   git clone --recursive <URL của repository>
   ```

4. **Xóa Submodule:**
   ```bash
   git submodule deinit -f -- <đường dẫn local>
   rm -rf .git/modules/<đường dẫn local>
   git rm -f <đường dẫn local>
   ```

---

**Ví dụ:**

1. **Thêm Submodule:**

   ```bash
   git submodule add https://github.com/username/submodule_folder ./submodule_folder
   ```

   Điều này sẽ thêm submodule từ repository `https://github.com/username/submodule_folder` vào thư mục `./submodule_folder` trong repository của bạn.

2. **Khởi tạo và Cập nhật Submodule:**

   ```bash
   git submodule update --init --recursive
   ```

   Cập nhật và khởi tạo submodule nếu chưa tồn tại.

3. **Xóa Submodule:**
   ```bash
   git submodule deinit -f -- submodule_folder
   rm -rf .git/modules/submodule_folder
   git rm -f submodule_folder
   ```
   Điều này sẽ xóa submodule có tên là `submodule_folder` khỏi repository của bạn.

---

Submodule là một cách mạnh mẽ để tích hợp các dự án con hoặc thư viện vào dự án của bạn một cách linh hoạt, giúp bạn duy trì quản lý dự án hiệu quả và sử dụng mã nguồn một cách có tổ chức.

---
