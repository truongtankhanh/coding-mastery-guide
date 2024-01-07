## Cú pháp

Trong SQL, `NOT` được sử dụng để đảo ngược một điều kiện logic. Nó thường được sử dụng cùng với các điều kiện như `WHERE`, `HAVING` hoặc các biểu thức logic khác để đảo ngược kết quả của một điều kiện.

### Khái Niệm:

`NOT` là một toán tử logic dùng để phủ định một điều kiện logic. Khi sử dụng `NOT`, nó sẽ chuyển đổi kết quả của một điều kiện từ TRUE thành FALSE hoặc từ FALSE thành TRUE.

### Ngữ Cảnh:

Thường được sử dụng khi bạn muốn lọc ra các bản ghi không thỏa mãn một điều kiện cụ thể.

### Cách Sử Dụng và Ví Dụ:

Ví dụ sử dụng `NOT` với điều kiện `WHERE`:

```sql
SELECT * FROM table_name WHERE NOT condition;
```

Ví dụ:

```sql
SELECT * FROM employees WHERE NOT department = 'HR';
```

### Giải Thích Chi Tiết:

Trong ví dụ trên, câu lệnh `SELECT * FROM employees WHERE NOT department = 'HR';` sẽ lọc ra tất cả các bản ghi từ bảng `employees` mà trường `department` không bằng `'HR'`. Nếu `department` có giá trị `'HR'`, điều kiện `NOT department = 'HR'` sẽ đánh giá là FALSE và bản ghi đó sẽ không được chọn.

`NOT` có thể kết hợp với các toán tử logic khác như `AND`, `OR` để tạo ra các biểu thức logic phức tạp hơn, đảo ngược kết quả của các điều kiện đặt trong nó. Điều này giúp lọc dữ liệu theo các tiêu chí phức tạp dựa trên các điều kiện logic khác nhau.

---

## Ví dụ sử dụng NOT với IN trong SQL

Sử dụng `NOT` với `IN` trong SQL cho phép bạn lấy các bản ghi không khớp với một danh sách các giá trị được chỉ định trong một truy vấn hoặc danh sách giá trị cụ thể. Nó đảo ngược kết quả của mệnh đề `IN`, trả về các bản ghi không khớp với danh sách giá trị.

### Ngữ Cảnh:

`NOT IN` thường được sử dụng khi bạn cần lọc dữ liệu từ một bảng mà không khớp với một danh sách các giá trị cụ thể hoặc kết quả của một truy vấn con.

### Cách Sử Dụng và Ví Dụ:

Ví dụ sử dụng `NOT IN` với danh sách giá trị cụ thể:

```sql
SELECT * FROM products WHERE product_id NOT IN (1, 2, 3);
```

Ví dụ sử dụng `NOT IN` với một truy vấn con:

```sql
SELECT * FROM products WHERE product_id NOT IN (SELECT related_product_id FROM related_products);
```

### Giải Thích Chi Tiết:

Trong ví dụ đầu tiên, câu lệnh `SELECT * FROM products WHERE product_id NOT IN (1, 2, 3);` sẽ lấy tất cả các bản ghi từ bảng `products` mà trường `product_id` không khớp với các giá trị 1, 2 hoặc 3.

Trong ví dụ thứ hai, câu lệnh `SELECT * FROM products WHERE product_id NOT IN (SELECT related_product_id FROM related_products);` sẽ lấy tất cả các bản ghi từ bảng `products` mà `product_id` không khớp với bất kỳ giá trị nào trong trường `related_product_id` của bảng `related_products`.

`NOT IN` giúp lọc ra các bản ghi không khớp với danh sách giá trị hoặc kết quả của một truy vấn con, cung cấp khả năng lựa chọn dữ liệu dựa trên những điều kiện phức tạp hơn.

---

## Ví dụ sử dụng NOT với IS NULL

Sử dụng `NOT` với `IS NULL` trong SQL cho phép bạn lọc ra các bản ghi không có giá trị NULL trong trường cụ thể. Nó đảo ngược kết quả của `IS NULL`, trả về các bản ghi không chứa giá trị NULL trong trường được xác định.

### Ngữ Cảnh:

`NOT IS NULL` thường được sử dụng khi bạn muốn lấy các bản ghi không chứa giá trị NULL trong một trường.

### Cách Sử Dụng và Ví Dụ:

Ví dụ sử dụng `NOT IS NULL`:

```sql
SELECT * FROM employees WHERE salary NOT IS NULL;
```

### Giải Thích Chi Tiết:

Trong ví dụ, câu lệnh `SELECT * FROM employees WHERE salary NOT IS NULL;` sẽ trả về tất cả các bản ghi từ bảng `employees` mà trường `salary` không chứa giá trị NULL. Điều này có nghĩa là chỉ các nhân viên có mức lương đã được nhập vào hệ thống sẽ được lựa chọn.

Khi sử dụng `NOT IS NULL`, nó đảo ngược kết quả của `IS NULL`, lọc ra các bản ghi mà không chứa giá trị NULL trong trường được xác định.

