## Toán tử kết hợp AND và OR trong PostgreSQL

**Khái niệm:**

Toán tử kết hợp AND và OR trong PostgreSQL được sử dụng để kết hợp các điều kiện logic trong các mệnh đề WHERE và HAVING.

**Ngữ cảnh:**

Toán tử kết hợp được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Lọc dữ liệu:** Lọc dữ liệu dựa trên nhiều điều kiện.
- **Tìm kiếm dữ liệu:** Tìm kiếm các bản ghi thỏa mãn nhiều điều kiện.
- **Hạn chế kết quả:** Giới hạn số lượng dữ liệu được trả về dựa trên nhiều điều kiện.

**Cách sử dụng:**

**1. Toán tử AND:**

Toán tử AND được sử dụng để kết hợp hai điều kiện. Cả hai điều kiện đều phải thỏa mãn thì kết quả mới là TRUE.

**2. Ví dụ:**

```sql
-- Lấy danh sách khách hàng có tên là "Nguyễn Văn A" và tuổi từ 18 đến 30
SELECT * FROM customers WHERE name = 'Nguyễn Văn A' AND age BETWEEN 18 AND 30;

-- Lấy danh sách sản phẩm có giá lớn hơn 100.000 đồng và còn hàng
SELECT * FROM products WHERE price > 100000 AND in_stock = TRUE;
```

**3. Toán tử OR:**

Toán tử OR được sử dụng để kết hợp hai điều kiện. Chỉ cần một trong hai điều kiện thỏa mãn thì kết quả cũng là TRUE.

**4. Ví dụ:**

```sql
-- Lấy danh sách khách hàng có tên là "Nguyễn Văn A" hoặc "Trần Thị B"
SELECT * FROM customers WHERE name = 'Nguyễn Văn A' OR name = 'Trần Thị B';

-- Lấy danh sách sản phẩm có giá lớn hơn 100.000 đồng hoặc là sản phẩm mới
SELECT * FROM products WHERE price > 100000 OR is_new = TRUE;
```

**5. Thứ tự ưu tiên:**

Toán tử AND có thứ tự ưu tiên cao hơn toán tử OR.

**6. Ví dụ:**

```sql
-- Lấy danh sách khách hàng có tên là "Nguyễn Văn A" và tuổi từ 18 đến 30, hoặc là khách hàng VIP
SELECT * FROM customers WHERE name = 'Nguyễn Văn A' AND (age BETWEEN 18 AND 30) OR is_vip = TRUE;
```

**7. Các lưu ý:**

- Cần sử dụng dấu ngoặc đơn để xác định thứ tự thực hiện các phép toán logic.
- Nên sử dụng các tên biến dễ hiểu để tăng khả năng đọc hiểu mã.

**Tài liệu tham khảo:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về toán tử kết hợp AND và OR trong PostgreSQL: [https://www.postgresql.org/docs/current/functions-logical.html](https://www.postgresql.org/docs/current/functions-logical.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
