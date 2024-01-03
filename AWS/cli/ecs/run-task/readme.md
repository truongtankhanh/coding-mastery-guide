Lệnh `run-task` trong AWS CLI ECS (Elastic Container Service) được sử dụng để khởi chạy một task cụ thể từ một task definition.

### Mục Đích

- Khởi chạy một task từ một task definition đã đăng ký.

### Cú Pháp

```bash
aws ecs run-task --cluster <cluster-name> --task-definition <task-definition> --launch-type <launch-type>
```

### Tham Số

- `--cluster`: Tên của cluster ECS mà bạn muốn khởi chạy task.
- `--task-definition`: ARN hoặc tên của task definition sẽ được sử dụng để chạy task.
- `--launch-type`: (Optional) Loại khởi chạy (launch type) của task. Đây có thể là "EC2" hoặc "FARGATE".

### Ví Dụ

```bash
aws ecs run-task --cluster MyCluster --task-definition my-task-definition --launch-type EC2
```

Lệnh trên sẽ khởi chạy một task từ task definition có tên là `my-task-definition` trong cluster có tên là `MyCluster` và sử dụng launch type là EC2.

Bạn có thể thêm các tham số khác như số lượng task cần chạy, thời gian chờ timeout, thông tin về network và các tham số khác tùy thuộc vào yêu cầu cụ thể của bạn.
