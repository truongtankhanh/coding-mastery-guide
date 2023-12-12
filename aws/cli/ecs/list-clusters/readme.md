Lệnh `list-clusters` trong AWS CLI ECS (Elastic Container Service) được sử dụng để liệt kê tên của các cluster ECS có sẵn trong tài khoản của bạn.

### Mục Đích

- Hiển thị danh sách tên của các cluster ECS trong tài khoản AWS của bạn.

### Cú Pháp

```bash
aws ecs list-clusters
```

### Tham Số

Không có tham số nào cần được cung cấp.

### Ví Dụ

```bash
aws ecs list-clusters
```

Lệnh trên sẽ trả về danh sách tên của các cluster ECS có trong tài khoản AWS của bạn. Danh sách này chứa các ARN (Amazon Resource Name) của các cluster, và bạn có thể sử dụng thông tin này để thực hiện các tác vụ khác đối với các cluster cụ thể.
