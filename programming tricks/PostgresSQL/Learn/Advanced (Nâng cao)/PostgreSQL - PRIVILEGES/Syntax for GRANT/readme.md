## Cú pháp lệnh GRANT trong PostgreSQL

**Cú pháp cơ bản:**

```sql
GRANT privilege-type ON object-type TO grantee;
```

**Giải thích:**

- **privilege-type:** Loại quyền truy cập được cấp. Ví dụ: SELECT, INSERT, UPDATE, DELETE, REFERENCES, ALL.
- **object-type:** Đối tượng được cấp quyền truy cập. Ví dụ: TABLE, VIEW, SEQUENCE, FUNCTION, DATABASE.
- **grantee:** Người dùng hoặc nhóm được cấp quyền truy cập.

**Ví dụ:**

```sql
-- Cấp quyền SELECT cho người dùng "john" trên bảng "customers"
GRANT SELECT ON customers TO john;

-- Cấp quyền INSERT, UPDATE và DELETE cho người dùng "mary" trên bảng "products"
GRANT INSERT, UPDATE, DELETE ON products TO mary;

-- Cấp tất cả quyền truy cập cho người dùng "admin" trên cơ sở dữ liệu "postgres"
GRANT ALL ON DATABASE postgres TO admin;
```

**Cấu trúc nâng cao:**

- **WITH GRANT OPTION:** Cho phép người dùng được cấp quyền cấp lại quyền cho người dùng khác.

```sql
GRANT SELECT ON customers TO john WITH GRANT OPTION;
```

- **GRANT ... TO PUBLIC:** Cấp quyền cho tất cả người dùng.

```sql
GRANT SELECT ON customers TO PUBLIC;
```

- **REVOKE:** Thu hồi quyền truy cập đã cấp.

```sql
REVOKE SELECT ON customers FROM john;
```

**Lưu ý:**

- Chỉ người dùng có quyền GRANT hoặc SUPERUSER mới có thể cấp quyền truy cập.
- Người dùng được cấp quyền truy cập không thể cấp quyền truy cập cao hơn quyền mà họ có.

**Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về GRANT: [https://www.postgresql.org/docs/current/sql-commands.html](https://www.postgresql.org/docs/current/sql-commands.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
