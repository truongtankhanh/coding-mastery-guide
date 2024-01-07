Trong PostgreSQL, `DOMAIN` là một cách để xác định một tập hợp các ràng buộc (constraints) mà có thể được sử dụng lại trong các cột khác nhau của bảng. Nó cho phép định nghĩa một kiểu dữ liệu cụ thể với các ràng buộc và quy tắc cho phép tái sử dụng và duy trì tính toàn vẹn dữ liệu.

### Khái Niệm:

#### DOMAIN trong PostgreSQL:

- Là một đối tượng cơ sở dữ liệu để định nghĩa một kiểu dữ liệu mới với các ràng buộc.
- Cho phép xác định một tập hợp các ràng buộc và quy tắc áp dụng cho nhiều cột trong cơ sở dữ liệu.

### Ngữ Cảnh:

Khi bạn cần xác định một kiểu dữ liệu cụ thể với các ràng buộc và quy tắc, và muốn tái sử dụng chúng cho nhiều cột trong các bảng khác nhau, `DOMAIN` là một công cụ hữu ích.

### Cách Sử Dụng và Ví Dụ:

Để tạo một `DOMAIN` trong PostgreSQL, bạn sử dụng lệnh `CREATE DOMAIN`.

#### Sử Dụng `CREATE DOMAIN`:

```sql
CREATE DOMAIN domain_name AS data_type
    [DEFAULT default_value]
    [constraint1]
    [constraint2]
    ...;
```

Ví dụ:

```sql
CREATE DOMAIN email_domain AS VARCHAR(100)
    CHECK (VALUE ~* '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');
```

### Giải Thích Chi Tiết:

- `CREATE DOMAIN`: Là lệnh để tạo một `DOMAIN` mới trong cơ sở dữ liệu PostgreSQL.
- `domain_name`: Là tên của `DOMAIN` bạn muốn tạo.
- `data_type`: Là kiểu dữ liệu cơ sở cho `DOMAIN`.
- `DEFAULT default_value`: Là giá trị mặc định cho `DOMAIN` (nếu cần).
- `constraint1`, `constraint2`: Là các ràng buộc (constraints) được áp dụng cho `DOMAIN`.

Trong ví dụ, `email_domain` được định nghĩa là một `DOMAIN` kiểu dữ liệu VARCHAR có độ dài tối đa là 100 ký tự và áp dụng ràng buộc kiểm tra (CHECK constraint) để đảm bảo giá trị trong `DOMAIN` phải đúng định dạng của một địa chỉ email.

`DOMAIN` trong PostgreSQL giúp tái sử dụng và duy trì tính toàn vẹn dữ liệu bằng cách định nghĩa một kiểu dữ liệu cụ thể với các ràng buộc mà có thể được áp dụng cho nhiều cột trong cơ sở dữ liệu.
