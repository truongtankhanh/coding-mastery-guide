Mệnh đề `EXCEPT` trong SQL được sử dụng để trả về các giá trị duy nhất xuất hiện trong kết quả của truy vấn đầu tiên mà không có trong kết quả của truy vấn thứ hai.

### Khái Niệm:

#### EXCEPT:

- Mệnh đề `EXCEPT` trả về các giá trị duy nhất trong kết quả của truy vấn đầu tiên mà không có trong kết quả của truy vấn thứ hai.
- Nó hoạt động như phép lấy hiệu của hai tập hợp, chỉ trả về các phần tử không thuộc tập hợp thứ hai.

### Ngữ Cảnh:

Khi bạn muốn xác định sự khác biệt giữa hai kết quả của các truy vấn, `EXCEPT` là công cụ hữu ích.

### Cách Sử Dụng và Ví Dụ:

Cú pháp cơ bản của mệnh đề `EXCEPT` trong SQL như sau:

```sql
SELECT column1, column2, ...
FROM table_name1
EXCEPT
SELECT column1, column2, ...
FROM table_name2;
```

Ví dụ:

Nếu bạn muốn tìm các tên khách hàng trong bảng `customers` mà không có trong bảng `potential_customers`, bạn có thể sử dụng:

```sql
SELECT name
FROM customers
EXCEPT
SELECT name
FROM potential_customers;
```

### Giải Thích Chi Tiết:

- `SELECT column1, column2, ...`: Là các cột bạn muốn chọn từ các bảng để thực hiện phép lấy hiệu.
- `FROM table_name1`: Là tên của bảng thứ nhất bạn muốn thực hiện phép lấy hiệu.
- `FROM table_name2`: Là tên của bảng thứ hai bạn muốn thực hiện phép lấy hiệu.
- `EXCEPT`: Là mệnh đề để chỉ ra phép lấy hiệu giữa hai kết quả truy vấn.

Mệnh đề `EXCEPT` trong SQL cho phép bạn tìm ra các giá trị duy nhất có trong kết quả của truy vấn đầu tiên mà không xuất hiện trong kết quả của truy vấn thứ hai. Điều này hữu ích khi bạn muốn xác định sự khác biệt hoặc loại bỏ các giá trị giữa hai tập hợp dữ liệu.
