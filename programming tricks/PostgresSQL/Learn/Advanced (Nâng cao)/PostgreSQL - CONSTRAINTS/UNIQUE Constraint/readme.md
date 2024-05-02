## Ràng buộc UNIQUE trong PostgreSQL

**Khái niệm:**

Ràng buộc UNIQUE trong PostgreSQL là một ràng buộc dữ liệu được sử dụng để đảm bảo rằng mỗi giá trị trong một hoặc nhiều cột của bảng là duy nhất. Nói cách khác, không có hai bản ghi nào trong bảng có cùng giá trị cho các cột được ràng buộc UNIQUE.

**Ngữ cảnh:**

Ràng buộc UNIQUE được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Đảm bảo tính toàn vẹn dữ liệu:** Đảm bảo rằng dữ liệu trong bảng là chính xác và không có bản ghi trùng lặp.
- **Tăng hiệu suất truy vấn:** Giúp tối ưu hóa hiệu suất truy vấn bằng cách tạo index dựa trên các cột có ràng buộc UNIQUE.
- **Đơn giản hóa logic ứng dụng:** Giúp đơn giản hóa logic ứng dụng bằng cách đảm bảo rằng không cần kiểm tra giá trị trùng lặp cho các cột có ràng buộc UNIQUE.

**Cách sử dụng:**

**1. Cấu trúc cơ bản:**

```sql
CREATE TABLE table_name (
  column_name1 data_type UNIQUE,
  column_name2 data_type,
  ...
);
```

- `table_name`: Tên bảng mà bạn muốn tạo ràng buộc.
- `column_name1`: Cột mà bạn muốn áp dụng ràng buộc UNIQUE.
- `data_type`: Kiểu dữ liệu của cột.

**2. Ví dụ:**

```sql
-- Tạo bảng sản phẩm với ràng buộc UNIQUE cho cột tên sản phẩm
CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE,
  price DECIMAL(10,2)
);
```

**3. Các lưu ý:**

- Ràng buộc UNIQUE có thể được áp dụng cho một hoặc nhiều cột trong bảng.
- Việc vi phạm ràng buộc UNIQUE sẽ dẫn đến lỗi và dữ liệu không được phép thêm hoặc cập nhật.
- Có thể sử dụng lệnh ALTER TABLE để thêm hoặc xóa ràng buộc UNIQUE sau khi bảng được tạo.

**4. Ví dụ nâng cao:**

```sql
-- Thêm ràng buộc UNIQUE cho tập hợp (column_name1, column_name2)
ALTER TABLE table_name
ADD UNIQUE (column_name1, column_name2);

-- Xóa ràng buộc UNIQUE cho cột email trong bảng customers
ALTER TABLE customers
ALTER COLUMN email DROP UNIQUE;
```

**5. So sánh UNIQUE và PRIMARY KEY:**

- Cả hai đều đảm bảo tính duy nhất của dữ liệu.
- PRIMARY KEY cũng là một ràng buộc UNIQUE, nhưng nó có thêm một số tính năng:
  - Không thể có giá trị null.
  - Tự động tạo giá trị duy nhất cho các bản ghi mới.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về ràng buộc UNIQUE trong PostgreSQL: [https://www.postgresql.org/docs/current/sql-commands.html](https://www.postgresql.org/docs/current/sql-commands.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
