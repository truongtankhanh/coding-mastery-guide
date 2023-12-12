Lệnh `delete-item` trong AWS CLI DynamoDB được sử dụng để xóa một item cụ thể từ bảng DynamoDB.

### Mục Đích

- Xóa một item cụ thể từ bảng DynamoDB.

### Dùng Khi Nào

- Khi bạn muốn xóa một item cụ thể từ bảng DynamoDB dựa trên khóa chính.

### Cú Pháp

```bash
aws dynamodb delete-item --table-name <table-name> --key '{"<key-name>": {"<key-type>": "<key-value>"}}'
```

### Tham Số

- `--table-name`: Tên của bảng DynamoDB mà item cần được xóa.
- `--key`: Khóa chính của item cần xóa, được định dạng dưới dạng JSON.

### Ví dụ

```bash
aws dynamodb delete-item --table-name MyTable --key '{"ID": {"N": "1"}}'
```

Trong ví dụ này, lệnh sẽ xóa item từ bảng có tên `MyTable` mà có khóa chính là `ID` với giá trị `1`. Hãy chắc chắn rằng thông tin về khóa chính được cung cấp chính xác để xóa item đúng từ bảng.
