## Ràng buộc CHECK trong PostgreSQL

**Khái niệm:**

Ràng buộc CHECK trong PostgreSQL là một ràng buộc dữ liệu cho phép bạn kiểm tra giá trị trong một hoặc nhiều cột để đảm bảo rằng chúng thỏa mãn một điều kiện cụ thể. Điều kiện này được biểu diễn dưới dạng biểu thức Boolean (true/false).

**Ngữ cảnh:**

Ràng buộc CHECK được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Đảm bảo tính hợp lệ dữ liệu:** Đảm bảo rằng dữ liệu nhập vào bảng là hợp lệ và phù hợp với yêu cầu nghiệp vụ.
- **Giảm thiểu lỗi:** Giúp giảm thiểu lỗi do nhập dữ liệu sai hoặc không chính xác.
- **Tăng hiệu quả truy vấn:** Giúp tối ưu hóa hiệu quả truy vấn bằng cách loại bỏ các bản ghi không thỏa mãn điều kiện.

**Cách sử dụng:**

**1. Cấu trúc cơ bản:**

```sql
CREATE TABLE table_name (
  column_name1 data_type,
  CONSTRAINT constraint_name CHECK (condition),
  ...
);
```

- `table_name`: Tên bảng mà bạn muốn tạo ràng buộc.
- `column_name1`: Cột mà bạn muốn áp dụng ràng buộc CHECK.
- `constraint_name`: Tên ràng buộc CHECK.
- `condition`: Biểu thức Boolean để kiểm tra giá trị.

**2. Ví dụ:**

```sql
-- Tạo bảng khách hàng với ràng buộc CHECK cho tuổi
CREATE TABLE customers (
  customer_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  age INTEGER CHECK (age >= 18),
);
```

**3. Các lưu ý:**

- Biểu thức CHECK có thể sử dụng các toán tử so sánh, toán tử logic và các hàm PostgreSQL.
- Việc vi phạm ràng buộc CHECK sẽ dẫn đến lỗi và dữ liệu không được phép thêm hoặc cập nhật.
- Có thể sử dụng lệnh ALTER TABLE để thêm hoặc xóa ràng buộc CHECK sau khi bảng được tạo.

**4. Ví dụ nâng cao:**

```sql
-- Thêm ràng buộc CHECK cho cột giá sản phẩm
ALTER TABLE products
ADD CONSTRAINT chk_price CHECK (price > 0);

-- Xóa ràng buộc CHECK cho cột email trong bảng customers
ALTER TABLE customers
DROP CONSTRAINT chk_email;
```

**5. Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về ràng buộc CHECK trong PostgreSQL: [https://www.postgresql.org/docs/current/sql-commands.html](https://www.postgresql.org/docs/current/sql-commands.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
