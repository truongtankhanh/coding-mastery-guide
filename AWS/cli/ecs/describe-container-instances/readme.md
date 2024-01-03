Lệnh `describe-container-instances` trong AWS CLI ECS (Elastic Container Service) được sử dụng để hiển thị thông tin chi tiết về các container instance trong một hoặc nhiều cluster ECS.

### Mục Đích

- Hiển thị thông tin chi tiết về các container instance trong các cluster ECS.

### Cú Pháp

```bash
aws ecs describe-container-instances --cluster <cluster-name> --container-instances <instance-id-1> <instance-id-2> ... <instance-id-n>
```

### Tham Số

- `--cluster`: Tên của cluster ECS chứa các container instance cần mô tả.
- `--container-instances`: (Optional) ID của các container instance cụ thể mà bạn muốn lấy thông tin. Nếu không cung cấp, lệnh sẽ trả về thông tin của tất cả các container instances trong cluster.

### Ví Dụ

```bash
aws ecs describe-container-instances --cluster MyCluster --container-instances instance-id-1 instance-id-2
```

Lệnh trên sẽ trả về thông tin chi tiết về các container instances có ID là `instance-id-1` và `instance-id-2` trong cluster có tên là `MyCluster`. Nó bao gồm thông tin về state, tình trạng, các task đang chạy trên instance, và nhiều thông tin khác liên quan đến các container instances này. Nếu không cung cấp ID của container instances, lệnh sẽ trả về thông tin về tất cả các container instances trong cluster.
