Trong SQL, toán tử `MINUS` (hoặc `EXCEPT` trong một số hệ quản trị cơ sở dữ liệu khác) được sử dụng để lấy các bản ghi từ kết quả của truy vấn 1 nhưng không có trong kết quả của truy vấn 2. Nó trả về các bản ghi thuộc kết quả của truy vấn 1 mà không có trong kết quả của truy vấn 2.

### Khái Niệm:

`MINUS` cho phép bạn trích xuất các bản ghi chỉ thuộc kết quả của truy vấn 1 mà không thuộc kết quả của truy vấn 2.

### Ngữ Cảnh:

Thường được sử dụng khi bạn cần so sánh dữ liệu của hai truy vấn và lấy dữ liệu từ truy vấn 1 nhưng không có trong truy vấn 2.

### Cách Sử Dụng và Ví Dụ:

Cú pháp:

```sql
SELECT column1, column2, ...
FROM table1
MINUS
SELECT column1, column2, ...
FROM table2;
```

Ví dụ:

```sql
SELECT employee_id, employee_name
FROM employees
MINUS
SELECT employee_id, employee_name
FROM former_employees;
```

### Giải Thích Chi Tiết:

- `SELECT column1, column2, ... FROM table1`: Là kết quả của truy vấn 1, chọn các cột từ bảng 1.
- `MINUS`: Là toán tử để loại bỏ các bản ghi thuộc kết quả của truy vấn 2.
- `SELECT column1, column2, ... FROM table2`: Là kết quả của truy vấn 2, chọn các cột từ bảng 2.

Trong ví dụ, câu lệnh `SELECT employee_id, employee_name FROM employees MINUS SELECT employee_id, employee_name FROM former_employees;` sẽ trả về các nhân viên hiện tại (trong bảng `employees`) mà không có trong danh sách nhân viên cũ (trong bảng `former_employees`). Các bản ghi này sẽ được trả về trong kết quả của câu lệnh. Tuy nhiên, cú pháp `MINUS` không được hỗ trợ trong mọi hệ quản trị cơ sở dữ liệu, một số DBMS sử dụng `EXCEPT` thay thế cho `MINUS`.
