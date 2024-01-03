**Scheduled Jobs (Công việc theo lịch trình)** trong GitHub Actions cho phép bạn cấu hình các workflow để chạy tự động theo lịch trình cụ thể, chẳng hạn như hàng ngày, hàng tuần, hoặc theo các đơn vị thời gian khác, giúp tự động hóa các quy trình làm việc theo chu kỳ định trước.

---

### Ngữ cảnh:

- Khi phát triển phần mềm, việc thực hiện các quy trình tự động vào những thời điểm cụ thể, chẳng hạn như kiểm tra, xây dựng, hoặc triển khai hàng ngày, hàng tuần là rất quan trọng. Scheduled Jobs cho phép bạn cấu hình các workflows để chạy định kỳ, giúp tiết kiệm thời gian và tăng tính liên tục của quy trình phát triển.

---

### Cách sử dụng và ví dụ:

- Để sử dụng Scheduled Jobs trong GitHub Actions, bạn có thể thiết lập các workflow với khối `schedule` trong file cấu hình YAML của nó.

---

#### Ví dụ về công việc chạy hàng ngày:

```yaml
name: Scheduled Daily Build

on:
  schedule:
    - cron: "0 0 * * *"

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      # Các bước thực thi khác...
```

Trong ví dụ này:

- Workflow có tên là `Scheduled Daily Build`.
- Công việc này sẽ chạy hàng ngày (`cron: '0 0 * * *'` làm mỗi ngày vào lúc 00:00 UTC).
- Các bước trong công việc `build` sẽ được thực thi vào thời điểm được lên lịch.

---

#### Ví dụ về công việc chạy hàng tuần:

```yaml
name: Scheduled Weekly Task

on:
  schedule:
    - cron: "0 0 * * 0"

jobs:
  task:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      # Các bước thực thi khác...
```

Trong ví dụ này:

- Workflow có tên là `Scheduled Weekly Task`.
- Công việc này sẽ chạy hàng tuần (`cron: '0 0 * * 0'` làm mỗi tuần vào lúc 00:00 UTC vào ngày chủ nhật).
- Các bước trong công việc `task` sẽ được thực thi vào thời điểm được lên lịch.

---

Việc cấu hình Scheduled Jobs giúp tự động hóa các quy trình làm việc theo thời gian định trước, đảm bảo tính liên tục và hiệu quả trong quá trình phát triển phần mềm.

---
