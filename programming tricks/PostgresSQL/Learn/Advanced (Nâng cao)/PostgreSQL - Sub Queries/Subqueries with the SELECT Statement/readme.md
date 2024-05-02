## Truy vấn con trong câu lệnh SELECT trong PostgreSQL

**Khái niệm:**

Truy vấn con là một câu lệnh SELECT được sử dụng bên trong một câu lệnh SELECT khác. Truy vấn con có thể được sử dụng để lọc dữ liệu, lấy giá trị từ các bảng khác nhau hoặc thực hiện các phép toán phức tạp.

**Ngữ cảnh:**

Truy vấn con được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Lọc dữ liệu:** Truy vấn con có thể được sử dụng để lọc dữ liệu dựa trên các điều kiện cụ thể.
- **Lấy giá trị từ các bảng khác nhau:** Truy vấn con có thể được sử dụng để lấy giá trị từ các bảng khác nhau và kết hợp chúng thành một kết quả duy nhất.
- **Thực hiện các phép toán phức tạp:** Truy vấn con có thể được sử dụng để thực hiện các phép toán phức tạp, chẳng hạn như tính toán tổng, trung bình hoặc giá trị tối đa.

**Cách sử dụng:**

Truy vấn con được sử dụng trong mệnh đề `WHERE` của câu lệnh SELECT.

**Ví dụ:**

```sql
-- Lấy tên của tất cả khách hàng có đơn hàng với giá trị lớn hơn 100

SELECT name
FROM customers
WHERE EXISTS (
  SELECT *
  FROM orders
  WHERE customer_id = customers.id
  AND total > 100
);

-- Lấy tên và tổng giá trị đơn hàng của tất cả khách hàng

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
