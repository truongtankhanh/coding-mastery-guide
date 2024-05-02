## Hàm và Toán tử DATE/TIME - CURRENT_TIME trong PostgreSQL

**Khái niệm:**

Hàm `CURRENT_TIME` trong PostgreSQL được sử dụng để lấy thời gian hiện tại. Hàm này trả về một giá trị TIME without time zone.

**Ngữ cảnh:**

Hàm `CURRENT_TIME` được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Lấy thời gian hiện tại:** Hàm `CURRENT_TIME` có thể được sử dụng để lấy thời gian hiện tại để sử dụng trong các phép tính hoặc so sánh.
- **Ghi lại thời gian hiện tại:** Hàm `CURRENT_TIME` có thể được sử dụng để ghi lại thời gian hiện tại của một sự kiện.
- **Cập nhật dữ liệu:** Hàm `CURRENT_TIME` có thể được sử dụng để cập nhật dữ liệu với thời gian hiện tại.

**Cách sử dụng:**

Hàm `CURRENT_TIME` có thể có một đối số tùy chọn:

- **precision:** Số lượng chữ số thập phân cho phần giây.

Ví dụ:

- `CURRENT_TIME` trả về thời gian hiện tại với độ chính xác mili giây (3 chữ số thập phân).
- `CURRENT_TIME(6)` trả về thời gian hiện tại với độ chính xác micro giây (6 chữ số thập phân).

**Ví dụ:**

```sql
-- Lấy thời gian hiện tại

SELECT CURRENT_TIME;

-- Lấy thời gian hiện tại với độ chính xác micro giây

SELECT CURRENT_TIME(6);

-- Ghi lại thời gian hiện tại của một sự kiện

INSERT INTO events (time)
VALUES (CURRENT_TIME);

-- Cập nhật dữ liệu với thời gian hiện tại

UPDATE customers
SET last_login_time = CURRENT_TIME
WHERE id = 1;

-- So sánh thời gian hiện tại với một thời gian khác

SELECT CURRENT_TIME > TIME '10:00:00';
```

**Kết quả:**

```sql
-- 11:07:00.000
-- 11:07:00.123456
-- 1 row affected
-- 1 row updated
-- t
```

**Lưu ý:**

- Hàm `CURRENT_TIME` trả về giá trị TIME without time zone, không bao gồm múi giờ.
- Hàm `CURRENT_TIME` có thể trả về giá trị khác nhau mỗi khi được gọi.

**Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về Hàm và Toán tử DATE/TIME: [https://www.postgresql.org/docs/current/functions-datetime.html](https://www.postgresql.org/docs/current/functions-datetime.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
