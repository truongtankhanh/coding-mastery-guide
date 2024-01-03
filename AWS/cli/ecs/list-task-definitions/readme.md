Lệnh `list-task-definitions` không tồn tại trong AWS CLI ECS. Thay vào đó, bạn có thể sử dụng lệnh `describe-task-definition` để liệt kê hoặc lấy thông tin chi tiết về các task definitions.

Dưới đây là cách sử dụng lệnh `describe-task-definition` để liệt kê thông tin chi tiết về tất cả các task definitions:

### Mục Đích

- Liệt kê thông tin chi tiết về các task definitions.

### Cú Pháp

```bash
aws ecs describe-task-definition
```

### Tham Số

Không có tham số nào cần được cung cấp.

### Ví Dụ

```bash
aws ecs describe-task-definition
```

Lệnh trên sẽ trả về thông tin chi tiết về tất cả các task definitions có sẵn trong tài khoản AWS của bạn. Thông tin này bao gồm các thông tin như tên, ARN, container definitions, network configurations, volumes, và các thông số khác của các task definitions.
