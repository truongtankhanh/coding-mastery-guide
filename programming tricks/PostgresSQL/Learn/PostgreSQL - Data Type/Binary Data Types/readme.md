## Kiểu dữ liệu nhị phân trong PostgresSQL

**Khái niệm:**

Kiểu dữ liệu nhị phân trong PostgresSQL được sử dụng để lưu trữ dữ liệu nhị phân, chẳng hạn như hình ảnh, âm thanh, video hoặc các tập tin khác. PostgresSQL cung cấp hai kiểu dữ liệu chính cho mục đích này:

- **BYTEA:** Lưu trữ dữ liệu nhị phân có độ dài thay đổi, không giới hạn độ dài.
- **VARBINARY(n):** Lưu trữ dữ liệu nhị phân có độ dài thay đổi, tối đa `n` byte.

**Ngữ cảnh:**

Kiểu dữ liệu nhị phân được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- Lưu trữ hình ảnh sản phẩm
- Lưu trữ file âm thanh
- Lưu trữ video
- Lưu trữ bất kỳ loại dữ liệu nhị phân nào

**Cách sử dụng:**

**1. Tạo bảng:**

```sql
CREATE TABLE binary_data (
    id SERIAL PRIMARY KEY,
    image BYTEA,
    audio VARBINARY(1000000),
    video BYTEA
);
```

**2. Thêm dữ liệu:**

```sql
INSERT INTO binary_data (image, audio, video)
VALUES (
    decode('AAABAAIAAwA=', 'base64'),
    read_file('audio.mp3'),
    read_file('video.mp4')
);
```

**3. Truy vấn dữ liệu:**

```sql
SELECT * FROM binary_data;
```

**4. Cập nhật dữ liệu:**

```sql
UPDATE binary_data SET image = decode('AAABAAIAAwA=', 'base64') WHERE id = 1;
```

**5. Xóa dữ liệu:**

```sql
DELETE FROM binary_data WHERE image IS NULL;
```

**Ví dụ:**

Giả sử chúng ta có một hệ thống quản lý sản phẩm cần lưu trữ hình ảnh sản phẩm. Chúng ta có thể sử dụng kiểu dữ liệu `BYTEA` để lưu trữ hình ảnh.

```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    image BYTEA
);

INSERT INTO products (name, image)
VALUES ('Sản phẩm A', decode('AAABAAIAAwA=', 'base64'));

SELECT * FROM products;
```

**Lưu ý:**

- Kiểu dữ liệu `BYTEA` phù hợp cho lưu trữ dữ liệu nhị phân có độ dài bất kỳ.
- Kiểu dữ liệu `VARBINARY(n)` hiệu quả hơn `BYTEA` khi lưu trữ dữ liệu nhị phân có độ dài cố định.
- PostgresQL cũng hỗ trợ các hàm built-in để thao tác với dữ liệu nhị phân, ví dụ như `encode()`, `decode()`, và `length()`.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về kiểu dữ liệu trong PostgreSQL: [https://viblo.asia/p/kieu-du-lieu-trong-postgressql-data-types-5pPLkGOZLRZ](https://viblo.asia/p/kieu-du-lieu-trong-postgressql-data-types-5pPLkGOZLRZ)

**Hỗ trợ:**

- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)

**Ngoài ra, bạn có thể tham khảo thêm các kiểu dữ liệu khác trong PostgresSQL:**

- **Kiểu dữ liệu số:** Numeric Types
- **Kiểu dữ liệu tiền tệ:** Monetary Types
- **Kiểu dữ liệu ngày giờ:** Date and Time Types
- **Kiểu dữ liệu ký tự:** Character Types
- **Kiểu dữ liệu khác:** Other Types
