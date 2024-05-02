## Kiểu dữ liệu Hình học trong PostgresSQL

**Khái niệm:**

Kiểu dữ liệu Hình học trong PostgresSQL được sử dụng để lưu trữ và thao tác với các đối tượng hình học, bao gồm điểm, đường thẳng, đa giác, v.v. PostgresSQL sử dụng thư viện PostGIS để cung cấp các chức năng này.

**Ngữ cảnh:**

Kiểu dữ liệu Hình học được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- Hệ thống thông tin địa lý (GIS)
- Bản đồ
- Thiết kế kiến trúc
- Lập kế hoạch đô thị
- Bất kỳ ứng dụng nào cần lưu trữ và thao tác với dữ liệu hình học

**Cách sử dụng:**

**1. Cài đặt PostGIS:**

PostGIS không được cài đặt sẵn với PostgreSQL. Bạn cần cài đặt nó theo hướng dẫn trên trang web chính thức: [https://postgis.net/](https://postgis.net/)

**2. Tạo bảng:**

```sql
CREATE TABLE gis_data (
    id SERIAL PRIMARY KEY,
    geom geometry(Point)
);
```

**3. Thêm dữ liệu:**

```sql
INSERT INTO gis_data (geom)
VALUES (ST_Point(10.5, 20.1));
```

**4. Truy vấn dữ liệu:**

```sql
SELECT * FROM gis_data;
```

**5. Cập nhật dữ liệu:**

```sql
UPDATE gis_data SET geom = ST_Point(11.0, 20.5) WHERE id = 1;
```

**6. Xóa dữ liệu:**

```sql
DELETE FROM gis_data WHERE geom IS NULL;
```

**Ví dụ:**

Giả sử chúng ta có một hệ thống GIS để theo dõi vị trí các cửa hàng. Chúng ta có thể sử dụng kiểu dữ liệu `geometry(Point)` để lưu trữ vị trí của các cửa hàng.

```sql
CREATE TABLE stores (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    location geometry(Point)
);

INSERT INTO stores (name, location)
VALUES ('Cửa hàng A', ST_Point(10.5, 20.1));

SELECT * FROM stores;

UPDATE stores SET location = ST_Point(11.0, 20.5) WHERE id = 1;

SELECT * FROM stores;
```

**Lưu ý:**

- PostGIS cung cấp nhiều kiểu dữ liệu hình học khác nhau, bao gồm `Point`, `LineString`, `Polygon`, v.v.
- PostGIS cũng cung cấp nhiều hàm built-in để thao tác với dữ liệu hình học, ví dụ như `ST_Distance()`, `ST_Area()`, và `ST_Buffer()`.

**Tài liệu tham khảo:**

- Trang web chính thức của PostGIS: [https://postgis.net/](https://postgis.net/)

**Hỗ trợ:**

- Diễn đàn PostGIS: [https://postgis.net/support/](https://postgis.net/support/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgis](https://stackoverflow.com/questions/tagged/postgis)

**Ngoài ra, bạn có thể tham khảo thêm các kiểu dữ liệu khác trong PostgresSQL:**

- **Kiểu dữ liệu số:** Numeric Types
- **Kiểu dữ liệu tiền tệ:** Monetary Types
- **Kiểu dữ liệu ký tự:** Character Types
- **Kiểu dữ liệu nhị phân:** Binary Data Types
- **Kiểu dữ liệu ngày giờ:** Date and Time Types
- **Kiểu dữ liệu Boolean:** Boolean Type
- **Kiểu dữ liệu Enumerated:** Enumerated Type
