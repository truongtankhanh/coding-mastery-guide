## Truy vấn con trong câu lệnh INSERT trong PostgreSQL

**Khái niệm:**

Truy vấn con là một câu lệnh SELECT được sử dụng bên trong một câu lệnh INSERT. Truy vấn con có thể được sử dụng để chèn dữ liệu từ một bảng khác hoặc để tạo dữ liệu mới dựa trên các giá trị hiện có.

**Ngữ cảnh:**

Truy vấn con được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Chèn dữ liệu từ một bảng khác:** Truy vấn con có thể được sử dụng để chèn dữ liệu từ một bảng khác vào một bảng khác.
- **Tạo dữ liệu mới:** Truy vấn con có thể được sử dụng để tạo dữ liệu mới dựa trên các giá trị hiện có.
- **Thực hiện các phép toán phức tạp:** Truy vấn con có thể được sử dụng để thực hiện các phép toán phức tạp, chẳng hạn như tính toán tổng, trung bình hoặc giá trị tối đa.

**Cách sử dụng:**

Truy vấn con được sử dụng trong mệnh đề `VALUES` của câu lệnh INSERT.

**Ví dụ:**

```sql
-- Chèn tất cả khách hàng từ Hoa Kỳ vào bảng "customers"

INSERT INTO customers (name, email, country)
SELECT name, email, 'USA'
FROM customers_temp;

-- Tạo một bảng mới với tên và tổng giá trị đơn hàng của tất cả khách hàng

CREATE TABLE customer_orders (
  name VARCHAR(255),
  total_orders DECIMAL(10,2)
);

INSERT INTO customer_orders (name, total_orders)
SELECT name, SUM(total) AS total_orders
FROM customers
JOIN orders ON customers.id = orders.customer_id
GROUP BY name;
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
