## Hàm và Toán tử DATE/TIME - CURRENT_TIMESTAMP(precision) trong PostgreSQL

**Khái niệm:**

Hàm `CURRENT_TIMESTAMP(precision)` trong PostgreSQL được sử dụng để lấy timestamp hiện tại với độ chính xác được chỉ định. Hàm này trả về một giá trị timestamp with time zone.

**Ngữ cảnh:**

Hàm `CURRENT_TIMESTAMP(precision)` được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Lấy timestamp hiện tại với độ chính xác cụ thể:** Hàm `CURRENT_TIMESTAMP(precision)` có thể được sử dụng để lấy timestamp hiện tại với độ chính xác mili giây, micro giây hoặc nano giây.
- **Ghi lại timestamp hiện tại:** Hàm `CURRENT_TIMESTAMP(precision)` có thể được sử dụng để ghi lại timestamp hiện tại của một sự kiện với độ chính xác cao.
- **Cập nhật dữ liệu:** Hàm `CURRENT_TIMESTAMP(precision)` có thể được sử dụng để cập nhật dữ liệu với timestamp hiện tại với độ chính xác cao.

**Cách sử dụng:**

Hàm `CURRENT_TIMESTAMP(precision)` có một đối số bắt buộc:

- **precision:** Số lượng chữ số thập phân cho phần giây. Giá trị hợp lệ là từ 0 đến 6.

**Ví dụ:**

- `CURRENT_TIMESTAMP(3)` trả về timestamp hiện tại với độ chính xác mili giây (3 chữ số thập phân).
- `CURRENT_TIMESTAMP(6)` trả về timestamp hiện tại với độ chính xác micro giây (6 chữ số thập phân).

**Ví dụ:**

```sql
-- Lấy timestamp hiện tại với độ chính xác mili giây

SELECT CURRENT_TIMESTAMP(3);

-- Lấy timestamp hiện tại với độ chính xác micro giây

SELECT CURRENT_TIMESTAMP(6);

-- Ghi lại timestamp hiện tại của một sự kiện với độ chính xác micro giây

INSERT INTO events (timestamp)
VALUES (CURRENT_TIMESTAMP(6));

-- Cập nhật dữ liệu với timestamp hiện tại với độ chính xác mili giây

UPDATE customers
SET last_login_timestamp = CURRENT_TIMESTAMP(3)
WHERE id = 1;

-- So sánh timestamp hiện tại với một timestamp khác

SELECT CURRENT_TIMESTAMP(3) > TIMESTAMP '2023-03-08 10:00:00.123456+07';
```

**Kết quả:**

```sql
-- 2023-04-09 11:07:00.000+07
-- 2023-04-09 11:07:00.123456+07
-- 1 row affected
-- 1 row updated
-- t
```

**Lưu ý:**

- Hàm `CURRENT_TIMESTAMP(precision)` trả về giá trị timestamp with time zone, bao gồm múi giờ.
- Hàm `CURRENT_TIMESTAMP(precision)` có thể trả về giá trị khác nhau mỗi khi được gọi.

**Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về Hàm và Toán tử DATE/TIME: [https://www.postgresql.org/docs/current/functions-datetime.html](https://www.postgresql.org/docs/current/functions-datetime.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
