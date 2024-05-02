## UNION ALL Clause trong PostgreSQL

**Khái niệm:**

`UNION ALL` là một mệnh đề trong PostgreSQL cho phép kết hợp các kết quả từ hai hoặc nhiều truy vấn SELECT. Nó trả về tất cả các bản ghi từ tất cả các truy vấn, bao gồm cả các bản ghi trùng lặp.

**Ngữ cảnh:**

`UNION ALL` được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Kết hợp các tập dữ liệu tương tự:** Ví dụ, bạn có thể sử dụng `UNION ALL` để kết hợp danh sách khách hàng từ hai nguồn khác nhau.
- **Loại bỏ các bản ghi trùng lặp:** Bạn có thể sử dụng `UNION ALL` kết hợp với `DISTINCT` để loại bỏ các bản ghi trùng lặp từ kết quả.
- **Tối ưu hóa hiệu suất:** `UNION ALL` có thể giúp tối ưu hóa hiệu suất truy vấn bằng cách chỉ truy cập dữ liệu cần thiết.

**Cách sử dụng:**

Cú pháp cơ bản để sử dụng `UNION ALL` trong PostgreSQL như sau:

```sql
SELECT *
FROM table_name1
UNION ALL
SELECT *
FROM table_name2;
```

- `table_name1`: Tên bảng đầu tiên.
- `table_name2`: Tên bảng thứ hai.

**Ví dụ:**

```sql
-- Kết hợp danh sách khách hàng từ hai nguồn khác nhau
SELECT *
FROM customers_source1
UNION ALL
SELECT *
FROM customers_source2;
```

**Lưu ý:**

- `UNION ALL` trả về tất cả các bản ghi từ tất cả các truy vấn, bao gồm cả các bản ghi trùng lặp.
- Để loại bỏ các bản ghi trùng lặp, bạn có thể sử dụng `UNION ALL` kết hợp với `DISTINCT`.
- Bạn có thể sử dụng nhiều truy vấn SELECT trong một câu lệnh `UNION ALL`.
- Bạn có thể sử dụng WHERE clause để lọc kết quả sau khi thực hiện `UNION ALL`.

**Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về UNION ALL trong PostgreSQL: [https://www.postgresql.org/docs/current/sql-commands.html](https://www.postgresql.org/docs/current/sql-commands.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
