## Liệt kê TRIGGER trong PostgreSQL

**Khái niệm:**

**TRIGGER** trong PostgreSQL là một thủ tục SQL được thực thi tự động khi một sự kiện xảy ra trên một bảng, ví dụ như INSERT, UPDATE, hoặc DELETE.

**Ngữ cảnh:**

TRIGGER thường được sử dụng trong các trường hợp sau:

- **Kiểm tra tính hợp lệ của dữ liệu:** Ví dụ, bạn có thể sử dụng TRIGGER để đảm bảo rằng giá trị được nhập vào một cột không vượt quá một giới hạn nhất định.
- **Thực hiện các hành động tự động:** Ví dụ, bạn có thể sử dụng TRIGGER để ghi lại lịch sử thay đổi của một bản ghi.
- **Đảm bảo tính toàn vẹn dữ liệu:** Ví dụ, bạn có thể sử dụng TRIGGER để cập nhật các bảng liên quan khi một bản ghi được cập nhật.

**Cách sử dụng:**

Để liệt kê TRIGGER trong PostgreSQL, bạn có thể sử dụng các lệnh sau:

**1. Liệt kê tất cả TRIGGER:**

```sql
SELECT *
FROM pg_catalog.pg_trigger;
```

**2. Liệt kê TRIGGER cho một bảng:**

```sql
SELECT *
FROM pg_catalog.pg_trigger
WHERE tgrelid = (SELECT oid FROM pg_catalog.pg_class WHERE relname = 'table_name');
```

- `table_name`: Tên bảng bạn muốn liệt kê TRIGGER.

**3. Liệt kê TRIGGER theo tên:**

```sql
SELECT *
FROM pg_catalog.pg_trigger
WHERE tgname = 'trigger_name';
```

- `trigger_name`: Tên TRIGGER bạn muốn liệt kê.

**Ví dụ:**

```sql
-- Liệt kê tất cả TRIGGER trong cơ sở dữ liệu
SELECT *
FROM pg_catalog.pg_trigger;

-- Liệt kê TRIGGER cho bảng "customers"
SELECT *
FROM pg_catalog.pg_trigger
WHERE tgrelid = (SELECT oid FROM pg_catalog.pg_class WHERE relname = 'customers');

-- Liệt kê TRIGGER có tên "my_trigger"
SELECT *
FROM pg_catalog.pg_trigger
WHERE tgname = 'my_trigger';
```

**Lưu ý:**

- TRIGGER được lưu trữ trong hệ thống catalog của PostgreSQL.
- Bạn có thể sử dụng các công cụ quản lý cơ sở dữ liệu như pgAdmin để liệt kê TRIGGER.

**Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về TRIGGER trong PostgreSQL: [https://www.postgresql.org/docs/current/sql-commands.html](https://www.postgresql.org/docs/current/sql-commands.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
