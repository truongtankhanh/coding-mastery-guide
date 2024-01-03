Lệnh `batch-write-item` trong AWS CLI DynamoDB được sử dụng để ghi nhiều item vào DynamoDB cùng một lúc.

### Mục Đích

- Thực hiện ghi (put, update, delete) nhiều item vào DynamoDB từ một tệp JSON chứa các yêu cầu.

### Dùng Khi Nào

- Khi bạn muốn thực hiện đồng thời nhiều thao tác ghi vào DynamoDB như thêm, cập nhật hoặc xóa nhiều item một cách hiệu quả và tiết kiệm thời gian.

### Cú Pháp

```bash
aws dynamodb batch-write-item --request-items file://<json-file>
```

### Tham Số

- `--request-items`: Đường dẫn đến tệp JSON chứa danh sách các yêu cầu ghi cần thực hiện.

### Ví dụ

Giả sử bạn có một tệp JSON có tên là `batch_write_commands.json` chứa các yêu cầu ghi như put, update hoặc delete item trong DynamoDB. Bạn muốn thực hiện các yêu cầu này cùng một lúc, bạn có thể sử dụng lệnh sau:

```bash
aws dynamodb batch-write-item --request-items file://batch_write_commands.json
```

Trong `batch_write_commands.json`, có thể có nhiều yêu cầu thực hiện các hoạt động DynamoDB khác nhau như ghi dữ liệu, cập nhật hoặc xóa item. Ví dụ:

```json
{
  "RequestItems": {
    "MyTable": [
      {
        "PutRequest": {
          "Item": {
            "ID": { "N": "1" },
            "Name": { "S": "John" }
          }
        }
      },
      {
        "UpdateRequest": {
          "Key": {
            "ID": { "N": "2" }
          },
          "UpdateExpression": "SET Age = :val1",
          "ExpressionAttributeValues": {
            ":val1": { "N": "30" }
          }
        }
      },
      {
        "DeleteRequest": {
          "Key": {
            "ID": { "N": "3" }
          }
        }
      }
    ]
  }
}
```

Trong tệp JSON trên, chúng ta có các yêu cầu ghi (`PutRequest`), cập nhật (`UpdateRequest`), và xóa (`DeleteRequest`) item trong bảng DynamoDB. Khi sử dụng lệnh `batch-write-item` và trỏ đến tệp này, các yêu cầu này sẽ được thực hiện cùng một lúc vào DynamoDB.
