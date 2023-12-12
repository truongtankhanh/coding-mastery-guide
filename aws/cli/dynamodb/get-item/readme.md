Lệnh `get-item` trong AWS CLI DynamoDB được sử dụng để lấy thông tin của một item cụ thể từ bảng DynamoDB.

### Mục Đích

- Lấy thông tin của một item cụ thể từ bảng DynamoDB dựa trên khóa chính.

### Dùng Khi Nào

- Khi bạn cần lấy thông tin của một item từ bảng DynamoDB dựa trên khóa chính hoặc composite key.

### Cú Pháp

```bash
aws dynamodb get-item --table-name <table-name> --key '{"<key-name>": {"<key-type>": "<key-value>"}}'
```

### Tham Số

- `--table-name`: Tên của bảng DynamoDB chứa item cần lấy thông tin.
- `--key`: Khóa chính của item cần lấy, được định dạng dưới dạng JSON.

### Ví dụ

```bash
aws dynamodb get-item --table-name MyTable --key '{"ID": {"N": "1"}}'
```

Trong ví dụ này, lệnh sẽ trả về thông tin của item từ bảng có tên là `MyTable` với khóa chính `ID` có giá trị `1`. Lưu ý rằng thông tin được trả về bao gồm toàn bộ item với các thuộc tính của nó nếu item được tìm thấy trong bảng.
