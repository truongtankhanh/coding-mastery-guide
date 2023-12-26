Lệnh `describe-time-to-live` trong AWS CLI DynamoDB được sử dụng để lấy thông tin về cấu hình Time to Live (TTL) của một bảng DynamoDB.

### Mục Đích

- Lấy thông tin về cấu hình Time to Live (TTL) của bảng DynamoDB, bao gồm cài đặt TTL attribute và trạng thái TTL.

### Dùng Khi Nào

- Khi bạn cần kiểm tra cài đặt TTL của một bảng DynamoDB, xem thuộc tính nào được sử dụng cho TTL và trạng thái TTL hiện tại.

### Cú Pháp

```bash
aws dynamodb describe-time-to-live --table-name <table-name>
```

### Tham Số

- `--table-name`: Tên của bảng DynamoDB mà bạn muốn lấy thông tin về cấu hình TTL.

### Ví dụ

```bash
aws dynamodb describe-time-to-live --table-name MyTable
```

Trong ví dụ này, lệnh sẽ trả về thông tin về cấu hình TTL của bảng DynamoDB có tên là `MyTable`. Thông tin này bao gồm cài đặt của thuộc tính TTL và trạng thái hiện tại của TTL trong bảng đó.
