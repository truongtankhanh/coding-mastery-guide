## Kiểu dữ liệu ký tự trong PostgresSQL

**Khái niệm:**

Kiểu dữ liệu ký tự trong PostgresSQL được sử dụng để lưu trữ chuỗi văn bản. PostgresSQL cung cấp ba kiểu dữ liệu chính cho mục đích này:

- **CHAR(n):** Chuỗi ký tự có độ dài cố định `n`, được bù đệm bằng khoảng trắng nếu chuỗi ngắn hơn `n`.
- **VARCHAR(n):** Chuỗi ký tự có độ dài thay đổi, tối đa `n` ký tự.
- **TEXT:** Chuỗi ký tự có độ dài thay đổi, không giới hạn độ dài.

**Ngữ cảnh:**

Kiểu dữ liệu ký tự được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- Lưu trữ tên, địa chỉ, mô tả sản phẩm, v.v.
- Lưu trữ các đoạn văn bản dài
- Lưu trữ mã nguồn

**Cách sử dụng:**

**1. Tạo bảng:**

```sql
CREATE TABLE character_data (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    code_snippet CHAR(500)
);
```

**2. Thêm dữ liệu:**

```sql
INSERT INTO character_data (name, description, code_snippet)
VALUES ('Nguyễn Văn A', 'Đây là mô tả về Nguyễn Văn A', 'def hello_world():\n    print("Hello, world!")');
```

**3. Truy vấn dữ liệu:**

```sql
SELECT * FROM character_data;
```

**4. Cập nhật dữ liệu:**

```sql
UPDATE character_data SET description = description || ' (đã cập nhật)' WHERE id = 1;
```

**5. Xóa dữ liệu:**

```sql
DELETE FROM character_data WHERE name LIKE '%B%';
```

**Ví dụ:**

Giả sử chúng ta có một hệ thống quản lý khách hàng cần lưu trữ tên và mô tả về khách hàng. Chúng ta có thể sử dụng kiểu dữ liệu `VARCHAR(255)` để lưu trữ tên và `TEXT` để lưu trữ mô tả.

```sql
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description TEXT
);

INSERT INTO customers (name, description)
VALUES ('Nguyễn Văn A', 'Khách hàng tiềm năng');

SELECT * FROM customers;
```

**Lưu ý:**

- Khi chọn kiểu dữ liệu ký tự, cần cân nhắc độ dài tối đa của chuỗi văn bản cần lưu trữ.
- Kiểu dữ liệu `VARCHAR(n)` hiệu quả hơn `CHAR(n)` khi lưu trữ chuỗi văn bản ngắn hơn `n`.
- Kiểu dữ liệu `TEXT` phù hợp cho lưu trữ các đoạn văn bản dài.
- PostgresQL cũng hỗ trợ các hàm built-in để thao tác với dữ liệu ký tự, ví dụ như `upper()`, `lower()`, và `length()`.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về kiểu dữ liệu trong PostgreSQL: [https://viblo.asia/p/kieu-du-lieu-trong-postgressql-data-types-5pPLkGOZLRZ](https://viblo.asia/p/kieu-du-lieu-trong-postgressql-data-types-5pPLkGOZLRZ)

**Hỗ trợ:**

- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
