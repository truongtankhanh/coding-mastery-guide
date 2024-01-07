Các toán tử số học trong SQL là các phép toán được sử dụng để thực hiện các phép tính số học trên các cột hoặc giá trị trong cơ sở dữ liệu.

### Khái Niệm:

#### Các Toán Tử Số Học:

1. `+` (Cộng): Dùng để cộng hai giá trị.
2. `-` (Trừ): Dùng để trừ giá trị thứ nhất cho giá trị thứ hai.
3. `*` (Nhân): Dùng để nhân hai giá trị.
4. `/` (Chia): Dùng để chia giá trị thứ nhất cho giá trị thứ hai.
5. `%` (Chia Lấy Dư): Dùng để lấy phần dư của phép chia giữa hai giá trị.

### Ngữ Cảnh:

Khi bạn cần thực hiện các phép tính số học trên dữ liệu số trong cơ sở dữ liệu, các toán tử số học là công cụ quan trọng để thực hiện các tính toán.

### Cách Sử Dụng và Ví Dụ:

Cú pháp cơ bản của các toán tử số học trong SQL như sau:

```sql
SELECT column1 + column2 AS sum_result,
       column1 - column2 AS subtract_result,
       column1 * column2 AS multiply_result,
       column1 / column2 AS divide_result,
       column1 % column2 AS modulus_result
FROM table_name;
```

Ví dụ:

Nếu bạn muốn tính tổng, hiệu, tích, thương và phần dư của hai cột `quantity` và `price` trong bảng `products`, câu lệnh sẽ là:

```sql
SELECT quantity + price AS sum_result,
       quantity - price AS subtract_result,
       quantity * price AS multiply_result,
       quantity / price AS divide_result,
       quantity % price AS modulus_result
FROM products;
```

### Giải Thích Chi Tiết:

- `+`, `-`, `*`, `/`, `%`: Là các toán tử số học tương ứng thực hiện các phép cộng, trừ, nhân, chia và lấy phần dư.
- `column1`, `column2`: Là các giá trị số từ cột hoặc các biểu thức số học.

Các toán tử số học trong SQL cho phép bạn thực hiện các phép tính số học trên dữ liệu số trong cơ sở dữ liệu. Bạn có thể áp dụng chúng trong các truy vấn để tính toán hoặc thực hiện các thao tác số học trên dữ liệu theo nhu cầu của mình.
