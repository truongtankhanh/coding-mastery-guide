## Mệnh đề LIMIT trong PostgreSQL

**Khái niệm:**

Mệnh đề LIMIT trong PostgreSQL được sử dụng để giới hạn số lượng bản ghi được trả về bởi một câu lệnh SELECT. Mệnh đề này cho phép bạn chỉ lấy ra một lượng dữ liệu nhất định mà bạn quan tâm, giúp tiết kiệm thời gian và tài nguyên.

**Ngữ cảnh:**

Mệnh đề LIMIT được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Phân trang dữ liệu:** Hiển thị dữ liệu theo từng trang, ví dụ như 10 bản ghi mỗi trang.
- **Tối ưu hóa hiệu suất:** Giảm thời gian truy vấn dữ liệu khi bạn chỉ cần một lượng dữ liệu nhỏ.
- **Lấy mẫu dữ liệu:** Lấy một số lượng nhỏ dữ liệu để phân tích hoặc kiểm tra.

**Cách sử dụng:**

**1. Cấu trúc cơ bản:**

```sql
SELECT * FROM table_name
LIMIT row_count;
```

- `table_name`: Tên bảng mà bạn muốn lấy dữ liệu.
- `row_count`: Số lượng bản ghi mà bạn muốn lấy.

**2. Ví dụ:**

```sql
-- Lấy 10 khách hàng đầu tiên
SELECT * FROM customers
LIMIT 10;

-- Lấy 5 sản phẩm tiếp theo từ bản ghi thứ 11
SELECT * FROM products
ORDER BY product_id
LIMIT 5 OFFSET 10;

-- Lấy tất cả các bản ghi từ bản ghi thứ 20 trở đi
SELECT * FROM orders
ORDER BY order_id
OFFSET 20;
```

**3. Các lưu ý:**

- Mệnh đề LIMIT có thể được sử dụng kết hợp với mệnh đề ORDER BY để sắp xếp thứ tự các bản ghi được trả về.
- Mệnh đề OFFSET được sử dụng để bỏ qua một số lượng bản ghi nhất định trước khi lấy dữ liệu.
- Nếu `row_count` là 0, không có bản ghi nào được trả về.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về mệnh đề LIMIT trong PostgreSQL: [https://www.postgresql.org/docs/current/queries-limit.html](https://www.postgresql.org/docs/current/queries-limit.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
