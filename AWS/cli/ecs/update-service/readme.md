Lệnh `update-service` trong AWS CLI ECS được sử dụng để cập nhật cấu hình của một service trong cluster ECS.

### Mục Đích

- Cập nhật cấu hình của một service trong cluster ECS.

### Cú Pháp

```bash
aws ecs update-service --cluster <cluster-name> --service <service-name> --desired-count <desired-count> --task-definition <task-definition>
```

### Tham Số

- `--cluster`: Tên của cluster ECS chứa service cần cập nhật.
- `--service`: Tên của service cần cập nhật.
- `--desired-count`: Số lượng task mong muốn chạy sau khi cập nhật.
- `--task-definition`: ARN hoặc tên của task definition mới sẽ được sử dụng cho service.

### Ví Dụ

```bash
aws ecs update-service --cluster MyCluster --service MyService --desired-count 3 --task-definition my-updated-task-definition
```

Lệnh trên sẽ cập nhật service có tên là `MyService` trong cluster `MyCluster` để chạy với 3 task, sử dụng task definition mới có tên là `my-updated-task-definition`.

Thông qua lệnh này, bạn có thể điều chỉnh số lượng task đang chạy, hoặc thay đổi task definition mà service đang sử dụng, giúp cập nhật ứng dụng của bạn trong môi trường ECS.
