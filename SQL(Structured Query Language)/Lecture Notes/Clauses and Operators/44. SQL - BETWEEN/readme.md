## Sử dụng BETWEEN với các giá trị số

Trong SQL, `BETWEEN` được sử dụng để chọn các bản ghi có giá trị nằm trong một phạm vi giá trị cụ thể. Nó cho phép bạn chọn các giá trị từ một giá trị bắt đầu đến một giá trị kết thúc.

### Ngữ cảnh:

`BETWEEN` thường được sử dụng khi bạn muốn chọn các bản ghi với giá trị nằm trong một phạm vi giá trị số cụ thể.

### Cách sử dụng và Ví dụ:

Ví dụ sử dụng `BETWEEN` với các giá trị số:

```sql
SELECT *
FROM products
WHERE price BETWEEN 50 AND 100;
```

### Giải thích chi tiết:

Trong ví dụ trên, câu lệnh `SELECT * FROM products WHERE price BETWEEN 50 AND 100;` sẽ chọn tất cả các sản phẩm trong bảng `products` có giá (`price`) từ 50 đến 100 (bao gồm cả 50 và 100). Câu lệnh này sẽ trả về tất cả các bản ghi mà giá của sản phẩm nằm trong phạm vi từ 50 đến 100.

Lưu ý rằng `BETWEEN` bao gồm cả giá trị đầu và giá trị cuối trong phạm vi. Nó có thể được sử dụng không chỉ với giá sản phẩm mà còn với bất kỳ loại dữ liệu số nào, chẳng hạn như độ dài, số lượng, hoặc bất kỳ giá trị số nào trong cơ sở dữ liệu của bạn.

---

## Sử BETWEEN với Date

Trong SQL, `BETWEEN` cũng có thể được sử dụng để chọn các bản ghi có giá trị ngày nằm trong một phạm vi ngày cụ thể.

### Ngữ cảnh:

`BETWEEN` với ngày thường được sử dụng khi bạn muốn chọn các bản ghi với giá trị ngày nằm trong một phạm vi ngày cụ thể.

### Cách sử dụng và Ví dụ:

Ví dụ sử dụng `BETWEEN` với giá trị ngày:

```sql
SELECT *
FROM orders
WHERE order_date BETWEEN '2023-01-01' AND '2023-12-31';
```

### Giải thích chi tiết:

Trong ví dụ trên, câu lệnh `SELECT * FROM orders WHERE order_date BETWEEN '2023-01-01' AND '2023-12-31';` sẽ chọn tất cả các đơn đặt hàng trong bảng `orders` có ngày đặt hàng (`order_date`) từ ngày '2023-01-01' đến ngày '2023-12-31' (bao gồm cả hai ngày này).

Lưu ý rằng `BETWEEN` cũng bao gồm cả ngày bắt đầu và ngày kết thúc trong phạm vi ngày. Điều này giúp bạn lọc các bản ghi dựa trên các ngày cụ thể và có thể áp dụng cho bất kỳ loại dữ liệu ngày tháng nào trong cơ sở dữ liệu của bạn.

---

## Sử dụng NOT với BETWEEN

Trong SQL, `NOT BETWEEN` được sử dụng để lấy các bản ghi không nằm trong một phạm vi cụ thể. Nó phủ định kết quả của phép toán `BETWEEN`.

### Ngữ cảnh:

`NOT BETWEEN` thường được sử dụng khi bạn muốn lấy các bản ghi không nằm trong một phạm vi giá trị số hoặc ngày cụ thể.

### Cách sử dụng và Ví dụ:

Ví dụ sử dụng `NOT BETWEEN` với giá trị số:

```sql
SELECT *
FROM products
WHERE price NOT BETWEEN 50 AND 100;
```

### Giải thích chi tiết:

Trong ví dụ trên, câu lệnh `SELECT * FROM products WHERE price NOT BETWEEN 50 AND 100;` sẽ lấy tất cả các sản phẩm trong bảng `products` có giá (`price`) không nằm trong phạm vi từ 50 đến 100 (không bao gồm cả 50 và 100).

`NOT BETWEEN` hoạt động bằng cách phủ định kết quả của phép toán `BETWEEN`. Nó sẽ trả về kết quả TRUE nếu giá trị không nằm trong phạm vi được chỉ định. Điều này giúp bạn lọc các bản ghi không nằm trong một phạm vi cụ thể mà bạn quan tâm.

---
