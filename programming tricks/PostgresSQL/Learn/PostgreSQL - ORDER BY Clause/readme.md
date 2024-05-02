## Mệnh đề ORDER BY trong PostgreSQL

**Khái niệm:**

Mệnh đề ORDER BY trong PostgreSQL được sử dụng để sắp xếp dữ liệu theo thứ tự cụ thể. Mệnh đề này cho phép bạn sắp xếp dữ liệu theo một hoặc nhiều cột, giúp bạn dễ dàng tìm kiếm và phân tích dữ liệu.

**Ngữ cảnh:**

Mệnh đề ORDER BY được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Sắp xếp dữ liệu:** Sắp xếp khách hàng theo tên, sản phẩm theo giá, nhân viên theo tuổi, v.v.
- **Lọc dữ liệu:** Lấy ra các bản ghi có giá trị cao nhất hoặc thấp nhất.
- **Tạo báo cáo:** Tạo báo cáo với dữ liệu được sắp xếp theo thứ tự phù hợp.

**Cách sử dụng:**

**1. Cấu trúc cơ bản:**

```sql
SELECT * FROM table_name
ORDER BY column_name ASC | DESC;
```

- `table_name`: Tên bảng mà bạn muốn sắp xếp dữ liệu.
- `column_name`: Tên cột mà bạn muốn sắp xếp.
- `ASC`: Sắp xếp theo thứ tự tăng dần (mặc định).
- `DESC`: Sắp xếp theo thứ tự giảm dần.

**2. Ví dụ:**

```sql
-- Sắp xếp khách hàng theo tên từ A đến Z
SELECT * FROM customers
ORDER BY name ASC;

-- Sắp xếp sản phẩm theo giá từ cao đến thấp
SELECT * FROM products
ORDER BY price DESC;

-- Sắp xếp nhân viên theo tuổi và tên
SELECT * FROM employees
ORDER BY age ASC, name ASC;
```

**3. Các lưu ý:**

- Mệnh đề ORDER BY có thể được sử dụng kết hợp với mệnh đề LIMIT để giới hạn số lượng bản ghi được trả về.
- Có thể sử dụng nhiều cột trong mệnh đề ORDER BY để sắp xếp dữ liệu theo nhiều cấp độ.
- Thứ tự ưu tiên của các cột được sắp xếp từ trái sang phải.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về mệnh đề ORDER BY trong PostgreSQL: [https://www.postgresql.org/docs/current/queries-order.html](https://www.postgresql.org/docs/current/queries-order.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
