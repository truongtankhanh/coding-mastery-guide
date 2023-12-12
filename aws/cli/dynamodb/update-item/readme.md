Lệnh `update-item` trong AWS CLI DynamoDB được sử dụng để cập nhật một item đã tồn tại trong bảng DynamoDB.

### Mục Đích

- Cập nhật thông tin của một item đã tồn tại trong bảng DynamoDB.

### Dùng Khi Nào

- Khi bạn muốn cập nhật một item đã tồn tại trong bảng DynamoDB, thêm thuộc tính mới hoặc cập nhật giá trị của các thuộc tính hiện có.

### Cú Pháp

```bash
aws dynamodb update-item --table-name <table-name> --key '{"<key-name>": {"<key-type>": "<key-value>"}}' --update-expression "<update-expression>" [--expression-attribute-values <expression-attribute-values>] [--return-values <return-values>]
```

### Tham Số

- `--table-name`: Tên của bảng DynamoDB chứa item cần cập nhật.
- `--key`: Khóa chính của item cần cập nhật, được định dạng dưới dạng JSON.
- `--update-expression`: Biểu thức cập nhật cho item.
- `--expression-attribute-values`: (Optional) Định nghĩa các giá trị biểu thức trong cú pháp cập nhật.
- `--return-values`: (Optional) Loại giá trị trả về sau khi cập nhật (ví dụ: `ALL_NEW`, `UPDATED_NEW`, `ALL_OLD`, `UPDATED_OLD`, `NONE`).

### Ví dụ

```bash
aws dynamodb update-item --table-name MyTable --key '{"ID": {"N": "1"}}' --update-expression "SET #attrName = :attrValue" --expression-attribute-values '{":attrValue": {"S": "UpdatedValue"}}' --expression-attribute-names '{"#attrName": "AttributeName"}'
```

Trong ví dụ này, lệnh sẽ cập nhật giá trị của thuộc tính `AttributeName` thành `"UpdatedValue"` cho item có khóa chính `ID` có giá trị là `1` trong bảng có tên `MyTable`.
