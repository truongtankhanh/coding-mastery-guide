## Tự động tăng giá trị (AUTO INCREMENT) trong PostgreSQL

**Khái niệm:**

Tự động tăng giá trị (AUTO INCREMENT) là một tính năng trong PostgreSQL cho phép tự động tăng giá trị của một cột trong bảng. Cột này thường được sử dụng làm khóa chính (primary key) cho bảng.

**Ngữ cảnh:**

Tự động tăng giá trị được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Tạo khóa chính:** Cột tự động tăng giá trị thường được sử dụng làm khóa chính cho bảng.
- **Đảm bảo tính duy nhất:** Tự động tăng giá trị đảm bảo rằng mỗi bản ghi trong bảng có một giá trị duy nhất cho cột được chọn.
- **Giảm thiểu lỗi:** Tự động tăng giá trị giúp giảm thiểu lỗi do người dùng nhập sai giá trị cho khóa chính.

**Cách sử dụng:**

Có hai cách để sử dụng tự động tăng giá trị trong PostgreSQL:

1. **Sử dụng kiểu dữ liệu SERIAL:**

Kiểu dữ liệu SERIAL là một kiểu dữ liệu đặc biệt trong PostgreSQL tự động tăng giá trị mỗi khi một bản ghi mới được chèn vào bảng.

Ví dụ:

```sql
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);
```

Trong ví dụ trên, cột `id` là cột tự động tăng giá trị và được sử dụng làm khóa chính cho bảng `customers`.

2. **Sử dụng trình tự (sequence):**

Trình tự (sequence) là một đối tượng trong PostgreSQL tạo ra một dãy số tự động tăng. Bạn có thể sử dụng trình tự để tạo cột tự động tăng giá trị.

Ví dụ:

```sql
CREATE SEQUENCE customer_id_seq;

CREATE TABLE customers (
  id INT NOT NULL DEFAULT nextval('customer_id_seq'),
  name VARCHAR(255),
  email VARCHAR(255)
);

ALTER TABLE customers
ADD CONSTRAINT customer_id_pk PRIMARY KEY (id);
```

Trong ví dụ trên, trình tự `customer_id_seq` được sử dụng để tạo cột `id` tự động tăng giá trị. Cột `id` được sử dụng làm khóa chính cho bảng `customers`.

**Lưu ý:**

- Cột tự động tăng giá trị không thể được sửa đổi trực tiếp.
- Bạn có thể sử dụng hàm `nextval()` để lấy giá trị tiếp theo của trình tự.

**Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về Tự động tăng giá trị: [https://www.postgresql.org/docs/current/sql-commands.html](https://www.postgresql.org/docs/current/sql-commands.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
