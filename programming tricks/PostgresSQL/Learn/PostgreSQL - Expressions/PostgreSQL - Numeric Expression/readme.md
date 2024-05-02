## Biểu thức số trong PostgreSQL

**Khái niệm:**

Biểu thức số trong PostgreSQL là biểu thức dùng để thực hiện các phép toán với dữ liệu số. Biểu thức này bao gồm các phép toán cơ bản như cộng, trừ, nhân, chia, lấy dư, lũy thừa, v.v. và các phép toán phức tạp hơn như hàm số lượng giác, hàm số thống kê, v.v.

**Ngữ cảnh:**

Biểu thức số được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Tính toán:** Biểu thức số được sử dụng để thực hiện các phép toán tính toán giá trị, ví dụ như tính tổng giá trị sản phẩm trong giỏ hàng.
- **So sánh:** Biểu thức số được sử dụng để so sánh hai giá trị số, ví dụ như so sánh tuổi của hai người.
- **Lọc dữ liệu:** Biểu thức số được sử dụng trong mệnh đề `WHERE` để lọc dữ liệu theo các điều kiện liên quan đến giá trị số, ví dụ như lấy danh sách sản phẩm có giá lớn hơn 100.000 đồng.

**Cách sử dụng:**

**1. Các toán tử số cơ bản:**

| Toán tử | Phép toán | Ví dụ       |
| ------- | --------- | ----------- |
| `+`     | Cộng      | `1 + 2 = 3` |
| `-`     | Trừ       | `3 - 1 = 2` |
| `*`     | Nhân      | `2 * 3 = 6` |
| `/`     | Chia      | `6 / 2 = 3` |
| `%`     | Lấy dư    | `5 % 2 = 1` |
| `^`     | Lũy thừa  | `2 ^ 3 = 8` |

**2. Các hàm số:**

PostgreSQL cung cấp nhiều hàm số để thực hiện các phép toán phức tạp hơn với dữ liệu số, bao gồm:

- Hàm lượng giác: `SIN()`, `COS()`, `TAN()`, v.v.
- Hàm số thống kê: `AVG()`, `SUM()`, `COUNT()`, `MAX()`, `MIN()`, v.v.
- Hàm làm tròn số: `ROUND()`, `CEIL()`, `FLOOR()`, v.v.

**3. Ví dụ:**

```sql
-- Tính tổng giá trị sản phẩm trong giỏ hàng
SELECT SUM(price) FROM products WHERE in_cart = TRUE;

-- Lấy danh sách sản phẩm có giá lớn hơn 100.000 đồng
SELECT * FROM products WHERE price > 100000;

-- Tìm giá trị trung bình của điểm thi môn Toán
SELECT AVG(score) FROM students WHERE subject = 'Math';

-- Làm tròn số 3.1415926535 đến hai chữ số thập phân
SELECT ROUND(3.1415926535, 2);

-- Tìm giá trị lớn nhất của cột "age" trong bảng "employees"
SELECT MAX(age) FROM employees;
```

**4. Các lưu ý:**

- Kiểu dữ liệu của các giá trị tham gia 运算 cần được kiểm tra để đảm bảo kết quả chính xác.
- Thứ tự ưu tiên của các toán tử cần được lưu ý khi thực hiện các biểu thức số phức tạp.
- Cần sử dụng dấu ngoặc đơn để xác định thứ tự thực hiện các phép toán.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về biểu thức số trong PostgreSQL: [https://www.postgresql.org/docs/current/functions-math.html](https://www.postgresql.org/docs/current/functions-math.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
