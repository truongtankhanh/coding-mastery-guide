Lệnh `register-task-definition` trong AWS CLI ECS (Elastic Container Service) được sử dụng để đăng ký một task definition mới.

### Mục Đích

- Đăng ký một task definition mới để sử dụng trong ECS.

### Cú Pháp

```bash
aws ecs register-task-definition --cli-input-json file://task-definition.json
```

Trong đó, `task-definition.json` là tệp JSON chứa thông tin về task definition mà bạn muốn đăng ký. Đây là một ví dụ cơ bản về nội dung của tệp JSON:

```json
{
  "family": "my-task",
  "containerDefinitions": [
    {
      "name": "my-container",
      "image": "nginx:latest",
      "cpu": 256,
      "memory": 512,
      "essential": true,
      "portMappings": [
        {
          "containerPort": 80,
          "hostPort": 80
        }
      ]
    }
  ]
}
```

### Tham Số

- `--cli-input-json`: Đường dẫn đến tệp JSON chứa thông tin về task definition.

### Ví Dụ

```bash
aws ecs register-task-definition --cli-input-json file://task-definition.json
```

Lệnh trên sẽ đăng ký một task definition mới với thông tin được định nghĩa trong tệp JSON `task-definition.json`.

Thông tin trong tệp JSON bao gồm `family` (tên của task definition), `containerDefinitions` (định nghĩa container trong task), trong đó bạn có thể chỉ định image, CPU, memory, cổng kết nối, và các thông số khác cho container của task đó. Đây chỉ là một ví dụ đơn giản, bạn có thể thay đổi và thêm các thông tin khác cho task definition tùy theo yêu cầu của bạn.
