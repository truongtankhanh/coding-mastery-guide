Lệnh `batch-execute-statement` trong AWS CLI DynamoDB được sử dụng để thực hiện một batch các câu lệnh DynamoDB cùng một lúc.

### Mục Đích

- Thực hiện một loạt các câu lệnh DynamoDB (put, update, delete...) từ một tệp JSON chứa các yêu cầu.

### Dùng Khi Nào

- Khi bạn muốn thực hiện đồng thời nhiều thao tác DynamoDB như ghi dữ liệu, cập nhật hoặc xóa nhiều item một cách hiệu quả và tiết kiệm thời gian.

### Cú Pháp

```bash
aws dynamodb batch-execute-statement --request-items file://<json-file>
```

### Tham Số

- `--request-items`: Đường dẫn đến tệp JSON chứa danh sách các lệnh cần thực hiện.

### Ví dụ

Giả sử bạn có một tệp JSON có tên là `batch_commands.json` chứa các yêu cầu thực hiện batch như put, update hoặc delete item trong DynamoDB. Bạn muốn thực hiện các yêu cầu này cùng một lúc, bạn có thể sử dụng lệnh sau:

```bash
aws dynamodb batch-execute-statement --request-items file://batch_commands.json
```

Trong `batch_commands.json`, có thể có nhiều yêu cầu thực hiện các hoạt động DynamoDB khác nhau như ghi dữ liệu, cập nhật hoặc xóa item. Ví dụ:

```json
{
  "Statements": [
    {
      "PutRequest": {
        "Item": {
          "ID": { "N": "1" },
          "Name": { "S": "John" }
        }
      }
    },
    {
      "Update": {
        "TableName": "MyTable",
        "Key": {
          "ID": { "N": "1" }
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
          "ID": { "N": "2" }
        }
      }
    }
  ]
}
```

Trong tệp JSON trên, chúng ta có các yêu cầu ghi (`PutRequest`), cập nhật (`Update`), và xóa (`DeleteRequest`) item trong bảng DynamoDB. Khi sử dụng lệnh `batch-execute-statement` và trỏ đến tệp này, các yêu cầu này sẽ được thực hiện cùng một lúc.
