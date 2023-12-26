Lệnh `describe-clusters` trong AWS CLI ECS (Elastic Container Service) được sử dụng để lấy thông tin chi tiết về các cluster ECS có sẵn trong tài khoản AWS của bạn.

### Mục Đích

- Hiển thị thông tin chi tiết về các cluster ECS có trong tài khoản của bạn.

### Cú Pháp

```bash
aws ecs describe-clusters --clusters <cluster-name-1> <cluster-name-2> ... <cluster-name-n>
```

### Tham Số

- `--clusters`: (Optional) Tên của các cluster ECS cụ thể bạn muốn lấy thông tin. Nếu không cung cấp, lệnh sẽ trả về thông tin của tất cả các clusters.

### Ví Dụ

```bash
aws ecs describe-clusters --clusters MyCluster1 MyCluster2
```

Lệnh trên sẽ trả về thông tin chi tiết về các cluster có tên là `MyCluster1` và `MyCluster2`. Nó bao gồm thông tin về state, số lượng container instances, các service đang chạy trong cluster, và nhiều thông tin khác liên quan đến các clusters này. Nếu không cung cấp tên cluster, lệnh sẽ trả về thông tin về tất cả các clusters có trong tài khoản AWS của bạn.
