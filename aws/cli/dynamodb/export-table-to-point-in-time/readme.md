Lệnh `export-table-to-point-in-time` trong AWS CLI DynamoDB được sử dụng để xuất bảng DynamoDB tới một điểm thời gian cụ thể.

### Mục Đích

- Xuất bảng DynamoDB tới một thời điểm cụ thể để tạo ra một bản sao lưu của dữ liệu tại thời điểm đó.

### Dùng Khi Nào

- Khi bạn muốn tạo một bản sao lưu của bảng DynamoDB ở một thời điểm cụ thể để có thể khôi phục dữ liệu trong quá khứ.

### Cú Pháp

```bash
aws dynamodb export-table-to-point-in-time --table-name <table-name> --s3-bucket <bucket-name> --s3-prefix <prefix> --export-format DYNAMODB_JSON --export-time <timestamp>
```

### Tham Số

- `--table-name`: Tên của bảng DynamoDB cần xuất.
- `--s3-bucket`: Tên của bucket S3 để lưu trữ bản sao lưu.
- `--s3-prefix`: Đường dẫn tiền tố trong bucket S3 cho bản sao lưu.
- `--export-format`: Định dạng xuất (ví dụ: DYNAMODB_JSON).
- `--export-time`: Thời điểm cụ thể cho việc xuất dữ liệu (timestamp).

### Ví dụ

```bash
aws dynamodb export-table-to-point-in-time --table-name MyTable --s3-bucket my-backups --s3-prefix backups/mytable --export-format DYNAMODB_JSON --export-time 1637040000
```

Trong ví dụ này, lệnh sẽ tạo một bản sao lưu của bảng DynamoDB có tên `MyTable` tại thời điểm `1637040000` (được định dạng là timestamp), và lưu trữ bản sao lưu này trong bucket S3 `my-backups` với đường dẫn tiền tố là `backups/mytable` và định dạng xuất là `DYNAMODB_JSON`.
