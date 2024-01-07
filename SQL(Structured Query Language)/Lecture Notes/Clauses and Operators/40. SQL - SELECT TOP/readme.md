Từ khóa `TOP` trong SQL được sử dụng để chọn một số lượng cụ thể các hàng hoặc bản ghi đầu tiên từ kết quả truy vấn. Tùy thuộc vào hệ quản trị cơ sở dữ liệu (Hệ DBMS) bạn sử dụng, cú pháp sử dụng `TOP` có thể khác nhau.

### Khái Niệm:

`TOP` giới hạn số lượng hàng hoặc bản ghi được trả về từ kết quả truy vấn.

### Ngữ Cảnh:

Thường được sử dụng khi bạn chỉ quan tâm đến một số lượng cụ thể các hàng hoặc bản ghi đầu tiên trong kết quả truy vấn.

### Cách Sử Dụng và Ví Dụ:

Cú pháp (phụ thuộc vào DBMS):

#### SQL Server / Azure SQL Database / Access:

```sql
SELECT TOP number|percent column1, column2, ...
FROM table_name;
```

#### MySQL / PostgreSQL / SQLite:

```sql
SELECT column1, column2, ...
FROM table_name
LIMIT number;
```

Ví dụ:

#### SQL Server:

```sql
SELECT TOP 5 * FROM employees ORDER BY salary DESC;
```

#### MySQL:

```sql
SELECT * FROM employees ORDER BY salary DESC LIMIT 5;
```

### Giải Thích Chi Tiết:

- `TOP number`: Là số lượng hàng hoặc bản ghi bạn muốn lấy từ kết quả truy vấn. Trong SQL Server, bạn có thể sử dụng `TOP` với một số cụ thể hoặc theo phần trăm (`TOP 10 PERCENT`).
- `percent`: Cho phép bạn chọn một phần trăm các hàng đầu tiên.
- `column1, column2, ...`: Là danh sách các cột bạn muốn chọn từ bảng.
- `table_name`: Là tên của bảng bạn muốn truy vấn dữ liệu.

Trong ví dụ, câu lệnh `SELECT TOP 5 * FROM employees ORDER BY salary DESC;` sẽ lấy 5 hàng đầu tiên từ bảng `employees` được sắp xếp theo cột `salary` theo thứ tự giảm dần trong SQL Server. Trong MySQL, cú pháp tương tự có thể sử dụng `SELECT * FROM employees ORDER BY salary DESC LIMIT 5;`.
