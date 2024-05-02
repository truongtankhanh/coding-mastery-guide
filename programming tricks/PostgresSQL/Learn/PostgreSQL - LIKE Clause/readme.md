## Mệnh đề LIKE trong PostgreSQL

**Khái niệm:**

Mệnh đề LIKE trong PostgreSQL được sử dụng để tìm kiếm các bản ghi trong bảng dựa trên các mẫu ký tự. Mệnh đề này cho phép bạn tìm kiếm dữ liệu một cách linh hoạt và hiệu quả.

**Ngữ cảnh:**

Mệnh đề LIKE được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Tìm kiếm dữ liệu:** Tìm kiếm khách hàng, nhân viên, sản phẩm, v.v. dựa trên tên, địa chỉ, email, v.v.
- **Lọc dữ liệu:** Lọc dữ liệu dựa trên các tiêu chí cụ thể.
- **Xác minh dữ liệu:** Xác minh tính hợp lệ của dữ liệu đầu vào.

**Cách sử dụng:**

**1. Cấu trúc cơ bản:**

```sql
SELECT * FROM table_name
WHERE column_name LIKE pattern;
```

- `table_name`: Tên bảng mà bạn muốn tìm kiếm dữ liệu.
- `column_name`: Tên cột mà bạn muốn tìm kiếm.
- `pattern`: Mẫu ký tự mà bạn muốn tìm kiếm.

**2. Ký tự đặc biệt:**

Mệnh đề LIKE sử dụng các ký tự đặc biệt để biểu diễn các mẫu ký tự khác nhau. Các ký tự đặc biệt thường được sử dụng bao gồm:

- `%`: Thay thế cho bất kỳ số lượng ký tự nào.
- `_`: Thay thế cho một ký tự bất kỳ.
- `[]`: Biểu thị một tập hợp các ký tự.
- `[^...]`: Biểu thị tập hợp các ký tự ngược lại.

**3. Ví dụ:**

```sql
-- Tìm kiếm khách hàng có tên bắt đầu bằng chữ "A"
SELECT * FROM customers
WHERE name LIKE 'A%';

-- Tìm kiếm sản phẩm có tên chứa chữ "áo"
SELECT * FROM products
WHERE name LIKE '%áo%';

-- Tìm kiếm nhân viên có email kết thúc bằng "@gmail.com"
SELECT * FROM employees
WHERE email LIKE '%@gmail.com';

-- Tìm kiếm các bản ghi có mã số bắt đầu bằng chữ số 1 hoặc 2
SELECT * FROM orders
WHERE order_id LIKE '[12]%';

-- Tìm kiếm các bản ghi có mã số không bắt đầu bằng chữ số 1
SELECT * FROM orders
WHERE order_id NOT LIKE '^1%';
```

**4. Các lưu ý:**

- Mệnh đề LIKE phân biệt chữ hoa chữ thường.
- Có thể sử dụng toán tử `ILIKE` để thực hiện so sánh không phân biệt chữ hoa chữ thường.
- Nên sử dụng dấu ngoặc đơn để xác định thứ tự thực hiện các phép toán.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về mệnh đề LIKE trong PostgreSQL: [https://www.postgresql.org/docs/current/functions-matching.html](https://www.postgresql.org/docs/current/functions-matching.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
