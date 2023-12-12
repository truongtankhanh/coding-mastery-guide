Lệnh `list-tasks` trong AWS CLI ECS (Elastic Container Service) được sử dụng để liệt kê các task trong một hoặc nhiều services hoặc các tasks chạy trong một hoặc nhiều cluster ECS.

### Mục Đích

- Liệt kê các task trong một service hoặc cluster ECS.

### Cú Pháp

```bash
aws ecs list-tasks --cluster <cluster-name> --service-name <service-name>
```

hoặc

```bash
aws ecs list-tasks --cluster <cluster-name>
```

### Tham Số

- `--cluster`: Tên của cluster ECS chứa các tasks cần liệt kê.
- `--service-name`: (Optional) Tên của service chứa các tasks cần liệt kê. Nếu không cung cấp, lệnh sẽ liệt kê tất cả các tasks trong cluster.

### Ví Dụ

```bash
aws ecs list-tasks --cluster MyCluster --service-name MyService
```

Lệnh trên sẽ trả về danh sách các tasks thuộc service có tên là `MyService` trong cluster có tên là `MyCluster`. Nếu không cung cấp `--service-name`, lệnh sẽ trả về tất cả các tasks trong cluster được chỉ định.
