Trong GitHub Actions, **Triggers và Events** là cách bạn cấu hình workflow để kích hoạt khi có các sự kiện cụ thể xảy ra trong repository của bạn. Các triggers được sử dụng để định cấu hình các điều kiện hoặc sự kiện nào sẽ kích hoạt và chạy các công việc (jobs) trong workflow.

---

### Ngữ cảnh:

- Khi bạn xây dựng workflows trong GitHub Actions, việc sử dụng triggers và events cho phép bạn kích hoạt các quy trình tự động hóa dựa trên các sự kiện cụ thể xảy ra trong repository của bạn. Điều này bao gồm các sự kiện như khi có push code, tạo pull request, tạo tags (nhãn), hoặc theo lịch trình thời gian cố định (cron schedules).

---

### Cách sử dụng và ví dụ:

Dưới đây là một ví dụ về cách cấu hình triggers và events trong một workflow:

```yaml
name: CI Workflow

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  schedule:
    - cron: "0 0 * * *" # Chạy mỗi ngày vào lúc 00:00 UTC

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      # Các bước thực thi khác...
```

---

Trong ví dụ này:

- Workflow được đặt tên là `CI Workflow`.
- Sử dụng triggers và events để kích hoạt workflow trong các trường hợp cụ thể:
  - Khi có push vào branch `main`.
  - Khi tạo pull request tới branch `main`.
  - Theo lịch trình thời gian được thiết lập để chạy mỗi ngày vào lúc 00:00 UTC.
- Công việc (job) được đặt tên là `build` và sẽ chạy trên máy ảo `ubuntu-latest`.

Ví dụ trên sẽ kích hoạt workflow khi có các sự kiện push, pull request vào nhánh `main` hoặc theo lịch trình thời gian đã được định sẵn. Bạn có thể điều chỉnh và cấu hình triggers và events theo nhu cầu cụ thể của dự án hoặc quy trình làm việc của bạn.

---
