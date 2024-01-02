## Định dạng tệp để lưu trữ

- Để xác định các loại tệp cần được quản lý bằng Git LFS, bạn cần thiết lập các quy tắc theo dõi cho các loại tệp cụ thể trong repository của mình. Điều này giúp Git LFS biết được những tệp nào cần được xử lý một cách đặc biệt, thay vì lưu trữ chúng trực tiếp trong kho lưu trữ Git.

### Cách sử dụng Git LFS để định dạng tệp để lưu trữ:

#### Bước 1: Di chuyển đến thư mục của repository

- Mở Command Prompt, Terminal hoặc PowerShell và di chuyển đến thư mục của repository mà bạn muốn xác định các loại tệp cần quản lý bằng Git LFS.

  ```
  cd path/to/your/repository
  ```

#### Bước 2: Xác định các loại tệp cần quản lý bằng Git LFS

- Sử dụng lệnh `git lfs track` để xác định các loại tệp bạn muốn quản lý bằng Git LFS. Ví dụ, để quản lý các tệp video có định dạng _.mp4 và các tệp hình ảnh _.png, bạn có thể làm như sau:

  ```
  git lfs track "*.mp4"
  git lfs track "*.png"
  ```

#### Bước 3: Commit tệp `.gitattributes`

- Sau khi bạn đã xác định các loại tệp cần quản lý bằng Git LFS, sử dụng lệnh `git add .gitattributes` để thêm các thay đổi này vào staging area.

  ```
  git add .gitattributes
  ```

#### Bước 4: Commit và push các thay đổi

- Tiến hành commit các thay đổi vào repository và đẩy chúng lên remote repository.

  ```
  git commit -m "Specify file types for Git LFS"
  git push origin master
  ```

Khi bạn thực hiện các bước trên, các loại tệp bạn đã xác định sẽ được quản lý bằng Git LFS trong repository của bạn. Các tệp thuộc các định dạng này sẽ được Git LFS xử lý thông qua việc lưu trữ các pointers thay vì lưu trữ trực tiếp nội dung của chúng trong kho lưu trữ Git.

---

## Theo dõi tệp lớn với Git LFS

- Theo dõi các tệp lớn trong Git LFS là việc xác định những loại tệp có kích thước lớn mà bạn muốn Git LFS quản lý thay vì lưu trữ trực tiếp trong kho lưu trữ Git. Điều này giúp tối ưu hóa quản lý và hiệu suất khi làm việc với các tệp có kích thước lớn, như hình ảnh, video, tệp nhị phân, và dữ liệu đa phương tiện.

### Cách sử dụng `git lfs track` để theo dõi các tệp lớn:

#### Bước 1: Di chuyển đến thư mục của repository

- Sử dụng Command Prompt, Terminal hoặc PowerShell và di chuyển đến thư mục của repository mà bạn muốn theo dõi các tệp lớn.

  ```
  cd path/to/your/repository
  ```

#### Bước 2: Sử dụng `git lfs track`

- Sử dụng lệnh `git lfs track` để xác định loại tệp bạn muốn theo dõi bằng Git LFS. Ví dụ, để theo dõi các tệp video có định dạng _.mp4 và tệp hình ảnh _.png, bạn có thể làm như sau:

  ```
  git lfs track "*.mp4"
  git lfs track "*.png"
  ```

- Nếu bạn cần theo dõi các loại tệp khác nhau, thêm các quy tắc `git lfs track` tương ứng cho từng loại tệp.

#### Bước 3: Commit tệp `.gitattributes`

- Sau khi xác định các loại tệp cần theo dõi bằng Git LFS, sử dụng lệnh `git add .gitattributes` để thêm các thay đổi này vào staging area.

  ```
  git add .gitattributes
  ```

#### Bước 4: Commit và push các thay đổi

- Tiến hành commit các thay đổi vào repository và đẩy chúng lên remote repository.

  ```
  git commit -m "Track large files with Git LFS"
  git push origin master
  ```

Khi bạn thực hiện các bước trên, các tệp bạn đã xác định sẽ được Git LFS quản lý trong repository của bạn. Thay vì lưu trữ trực tiếp nội dung của các tệp lớn, Git LFS sẽ thay thế chúng bằng các pointers, giúp tối ưu hóa quản lý và hiệu suất khi làm việc với các tệp có kích thước lớn.

---
