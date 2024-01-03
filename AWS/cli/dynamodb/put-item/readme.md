Lệnh `put-item` trong AWS CLI DynamoDB được sử dụng để thêm hoặc cập nhật một item trong bảng DynamoDB.

### Mục Đích

- Thêm hoặc cập nhật một item trong bảng DynamoDB.

### Dùng Khi Nào

- Khi bạn muốn thêm một item mới hoặc cập nhật một item đã tồn tại trong bảng DynamoDB.

### Cú Pháp

```bash
aws dynamodb put-item --table-name <table-name> --item '{"<attribute-name>": {"<attribute-type>": "<attribute-value>"}, ...}'
```

### Tham Số

- `--table-name`: Tên của bảng DynamoDB mà item sẽ được thêm hoặc cập nhật.
- `--item`: Các thuộc tính của item mới hoặc cập nhật, được định dạng dưới dạng JSON.

### Ví dụ

```bash
aws dynamodb put-item --table-name MyTable --item '{"ID": {"N": "1"}, "Name": {"S": "John"}}'
```

Trong ví dụ này, lệnh sẽ thêm hoặc cập nhật một item trong bảng có tên là `MyTable`. Item này có thuộc tính `ID` với giá trị số (`N`) là `1` và thuộc tính `Name` với giá trị chuỗi (`S`) là `"John"`. Lưu ý rằng nếu item đã tồn tại trong bảng với cùng khóa chính, lệnh này sẽ cập nhật thông tin của item đó.
