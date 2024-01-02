**Caching và Artifacts** trong GitHub Actions là cách để lưu trữ dữ liệu tạm thời hoặc kết quả của các bước trong quy trình làm việc (workflow). Cả hai cung cấp cách tiếp cận khác nhau cho việc lưu trữ và truy cập vào dữ liệu quan trọng trong quy trình làm việc của bạn.

---

### Ngữ cảnh:

- Khi xây dựng workflows, việc sử dụng caching và artifacts có thể giúp tăng tốc độ thực thi và tiết kiệm thời gian bằng cách lưu lại các thành phần được tạo ra từ các bước trước đó, như các dependencies, các tệp tạm thời, hoặc kết quả của quá trình xây dựng.

---

### Cách sử dụng và ví dụ:

#### Caching:
- Caching thường được sử dụng để lưu trữ các dependencies hoặc các tệp tạm thời giữa các quy trình làm việc để tăng tốc độ xây dựng.

Ví dụ về cách sử dụng caching trong một workflow:

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

      - name: Cache dependencies
        uses: actions/cache@v2
        with:
          path: ~/.npm # Đường dẫn đến thư mục dependencies
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      # Các bước thực thi khác...
```

---

#### Artifacts:
Artifacts được sử dụng để lưu trữ kết quả của quá trình xây dựng, chẳng hạn như các tệp thực thi, tệp báo cáo, hoặc bất kỳ kết quả nào mà bạn muốn lưu lại để sử dụng sau này hoặc chia sẻ với người dùng khác.

Ví dụ về cách sử dụng artifacts trong một workflow:

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

      # Các bước thực thi khác...

      - name: Archive artifacts
        uses: actions/upload-artifact@v2
        with:
          name: build-results
          path: ./build
```

Trong cả hai ví dụ, bạn có thể thấy rằng caching và artifacts đều cung cấp cách tiếp cận linh hoạt để lưu trữ và truy cập dữ liệu quan trọng trong quy trình làm việc của bạn, giúp tăng tốc độ thực thi và tối ưu hóa quá trình xây dựng.

---