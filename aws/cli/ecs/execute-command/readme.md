Lệnh `execute-command` trong AWS CLI ECS (Elastic Container Service) được sử dụng để thực thi các lệnh trong một container đang chạy trên một task hoặc service trong ECS.

### Mục Đích

- Thực thi các lệnh trong một container đang chạy trong ECS mà không cần kết nối trực tiếp vào container đó.

### Cú Pháp

```bash
aws ecs execute-command --cluster <cluster-name> --task <task-id> --container <container-name> --command <command-to-execute>
```

### Tham Số

- `--cluster`: Tên của cluster ECS chứa task mà bạn muốn thực thi lệnh.
- `--task`: ID của task chứa container cần thực thi lệnh.
- `--container`: Tên của container trong task mà bạn muốn thực thi lệnh.
- `--command`: Lệnh cần thực thi trong container.

### Ví Dụ

```bash
aws ecs execute-command --cluster MyCluster --task task-id-123 --container my-container --command "ls -al"
```

Lệnh trên sẽ thực thi lệnh `ls -al` trong container có tên là `my-container` trong task có ID là `task-id-123` trong cluster có tên là `MyCluster`. Điều này giúp bạn thực hiện các lệnh mà không cần phải kết nối trực tiếp vào container, giúp quản lý và kiểm tra các quá trình trong container một cách thuận tiện.
