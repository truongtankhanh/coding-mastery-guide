## Kiểu dữ liệu tiền tệ trong PostgresSQL

**Khái niệm:**

Kiểu dữ liệu tiền tệ trong PostgresSQL được sử dụng để lưu trữ giá trị tiền tệ một cách chính xác và hiệu quả. PostgresSQL cung cấp hai kiểu dữ liệu chính cho mục đích này:

- **Money:** Kiểu dữ liệu cố định 4 byte, lưu trữ giá trị tiền tệ với độ chính xác 10 chữ số thập phân.
- **Numeric:** Kiểu dữ liệu số có thể tùy chỉnh độ chính xác và độ lớn, phù hợp cho các yêu cầu tính toán chính xác cao.

**Ngữ cảnh:**

Kiểu dữ liệu tiền tệ được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- Hệ thống bán hàng
- Hệ thống kế toán
- Hệ thống quản lý tài chính
- Bất kỳ hệ thống nào cần lưu trữ và thao tác với giá trị tiền tệ

**Cách sử dụng:**

**1. Tạo bảng:**

```sql
CREATE TABLE monetary_data (
    id SERIAL PRIMARY KEY,
    price MONEY,
    discount DECIMAL(10,2),
    total_amount NUMERIC(15,4)
);
```

**2. Thêm dữ liệu:**

```sql
INSERT INTO monetary_data (price, discount, total_amount)
VALUES (100000, 5.5, 94500);
```

**3. Truy vấn dữ liệu:**

```sql
SELECT * FROM monetary_data;
```

**4. Cập nhật dữ liệu:**

```sql
UPDATE monetary_data SET total_amount = total_amount * 1.1 WHERE id = 1;
```

**5. Xóa dữ liệu:**

```sql
DELETE FROM monetary_data WHERE price < 50000;
```

**Ví dụ:**

Giả sử chúng ta có một hệ thống bán hàng cần lưu trữ giá trị sản phẩm và tổng giá trị đơn hàng. Chúng ta có thể sử dụng kiểu dữ liệu `money` để lưu trữ giá trị sản phẩm và `numeric` để lưu trữ tổng giá trị đơn hàng vì nó có thể yêu cầu tính toán chính xác hơn.

```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    price MONEY
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER,
    total_amount NUMERIC(15,4)
);

INSERT INTO products (name, price)
VALUES ('Áo thun', 200000), ('Quần jeans', 300000);

INSERT INTO orders (customer_id, total_amount)
VALUES (1, 500000);

SELECT * FROM products;

SELECT * FROM orders;
```

**Lưu ý:**

- Khi chọn kiểu dữ liệu tiền tệ, cần cân nhắc độ chính xác cần thiết cho dữ liệu và đơn vị tiền tệ sử dụng.
- Kiểu dữ liệu `money` phù hợp cho các trường hợp lưu trữ giá trị tiền tệ chung.
- Kiểu dữ liệu `numeric` phù hợp cho các trường hợp cần tính toán chính xác cao.
- PostgresQL cũng hỗ trợ các hàm built-in để thao tác với dữ liệu tiền tệ, ví dụ như `round()`, `trunc()` và `format()`.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về kiểu dữ liệu trong PostgreSQL: [https://viblo.asia/p/kieu-du-lieu-trong-postgressql-data-types-5pPLkGOZLRZ](https://viblo.asia/p/kieu-du-lieu-trong-postgressql-data-types-5pPLkGOZLRZ)

**Hỗ trợ:**

- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
