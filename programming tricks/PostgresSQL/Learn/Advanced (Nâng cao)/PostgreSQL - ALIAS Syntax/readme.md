## Cú pháp ALIAS trong PostgreSQL

**Khái niệm:**

**ALIAS**, hay còn gọi là bí danh, là một tên tạm thời được gán cho một cột hoặc bảng trong PostgreSQL. Nó giúp cho việc truy vấn dữ liệu trở nên dễ đọc và dễ hiểu hơn.

**Ngữ cảnh:**

ALIAS thường được sử dụng trong các trường hợp sau:

- **Đặt tên dễ nhớ cho các cột có tên dài hoặc phức tạp.**
- **Thay đổi tên của một cột để tránh xung đột với các cột khác trong cùng một truy vấn.**
- **Tạo tên ngắn gọn cho các bảng được sử dụng nhiều lần trong một truy vấn.**

**Cách sử dụng:**

Cú pháp cơ bản để sử dụng ALIAS trong PostgreSQL như sau:

**1. Đặt bí danh cho cột:**

```sql
SELECT column_name AS alias_name
FROM table_name;
```

- `column_name`: Tên cột gốc.
- `alias_name`: Tên bí danh mới cho cột.

**Ví dụ:**

```sql
-- Lấy tên đầy đủ của khách hàng và đặt bí danh là "fullname"
SELECT first_name || ' ' || last_name AS fullname
FROM customers;
```

**2. Đặt bí danh cho bảng:**

```sql
SELECT *
FROM table_name AS alias_name;
```

- `table_name`: Tên bảng gốc.
- `alias_name`: Tên bí danh mới cho bảng.

**Ví dụ:**

```sql
-- Lấy danh sách khách hàng từ bảng "customers" và đặt bí danh là "c"
SELECT *
FROM customers AS c;
```

**Lưu ý:**

- ALIAS chỉ là tên tạm thời và không ảnh hưởng đến tên gốc của cột hoặc bảng.
- Bạn có thể sử dụng ALIAS nhiều lần trong cùng một truy vấn.
- Bạn có thể sử dụng ALIAS trong các mệnh đề khác như WHERE, ORDER BY, và GROUP BY.

**Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về ALIAS trong PostgreSQL: [https://www.postgresql.org/docs/current/sql-commands.html](https://www.postgresql.org/docs/current/sql-commands.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
