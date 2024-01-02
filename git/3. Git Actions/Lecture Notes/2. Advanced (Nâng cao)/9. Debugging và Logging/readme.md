**Debugging và Logging** trong các workflows của GitHub Actions liên quan đến việc sử dụng các công cụ logging để theo dõi và debug các lỗi, quá trình thực thi, và thông tin cần thiết trong quá trình thực hiện các bước của workflows.

---

### Ngữ cảnh:

- Trong quá trình xây dựng workflows, việc debug là quan trọng để xác định các lỗi, hiểu rõ quá trình thực thi, và giải quyết các vấn đề phát sinh trong quá trình thực hiện các bước cụ thể. Công cụ logging là cách hiệu quả để hiển thị thông tin và trạng thái của các bước trong quá trình chạy workflows.

---

### Cách sử dụng và ví dụ:

- Trong GitHub Actions, bạn có thể sử dụng các lệnh logging để hiển thị thông tin cần thiết trong quá trình thực thi các bước của workflows.

---

#### Ví dụ sử dụng lệnh logging:

```yaml
name: Logging Example

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

      - name: Show Information
        run: |
          echo "Hello, this is an informational message."
          echo "::set-env name=MY_VAR::my_value" # Set an environment variable

      - name: Debug Information
        run: |
          echo "This is a debug message."
          echo "MY_VAR is $MY_VAR" # Use the environment variable
```

Trong ví dụ này:

- Workflow được kích hoạt sau mỗi lần push vào nhánh `main`.
- Công việc `build` chứa các bước để thực hiện việc logging thông tin.
- `Show Information` và `Debug Information` là hai bước sử dụng lệnh `echo` để hiển thị thông tin và debug.

---

#### Kết quả trong logs:

Trong logs của GitHub Actions, bạn sẽ thấy:

```
Hello, this is an informational message.
::set-env name=MY_VAR::my_value
This is a debug message.
MY_VAR is my_value
```

Thông tin từ lệnh `echo` sẽ hiển thị trong logs của GitHub Actions, giúp bạn theo dõi quá trình thực thi và debug các bước trong workflows của mình.

---

Debugging và logging là công cụ quan trọng để theo dõi quá trình thực thi, xác định lỗi và hiểu rõ hơn về các vấn đề có thể xảy ra trong quá trình chạy workflows của bạn.

---
