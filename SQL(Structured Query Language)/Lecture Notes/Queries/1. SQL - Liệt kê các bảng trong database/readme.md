Để lấy tên của tất cả các bảng trong SQL, bạn có thể sử dụng các truy vấn thông tin hệ thống hoặc các câu lệnh được hỗ trợ bởi hệ quản trị cơ sở dữ liệu cụ thể (như MySQL, SQL Server, PostgreSQL, Oracle...). Dưới đây là một số cách thực hiện điều này cho một số hệ quản trị cơ sở dữ liệu phổ biến:

### MySQL / MariaDB:

```sql
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'your_database_name';
```

Trong đó `'your_database_name'` là tên cơ sở dữ liệu mà bạn muốn lấy danh sách bảng.

### SQL Server:

```sql
SELECT TABLE_NAME
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_TYPE = 'BASE TABLE'
AND TABLE_CATALOG='your_database_name';
```

Trong đó `'your_database_name'` là tên cơ sở dữ liệu bạn muốn lấy danh sách bảng.

### PostgreSQL:

```sql
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public';
```

Trong PostgreSQL, `'public'` là schema mặc định chứa các bảng, nhưng schema có thể khác nhau.

### Oracle:

```sql
SELECT table_name
FROM user_tables;
```

Trong Oracle, `user_tables` chứa thông tin về các bảng trong schema của người dùng hiện tại.

### Giải thích chi tiết:

Các truy vấn này sử dụng các bảng thông tin hệ thống như `information_schema.tables` hoặc `user_tables` (tùy thuộc vào hệ quản trị cơ sở dữ liệu) để truy xuất thông tin về các bảng trong cơ sở dữ liệu. Bạn có thể lọc kết quả theo tên cơ sở dữ liệu hoặc schema để lấy danh sách bảng cụ thể mà bạn quan tâm.
