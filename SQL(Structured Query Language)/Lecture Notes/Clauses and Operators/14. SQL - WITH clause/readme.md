Mệnh đề `WITH` trong SQL được sử dụng để tạo một tập kết quả tạm thời (hay còn được gọi là common table expression - CTE) mà bạn có thể sử dụng trong các truy vấn sau đó. Điều này giúp tạo ra các truy vấn phức tạp hơn, dễ đọc và dễ bảo trì.

### Khái Niệm:

#### WITH:

- Mệnh đề `WITH` cho phép bạn đặt tên cho một tập kết quả tạm thời.
- Nó được sử dụng trong các truy vấn phức tạp để tạo ra một tập dữ liệu tạm thời có thể sử dụng trong truy vấn chính sau đó.

### Ngữ Cảnh:

Khi bạn cần sử dụng kết quả từ một truy vấn phụ thuộc vào một số thao tác phức tạp hoặc cần thực hiện một loạt các truy vấn phức tạp, `WITH` là công cụ hữu ích.

### Cách Sử Dụng và Ví Dụ:

Cú pháp cơ bản của mệnh đề `WITH` trong SQL như sau:

```sql
WITH ten_tap_ket_qua AS (
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition
)
SELECT *
FROM ten_tap_ket_qua;
```

Ví dụ:

Giả sử bạn muốn tạo một tập kết quả tạm thời `top_customers` để lấy danh sách các khách hàng có tổng đơn hàng lớn hơn 1000 từ bảng `orders`, bạn có thể viết:

```sql
WITH top_customers AS (
    SELECT customer_id, SUM(order_amount) AS total_amount
    FROM orders
    GROUP BY customer_id
    HAVING SUM(order_amount) > 1000
)
SELECT *
FROM top_customers;
```

### Giải Thích Chi Tiết:

- `WITH`: Là mệnh đề bắt đầu cho phép tạo tập kết quả tạm thời.
- `ten_tap_ket_qua`: Là tên bạn muốn đặt cho tập kết quả tạm thời.
- `SELECT column1, column2, ...`: Là các cột bạn muốn chọn hoặc xử lý từ bảng được chỉ định.
- `FROM table_name`: Là tên của bảng bạn muốn truy vấn.
- `WHERE condition`: Là điều kiện lọc dữ liệu (nếu cần thiết).

Mệnh đề `WITH` giúp tạo ra một tập kết quả tạm thời từ một truy vấn phụ, giúp làm giảm phức tạp của truy vấn chính và tăng khả năng đọc hiểu và bảo trì mã SQL. Điều này rất hữu ích khi bạn cần sử dụng kết quả từ một truy vấn phụ trong truy vấn chính hoặc cần sử dụng kết quả từ một loạt các truy vấn liên quan đến nhau.
