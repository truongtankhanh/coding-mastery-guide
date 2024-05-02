## Toán tử so sánh trong PostgreSQL

**Khái niệm:**

Toán tử so sánh trong PostgreSQL cho phép so sánh hai giá trị để xác định mối quan hệ giữa chúng. Các toán tử này bao gồm bằng nhau (`=`), không bằng nhau (`<>`), lớn hơn (`>`), nhỏ hơn (`<`), lớn hơn hoặc bằng nhau (`>=`) và nhỏ hơn hoặc bằng nhau (`<=`).

**Ngữ cảnh:**

Toán tử so sánh được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **So sánh giá trị:** Ví dụ, ta có thể so sánh tuổi của hai người.
- **Lọc dữ liệu:** Ta có thể sử dụng toán tử so sánh trong mệnh đề `WHERE` để lọc dữ liệu.
- **Sắp xếp dữ liệu:** Ta có thể sử dụng toán tử so sánh trong mệnh đề `ORDER BY` để sắp xếp dữ liệu.

**Cách sử dụng:**

**1. Các toán tử so sánh cơ bản:**

| Toán tử | Mối quan hệ            | Ví dụ    |
| ------- | ---------------------- | -------- |
| `=`     | Bằng nhau              | `1 = 1`  |
| `<>`    | Không bằng nhau        | `1 <> 2` |
| `>`     | Lớn hơn                | `2 > 1`  |
| `<`     | Nhỏ hơn                | `1 < 2`  |
| `>=`    | Lớn hơn hoặc bằng nhau | `2 >= 2` |
| `<=`    | Nhỏ hơn hoặc bằng nhau | `1 <= 2` |

**2. Ví dụ:**

```sql
-- Lấy danh sách khách hàng có tuổi từ 18 đến 30
SELECT * FROM customers WHERE age BETWEEN 18 AND 30;

-- Lấy danh sách sản phẩm có giá lớn hơn 100.000 đồng
SELECT * FROM products WHERE price > 100000;

-- Sắp xếp danh sách nhân viên theo tên, từ A đến Z
SELECT * FROM employees ORDER BY name ASC;
```

**3. Các lưu ý:**

- Kiểu dữ liệu của các giá trị tham gia so sánh cần được kiểm tra để đảm bảo kết quả chính xác.
- Cần sử dụng dấu ngoặc đơn để xác định thứ tự thực hiện các phép so sánh.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về toán tử so sánh trong PostgreSQL: [https://www.postgresql.org/docs/current/functions-comparison.html](https://www.postgresql.org/docs/current/functions-comparison.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Diễn đàn PostgreSQL: [đã xoá URL không hợp lệ]
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
