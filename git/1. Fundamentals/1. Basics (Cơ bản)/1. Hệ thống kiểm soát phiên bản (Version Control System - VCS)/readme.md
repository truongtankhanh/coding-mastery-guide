**Khái niệm:**

- Hệ thống kiểm soát phiên bản (VCS) là một phần mềm hoặc hệ thống quản lý cho phép lưu trữ, theo dõi và quản lý các phiên bản của mã nguồn và các tài liệu trong quá trình phát triển phần mềm. Nó ghi lại lịch sử các thay đổi, cho phép nhóm làm việc cùng nhau mà không gặp xung đột và giúp quản lý các phiên bản khác nhau của dự án.

---

**Ngữ cảnh:**

- Hệ thống kiểm soát phiên bản là công cụ cần thiết trong quá trình phát triển phần mềm. Nó được sử dụng rộng rãi trong lĩnh vực công nghiệp phần mềm, từ dự án nhỏ đến các dự án lớn, và cũng được áp dụng trong các lĩnh vực khác như quản lý tài liệu, nội dung trực tuyến, và thậm chí trong việc quản lý cấu hình hệ thống.

---

**Cách sử dụng:**

- Có nhiều loại VCS, trong đó Git, Subversion (SVN), và Mercurial là những ví dụ phổ biến. Dưới đây là một số lệnh cơ bản trong Git, một trong những VCS phổ biến nhất:

---

1. **Khởi tạo một repository:**

```bash
git init
```

Lệnh này tạo ra một repository Git mới trong thư mục hiện tại.

---

2. **Sao chép một repository từ xa vào local:**

```bash
git clone <URL>
```

Lệnh này sao chép một repository từ một địa chỉ URL (thường là trên GitHub hoặc GitLab) vào máy local của bạn.

---

3. **Thêm tệp tin vào vùng staging area:**

```bash
git add <filename>
```

Lệnh này đưa một hoặc nhiều tệp tin vào vùng staging để chuẩn bị cho việc commit.

---

4. **Commit thay đổi vào repository:**

```bash
git commit -m "Commit message"
```

Lệnh này ghi lại các thay đổi đã được đưa vào vùng staging vào lịch sử của repository với một thông điệp mô tả các thay đổi.

---

5. **Xem lịch sử commit:**

```bash
git log
```

Lệnh này hiển thị lịch sử các commit trong repository.

---

6. **Đẩy thay đổi lên repository từ xa:**

```bash
git push
```

Lệnh này đẩy các commit đã thực hiện từ máy local lên repository từ xa (ví dụ: GitHub).

---

7. **Kéo thay đổi từ repository từ xa về local:**

```bash
git pull
```

Lệnh này kéo các thay đổi mới nhất từ repository từ xa về máy local của bạn.

---

**Ví dụ:**
Giả sử bạn đang làm việc trong một thư mục trống và muốn bắt đầu một dự án mới bằng Git:

1. Khởi tạo một repository mới:

```bash
git init
```

2. Tạo một tệp tin và thêm nó vào vùng staging:

```bash
touch example.txt
git add example.txt
```

3. Commit thay đổi:

```bash
git commit -m "Added example.txt"
```

4. Liên kết repository local với một repository trên GitHub:

```bash
git remote add origin <URL của repository trên GitHub>
```

5. Đẩy các thay đổi lên repository từ xa:

```bash
git push -u origin main
```

Ở đây, `origin` là tên remote repository trên GitHub và `main` là tên của nhánh bạn đang làm việc.

---
