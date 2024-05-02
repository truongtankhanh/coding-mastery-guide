## Biểu thức Boolean trong PostgreSQL

**Khái niệm:**

Biểu thức Boolean trong PostgreSQL là biểu thức dùng để đánh giá giá trị true hoặc false. Biểu thức này được sử dụng để điều khiển luồng thực thi của chương trình, lọc dữ liệu và thực hiện các phép toán logic.

**Ngữ cảnh:**

Biểu thức Boolean được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Mệnh đề WHERE:** Biểu thức Boolean được sử dụng trong mệnh đề WHERE để lọc dữ liệu theo các điều kiện cụ thể.
- **Mệnh đề IF:** Biểu thức Boolean được sử dụng trong mệnh đề IF để thực hiện các hành động khác nhau tùy thuộc vào giá trị true hoặc false.
- **Hàm:** Biểu thức Boolean có thể được sử dụng làm tham số cho các hàm.

**Cách sử dụng:**

**1. Các toán tử Boolean cơ bản:**

| Toán tử | Ý nghĩa                | Ví dụ    |
| ------- | ---------------------- | -------- |
| `=`     | Bằng nhau              | `1 = 1`  |
| `<>`    | Không bằng nhau        | `1 <> 2` |
| `<`     | Nhỏ hơn                | `1 < 2`  |
| `>`     | Lớn hơn                | `2 > 1`  |
| `<=`    | Nhỏ hơn hoặc bằng nhau | `1 <= 2` |
| `>=`    | Lớn hơn hoặc bằng nhau | `2 >= 1` |

**2. Các toán tử logic:**

| Toán tử | Ý nghĩa                                | Ví dụ             |
| ------- | -------------------------------------- | ----------------- |
| `AND`   | Cả hai điều kiện đều phải thoả mãn     | `1 = 1 AND 2 > 1` |
| `OR`    | Một trong hai điều kiện thoả mãn là đủ | `1 = 1 OR 2 < 1`  |
| `NOT`   | Đảo ngược điều kiện                    | `NOT (1 = 1)`     |

**3. Ví dụ:**

```sql
-- Lấy danh sách khách hàng có tuổi lớn hơn 18
SELECT * FROM customers WHERE age > 18;

-- Nếu giá trị sản phẩm lớn hơn 100.000 đồng, áp dụng giảm giá 10%
IF price > 100000 THEN
  discount = 0.1;
ELSE
  discount = 0;
END IF;

-- Hàm kiểm tra xem một số có phải là số nguyên tố hay không
CREATE FUNCTION is_prime(number INTEGER) RETURNS BOOLEAN AS
BEGIN
  IF number <= 1 THEN
    RETURN FALSE;
  END IF;

  FOR i IN 2 .. number - 1 LOOP
    IF number % i = 0 THEN
      RETURN FALSE;
    END IF;
  END LOOP;

  RETURN TRUE;
END;

SELECT is_prime(13); -- Kết quả: TRUE
```

**4. Các lưu ý:**

- Thứ tự ưu tiên của các toán tử cần được lưu ý khi thực hiện các biểu thức Boolean phức tạp.
- Cần sử dụng dấu ngoặc đơn để xác định thứ tự thực hiện các phép toán.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về biểu thức Boolean trong PostgreSQL: [https://www.postgresql.org/docs/current/functions-logical.html](https://www.postgresql.org/docs/current/functions-logical.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
