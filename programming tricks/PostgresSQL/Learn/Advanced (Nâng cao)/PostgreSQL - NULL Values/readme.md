## Giá trị NULL trong PostgreSQL

**Khái niệm:**

**NULL** trong PostgreSQL là một giá trị đặc biệt biểu thị cho một giá trị không xác định hoặc không có. Nó khác với giá trị 0 hoặc một chuỗi rỗng.

**Ngữ cảnh:**

Giá trị NULL thường được sử dụng trong các trường hợp sau:

- Dữ liệu không có sẵn hoặc không được biết đến.
- Dữ liệu không áp dụng cho một trường cụ thể.
- Dữ liệu bị lỗi hoặc không hợp lệ.

**Cách sử dụng:**

- **So sánh giá trị NULL:**

Để so sánh một giá trị với NULL, bạn sử dụng toán tử `IS NULL` hoặc `IS NOT NULL`.

```sql
SELECT *
FROM table_name
WHERE column_name IS NULL;

SELECT *
FROM table_name
WHERE column_name IS NOT NULL;
```

- **Kiểm tra giá trị NULL trong các phép toán:**

Hầu hết các phép toán trong PostgreSQL sẽ trả về NULL nếu một trong các toán hạng là NULL.

- **Lọc các bản ghi có giá trị NULL:**

Bạn có thể sử dụng `WHERE` clause để lọc các bản ghi có giá trị NULL cho một cột cụ thể.

```sql
SELECT *
FROM table_name
WHERE column_name IS NULL;
```

- **Chèn giá trị NULL:**

Bạn có thể chèn giá trị NULL vào một cột bằng cách sử dụng từ khóa `NULL`.

```sql
INSERT INTO table_name (column_name)
VALUES (NULL);
```

- **Cập nhật giá trị NULL:**

Bạn có thể cập nhật giá trị của một cột thành NULL bằng cách sử dụng từ khóa `NULL`.

```sql
UPDATE table_name
SET column_name = NULL
WHERE condition;
```

**Ví dụ:**

```sql
-- Lấy danh sách khách hàng không có địa chỉ email
SELECT *
FROM customers
WHERE email IS NULL;

-- Cập nhật số điện thoại của khách hàng thành NULL
UPDATE customers
SET phone_number = NULL
WHERE customer_id = 1;
```

**Lưu ý:**

- Giá trị NULL có thể gây ra một số vấn đề trong khi truy vấn dữ liệu.
- Bạn cần cẩn thận khi sử dụng các toán tử so sánh và phép toán với giá trị NULL.

**Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về giá trị NULL trong PostgreSQL: [https://www.postgresql.org/docs/current/sql-commands.html](https://www.postgresql.org/docs/current/sql-commands.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
