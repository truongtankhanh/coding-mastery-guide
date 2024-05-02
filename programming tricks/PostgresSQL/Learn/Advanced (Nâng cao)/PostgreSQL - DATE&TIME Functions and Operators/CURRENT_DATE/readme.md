## Hàm và Toán tử DATE/TIME - CURRENT_DATE trong PostgreSQL

**Khái niệm:**

Hàm `CURRENT_DATE` trong PostgreSQL được sử dụng để lấy ngày hiện tại. Hàm này trả về một giá trị DATE.

**Ngữ cảnh:**

Hàm `CURRENT_DATE` được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Lấy ngày hiện tại:** Hàm `CURRENT_DATE` có thể được sử dụng để lấy ngày hiện tại để sử dụng trong các phép tính hoặc so sánh.
- **Ghi lại ngày hiện tại:** Hàm `CURRENT_DATE` có thể được sử dụng để ghi lại ngày hiện tại của một sự kiện.
- **Cập nhật dữ liệu:** Hàm `CURRENT_DATE` có thể được sử dụng để cập nhật dữ liệu với ngày hiện tại.

**Cách sử dụng:**

Hàm `CURRENT_DATE` không có đối số.

**Ví dụ:**

```sql
-- Lấy ngày hiện tại

SELECT CURRENT_DATE;

-- Ghi lại ngày hiện tại của một sự kiện

INSERT INTO events (date)
VALUES (CURRENT_DATE);

-- Cập nhật dữ liệu với ngày hiện tại

UPDATE customers
SET last_login_date = CURRENT_DATE
WHERE id = 1;

-- So sánh ngày hiện tại với một ngày khác

SELECT CURRENT_DATE > DATE '2023-03-08';
```

**Kết quả:**

```sql
-- 2023-04-09
-- 1 row affected
-- 1 row updated
-- t
```

**Lưu ý:**

- Hàm `CURRENT_DATE` trả về giá trị DATE không bao gồm thời gian.
- Hàm `CURRENT_DATE` trả về giá trị DATE theo múi giờ của phiên bản PostgreSQL.

**Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về Hàm và Toán tử DATE/TIME: [https://www.postgresql.org/docs/current/functions-datetime.html](https://www.postgresql.org/docs/current/functions-datetime.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
