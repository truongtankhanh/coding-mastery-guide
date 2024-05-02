## Lệnh TRUNCATE TABLE trong PostgreSQL

**Khái niệm:**

Lệnh `TRUNCATE TABLE` trong PostgreSQL dùng để xóa toàn bộ dữ liệu khỏi một bảng (table). Lệnh này hoạt động khác với lệnh `DELETE` ở một số điểm:

- **TRUNCATE TABLE** xóa **tất cả** dữ liệu trong bảng, bao gồm cả dữ liệu trong các bảng con (child tables). Lệnh `DELETE` chỉ xóa dữ liệu trong bảng được chỉ định.
- **TRUNCATE TABLE** **nhanh hơn** lệnh `DELETE` vì nó không ghi nhật ký (log) cho mỗi hàng bị xóa.
- **TRUNCATE TABLE** **không thể khôi phục**. Sau khi thực hiện lệnh `TRUNCATE TABLE`, bạn không thể khôi phục dữ liệu đã bị xóa.

**Ngữ cảnh:**

Lệnh `TRUNCATE TABLE` được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Xóa dữ liệu khỏi bảng:** Khi bạn cần xóa toàn bộ dữ liệu khỏi bảng, bạn có thể sử dụng lệnh `TRUNCATE TABLE`.
- **Cài đặt lại dữ liệu:** Khi bạn cần cài đặt lại dữ liệu cho bảng, bạn có thể sử dụng lệnh `TRUNCATE TABLE` để xóa dữ liệu cũ trước khi cài đặt dữ liệu mới.
- **Xóa dữ liệu tạm thời:** Khi bạn sử dụng bảng để lưu trữ dữ liệu tạm thời, bạn có thể sử dụng lệnh `TRUNCATE TABLE` để xóa dữ liệu sau khi sử dụng xong.

**Cách sử dụng:**

Cú pháp cơ bản của lệnh `TRUNCATE TABLE` như sau:

```sql
TRUNCATE TABLE table_name;
```

- `table_name`: Tên của bảng bạn muốn xóa dữ liệu.

**Ví dụ:**

```sql
-- Xóa toàn bộ dữ liệu khỏi bảng "customers"
TRUNCATE TABLE customers;

-- Xóa toàn bộ dữ liệu khỏi bảng "orders" và các bảng con của nó
TRUNCATE TABLE orders CASCADE;
```

**Lưu ý:**

- Lệnh `TRUNCATE TABLE` không thể khôi phục. Hãy đảm bảo rằng bạn thực sự muốn xóa dữ liệu trước khi thực hiện lệnh.
- Bạn có thể sử dụng các công cụ quản lý cơ sở dữ liệu như pgAdmin để xóa dữ liệu khỏi bảng.

**Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về lệnh `TRUNCATE TABLE`: [https://www.postgresql.org/docs/current/sql-commands.html](https://www.postgresql.org/docs/current/sql-commands.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
