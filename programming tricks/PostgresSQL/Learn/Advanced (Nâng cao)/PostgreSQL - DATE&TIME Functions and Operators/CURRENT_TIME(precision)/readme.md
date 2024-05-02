## Hàm và Toán tử DATE/TIME - CURRENT_TIME(precision) trong PostgreSQL

**Khái niệm:**

Hàm `CURRENT_TIME(precision)` trong PostgreSQL được sử dụng để lấy thời gian hiện tại với độ chính xác được chỉ định. Hàm này trả về một giá trị TIME without time zone.

**Ngữ cảnh:**

Hàm `CURRENT_TIME(precision)` được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Lấy thời gian hiện tại với độ chính xác cụ thể:** Hàm `CURRENT_TIME(precision)` có thể được sử dụng để lấy thời gian hiện tại với độ chính xác mili giây, micro giây hoặc nano giây.
- **Ghi lại thời gian hiện tại:** Hàm `CURRENT_TIME(precision)` có thể được sử dụng để ghi lại thời gian hiện tại của một sự kiện với độ chính xác cao.
- **Cập nhật dữ liệu:** Hàm `CURRENT_TIME(precision)` có thể được sử dụng để cập nhật dữ liệu với thời gian hiện tại với độ chính xác cao.

**Cách sử dụng:**

Hàm `CURRENT_TIME(precision)` có một đối số bắt buộc:

- **precision:** Số lượng chữ số thập phân cho phần giây. Giá trị hợp lệ là từ 0 đến 6.

**Ví dụ:**

- `CURRENT_TIME(3)` trả về thời gian hiện tại với độ chính xác mili giây (3 chữ số thập phân).
- `CURRENT_TIME(6)` trả về thời gian hiện tại với độ chính xác micro giây (6 chữ số thập phân).

**Ví dụ:**

```sql
-- Lấy thời gian hiện tại với độ chính xác mili giây

SELECT CURRENT_TIME(3);

-- Lấy thời gian hiện tại với độ chính xác micro giây

SELECT CURRENT_TIME(6);

-- Ghi lại thời gian hiện tại của một sự kiện với độ chính xác micro giây

INSERT INTO events (time)
VALUES (CURRENT_TIME(6));

-- Cập nhật dữ liệu với thời gian hiện tại với độ chính xác mili giây

UPDATE customers
SET last_login_time = CURRENT_TIME(3)
WHERE id = 1;

-- So sánh thời gian hiện tại với một thời gian khác

SELECT CURRENT_TIME(3) > TIME '10:00:00.123';
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

- Hàm `CURRENT_TIME(precision)` trả về giá trị TIME without time zone, không bao gồm múi giờ.
- Hàm `CURRENT_TIME(precision)` có thể trả về giá trị khác nhau mỗi khi được gọi.

**Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về Hàm và Toán tử DATE/TIME: [https://www.postgresql.org/docs/current/functions-datetime.html](https://www.postgresql.org/docs/current/functions-datetime.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
