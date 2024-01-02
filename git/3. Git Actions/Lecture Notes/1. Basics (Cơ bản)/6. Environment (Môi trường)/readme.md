Trong GitHub Actions, **Environment (Môi trường)** cung cấp các thiết lập và biến môi trường cần thiết cho việc thực thi các steps trong một workflow. Điều này bao gồm việc cung cấp các thông tin như biến môi trường, khóa bí mật (secrets), các thiết lập kết nối với dịch vụ bên ngoài, các biến toàn cục cho các bước thực thi, v.v.

---

### Ngữ cảnh:

- Khi bạn xây dựng một workflow trong GitHub Actions, việc sử dụng môi trường cho phép bạn thiết lập và truy cập các thông tin quan trọng mà các steps cần thiết để thực hiện công việc một cách hiệu quả và an toàn.

---

### Cách sử dụng và ví dụ:

Dưới đây là một ví dụ đơn giản về cách sử dụng môi trường trong một workflow:

```yaml
name: CI Workflow
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      NODE_ENV: production

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "14"

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test
```

---

Trong ví dụ này:

- Được đặt tên là `CI Workflow` và sẽ chạy khi có sự kiện push vào nhánh `main`.
- Có một công việc (job) đặt tên là `build`.
- Cấu hình `runs-on` để chạy trên máy ảo `ubuntu-latest`.
- Sử dụng môi trường (environment) để đặt biến `NODE_ENV` thành `production`.
- Các steps bao gồm việc checkout mã nguồn, cài đặt Node.js, cài đặt dependencies (`npm install`), và chạy các bài kiểm tra (`npm test`).

Trong trường hợp này, biến môi trường `NODE_ENV` được thiết lập thành `production`, có thể được sử dụng trong các bước thực thi để xác định môi trường làm việc và điều chỉnh quy trình làm việc một cách linh hoạt. Biến môi trường có thể chứa thông tin nhạy cảm hoặc cấu hình quan trọng và cung cấp chúng một cách an toàn cho các steps trong workflow.

---
