## Metadata và Extended Attributes

Metadata trong Git LFS đề cập đến các thông tin mở rộng (extended attributes) liên quan đến các tệp lớn được quản lý bởi Git LFS. Các thông tin này cung cấp thông tin bổ sung về các tệp, bao gồm kích thước, checksum, và các thông tin khác để quản lý và xử lý chúng trong quá trình làm việc với Git LFS.

### Ngữ cảnh:

- **Metadata trong Git LFS:** Lưu trữ thông tin mở rộng về các tệp lớn như kích thước, loại file, checksum, v.v.
- **Extended Attributes:** Thông tin bổ sung không được lưu trữ trực tiếp trong tệp nhưng được quản lý riêng biệt.

### Cách sử dụng:

#### Bước 1: Xem thông tin metadata của tệp trong Git LFS

Sử dụng lệnh `git lfs ls-files --json` để hiển thị thông tin metadata của các tệp được quản lý bởi Git LFS.

```bash
git lfs ls-files --json
```

#### Bước 2: Xem thông tin chi tiết về từng tệp

Để xem thông tin chi tiết về một tệp cụ thể, bạn có thể sử dụng lệnh `git lfs pointer` để xem metadata của tệp đó.

```bash
git lfs pointer file_name.ext
```

### Ví dụ:

Khi bạn chạy lệnh `git lfs ls-files --json`, bạn sẽ nhận được một danh sách các tệp đang được quản lý bởi Git LFS cùng với thông tin metadata của chúng. Thông tin này thường bao gồm kích thước, checksum, và các thông tin khác liên quan đến quản lý tệp lớn trong Git LFS.

```json
{
  "oid": "sha256_checksum",
  "size": 123456,
  "path": "file_name.ext"
}
```

Khi bạn sử dụng lệnh `git lfs pointer file_name.ext`, bạn sẽ nhận được thông tin chi tiết về metadata của tệp cụ thể này trong Git LFS, giúp bạn hiểu rõ hơn về cách mà Git LFS quản lý và lưu trữ thông tin bổ sung về các tệp lớn.

---

## Rewrite History and LFS Objects

Tái viết lịch sử (history rewriting) trong Git cho phép bạn thay đổi hoặc chỉnh sửa lịch sử commit, bao gồm cả việc thay đổi cách các tệp LFS được lưu trữ. Điều này có thể được thực hiện thông qua việc sử dụng các lệnh như `git filter-branch`, `git rebase`, hoặc `git filter-repo`. Tuy nhiên, việc tái viết lịch sử có thể ảnh hưởng đến các người dùng khác và có thể gây ra sự phức tạp trong quản lý mã nguồn.

### Ngữ cảnh:

- **Tái viết lịch sử:** Thay đổi lịch sử commit trong Git.
- **Git LFS Objects:** Các đối tượng lớn được quản lý bởi Git LFS, thường chỉ có pointer được lưu trữ trong các commit.

### Cách sử dụng:

#### Bước 1: Sao lưu repository trước khi tái viết lịch sử

Trước khi thực hiện bất kỳ thay đổi nào, đảm bảo bạn đã sao lưu repository của mình để tránh mất dữ liệu.

#### Bước 2: Sử dụng lệnh tái viết lịch sử

1. **Git Filter-Branch:**
   Sử dụng `git filter-branch` để tái viết lịch sử và thay đổi cách các tệp LFS được lưu trữ.

   ```bash
   git filter-branch --tree-filter 'command' -- --all
   ```

2. **Git Rebase:**
   Sử dụng `git rebase` để sắp xếp lại lịch sử commit và có thể thay đổi cách các tệp LFS được tham chiếu.

   ```bash
   git rebase -i HEAD~3
   ```

3. **Git Filter-Repo:**
   Sử dụng `git filter-repo` để tái viết lịch sử một cách mạnh mẽ và linh hoạt.

   ```bash
   git filter-repo --path file_path
   ```

### Ví dụ:

Sau khi bạn chạy lệnh tái viết lịch sử, dữ liệu trong repository sẽ bị thay đổi và có thể dẫn đến việc thay đổi cách các tệp LFS được lưu trữ. Ví dụ, việc sử dụng `git filter-branch` với `--tree-filter` sẽ thực hiện lệnh `command` trên mỗi commit và có thể thay đổi cách các tệp LFS được quản lý.

Lưu ý rằng việc tái viết lịch sử là một thao tác mạnh mẽ và có thể gây ra tác động lớn đến lịch sử commit của repository, vì vậy hãy chắc chắn rằng bạn hiểu rõ về các tác động của nó và sao lưu dữ liệu trước khi thực hiện bất kỳ thay đổi nào.

---
