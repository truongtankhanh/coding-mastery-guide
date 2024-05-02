## PostgreSQL Arithmetic Operators

**Khái niệm:**

Toán tử số học trong PostgreSQL cho phép thực hiện các phép toán toán học trên các giá trị số. Các toán tử này bao gồm cộng, trừ, nhân, chia, lấy dư và lũy thừa.

**Ngữ cảnh:**

Toán tử số học được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Tính toán giá trị:** Ví dụ, ta có thể tính tổng giá trị của các sản phẩm trong giỏ hàng.
- **So sánh giá trị:** Ta có thể sử dụng toán tử so sánh để so sánh hai giá trị số.
- **Lọc dữ liệu:** Ta có thể sử dụng toán tử so sánh trong mệnh đề `WHERE` để lọc dữ liệu.

**Cách sử dụng:**

**1. Các toán tử số học cơ bản:**

| Toán tử | Phép toán | Ví dụ       |
| ------- | --------- | ----------- |
| `+`     | Cộng      | `1 + 2 = 3` |
| `-`     | Trừ       | `3 - 1 = 2` |
| `*`     | Nhân      | `2 * 3 = 6` |
| `/`     | Chia      | `6 / 2 = 3` |
| `%`     | Lấy dư    | `5 % 2 = 1` |
| `^`     | Lũy thừa  | `2 ^ 3 = 8` |

**2. Ví dụ:**

```sql
-- Tính tổng giá trị của các sản phẩm trong giỏ hàng
SELECT SUM(price) FROM products WHERE in_cart = TRUE;

-- Lấy danh sách sản phẩm có giá lớn hơn 100.000 đồng
SELECT * FROM products WHERE price > 100000;

-- Lấy danh sách khách hàng có số điểm thưởng là bội số của 5
SELECT * FROM customers WHERE points % 5 = 0;
```

**3. Các lưu ý:**

- Thứ tự ưu tiên của các toán tử cần được lưu ý khi thực hiện các phép toán phức tạp.
- Kiểu dữ liệu của các giá trị tham gia 运算 cần được kiểm tra để đảm bảo kết quả chính xác.
- Cần sử dụng dấu ngoặc đơn để xác định thứ tự thực hiện các phép toán.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về toán tử số học trong PostgreSQL: [https://vi.wikipedia.org/wiki/To%C3%A1n_h%E1%BB%8Dc](https://vi.wikipedia.org/wiki/To%C3%A1n_h%E1%BB%8Dc)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Diễn đàn PostgreSQL: [https://www.youtube.com/watch?v=uhvqly8MtoI](https://www.youtube.com/watch?v=uhvqly8MtoI)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
