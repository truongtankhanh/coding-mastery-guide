Lệnh `transact-write-items` trong AWS CLI DynamoDB được sử dụng để thực hiện một giao dịch (transaction) chứa các thao tác ghi (Put, Update, Delete) trên nhiều bảng DynamoDB.

### Mục Đích

- Thực hiện một giao dịch chứa các thao tác ghi (Put, Update, Delete) trên nhiều bảng DynamoDB trong một lệnh duy nhất.

### Dùng Khi Nào

- Khi bạn muốn thực hiện một chuỗi các thao tác ghi (Put, Update, Delete) trên các bảng DynamoDB khác nhau một cách an toàn và có tính nhất quán.

### Cú Pháp

```bash
aws dynamodb transact-write-items --transact-items file://<json-file>
```

### Tham Số

- `--transact-items`: Đường dẫn đến tệp JSON chứa danh sách các thao tác (Put, Update, Delete) cần thực hiện trong giao dịch.

### Ví dụ

```bash
aws dynamodb transact-write-items --transact-items file://transact_write_items.json
```

Trong ví dụ này, lệnh sẽ thực hiện các thao tác ghi (Put, Update, Delete) được xác định trong tệp JSON `transact_write_items.json`. Tệp JSON này chứa danh sách các yêu cầu ghi từ nhiều bảng DynamoDB và định dạng dưới dạng thao tác trong giao dịch thông qua lệnh `transact-write-items`.
