Lệnh `delete-service` trong AWS CLI ECS (Elastic Container Service) được sử dụng để xóa một service trong một cluster ECS.

### Mục Đích

- Xóa một service cụ thể từ một cluster ECS.

### Dùng Khi Nào

- Khi bạn muốn loại bỏ hoàn toàn một service cụ thể và không còn cần sử dụng nó nữa.

### Cú Pháp

```bash
aws ecs delete-service --cluster <cluster-name> --service <service-name>
```

### Tham Số

- `--cluster`: Tên của cluster ECS chứa service cần xóa.
- `--service`: Tên của service ECS bạn muốn xóa.

### Ví Dụ

```bash
aws ecs delete-service --cluster MyCluster --service MyService
```

Lệnh trên sẽ xóa hoàn toàn service có tên là `MyService` từ cluster `MyCluster`. Lưu ý rằng sau khi xóa, tất cả các tasks trong service đó cũng sẽ bị xóa và không thể khôi phục lại được.
