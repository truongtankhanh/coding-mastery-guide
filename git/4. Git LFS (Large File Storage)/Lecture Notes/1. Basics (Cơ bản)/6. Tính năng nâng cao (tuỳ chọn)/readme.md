## Chuyển đổi tệp đã tồn tại

- `git lfs migrate` là một công cụ mạnh mẽ cho phép bạn chuyển đổi các tệp đã tồn tại trong kho lưu trữ thành Git LFS. Điều này hữu ích khi bạn muốn bắt đầu sử dụng Git LFS cho các tệp lớn mà bạn đã commit trước đó vào kho lưu trữ Git của mình.

### Cách sử dụng `git lfs migrate` để chuyển đổi các tệp đã tồn tại:

#### Bước 1: Di chuyển đến thư mục chứa repository

- Sử dụng Command Prompt, Terminal hoặc PowerShell để di chuyển đến thư mục của repository chứa các tệp bạn muốn chuyển đổi.

  ```
  cd path/to/your/repository
  ```

#### Bước 2: Chuyển đổi các tệp đã tồn tại thành Git LFS

- Sử dụng lệnh `git lfs migrate import --include="<pattern>"` để chuyển đổi các tệp đã tồn tại thành Git LFS. Thay `<pattern>` bằng mẫu tên tệp hoặc mẫu đường dẫn của các tệp bạn muốn chuyển đổi.

  ```bash
  git lfs migrate import --include="*.mp4"
  ```

Lệnh trên sẽ chuyển đổi tất cả các tệp có định dạng \*.mp4 thành Git LFS. Bạn có thể thay đổi mẫu tên tệp hoặc mẫu đường dẫn để chuyển đổi các tệp khác theo nhu cầu của bạn.

#### Bước 3: Thực hiện commit các thay đổi

- Sau khi chuyển đổi các tệp, bạn cần thực hiện commit để áp dụng các thay đổi vào kho lưu trữ Git.

  ```bash
  git add .
  git commit -m "Convert existing files to Git LFS"
  ```

### Ví dụ:

    ```bash
    git lfs migrate import --include="*.mp4"
    git add .
    git commit -m "Convert existing .mp4 files to Git LFS"
    ```

Lưu ý rằng việc chuyển đổi các tệp đã tồn tại sang Git LFS có thể tạo ra các commit mới. Điều này có thể làm thay đổi lịch sử commit của repository, vì vậy hãy cân nhắc trước khi thực hiện việc chuyển đổi này đặc biệt nếu repository đã được chia sẻ hoặc sử dụng bởi nhiều người khác nhau.

---

## Kiểm tra thông tin lưu trữ

- Lệnh `git lfs ls-files` là công cụ mạnh mẽ để kiểm tra thông tin về các tệp đang được quản lý bởi Git LFS trong repository của bạn. Nó cung cấp thông tin về các tệp được theo dõi bởi Git LFS cùng với kích thước của chúng và các thông tin khác liên quan đến việc quản lý tệp lớn.

### Cách sử dụng `git lfs ls-files` để kiểm tra thông tin lưu trữ:

#### Bước 1: Di chuyển đến thư mục chứa repository

- Mở Command Prompt, Terminal hoặc PowerShell và di chuyển đến thư mục của repository mà bạn muốn kiểm tra thông tin lưu trữ.

  ```
  cd path/to/your/repository
  ```

#### Bước 2: Sử dụng `git lfs ls-files` để kiểm tra thông tin lưu trữ

- Sử dụng lệnh `git lfs ls-files` để hiển thị thông tin chi tiết về các tệp đang được quản lý bởi Git LFS trong repository.

  ```bash
  git lfs ls-files
  ```

Lệnh này sẽ liệt kê tất cả các tệp được theo dõi bởi Git LFS trong repository của bạn và hiển thị thông tin như kích thước, đường dẫn, và các thông tin khác về tệp.

### Ví dụ:

    ```bash
    git lfs ls-files
    ```

Khi bạn nhập lệnh trên, bạn sẽ nhận được danh sách các tệp đang được quản lý bởi Git LFS cùng với thông tin chi tiết về chúng, bao gồm kích thước và đường dẫn của từng tệp. Điều này giúp bạn có cái nhìn tổng quan về các tệp lớn trong kho lưu trữ của mình và thông tin về cách Git LFS đang quản lý chúng.

---
