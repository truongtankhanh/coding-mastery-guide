## FULL OUTER JOIN trong PostgreSQL

**Khái niệm:**

FULL OUTER JOIN là một phép toán trong PostgreSQL cho phép kết hợp các bản ghi từ hai bảng dựa trên các giá trị chung giữa các cột được chọn. Nó trả về tất cả các bản ghi từ cả hai bảng, bao gồm cả những bản ghi không có giá trị khớp nhau ở cả hai bảng.

**Ngữ cảnh:**

FULL OUTER JOIN được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Lấy tất cả dữ liệu từ hai bảng, bất kể có khớp hay không:** Ví dụ, bạn có thể sử dụng FULL OUTER JOIN để lấy danh sách tất cả khách hàng và tất cả sản phẩm, ngay cả khi một số khách hàng chưa mua sản phẩm nào.
- **Tìm kiếm các bản ghi không khớp:** Bạn có thể sử dụng FULL OUTER JOIN để tìm kiếm các bản ghi trong một bảng không có bản ghi tương ứng trong bảng khác.
- **Tối ưu hóa hiệu suất:** FULL OUTER JOIN có thể giúp tối ưu hóa hiệu suất truy vấn bằng cách chỉ truy cập dữ liệu cần thiết.

**Cách sử dụng:**

Cú pháp cơ bản để thực hiện FULL OUTER JOIN trong PostgreSQL như sau:

```sql
SELECT *
FROM table_name1
FULL OUTER JOIN table_name2
ON table_name1.column_name = table_name2.column_name;
```

- `table_name1`: Tên bảng đầu tiên.
- `table_name2`: Tên bảng thứ hai.
- `column_name`: Tên cột được sử dụng để so sánh các bản ghi.

**Ví dụ:**

```sql
-- Lấy danh sách tất cả khách hàng và tất cả sản phẩm, ngay cả khi một số khách hàng chưa mua sản phẩm nào
SELECT *
FROM customers
FULL OUTER JOIN products
ON customers.customer_id = orders.product_id;
```

**Lưu ý:**

- FULL OUTER JOIN trả về tất cả các bản ghi từ cả hai bảng, ngay cả khi không có bản ghi nào khớp nhau.
- Các bản ghi không khớp trong một bảng sẽ có giá trị null cho các cột của bảng đó.
- Bạn có thể sử dụng nhiều điều kiện ON để so sánh các cột giữa hai bảng.
- Bạn có thể sử dụng WHERE clause để lọc thêm kết quả sau khi thực hiện FULL OUTER JOIN.

**Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về FULL OUTER JOIN trong PostgreSQL: [https://www.postgresql.org/docs/current/sql-commands.html](https://www.postgresql.org/docs/current/sql-commands.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
