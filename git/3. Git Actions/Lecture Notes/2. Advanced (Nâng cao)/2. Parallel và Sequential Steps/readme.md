**Parallel và Sequential Steps** trong GitHub Actions là cách để xác định liệu các bước trong một công việc (job) cụ thể có thực hiện song song (parallel) hay tuần tự (sequential) để tối ưu thời gian chạy của quy trình làm việc.

---

### Ngữ cảnh:

- Khi xây dựng workflows, có những trường hợp bạn muốn thực hiện các bước độc lập và không phụ thuộc lẫn nhau, có thể thực hiện song song để tiết kiệm thời gian. Tuy nhiên, cũng có những tình huống bạn muốn bước sau phụ thuộc vào kết quả của bước trước đó, trong trường hợp này, thực hiện tuần tự là lựa chọn phù hợp.

---

### Cách sử dụng và ví dụ:

#### Parallel Steps:

Dưới đây là một ví dụ về cách thực hiện các bước song song trong một job:

```yaml
name: Parallel Steps

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [12, 14, 16]

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Setup Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node-version }}

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test
```

Trong ví dụ này:

- Workflow có tên là `Parallel Steps` và sẽ được kích hoạt khi có sự kiện push vào nhánh `main`.
- Công việc (job) có tên là `build` và sẽ chạy trên môi trường `ubuntu-latest`.
- Sử dụng `strategy` để xác định ma trận với các phiên bản Node.js khác nhau để thực hiện các bước song song cho mỗi phiên bản.

---

#### Sequential Steps:

Ví dụ về cách thực hiện các bước tuần tự trong một job:

```yaml
name: Sequential Steps

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

      - name: Setup Node.js v12
        uses: actions/setup-node@v2
        with:
          node-version: "12"

      - name: Install dependencies
        run: npm install

      - name: Run tests on Node.js v12
        run: npm test

      - name: Setup Node.js v14
        uses: actions/setup-node@v2
        with:
          node-version: "14"

      - name: Install dependencies
        run: npm install

      - name: Run tests on Node.js v14
        run: npm test
```

Trong ví dụ này:

- Cũng có một công việc `build` được kích hoạt khi có sự kiện push vào nhánh `main`.
- Các bước được liệt kê một cách tuần tự, lần lượt cài đặt Node.js v12, cài đặt dependencies, chạy tests, sau đó làm tương tự cho Node.js v14.

---

Việc sử dụng parallel và sequential steps giúp tối ưu hoá thời gian chạy và tự động hóa các công việc trong quy trình làm việc của bạn, phụ thuộc vào yêu cầu cụ thể của từng công việc.

---
