## Quản lý và Theo dõi Dung lượng

Quản lý dung lượng lưu tr

ữ trong Git LFS là một phần quan trọng để đảm bảo rằng kho lưu trữ không bị quá tải và không chứa những tệp không cần thiết. Công cụ như `git lfs migrate` và `git lfs prune` giúp kiểm soát và làm sạch kho lưu trữ của bạn.

### Ngữ cảnh:

- **Git LFS Migrate:** Chuyển đổi các tệp đã tồn tại thành Git LFS.
- **Git LFS Prune:** Loại bỏ dữ liệu không cần thiết hoặc đã được thay đổi trong Git LFS.

### Cách sử dụng:

#### Bước 1: Sử dụng Git LFS Migrate để chuyển đổi tệp đã tồn tại

```bash
git lfs migrate import --include="*.extension"
```

Lệnh trên chuyển đổi các tệp đã tồn tại (có phần mở rộng là `extension`) thành Git LFS, giúp giảm dung lượng của các tệp này trong repository.

#### Bước 2: Sử dụng Git LFS Prune để làm sạch dữ liệu không cần thiết

```bash
git lfs prune
```

Lệnh trên loại bỏ dữ liệu không còn sử dụng hoặc đã bị thay đổi khỏi kho lưu trữ Git LFS, giúp giảm dung lượng của kho lưu trữ.

### Ví dụ:

Bạn có thể sử dụng các lệnh trên trong một quy trình hoặc lập lịch làm sạch tự động cho kho lưu trữ Git LFS. Ví dụ:

```bash
# Chuyển đổi các tệp đã tồn tại có phần mở rộng .jpg thành Git LFS
git lfs migrate import --include="*.jpg"

# Làm sạch dữ liệu không còn sử dụng trong Git LFS
git lfs prune
```

Nhớ rằng việc này có thể ảnh hưởng đến lịch sử của repository, vì vậy hãy chắc chắn rằng bạn hiểu rõ về tác động của các lệnh này trước khi thực hiện, và nên thực hiện sao lưu dữ liệu quan trọng trước khi làm bất kỳ thay đổi nào vào kho lưu trữ của mình.

---

## Gỡ bỏ và Quản lý Tệp LFS

Đôi khi, bạn có thể muốn gỡ bỏ một số tệp khỏi Git LFS để quản lý chúng như các tệp thông thường. Quá trình này bao gồm việc loại bỏ các tệp khỏi Git LFS, đồng thời giữ nguyên lịch sử của chúng trong kho lưu trữ.

### Ngữ cảnh:

- **Gỡ bỏ tệp khỏi Git LFS:** Loại bỏ tệp khỏi Git LFS nhưng vẫn giữ nguyên trong kho lưu trữ Git.
- **Quản lý như tệp thông thường:** Cho phép tệp được quản lý như bất kỳ tệp nào khác trong Git.

### Cách sử dụng:

#### Bước 1: Gỡ bỏ tệp khỏi Git LFS

```bash
git lfs untrack "file_name.ext"
```

Lệnh trên sẽ gỡ bỏ tệp `file_name.ext` khỏi Git LFS nhưng vẫn giữ nguyên trong kho lưu trữ Git.

#### Bước 2: Chuyển đổi tệp từ Git LFS thành tệp thông thường

```bash
git lfs migrate export --include="file_name.ext"
```

Lệnh trên sẽ chuyển đổi tệp `file_name.ext` từ Git LFS thành một tệp thông thường trong kho lưu trữ Git.

### Ví dụ:

```bash
# Gỡ bỏ tệp từ Git LFS
git lfs untrack "large_file.jpg"

# Chuyển đổi tệp từ Git LFS thành tệp thông thường
git lfs migrate export --include="large_file.jpg"
```

Ví dụ trên sẽ gỡ bỏ tệp `large_file.jpg` khỏi Git LFS và sau đó chuyển đổi tệp này từ Git LFS thành một tệp thông thường trong kho lưu trữ Git. Sau quá trình này, tệp sẽ không còn được quản lý bởi Git LFS và có thể được xử lý như bất kỳ tệp nào khác trong kho lưu trữ Git.

---
