## Kiểu dữ liệu Enumerated trong PostgresSQL

**Khái niệm:**

Kiểu dữ liệu Enumerated (còn gọi là enum) trong PostgresSQL là kiểu dữ liệu cho phép lưu trữ một tập hợp các giá trị cố định, được định nghĩa trước. Kiểu dữ liệu này giúp tăng tính chính xác và dễ đọc cho dữ liệu, đồng thời hạn chế lỗi nhập liệu.

**Ngữ cảnh:**

Kiểu dữ liệu Enumerated được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- Lưu trữ trạng thái của một đối tượng (ví dụ: đang chờ xử lý, đã được xử lý, đã giao hàng)
- Lưu trữ các lựa chọn trong một menu
- Lưu trữ các giá trị thuộc tính của một đối tượng (ví dụ: màu sắc, kích thước)

**Cách sử dụng:**

**1. Tạo kiểu dữ liệu enum:**

```sql
CREATE TYPE my_status AS ENUM ('pending', 'processed', 'delivered');
```

**2. Tạo bảng:**

```sql
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(255),
    order_status my_status
);
```

**3. Thêm dữ liệu:**

```sql
INSERT INTO orders (customer_name, order_status)
VALUES ('Nguyễn Văn A', 'pending');
```

**4. Truy vấn dữ liệu:**

```sql
SELECT * FROM orders;
```

**5. Cập nhật dữ liệu:**

```sql
UPDATE orders SET order_status = 'processed' WHERE id = 1;
```

**6. Xóa dữ liệu:**

```sql
DELETE FROM orders WHERE order_status = 'pending';
```

**Ví dụ:**

Giả sử chúng ta có một hệ thống quản lý đơn hàng cần lưu trữ trạng thái của đơn hàng (đang chờ xử lý, đã được xử lý, đã giao hàng). Chúng ta có thể sử dụng kiểu dữ liệu `enum` để lưu trữ trạng thái của đơn hàng.

```sql
CREATE TYPE order_status AS ENUM ('pending', 'processed', 'delivered');

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(255),
    order_status order_status
);

INSERT INTO orders (customer_name, order_status)
VALUES ('Nguyễn Văn A', 'pending');

SELECT * FROM orders;

UPDATE orders SET order_status = 'processed' WHERE id = 1;

SELECT * FROM orders;
```

**Lưu ý:**

- Các giá trị trong kiểu dữ liệu enum được phân biệt bởi dấu phẩy.
- Có thể sử dụng các hàm built-in để thao tác với dữ liệu enum, ví dụ như `enum_range()` và `enum_in()`.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về kiểu dữ liệu enum trong PostgreSQL: [https://viblo.asia/p/khoi-tao-enum-mot-cach-hoan-hao-chi-trong-5-buoc-gDVK2MXj5Lj](https://viblo.asia/p/khoi-tao-enum-mot-cach-hoan-hao-chi-trong-5-buoc-gDVK2MXj5Lj)

**Hỗ trợ:**

- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)

**Ngoài ra, bạn có thể tham khảo thêm các kiểu dữ liệu khác trong PostgresSQL:**

- **Kiểu dữ liệu số:** Numeric Types
- **Kiểu dữ liệu tiền tệ:** Monetary Types
- **Kiểu dữ liệu ký tự:** Character Types
- **Kiểu dữ liệu nhị phân:** Binary Data Types
- **Kiểu dữ liệu ngày giờ:** Date and Time Types
- **Kiểu dữ liệu khác:** Other Types
