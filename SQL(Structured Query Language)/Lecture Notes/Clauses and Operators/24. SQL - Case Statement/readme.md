Trong SQL, không có câu lệnh `SWITCH CASE` giống như trong một số ngôn ngữ lập trình khác như Java hoặc Python. Tuy nhiên, một số hệ quản trị cơ sở dữ liệu như PostgreSQL, MySQL, SQL Server hỗ trợ việc sử dụng câu lệnh `CASE` để thực hiện một loạt các điều kiện và thực thi logic tương tự như `SWITCH CASE`.

### Khái Niệm:

#### CASE trong SQL:

- Là một biểu thức logic để thực hiện điều kiện và trả về một giá trị dựa trên các điều kiện được đưa ra.

### Ngữ Cảnh:

Khi bạn muốn thực hiện một loạt các điều kiện và trả về giá trị tương ứng dựa trên điều kiện đó, `CASE` là một công cụ hữu ích.

### Cách Sử Dụng và Ví Dụ:

Câu lệnh `CASE` trong SQL có hai dạng cú pháp: `CASE` đơn giản và `CASE` nâng cao (với điều kiện).

#### Sử Dụng `CASE` Đơn Giản:

```sql
SELECT
    column_name,
    CASE
        WHEN condition1 THEN result1
        WHEN condition2 THEN result2
        ...
        ELSE default_result
    END
FROM table_name;
```

Ví dụ:

```sql
SELECT
    order_id,
    CASE
        WHEN total_amount > 1000 THEN 'High Value'
        WHEN total_amount > 500 THEN 'Medium Value'
        ELSE 'Low Value'
    END AS order_value_category
FROM orders;
```

### Giải Thích Chi Tiết:

- `CASE`: Bắt đầu câu lệnh `CASE`.
- `WHEN condition THEN result`: Khi một điều kiện đúng, `CASE` sẽ trả về giá trị tương ứng với điều kiện đó.
- `ELSE default_result`: Đây là kết quả mặc định nếu không có điều kiện nào đúng.
- `END`: Kết thúc câu lệnh `CASE`.
- `AS alias_name`: Đặt tên cho cột kết quả (tùy chọn).

Câu lệnh `CASE` trong SQL cho phép bạn kiểm tra các điều kiện và trả về giá trị dựa trên điều kiện đúng đầu tiên. Nó tương đương với `SWITCH CASE` trong nhiều ngôn ngữ lập trình, giúp thực hiện logic điều kiện và trả về kết quả phù hợp.
