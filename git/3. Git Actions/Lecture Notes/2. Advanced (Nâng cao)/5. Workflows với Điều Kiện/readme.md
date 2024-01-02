**Workflows với Điều Kiện** trong GitHub Actions cho phép bạn cấu hình các quy trình làm việc (workflows) để chạy dựa trên các điều kiện cụ thể như tên nhánh (branch), tag, hoặc loại sự kiện xác định, giúp điều chỉnh hoặc kích hoạt workflows một cách linh hoạt.

---

### Ngữ cảnh:

- Khi phát triển phần mềm, thường cần thiết lập các workflows để chạy dựa trên các sự kiện cụ thể như khi có thay đổi trên một nhánh cụ thể, khi có tag mới được tạo ra, hoặc theo loại sự kiện nhất định khác.

---

### Cách sử dụng và ví dụ:

- Để sử dụng workflows với điều kiện trong GitHub Actions, bạn có thể thiết lập các điều kiện cho workflows trong file cấu hình YAML của nó.

---

#### Ví dụ về điều kiện dựa trên tên nhánh (branch):

```yaml
name: Conditional Workflow - Branch

on:
  push:
    branches:
      - main
      - development

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      # Các bước thực thi khác...
```

Trong ví dụ này:

- Workflow sẽ chạy khi có sự kiện push vào các nhánh `main` hoặc `development`.

---

#### Ví dụ về điều kiện dựa trên tag:

```yaml
name: Conditional Workflow - Tag

on:
  push:
    tags:
      - "v*"

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      # Các bước thực thi khác...
```

Trong ví dụ này:

- Workflow sẽ chạy khi có sự kiện push kèm theo tag có định dạng bắt đầu bằng `v`.

---

Các điều kiện có thể được cấu hình linh hoạt dựa trên các sự kiện nhất định như push, pull request, tạo tag, hoặc các sự kiện khác, cho phép bạn tùy chỉnh các workflows sao cho chúng chỉ được kích hoạt khi đúng điều kiện xảy ra, giúp tối ưu hóa và linh hoạt hóa quá trình làm việc.

---
