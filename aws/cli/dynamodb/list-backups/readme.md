Lệnh `list-backups` trong AWS CLI DynamoDB được sử dụng để liệt kê các bản sao lưu (backups) của các bảng DynamoDB.

### Mục Đích

- Liệt kê các bản sao lưu có sẵn của các bảng DynamoDB.

### Dùng Khi Nào

- Khi bạn cần xem danh sách các bản sao lưu hiện có của các bảng DynamoDB trong tài khoản AWS.

### Cú Pháp

```bash
aws dynamodb list-backups --table-name <table-name>
```

### Tham Số

- `--table-name`: (Optional) Tên của bảng DynamoDB cụ thể mà bạn muốn liệt kê các bản sao lưu. Nếu không chỉ định, lệnh sẽ liệt kê tất cả các bản sao lưu của tất cả các bảng.

### Ví dụ

```bash
aws dynamodb list-backups --table-name MyTable
```

Trong ví dụ này, lệnh sẽ liệt kê các bản sao lưu của bảng DynamoDB có tên là `MyTable`. Nếu không có tên bảng được chỉ định, lệnh sẽ liệt kê tất cả các bản sao lưu của tất cả các bảng DynamoDB trong tài khoản AWS.
