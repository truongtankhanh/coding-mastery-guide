Lệnh `update-table` trong AWS CLI DynamoDB được sử dụng để cập nhật cài đặt của một bảng DynamoDB đã tồn tại.

### Mục Đích

- Cập nhật cấu hình của một bảng DynamoDB đã tồn tại.

### Dùng Khi Nào

- Khi bạn muốn thay đổi cấu trúc của bảng DynamoDB, thêm hoặc loại bỏ thuộc tính, điều chỉnh thuộc tính khóa hoặc thay đổi cài đặt thuộc tính của bảng.

### Cú Pháp

```bash
aws dynamodb update-table --table-name <table-name> --attribute-definitions <attribute-definitions> --global-secondary-index-updates <global-secondary-index-updates> --provisioned-throughput <provisioned-throughput> --billing-mode <billing-mode>
```

### Tham Số

- `--table-name`: Tên của bảng DynamoDB bạn muốn cập nhật.
- `--attribute-definitions`: Định nghĩa các thuộc tính cho bảng (nếu cần).
- `--global-secondary-index-updates`: Cập nhật các chỉ mục toàn cầu (nếu cần).
- `--provisioned-throughput`: Cài đặt throughput provisioned mode (nếu sử dụng).
- `--billing-mode`: Chế độ tính phí cho bảng (nếu sử dụng).

### Ví dụ

```bash
aws dynamodb update-table --table-name MyTable --attribute-definitions AttributeName=NewAttribute,AttributeType=S --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5
```

Trong ví dụ này, lệnh sẽ cập nhật bảng DynamoDB có tên `MyTable` bằng cách thêm một thuộc tính mới có tên là `NewAttribute` với kiểu dữ liệu là `S` và cài đặt throughput provisioned mode là 5 đơn vị đọc và 5 đơn vị ghi.
