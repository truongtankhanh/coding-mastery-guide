## Mệnh đề HAVING trong PostgreSQL

**Khái niệm:**

Mệnh đề HAVING trong PostgreSQL được sử dụng để lọc các nhóm được tạo bởi mệnh đề GROUP BY dựa trên các điều kiện cụ thể. Điều này cho phép bạn chỉ lấy ra các nhóm dữ liệu thỏa mãn các tiêu chí mong muốn.

**Ngữ cảnh:**

Mệnh đề HAVING được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Lọc dữ liệu nhóm:** Lấy ra các nhóm có doanh thu cao hơn một mức nhất định, số lượng thành viên nhiều hơn một giá trị nào đó, v.v.
- **Phân tích dữ liệu:** So sánh hiệu suất của các nhóm khác nhau, xác định các nhóm có xu hướng đặc biệt, v.v.
- **Báo cáo:** Tạo báo cáo với dữ liệu được nhóm và lọc theo các tiêu chí cụ thể.

**Cách sử dụng:**

**1. Cấu trúc cơ bản:**

```sql
SELECT column_name(s), aggregate_function(column_name)
FROM table_name
GROUP BY column_name(s)
HAVING condition;
```

- `column_name(s)`: Cột(s) được sử dụng để nhóm dữ liệu.
- `aggregate_function`: Hàm tổng hợp được áp dụng cho mỗi nhóm.
- `table_name`: Tên bảng mà bạn muốn thực hiện thao tác.
- `condition`: Điều kiện lọc các nhóm được tạo bởi mệnh đề GROUP BY.

**2. Ví dụ:**

```sql
-- Lấy ra các sản phẩm có doanh thu trung bình cao hơn 1 triệu
SELECT product_name, AVG(price) AS average_price
FROM products
GROUP BY product_name
HAVING AVG(price) > 1000000;

-- Tìm kiếm các danh mục có số lượng sản phẩm lớn hơn 10
SELECT category, COUNT(*) AS number_of_products
FROM products
GROUP BY category
HAVING COUNT(*) > 10;

-- Lấy ra các nhóm khách hàng có tổng doanh thu cao nhất và thấp nhất
SELECT customer_group, SUM(total_revenue) AS total_revenue
FROM orders
GROUP BY customer_group
HAVING total_revenue IN (
    SELECT MAX(total_revenue) FROM orders GROUP BY customer_group
    UNION
    SELECT MIN(total_revenue) FROM orders GROUP BY customer_group
);
```

**3. Các lưu ý:**

- Mệnh đề HAVING chỉ có thể được sử dụng sau mệnh đề GROUP BY.
- Các điều kiện trong mệnh đề HAVING chỉ được áp dụng cho các giá trị tổng hợp của các nhóm.
- Có thể sử dụng nhiều điều kiện trong mệnh đề HAVING để lọc các nhóm theo nhiều tiêu chí.

**4. Ví dụ nâng cao:**

```sql
-- Lấy ra các sản phẩm có doanh thu cao hơn 1 triệu trong danh mục "Điện tử"
SELECT product_name, AVG(price) AS average_price
FROM products
GROUP BY product_name, category
HAVING AVG(price) > 1000000 AND category = 'Điện tử';

-- Tìm kiếm các nhóm khách hàng có tỷ lệ chuyển đổi cao hơn 50%
SELECT customer_group, COUNT(*) AS number_of_customers, COUNT(DISTINCT order_id) AS number_of_orders
FROM orders
GROUP BY customer_group
HAVING COUNT(DISTINCT order_id) / COUNT(*) > 0.5;
```

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về mệnh đề HAVING trong PostgreSQL: [https://www.postgresql.org/docs/current/tutorial-agg.html](https://www.postgresql.org/docs/current/tutorial-agg.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
