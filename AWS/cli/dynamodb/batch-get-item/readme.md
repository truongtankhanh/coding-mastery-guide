Lệnh `batch-get-item` trong AWS CLI DynamoDB được sử dụng để lấy thông tin của nhiều item từ DynamoDB cùng một lúc.

### Mục Đích

- Lấy thông tin của nhiều item từ DynamoDB dựa trên các primary key được chỉ định trong tệp JSON.

### Dùng Khi Nào

- Khi bạn cần lấy thông tin của nhiều item từ bảng DynamoDB cùng một lúc, thường dựa trên các primary key.

### Cú Pháp

```bash
aws dynamodb batch-get-item --request-items file://<json-file>
```

### Tham Số

- `--request-items`: Đường dẫn đến tệp JSON chứa danh sách các key của các item cần lấy thông tin.

### Ví dụ

Giả sử bạn có một tệp JSON có tên là `keys_to_get.json` chứa danh sách các key của các item mà bạn muốn lấy thông tin từ DynamoDB. Bạn muốn lấy thông tin của các item này cùng một lúc, bạn có thể sử dụng lệnh sau:

```bash
aws dynamodb batch-get-item --request-items file://keys_to_get.json
```

Trong `keys_to_get.json`, danh sách các key có thể được biểu diễn như sau:

```json
{
  "Keys": [
    {
      "ID": { "N": "1" }
    },
    {
      "ID": { "N": "2" }
    },
    {
      "ID": { "N": "3" }
    }
  ]
}
```

Trong ví dụ này, chúng ta có danh sách các key của các item mà bạn muốn lấy thông tin từ DynamoDB. Khi sử dụng lệnh `batch-get-item` và trỏ đến tệp JSON này, thông tin của các item có các key tương ứng sẽ được lấy cùng một lúc từ DynamoDB.
