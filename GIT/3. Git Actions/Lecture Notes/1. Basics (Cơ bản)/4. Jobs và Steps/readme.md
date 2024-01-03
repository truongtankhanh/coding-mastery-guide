Trong ngữ cảnh của GitHub Actions, **Jobs** định nghĩa các phần công việc cụ thể cần được thực hiện trong một workflow. Mỗi job trong workflow có thể chứa một hoặc nhiều bước (steps) để thực hiện các nhiệm vụ nhất định. Các công việc có thể được thực hiện song song hoặc tuần tự, tùy thuộc vào cách bạn cấu hình chúng.

### Ngữ cảnh:

Khi bạn đang tạo một workflow trong GitHub Actions để tự động hóa các quy trình trong dự án của mình, bạn có thể muốn chia các công việc (jobs) thành các phần riêng biệt để thực hiện các nhiệm vụ khác nhau. Ví dụ, một công việc có thể đảm nhận việc kiểm tra mã nguồn, một công việc khác có thể xây dựng ứng dụng, và một công việc khác có thể triển khai ứng dụng.

### Cách sử dụng và ví dụ:

Dưới đây là một ví dụ đơn giản về cách định nghĩa các công việc trong một workflow bằng cú pháp YAML:

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

  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "12"

      - name: Run tests
        run: npm test
```

Trong ví dụ này:

- Có hai công việc được định nghĩa: `build` và `test`.
- Mỗi công việc đều sử dụng `runs-on` để xác định môi trường thực thi (ở đây là `ubuntu-latest`).
- Mỗi công việc chứa các bước (`steps`) cần thiết để thực hiện các nhiệm vụ như checkout mã nguồn, cài đặt Node.js và chạy các lệnh nhất định (`npm install`, `npm test`).

Các công việc này có thể thực hiện đồng thời hoặc tuần tự, tùy thuộc vào cách bạn cấu hình workflow của mình. Việc sử dụng các công việc trong GitHub Actions giúp tổ chức và tự động hóa các quy trình làm việc của bạn một cách hiệu quả và linh hoạt.

---

Trong GitHub Actions, **Steps** (Bước) là các hành động cụ thể được thực hiện trong một job. Mỗi step đại diện cho một công việc cụ thể, như chạy một lệnh cụ thể, tải xuống tài liệu, thực hiện kiểm thử, hoặc triển khai ứng dụng. Các bước được sắp xếp theo thứ tự mà chúng sẽ được thực hiện trong quy trình làm việc (workflow).

### Ngữ cảnh:

Khi bạn xác định các công việc (jobs) trong một workflow, các steps được sử dụng để cụ thể hóa từng bước trong các công việc này. Điều này cho phép bạn tự động hóa các nhiệm vụ cụ thể như kiểm tra mã nguồn, xây dựng ứng dụng, triển khai phiên bản, v.v.

### Cách sử dụng và ví dụ:

Dưới đây là một ví dụ về cách định nghĩa các bước (steps) trong một job bằng cú pháp YAML:

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

      - name: Build application
        run: npm build

      - name: Run tests
        run: npm test
```

Trong ví dụ này:

- Có một công việc (job) được đặt tên là `build`.
- Các steps của công việc này bao gồm việc checkout mã nguồn, cài đặt Node.js, cài đặt dependencies (`npm install`), xây dựng ứng dụng (`npm build`), và chạy các bài kiểm tra (`npm test`).
- Mỗi step có một `name` để mô tả công việc được thực hiện trong bước đó.
- Các steps này sẽ được thực hiện tuần tự theo thứ tự được định nghĩa.

Các steps này cung cấp khả năng tự động hóa các quy trình công việc của bạn trên GitHub, giúp bạn kiểm tra, xây dựng và kiểm tra ứng dụng một cách tự động và liên tục mỗi khi có sự thay đổi vào mã nguồn.

---
