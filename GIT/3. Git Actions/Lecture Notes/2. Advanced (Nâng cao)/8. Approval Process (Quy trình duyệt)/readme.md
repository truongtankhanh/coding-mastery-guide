**Quy trình duyệt (Approval Process)** trong Git hoặc GitHub là quy trình yêu cầu phê duyệt trước khi các thay đổi được hợp nhất vào nhánh chính, nhằm đảm bảo rằng các thay đổi đáng tin cậy và được xem xét trước khi áp dụng vào mã nguồn chính.

---

### Ngữ cảnh:

- Khi làm việc trên một dự án phần mềm, việc đảm bảo rằng các thay đổi được xem xét và phê duyệt trước khi hợp nhất vào nhánh chính là rất quan trọng. Quy trình duyệt giúp đảm bảo chất lượng mã nguồn, tăng tính tin cậy và ổn định của dự án.

---

### Cách sử dụng và ví dụ:

- Trong GitHub, bạn có thể sử dụng tính năng Pull Request để thiết lập quy trình duyệt. Bạn có thể yêu cầu và phải có sự chấp thuận từ một hoặc nhiều người trước khi pull request được merge vào nhánh chính.

---

#### Thiết lập quy trình duyệt trên GitHub:

1. Tạo Pull Request (PR) từ một nhánh khác vào nhánh chính trên GitHub.
2. Bên trong PR, chọn tab "Reviewers".
3. Thêm người cần phê duyệt vào danh sách các người duyệt (reviewers).
4. Chọn "Request review" để yêu cầu duyệt từ những người được chọn.

---

#### Ví dụ:

Khi có một PR được tạo, ví dụ từ nhánh `feature` vào `main`, bạn có thể yêu cầu review từ các thành viên khác trong nhóm.

```yaml
name: Feature Branch to Main

on:
  pull_request:
    branches:
      - feature

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      # Các bước xây dựng và kiểm tra

  review:
    runs-on: ubuntu-latest

    steps:
      - name: Request Review
        uses: pullreminders/request-action@v1
        with:
          reviewers: username1, username2
```

Trong ví dụ này:

- Khi có PR từ nhánh `feature`, có hai công việc được thiết lập.
- Công việc `build` thực hiện kiểm tra, xây dựng.
- Công việc `review` yêu cầu review từ `username1` và `username2` sau khi quá trình build thành công.

---

Việc sử dụng quy trình duyệt giúp đảm bảo rằng các thay đổi được xem xét trước khi hợp nhất vào mã nguồn chính, tăng tính đáng tin cậy và chất lượng của dự án.

---
