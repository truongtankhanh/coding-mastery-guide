### **Git Attributes:**

**Khái niệm:**

- `Git Attributes` là cách để áp dụng các cấu hình cho các tệp cụ thể hoặc loại tệp trong một repository Git. Chúng xác định cách xử lý các tệp khi thực hiện các hoạt động như commit, merge, checkout, và các hoạt động khác trong Git.

---

**Ngữ cảnh:**

- Khi bạn muốn định nghĩa cấu hình đặc biệt cho các tệp hoặc loại tệp cụ thể, như áp dụng một filter đặc biệt khi commit, hoặc thiết lập các thuộc tính nhất định cho các tệp trong dự án, `Git Attributes` là công cụ giúp bạn thực hiện điều này.

---

**Cách sử dụng và ví dụ lệnh:**

1. **Tạo file `.gitattributes`:**

   - **Khái niệm:**
     Tạo hoặc chỉnh sửa file `.gitattributes` trong thư mục gốc của repository để định nghĩa các thuộc tính cho các tệp cụ thể.

   - **Ví dụ:**

     ```plaintext
     # .gitattributes file
     *.txt    text
     *.jpg    binary
     ```

     Trong ví dụ này, `*.txt` được xác định là tệp văn bản và `*.jpg` là tệp nhị phân.

2. **Áp dụng filters:**

   - **Khái niệm:**
     Sử dụng filters để thay đổi dữ liệu của tệp trong quá trình commit, checkout, hoặc merge.

   - **Ví dụ:**

     ```plaintext
     # .gitattributes file
     *.jpg    filter=compress
     ```

     Trong đoạn code trên, `*.jpg` được xác định để sử dụng filter `compress`.

---

### **Git Filters:**

**Khái niệm:**

- `Git Filters` cho phép bạn thay đổi dữ liệu của các tệp trong quá trình commit, checkout, hoặc merge dựa trên các quy tắc được xác định trong `.gitattributes`.

---

**Ngữ cảnh:**

- Khi bạn muốn thực hiện các biến đổi đặc biệt trên dữ liệu tệp trong quá trình làm việc với Git, như nén, mã hóa, hoặc thay đổi định dạng, `Git Filters` là công cụ mạnh mẽ để thực hiện điều này.

---

**Cách sử dụng và ví dụ lệnh:**

1. **Thiết lập filter:**

   - **Khái niệm:**

     ```bash
     git config --global filter.compress.clean gzip
     git config --global filter.compress.smudge 'gzip -d'
     ```

     Đoạn mã này thiết lập filter `compress` để nén dữ liệu bằng `gzip` trong quá trình commit và giải nén khi checkout.

   - **Ví dụ:**

     ```bash
     git config --global filter.compress.clean gzip
     git config --global filter.compress.smudge 'gzip -d'
     ```

     Đoạn mã này thiết lập filter `compress` để nén dữ liệu bằng `gzip` trong quá trình commit và giải nén khi checkout.

2. **Kết hợp với `.gitattributes`:**

   - **Khái niệm:**
     Sử dụng `.gitattributes` để áp dụng filter cho các tệp cụ thể.

   - **Ví dụ:**

     ```plaintext
     # .gitattributes file
     *.jpg    filter=compress
     ```

     Trong đoạn code trên, `*.jpg` được xác định để sử dụng filter `compress`.

---

`Git Attributes` và `Filters` cung cấp cách để xác định cấu hình và thay đổi dữ liệu tệp trong quá trình làm việc với Git, giúp bạn có thể áp dụng các quy tắc cụ thể cho các tệp hoặc loại tệp cụ thể trong repository của mình.

---
