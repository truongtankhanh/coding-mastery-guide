## PostgreSQL - Schema

**Khái niệm:**

**Schema** trong PostgreSQL là một tập hợp các đối tượng cơ sở dữ liệu, bao gồm bảng, view, index, function, stored procedure, và operator. Schema giúp ta tổ chức và quản lý các đối tượng trong database một cách hiệu quả.

**Ngữ cảnh:**

Schema được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Phân chia dữ liệu theo chức năng hoặc nhóm:** Ví dụ, ta có thể tạo schema cho các ứng dụng khác nhau, hoặc cho các nhóm dữ liệu liên quan.
- **Kiểm soát truy cập:** Schema cho phép ta giới hạn quyền truy cập vào các đối tượng database, ví dụ chỉ cho phép người dùng nhất định truy cập vào schema của họ.
- **Tái sử dụng các đối tượng:** Ta có thể tạo các đối tượng database trong schema, và sau đó sử dụng lại chúng trong các schema khác.

**Cách sử dụng:**

**1. Tạo schema:**

```sql
CREATE SCHEMA <tên_schema>;
```

**2. Thay đổi schema mặc định:**

```sql
SET search_path = <tên_schema>, public;
```

**3. Tạo bảng trong schema:**

```sql
CREATE TABLE <tên_schema>.<tên_bảng> (
    ...
);
```

**4. Truy cập bảng trong schema:**

```sql
SELECT * FROM <tên_schema>.<tên_bảng>;
```

**5. Xóa schema:**

```sql
DROP SCHEMA <tên_schema>;
```

**Ví dụ:**

Giả sử ta có một database cho một trang web bán hàng. Ta có thể tạo các schema sau:

- `public`: Schema mặc định, chứa các bảng chung cho cả website.
- `products`: Schema chứa các bảng liên quan đến sản phẩm, ví dụ như bảng `products`, `categories`, `images`.
- `orders`: Schema chứa các bảng liên quan đến đơn hàng, ví dụ như bảng `orders`, `order_items`, `customers`.

**Lưu ý:**

- Mỗi database chỉ có một schema mặc định là `public`.
- Ta có thể tạo nhiều schema trong một database.
- Khi tạo schema, nên đặt tên có ý nghĩa để dễ dàng quản lý.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)

**Hỗ trợ:**

- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
