## Truy vấn con trong câu lệnh DELETE trong PostgreSQL

**Khái niệm:**

Truy vấn con là một câu lệnh SELECT được sử dụng bên trong một câu lệnh DELETE. Truy vấn con có thể được sử dụng để xóa dữ liệu dựa trên các giá trị từ một bảng khác hoặc để thực hiện các phép toán phức tạp.

**Ngữ cảnh:**

Truy vấn con được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Xóa dữ liệu dựa trên các giá trị từ một bảng khác:** Truy vấn con có thể được sử dụng để xóa dữ liệu trong một bảng dựa trên các giá trị từ một bảng khác.
- **Thực hiện các phép toán phức tạp:** Truy vấn con có thể được sử dụng để thực hiện các phép toán phức tạp, chẳng hạn như tính toán tổng, trung bình hoặc giá trị tối đa.

**Cách sử dụng:**

Truy vấn con được sử dụng trong mệnh đề `WHERE` của câu lệnh DELETE.

**Ví dụ:**

```sql
-- Xóa tất cả khách hàng có tên là "John"

DELETE FROM customers
WHERE name = 'John';

-- Xóa tất cả đơn hàng với giá trị nhỏ hơn 50

DELETE FROM orders
WHERE total < 50;
```

**Lưu ý:**

- Truy vấn con có thể làm giảm hiệu suất truy vấn nếu không được sử dụng một cách hiệu quả.
- Bạn nên sử dụng các kỹ thuật tối ưu hóa truy vấn để cải thiện hiệu suất truy vấn con.

**Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về Truy vấn con: [https://www.postgresql.org/docs/current/sql-commands.html](https://www.postgresql.org/docs/current/sql-commands.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
