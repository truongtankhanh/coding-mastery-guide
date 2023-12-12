Lệnh `transact-get-items` trong AWS CLI DynamoDB được sử dụng để thực hiện một giao dịch (transaction) để lấy thông tin của các item từ nhiều bảng DynamoDB.

### Mục Đích

- Thực hiện một giao dịch để lấy thông tin của các item từ nhiều bảng DynamoDB trong một lệnh API duy nhất.

### Dùng Khi Nào

- Khi bạn cần lấy thông tin của các item từ nhiều bảng DynamoDB trong một lệnh duy nhất để đảm bảo tính nhất quán của dữ liệu.

### Cú Pháp

```bash
aws dynamodb transact-get-items --transact-items file://<json-file>
```

### Tham Số

- `--transact-items`: Đường dẫn đến tệp JSON chứa danh sách các thao tác (Get) cần thực hiện trong giao dịch.

### Ví dụ

```bash
aws dynamodb transact-get-items --transact-items file://transact_get_items.json
```

Trong ví dụ này, lệnh sẽ thực hiện các thao tác Get được xác định trong tệp JSON `transact_get_items.json`. Tệp JSON này chứa danh sách các yêu cầu Get từ nhiều bảng DynamoDB và định dạng dưới dạng thao tác trong giao dịch thông qua lệnh `transact-get-items`.
