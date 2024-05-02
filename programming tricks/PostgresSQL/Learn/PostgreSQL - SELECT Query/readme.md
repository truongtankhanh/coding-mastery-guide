## PostgreSQL - SELECT Query

**Khái niệm:**

Câu lệnh `SELECT` trong PostgreSQL cho phép ta truy xuất dữ liệu từ một hoặc nhiều bảng. Câu lệnh này có thể lọc, sắp xếp và nhóm dữ liệu theo nhiều cách khác nhau.

**Ngữ cảnh:**

Câu lệnh `SELECT` được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Lấy dữ liệu từ một bảng:** Ví dụ, ta có thể lấy thông tin tất cả khách hàng từ bảng `customers`.
- **Lọc dữ liệu:** Ta có thể sử dụng mệnh đề `WHERE` để lọc dữ liệu theo các điều kiện cụ thể.
- **Sắp xếp dữ liệu:** Ta có thể sử dụng mệnh đề `ORDER BY` để sắp xếp dữ liệu theo thứ tự mong muốn.
- **Nhóm dữ liệu:** Ta có thể sử dụng mệnh đề `GROUP BY` để nhóm dữ liệu theo các trường cụ thể.

**Cách sử dụng:**

**1. Cấu trúc cơ bản:**

```sql
SELECT <danh_sách_cột>
FROM <tên_bảng>;
```

**2. Ví dụ:**

```sql
-- Lấy thông tin tất cả khách hàng
SELECT * FROM customers;

-- Lấy tên và email của khách hàng có ID là 1
SELECT name, email FROM customers WHERE id = 1;

-- Lấy thông tin sản phẩm theo danh mục
SELECT * FROM products WHERE category = 'Thời trang';

-- Sắp xếp sản phẩm theo giá, từ thấp đến cao
SELECT * FROM products ORDER BY price ASC;
```

**3. Các tùy chọn:**

- **`DISTINCT`:** Ta có thể sử dụng `DISTINCT` để loại bỏ các bản ghi trùng lặp.
- **`AS`:** Ta có thể sử dụng `AS` để đặt tên bí danh cho các cột.
- **`JOIN`:** Ta có thể sử dụng `JOIN` để kết hợp dữ liệu từ nhiều bảng.
- **`GROUP BY`:** Ta có thể sử dụng `GROUP BY` để nhóm dữ liệu theo các trường cụ thể.
- **`HAVING`:** Ta có thể sử dụng `HAVING` để lọc dữ liệu sau khi nhóm.

**4. Ví dụ:**

```sql
-- Lấy tên và số lượng sản phẩm theo danh mục
SELECT category, COUNT(*) AS quantity
FROM products
GROUP BY category;

-- Lấy danh mục có số lượng sản phẩm lớn hơn 10
SELECT category
FROM products
GROUP BY category
HAVING COUNT(*) > 10;

-- Lấy thông tin khách hàng và đơn hàng của họ
SELECT customers.name, orders.id, orders.total
FROM customers
JOIN orders ON customers.id = orders.customer_id;
```

**Lưu ý:**

- Cần đảm bảo thứ tự của các cột trong câu lệnh `SELECT`.
- Cần sử dụng dấu ngoặc đơn (`'`) để bao quanh các giá trị chuỗi.
- Cần kiểm tra xem dữ liệu được truy xuất có chính xác hay không.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)

**Hỗ trợ:**

- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
