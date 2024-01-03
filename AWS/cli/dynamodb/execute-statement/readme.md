Lệnh `execute-statement` trong AWS CLI DynamoDB được sử dụng để thực hiện một lệnh DynamoDB dựa trên một biểu thức được chỉ định.

### Mục Đích

- Thực hiện một lệnh DynamoDB dựa trên một biểu thức được chỉ định trong một tệp JSON.

### Dùng Khi Nào

- Khi bạn muốn thực hiện một hoặc nhiều lệnh DynamoDB (như put, update, delete) dựa trên một biểu thức cụ thể mà bạn đã chuẩn bị trước đó.

### Cú Pháp

```bash
aws dynamodb execute-statement --statement file://<json-file>
```

### Tham Số

- `--statement`: Đường dẫn đến tệp JSON chứa biểu thức lệnh DynamoDB cần thực hiện.

### Ví dụ

```bash
aws dynamodb execute-statement --statement file://execute_statement.json
```

Trong ví dụ này, lệnh sẽ thực hiện các lệnh DynamoDB được xác định trong tệp JSON `execute_statement.json`. Tệp JSON này sẽ chứa các yêu cầu như put, update, delete hoặc các hoạt động DynamoDB khác, được xác định dưới dạng biểu thức để được thực hiện thông qua lệnh `execute-statement`.
