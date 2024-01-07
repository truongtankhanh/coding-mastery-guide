## Cú pháp Union

Câu lệnh `UNION` trong SQL được sử dụng để kết hợp kết quả của hai hoặc nhiều câu lệnh `SELECT` thành một tập kết quả duy nhất. Các dòng dữ liệu từ các kết quả SELECT được kết hợp và loại bỏ các bản ghi trùng lặp.

### Khái Niệm:

`UNION` giúp kết hợp kết quả từ nhiều truy vấn thành một kết quả duy nhất.

### Ngữ Cảnh:

Thường được sử dụng khi bạn cần kết hợp kết quả từ các bảng hoặc điều kiện truy vấn khác nhau thành một tập hợp kết quả duy nhất.

### Cách Sử Dụng và Ví Dụ:

Cú pháp:

```sql
SELECT column1, column2, ...
FROM table1
UNION
SELECT column1, column2, ...
FROM table2;
```

Ví dụ:

```sql
SELECT employee_id, employee_name
FROM employees
WHERE department = 'Sales'
UNION
SELECT employee_id, employee_name
FROM temporary_employees
WHERE department = 'Sales';
```

### Giải Thích Chi Tiết:

- `SELECT column1, column2, ... FROM table1`: Là cú pháp để chọn các cột từ bảng hoặc điều kiện truy vấn đầu tiên.
- `UNION`: Là từ khóa để kết hợp kết quả của câu lệnh SELECT đầu tiên với các câu lệnh SELECT khác.
- `SELECT column1, column2, ... FROM table2`: Là cú pháp để chọn các cột từ bảng hoặc điều kiện truy vấn thứ hai.

Trong ví dụ, câu lệnh `SELECT employee_id, employee_name FROM employees WHERE department = 'Sales' UNION SELECT employee_id, employee_name FROM temporary_employees WHERE department = 'Sales'` sẽ kết hợp kết quả của hai câu lệnh SELECT để trả về tất cả nhân viên từ bảng `employees` và `temporary_employees` thuộc phòng ban 'Sales'. Các bản ghi trùng lặp sẽ được loại bỏ và chỉ có một tập hợp kết quả duy nhất được trả về.

---

## Mệnh đề Union All trong SQL

Mệnh đề `UNION ALL` trong SQL cũng giống như `UNION`, nó cũng được sử dụng để kết hợp kết quả của hai hoặc nhiều truy vấn `SELECT` thành một tập hợp kết quả duy nhất. Tuy nhiên, khác với `UNION`, `UNION ALL` không loại bỏ các bản ghi trùng lặp từ các tập kết quả.

### Khái Niệm:

`UNION ALL` kết hợp kết quả từ các truy vấn `SELECT` thành một tập kết quả duy nhất, bao gồm cả các bản ghi trùng lặp.

### Ngữ Cảnh:

Thường được sử dụng khi bạn muốn kết hợp tất cả các kết quả từ các truy vấn SELECT mà không cần loại bỏ bản ghi trùng lặp.

### Cách Sử Dụng và Ví Dụ:

Cú pháp:

```sql
SELECT column1, column2, ...
FROM table1
UNION ALL
SELECT column1, column2, ...
FROM table2;
```

Ví dụ:

```sql
SELECT employee_id, employee_name
FROM employees
WHERE department = 'Sales'
UNION ALL
SELECT employee_id, employee_name
FROM temporary_employees
WHERE department = 'Sales';
```

### Giải Thích Chi Tiết:

- `SELECT column1, column2, ... FROM table1`: Là cú pháp để chọn các cột từ bảng hoặc điều kiện truy vấn đầu tiên.
- `UNION ALL`: Là từ khóa để kết hợp kết quả của câu lệnh SELECT đầu tiên với các câu lệnh SELECT khác, bao gồm cả các bản ghi trùng lặp.
- `SELECT column1, column2, ... FROM table2`: Là cú pháp để chọn các cột từ bảng hoặc điều kiện truy vấn thứ hai.

Trong ví dụ, câu lệnh `SELECT employee_id, employee_name FROM employees WHERE department = 'Sales' UNION ALL SELECT employee_id, employee_name FROM temporary_employees WHERE department = 'Sales'` sẽ kết hợp kết quả của hai câu lệnh SELECT để trả về tất cả nhân viên từ bảng `employees` và `temporary_employees` thuộc phòng ban 'Sales', bao gồm cả các bản ghi trùng lặp nếu có.

---
