## Kiểu dữ liệu UUID trong PostgresSQL

**Khái niệm:**

Kiểu dữ liệu UUID (Universally Unique Identifier) trong PostgresSQL là một chuỗi gồm 128 bit được sử dụng để tạo ra các định danh duy nhất trên toàn cầu. Kiểu dữ liệu này được sử dụng để đảm bảo tính độc đáo cho các bản ghi trong cơ sở dữ liệu, đặc biệt hữu ích khi cần liên kết dữ liệu giữa các bảng hoặc hệ thống khác nhau.

**Ngữ cảnh:**

Kiểu dữ liệu UUID được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- Khóa chính cho các bảng trong cơ sở dữ liệu
- Theo dõi các bản ghi trong hệ thống phân tán
- Liên kết dữ liệu giữa các hệ thống khác nhau
- Tạo mã định danh cho các đối tượng trong ứng dụng

**Cách sử dụng:**

**1. Tạo bảng:**

```sql
CREATE TABLE users (
    id uuid PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
);
```

**2. Thêm dữ liệu:**

```sql
INSERT INTO users (name, email)
VALUES ('Nguyễn Văn A', 'nguyenvana@example.com');
```

**3. Truy vấn dữ liệu:**

```sql
SELECT * FROM users;
```

**4. Cập nhật dữ liệu:**

```sql
UPDATE users SET name = 'Nguyễn Văn B' WHERE id = '123e4567-e89b-12d3-a456-426655440000';
```

**5. Xóa dữ liệu:**

```sql
DELETE FROM users WHERE email IS NULL;
```

**Ví dụ:**

Giả sử chúng ta có một hệ thống quản lý người dùng cần lưu trữ thông tin về người dùng. Chúng ta có thể sử dụng kiểu dữ liệu `uuid` để tạo ra một khóa chính duy nhất cho mỗi người dùng.

```sql
CREATE TABLE users (
    id uuid PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
);

INSERT INTO users (name, email)
VALUES ('Nguyễn Văn A', 'nguyenvana@example.com');

SELECT * FROM users;
```

**Lưu ý:**

- PostgresSQL cung cấp hàm `gen_random_uuid()` để tạo ra các giá trị UUID ngẫu nhiên.
- Có thể sử dụng các thư viện bên thứ ba để tạo ra các giá trị UUID theo các thuật toán khác nhau.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về kiểu dữ liệu UUID trong PostgreSQL: [https://viblo.asia/p/su-dung-uuid-trong-rails-6-voi-postgresql-va-active-record-bWrZn4Gm5xw](https://viblo.asia/p/su-dung-uuid-trong-rails-6-voi-postgresql-va-active-record-bWrZn4Gm5xw)

**Hỗ trợ:**

- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)

**Ngoài ra, bạn có thể tham khảo thêm các kiểu dữ liệu khác trong PostgresSQL:**

- **Kiểu dữ liệu số:** Numeric Types
- **Kiểu dữ liệu tiền tệ:** Monetary Types
- **Kiểu dữ liệu ký tự:** Character Types
- **Kiểu dữ liệu nhị phân:** Binary Data Types
- **Kiểu dữ liệu ngày giờ:** Date and Time Types
- **Kiểu dữ liệu Boolean:** Boolean Type
- **Kiểu dữ liệu Enumerated:** Enumerated Type
- **Kiểu dữ liệu Geometric:** Geometric Type
- **Kiểu dữ liệu Network Address:** Network Address Type
- **Kiểu dữ liệu Bit String:** Bit String Type
- **Kiểu dữ liệu Text Search:** Text Search Type
