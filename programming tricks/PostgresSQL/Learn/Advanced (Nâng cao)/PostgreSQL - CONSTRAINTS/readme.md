## Ràng buộc (CONSTRAINTS) trong PostgreSQL

**Khái niệm:**

Ràng buộc trong PostgreSQL là các quy tắc được áp dụng cho dữ liệu trong bảng để đảm bảo tính chính xác, tính toàn vẹn và tính nhất quán của dữ liệu. Ràng buộc giúp kiểm soát dữ liệu được nhập vào bảng, đảm bảo dữ liệu hợp lệ và phù hợp với cấu trúc của bảng.

**Ngữ cảnh:**

Ràng buộc được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Đảm bảo tính chính xác:** Đảm bảo dữ liệu nhập vào bảng là chính xác và hợp lệ, ví dụ như không có giá trị âm cho cột giá.
- **Duy trì tính toàn vẹn:** Đảm bảo dữ liệu trong bảng luôn nhất quán, ví dụ như không có giá trị trùng lặp cho khóa chính.
- **Tăng hiệu suất truy vấn:** Giúp tối ưu hóa hiệu suất truy vấn bằng cách tạo index dựa trên các ràng buộc.

**Cách sử dụng:**

**1. Các loại ràng buộc phổ biến:**

- **PRIMARY KEY:** Khóa chính, đảm bảo mỗi bản ghi trong bảng có một giá trị duy nhất.
- **UNIQUE:** Đảm bảo mỗi giá trị trong cột là duy nhất.
- **NOT NULL:** Đảm bảo cột không được phép chứa giá trị null.
- **FOREIGN KEY:** Ràng buộc khóa ngoại, liên kết dữ liệu giữa các bảng.
- **CHECK:** Đảm bảo giá trị trong cột thỏa mãn một điều kiện cụ thể.

**2. Ví dụ:**

```sql
-- Tạo bảng khách hàng với ràng buộc
CREATE TABLE customers (
  customer_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  age INTEGER CHECK (age >= 18)
);

-- Thêm ràng buộc khóa ngoại cho bảng đơn hàng
ALTER TABLE orders
ADD FOREIGN KEY (customer_id) REFERENCES customers (customer_id);
```

**3. Các lưu ý:**

- Ràng buộc được định nghĩa khi tạo bảng hoặc sau khi bảng được tạo.
- Có thể sử dụng nhiều ràng buộc cho một bảng.
- Việc vi phạm ràng buộc sẽ dẫn đến lỗi và dữ liệu không được phép thêm hoặc cập nhật.

**4. Ví dụ nâng cao:**

```sql
-- Tạo bảng sản phẩm với ràng buộc kiểm tra giá
CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) CHECK (price > 0),
  category VARCHAR(255)
);

-- Tạo ràng buộc duy nhất cho组合(name, category)
ALTER TABLE products
ADD UNIQUE (name, category);
```

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
