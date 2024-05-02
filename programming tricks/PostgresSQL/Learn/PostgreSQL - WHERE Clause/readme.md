## Mệnh đề WHERE trong PostgreSQL

**Khái niệm:**

Mệnh đề `WHERE` trong PostgreSQL được sử dụng để lọc dữ liệu dựa trên các điều kiện cụ thể. Mệnh đề này cho phép bạn chỉ lấy ra những dữ liệu mà bạn quan tâm, giúp tiết kiệm thời gian và tài nguyên.

**Ngữ cảnh:**

Mệnh đề `WHERE` được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Lọc dữ liệu:** Lấy ra những dữ liệu thỏa mãn các điều kiện nhất định.
- **Tìm kiếm dữ liệu:** Tìm kiếm các bản ghi cụ thể trong bảng.
- **Hạn chế kết quả:** Giới hạn số lượng dữ liệu được trả về.

**Cách sử dụng:**

**1. Cấu trúc cơ bản:**

```sql
SELECT * FROM table_name WHERE condition;
```

- `table_name`: Tên bảng mà bạn muốn lấy dữ liệu.
- `condition`: Điều kiện lọc dữ liệu.

**2. Ví dụ:**

```sql
-- Lấy danh sách khách hàng có tên là "Nguyễn Văn A"
SELECT * FROM customers WHERE name = 'Nguyễn Văn A';

-- Lấy danh sách sản phẩm có giá lớn hơn 100.000 đồng
SELECT * FROM products WHERE price > 100000;

-- Lấy danh sách nhân viên có tuổi từ 18 đến 30
SELECT * FROM employees WHERE age BETWEEN 18 AND 30;
```

**3. Toán tử so sánh:**

Mệnh đề `WHERE` sử dụng các toán tử so sánh để xác định điều kiện lọc dữ liệu. Các toán tử so sánh cơ bản bao gồm:

| Toán tử | Ý nghĩa                |
| ------- | ---------------------- |
| `=`     | Bằng nhau              |
| `<>`    | Không bằng nhau        |
| `<`     | Nhỏ hơn                |
| `>`     | Lớn hơn                |
| `<=`    | Nhỏ hơn hoặc bằng nhau |
| `>=`    | Lớn hơn hoặc bằng nhau |

**4. Hàm và toán tử logic:**

Mệnh đề `WHERE` có thể sử dụng các hàm và toán tử logic để tạo ra các điều kiện lọc phức tạp hơn.

**5. Ví dụ:**

```sql
-- Lấy danh sách khách hàng có tên bắt đầu bằng chữ "A"
SELECT * FROM customers WHERE name LIKE 'A%';

-- Lấy danh sách sản phẩm có giá lớn hơn 100.000 đồng hoặc còn hàng
SELECT * FROM products WHERE price > 100000 OR in_stock = TRUE;

-- Lấy danh sách nhân viên có tuổi từ 18 đến 30 và là nam giới
SELECT * FROM employees WHERE age BETWEEN 18 AND 30 AND gender = 'male';
```

**6. Các lưu ý:**

- Thứ tự ưu tiên của các toán tử cần được lưu ý khi thực hiện các điều kiện lọc phức tạp.
- Cần sử dụng dấu ngoặc đơn để xác định thứ tự thực hiện các phép toán.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
