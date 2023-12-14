## Thêm và commit tệp lớn

Khi làm việc với các tệp lớn trong Git, việc sử dụng Git LFS giúp quản lý hiệu quả hơn. Để thêm và commit các tệp lớn trong repository sử dụng Git LFS, các bước cụ thể như sau:

### Bước 1: Xác định các tệp cần quản lý bằng Git LFS

- Trước tiên, bạn cần xác định loại tệp cần được quản lý bằng Git LFS trong repository của bạn bằng cách sử dụng `git lfs track`. Ví dụ, để quản lý các tệp video _.mp4 và tệp hình ảnh _.png, bạn có thể sử dụng các lệnh sau:

  ```bash
  git lfs track "*.mp4"
  git lfs track "*.png"
  ```

### Bước 2: Thêm và commit các tệp lớn

- Sau khi bạn đã xác định các loại tệp cần quản lý bằng Git LFS, bạn có thể thêm và commit các tệp lớn bằng cách sử dụng `git add` và `git commit` như bình thường.

  ```bash
  # Thêm các tệp vào staging area (ở đây, *.mp4 và *.png là các tệp quản lý bằng Git LFS)
  git add file.mp4 file.png

  # Commit các tệp đã thay đổi
  git commit -m "Add large files managed by Git LFS"
  ```

Lưu ý rằng, khi bạn sử dụng `git add` để thêm các tệp lớn đã được quản lý bởi Git LFS, Git LFS sẽ thay thế chúng bằng các pointers và chỉ lưu trữ thực tế các tệp lớn này ở nơi khác (ví dụ: server Git LFS hoặc dịch vụ lưu trữ khác).

### Ví dụ:

Nếu bạn muốn thêm và commit các tệp video _.mp4 và tệp hình ảnh _.png vào repository sử dụng Git LFS:

1. Xác định loại tệp cần quản lý bằng Git LFS:

   ```bash
   git lfs track "*.mp4"
   git lfs track "*.png"
   ```

2. Thêm và commit các tệp lớn:

   ```bash
   git add video.mp4 image.png
   git commit -m "Add large video and image files managed by Git LFS"
   ```

Những lệnh trên sẽ thêm và commit các tệp lớn vào repository của bạn, với Git LFS quản lý chúng một cách hiệu quả hơn để giảm kích thước và tăng hiệu suất khi làm việc với các tệp có kích thước lớn.

---

## Push và pull tệp lớn từ kho lưu trữ

- Khi bạn sử dụng Git LFS để quản lý các tệp lớn, việc push và pull các tệp này từ kho lưu trữ yêu cầu một số bước đặc biệt để đảm bảo rằng các tệp lớn được quản lý một cách hiệu quả.

### Push các tệp lớn lên kho lưu trữ:

#### Bước 1: Thực hiện commit các tệp lớn

- Trước tiên, bạn cần commit các tệp lớn vào repository của mình sử dụng Git LFS.

  ```bash
  git add large_file.mp4
  git commit -m "Add large file using Git LFS"
  ```

#### Bước 2: Push các tệp lớn lên kho lưu trữ

- Sau khi commit các tệp, bạn có thể sử dụng `git push` để đẩy các thay đổi, bao gồm các tệp lớn, lên kho lưu trữ của bạn.

  ```bash
  git push origin master
  ```

### Pull các tệp lớn từ kho lưu trữ:

#### Bước 1: Fetch thông tin từ kho lưu trữ

- Trước khi bạn pull các tệp lớn, hãy fetch thông tin từ kho lưu trữ để đảm bảo bạn có phiên bản mới nhất của các tệp.

  ```bash
  git fetch origin
  ```

#### Bước 2: Pull các tệp lớn từ kho lưu trữ

- Sử dụng lệnh `git pull` để pull các tệp lớn từ kho lưu trữ về máy local của bạn.

  ```bash
  git pull origin master
  ```

### Ví dụ:

1. Push các tệp lớn lên kho lưu trữ:

   ```bash
   git add large_file.mp4
   git commit -m "Add large file using Git LFS"
   git push origin master
   ```

2. Pull các tệp lớn từ kho lưu trữ:

   ```bash
   git fetch origin
   git pull origin master
   ```

Những lệnh trên sẽ cho phép bạn push và pull các tệp lớn được quản lý bởi Git LFS giữa máy local và kho lưu trữ của bạn. Điều này giúp bạn duy trì hiệu suất cao và quản lý hiệu quả các tệp có kích thước lớn trong dự án của mình.

---
