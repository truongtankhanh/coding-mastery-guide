## Ràng buộc FOREIGN KEY trong PostgreSQL

**Khái niệm:**

Ràng buộc FOREIGN KEY (khóa ngoại) trong PostgreSQL là một ràng buộc dữ liệu được sử dụng để liên kết dữ liệu giữa hai bảng dựa trên các giá trị chung. Nó đảm bảo rằng giá trị trong cột FOREIGN KEY của một bảng (bảng con) phải khớp với giá trị trong cột PRIMARY KEY (khóa chính) của một bảng khác (bảng cha).

**Ngữ cảnh:**

Ràng buộc FOREIGN KEY được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Duy trì tính toàn vẹn dữ liệu:** Đảm bảo rằng dữ liệu trong các bảng liên quan là chính xác và nhất quán.
- **Truy cập dữ liệu hiệu quả:** Giúp truy cập dữ liệu liên quan một cách dễ dàng và hiệu quả.
- **Thiết kế cơ sở dữ liệu:** Giúp thiết kế cơ sở dữ liệu theo cấu trúc logic và dễ quản lý.

**Cách sử dụng:**

**1. Cấu trúc cơ bản:**

```sql
CREATE TABLE child_table (
  column_name1 data_type,
  foreign_key_column_name data_type,
  FOREIGN KEY (foreign_key_column_name)
  REFERENCES parent_table (primary_key_column_name)
);
```

- `child_table`: Tên bảng con.
- `foreign_key_column_name`: Cột trong bảng con chứa giá trị khóa ngoại.
- `parent_table`: Tên bảng cha.
- `primary_key_column_name`: Cột trong bảng cha chứa giá trị khóa chính.

**2. Ví dụ:**

```sql
-- Tạo bảng đơn hàng và bảng sản phẩm với ràng buộc FOREIGN KEY
CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  product_id INTEGER,
  FOREIGN KEY (product_id) REFERENCES products (product_id)
);

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price DECIMAL(10,2)
);
```

**3. Các lưu ý:**

- Cột FOREIGN KEY và PRIMARY KEY phải có cùng kiểu dữ liệu.
- Giá trị trong cột FOREIGN KEY không được phép null nếu cột PRIMARY KEY không cho phép null.
- Việc vi phạm ràng buộc FOREIGN KEY sẽ dẫn đến lỗi và dữ liệu không được phép thêm hoặc cập nhật.
- Có thể sử dụng lệnh ALTER TABLE để thêm hoặc xóa ràng buộc FOREIGN KEY sau khi bảng được tạo.

**4. Ví dụ nâng cao:**

```sql
-- Thêm ràng buộc FOREIGN KEY cho cột customer_id trong bảng orders
ALTER TABLE orders
ADD FOREIGN KEY (customer_id) REFERENCES customers (customer_id);

-- Xóa ràng buộc FOREIGN KEY cho cột product_id trong bảng orders
ALTER TABLE orders
DROP FOREIGN KEY product_id;
```

**5. Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về ràng buộc FOREIGN KEY trong PostgreSQL: [https://www.postgresql.org/download/](https://www.postgresql.org/download/)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Diễn đàn PostgreSQL: [https://www.youtube.com/watch?v=uhvqly8MtoI](https://www.youtube.com/watch?v=uhvqly8MtoI)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
