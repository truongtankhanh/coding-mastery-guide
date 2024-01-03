Lệnh `execute-transaction` trong AWS CLI DynamoDB được sử dụng để thực hiện một giao dịch chứa nhiều thao tác (Put, Update, Delete) trong DynamoDB.

### Mục Đích

- Thực hiện một giao dịch (transaction) chứa nhiều thao tác DynamoDB trong một gọi API duy nhất.

### Dùng Khi Nào

- Khi bạn muốn thực hiện một chuỗi các thao tác DynamoDB như Put, Update, Delete trên các item khác nhau một cách an toàn và có tính nhất quán.

### Cú Pháp

```bash
aws dynamodb execute-transaction --transact-statements file://<json-file>
```

### Tham Số

- `--transact-statements`: Đường dẫn đến tệp JSON chứa danh sách các thao tác (Put, Update, Delete) cần thực hiện trong giao dịch.

### Ví dụ

```bash
aws dynamodb execute-transaction --transact-statements file://transaction_actions.json
```

Trong ví dụ này, lệnh sẽ thực hiện các thao tác DynamoDB được xác định trong tệp JSON `transaction_actions.json`. Tệp JSON này sẽ chứa danh sách các thao tác DynamoDB được xác định dưới dạng các lệnh Put, Update, Delete để thực hiện trong một giao dịch thông qua lệnh `execute-transaction`.
