## Kiểu dữ liệu số trong PostgresSQL

### Các loại chính

PostgresSQL hỗ trợ hai loại dữ liệu số chính:

- **Số nguyên:**
  - **Smallint:** Số nguyên có 2 byte, lưu trữ giá trị từ -32.768 đến 32.767.
  - **Integer (int, int4):** Số nguyên có 4 byte, lưu trữ giá trị từ -2.147.483.648 đến 2.147.483.647.
  - **Bigint:** Số nguyên có 8 byte, lưu trữ giá trị từ -9223372036854775808 đến 9223372036854775807.
- **Số thực:**
  - **Real (float4):** Số thực 32 bit, lưu trữ giá trị với độ chính xác 7 chữ số thập phân.
  - **Double precision (float8):** Số thực 64 bit, lưu trữ giá trị với độ chính xác 15 chữ số thập phân.
  - **Decimal:** Số thực độ chính xác cao, cho phép tùy chỉnh độ chính xác (số chữ số) và độ lớn (số chữ số sau dấu thập phân)

### Ví dụ sử dụng

```sql
-- Tạo bảng với các cột kiểu dữ liệu số
CREATE TABLE numeric_data (
    id SERIAL PRIMARY KEY,
    age SMALLINT,
    salary INTEGER,
    height DECIMAL(10,2),
    weight REAL
);

-- Thêm dữ liệu vào bảng
INSERT INTO numeric_data (age, salary, height, weight)
VALUES (25, 50000000, 1.75, 70.5);

-- Truy vấn dữ liệu
SELECT * FROM numeric_data;

-- Cập nhật dữ liệu
UPDATE numeric_data SET salary = 60000000 WHERE id = 1;

-- Xóa dữ liệu
DELETE FROM numeric_data WHERE age < 20;
```

### Một số lưu ý

- Khi chọn kiểu dữ liệu số, cần cân nhắc phạm vi giá trị và độ chính xác cần thiết cho dữ liệu.
- Kiểu dữ liệu `decimal` phù hợp cho các trường hợp cần tính toán chính xác cao.
- PostgresSQL cũng hỗ trợ các kiểu dữ liệu số khác như `numeric`, `money` và `interval`.

### Tài liệu tham khảo

- Bài viết về kiểu dữ liệu trong PostgreSQL: [https://viblo.asia/p/kieu-du-lieu-trong-postgressql-data-types-5pPLkGOZLRZ](https://viblo.asia/p/kieu-du-lieu-trong-postgressql-data-types-5pPLkGOZLRZ)

### Hỗ trợ

Nếu bạn gặp khó khăn trong quá trình học tập hoặc cần giải đáp thắc mắc về PostgresSQL, hãy tham khảo các nguồn hỗ trợ sau:

- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
