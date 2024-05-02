## Câu lệnh UPDATE trong PostgreSQL

**Khái niệm:**

Câu lệnh UPDATE trong PostgreSQL được sử dụng để cập nhật dữ liệu trong một hoặc nhiều bảng. Câu lệnh này cho phép bạn thay đổi giá trị của các cột cho các bản ghi cụ thể.

**Ngữ cảnh:**

Câu lệnh UPDATE được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Cập nhật thông tin:** Cập nhật thông tin của khách hàng, nhân viên, sản phẩm, v.v.
- **Sửa lỗi:** Sửa lỗi dữ liệu nhập sai.
- **Cập nhật trạng thái:** Cập nhật trạng thái của một đơn hàng, một sản phẩm, v.v.

**Cách sử dụng:**

**1. Cấu trúc cơ bản:**

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

- `table_name`: Tên bảng mà bạn muốn cập nhật dữ liệu.
- `column1, column2, ...`: Các cột mà bạn muốn cập nhật giá trị.
- `value1, value2, ...`: Giá trị mới cho các cột tương ứng.
- `condition`: Điều kiện để xác định các bản ghi cần cập nhật.

**2. Ví dụ:**

```sql
-- Cập nhật số điện thoại của khách hàng có tên "Nguyễn Văn A"
UPDATE customers
SET phone_number = '0123456789'
WHERE name = 'Nguyễn Văn A';

-- Cập nhật giá sản phẩm có mã "SP01"
UPDATE products
SET price = 100000
WHERE product_id = 'SP01';

-- Cập nhật trạng thái đơn hàng có mã "DH01" thành "Đã giao hàng"
UPDATE orders
SET status = 'Đã giao hàng'
WHERE order_id = 'DH01';
```

**3. Các lưu ý:**

- Cần đảm bảo rằng các giá trị mới được cập nhật có kiểu dữ liệu phù hợp với các cột tương ứng.
- Cần sử dụng cẩn thận mệnh đề WHERE để tránh cập nhật nhầm dữ liệu.
- Nên sử dụng bản sao lưu dữ liệu trước khi thực hiện thao tác cập nhật.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về câu lệnh UPDATE trong PostgreSQL: [https://www.postgresql.org/docs/current/sql-update.html](https://www.postgresql.org/docs/current/sql-update.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
