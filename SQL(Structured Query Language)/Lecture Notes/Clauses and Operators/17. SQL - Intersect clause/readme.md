Mệnh đề `INTERSECT` trong SQL được sử dụng để kết hợp hai kết quả truy vấn và trả về các giá trị duy nhất xuất hiện trong cả hai kết quả.

### Khái Niệm:

#### INTERSECT:

- Mệnh đề `INTERSECT` sử dụng để kết hợp kết quả của hai hoặc nhiều truy vấn và trả về các giá trị duy nhất mà xuất hiện trong cả hai kết quả.
- Nó hoạt động như phép giao của hai tập hợp, chỉ trả về các phần tử tồn tại trong cả hai tập hợp.

### Ngữ Cảnh:

Khi bạn muốn xác định sự giao nhau giữa các kết quả của các truy vấn khác nhau, `INTERSECT` là công cụ hữu ích.

### Cách Sử Dụng và Ví Dụ:

Cú pháp cơ bản của mệnh đề `INTERSECT` trong SQL như sau:

```sql
SELECT column1, column2, ...
FROM table_name1
INTERSECT
SELECT column1, column2, ...
FROM table_name2;
```

Ví dụ:

Nếu bạn muốn tìm các tên khách hàng xuất hiện trong cả bảng `customers` và `potential_customers`, bạn có thể sử dụng:

```sql
SELECT name
FROM customers
INTERSECT
SELECT name
FROM potential_customers;
```

### Giải Thích Chi Tiết:

- `SELECT column1, column2, ...`: Là các cột bạn muốn chọn từ các bảng để thực hiện phép giao.
- `FROM table_name1`: Là tên của bảng thứ nhất bạn muốn thực hiện phép giao.
- `FROM table_name2`: Là tên của bảng thứ hai bạn muốn thực hiện phép giao.
- `INTERSECT`: Là mệnh đề để chỉ ra phép giao giữa hai kết quả truy vấn.

Mệnh đề `INTERSECT` trong SQL cho phép bạn tìm ra các giá trị duy nhất mà xuất hiện trong cả hai kết quả của các truy vấn. Nó hữu ích khi bạn muốn biết những gì là chung giữa hai tập hợp dữ liệu và chỉ muốn lấy các giá trị xuất hiện trong cả hai.
