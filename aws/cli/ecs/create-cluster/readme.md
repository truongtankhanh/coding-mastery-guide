Lệnh `create-cluster` trong AWS CLI ECS (Elastic Container Service) được sử dụng để tạo một cluster ECS mới.

### Mục Đích

- Tạo một cluster ECS mới để quản lý và chạy các container trên AWS.

### Dùng Khi Nào

- Khi bạn muốn có một môi trường quản lý các container dựa trên ECS trên AWS.

### Cú Pháp

```bash
aws ecs create-cluster --cluster-name <cluster-name> [--settings <settings>] [--tags <tags>]
```

### Tham Số

- `--cluster-name`: Tên cho cluster ECS bạn muốn tạo.
- `--settings`: (Optional) Các cấu hình cho cluster, chẳng hạn như cấu hình CloudWatch Metrics.
- `--tags`: (Optional) Các tag được áp dụng cho cluster để phân loại và quản lý.

### Ví dụ

```bash
aws ecs create-cluster --cluster-name MyCluster --settings "name=containerInsights,value=enabled" --tags "Key=Environment,Value=Production"
```

Trong ví dụ này, lệnh sẽ tạo một cluster ECS mới có tên là `MyCluster` và kích hoạt tính năng Container Insights để thu thập và hiển thị thông tin về các container trên CloudWatch Metrics. Ngoài ra, một tag được áp dụng với key là `Environment` và value là `Production` để phân loại cluster trong môi trường sản phẩm.
