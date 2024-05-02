## Kiểu dữ liệu ngày giờ trong PostgresSQL

**Khái niệm:**

Kiểu dữ liệu ngày giờ trong PostgresSQL được sử dụng để lưu trữ thông tin thời gian một cách chính xác và hiệu quả. PostgresSQL cung cấp nhiều kiểu dữ liệu khác nhau cho mục đích này, bao gồm:

- **DATE:** Lưu trữ ngày tháng.
- **TIME:** Lưu trữ thời gian trong ngày.
- **TIMESTAMP:** Lưu trữ cả ngày tháng và thời gian.
- **INTERVAL:** Lưu trữ khoảng thời gian giữa hai thời điểm.

**Ngữ cảnh:**

Kiểu dữ liệu ngày giờ được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- Hệ thống quản lý thời gian
- Hệ thống theo dõi lịch trình
- Hệ thống thống kê
- Bất kỳ hệ thống nào cần lưu trữ và thao tác với thông tin thời gian

**Cách sử dụng:**

**1. Tạo bảng:**

```sql
CREATE TABLE date_time_data (
    id SERIAL PRIMARY KEY,
    date_of_birth DATE,
    time_of_event TIME,
    timestamp_of_creation TIMESTAMP,
    duration INTERVAL
);
```

**2. Thêm dữ liệu:**

```sql
INSERT INTO date_time_data (date_of_birth, time_of_event, timestamp_of_creation, duration)
VALUES ('2000-01-01', '12:00:00', '2023-11-14 10:29:00', '1 day 2 hours');
```

**3. Truy vấn dữ liệu:**

```sql
SELECT * FROM date_time_data;
```

**4. Cập nhật dữ liệu:**

```sql
UPDATE date_time_data SET duration = duration + '1 hour' WHERE id = 1;
```

**5. Xóa dữ liệu:**

```sql
DELETE FROM date_time_data WHERE date_of_birth < '1990-01-01';
```

**Ví dụ:**

Giả sử chúng ta có một hệ thống quản lý nhân viên cần lưu trữ ngày sinh của nhân viên và thời gian làm việc của họ. Chúng ta có thể sử dụng kiểu dữ liệu `date` để lưu trữ ngày sinh và `timestamp` để lưu trữ thời gian làm việc.

```sql
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    date_of_birth DATE,
    time_of_work TIMESTAMP
);

INSERT INTO employees (name, date_of_birth, time_of_work)
VALUES ('Nguyễn Văn A', '1990-01-01', '2023-11-14 10:29:00');

SELECT * FROM employees;
```

**Lưu ý:**

- Khi chọn kiểu dữ liệu ngày giờ, cần cân nhắc độ chính xác cần thiết cho dữ liệu và định dạng thời gian sử dụng.
- PostgresQL cũng hỗ trợ các hàm built-in để thao tác với dữ liệu ngày giờ, ví dụ như `date_trunc()`, `extract()`, và `to_char()`.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về kiểu dữ liệu trong PostgreSQL: [https://viblo.asia/p/kieu-du-lieu-trong-postgressql-data-types-5pPLkGOZLRZ](https://viblo.asia/p/kieu-du-lieu-trong-postgressql-data-types-5pPLkGOZLRZ)

**Hỗ trợ:**

- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)

**Ngoài ra, bạn có thể tham khảo thêm các kiểu dữ liệu khác trong PostgresSQL:**

- **Kiểu dữ liệu số:** Numeric Types
- **Kiểu dữ liệu tiền tệ:** Monetary Types
- **Kiểu dữ liệu ký tự:** Character Types
- **Kiểu dữ liệu nhị phân:** Binary Data Types
- **Kiểu dữ liệu khác:** Other Types
