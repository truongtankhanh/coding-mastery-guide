## Kiểu dữ liệu JSON trong PostgresSQL

**Khái niệm:**

Kiểu dữ liệu JSON trong PostgresSQL được sử dụng để lưu trữ và thao tác với dữ liệu JSON. PostgresSQL hỗ trợ lưu trữ dữ liệu JSON dưới dạng văn bản hoặc dạng nhị phân.

**Ngữ cảnh:**

Kiểu dữ liệu JSON được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- Lưu trữ dữ liệu NoSQL
- Trao đổi dữ liệu giữa các ứng dụng
- Lưu trữ dữ liệu cấu hình
- Lưu trữ dữ liệu cho các ứng dụng web
- Lưu trữ dữ liệu phi cấu trúc

**Cách sử dụng:**

**1. Tạo bảng:**

```sql
CREATE TABLE json_data (
    id SERIAL PRIMARY KEY,
    data json
);
```

**2. Thêm dữ liệu:**

```sql
INSERT INTO json_data (data)
VALUES ('{"name": "John Doe", "age": 30}');
```

**3. Truy vấn dữ liệu:**

```sql
SELECT * FROM json_data;
```

**4. Cập nhật dữ liệu:**

```sql
UPDATE json_data SET data = '{"name": "Jane Doe", "age": 31}' WHERE id = 1;
```

**5. Xóa dữ liệu:**

```sql
DELETE FROM json_data WHERE data IS NULL;
```

**Ví dụ:**

Giả sử chúng ta có một hệ thống quản lý danh bạ cần lưu trữ thông tin liên lạc của người dùng. Chúng ta có thể sử dụng kiểu dữ liệu `json` để lưu trữ thông tin liên lạc dưới dạng JSON.

```sql
CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    phone_number VARCHAR(255),
    email VARCHAR(255),
    address json
);

INSERT INTO contacts (name, phone_number, email, address)
VALUES ('John Doe', '123-456-7890', 'johndoe@example.com', '{"street": "123 Main Street", "city": "New York", "state": "NY", "zip": "10001"}');

SELECT * FROM contacts;
```

**Lưu ý:**

- PostgresSQL cung cấp nhiều hàm built-in để thao tác với dữ liệu JSON, ví dụ như `json_parse()`, `json_serialize()` và `jsonb_path_query()`.
- Khi sử dụng kiểu dữ liệu JSON, cần lưu ý về cú pháp JSON và cách thức truy vấn dữ liệu JSON.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)

**Hỗ trợ:**

- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)

**Ngoài ra, bạn có thể tham khảo thêm các kiểu dữ liệu khác trong PostgresSQL:**

- **Kiểu dữ liệu số:** Numeric Types
- **Kiểu dữ liệu tiền tệ:** Monetary Types
- **Kiểu dữ liệu ký tự:** Character Types
- **Kiểu dữ liệu nhị phân:** Binary Data Types
- **Kiểu dữ liệu ngày giờ:** Date and Time Types
- **Kiểu dữ liệu Boolean:** Boolean Type
- **Kiểu dữ liệu Enumerated:** Enumerated Type
- **Kiểu dữ liệu Geometric:** Geometric Type
- **Kiểu dữ liệu Network Address:** Network Address Type
- **Kiểu dữ liệu Bit String:** Bit String Type
- **Kiểu dữ liệu Text Search:** Text Search Type
- **Kiểu dữ liệu UUID:** UUID Type
