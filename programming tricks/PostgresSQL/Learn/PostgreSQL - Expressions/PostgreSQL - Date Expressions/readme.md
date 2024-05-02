## Biểu thức Date trong PostgreSQL

**Khái niệm:**

Biểu thức Date trong PostgreSQL là biểu thức dùng để thao tác với dữ liệu kiểu Date. Biểu thức này cho phép thực hiện các phép toán như cộng, trừ, so sánh, lấy giá trị ngày tháng năm, v.v.

**Ngữ cảnh:**

Biểu thức Date được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Lọc dữ liệu:** Biểu thức Date được sử dụng trong mệnh đề WHERE để lọc dữ liệu theo ngày tháng năm.
- **Sắp xếp dữ liệu:** Biểu thức Date được sử dụng trong mệnh đề ORDER BY để sắp xếp dữ liệu theo ngày tháng năm.
- **Tính toán:** Biểu thức Date được sử dụng để thực hiện các phép toán liên quan đến ngày tháng năm.

**Cách sử dụng:**

**1. Các toán tử Date cơ bản:**

| Toán tử | Ý nghĩa                | Ví dụ                             |
| ------- | ---------------------- | --------------------------------- |
| `+`     | Cộng ngày              | `'2023-11-14' + 1 = '2023-11-15'` |
| `-`     | Trừ ngày               | `'2023-11-14' - 1 = '2023-11-13'` |
| `<`     | Nhỏ hơn                | `'2023-11-14' < '2023-11-15'`     |
| `>`     | Lớn hơn                | `'2023-11-14' > '2023-11-13'`     |
| `<=`    | Nhỏ hơn hoặc bằng nhau | `'2023-11-14' <= '2023-11-14'`    |
| `>=`    | Lớn hơn hoặc bằng nhau | `'2023-11-14' >= '2023-11-13'`    |

**2. Các hàm Date:**

PostgreSQL cung cấp nhiều hàm để thao tác với dữ liệu kiểu Date, bao gồm:

- `EXTRACT(field FROM date)`: Lấy giá trị của một trường cụ thể từ ngày tháng năm (ví dụ: `EXTRACT(YEAR FROM '2023-11-14')` trả về 2023).
- `DATE_PART(field, date)`: Lấy giá trị của một trường cụ thể từ ngày tháng năm (tương tự như `EXTRACT`).
- `CURRENT_DATE`: Lấy ngày hiện tại.
- `DATE_ADD(date, interval)`: Cộng một khoảng thời gian vào ngày tháng năm.
- `DATE_SUB(date, interval)`: Trừ một khoảng thời gian vào ngày tháng năm.

**3. Ví dụ:**

```sql
-- Lấy danh sách khách hàng có ngày sinh trong tháng 11 năm 2023
SELECT * FROM customers WHERE date_of_birth BETWEEN '2023-11-01' AND '2023-11-30';

-- Sắp xếp danh sách nhân viên theo ngày vào làm việc, từ sớm đến muộn
SELECT * FROM employees ORDER BY date_of_employment ASC;

-- Tính toán số ngày còn lại trong năm 2023
SELECT DATE_PART('day', '2023-12-31') - DATE_PART('day', CURRENT_DATE);

-- Thêm 7 ngày vào ngày hiện tại
SELECT DATE_ADD(CURRENT_DATE, INTERVAL 7 DAY);

-- Lấy ngày thứ Hai đầu tiên của tháng 12 năm 2023
SELECT DATE_TRUNC('month', '2023-12-01') + INTERVAL '1 day';
```

**4. Các lưu ý:**

- Định dạng của dữ liệu kiểu Date cần được tuân thủ (YYYY-MM-DD).
- Khi thực hiện các phép toán với dữ liệu kiểu Date, cần lưu ý đến múi giờ.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về biểu thức Date trong PostgreSQL: [https://www.postgresql.org/docs/current/functions-datetime.html](https://www.postgresql.org/docs/current/functions-datetime.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