`NOT IS NULL` rất hữu ích khi bạn cần loại bỏ các giá trị NULL khỏi kết quả truy vấn và chỉ quan tâm đến các bản ghi có dữ liệu trong trường cụ thể.

---

## Ví dụ sử dụng NOT với LIKE

Sử dụng `NOT` với `LIKE` trong SQL cho phép bạn lọc ra các bản ghi không khớp với một mẫu chuỗi cụ thể. Nó đảo ngược kết quả của mệnh đề `LIKE`, trả về các bản ghi không khớp với mẫu chuỗi được chỉ định.

### Ngữ Cảnh:

`NOT LIKE` thường được sử dụng khi bạn muốn lấy các bản ghi không chứa một chuỗi cụ thể hoặc không khớp với mẫu chuỗi.

### Cách Sử Dụng và Ví Dụ:

Ví dụ sử dụng `NOT LIKE`:

```sql
SELECT * FROM products WHERE product_name NOT LIKE '%chair%';
```

### Giải Thích Chi Tiết:

Trong ví dụ, câu lệnh `SELECT * FROM products WHERE product_name NOT LIKE '%chair%';` sẽ lọc ra tất cả các bản ghi từ bảng `products` mà trường `product_name` không chứa chuỗi `'chair'`. Điều này có nghĩa là chỉ các sản phẩm có tên không chứa từ `'chair'` sẽ được trả về.

Khi sử dụng `NOT LIKE`, nó sẽ đảo ngược kết quả của `LIKE`, lọc ra các bản ghi không khớp với mẫu chuỗi được chỉ định.

`NOT LIKE` rất hữu ích khi bạn muốn loại bỏ các bản ghi chứa một chuỗi nhất định hoặc không muốn kết quả trả về có chứa một mẫu chuỗi cụ thể.

---

## Ví dụ sử dụng NOT với BETWEEN

Sử dụng `NOT` với `BETWEEN` trong SQL cho phép bạn lọc ra các bản ghi không nằm trong một phạm vi giá trị cụ thể. Nó đảo ngược kết quả của mệnh đề `BETWEEN`, trả về các bản ghi không nằm trong phạm vi giá trị xác định.

### Ngữ Cảnh:

`NOT BETWEEN` thường được sử dụng khi bạn muốn lấy các bản ghi không nằm trong một phạm vi giá trị.

### Cách Sử Dụng và Ví Dụ:

Ví dụ sử dụng `NOT BETWEEN`:

```sql
SELECT * FROM products WHERE price NOT BETWEEN 50 AND 100;
```

### Giải Thích Chi Tiết:

Trong ví dụ, câu lệnh `SELECT * FROM products WHERE price NOT BETWEEN 50 AND 100;` sẽ lấy tất cả các bản ghi từ bảng `products` mà trường `price` không nằm trong phạm vi từ 50 đến 100. Điều này có nghĩa là chỉ các sản phẩm có giá không nằm trong khoảng giá này sẽ được trả về.

Khi sử dụng `NOT BETWEEN`, nó sẽ đảo ngược kết quả của `BETWEEN`, lọc ra các bản ghi không nằm trong phạm vi giá trị xác định.

`NOT BETWEEN` thường được sử dụng khi bạn muốn loại bỏ các bản ghi nằm trong một phạm vi giá trị nhất định hoặc không muốn kết quả trả về nằm trong một khoảng giá trị cụ thể.

---

## Sử dụng NOT với EXISTS

Trong SQL, `NOT` có thể được sử dụng với `EXISTS` để lấy các bản ghi không thỏa mãn điều kiện của mệnh đề `EXISTS`. `NOT EXISTS` trả về TRUE nếu không có bản ghi nào thỏa mãn điều kiện của câu truy vấn con được chỉ định.

### Ngữ cảnh:

`NOT EXISTS` thường được sử dụng khi bạn muốn lọc ra các bản ghi không tồn tại trong kết quả của một câu truy vấn con nào đó.

### Cách sử dụng và Ví dụ:

Ví dụ sử dụng `NOT EXISTS`:

```sql
SELECT *
FROM customers c
WHERE NOT EXISTS (
    SELECT *
    FROM orders o
    WHERE o.customer_id = c.customer_id
);
```

### Giải thích chi tiết:

Trong ví dụ, câu lệnh truy vấn lấy tất cả các khách hàng (`customers`) mà không có bất kỳ đơn hàng (`orders`) nào được liên kết với họ.

- Trong phần `WHERE`, `NOT EXISTS` được sử dụng để kiểm tra xem có bất kỳ bản ghi nào từ bảng `orders` (`o`) có `customer_id` tương đương với `customer_id` trong bảng `customers` (`c`) hay không.
- Nếu không có bản ghi nào từ bảng `orders` thỏa mãn điều kiện này, điều kiện `NOT EXISTS` sẽ trả về TRUE và khách hàng đó sẽ được lựa chọn.

`NOT EXISTS` là một công cụ mạnh mẽ để lựa chọn các bản ghi không có tương ứng trong một câu truy vấn con. Nó cho phép bạn lọc ra các dòng không có sẵn trong kết quả của một truy vấn con cụ thể.

---
