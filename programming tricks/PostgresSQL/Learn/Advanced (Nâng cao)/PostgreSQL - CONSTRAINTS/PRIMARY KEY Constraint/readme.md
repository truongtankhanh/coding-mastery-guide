## Ràng buộc PRIMARY KEY trong PostgreSQL

**Khái niệm:**

Ràng buộc PRIMARY KEY trong PostgreSQL là một ràng buộc dữ liệu đặc biệt đảm bảo tính duy nhất và tính toàn vẹn cho dữ liệu trong bảng. Nó xác định một hoặc nhiều cột có giá trị duy nhất cho mỗi bản ghi trong bảng.

**Ngữ cảnh:**

Ràng buộc PRIMARY KEY được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Đảm bảo tính duy nhất:** Không có hai bản ghi nào trong bảng có cùng giá trị cho các cột được ràng buộc PRIMARY KEY.
- **Tham chiếu dữ liệu:** Giúp liên kết dữ liệu giữa các bảng thông qua khóa ngoại.
- **Tối ưu hóa hiệu suất:** Giúp tối ưu hóa hiệu suất truy vấn bằng cách tạo index dựa trên các cột có ràng buộc PRIMARY KEY.

**Cách sử dụng:**

**1. Cấu trúc cơ bản:**

```sql
CREATE TABLE table_name (
  column_name1 data_type PRIMARY KEY,
  column_name2 data_type,
  ...
);
```

- `table_name`: Tên bảng mà bạn muốn tạo ràng buộc.
- `column_name1`: Cột mà bạn muốn áp dụng ràng buộc PRIMARY KEY.
- `data_type`: Kiểu dữ liệu của cột.

**2. Ví dụ:**

```sql
-- Tạo bảng khách hàng với ràng buộc PRIMARY KEY cho cột ID
CREATE TABLE customers (
  customer_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);
```

**3. Các lưu ý:**

- Một bảng chỉ có thể có một ràng buộc PRIMARY KEY.
- Ràng buộc PRIMARY KEY không thể chứa giá trị null.
- Việc vi phạm ràng buộc PRIMARY KEY sẽ dẫn đến lỗi và dữ liệu không được phép thêm hoặc cập nhật.
- Có thể sử dụng lệnh ALTER TABLE để thêm hoặc xóa ràng buộc PRIMARY KEY sau khi bảng được tạo.

**4. Ví dụ nâng cao:**

```sql
-- Thêm ràng buộc PRIMARY KEY cho tập hợp (column_name1, column_name2)
ALTER TABLE table_name
ADD PRIMARY KEY (column_name1, column_name2);

-- Xóa ràng buộc PRIMARY KEY cho cột ID trong bảng customers
ALTER TABLE customers
ALTER COLUMN customer_id DROP PRIMARY KEY;
```

**5. So sánh UNIQUE và PRIMARY KEY:**

- Cả hai đều đảm bảo tính duy nhất của dữ liệu.
- PRIMARY KEY cũng là một ràng buộc UNIQUE, nhưng nó có thêm một số tính năng:
  - Không thể có giá trị null.
  - Tự động tạo giá trị duy nhất cho các bản ghi mới.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về ràng buộc PRIMARY KEY trong PostgreSQL: [https://www.postgresql.org/docs/current/sql-commands.html](https://www.postgresql.org/docs/current/sql-commands.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
