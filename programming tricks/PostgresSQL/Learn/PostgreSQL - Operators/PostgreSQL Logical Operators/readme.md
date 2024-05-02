## Toán tử logic trong PostgreSQL

**Khái niệm:**

Toán tử logic trong PostgreSQL cho phép kết hợp các điều kiện logic để tạo ra các biểu thức phức tạp hơn. Các toán tử logic cơ bản bao gồm AND, OR và NOT.

**Ngữ cảnh:**

Toán tử logic được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Lọc dữ liệu:** Ta có thể sử dụng toán tử logic trong mệnh đề `WHERE` để lọc dữ liệu theo nhiều điều kiện.
- **Kiểm tra điều kiện:** Ta có thể sử dụng toán tử logic để kiểm tra xem một điều kiện có thoả mãn hay không.
- **Thực hiện các phép toán logic:** Ta có thể sử dụng toán tử logic để thực hiện các phép toán logic phức tạp.

**Cách sử dụng:**

**1. Các toán tử logic cơ bản:**

| Toán tử | Ý nghĩa                                | Ví dụ                           |
| ------- | -------------------------------------- | ------------------------------- |
| `AND`   | Cả hai điều kiện đều phải thoả mãn     | `age > 18 AND gender = 'male'`  |
| `OR`    | Một trong hai điều kiện thoả mãn là đủ | `age > 18 OR gender = 'female'` |
| `NOT`   | Đảo ngược điều kiện                    | `NOT (age > 18)`                |

**2. Ví dụ:**

```sql
-- Lấy danh sách khách hàng có tuổi từ 18 đến 30 và là nam giới
SELECT * FROM customers WHERE age BETWEEN 18 AND 30 AND gender = 'male';

-- Lấy danh sách sản phẩm có giá lớn hơn 100.000 đồng hoặc còn hàng
SELECT * FROM products WHERE price > 100000 OR in_stock = TRUE;

-- Lấy danh sách nhân viên không phải là quản lý
SELECT * FROM employees WHERE NOT is_manager = TRUE;
```

**3. Các lưu ý:**

- Thứ tự ưu tiên của các toán tử cần được lưu ý khi thực hiện các biểu thức logic phức tạp.
- Cần sử dụng dấu ngoặc đơn để xác định thứ tự thực hiện các phép toán logic.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về toán tử logic trong PostgreSQL: [https://www.postgresql.org/docs/current/functions-logical.html](https://www.postgresql.org/docs/current/functions-logical.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
