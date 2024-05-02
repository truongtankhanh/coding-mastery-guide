## Mệnh đề WITH trong PostgreSQL

**Khái niệm:**

Mệnh đề WITH trong PostgreSQL được sử dụng để tạo các biểu thức con (subquery) được đặt tên và có thể được sử dụng lại trong cùng một câu lệnh truy vấn. Điều này giúp đơn giản hóa các truy vấn phức tạp và tăng khả năng đọc hiểu.

**Ngữ cảnh:**

Mệnh đề WITH được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Giải quyết các truy vấn phức tạp:** Chia nhỏ truy vấn thành các phần nhỏ hơn và dễ quản lý hơn.
- **Tránh lặp lại:** Tránh viết lại cùng một biểu thức con nhiều lần.
- **Tăng khả năng đọc hiểu:** Làm cho truy vấn dễ đọc và dễ hiểu hơn.

**Cách sử dụng:**

**1. Cấu trúc cơ bản:**

```sql
WITH <tên_biểu_thức_con> AS (<biểu_thức_con>),
...
SELECT ...
FROM ...
WHERE ...;
```

- `<tên_biểu_thức_con>`: Tên được đặt cho biểu thức con.
- `<biểu_thức_con>`: Biểu thức SQL tạo ra tập dữ liệu tạm thời.
- `...`: Các phần còn lại của câu lệnh SELECT (FROM, WHERE, v.v.).

**2. Ví dụ:**

```sql
-- Tìm kiếm khách hàng có đơn hàng có giá trị cao nhất
WITH high_value_orders AS (
    SELECT *
    FROM orders
    WHERE total_price > 1000000
),
best_customers AS (
    SELECT customer_id, name, SUM(total_price) AS total_revenue
    FROM high_value_orders
    GROUP BY customer_id, name
)
SELECT *
FROM best_customers
ORDER BY total_revenue DESC;
```

**3. Các lưu ý:**

- Biểu thức con được định nghĩa trong mệnh đề WITH có thể được sử dụng nhiều lần trong cùng một câu lệnh SELECT.
- Mệnh đề WITH có thể được sử dụng kết hợp với các mệnh đề khác như SELECT, FROM, WHERE, v.v.
- Thứ tự của các biểu thức con trong mệnh đề WITH không quan trọng.

**4. Ví dụ nâng cao:**

```sql
-- Tìm kiếm sản phẩm có doanh thu cao nhất trong mỗi danh mục, cùng với tên nhà cung cấp
WITH product_revenue AS (
    SELECT product_id, category, SUM(quantity * price) AS total_revenue
    FROM orders
    GROUP BY product_id, category
),
best_products AS (
    SELECT product_id, category, total_revenue, supplier_name
    FROM product_revenue
    JOIN suppliers ON product_supplier_id = supplier_id
    ORDER BY total_revenue DESC
)
SELECT *
FROM best_products
LIMIT 10;
```

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về mệnh đề WITH trong PostgreSQL: [https://www.postgresql.org/docs/current/queries-with.html](https://www.postgresql.org/docs/current/queries-with.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
