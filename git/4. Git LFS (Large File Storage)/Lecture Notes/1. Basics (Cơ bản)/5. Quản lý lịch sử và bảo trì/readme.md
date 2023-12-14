## Xem lịch sử của tệp lớn

- Để xem lịch sử thay đổi của các tệp được quản lý bởi Git LFS, bạn có thể sử dụng `git log`. Tuy nhiên, khi sử dụng `git log` để xem lịch sử của các tệp lớn, thông tin chi tiết về các thay đổi sẽ không hiển thị ngay lập tức trong `git log` mà chỉ có thông tin về commit mà tệp đã được thay đổi.

### Cách sử dụng `git log` để xem lịch sử của tệp lớn:

#### Bước 1: Di chuyển đến thư mục chứa repository

- Sử dụng Command Prompt, Terminal hoặc PowerShell để di chuyển đến thư mục của repository chứa tệp mà bạn muốn xem lịch sử thay đổi.

  ```
  cd path/to/your/repository
  ```

#### Bước 2: Sử dụng `git log` để xem lịch sử của tệp

- Để xem lịch sử thay đổi của tệp lớn, sử dụng lệnh `git log` kèm theo đường dẫn của tệp:

  ```bash
  git log path/to/large_file.mp4
  ```

Lưu ý rằng thông tin được hiển thị trong `git log` chỉ cho bạn biết về các commit mà tệp đã tham gia, không phải về nội dung cụ thể của các thay đổi đó. Điều này có nghĩa là bạn sẽ thấy các commit liên quan đến tệp lớn, nhưng để xem nội dung cụ thể của các thay đổi, bạn cần phải checkout các phiên bản cụ thể.

### Ví dụ:

    ```bash
    git log path/to/large_file.mp4
    ```

Khi bạn nhập lệnh trên, bạn sẽ thấy danh sách các commit mà tệp lớn đã tham gia, bao gồm thông tin về các commit như hash, tác giả, thông điệp commit, và thời gian commit. Tuy nhiên, bạn sẽ không thấy được thông tin về các thay đổi cụ thể của tệp trong mỗi commit từ lịch sử `git log`. Để xem nội dung của từng commit, bạn cần sử dụng các lệnh khác như `git checkout` hoặc `git show`.

---

## Bảo trì kho lưu trữ

- Việc bảo trì kho lưu trữ Git LFS thông qua `git lfs prune` giúp bạn loại bỏ các dữ liệu không còn sử dụng, như các tệp đã bị xóa hoặc không còn được theo dõi bởi Git LFS, nhằm giảm kích thước của kho lưu trữ và tối ưu hóa không gian lưu trữ.

### Cách sử dụng `git lfs prune` để bảo trì kho lưu trữ:

#### Bước 1: Di chuyển đến thư mục chứa repository

- Sử dụng Command Prompt, Terminal hoặc PowerShell để di chuyển đến thư mục của repository chứa dữ liệu Git LFS.

  ```
  cd path/to/your/repository
  ```

#### Bước 2: Sử dụng `git lfs prune` để làm sạch dữ liệu không còn sử dụng

- Sử dụng lệnh `git lfs prune` để loại bỏ các tệp không còn được sử dụng từ kho lưu trữ Git LFS:

  ```bash
  git lfs prune
  ```

### Ví dụ:

    ```bash
    git lfs prune
    ```

Khi bạn nhập lệnh trên, Git LFS sẽ quét và xóa các dữ liệu không còn được sử dụng trong kho lưu trữ. Điều này có thể giúp giảm kích thước của kho lưu trữ Git LFS bằng cách loại bỏ các tệp không còn được theo dõi hoặc không còn tồn tại trong dự án của bạn.

Lưu ý rằng việc sử dụng `git lfs prune` cần phải được thực hiện cẩn thận vì nó sẽ xóa dữ liệu không còn được sử dụng và không thể khôi phục lại sau khi đã xóa. Hãy đảm bảo rằng bạn đã kiểm tra kỹ lưỡng trước khi thực hiện lệnh này để tránh mất mát dữ liệu quan trọng.

---
