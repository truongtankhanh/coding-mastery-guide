**Self-Hosted Runners** trong GitHub Actions cho phép bạn sử dụng các máy chủ hoặc môi trường của riêng bạn để thực hiện các workflow, mang đến sự linh hoạt cao hơn trong việc quản lý môi trường thực thi cho các công việc (jobs) của bạn.

### Ngữ cảnh:

Khi sử dụng GitHub Actions, GitHub cung cấp các runners (máy chủ thực thi) để chạy các quy trình làm việc (workflows) của bạn. Tuy nhiên, có những trường hợp cụ thể mà việc sử dụng các runners tự quản lý, tức là self-hosted runners, sẽ mang lại nhiều lợi ích. Điều này có thể bao gồm quản lý dễ dàng hơn của môi trường thực thi, yêu cầu cấu hình đặc biệt, hoặc đáp ứng yêu cầu về bảo mật.

---

### Cách sử dụng và ví dụ:

- Để sử dụng self-hosted runners trong GitHub Actions, bạn cần thiết lập và đăng ký máy chủ của mình để có thể chạy các workflows từ GitHub.

---

#### Bước 1: Đăng ký self-hosted runner với repository:

1. Truy cập vào repository trên GitHub của bạn.
2. Chọn tab "Settings".
3. Chọn "Actions" từ menu bên trái.
4. Chọn "Add runner" hoặc "Add self-hosted runner".
5. Bắt đầu quá trình đăng ký và cấu hình self-hosted runner.

#### Bước 2: Sử dụng self-hosted runner trong workflows:

Sau khi đã đăng ký và cấu hình self-hosted runner, bạn có thể sử dụng nó trong các workflows bằng cách chỉ định sử dụng runner của bạn trong file workflow YAML.

Ví dụ:

```yaml
name: Workflow using Self-Hosted Runner

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: self-hosted

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      # Các bước thực thi khác...
```

---

Ở đây, `runs-on: self-hosted` đặt runner cho job trong workflow của bạn là self-hosted runner mà bạn đã đăng ký và cấu hình trước đó.

Việc sử dụng self-hosted runners mang lại sự linh hoạt lớn hơn trong việc quản lý môi trường thực thi và cung cấp một lựa chọn tốt cho các trường hợp cụ thể khi bạn cần kiểm soát hoàn toàn các tài nguyên thực thi.

---
