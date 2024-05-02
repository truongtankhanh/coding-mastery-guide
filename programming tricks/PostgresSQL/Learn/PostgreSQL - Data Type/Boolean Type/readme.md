## Kiểu dữ liệu Boolean trong PostgresSQL

**Khái niệm:**

Kiểu dữ liệu Boolean trong PostgresSQL được sử dụng để lưu trữ giá trị True hoặc False. Kiểu dữ liệu này còn được gọi là `bool` hoặc `boolean`.

**Ngữ cảnh:**

Kiểu dữ liệu Boolean được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- Lưu trữ trạng thái của một đối tượng (ví dụ: đang hoạt động hay không hoạt động)
- Lưu trữ kết quả của một phép so sánh
- Lưu trữ giá trị lựa chọn (ví dụ: đồng ý hay không đồng ý)

**Cách sử dụng:**

**1. Tạo bảng:**

```sql
CREATE TABLE boolean_data (
    id SERIAL PRIMARY KEY,
    is_active BOOLEAN,
    is_completed BOOLEAN
);
```

**2. Thêm dữ liệu:**

```sql
INSERT INTO boolean_data (is_active, is_completed)
VALUES (True, False);
```

**3. Truy vấn dữ liệu:**

```sql
SELECT * FROM boolean_data;
```

**4. Cập nhật dữ liệu:**

```sql
UPDATE boolean_data SET is_completed = True WHERE id = 1;
```

**5. Xóa dữ liệu:**

```sql
DELETE FROM boolean_data WHERE is_active = False;
```

**Ví dụ:**

Giả sử chúng ta có một hệ thống quản lý đơn hàng cần lưu trữ trạng thái của đơn hàng (đang chờ xử lý, đã được xử lý, đã giao hàng). Chúng ta có thể sử dụng kiểu dữ liệu `boolean` để lưu trữ trạng thái của đơn hàng.

```sql
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(255),
    order_status BOOLEAN
);

INSERT INTO orders (customer_name, order_status)
VALUES ('Nguyễn Văn A', False);

SELECT * FROM orders;

UPDATE orders SET order_status = True WHERE id = 1;

SELECT * FROM orders;
```

**Lưu ý:**

- Các giá trị True, False, Yes, No, On, Off có thể được sử dụng để thay thế cho giá trị Boolean 1 và 0.
- PostgresQL cũng hỗ trợ các toán tử logic cho kiểu dữ liệu Boolean, ví dụ như AND, OR, NOT.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về kiểu dữ liệu trong PostgreSQL: [https://viblo.asia/p/kieu-du-lieu-trong-postgressql-data-types-5pPLkGOZLRZ](https://viblo.asia/p/kieu-du-lieu-trong-postgressql-data-types-5pPLkGOZLRZ)

**Hỗ trợ:**

- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)

**Ngoài ra, bạn có thể tham khảo thêm các kiểu dữ liệu khác trong PostgresSQL:**

- **Kiểu dữ liệu số:** Numeric Types
- **Kiểu dữ liệu tiền tệ:** Monetary Types
- **Kiểu dữ liệu ký tự:** Character Types
- **Kiểu dữ liệu nhị phân:** Binary Data Types
- **Kiểu dữ liệu ngày giờ:** Date and Time Types
- **Kiểu dữ liệu khác:** Other Types
