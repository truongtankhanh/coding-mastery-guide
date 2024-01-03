Lệnh `delete-cluster` trong AWS CLI ECS (Elastic Container Service) được sử dụng để xóa một cluster ECS.

### Mục Đích

- Xóa một cluster ECS và tất cả các resource liên quan.

### Dùng Khi Nào

- Khi bạn muốn loại bỏ hoàn toàn một cluster ECS và không còn cần sử dụng nó nữa.

### Cú Pháp

```bash
aws ecs delete-cluster --cluster <cluster-name>
```

### Tham Số

- `--cluster`: Tên của cluster ECS bạn muốn xóa.

### Ví Dụ

```bash
aws ecs delete-cluster --cluster MyCluster
```

Lệnh trên sẽ xóa hoàn toàn cluster có tên là `MyCluster`. Lưu ý rằng sau khi xóa, tất cả các tài nguyên (tasks, services, và các resource khác) liên quan đến cluster cũng sẽ bị xóa và không thể khôi phục lại được. Hãy chắc chắn rằng bạn đã sao lưu và lưu trữ dữ liệu cần thiết trước khi thực hiện xóa.
