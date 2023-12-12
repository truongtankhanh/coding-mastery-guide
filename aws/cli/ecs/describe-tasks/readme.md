Lệnh `describe-tasks` trong AWS CLI ECS (Elastic Container Service) được sử dụng để hiển thị thông tin chi tiết về các tasks (nhiệm vụ) trong một hoặc nhiều cluster ECS.

### Mục Đích

- Hiển thị thông tin chi tiết về các tasks trong các cluster ECS.

### Cú Pháp

```bash
aws ecs describe-tasks --cluster <cluster-name> --tasks <task-id-1> <task-id-2> ... <task-id-n>
```

### Tham Số

- `--cluster`: Tên của cluster ECS chứa các tasks cần mô tả.
- `--tasks`: (Optional) ID của các tasks cụ thể mà bạn muốn lấy thông tin. Nếu không cung cấp, lệnh sẽ trả về thông tin của tất cả các tasks trong cluster.

### Ví Dụ

```bash
aws ecs describe-tasks --cluster MyCluster --tasks task-id-1 task-id-2
```

Lệnh trên sẽ trả về thông tin chi tiết về các tasks có ID là `task-id-1` và `task-id-2` trong cluster có tên là `MyCluster`. Thông tin này bao gồm tình trạng, task ARN, task definition, và nhiều thông tin khác liên quan đến các tasks này. Nếu không cung cấp ID của tasks, lệnh sẽ trả về thông tin về tất cả các tasks trong cluster.
