Git LFS (Large File Storage) là một phần mở rộng của Git để quản lý và lưu trữ các tệp lớn hiệu quả hơn. Đây là một số bước căn bản để bắt đầu với Git LFS:

---

### Bước 1: Cài đặt Git LFS

- Đảm bảo bạn đã cài đặt Git LFS trên máy tính của mình. Bạn có thể tìm bản cài đặt phù hợp với hệ điều hành của mình tại [Git LFS](https://git-lfs.github.com/).

### Bước 2: Khởi tạo kho lưu trữ (repository) với Git LFS

- Tạo một repository mới hoặc sử dụng repository hiện tại của bạn.
- Mở terminal/command prompt và di chuyển đến thư mục của repository.
- Khởi tạo Git LFS trong repository: `git lfs install`

---

### Bước 3: Chọn loại tệp cần lưu trữ bằng Git LFS

- Xác định loại tệp cần sử dụng Git LFS để lưu trữ (ví dụ: các tệp âm thanh, video, hình ảnh lớn).
- Đăng ký loại tệp đó với Git LFS bằng lệnh: `git lfs track "*.extension"`

---

### Bước 4: Làm việc với tệp lớn

- Thêm và commit tệp lớn vào repository: `git add file.extension`, `git commit -m "Add large file"`
- Push các thay đổi lên kho lưu trữ: `git push origin branch-name`

---

### Bước 5: Lấy các tệp lớn từ kho lưu trữ

- Clone repository: `git clone repository-url`
- Các tệp lớn được quản lý bằng Git LFS sẽ được tải tự động khi bạn clone hoặc pull từ kho lưu trữ.

---

### Nâng cao hơn:

- **Quản lý lịch sử:** Xem và quản lý lịch sử của các tệp lớn sử dụng các lệnh git log, git blame.
- **Chuyển đổi tệp đã tồn tại:** Sử dụng `git lfs migrate` để chuyển đổi các tệp đã tồn tại thành Git LFS.
- **Quản lý không gian lưu trữ:** Kiểm tra và quản lý dung lượng lưu trữ sử dụng `git lfs ls-files`, `git lfs prune`.

---

Hãy thử thực hành các bước đơn giản trên và khi bạn muốn hiểu sâu hơn về các chức năng và tùy chọn của Git LFS, đừng ngần ngại đọc tài liệu chính thức hoặc các tài nguyên hướng dẫn trực tuyến khác nhau.

---
