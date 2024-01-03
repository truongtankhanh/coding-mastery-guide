Lệnh `delete-backup` trong AWS CLI DynamoDB được sử dụng để xóa một bản sao lưu (backup) cụ thể của bảng DynamoDB.

### Mục Đích

- Xóa bỏ một bản sao lưu cụ thể của bảng DynamoDB.

### Dùng Khi Nào

- Khi bạn muốn loại bỏ một bản sao lưu cụ thể của bảng DynamoDB để giải phóng không gian lưu trữ hoặc quản lý không gian lưu trữ backup.

### Cú Pháp

```bash
aws dynamodb delete-backup --backup-arn <backup-arn>
```

### Tham Số

- `--backup-arn`: Amazon Resource Name (ARN) của bản sao lưu mà bạn muốn xóa.

### Ví dụ

```bash
aws dynamodb delete-backup --backup-arn arn:aws:dynamodb:region:123456789012:table/MyTable/backup/12345678901234
```

Trong ví dụ này, lệnh sẽ xóa bản sao lưu DynamoDB được chỉ định bởi ARN `arn:aws:dynamodb:region:123456789012:table/MyTable/backup/12345678901234`. Lưu ý rằng ARN này là một ví dụ và bạn cần thay thế bằng ARN thực tế của bản sao lưu bạn muốn xóa. Hãy chắc chắn rằng bạn cẩn thận khi xóa bản sao lưu vì điều này có thể dẫn đến mất mát dữ liệu không thể khôi phục được.
