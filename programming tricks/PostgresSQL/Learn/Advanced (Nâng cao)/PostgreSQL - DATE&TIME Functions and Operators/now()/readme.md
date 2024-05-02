## Hàm và Toán tử DATE/TIME - now() trong PostgreSQL

**Khái niệm:**

Hàm `now()` trong PostgreSQL được sử dụng để lấy thời gian hiện tại theo múi giờ của máy chủ.

**Ngữ cảnh:**

Hàm `now()` được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Lấy thời gian hiện tại:** Hàm `now()` có thể được sử dụng để lấy thời gian hiện tại để ghi vào nhật ký hoặc để sử dụng trong các phép tính.
- **So sánh thời gian:** Hàm `now()` có thể được sử dụng để so sánh thời gian hiện tại với thời gian khác.
- **Xử lý dữ liệu lịch:** Hàm `now()` có thể được sử dụng để xử lý dữ liệu lịch, ví dụ như tính toán thời gian bắt đầu và kết thúc của một sự kiện.

**Cách sử dụng:**

Hàm `now()` không có đối số nào.

**Ví dụ:**

- Lấy thời gian hiện tại:

```sql
SELECT now();
```

- So sánh thời gian hiện tại với 10 giờ sáng:

```sql
SELECT CASE WHEN now() > INTERVAL '10 hours' THEN 'Thời gian hiện tại sau 10 giờ sáng' ELSE 'Thời gian hiện tại trước 10 giờ sáng' END;
```

- Xác định thời gian kết thúc của một sự kiện kéo dài 2 tiếng bắt đầu từ thời gian hiện tại:

```sql
SELECT now() + INTERVAL '2 hours';
```

**Kết quả:**

```sql
-- 2023-11-14 11:33:00+07
-- Thời gian hiện tại sau 10 giờ sáng
-- 2023-11-14 13:33:00+07
```

**Lưu ý:**

- Hàm `now()` trả về giá trị kiểu TIMESTAMP WITH TIME ZONE.
- Giá trị TIMESTAMP WITH TIME ZONE được trả về bởi `now()` sẽ phụ thuộc vào múi giờ của máy chủ.

**Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về Hàm và Toán tử DATE/TIME: [https://www.postgresql.org/docs/current/functions-datetime.html](https://www.postgresql.org/docs/current/functions-datetime.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
