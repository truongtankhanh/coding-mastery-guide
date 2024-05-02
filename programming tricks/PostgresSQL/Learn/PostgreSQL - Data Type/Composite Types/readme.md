## Kiểu dữ liệu Composite trong PostgresSQL

**Khái niệm:**

Kiểu dữ liệu Composite trong PostgresSQL, hay còn gọi là kiểu dữ liệu tự định nghĩa, cho phép bạn tạo ra các kiểu dữ liệu mới từ các kiểu dữ liệu cơ bản. Kiểu dữ liệu Composite tương tự như struct trong các ngôn ngữ lập trình.

**Ngữ cảnh:**

Kiểu dữ liệu Composite được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- Lưu trữ dữ liệu phức tạp, ví dụ như thông tin về một người (tên, tuổi, địa chỉ)
- Tạo ra các kiểu dữ liệu chuyên biệt cho ứng dụng của bạn
- Tái sử dụng các nhóm kiểu dữ liệu trong nhiều bảng

**Cách sử dụng:**

**1. Khai báo kiểu dữ liệu:**

```sql
-- Khai báo kiểu dữ liệu composite cho thông tin về người
CREATE TYPE person AS (
    name VARCHAR(255),
    age integer,
    address text
);
```

**2. Tạo bảng:**

```sql
CREATE TABLE people (
    id SERIAL PRIMARY KEY,
    info person
);
```

**3. Thêm dữ liệu:**

```sql
INSERT INTO people (info)
VALUES ('{"name": "John Doe", "age": 30, "address": "123 Main Street"}');
```

**4. Truy vấn dữ liệu:**

```sql
SELECT * FROM people;

-- Truy cập tên của người có id = 1
SELECT info.name FROM people WHERE id = 1;

-- Truy cập địa chỉ của người có id = 1
SELECT info.address FROM people WHERE id = 1;
```

**5. Cập nhật dữ liệu:**

```sql
UPDATE people SET info.name = 'Jane Doe' WHERE id = 1;
```

**6. Xóa dữ liệu:**

```sql
DELETE FROM people WHERE info.age IS NULL;
```

**Ví dụ:**

Giả sử chúng ta có một hệ thống quản lý nhân viên cần lưu trữ thông tin về nhân viên. Chúng ta có thể sử dụng kiểu dữ liệu `person` để lưu trữ tên, tuổi và địa chỉ của nhân viên.

```sql
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    info person,
    job_title VARCHAR(255)
);

INSERT INTO employees (info, job_title)
VALUES ('{"name": "John Doe", "age": 30, "address": "123 Main Street"}', 'Software Engineer');

SELECT * FROM employees;

-- Lấy tên và chức danh của nhân viên có id = 1
SELECT info.name, job_title FROM employees WHERE id = 1;

-- Cập nhật địa chỉ của nhân viên có id = 1
UPDATE employees SET info.address = '456 Elm Street' WHERE id = 1;
```

**Lưu ý:**

- PostgresSQL cung cấp nhiều hàm built-in để thao tác với dữ liệu composite, ví dụ như `row()` và `column()`.
- Khi sử dụng kiểu dữ liệu Composite, cần lưu ý về thứ tự các trường trong kiểu dữ liệu và cách thức truy cập các trường.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)

**Hỗ trợ:**

- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
