## Hàm và Toán tử DATE/TIME - DATE_TRUNC trong PostgreSQL

**Khái niệm:**

Hàm `DATE_TRUNC` trong PostgreSQL được sử dụng để cắt bớt một giá trị DATE, TIME hoặc TIMESTAMP đến một độ chính xác cụ thể.

**Ngữ cảnh:**

Hàm `DATE_TRUNC` được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Cắt bớt ngày tháng đến một độ chính xác cụ thể:** Hàm `DATE_TRUNC` có thể được sử dụng để cắt bớt ngày tháng đến năm, tháng, ngày, giờ, phút, giây, v.v.
- **So sánh các giá trị DATE/TIME:** Hàm `DATE_TRUNC` có thể được sử dụng để so sánh các giá trị DATE/TIME sau khi được cắt bớt đến cùng một độ chính xác.
- **Lọc dữ liệu:** Hàm `DATE_TRUNC` có thể được sử dụng để lọc dữ liệu dựa trên các phần của ngày tháng, ví dụ như lấy tất cả các bản ghi được tạo trong tháng 3 năm 2023.

**Cách sử dụng:**

Hàm `DATE_TRUNC` có hai đối số bắt buộc:

- **'field':** Xác định phần nào của giá trị DATE, TIME hoặc TIMESTAMP cần cắt bớt.
- **'source':** Giá trị DATE, TIME hoặc TIMESTAMP cần cắt bớt phần.

**Ví dụ:**

- Cắt bớt giá trị DATE '2023-04-09' đến năm:

```sql
SELECT DATE_TRUNC('year', '2023-04-09');
```

- Cắt bớt giá trị TIMESTAMP '2023-04-09 11:07:00.123+07' đến tháng:

```sql
SELECT DATE_TRUNC('month', '2023-04-09 11:07:00.123+07');
```

- Cắt bớt giá trị TIME '11:07:00.123' đến giờ:

```sql
SELECT DATE_TRUNC('hour', '11:07:00.123');
```

- So sánh tháng hiện tại với tháng trước sau khi cắt bớt:

```sql
SELECT DATE_TRUNC('month', CURRENT_TIMESTAMP) = DATE_TRUNC('month', CURRENT_TIMESTAMP - INTERVAL '1 month');
```

- Lọc tất cả các bản ghi được tạo trong tháng 3 năm 2023:

```sql
SELECT * FROM events WHERE DATE_TRUNC('month', created_at) = 3 AND DATE_TRUNC('year', created_at) = 2023;
```

**Kết quả:**

```sql
-- 2023
-- 2023-04-01
-- 2023-04-09 11:00:00+07
-- t
-- 1 row(s)
```

**Lưu ý:**

- Hàm `DATE_TRUNC` có thể được sử dụng với nhiều trường khác nhau, ví dụ như 'quarter', 'week', 'day', 'hour', 'minute', 'second', 'millisecond', 'microsecond', 'nanosecond'.
- Hàm `DATE_TRUNC` trả về giá trị kiểu DATE, TIME hoặc TIMESTAMP tùy thuộc vào trường được cắt bớt.

**Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về Hàm và Toán tử DATE/TIME: [https://www.postgresql.org/docs/current/functions-datetime.html](https://www.postgresql.org/docs/current/functions-datetime.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
