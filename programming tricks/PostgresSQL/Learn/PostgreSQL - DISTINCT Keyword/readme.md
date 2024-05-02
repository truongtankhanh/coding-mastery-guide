## Từ khóa DISTINCT trong PostgreSQL

**Khái niệm:**

Từ khóa DISTINCT trong PostgreSQL được sử dụng để loại bỏ các bản ghi trùng lặp trong kết quả truy vấn. Nó chỉ lấy ra các bản ghi duy nhất, dựa trên một hoặc nhiều cột.

**Ngữ cảnh:**

Từ khóa DISTINCT được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Lấy dữ liệu duy nhất:** Lấy danh sách khách hàng không trùng lặp, danh sách sản phẩm độc đáo, v.v.
- **Loại bỏ dữ liệu trùng lặp:** Loại bỏ các bản ghi trùng lặp trong một bảng, ví dụ như các bản ghi khách hàng có cùng địa chỉ email.
- **Tối ưu hóa hiệu suất:** Giảm thời gian truy vấn dữ liệu khi bạn chỉ cần dữ liệu duy nhất.

**Cách sử dụng:**

**1. Cấu trúc cơ bản:**

```sql
SELECT DISTINCT column_name(s)
FROM table_name;
```

- `column_name(s)`: Cột(s) được sử dụng để xác định tính duy nhất của bản ghi.
- `table_name`: Tên bảng mà bạn muốn thực hiện thao tác.

**2. Ví dụ:**

```sql
-- Lấy danh sách khách hàng không trùng lặp
SELECT DISTINCT name
FROM customers;

-- Lấy danh sách sản phẩm có giá trị khác nhau
SELECT DISTINCT price
FROM products;

-- Lấy danh sách các quốc gia mà khách hàng đến từ
SELECT DISTINCT country
FROM orders;
```

**3. Các lưu ý:**

- Từ khóa DISTINCT có thể được sử dụng kết hợp với các mệnh đề khác như SELECT, FROM, WHERE, v.v.
- Khi sử dụng DISTINCT với nhiều cột, các bản ghi được coi là duy nhất nếu tất cả các giá trị trong các cột được chọn đều khác nhau.
- Có thể sử dụng hàm COUNT(DISTINCT) để đếm số lượng giá trị duy nhất trong một cột.

**4. Ví dụ nâng cao:**

```sql
-- Lấy danh sách khách hàng đã mua sản phẩm từ nhiều danh mục khác nhau
SELECT DISTINCT customer_name
FROM orders
JOIN products ON product_id = order_product_id
GROUP BY customer_name
HAVING COUNT(DISTINCT category) > 1;

-- Tìm kiếm các sản phẩm có giá cao nhất trong mỗi danh mục
SELECT DISTINCT product_name, category
FROM products
GROUP BY product_name, category
ORDER BY price DESC
LIMIT 1;
```

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về từ khóa DISTINCT trong PostgreSQL: [https://www.postgresql.org/docs/current/functions-matching.html](https://www.postgresql.org/docs/current/functions-matching.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
