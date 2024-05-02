## Hàm và Toán tử DATE/TIME - JUSTIFY_HOURS trong PostgreSQL

**Khái niệm:**

Hàm `JUSTIFY_HOURS` trong PostgreSQL được sử dụng để điều chỉnh một giá trị INTERVAL kiểu HOUR đến một số giờ cụ thể.

**Ngữ cảnh:**

Hàm `JUSTIFY_HOURS` được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Điều chỉnh giờ trong ngày:** Hàm `JUSTIFY_HOURS` có thể được sử dụng để điều chỉnh giờ trong ngày, ví dụ như chuyển đổi 23 giờ sang 0 giờ.
- **Tính toán thời gian làm việc:** Hàm `JUSTIFY_HOURS` có thể được sử dụng để tính toán thời gian làm việc bằng cách loại trừ giờ nghỉ trưa.
- **Xử lý dữ liệu lịch:** Hàm `JUSTIFY_HOURS` có thể được sử dụng để xử lý dữ liệu lịch, ví dụ như tính toán thời gian bắt đầu và kết thúc của một sự kiện.

**Cách sử dụng:**

Hàm `JUSTIFY_HOURS` có hai đối số:

- **'interval':** Giá trị INTERVAL kiểu HOUR cần điều chỉnh.
- **'hour':** Số giờ cụ thể mà giá trị INTERVAL sẽ được điều chỉnh đến.

**Ví dụ:**

- Điều chỉnh 23 giờ sang 0 giờ:

```sql
SELECT JUSTIFY_HOURS(INTERVAL '23 hours', 0);
```

- Tính toán thời gian làm việc 8 tiếng sau 9 giờ sáng:

```sql
SELECT JUSTIFY_HOURS(INTERVAL '8 hours', 9) + INTERVAL '1 hour';
```

- Xác định thời gian bắt đầu của một sự kiện kéo dài 3 tiếng bắt đầu từ 14 giờ:

```sql
SELECT JUSTIFY_HOURS(INTERVAL '2 hours', 14) + INTERVAL '1 hour';
```

**Kết quả:**

```sql
-- 2023-04-09 00:00:00+07
-- 2023-04-09 17:00:00+07
-- 2023-04-09 14:00:00+07
```

**Lưu ý:**

- Hàm `JUSTIFY_HOURS` chỉ hoạt động với giá trị INTERVAL kiểu HOUR.
- Hàm `JUSTIFY_HOURS` sẽ trả về giá trị INTERVAL mới với số giờ được điều chỉnh.

**Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về Hàm và Toán tử DATE/TIME: [https://www.postgresql.org/docs/current/functions-datetime.html](https://www.postgresql.org/docs/current/functions-datetime.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
