## Cú pháp lệnh REVOKE trong PostgreSQL

**Cú pháp cơ bản:**

```sql
REVOKE privilege-type ON object-type FROM grantee;
```

**Giải thích:**

- **privilege-type:** Loại quyền truy cập được thu hồi. Ví dụ: SELECT, INSERT, UPDATE, DELETE, REFERENCES, ALL.
- **object-type:** Đối tượng được thu hồi quyền truy cập. Ví dụ: TABLE, VIEW, SEQUENCE, FUNCTION, DATABASE.
- **grantee:** Người dùng hoặc nhóm được thu hồi quyền truy cập.

**Ví dụ:**

```sql
-- Thu hồi quyền SELECT cho người dùng "john" trên bảng "customers"
REVOKE SELECT ON customers FROM john;

-- Thu hồi quyền INSERT, UPDATE và DELETE cho người dùng "mary" trên bảng "products"
REVOKE INSERT, UPDATE, DELETE ON products FROM mary;

-- Thu hồi tất cả quyền truy cập cho người dùng "admin" trên cơ sở dữ liệu "postgres"
REVOKE ALL ON DATABASE postgres FROM admin;
```

**Cấu trúc nâng cao:**

- **REVOKE ... FROM PUBLIC:** Thu hồi quyền truy cập cho tất cả người dùng.

```sql
REVOKE SELECT ON customers FROM PUBLIC;
```

**Lưu ý:**

- Chỉ người dùng có quyền GRANT hoặc SUPERUSER mới có thể thu hồi quyền truy cập.
- Người dùng được thu hồi quyền truy cập sẽ không còn có thể truy cập đối tượng được cấp quyền.

**Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về REVOKE: [https://www.postgresql.org/docs/current/sql-commands.html](https://www.postgresql.org/docs/current/sql-commands.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
