## Ràng buộc NOT NULL trong PostgreSQL

**Khái niệm:**

Ràng buộc NOT NULL trong PostgreSQL là một ràng buộc dữ liệu được sử dụng để đảm bảo rằng một cột trong bảng không được phép chứa giá trị null. Nói cách khác, tất cả các bản ghi trong bảng phải có giá trị cho cột đó.

**Ngữ cảnh:**

Ràng buộc NOT NULL được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Đảm bảo tính toàn vẹn dữ liệu:** Đảm bảo rằng dữ liệu trong bảng là đầy đủ và chính xác, không có thông tin bị thiếu.
- **Tăng hiệu suất truy vấn:** Giúp tối ưu hóa hiệu suất truy vấn bằng cách tạo index dựa trên các cột có ràng buộc NOT NULL.
- **Đơn giản hóa logic ứng dụng:** Giúp đơn giản hóa logic ứng dụng bằng cách đảm bảo rằng không cần kiểm tra giá trị null cho các cột có ràng buộc NOT NULL.

**Cách sử dụng:**

**1. Cấu trúc cơ bản:**

```sql
CREATE TABLE table_name (
  column_name1 data_type NOT NULL,
  column_name2 data_type,
  ...
);
```

- `table_name`: Tên bảng mà bạn muốn tạo ràng buộc.
- `column_name1`: Cột mà bạn muốn áp dụng ràng buộc NOT NULL.
- `data_type`: Kiểu dữ liệu của cột.

**2. Ví dụ:**

```sql
-- Tạo bảng khách hàng với ràng buộc NOT NULL cho cột tên
CREATE TABLE customers (
  customer_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255)
);
```

**3. Các lưu ý:**

- Ràng buộc NOT NULL có thể được áp dụng cho một hoặc nhiều cột trong bảng.
- Việc vi phạm ràng buộc NOT NULL sẽ dẫn đến lỗi và dữ liệu không được phép thêm hoặc cập nhật.
- Có thể sử dụng lệnh ALTER TABLE để thêm hoặc xóa ràng buộc NOT NULL sau khi bảng được tạo.

**4. Ví dụ nâng cao:**

```sql
-- Thêm ràng buộc NOT NULL cho cột tuổi trong bảng nhân viên
ALTER TABLE employees
ADD COLUMN age INTEGER NOT NULL;

-- Xóa ràng buộc NOT NULL cho cột địa chỉ trong bảng khách hàng
ALTER TABLE customers
ALTER COLUMN address DROP NOT NULL;
```

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về ràng buộc NOT NULL trong PostgreSQL: [https://www.postgresql.org/docs/current/sql-commands.html](https://www.postgresql.org/docs/current/sql-commands.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
