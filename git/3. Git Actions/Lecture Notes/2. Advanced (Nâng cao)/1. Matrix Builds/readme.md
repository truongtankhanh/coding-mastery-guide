**Matrix Builds** trong GitHub Actions là cách để thực hiện và kiểm thử các phiên bản, hệ điều hành, ngôn ngữ khác nhau trong một workflow duy nhất. Điều này giúp tiết kiệm thời gian và tài nguyên bằng cách thực hiện cùng một quy trình cho nhiều môi trường khác nhau.

---

### Ngữ cảnh:

- Khi phát triển phần mềm, thường cần kiểm tra và xác minh ứng dụng trên nhiều phiên bản hệ điều hành, phiên bản ngôn ngữ khác nhau để đảm bảo tính tương thích và ổn định của ứng dụng. Sử dụng Matrix Builds giúp tự động hóa việc thực hiện các bài kiểm tra này trên nhiều môi trường khác nhau.

---

### Cách sử dụng và ví dụ:

Dưới đây là một ví dụ cụ thể về cách sử dụng Matrix Builds trong một workflow:

```yaml
name: Matrix Build

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macOS-latest]
        node-version: [10, 12, 14]

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node-version }}

      - name: Run tests on ${{ matrix.os }} with Node.js ${{ matrix.node-version }}
        run: |
          # Command to run tests or build based on the matrix variables
          echo "Running tests on ${{ matrix.os }} with Node.js ${{ matrix.node-version }}"
```

---

Trong ví dụ này:

- Workflow có tên là `Matrix Build` và được kích hoạt khi có sự kiện push vào nhánh `main`.
- Công việc (job) được đặt tên là `build` và sẽ chạy trên ba hệ điều hành khác nhau: `ubuntu-latest`, `windows-latest`, và `macOS-latest`.
- Sử dụng `strategy` và `matrix` để xác định ma trận (matrix) với các biến `os` và `node-version`, mỗi biến có một tập giá trị khác nhau.
- Các bước thực thi sử dụng giá trị từ ma trận để thực hiện công việc cụ thể tương ứng với mỗi phiên bản hệ điều hành và Node.js.

Việc này giúp tự động hóa việc kiểm tra, xây dựng và kiểm thử trên nhiều môi trường khác nhau, giúp đảm bảo tính tương thích và ổn định của ứng dụng trên các phiên bản hệ điều hành và ngôn ngữ khác nhau một cách linh hoạt và hiệu quả.

---
