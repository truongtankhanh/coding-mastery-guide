## Strategies for Large Files

Quản lý tệp lớn trong Git LFS đòi hỏi sự cân nhắc cẩn thận để tối ưu hóa dung lượng lưu trữ và hiệu suất. Dưới đây là một số chiến lược tốt nhất:

### 1. **Xác định loại tệp cần quản lý bằng Git LFS:**

- Sử dụng `git lfs track` để xác định các loại tệp cụ thể cần được quản lý bằng Git LFS, như các tệp hình ảnh, video, hoặc dữ liệu lớn.
- Chỉ áp dụng Git LFS cho những loại tệp thực sự cần thiết để tránh tăng kích thước của kho lưu trữ không cần thiết.

### 2. **Chuyển đổi tệp đã tồn tại sang Git LFS:**

- Sử dụng `git lfs migrate` để chuyển đổi các tệp lớn đã tồn tại trong repository thành Git LFS.
- Điều này giúp tiết kiệm không gian lưu trữ bằng cách thay thế các tệp thực tế bằng các pointers chỉ đến dữ liệu lớn nằm ở nơi khác.

### 3. **Chỉ tải xuống những phần cần thiết:**

- Sử dụng lệnh `git lfs fetch --recent` để chỉ tải xuống phiên bản mới nhất của các tệp trong Git LFS mà bạn thực sự cần làm việc.
- Điều này giúp tránh việc tải xuống toàn bộ dữ liệu lớn mỗi khi bạn cần làm việc với repository.

### 4. **Kiểm tra thông tin lưu trữ:**

- Sử dụng `git lfs ls-files` để kiểm tra thông tin chi tiết về các tệp được quản lý bởi Git LFS trong repository.
- Điều này giúp bạn có cái nhìn tổng quan về các tệp lớn, kích thước của chúng và các thông tin khác để đánh giá lưu trữ.

### 5. **Bảo trì kho lưu trữ:**

- Thực hiện các thao tác bảo trì định kỳ với `git lfs prune` để loại bỏ các dữ liệu không còn được sử dụng.
- Điều này giúp giảm kích thước của kho lưu trữ bằng cách loại bỏ các tệp không còn cần thiết.

### Ví dụ:

#### Xác định các loại tệp cần quản lý bằng Git LFS:

```bash
git lfs track "*.mp4"
git lfs track "*.jpg"
```

#### Chuyển đổi các tệp đã tồn tại sang Git LFS:

```bash
git lfs migrate import --include="*.mp4"
```

#### Chỉ tải xuống những phần cần thiết:

```bash
git lfs fetch --recent
```

#### Kiểm tra thông tin lưu trữ:

```bash
git lfs ls-files
```

#### Bảo trì kho lưu trữ:

```bash
git lfs prune
```

Kết hợp các chiến lược trên sẽ giúp bạn quản lý hiệu quả các tệp lớn trong Git LFS, tối ưu hóa dung lượng lưu trữ và cải thiện hiệu suất làm việc với các tệp có kích thước lớn.

---

## Cách thiết lập Bounding & Thresholds

Cấu hình Bounding và Threshold trong Git LFS cho phép bạn kiểm soát việc quản lý các tệp dựa trên kích thước, giúp bạn định rõ cỡ tệp mà LFS sẽ quản lý và xác định ngưỡng dung lượng nào sẽ được xem xét để quyết định liệu tệp có nên được lưu trữ trong Git LFS hay không.

### Thiết lập Bounding:

#### Bước 1: Thiết lập giới hạn kích thước tệp mà LFS sẽ quản lý:

Sử dụng lệnh `git lfs config lfs.<extension>.threshold` để xác định kích thước tệp mà LFS sẽ quản lý. `<extension>` đại diện cho loại tệp, ví dụ `mp4`, `jpg`,...

```bash
git lfs config lfs.jpg.threshold 5MB
```

Lệnh trên sẽ thiết lập một giới hạn cho tệp `.jpg` ở mức 5MB, nghĩa là các tệp `.jpg` có kích thước lớn hơn 5MB sẽ được quản lý bởi Git LFS.

### Thiết lập Threshold:

#### Bước 1: Thiết lập ngưỡng dung lượng chung cho tất cả các tệp:

Sử dụng lệnh `git lfs config lfs.transfer.maxsize` để xác định ngưỡng dung lượng chung cho tất cả các tệp được quản lý bởi Git LFS.

```bash
git lfs config lfs.transfer.maxsize 50MB
```

Lệnh trên sẽ thiết lập ngưỡng dung lượng là 50MB, nghĩa là bất kỳ tệp nào có kích thước lớn hơn sẽ được xem xét để lưu trữ trong Git LFS.

### Ví dụ:

#### Thiết lập Bounding:

```bash
git lfs config lfs.jpg.threshold 5MB
```

#### Thiết lập Threshold:

```bash
git lfs config lfs.transfer.maxsize 50MB
```

Cấu hình Bounding và Threshold cho phép bạn kiểm soát quản lý các tệp dựa trên kích thước và ngưỡng dung lượng, giúp tối ưu hóa việc quản lý tệp lớn trong Git LFS theo nhu cầu của bạn. Điều này giúp giảm kích thước của kho lưu trữ và cải thiện hiệu suất khi làm việc với các tệp có kích thước lớn.

---
