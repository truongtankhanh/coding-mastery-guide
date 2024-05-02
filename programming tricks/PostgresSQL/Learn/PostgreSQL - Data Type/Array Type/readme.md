## Kiểu dữ liệu Mảng trong PostgresSQL

**Khái niệm:**

Kiểu dữ liệu Mảng trong PostgresSQL cho phép bạn lưu trữ một tập hợp các giá trị có cùng kiểu dữ liệu. Nó tương tự như danh sách hoặc mảng trong các ngôn ngữ lập trình.

**Ngữ cảnh:**

Kiểu dữ liệu Mảng được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- Lưu trữ tập hợp các giá trị liên quan, ví dụ như danh sách các sản phẩm trong giỏ hàng
- Lưu trữ dữ liệu đa chiều, ví dụ như ma trận
- Tối ưu hóa lưu trữ cho các tập hợp giá trị có cùng kiểu dữ liệu

**Cách sử dụng:**

**1. Khai báo kiểu dữ liệu:**

```sql
-- Khai báo kiểu mảng integer
CREATE TYPE int_array AS ARRAY OF integer;

-- Khai báo kiểu mảng text
CREATE TYPE text_array AS ARRAY OF text;
```

**2. Tạo bảng:**

```sql
CREATE TABLE array_data (
    id SERIAL PRIMARY KEY,
    numbers int_array,
    texts text_array
);
```

**3. Thêm dữ liệu:**

```sql
INSERT INTO array_data (numbers, texts)
VALUES ('{1, 2, 3}', '{"a", "b", "c"}');
```

**4. Truy vấn dữ liệu:**

```sql
SELECT * FROM array_data;

-- Truy cập phần tử thứ 2 của mảng numbers
SELECT numbers[2] FROM array_data WHERE id = 1;

-- Truy cập phần tử đầu tiên của mảng texts
SELECT texts[1] FROM array_data WHERE id = 1;
```

**5. Cập nhật dữ liệu:**

```sql
UPDATE array_data SET numbers = '{1, 2, 4}' WHERE id = 1;

-- Thêm phần tử "d" vào cuối mảng texts
UPDATE array_data SET texts = texts || 'd' WHERE id = 1;
```

**6. Xóa dữ liệu:**

```sql
DELETE FROM array_data WHERE numbers IS NULL;
```

**Ví dụ:**

Giả sử chúng ta có một hệ thống quản lý cửa hàng cần lưu trữ danh sách các sản phẩm trong giỏ hàng của khách hàng. Chúng ta có thể sử dụng kiểu dữ liệu `int_array` để lưu trữ danh sách mã sản phẩm và `text_array` để lưu trữ danh sách tên sản phẩm.

```sql
CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    customer_id integer,
    product_ids int_array,
    product_names text_array
);

INSERT INTO cart (customer_id, product_ids, product_names)
VALUES (1, '{1, 2, 3}', '{"áo thun", "quần jeans", "giày"}');

SELECT * FROM cart;

-- Lấy danh sách mã sản phẩm trong giỏ hàng của khách hàng có id = 1
SELECT product_ids FROM cart WHERE customer_id = 1;

-- Thêm sản phẩm mới vào giỏ hàng
UPDATE cart SET product_ids = product_ids || 4 WHERE customer_id = 1;

-- Xóa sản phẩm khỏi giỏ hàng
UPDATE cart SET product_ids = array_remove(product_ids, 2) WHERE customer_id = 1;
```

**Lưu ý:**

- PostgresSQL cung cấp nhiều hàm built-in để thao tác với dữ liệu mảng, ví dụ như `array_append()`, `array_remove()`, `array_agg()` và `unnest()`.
- Khi sử dụng kiểu dữ liệu Mảng, cần lưu ý về thứ tự các phần tử trong mảng và cách thức truy cập các phần tử.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về kiểu dữ liệu Mảng trong PostgresSQL: [https://viblo.asia/p/hieu-ve-array-trong-postgressql-07LKXBLelV4](https://viblo.asia/p/hieu-ve-array-trong-postgressql-07LKXBLelV4)

**Hỗ trợ:**

- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
