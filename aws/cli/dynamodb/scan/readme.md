Lệnh `scan` trong AWS CLI DynamoDB được sử dụng để quét toàn bộ bảng DynamoDB để lấy các item phù hợp với các điều kiện xác định.

### Mục Đích

- Quét toàn bộ bảng DynamoDB để lấy các item thỏa mãn các điều kiện xác định.

### Dùng Khi Nào

- Khi bạn cần lấy các item từ bảng DynamoDB không dựa trên khóa chính mà dựa trên các điều kiện phù hợp.

### Cú Pháp

```bash
aws dynamodb scan --table-name <table-name> [--filter-expression <filter-expression>] [--projection-expression <projection-expression>]
```

### Tham Số

- `--table-name`: Tên của bảng DynamoDB bạn muốn quét.
- `--filter-expression`: (Optional) Biểu thức để lọc các item sau khi quét.
- `--projection-expression`: (Optional) Biểu thức để chỉ định các thuộc tính cụ thể bạn muốn trả về.

### Ví dụ

```bash
aws dynamodb scan --table-name MyTable --filter-expression "Category = :category" --expression-attribute-values '{":category": {"S": "Books"}}'
```

Trong ví dụ này, lệnh sẽ quét bảng có tên là `MyTable` và trả về các item có thuộc tính `Category` có giá trị là `"Books"`. Lưu ý rằng scan có thể tốn nhiều tài nguyên và thời gian hơn so với truy vấn dựa trên khóa chính, do đó hãy sử dụng cẩn thận khi thực hiện scan trên bảng có dữ liệu lớn.
