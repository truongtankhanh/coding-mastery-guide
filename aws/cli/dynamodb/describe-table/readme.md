Lệnh `describe-table` trong AWS CLI DynamoDB được sử dụng để lấy thông tin chi tiết về một bảng DynamoDB cụ thể.

### Mục Đích

- Lấy thông tin chi tiết về cấu trúc và cài đặt của một bảng DynamoDB.

### Dùng Khi Nào

- Khi bạn muốn xem thông tin chi tiết về cấu trúc của bảng, bao gồm thuộc tính, key schema, thông tin về throughput, TTL (Time To Live), Stream, và các thông tin khác.

### Cú Pháp

```bash
aws dynamodb describe-table --table-name <table-name>
```

### Tham Số

- `--table-name`: Tên của bảng DynamoDB mà bạn muốn lấy thông tin chi tiết.

### Ví dụ

```bash
aws dynamodb describe-table --table-name MyTable
```

Trong ví dụ này, lệnh sẽ trả về thông tin chi tiết về bảng DynamoDB có tên là `MyTable`. Thông tin này bao gồm cấu trúc của bảng, thuộc tính, key schema, thông tin throughput, TTL, Stream, và các thông tin khác liên quan đến cài đặt của bảng DynamoDB.