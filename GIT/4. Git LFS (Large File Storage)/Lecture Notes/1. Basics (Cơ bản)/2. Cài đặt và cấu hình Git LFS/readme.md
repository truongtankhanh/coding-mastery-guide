## Cài đặt Git LFS

Để cài đặt Git LFS trên máy tính của bạn, bạn có thể tuân theo các bước sau:

### Trên Windows:

1. **Tải Git LFS:** Truy cập trang web chính thức của Git LFS tại [Git LFS](https://git-lfs.github.com/) và tải xuống bản cài đặt cho Windows.

2. **Cài đặt Git LFS:** Sau khi tải xuống, mở tệp cài đặt và làm theo các bước trình cài đặt thông thường để cài đặt Git LFS trên máy tính của bạn.

3. **Xác nhận cài đặt:** Mở Command Prompt hoặc PowerShell và chạy lệnh sau để xác nhận rằng Git LFS đã được cài đặt thành công:
   ```
   git lfs version
   ```
   Nếu lệnh này trả về phiên bản của Git LFS, điều đó chứng tỏ cài đặt đã thành công.

### Trên macOS:

1. **Sử dụng Homebrew:** Nếu bạn đã cài đặt Homebrew, bạn có thể cài đặt Git LFS thông qua Terminal bằng lệnh sau:

   ```
   brew install git-lfs
   ```

2. **Khởi động Git LFS:** Sau khi cài đặt thành công, bạn cần khởi động Git LFS trên máy tính của bạn bằng lệnh sau:

   ```
   git lfs install
   ```

3. **Xác nhận cài đặt:** Để xác nhận rằng Git LFS đã được cài đặt và khởi động thành công, chạy lệnh:
   ```
   git lfs version
   ```
   Nếu bạn nhận được thông báo về phiên bản của Git LFS, điều này chứng tỏ quá trình cài đặt đã hoàn tất.

### Trên Linux (Ubuntu/Debian):

1. **Cài đặt Git LFS:** Sử dụng Terminal và chạy các lệnh sau để cài đặt Git LFS:

   ```
   sudo apt-get update
   sudo apt-get install git-lfs
   ```

2. **Khởi động Git LFS:** Sau khi cài đặt xong, khởi động Git LFS bằng lệnh sau:

   ```
   git lfs install
   ```

3. **Kiểm tra phiên bản:** Để kiểm tra xem Git LFS đã được cài đặt thành công hay chưa, chạy lệnh:
   ```
   git lfs version
   ```
   Nếu bạn nhận được thông tin về phiên bản của Git LFS, điều này chứng tỏ quá trình cài đặt đã hoàn tất.

### Ví dụ:

Nếu bạn muốn sử dụng Git LFS để quản lý các tệp video _.mp4 trong dự án của mình, sau khi cài đặt Git LFS, bạn có thể sử dụng các lệnh sau để theo dõi các tệp _.mp4:

```
cd path/to/your/git/repository
git lfs install
git lfs track "*.mp4"
git add .gitattributes
git commit -m "Enable Git LFS for video files"
git push origin master
```

Những lệnh này sẽ cài đặt Git LFS trong kho lưu trữ của bạn và cấu hình nó để theo dõi các tệp \*.mp4 bằng Git LFS, thay thế chúng bằng các pointers trong quá trình commit.

---

## Cấu hình repository để sử dụng Git LFS

Để cấu hình một repository để sử dụng Git LFS, bạn cần thực hiện một số bước cụ thể sau:

### Bước 1: Cài đặt Git LFS (nếu chưa có)

- Nếu bạn chưa cài đặt Git LFS trên máy tính của mình, hãy làm theo hướng dẫn cài đặt từ các bước đã được trình bày trước đó.

### Bước 2: Di chuyển đến thư mục của repository

- Sử dụng Command Prompt, Terminal hoặc PowerShell để di chuyển đến thư mục của repository mà bạn muốn cấu hình để sử dụng Git LFS.

  ```
  cd path/to/your/repository
  ```

### Bước 3: Khởi tạo Git LFS trong repository

- Sử dụng lệnh `git lfs install` để khởi tạo Git LFS trong repository của bạn. Lệnh này sẽ cấu hình repository để sử dụng Git LFS cho việc theo dõi các tệp lớn.

  ```
  git lfs install
  ```

### Bước 4: Xác định loại tệp bạn muốn quản lý bằng Git LFS

- Sử dụng lệnh `git lfs track` để xác định loại tệp mà bạn muốn quản lý bằng Git LFS. Ví dụ, để quản lý các tệp video có định dạng \*.mp4, bạn có thể làm như sau:

  ```
  git lfs track "*.mp4"
  ```

- Nếu bạn muốn quản lý nhiều loại tệp khác nhau, chỉ cần thêm các quy tắc `git lfs track` tương ứng cho mỗi loại tệp.

### Bước 5: Commit `.gitattributes`

- Sau khi bạn đã xác định các loại tệp muốn quản lý bằng Git LFS, sử dụng lệnh `git add .gitattributes` để thêm các thay đổi vào staging area.

  ```
  git add .gitattributes
  ```

### Bước 6: Commit và push các thay đổi

- Tiến hành commit các thay đổi vào repository và đẩy chúng lên remote repository.

  ```
  git commit -m "Enable Git LFS for large files"
  git push origin master
  ```

- Khi bạn thực hiện các bước trên, repository của bạn đã được cấu hình để sử dụng Git LFS để quản lý các loại tệp mà bạn đã chỉ định. Điều này sẽ giúp giảm kích thước của kho lưu trữ và tăng tốc độ các hoạt động commit, push và pull đối với các tệp lớn.

Ví dụ cụ thể: Nếu bạn muốn cấu hình repository để quản lý các tệp video \*.mp4 bằng Git LFS, bạn sẽ thực hiện các bước trên và sau đó khi commit các tệp video, Git LFS sẽ thực hiện việc quản lý các tệp lớn này một cách hiệu quả hơn.

---
