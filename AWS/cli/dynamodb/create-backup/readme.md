Lệnh `create-backup` trong AWS CLI DynamoDB được sử dụng để tạo một bản sao lưu (backup) của bảng DynamoDB cụ thể.

### Mục Đích

- Tạo một bản sao lưu của bảng DynamoDB để đảm bảo an toàn và khả năng khôi phục dữ liệu.

### Dùng Khi Nào

- Khi bạn muốn tạo một bản sao lưu dữ liệu của bảng DynamoDB để đảm bảo an toàn và có thể khôi phục lại dữ liệu khi cần thiết.

### Cú Pháp

```bash
aws dynamodb create-backup --table-name <table-name> --backup-name <backup-name>
```

### Tham Số

- `--table-name`: Tên của bảng DynamoDB bạn muốn tạo bản sao lưu.
- `--backup-name`: Tên cho bản sao lưu mới được tạo.

### Ví dụ

```bash
aws dynamodb create-backup --table-name MyTable --backup-name MyBackup
```

Trong ví dụ này, lệnh trên sẽ tạo một bản sao lưu có tên là `MyBackup` cho bảng `MyTable` trong DynamoDB. Bản sao lưu này sẽ chứa dữ liệu của bảng tại thời điểm tạo bản sao lưu và có thể được sử dụng để khôi phục dữ liệu nếu cần thiết trong tương lai.
