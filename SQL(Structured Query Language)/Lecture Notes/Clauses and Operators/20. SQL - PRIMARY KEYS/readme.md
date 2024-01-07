Trong cơ sở dữ liệu, một khóa chính (Primary Key) là một cột hoặc tập hợp các cột trong bảng dữ liệu được sử dụng để duy nhất xác định mỗi hàng trong bảng đó. Khóa chính không cho phép giá trị trùng lặp và có thể được sử dụng để liên kết các bảng với nhau.

### Khái Niệm:

#### Khóa Chính (Primary Key):

- Là một cột hoặc tập hợp các cột trong bảng dữ liệu.
- Xác định một cách duy nhất mỗi hàng trong bảng.
- Không cho phép giá trị trùng lặp và không được phép là NULL (rỗng).

### Ngữ Cảnh:

Khi bạn muốn xác định một cột hoặc tập hợp các cột trong bảng làm khóa duy nhất để xác định các hàng trong bảng một cách duy nhất, hoặc khi bạn muốn thực hiện các quan hệ (relationships) giữa các bảng, sử dụng khóa chính là quan trọng.

### Cách Sử Dụng và Ví Dụ:

Để tạo khóa chính trong SQL, bạn có thể sử dụng lệnh `CREATE TABLE` hoặc `ALTER TABLE`.

#### Sử dụng `CREATE TABLE`:

```sql
CREATE TABLE table_name (
    column1 datatype PRIMARY KEY,
    column2 datatype,
    column3 datatype,
    ...
);
```

Ví dụ:

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    ...
);
```

#### Sử dụng `ALTER TABLE`:

```sql
ALTER TABLE table_name
ADD CONSTRAINT constraint_name PRIMARY KEY (column1, column2, ...);
```

Ví dụ:

```sql
ALTER TABLE employees
ADD CONSTRAINT pk_employee_id PRIMARY KEY (employee_id);
```

### Giải Thích Chi Tiết:

- `PRIMARY KEY`: Là từ khóa được sử dụng để xác định cột hoặc tập hợp các cột làm khóa chính.
- `datatype`: Là kiểu dữ liệu của cột.
- `CONSTRAINT`: Là từ khóa được sử dụng để xác định ràng buộc (constraint) cho cột làm khóa chính.
- `constraint_name`: Là tên bạn đặt cho ràng buộc (nếu sử dụng `ALTER TABLE`).

Khóa chính là một thành phần quan trọng trong việc thiết kế cơ sở dữ liệu. Nó không chỉ xác định mỗi hàng một cách duy nhất mà còn giúp tạo ra các liên kết chính xác giữa các bảng, đảm bảo tính toàn vẹn và đồng nhất của dữ liệu.
