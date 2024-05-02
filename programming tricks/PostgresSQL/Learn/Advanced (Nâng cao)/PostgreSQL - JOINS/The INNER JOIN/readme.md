## INNER JOIN trong PostgreSQL

**Khái niệm:**

INNER JOIN, hay còn gọi là Equijoin, là một phép toán trong PostgreSQL cho phép kết hợp các bản ghi từ hai bảng dựa trên các giá trị chung giữa các cột được chọn. Nó chỉ trả về các bản ghi có giá trị khớp nhau ở cả hai bảng.

**Ngữ cảnh:**

INNER JOIN được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Lấy dữ liệu liên quan từ nhiều bảng:** Ví dụ, bạn có thể sử dụng INNER JOIN để lấy thông tin chi tiết về khách hàng và đơn hàng của họ.
- **Lọc dữ liệu:** Bạn có thể sử dụng INNER JOIN để lọc dữ liệu dựa trên các điều kiện liên quan đến nhiều bảng.
- **Tối ưu hóa hiệu suất:** INNER JOIN có thể giúp tối ưu hóa hiệu suất truy vấn bằng cách chỉ trả về các bản ghi có liên quan.

**Cách sử dụng:**

Cú pháp cơ bản để thực hiện INNER JOIN trong PostgreSQL như sau:

```sql
SELECT *
FROM table_name1
INNER JOIN table_name2
ON table_name1.column_name = table_name2.column_name;
```

- `table_name1`: Tên bảng đầu tiên.
- `table_name2`: Tên bảng thứ hai.
- `column_name`: Tên cột được sử dụng để so sánh các bản ghi.

**Ví dụ:**

```sql
-- Lấy thông tin chi tiết về khách hàng và đơn hàng của họ
SELECT *
FROM customers
INNER JOIN orders
ON customers.customer_id = orders.customer_id;
```

**Lưu ý:**

- INNER JOIN chỉ trả về các bản ghi có giá trị khớp nhau ở cả hai bảng.
- Bạn có thể sử dụng nhiều điều kiện ON để so sánh các cột giữa hai bảng.
- Bạn có thể sử dụng WHERE clause để lọc thêm kết quả sau khi thực hiện INNER JOIN.

**Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về INNER JOIN trong PostgreSQL: [https://www.postgresql.org/docs/current/sql-commands.html](https://www.postgresql.org/docs/current/sql-commands.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
