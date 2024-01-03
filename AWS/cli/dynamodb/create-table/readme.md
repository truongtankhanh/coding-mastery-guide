Lệnh `create-table` trong AWS CLI DynamoDB được sử dụng để tạo mới một bảng trong DynamoDB.

### Mục Đích

- Tạo mới một bảng DynamoDB mới.

### Dùng Khi Nào

- Khi bạn cần tạo một bảng DynamoDB mới để lưu trữ dữ liệu.

### Cú Pháp

```bash
aws dynamodb create-table --table-name <table-name> --attribute-definitions AttributeName=<attribute-name>,AttributeType=<attribute-type> ... --key-schema AttributeName=<key-name>,KeyType=<key-type> ...
```

### Tham Số

- `--table-name`: Tên của bảng DynamoDB bạn muốn tạo.
- `--attribute-definitions`: Định nghĩa các thuộc tính của bảng (tên và kiểu dữ liệu).
- `--key-schema`: Định nghĩa khóa chính của bảng (tên và loại khóa).

### Ví dụ

```bash
aws dynamodb create-table \
    --table-name MyNewTable \
    --attribute-definitions AttributeName=ID,AttributeType=N AttributeName=Name,AttributeType=S \
    --key-schema AttributeName=ID,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5
```

Trong ví dụ này, lệnh tạo bảng sẽ tạo một bảng DynamoDB mới có tên là `MyNewTable`. Bảng này sẽ có hai thuộc tính: `ID` là kiểu số (`N`) và `Name` là kiểu chuỗi (`S`). Khóa chính của bảng được xác định bởi thuộc tính `ID`. Cài đặt `--provisioned-throughput` xác định throughput được cấp phát cho bảng (điều này có thể điều chỉnh sau khi tạo bảng).
