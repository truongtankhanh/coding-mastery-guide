## Sử dụng EXCEPT

Trong SQL, toán tử `EXCEPT` (hoặc `MINUS` trong một số hệ quản trị cơ sở dữ liệu khác) được sử dụng để trả về các bản ghi thuộc kết quả của truy vấn 1 nhưng không thuộc kết quả của truy vấn 2. Nó tương tự như phép toán chia trong lý thuyết tập hợp.

### Khái Niệm:

`EXCEPT` cho phép bạn lấy các bản ghi từ truy vấn 1 nhưng không có trong truy vấn 2.

### Ngữ Cảnh:

Thường được sử dụng khi bạn cần so sánh và trích xuất dữ liệu từ hai truy vấn, nhưng chỉ muốn kết quả thuộc truy vấn 1 mà không thuộc truy vấn 2.

### Cách Sử Dụng và Ví Dụ:

Cú pháp:

```sql
SELECT column1, column2, ...
FROM table1
EXCEPT
SELECT column1, column2, ...
FROM table2;
```

Ví dụ:

```sql
SELECT employee_id, employee_name
FROM current_employees
EXCEPT
SELECT employee_id, employee_name
FROM former_employees;
```

### Giải Thích Chi Tiết:

- `SELECT column1, column2, ... FROM table1`: Là kết quả của truy vấn 1, chọn các cột từ bảng 1.
- `EXCEPT`: Là toán tử để loại bỏ các bản ghi thuộc kết quả của truy vấn 2.
- `SELECT column1, column2, ... FROM table2`: Là kết quả của truy vấn 2, chọn các cột từ bảng 2.

Trong ví dụ, câu lệnh `SELECT employee_id, employee_name FROM current_employees EXCEPT SELECT employee_id, employee_name FROM former_employees;` sẽ trả về các nhân viên hiện tại (trong bảng `current_employees`) mà không có trong danh sách nhân viên cũ (trong bảng `former_employees`). Các bản ghi này sẽ được trả về trong kết quả của câu lệnh. Tuy nhiên, cú pháp `EXCEPT` không được hỗ trợ trong mọi hệ quản trị cơ sở dữ liệu, một số DBMS sử dụng `MINUS` thay thế cho `EXCEPT`.

---

## Sử dụng NOT EXISTS

Toán tử `NOT EXISTS` trong SQL được sử dụng để kiểm tra xem một bảng con được trả về từ một truy vấn con có chứa bất kỳ dòng nào không. Nếu không có dòng nào được trả về từ truy vấn con, điều kiện `NOT EXISTS` sẽ trả về TRUE.

### Khái Niệm:

`NOT EXISTS` cho phép kiểm tra xem một bảng con có dòng nào không và trả về kết quả ngược lại của điều kiện đó.

### Ngữ Cảnh:

Thường được sử dụng khi bạn cần kiểm tra sự không tồn tại của một điều kiện trong một bảng hoặc kết quả của một truy vấn.

### Cách Sử Dụng và Ví Dụ:

Cú pháp:

```sql
SELECT columns
FROM table1
WHERE NOT EXISTS (SELECT columns FROM table2 WHERE condition);
```

Ví dụ:

```sql
SELECT employee_id, employee_name
FROM employees e
WHERE NOT EXISTS (
    SELECT 1
    FROM former_employees f
    WHERE f.employee_id = e.employee_id
);
```

### Giải Thích Chi Tiết:

- `SELECT columns FROM table1`: Là truy vấn chính, thường chọn các cột từ bảng chính.
- `WHERE NOT EXISTS (...)`: Là điều kiện để kiểm tra sự không tồn tại của truy vấn con.
- `SELECT columns FROM table2 WHERE condition`: Là truy vấn con được thực thi bởi `NOT EXISTS`, nó kiểm tra điều kiện nào đó trong bảng con.

Trong ví dụ, câu lệnh `SELECT employee_id, employee_name FROM employees e WHERE NOT EXISTS (SELECT 1 FROM former_employees f WHERE f.employee_id = e.employee_id);` sẽ trả về các nhân viên từ bảng `employees` mà không có trong bảng `former_employees`. Nếu không có bất kỳ bản ghi nào từ `former_employees` khớp với `employee_id` trong `employees`, điều kiện `NOT EXISTS` sẽ trả về TRUE và bản ghi từ `employees` sẽ được chọn.

---

## Sử dụng Gom nhóm

Phép chia (Division) trong SQL không phải là một phần cú pháp chuẩn, mà thường được mô phỏng bằng cách sử dụng các phép toán và các mệnh đề khác trong SQL. Một cách thường được sử dụng để mô phỏng phép chia là sử dụng kết hợp giữa các toán tử `NOT IN`, `NOT EXISTS`, hoặc `LEFT JOIN` cùng với `GROUP BY` và `HAVING`.

### Ngữ Cảnh:

Phép chia (Division) trong SQL thường được sử dụng khi bạn cần lọc ra các bản ghi từ một bảng (A) mà không có các cặp giá trị trong bảng khác (B) thỏa mãn một điều kiện nhất định.

### Cách Sử Dụng và Ví Dụ:

Một cách tiếp cận thường được sử dụng là sử dụng `NOT IN` hoặc `NOT EXISTS`:

Ví dụ sử dụng `NOT IN`:

```sql
SELECT A.column1, A.column2, ...
FROM Table_A A
WHERE A.id NOT IN (
    SELECT B.id
    FROM Table_B B
    WHERE [some condition]
);
```

Ví dụ sử dụng `NOT EXISTS`:

```sql
SELECT A.column1, A.column2, ...
FROM Table_A A
WHERE NOT EXISTS (
    SELECT 1
    FROM Table_B B
    WHERE B.id = A.id
    AND [some condition]
);
```

### Giải Thích Chi Tiết:

Trong cả hai ví dụ trên, `Table_A` và `Table_B` là hai bảng mà chúng ta muốn thực hiện phép chia. Điều kiện để lọc dữ liệu của phép chia được áp dụng trong mệnh đề `WHERE` hoặc `AND` trong truy vấn con.

Phép chia trong SQL thường không được hỗ trợ trực tiếp như các phép toán khác. Thay vào đó, phải sử dụng các cách tiếp cận thay thế như `NOT IN`, `NOT EXISTS`, hoặc `LEFT JOIN` cùng với các mệnh đề lọc để mô phỏng hành vi của phép chia trong lý thuyết tập hợp.

---
