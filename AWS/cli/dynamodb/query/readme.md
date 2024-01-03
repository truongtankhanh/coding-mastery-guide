Lệnh `query` trong AWS CLI DynamoDB được sử dụng để truy vấn các item trong bảng DynamoDB dựa trên khóa chính hoặc chỉ mục phụ.

### Mục Đích

- Truy vấn các item trong bảng DynamoDB dựa trên điều kiện cụ thể.

### Dùng Khi Nào

- Khi bạn muốn lấy các item từ bảng DynamoDB dựa trên các điều kiện quy định.

### Cú Pháp

```bash
aws dynamodb query --table-name <table-name> --key-condition-expression <key-condition-expression> [--filter-expression <filter-expression>] [--projection-expression <projection-expression>]
```

### Tham Số

- `--table-name`: Tên của bảng DynamoDB bạn muốn truy vấn.
- `--key-condition-expression`: Biểu thức điều kiện cho truy vấn dựa trên khóa chính.
- `--filter-expression`: (Optional) Biểu thức để lọc các item sau khi truy vấn.
- `--projection-expression`: (Optional) Biểu thức để chỉ định các thuộc tính cụ thể bạn muốn trả về.

### Ví dụ

```bash
aws dynamodb query --table-name MyTable --key-condition-expression "ID = :id" --expression-attribute-values '{":id": {"N": "1"}}'
```

Trong ví dụ này, lệnh sẽ truy vấn bảng có tên là `MyTable` dựa trên điều kiện `ID = 1`. Có thể cung cấp thêm các biểu thức lọc và chỉ định các thuộc tính cụ thể nếu cần thiết.
