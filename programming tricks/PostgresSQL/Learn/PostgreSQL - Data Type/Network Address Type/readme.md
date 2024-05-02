## Kiểu dữ liệu Địa chỉ mạng trong PostgresSQL

**Khái niệm:**

Kiểu dữ liệu Địa chỉ mạng trong PostgresSQL được sử dụng để lưu trữ các địa chỉ mạng IPv4, IPv6 và MAC. PostgresSQL cung cấp ba kiểu dữ liệu chính cho mục đích này:

- **inet:** Lưu trữ địa chỉ IPv4.
- **cidr:** Lưu trữ địa chỉ IPv4 hoặc IPv6 với subnet mask.
- **macaddr:** Lưu trữ địa chỉ MAC.

**Ngữ cảnh:**

Kiểu dữ liệu Địa chỉ mạng được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- Lưu trữ địa chỉ IP của các máy tính trong mạng
- Lưu trữ địa chỉ MAC của các thiết bị mạng
- Theo dõi lưu lượng truy cập mạng
- Quản lý bảo mật mạng

**Cách sử dụng:**

**1. Tạo bảng:**

```sql
CREATE TABLE network_data (
    id SERIAL PRIMARY KEY,
    ip_address inet,
    subnet_mask cidr,
    mac_address macaddr
);
```

**2. Thêm dữ liệu:**

```sql
INSERT INTO network_data (ip_address, subnet_mask, mac_address)
VALUES ('192.168.1.100', '192.168.1.0/24', '00:11:22:33:44:55');
```

**3. Truy vấn dữ liệu:**

```sql
SELECT * FROM network_data;
```

**4. Cập nhật dữ liệu:**

```sql
UPDATE network_data SET ip_address = '192.168.1.101' WHERE id = 1;
```

**5. Xóa dữ liệu:**

```sql
DELETE FROM network_data WHERE mac_address IS NULL;
```

**Ví dụ:**

Giả sử chúng ta có một hệ thống quản lý mạng cần lưu trữ địa chỉ IP và địa chỉ MAC của các máy tính trong mạng. Chúng ta có thể sử dụng kiểu dữ liệu `inet` và `macaddr` để lưu trữ thông tin này.

```sql
CREATE TABLE computers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    ip_address inet,
    mac_address macaddr
);

INSERT INTO computers (name, ip_address, mac_address)
VALUES ('Máy tính A', '192.168.1.100', '00:11:22:33:44:55');

SELECT * FROM computers;

UPDATE computers SET ip_address = '192.168.1.101' WHERE id = 1;

SELECT * FROM computers;
```

**Lưu ý:**

- PostgresSQL cũng cung cấp các hàm built-in để thao tác với dữ liệu địa chỉ mạng, ví dụ như `inet_aton()` và `inet_ntoa()`.
- Khi lưu trữ địa chỉ IPv6, bạn nên sử dụng kiểu dữ liệu `cidr` thay vì `inet`.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về kiểu dữ liệu Địa chỉ mạng trong PostgreSQL: [https://viblo.asia/p/kieu-du-lieu-trong-postgressql-data-types-5pPLkGOZLRZ](https://viblo.asia/p/kieu-du-lieu-trong-postgressql-data-types-5pPLkGOZLRZ)

**Hỗ trợ:**

- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
