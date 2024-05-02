## Hàm và Toán tử DATE/TIME - statement_timestamp() trong PostgreSQL

**Khái niệm:**

Hàm `statement_timestamp()` trong PostgreSQL được sử dụng để lấy thời gian bắt đầu thực thi câu lệnh SQL hiện tại.

**Ngữ cảnh:**

Hàm `statement_timestamp()` được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Ghi nhật ký:** Hàm `statement_timestamp()` có thể được sử dụng để ghi lại thời gian bắt đầu thực thi câu lệnh SQL để theo dõi hiệu suất hoặc để gỡ lỗi.
- **Kiểm soát luồng:** Hàm `statement_timestamp()` có thể được sử dụng để kiểm soát luồng thực thi của chương trình, ví dụ như để đảm bảo rằng một câu lệnh SQL chỉ được thực thi một lần.
- **Tính toán thời gian:** Hàm `statement_timestamp()` có thể được sử dụng để tính toán thời gian thực thi của một câu lệnh SQL.

**Cách sử dụng:**

Hàm `statement_timestamp()` không có đối số nào.

**Ví dụ:**

- Ghi lại thời gian bắt đầu thực thi câu lệnh SQL:

```sql
SELECT statement_timestamp();
-- Ghi vào nhật ký: "Câu lệnh SQL bắt đầu thực thi lúc 2023-11-14 11:34:00+07"
```

- Kiểm soát luồng thực thi:

```sql
IF statement_timestamp() > INTERVAL '10 seconds' THEN
  -- Bỏ qua câu lệnh SQL
ELSE
  -- Thực thi câu lệnh SQL
END IF;
```

- Tính toán thời gian thực thi của một câu lệnh SQL:

```sql
SELECT statement_timestamp();
-- Thực thi câu lệnh SQL
SELECT now() - statement_timestamp();
-- Kết quả: "Thời gian thực thi: 0.005 giây"
```

**Lưu ý:**

- Hàm `statement_timestamp()` trả về giá trị kiểu TIMESTAMP WITH TIME ZONE.
- Giá trị TIMESTAMP WITH TIME ZONE được trả về bởi `statement_timestamp()` sẽ phụ thuộc vào múi giờ của máy chủ.
- Hàm `statement_timestamp()` chỉ lấy thời gian bắt đầu thực thi câu lệnh SQL, không lấy thời gian thực thi của các câu lệnh con được gọi trong câu lệnh SQL đó.

**Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về Hàm và Toán tử DATE/TIME: [https://www.postgresql.org/docs/current/functions-datetime.html](https://www.postgresql.org/docs/current/functions-datetime.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
