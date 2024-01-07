Trong PostgreSQL, `DOMAIN` được sử dụng để định nghĩa một kiểu dữ liệu mới cơ bản có thể tái sử dụng trong các cột của các bảng khác nhau. Nó cho phép bạn định nghĩa các ràng buộc và quy tắc cho kiểu dữ liệu đó, giúp duy trì tính toàn vẹn dữ liệu và tăng tính linh hoạt trong việc quản lý cấu trúc dữ liệu.

### Khái Niệm:

#### DOMAIN trong PostgreSQL:

- Là một định nghĩa kiểu dữ liệu tùy chỉnh trong cơ sở dữ liệu PostgreSQL.
- Cho phép bạn đặt ràng buộc, kiểm tra và quy tắc cho kiểu dữ liệu đó, giúp kiểm soát dữ liệu nhập vào.

### Ngữ Cảnh:

Khi bạn muốn định nghĩa một kiểu dữ liệu đặc biệt với các ràng buộc riêng biệt và sử dụng chúng cho nhiều cột trong các bảng khác nhau, `DOMAIN` là lựa chọn phù hợp.

### Cách Sử Dụng và Ví Dụ:

Để tạo một `DOMAIN` trong PostgreSQL, bạn sử dụng lệnh `CREATE DOMAIN`.

#### Sử Dụng `CREATE DOMAIN`:

```sql
CREATE DOMAIN domain_name AS data_type
   [ DEFAULT default_expr ]
   [ constraint1 [constraint_name], ... ];
```

Ví dụ:

```sql
CREATE DOMAIN zipcode AS VARCHAR(10)
   CHECK (VALUE ~ '^\d{5}(-\d{4})?$');
```

### Giải Thích Chi Tiết:

- `CREATE DOMAIN`: Là lệnh để tạo một `DOMAIN` mới trong cơ sở dữ liệu PostgreSQL.
- `domain_name`: Là tên của `DOMAIN` bạn muốn tạo.
- `data_type`: Là kiểu dữ liệu cơ bản cho `DOMAIN`.
- `DEFAULT default_expr`: Là giá trị mặc định (nếu có).
- `constraint1`: Là ràng buộc, kiểm tra hoặc quy tắc áp dụng cho `DOMAIN`.

Trong ví dụ, `zipcode` là một `DOMAIN` được tạo ra với kiểu dữ liệu VARCHAR và ràng buộc kiểm tra để đảm bảo rằng giá trị nhập vào phải là mã zip code có định dạng chuẩn của Mỹ.

`DOMAIN` cho phép tái sử dụng kiểu dữ liệu tùy chỉnh với các ràng buộc và quy tắc riêng biệt trong cơ sở dữ liệu PostgreSQL. Nó giúp kiểm soát dữ liệu nhập vào và tăng khả năng quản lý cấu trúc dữ liệu của bạn.
