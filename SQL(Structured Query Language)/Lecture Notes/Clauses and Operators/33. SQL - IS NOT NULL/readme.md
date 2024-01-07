Trong SQL, điều kiện `IS NOT NULL` được sử dụng để kiểm tra xem một cột có chứa giá trị khác `NULL` hay không.

### Khái Niệm:

#### Điều Kiện IS NOT NULL:

- `IS NOT NULL` được sử dụng trong mệnh đề `WHERE` để kiểm tra xem một cột có chứa giá trị khác `NULL` hay không.
- Nó trả về kết quả `TRUE` nếu giá trị của cột không phải là `NULL`.

### Ngữ Cảnh:

Khi bạn muốn kiểm tra xem giá trị của một cột có là giá trị khác `NULL` hay không.

### Cách Sử Dụng và Ví Dụ:

Sử dụng điều kiện `IS NOT NULL` trong mệnh đề `WHERE` của câu truy vấn để kiểm tra giá trị của cột có khác `NULL` hay không.

#### Sử Dụng Điều Kiện `IS NOT NULL`:

```sql
SELECT column1, column2
FROM table_name
WHERE column_name IS NOT NULL;
```

Ví dụ:

```sql
SELECT *
FROM employees
WHERE department IS NOT NULL;
```

### Giải Thích Chi Tiết:

- `SELECT column1, column2`: Là danh sách các cột bạn muốn lấy từ bảng.
- `FROM table_name`: Là tên của bảng bạn muốn truy vấn dữ liệu.
- `WHERE column_name IS NOT NULL`: Là mệnh đề tìm kiếm dựa trên giá trị không phải là `NULL`.

Trong ví dụ, `WHERE department IS NOT NULL` sẽ trả về các hàng từ bảng `employees` mà giá trị trong cột `department` không phải là `NULL`. Điều kiện `IS NOT NULL` cho phép bạn kiểm tra xem một cột có chứa giá trị khác `NULL` hay không, rất hữu ích khi bạn muốn loại bỏ các giá trị `NULL` trong kết quả truy vấn của mình.
