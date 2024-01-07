Mệnh đề `DISTINCT` trong SQL được sử dụng để loại bỏ các bản ghi trùng lặp từ kết quả truy vấn và chỉ hiển thị các giá trị duy nhất.

### Khái Niệm:

#### DISTINCT:

- Mệnh đề `DISTINCT` loại bỏ các bản ghi trùng lặp từ kết quả truy vấn.
- Nó được sử dụng trong câu lệnh `SELECT` để chỉ hiển thị các giá trị duy nhất.

### Ngữ Cảnh:

Khi bạn muốn lấy danh sách các giá trị duy nhất từ một cột hoặc các cột trong kết quả truy vấn, `DISTINCT` là công cụ hữu ích.

### Cách Sử Dụng và Ví Dụ:

Cú pháp cơ bản của mệnh đề `DISTINCT` trong câu lệnh `SELECT` như sau:

```sql
SELECT DISTINCT column1, column2, ...
FROM table_name;
```

Ví dụ:

Nếu bạn muốn lấy danh sách các giá trị duy nhất từ cột `city` trong bảng `customers`, câu lệnh sẽ là:

```sql
SELECT DISTINCT city
FROM customers;
```

### Giải Thích Chi Tiết:

- `SELECT`: Là từ khóa để bắt đầu câu lệnh truy vấn dữ liệu.
- `DISTINCT`: Là mệnh đề để loại bỏ các bản ghi trùng lặp từ kết quả truy vấn.
- `column1, column2, ...`: Là tên của các cột bạn muốn lấy dữ liệu hoặc loại bỏ các giá trị trùng lặp.

Mệnh đề `DISTINCT` giúp bạn loại bỏ các bản ghi trùng lặp từ kết quả truy vấn, chỉ hiển thị các giá trị duy nhất từ cột hoặc các cột bạn chỉ định. Điều này rất hữu ích khi bạn cần biết các giá trị duy nhất trong một cột nhất định hoặc muốn loại bỏ các giá trị trùng lặp trong kết quả truy vấn của mình.
