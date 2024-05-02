## Hàm và Toán tử DATE/TIME - EXTRACT trong PostgreSQL

**Khái niệm:**

Hàm `EXTRACT` trong PostgreSQL được sử dụng để trích xuất một phần cụ thể từ giá trị DATE, TIME hoặc INTERVAL.

**Ngữ cảnh:**

Hàm `EXTRACT` được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Lấy một phần cụ thể từ ngày tháng:** Hàm `EXTRACT` có thể được sử dụng để lấy năm, tháng, ngày, giờ, phút, giây, v.v. từ một giá trị DATE, TIME hoặc INTERVAL.
- **So sánh các phần của ngày tháng:** Hàm `EXTRACT` có thể được sử dụng để so sánh các phần của ngày tháng, ví dụ như so sánh tháng hiện tại với tháng trước.
- **Lọc dữ liệu:** Hàm `EXTRACT` có thể được sử dụng để lọc dữ liệu dựa trên các phần của ngày tháng, ví dụ như lấy tất cả các bản ghi được tạo trong tháng 3 năm 2023.

**Cách sử dụng:**

Hàm `EXTRACT` có hai đối số bắt buộc:

- **'field':** Xác định phần nào của giá trị DATE, TIME hoặc INTERVAL cần trích xuất.
- **'source':** Giá trị DATE, TIME hoặc INTERVAL cần trích xuất phần.

**Ví dụ:**

- Lấy năm từ giá trị DATE '2023-04-09':

```sql
SELECT EXTRACT(year FROM '2023-04-09');
```

- Lấy tháng từ giá trị TIMESTAMP '2023-04-09 11:07:00.123+07':

```sql
SELECT EXTRACT(month FROM '2023-04-09 11:07:00.123+07');
```

- Lấy ngày từ giá trị TIME '11:07:00.123':

```sql
SELECT EXTRACT(day FROM '11:07:00.123');
```

- So sánh tháng hiện tại với tháng trước:

```sql
SELECT EXTRACT(month FROM CURRENT_TIMESTAMP) = EXTRACT(month FROM CURRENT_TIMESTAMP - INTERVAL '1 month');
```

- Lọc tất cả các bản ghi được tạo trong tháng 3 năm 2023:

```sql
SELECT * FROM events WHERE EXTRACT(month FROM created_at) = 3 AND EXTRACT(year FROM created_at) = 2023;
```

**Kết quả:**

```sql
-- 2023
-- 4
-- 9
-- t
-- 1 row(s)
```

**Lưu ý:**

- Hàm `EXTRACT` có thể được sử dụng với nhiều trường khác nhau, ví dụ như 'quarter', 'week', 'day', 'hour', 'minute', 'second', 'millisecond', 'microsecond', 'nanosecond'.
- Hàm `EXTRACT` trả về giá trị kiểu integer.

**Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về Hàm và Toán tử DATE/TIME: [https://www.postgresql.org/docs/current/functions-datetime.html](https://www.postgresql.org/docs/current/functions-datetime.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
