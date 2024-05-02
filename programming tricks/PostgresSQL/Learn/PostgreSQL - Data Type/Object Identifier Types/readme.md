## Kiểu dữ liệu Object Identifier Types trong PostgresSQL

**Khái niệm:**

Kiểu dữ liệu Object Identifier Types (OID) trong PostgresSQL là một kiểu dữ liệu đặc biệt dùng để lưu trữ định danh đối tượng (OID) của các bản ghi trong cơ sở dữ liệu. OID là một giá trị số nguyên duy nhất được tự động gán cho mỗi bản ghi khi nó được tạo ra.

**Ngữ cảnh:**

Kiểu dữ liệu OID được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- Theo dõi các bản ghi trong cơ sở dữ liệu
- Tham chiếu các bản ghi trong các bảng khác nhau
- Xác định các bản ghi khi thực hiện các thao tác CRUD (Create, Read, Update, Delete)

**Cách sử dụng:**

**1. Truy vấn OID:**

```sql
SELECT oid FROM table_name;
```

**2. Sử dụng OID trong WHERE clause:**

```sql
SELECT * FROM table_name WHERE oid = 1234;
```

**3. Sử dụng OID trong JOIN clause:**

```sql
SELECT * FROM table1 JOIN table2 ON table1.oid = table2.oid;
```

**4. Sử dụng OID trong INSERT INTO:**

```sql
INSERT INTO table_name (column1, column2) VALUES ('value1', 'value2') RETURNING oid;
```

**5. Sử dụng OID trong UPDATE:**

```sql
UPDATE table_name SET column1 = 'value1' WHERE oid = 1234;
```

**6. Sử dụng OID trong DELETE:**

```sql
DELETE FROM table_name WHERE oid = 1234;
```

**Ví dụ:**

Giả sử chúng ta có một hệ thống quản lý nhân viên cần lưu trữ thông tin về nhân viên. Chúng ta có thể sử dụng OID để theo dõi các nhân viên trong hệ thống.

```sql
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
);

-- Lấy OID của nhân viên có tên "John Doe"
SELECT oid FROM employees WHERE name = 'John Doe';

-- Cập nhật email của nhân viên có OID là 1234
UPDATE employees SET email = 'johndoe@example.com' WHERE oid = 1234;

-- Xóa nhân viên có OID là 1234
DELETE FROM employees WHERE oid = 1234;
```

**Lưu ý:**

- OID là giá trị tự động gán và không thể thay đổi được.
- Nên sử dụng OID khi cần truy cập trực tiếp vào bản ghi trong cơ sở dữ liệu.
- Nên sử dụng khóa chính thay cho OID khi cần tham chiếu các bản ghi trong các bảng khác nhau.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgresSQL: [https://www.postgresql.org/](https://www.postgresql.org/)

**Hỗ trợ:**

- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
