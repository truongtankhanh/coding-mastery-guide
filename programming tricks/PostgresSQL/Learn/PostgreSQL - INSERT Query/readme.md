## PostgreSQL - INSERT Query

**Khái niệm:**

Câu lệnh `INSERT` trong PostgreSQL cho phép ta thêm dữ liệu mới vào một bảng. Câu lệnh này có thể thêm một hoặc nhiều bản ghi vào bảng.

**Ngữ cảnh:**

Câu lệnh `INSERT` được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Thêm dữ liệu mới vào bảng:** Ví dụ, ta có thể thêm thông tin khách hàng mới vào bảng `customers`.
- **Cập nhật dữ liệu có sẵn:** Ta có thể sử dụng `INSERT` với mệnh đề `ON CONFLICT` để cập nhật dữ liệu nếu bản ghi đã tồn tại.
- **Chèn dữ liệu từ một bảng khác:** Ta có thể sử dụng `INSERT INTO ... SELECT ...` để chèn dữ liệu từ một bảng khác.

**Cách sử dụng:**

**1. Cấu trúc cơ bản:**

```sql
INSERT INTO <tên_bảng> (<danh_sách_cột>)
VALUES (<danh_sách_giá_trị>);
```

**2. Ví dụ:**

```sql
-- Thêm một bản ghi mới vào bảng `customers`
INSERT INTO customers (name, email, phone)
VALUES ('John Doe', 'johndoe@example.com', '1234567890');

-- Thêm nhiều bản ghi vào bảng `products`
INSERT INTO products (name, price, quantity)
VALUES ('Áo thun', 100000, 10), ('Quần jeans', 200000, 20);
```

**3. Các tùy chọn:**

- **`DEFAULT VALUES`:** Ta có thể sử dụng `DEFAULT VALUES` để chèn giá trị mặc định cho các cột không được 指定.
- **`RETURNING`:** Ta có thể sử dụng `RETURNING` để lấy giá trị của các cột sau khi chèn dữ liệu.
- **`ON CONFLICT`:** Ta có thể sử dụng `ON CONFLICT` để xác định hành động thực hiện khi bản ghi đã tồn tại.

**4. Ví dụ:**

```sql
-- Thêm một bản ghi mới vào bảng `customers`, sử dụng giá trị mặc định cho cột `phone`
INSERT INTO customers (name, email)
VALUES ('Jane Doe', 'janedoe@example.com')
DEFAULT VALUES;

-- Thêm một bản ghi mới vào bảng `products`, lấy giá trị ID sau khi chèn
INSERT INTO products (name, price, quantity)
VALUES ('Giày dép', 300000, 30)
RETURNING id;

-- Cập nhật thông tin sản phẩm nếu bản ghi đã tồn tại
INSERT INTO products (name, price, quantity)
VALUES ('Áo thun', 120000, 15)
ON CONFLICT (name) DO UPDATE SET price = 120000, quantity = 15;
```

**Lưu ý:**

- Cần đảm bảo thứ tự của các cột và giá trị trong câu lệnh `INSERT`.
- Cần sử dụng dấu ngoặc đơn (`'`) để bao quanh các giá trị chuỗi.
- Cần kiểm tra xem dữ liệu được chèn có chính xác hay không.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)

**Hỗ trợ:**

- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
