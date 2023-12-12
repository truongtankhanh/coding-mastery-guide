**Actions (Các hành động)** trong GitHub Actions là các thành phần tái sử dụng được xây dựng sẵn để thực hiện các công việc cụ thể. Đây là các đoạn mã được đóng gói sẵn để thực hiện các tác vụ nhất định, từ các bước nhỏ như chạy lệnh, tạo tập tin, đến các quy trình phức tạp như triển khai ứng dụng, kiểm tra mã nguồn, xây dựng hệ thống, v.v.

---

### Ngữ cảnh:

- Khi xây dựng workflows trong GitHub Actions, việc sử dụng Actions cho phép tái sử dụng mã nguồn một cách dễ dàng. Thay vì phải viết lại mã cho từng công việc, bạn có thể sử dụng các hành động có sẵn từ thư viện hành động của GitHub hoặc cũng có thể tạo và chia sẻ các hành động của riêng bạn.

---

### Cách sử dụng và ví dụ:

Dưới đây là một ví dụ đơn giản về việc sử dụng một hành động có sẵn từ thư viện hành động của GitHub trong một workflow:

```yaml
name: CI Workflow
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

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

      - name: Upload test coverage
        uses: actions/upload-artifact@v2
        with:
          name: coverage-report
          path: ./coverage
```

---

Trong ví dụ này:

- Có một công việc (job) đặt tên là `build`.
- Các steps của công việc này bao gồm việc checkout mã nguồn, cài đặt Node.js, cài đặt dependencies (`npm install`), chạy các bài kiểm tra (`npm test`).
- Bước cuối cùng sử dụng hành động `actions/upload-artifact@v2` để tải lên một phần của dữ liệu từ thư mục `./coverage` lên GitHub để có thể xem báo cáo về coverage.

Các hành động giúp tái sử dụng mã, tạo quy trình làm việc linh hoạt và dễ dàng mở rộng, cho phép bạn tự động hóa các công việc phức tạp một cách hiệu quả trong GitHub Actions.

---
