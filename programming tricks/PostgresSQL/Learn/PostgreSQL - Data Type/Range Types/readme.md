## Kiểu dữ liệu Range trong PostgresSQL

**Khái niệm:**

Kiểu dữ liệu Range trong PostgresSQL cho phép bạn lưu trữ và thao tác với các giá trị trong một khoảng. Ví dụ, bạn có thể lưu trữ khoảng thời gian, khoảng giá trị số, hoặc khoảng ngày tháng.

**Ngữ cảnh:**

Kiểu dữ liệu Range được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- Lưu trữ tập hợp các giá trị liên tiếp
- Lọc dữ liệu trong các truy vấn
- Thực hiện các phép toán trên các khoảng

**Cách sử dụng:**

**1. Khai báo kiểu dữ liệu:**

```sql
-- Khai báo kiểu dữ liệu range cho số nguyên
CREATE TYPE int_range AS RANGE OF integer;

-- Khai báo kiểu dữ liệu range cho timestamp
CREATE TYPE timestamp_range AS RANGE OF timestamp;
```

**2. Tạo bảng:**

```sql
CREATE TABLE ranges (
    id SERIAL PRIMARY KEY,
    number_range int_range,
    date_range timestamp_range
);
```

**3. Thêm dữ liệu:**

```sql
INSERT INTO ranges (number_range, date_range)
VALUES ('[1, 10)', '[2023-01-01, 2023-12-31)');
```

**4. Truy vấn dữ liệu:**

```sql
SELECT * FROM ranges;

-- Lấy các bản ghi có number_range bao gồm giá trị 5
SELECT * FROM ranges WHERE number_range @> 5;

-- Lấy các bản ghi có date_range chồng lấn với khoảng '[2023-06-01, 2023-08-31)'
SELECT * FROM ranges WHERE date_range && '[2023-06-01, 2023-08-31)';
```

**5. Cập nhật dữ liệu:**

```sql
UPDATE ranges SET number_range = '[2, 12]' WHERE id = 1;
```

**6. Xóa dữ liệu:**

```sql
DELETE FROM ranges WHERE number_range IS NULL;
```

**Ví dụ:**

Giả sử chúng ta có một hệ thống quản lý kho hàng cần lưu trữ thông tin về số lượng sản phẩm trong kho. Chúng ta có thể sử dụng kiểu dữ liệu `int_range` để lưu trữ số lượng sản phẩm tối thiểu và tối đa cho mỗi loại sản phẩm.

```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    quantity_range int_range
);

INSERT INTO products (name, quantity_range)
VALUES ('Áo thun', '[10, 50]');

SELECT * FROM products;

-- Lấy các sản phẩm có số lượng tối thiểu lớn hơn 20
SELECT * FROM products WHERE quantity_range.lower > 20;

-- Cập nhật số lượng tối đa cho sản phẩm "Áo thun"
UPDATE products SET quantity_range.upper = 100 WHERE name = 'Áo thun';
```

**Lưu ý:**

- PostgresSQL cung cấp nhiều hàm built-in để thao tác với dữ liệu range, ví dụ như `range_overlap()`, `range_contains()`, và `range_union()`.
- Khi sử dụng kiểu dữ liệu Range, cần lưu ý về cách thức so sánh và thao tác với các khoảng.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgresSQL: [https://www.postgresql.org/](https://www.postgresql.org/)

**Hỗ trợ:**

- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
