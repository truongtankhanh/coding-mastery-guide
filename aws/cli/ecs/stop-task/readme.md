Lệnh `stop-task` trong AWS CLI ECS được sử dụng để dừng một task đang chạy trong một cluster ECS.

### Mục Đích

- Dừng một task đang chạy trong cluster ECS.

### Cú Pháp

```bash
aws ecs stop-task --cluster <cluster-name> --task <task-id>
```

### Tham Số

- `--cluster`: Tên của cluster ECS chứa task cần dừng.
- `--task`: ID của task cần dừng.

### Ví Dụ

```bash
aws ecs stop-task --cluster MyCluster --task task-id-123
```

Lệnh trên sẽ dừng task có ID là `task-id-123` trong cluster có tên là `MyCluster`. Khi được thực thi, task sẽ bị dừng ngay lập tức và không hoàn tất công việc nếu đang chạy.
