Trong SQL, `LIKE` được sử dụng để tìm kiếm các giá trị dựa trên một mẫu chuỗi. Nó cho phép bạn thực hiện tìm kiếm không chính xác hoặc mô tả các chuỗi dựa trên các ký tự đặc biệt.

### Khái Niệm:

#### LIKE:

- `LIKE` được sử dụng trong các mệnh đề `WHERE` của câu truy vấn SQL để tìm kiếm các chuỗi dựa trên một mẫu.
- Các ký tự đặc biệt như `%` (đại diện cho 0 hoặc nhiều ký tự) và `_` (đại diện cho một ký tự) thường được sử dụng với `LIKE`.

### Ngữ Cảnh:

Khi bạn cần tìm kiếm các giá trị mà bạn chỉ biết một phần của chúng hoặc muốn áp dụng một mẫu tìm kiếm cụ thể.

### Cách Sử Dụng và Ví Dụ:

Sử dụng `LIKE` trong câu lệnh `SELECT` để tìm kiếm các giá trị dựa trên một mẫu chuỗi.

#### Sử Dụng `LIKE`:

```sql
SELECT column1, column2
FROM table_name
WHERE column_name LIKE pattern;
```

Ví dụ:

```sql
SELECT *
FROM products
WHERE product_name LIKE 'App%';
```

### Giải Thích Chi Tiết:

- `SELECT column1, column2`: Là các cột bạn muốn lấy từ bảng.
- `FROM table_name`: Là tên của bảng bạn muốn truy vấn dữ liệu.
- `WHERE column_name LIKE pattern`: Là mệnh đề tìm kiếm dựa trên mẫu chuỗi.

Trong ví dụ, `LIKE 'App%'` sẽ trả về các hàng từ bảng `products` mà có giá trị trong cột `product_name` bắt đầu bằng chuỗi "App". Ký tự `%` đại diện cho bất kỳ ký tự nào sau chuỗi "App", vì vậy nó có thể là bất kỳ từ nào sau đó.

`LIKE` cho phép bạn thực hiện tìm kiếm linh hoạt dựa trên mẫu chuỗi và có thể rất hữu ích khi bạn muốn tìm kiếm các giá trị mà bạn chỉ biết một phần của chúng hoặc muốn áp dụng một mẫu tìm kiếm cụ thể.
