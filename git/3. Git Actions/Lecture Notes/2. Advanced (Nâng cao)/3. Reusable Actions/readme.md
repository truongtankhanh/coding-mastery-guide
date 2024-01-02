**Reusable Actions** trong GitHub Actions cho phép bạn tạo và sử dụng lại các hành động tùy chỉnh của riêng mình hoặc từ cộng đồng, giúp tái sử dụng mã nguồn, tạo quy trình làm việc linh hoạt và dễ dàng mở rộng.

---

### Ngữ cảnh:

- Khi bạn xây dựng workflows trong GitHub Actions, việc tạo ra các hành động tùy chỉnh giúp tổ chức mã nguồn, tạo ra các quy trình làm việc tái sử dụng và chia sẻ với cộng đồng, từ đó giúp tăng tính linh hoạt và hiệu quả của quy trình làm việc.

---

### Cách sử dụng và ví dụ:

- Để tạo và sử dụng lại một hành động tùy chỉnh, bạn có thể thực hiện các bước sau:

---

#### Bước 1: Tạo hành động tùy chỉnh

1. Tạo một repository mới trên GitHub hoặc chọn một repository đã có.
2. Trong thư mục của repository, tạo thư mục `.github` và trong đó tạo thư mục `actions`.
3. Tạo thêm một thư mục để đặt hành động của bạn, ví dụ: `my-custom-action`.
4. Bên trong thư mục này, tạo một tệp YAML `action.yml` để định nghĩa hành động của bạn. Ví dụ:

```yaml
name: "My Custom Action"
description: "This is a custom action."
runs:
  using: "node12"
  main: "index.js"
```

5. Tạo các tệp và mã nguồn cần thiết cho hành động của bạn, ví dụ: `index.js`, các tệp khác cần thiết.
6. Commit và push lên repository của bạn.

#### Bước 2: Sử dụng hành động tùy chỉnh trong workflow

Sau khi tạo hành động tùy chỉnh, bạn có thể sử dụng nó trong các workflows bằng cách chỉ định đường dẫn đến hành động của bạn trong file workflow YAML.

Ví dụ, để sử dụng hành động tùy chỉnh `My Custom Action` trong một workflow:

```yaml
name: Workflow using Custom Action

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

      - name: Run Custom Action
        uses: ./path/to/your/custom/action
```

---

Ở đây, `./path/to/your/custom/action` là đường dẫn đến hành động tùy chỉnh mà bạn đã tạo.

Việc tạo và sử dụng lại các hành động tùy chỉnh giúp bạn tái sử dụng mã nguồn, tạo ra các quy trình làm việc linh hoạt và dễ dàng chia sẻ với cộng đồng.

---
