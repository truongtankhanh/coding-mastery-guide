**Khái niệm:**

- Repository, hay kho mã nguồn, là nơi lưu trữ toàn bộ mã nguồn, tài liệu, và các thông tin liên quan đến một dự án phần mềm. Nó chứa lịch sử của tất cả các thay đổi trong mã nguồn, cho phép nhóm phát triển làm việc cùng nhau, theo dõi sự thay đổi, và duy trì phiên bản cụ thể của dự án.

---

**Ngữ cảnh:**

- Repository được sử dụng rộng rãi trong phát triển phần mềm, từ các dự án cá nhân đến các tổ chức lớn. Các loại repository có thể là public (công khai) hoặc private (riêng tư), và chúng thường được lưu trữ trên các nền tảng như GitHub, GitLab, Bitbucket, hay các máy chủ tự triển khai.

---

**Cách sử dụng:**

1. **Tạo một repository mới:**

   - Trên GitHub, GitLab, hoặc Bitbucket, bạn có thể tạo repository mới qua giao diện web.
   - Để tạo một repository local mới sử dụng Git, bạn có thể sử dụng lệnh sau:

   ```bash
   git init
   ```

2. **Clone (sao chép) repository từ xa:**

   - Để sao chép một repository từ xa vào máy local, sử dụng lệnh:

   ```bash
   git clone <URL của repository>
   ```

3. **Thêm, commit và push các thay đổi vào repository:**

   - Thêm một tệp tin hoặc thư mục vào vùng staging area:

   ```bash
   git add <filename>
   ```

   - Commit các thay đổi đã staging:

   ```bash
   git commit -m "Message describing the changes"
   ```

   - Đẩy các commit lên repository từ xa:

   ```bash
   git push origin main
   ```

4. **Xem lịch sử và tình trạng của repository:**
   - Xem lịch sử commit:
   ```bash
   git log
   ```
   - Xem tình trạng của working directory và staging area:
   ```bash
   git status
   ```

---

**Ví dụ:**
Giả sử bạn muốn tạo một repository mới trên GitHub và làm việc với nó qua command line:

1. Tạo repository mới trên GitHub.
2. Clone repository đó vào máy local của bạn:
   ```bash
   git clone <URL của repository trên GitHub>
   ```
3. Thêm một tệp tin vào repository và commit thay đổi:
   ```bash
   touch newfile.txt
   git add newfile.txt
   git commit -m "Added newfile.txt"
   ```
4. Đẩy các thay đổi lên repository trên GitHub:
   ```bash
   git push origin main
   ```

Ở đây, `origin` là tên của remote repository trên GitHub và `main` là tên của nhánh bạn đang làm việc.

---
