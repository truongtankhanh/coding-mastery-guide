**Continuous Deployment (Triển khai liên tục)** là việc sử dụng GitHub Actions để tự động hóa quá trình triển khai ứng dụng mỗi khi có commit mới được thêm vào repository hoặc khi có tags được tạo ra, giúp cải thiện quy trình phát triển và đảm bảo rằng phiên bản mới của ứng dụng được triển khai một cách nhanh chóng và liên tục.

---

### Ngữ cảnh:

- Continuous Deployment (CD) là một phần quan trọng của Continuous Integration/Continuous Deployment (CI/CD) pipeline. Nó giúp tự động hóa việc đưa các thay đổi từ môi trường phát triển (development) vào môi trường sản phẩm (production), giúp giảm thời gian và công sức cần thiết cho quá trình triển khai.

---

### Cách sử dụng và ví dụ:

- Để thực hiện Continuous Deployment bằng GitHub Actions, bạn có thể thiết lập workflows để triển khai tự động sau mỗi lần có sự kiện push vào nhánh cụ thể hoặc khi có tag mới được tạo ra.

---

#### Ví dụ triển khai sau mỗi lần push vào nhánh main:

```yaml
name: Continuous Deployment

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      # Các bước triển khai, ví dụ: deploy lên server, cập nhật production, etc.
```

Trong ví dụ này:

- Workflow sẽ được kích hoạt sau mỗi lần có push vào nhánh `main`.
- Công việc `deploy` được thiết lập để chạy trên môi trường `ubuntu-latest`.
- Các bước trong công việc `deploy` sẽ thực hiện quá trình triển khai như cập nhật production, deploy lên server, hoặc các bước khác phù hợp với quy trình triển khai của bạn.

---

#### Ví dụ triển khai sau mỗi lần tạo tag:

```yaml
name: Continuous Deployment on Tag

on:
  push:
    tags:
      - "v*"

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      # Các bước triển khai, ví dụ: build, deploy, release, etc.
```

Trong ví dụ này:

- Workflow sẽ được kích hoạt sau mỗi lần có push kèm tag có định dạng bắt đầu bằng `v`.
- Công việc `deploy` được thiết lập để chạy trên môi trường `ubuntu-latest`.
- Các bước trong công việc `deploy` sẽ thực hiện quá trình triển khai như build, deploy, release sản phẩm dựa trên tag mới.

---

Việc thiết lập Continuous Deployment giúp tự động hóa và tăng tính liên tục của quá trình phát triển và triển khai ứng dụng, giúp đảm bảo rằng các thay đổi mới được triển khai một cách nhanh chóng và đáng tin cậy.

---
