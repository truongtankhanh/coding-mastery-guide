## Đổi tên bảng trong database

Để đổi tên bảng trong cơ sở dữ liệu, bạn có thể sử dụng lệnh `ALTER TABLE` trong SQL. Điều này cho phép bạn thay đổi tên của một bảng có sẵn trong cơ sở dữ liệu.

### Khái Niệm:

#### Đổi Tên Bảng:

- Là việc thay đổi tên của một bảng trong cơ sở dữ liệu.
- Cho phép bạn thay đổi tên một cách an toàn mà không làm mất dữ liệu hoặc cấu trúc của bảng.

### Ngữ Cảnh:

Khi bạn cần thay đổi tên của một bảng để phản ánh chính xác hơn về nội dung hoặc khiến tên bảng dễ hiểu hơn, việc đổi tên bảng là hữu ích.

### Cách Sử Dụng và Ví Dụ:

Để đổi tên bảng, bạn sử dụng lệnh `ALTER TABLE` và chỉ định tên cũ và tên mới của bảng.

#### Sử Dụng `ALTER TABLE`:

```sql
ALTER TABLE old_table_name
RENAME TO new_table_name;
```

Ví dụ:

```sql
ALTER TABLE customers
RENAME TO clients;
```

### Giải Thích Chi Tiết:

- `ALTER TABLE`: Là câu lệnh thay đổi cấu trúc của một bảng.
- `old_table_name`: Là tên của bảng bạn muốn đổi.
- `new_table_name`: Là tên mới mà bạn muốn đặt cho bảng.

Lệnh `ALTER TABLE ... RENAME TO` được sử dụng để thay đổi tên của một bảng trong cơ sở dữ liệu. Khi bạn thực hiện lệnh này, tên của bảng sẽ được thay đổi mà không ảnh hưởng đến dữ liệu hoặc cấu trúc của bảng đó. Điều này giúp bạn cập nhật và điều chỉnh tên bảng một cách linh hoạt mà không làm mất dữ liệu quan trọng.

---

## Đổi tên cột trong database

Để đổi tên của một cột trong cơ sở dữ liệu, bạn có thể sử dụng lệnh `ALTER TABLE` cùng với `RENAME COLUMN` trong SQL. Điều này cho phép bạn thay đổi tên của một cột đã tồn tại trong bảng.

### Khái Niệm:

#### Đổi Tên Cột:

- Là việc thay đổi tên của một cột trong cơ sở dữ liệu.
- Cho phép bạn điều chỉnh tên cột một cách dễ dàng mà không làm mất dữ liệu hoặc cấu trúc của cột.

### Ngữ Cảnh:

Khi bạn cần điều chỉnh tên của một cột để phản ánh chính xác về nội dung hoặc khiến tên cột dễ hiểu hơn, việc đổi tên cột là hữu ích.

### Cách Sử Dụng và Ví Dụ:

Để đổi tên của một cột, bạn sử dụng lệnh `ALTER TABLE` cùng với `RENAME COLUMN`.

#### Sử Dụng `ALTER TABLE`:

```sql
ALTER TABLE table_name
RENAME COLUMN old_column_name TO new_column_name;
```

Ví dụ:

```sql
ALTER TABLE employees
RENAME COLUMN emp_name TO full_name;
```

### Giải Thích Chi Tiết:

- `ALTER TABLE`: Là câu lệnh thay đổi cấu trúc của một bảng.
- `table_name`: Là tên của bảng chứa cột bạn muốn thay đổi.
- `old_column_name`: Là tên cũ của cột bạn muốn đổi.
- `new_column_name`: Là tên mới bạn muốn đặt cho cột.

Lệnh `ALTER TABLE ... RENAME COLUMN` được sử dụng để thay đổi tên của một cột trong cơ sở dữ liệu. Khi bạn thực hiện lệnh này, tên của cột sẽ được thay đổi mà không ảnh hưởng đến dữ liệu hoặc cấu trúc của cột đó. Điều này giúp bạn cập nhật và điều chỉnh tên cột một cách linh hoạt mà không làm mất dữ liệu quan trọng.

---
