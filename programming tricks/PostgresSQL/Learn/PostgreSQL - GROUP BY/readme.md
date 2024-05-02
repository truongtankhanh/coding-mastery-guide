## GROUP BY trong PostgreSQL

**Khái niệm:**

GROUP BY trong PostgreSQL là một mệnh đề được sử dụng để nhóm các bản ghi có chung giá trị trong một hoặc nhiều cột. Sau đó, nó thực hiện các phép toán tổng hợp (như SUM, AVG, COUNT) trên các nhóm được tạo ra.

**Ngữ cảnh:**

GROUP BY được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Tóm tắt dữ liệu:** Tính tổng doanh thu theo từng sản phẩm, đếm số lượng khách hàng theo quốc gia, v.v.
- **Phân tích dữ liệu:** So sánh hiệu suất của các nhóm khác nhau, xác định xu hướng dữ liệu, v.v.
- **Báo cáo:** Tạo báo cáo với dữ liệu được nhóm và tổng hợp.

**Cách sử dụng:**

**1. Cấu trúc cơ bản:**

```sql
SELECT column_name(s), aggregate_function(column_name)
FROM table_name
GROUP BY column_name(s);
```

- `column_name(s)`: Cột(s) được sử dụng để nhóm dữ liệu.
- `aggregate_function`: Hàm tổng hợp được áp dụng cho mỗi nhóm.
- `table_name`: Tên bảng mà bạn muốn thực hiện thao tác.

**2. Ví dụ:**

```sql
-- Tính tổng doanh thu theo từng sản phẩm
SELECT product_name, SUM(quantity * price) AS total_revenue
FROM orders
GROUP BY product_name;

-- Đếm số lượng khách hàng theo quốc gia
SELECT country, COUNT(*) AS number_of_customers
FROM customers
GROUP BY country;

-- Tìm sản phẩm có giá trung bình cao nhất
SELECT product_name, AVG(price) AS average_price
FROM products
GROUP BY product_name
ORDER BY average_price DESC
LIMIT 1;
```

**3. Các lưu ý:**

- Các hàm tổng hợp chỉ có thể được sử dụng với các cột được sử dụng trong mệnh đề GROUP BY.
- Có thể sử dụng nhiều cột trong mệnh đề GROUP BY để nhóm dữ liệu theo nhiều cấp độ.
- Thứ tự ưu tiên của các cột được nhóm từ trái sang phải.

**4. Ví dụ nâng cao:**

```sql
-- Tính tổng doanh thu theo từng sản phẩm và danh mục
SELECT product_name, category, SUM(quantity * price) AS total_revenue
FROM orders
GROUP BY product_name, category;

-- Tìm sản phẩm có giá trung bình cao nhất trong mỗi danh mục
SELECT product_name, category, AVG(price) AS average_price
FROM products
GROUP BY product_name, category
ORDER BY average_price DESC
LIMIT 1;
```

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về GROUP BY trong PostgreSQL: [https://www.postgresql.org/docs/current/tutorial-agg.html](https://www.postgresql.org/docs/current/tutorial-agg.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
