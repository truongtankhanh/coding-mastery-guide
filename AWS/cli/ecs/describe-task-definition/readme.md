Lệnh `describe-task-definition` trong AWS CLI ECS (Elastic Container Service) được sử dụng để hiển thị thông tin chi tiết về một hoặc nhiều task definitions.

### Mục Đích

- Hiển thị thông tin chi tiết về các task definitions.

### Cú Pháp

```bash
aws ecs describe-task-definition --task-definition <task-definition-arn-or-family>
```

### Tham Số

- `--task-definition`: ARN hoặc tên của task definition cần mô tả.

### Ví Dụ

```bash
aws ecs describe-task-definition --task-definition my-task-definition:1
```

Lệnh trên sẽ trả về thông tin chi tiết về task definition có tên là `my-task-definition` và phiên bản 1. Thông tin bao gồm các container definitions trong task, network configurations, volumes, và nhiều thông tin khác liên quan đến task definition đó.

Nếu bạn cung cấp ARN của task definition, lệnh sẽ trả về thông tin của task definition cụ thể. Nếu bạn chỉ cung cấp tên của family (ví dụ: `my-task-definition`) mà không chỉ định phiên bản, lệnh sẽ trả về thông tin về phiên bản task definition mới nhất của family đó.
