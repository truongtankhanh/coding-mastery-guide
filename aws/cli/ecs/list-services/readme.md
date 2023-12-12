Lệnh `list-services` không tồn tại trong AWS CLI ECS. Thay vào đó, bạn có thể sử dụng lệnh `describe-services` để liệt kê các services trong một cluster ECS.

Dưới đây là cách sử dụng lệnh `describe-services` để liệt kê các services trong một cluster ECS:

### Mục Đích

- Liệt kê các services trong một cluster ECS.

### Cú Pháp

```bash
aws ecs describe-services --cluster <cluster-name>
```

### Tham Số

- `--cluster`: Tên của cluster ECS mà bạn muốn liệt kê các services.

### Ví Dụ

```bash
aws ecs describe-services --cluster MyCluster
```

Lệnh trên sẽ trả về danh sách các services trong cluster có tên là `MyCluster`. Bạn sẽ nhận được thông tin chi tiết về các services bao gồm tên, ARN, số lượng task đang chạy và nhiều thông tin khác liên quan đến các services này trong cluster.
