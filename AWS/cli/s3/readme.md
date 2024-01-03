Dưới đây là mô tả về các lệnh AWS CLI S3:

---

### `cp` - Copy

#### Mục Đích:

Sao chép các đối tượng (objects) từ hoặc đến S3.

#### Cú Pháp:

```bash
aws s3 cp <source> <destination> [options]
```

#### Tham Số Chính:

- `<source>`: Đường dẫn nguồn của đối tượng, có thể là local file hoặc path trên S3.
- `<destination>`: Đường dẫn đích của đối tượng, có thể là local file hoặc path trên S3.
- `[options]`: Các tùy chọn bổ sung như `--recursive` (sao chép đệ quy), `--acl` (thiết lập quyền truy cập) và nhiều tùy chọn khác.

#### Ví Dụ:

```bash
aws s3 cp ./local-file.txt s3://my-bucket/remote-file.txt
```

---

### `ls` - List

#### Mục Đích:

Liệt kê các đối tượng hoặc thư mục trên S3.

#### Cú Pháp:

```bash
aws s3 ls [s3://<bucket>/<path>] [options]
```

#### Tham Số Chính:

- `[s3://<bucket>/<path>]`: Đường dẫn tới bucket hoặc path trên S3.
- `[options]`: Các tùy chọn bổ sung như `--recursive` (liệt kê đệ quy), `--human-readable` (hiển thị dữ liệu dưới dạng đơn vị đọc được) và nhiều tùy chọn khác.

#### Ví Dụ:

```bash
aws s3 ls s3://my-bucket/
```

---

### `mb` - Make Bucket

#### Mục Đích:

Tạo một bucket trên S3.

#### Cú Pháp:

```bash
aws s3 mb s3://<bucket-name> [options]
```

#### Tham Số Chính:

- `s3://<bucket-name>`: Đường dẫn tới bucket mới.
- `[options]`: Các tùy chọn bổ sung như `--region` (khu vực lưu trữ) và các tùy chọn khác.

#### Ví Dụ:

```bash
aws s3 mb s3://my-new-bucket --region us-west-1
```

---

### `mv` - Move

#### Mục Đích:

Di chuyển một đối tượng từ hoặc đến S3.

#### Cú Pháp:

```bash
aws s3 mv <source> <destination> [options]
```

#### Tham Số Chính:

- `<source>`: Đường dẫn nguồn của đối tượng, có thể là local file hoặc path trên S3.
- `<destination>`: Đường dẫn đích của đối tượng, có thể là local file hoặc path trên S3.
- `[options]`: Các tùy chọn bổ sung như `--recursive` (di chuyển đệ quy), `--acl` (thiết lập quyền truy cập) và nhiều tùy chọn khác.

#### Ví Dụ:

```bash
aws s3 mv s3://my-bucket/source-file.txt s3://my-bucket/folder/destination-file.txt
```

---

### `rb` - Remove Bucket

#### Mục Đích:

Xóa một bucket từ S3.

#### Cú Pháp:

```bash
aws s3 rb s3://<bucket-name> [options]
```

#### Tham Số Chính:

- `s3://<bucket-name>`: Đường dẫn tới bucket cần xóa.
- `[options]`: Các tùy chọn bổ sung như `--force` (xóa ngay cả khi bucket không rỗng), `--region` (khu vực lưu trữ) và các tùy chọn khác.

#### Ví Dụ:

```bash
aws s3 rb s3://my-bucket --force
```

---

### `rm` - Remove

#### Mục Đích:

Xóa các đối tượng từ S3.

#### Cú Pháp:

```bash
aws s3 rm <path> [options]
```

#### Tham Số Chính:

- `<path>`: Đường dẫn tới đối tượng hoặc thư mục trên S3 cần xóa.
- `[options]`: Các tùy chọn bổ sung như `--recursive` (xóa đệ quy), `--include` (xác định các đối tượng cụ thể để xóa) và nhiều tùy chọn khác.

#### Ví Dụ:

```bash
aws s3 rm s3://my-bucket/file.txt
```

---

### `sync`

#### Mục Đích:

Đồng bộ hóa thư mục local với S3 hoặc S3 với thư mục local.

#### Cú Pháp:

```bash
aws s3 sync <source> <destination> [options]
```

#### Tham Số Chính:

- `<source>`: Đường dẫn nguồn (thư mục local hoặc S3 path).
- `<destination>`: Đường dẫn đích (thư mục local hoặc S3 path).
- `[options]`: Các tùy chọn bổ sung như `--delete` (xóa các đối tượng không tồn tại trong nguồn), `--exclude` (loại trừ các đối tượng cụ thể), `--include` (bao gồm các đối tượng cụ thể) và nhiều tùy chọn khác.

#### Ví Dụ:

```bash
aws s3 sync ./local-folder s3://my-bucket/remote-folder --delete
```

---
