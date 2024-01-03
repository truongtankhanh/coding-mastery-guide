Lệnh `update-time-to-live` trong AWS CLI DynamoDB được sử dụng để cập nhật cài đặt Time to Live (TTL) cho một bảng DynamoDB.

### Mục Đích

- Cập nhật cài đặt Time to Live (TTL) cho một bảng DynamoDB.

### Dùng Khi Nào

- Khi bạn muốn thay đổi cấu hình TTL của một bảng DynamoDB, cụ thể là cài đặt và kích hoạt hoặc vô hiệu hóa TTL trên bảng.

### Cú Pháp

```bash
aws dynamodb update-time-to-live --table-name <table-name> --time-to-live-specification <time-to-live-specification>
```

### Tham Số

- `--table-name`: Tên của bảng DynamoDB bạn muốn cập nhật TTL.
- `--time-to-live-specification`: Đặc tả cài đặt TTL bao gồm thuộc tính TTL và trạng thái TTL.

### Ví dụ

```bash
aws dynamodb update-time-to-live --table-name MyTable --time-to-live-specification "Enabled=true,AttributeName=ExpirationTime"
```

Trong ví dụ này, lệnh sẽ cập nhật bảng DynamoDB có tên `MyTable` để kích hoạt TTL với thuộc tính `ExpirationTime`. Điều này có nghĩa là các mục trong bảng sẽ bị xóa tự động khi thuộc tính `ExpirationTime` vượt qua thời gian được chỉ định.
