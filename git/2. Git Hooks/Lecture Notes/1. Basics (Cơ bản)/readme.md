Một số khái niệm cơ bản về Git hooks mà bạn cần biết:

---

### 1. **Hooks là gì?**

- **Git hooks** là các scripts được thực thi tự động khi các sự kiện cụ thể xảy ra trong quá trình làm việc với Git, như commit, push, merge.

---

### 2. **Loại hooks cơ bản:**

- **Pre-commit hooks**: Chạy trước khi commit được thực hiện.
- **Pre-receive hooks**: Chạy trước khi remote repository nhận commit.
- **Post-commit hooks**: Chạy sau khi commit được thực hiện.
- **Post-receive hooks**: Chạy sau khi remote repository đã nhận commit.

---

### 3. **Vị trí lưu trữ hooks:**

- Các hooks được lưu trữ trong thư mục `.git/hooks` trong local repository của bạn.

---

### 4. **Cách hoạt động:**

- Git sẽ chạy các script có tên cụ thể tương ứng với sự kiện xảy ra. Ví dụ: `pre-commit`, `post-commit`, và nếu script có quay trở lại là 0, thì Git tiếp tục sự kiện, nếu không, nó sẽ dừng lại với lỗi tương ứng.

---

### 5. **Viết hooks:**

- Sử dụng các ngôn ngữ script như Bash, Python để viết logic trong các hooks.
- Đảm bảo hooks có quyền thực thi bằng cách sử dụng lệnh `chmod +x <tên_script>`.

---

### 6. **Cảnh báo khi sử dụng hooks:**

- Hooks là scripts local, không được chia sẻ tự động với remote repository.
- Cẩn thận khi sử dụng hooks, chúng có thể ảnh hưởng đến quá trình làm việc với Git của bạn.

---

### 7. **Một số ví dụ:**

- **Pre-commit hook**: Kiểm tra xem có file .txt nào không được thêm vào commit hay không.
- **Post-commit hook**: Hiển thị thông báo sau mỗi commit.

---

### 8. **Mục tiêu sử dụng Git hooks:**

- Tự động hóa quy trình làm việc, như kiểm tra code, định dạng code, ngăn chặn commit không hợp lệ.

---