## Câu điều kiện IN

Câu điều kiện `IN` trong SQL được sử dụng để kiểm tra xem một giá trị cụ thể có tồn tại trong một danh sách các giá trị hay không.

### Khái Niệm:

#### Câu điều kiện IN:

- `IN` được sử dụng trong mệnh đề `WHERE` để so sánh một giá trị với một danh sách các giá trị.
- Nó trả về kết quả `TRUE` nếu giá trị cần so sánh khớp với bất kỳ giá trị nào trong danh sách.

### Ngữ Cảnh:

Khi bạn muốn kiểm tra xem một giá trị có khớp với một danh sách giá trị cụ thể hay không.

### Cách Sử Dụng và Ví Dụ:

Sử dụng câu điều kiện `IN` trong mệnh đề `WHERE` của câu truy vấn để so sánh giá trị với một danh sách giá trị.

#### Sử Dụng Câu Điều Kiện `IN`:

```sql
SELECT column1, column2
FROM table_name
WHERE column_name IN (value1, value2, ...);
```

Ví dụ:

```sql
SELECT *
FROM students
WHERE grade IN ('A', 'B', 'C');
```

### Giải Thích Chi Tiết:

- `SELECT column1, column2`: Là danh sách các cột bạn muốn lấy từ bảng.
- `FROM table_name`: Là tên của bảng bạn muốn truy vấn dữ liệu.
- `WHERE column_name IN (value1, value2, ...)`: Là mệnh đề tìm kiếm dựa trên danh sách giá trị.

Trong ví dụ, `WHERE grade IN ('A', 'B', 'C')` sẽ trả về các hàng từ bảng `students` mà giá trị trong cột `grade` là 'A', 'B' hoặc 'C'. Lệnh `IN` cho phép bạn so sánh một giá trị với một danh sách giá trị và trả về kết quả `TRUE` nếu giá trị cần so sánh khớp với bất kỳ giá trị nào trong danh sách đó. Điều này hữu ích khi bạn muốn lọc kết quả dựa trên một tập hợp các giá trị cụ thể.

---

## Thể phủ định NOT IN

Câu điều kiện `NOT IN` trong SQL được sử dụng để kiểm tra xem một giá trị có không nằm trong một danh sách các giá trị hay không.

### Khái Niệm:

#### Câu điều kiện NOT IN:

- `NOT IN` được sử dụng trong mệnh đề `WHERE` để kiểm tra nếu một giá trị không khớp với bất kỳ giá trị nào trong danh sách.
- Nó trả về kết quả `TRUE` nếu giá trị không khớp với bất kỳ giá trị nào trong danh sách.

### Ngữ Cảnh:

Khi bạn muốn kiểm tra xem một giá trị không nằm trong một danh sách giá trị cụ thể.

### Cách Sử Dụng và Ví Dụ:

Sử dụng câu điều kiện `NOT IN` trong mệnh đề `WHERE` của câu truy vấn để kiểm tra giá trị không nằm trong danh sách giá trị.

#### Sử Dụng Câu Điều Kiện `NOT IN`:

```sql
SELECT column1, column2
FROM table_name
WHERE column_name NOT IN (value1, value2, ...);
```

Ví dụ:

```sql
SELECT *
FROM students
WHERE grade NOT IN ('A', 'B', 'C');
```

### Giải Thích Chi Tiết:

- `SELECT column1, column2`: Là danh sách các cột bạn muốn lấy từ bảng.
- `FROM table_name`: Là tên của bảng bạn muốn truy vấn dữ liệu.
- `WHERE column_name NOT IN (value1, value2, ...)`: Là mệnh đề tìm kiếm dựa trên danh sách giá trị.

Trong ví dụ, `WHERE grade NOT IN ('A', 'B', 'C')` sẽ trả về các hàng từ bảng `students` mà giá trị trong cột `grade` không phải là 'A', 'B' hoặc 'C'. Lệnh `NOT IN` cho phép bạn kiểm tra nếu một giá trị không nằm trong danh sách các giá trị, rất hữu ích khi bạn muốn loại bỏ kết quả dựa trên một tập hợp các giá trị cụ thể.

---
