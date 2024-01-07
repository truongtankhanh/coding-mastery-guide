# Mục đích của CTE

CTE, hay Common Table Expression, là một phần của SQL được sử dụng để tạo bảng tạm thời và tái sử dụng chúng trong các truy vấn.

### Khái niệm:

- **Common Table Expression (CTE):** Là một tên gọi cho một bảng tạm thời có thể được xây dựng trong một truy vấn SELECT, INSERT, UPDATE hoặc DELETE.

### Ngữ cảnh và cách sử dụng:

- **Tạo bảng tạm thời:** CTE cho phép bạn tạo một bảng tạm thời (temporary result set) trong một truy vấn, giúp làm giảm sự phức tạp của truy vấn chính hoặc tái sử dụng dữ liệu tạm thời đó trong nhiều truy vấn.
- **Sử dụng trong các truy vấn phức tạp:** CTE được sử dụng phổ biến trong các truy vấn phức tạp, đặc biệt là trong các truy vấn liên quan đến đệ quy, phân tích dữ liệu, hoặc khi cần tái sử dụng kết quả trung gian của một truy vấn.

### Ví dụ:

Dưới đây là một ví dụ về việc sử dụng CTE trong SQL:

#### Tạo CTE:

```sql
WITH SalesCTE AS (
    SELECT ProductID, SUM(Quantity) AS TotalSales
    FROM Sales
    GROUP BY ProductID
)
SELECT * FROM SalesCTE WHERE TotalSales > 100;
```

### Giải thích:

- Trong ví dụ trên, CTE được đặt tên là `SalesCTE`.
- CTE này chứa tổng số lượng bán của từng sản phẩm từ bảng "Sales".
- Cuối cùng, truy vấn chính sử dụng CTE để chọn những sản phẩm có tổng số lượng bán lớn hơn 100.

CTE là một công cụ mạnh mẽ cho phép tái sử dụng và tạo bảng tạm thời trong các truy vấn phức tạp. Nó cung cấp khả năng tái sử dụng kết quả trung gian của một truy vấn trong nhiều truy vấn khác nhau mà không cần phải tạo bảng tạm thời riêng lẻ.

---

# Ưu điểm của CTE

CTE, hay Common Table Expression, mang đến một số ưu điểm quan trọng trong việc viết các truy vấn phức tạp trong SQL.

### Khái niệm:

- **Common Table Expression (CTE):** Là một cấu trúc trong SQL cho phép tạo bảng tạm thời và tái sử dụng nó trong các truy vấn.

### Ngữ cảnh và cách sử dụng:

- **Tạo bảng tạm thời:** CTE giúp tạo ra bảng tạm thời dựa trên kết quả của một truy vấn SELECT, có thể sử dụng lại trong cùng hoặc các truy vấn khác.
- **Giảm phức tạp của truy vấn:** CTE giúp phân chia logic của truy vấn thành các phần nhỏ hơn, dễ đọc hơn và dễ bảo trì hơn.
- **Tái sử dụng kết quả trung gian:** Kết quả từ CTE có thể được tái sử dụng nhiều lần trong cùng một truy vấn hoặc trong các truy vấn khác, giúp tối ưu hóa hiệu suất.

### Ví dụ:

Dưới đây là một ví dụ về việc sử dụng CTE để giải quyết một vấn đề phức tạp:

#### Tạo CTE:

```sql
WITH SalesCTE AS (
    SELECT ProductID, SUM(Quantity) AS TotalSales
    FROM Sales
    GROUP BY ProductID
)
SELECT * FROM SalesCTE WHERE TotalSales > 100;
```

### Giải thích:

- Trong ví dụ trên, CTE có tên là `SalesCTE` chứa thông tin về tổng số lượng sản phẩm bán được từ bảng "Sales".
- Truy vấn chính sử dụng CTE để chọn những sản phẩm có tổng số lượng bán lớn hơn 100.

### Ưu điểm của CTE:

1. **Tăng khả năng đọc và bảo trì:** Phân chia truy vấn thành các phần nhỏ hơn, giúp việc đọc, hiểu và bảo trì truy vấn dễ dàng hơn.
2. **Tối ưu hóa hiệu suất:** Có thể tái sử dụng kết quả trung gian, giảm thời gian thực thi truy vấn và tối ưu hóa hiệu suất hệ thống.
3. **Giảm sự phức tạp của truy vấn:** Cho phép viết truy vấn phức tạp một cách có cấu trúc và dễ quản lý hơn.

CTE là một công cụ mạnh mẽ trong SQL, giúp tối ưu hóa việc viết các truy vấn phức tạp và làm giảm sự phức tạp của chúng.

---

# Những lợi ích của lệnh WITH CTE

## Tối ưu hóa bộ nhớ và tốc độ

Lệnh `WITH` và CTE (Common Table Expression) trong SQL cung cấp nhiều lợi ích, bao gồm tối ưu hóa bộ nhớ và tốc độ khi thực thi các truy vấn phức tạp.

### Khái niệm:

- **WITH và CTE:** Là cú pháp trong SQL cho phép tạo bảng tạm thời và tái sử dụng chúng trong các truy vấn.

### Ngữ cảnh và cách sử dụng:

- **Tối ưu hóa bộ nhớ:** CTE có thể giúp giảm bộ nhớ cần thiết để thực hiện một truy vấn. Thay vì tạo và lưu trữ các bảng tạm thời, CTE chỉ tồn tại trong phạm vi của truy vấn đang thực thi.
- **Tăng tốc độ thực thi:** CTE có thể cải thiện tốc độ thực thi truy vấn bằng cách giảm thời gian và công đoạn cần thiết để tạo và quản lý bảng tạm thời.

### Ví dụ:

Dưới đây là một ví dụ minh họa về việc sử dụng CTE để tối ưu hóa bộ nhớ và tốc độ thực thi:

#### Tạo CTE để tính tổng số lượng sản phẩm bán được:

```sql
WITH SalesCTE AS (
    SELECT ProductID, SUM(Quantity) AS TotalSales
    FROM Sales
    GROUP BY ProductID
)
SELECT * FROM SalesCTE WHERE TotalSales > 100;
```

### Giải thích:

- Trong ví dụ này, CTE tên là `SalesCTE` chứa thông tin về tổng số lượng sản phẩm bán được từ bảng "Sales".
- Truy vấn chính sử dụng CTE để chọn những sản phẩm có tổng số lượng bán lớn hơn 100.

### Lợi ích của lệnh WITH CTE:

1. **Tối ưu hóa bộ nhớ:** Giảm lượng bộ nhớ cần thiết để lưu trữ dữ liệu tạm thời.
2. **Tăng tốc độ thực thi:** Giảm thời gian cần thiết để tạo và quản lý bảng tạm thời, cải thiện tốc độ thực thi của truy vấn.

CTE và lệnh `WITH` giúp tối ưu hóa bộ nhớ và tăng tốc độ thực thi của truy vấn bằng cách tạo bảng tạm thời có phạm vi hẹp và linh hoạt trong việc sử dụng dữ liệu tạm thời.

---

## Giảm độ phức tạp của query

Trong SQL, việc giảm độ phức tạp của truy vấn là rất quan trọng để tăng hiệu suất và đảm bảo truy vấn thực thi một cách hiệu quả hơn. Có một số cách để giảm độ phức tạp của truy vấn, bao gồm việc sử dụng chỉ định SELECT cần thiết, tối ưu hóa câu lệnh WHERE và JOIN, cũng như sử dụng CTE (Common Table Expression).

### Khái niệm:

- **Giảm độ phức tạp của truy vấn:** Là quá trình tối ưu hóa truy vấn SQL để giảm thời gian thực thi và tối ưu hóa hiệu suất.

### Ngữ cảnh và cách sử dụng:

- **Chỉ định SELECT cần thiết:** Chỉ lấy các cột cần thiết thay vì tất cả các cột có thể giúp giảm lượng dữ liệu phải xử lý.
- **Tối ưu hóa câu lệnh WHERE và JOIN:** Sử dụng các điều kiện WHERE phù hợp và tối ưu hóa việc kết hợp các bảng để tránh truy vấn quá phức tạp.
- **Sử dụng CTE để tạo bảng tạm thời:** Có thể sử dụng CTE để tạo bảng tạm thời và tái sử dụng chúng để giảm sự phức tạp của truy vấn.

### Ví dụ:

Dưới đây là một ví dụ minh họa về cách sử dụng CTE để giảm độ phức tạp của truy vấn:

#### Tạo CTE để tính tổng số lượng sản phẩm bán được:

```sql
WITH SalesCTE AS (
    SELECT ProductID, SUM(Quantity) AS TotalSales
    FROM Sales
    GROUP BY ProductID
)
SELECT * FROM SalesCTE WHERE TotalSales > 100;
```

### Giải thích:

- Trong ví dụ này, CTE tên là `SalesCTE` chứa thông tin về tổng số lượng sản phẩm bán được từ bảng "Sales".
- Truy vấn chính sử dụng CTE để chọn những sản phẩm có tổng số lượng bán lớn hơn 100.

### Lợi ích của việc giảm độ phức tạp của truy vấn:

1. **Tăng hiệu suất:** Giảm độ phức tạp có thể tăng tốc độ thực thi của truy vấn.
2. **Tối ưu hóa tài nguyên:** Giảm tải cho cơ sở dữ liệu và tối ưu hóa việc sử dụng tài nguyên hệ thống.

Việc giảm độ phức tạp của truy vấn không chỉ giúp tối ưu hóa hiệu suất mà còn giúp tăng hiệu quả của hệ thống cơ sở dữ liệu.

---

## Dễ đọc và dễ hiểu

Trong SQL, việc viết các truy vấn một cách dễ đọc và dễ hiểu rất quan trọng để làm cho mã nguồn dễ bảo trì, hiểu được và sửa đổi. Có một số nguyên tắc và phương pháp để tối ưu hóa việc viết truy vấn SQL sao cho dễ đọc và dễ hiểu.

### Khái niệm:

- **Dễ đọc và dễ hiểu:** Là việc viết truy vấn SQL sao cho có cấu trúc rõ ràng, dễ đọc, và dễ hiểu về mặt logic.

### Ngữ cảnh và cách sử dụng:

- **Đặt tên rõ ràng cho bảng và cột:** Sử dụng tên mô tả và dễ hiểu cho các bảng và cột.
- **Sử dụng dấu thụt lề và khoảng trắng:** Sử dụng khoảng trắng và dấu thụt lề để tạo cấu trúc rõ ràng cho truy vấn.
- **Chú thích:** Sử dụng chú thích để giải thích logic hoặc mục đích của truy vấn.

### Ví dụ:

Dưới đây là một ví dụ minh họa về việc viết truy vấn SQL một cách dễ đọc và dễ hiểu:

#### Truy vấn sử dụng dấu thụt lề và chú thích:

```sql
SELECT
    orders.order_id,
    customers.customer_name,
    SUM(order_details.quantity * order_details.unit_price) AS total_amount
FROM
    orders
INNER JOIN
    customers ON orders.customer_id = customers.customer_id
INNER JOIN
    order_details ON orders.order_id = order_details.order_id
WHERE
    orders.order_date >= '2023-01-01'
    AND customers.country = 'USA'
GROUP BY
    orders.order_id, customers.customer_name
HAVING
    SUM(order_details.quantity * order_details.unit_price) > 1000
ORDER BY
    total_amount DESC;
```

### Giải thích:

- Truy vấn này lấy thông tin về đơn hàng của khách hàng ở Mỹ từ năm 2023, tính tổng số tiền cho mỗi đơn hàng, và chỉ hiển thị các đơn hàng có tổng số tiền trên 1000, sắp xếp theo tổng số tiền giảm dần.
- Cách viết này sử dụng dấu thụt lề, chú thích, và đặt tên rõ ràng giúp truy vấn trở nên dễ đọc và dễ hiểu.

### Lợi ích của việc viết dễ đọc và dễ hiểu:

1. **Dễ bảo trì:** Mã nguồn dễ đọc hơn, giúp dễ dàng bảo trì và sửa đổi khi cần thiết.
2. **Dễ hiểu:** Cho phép người đọc dễ dàng hiểu logic của truy vấn.

Việc viết truy vấn SQL một cách dễ đọc và dễ hiểu không chỉ giúp cho việc bảo trì dễ dàng hơn mà còn tạo điều kiện cho việc hiểu rõ hơn về logic của truy vấn.

---

## Tăng tính linh hoạt mà sub-query không có

Trong SQL, subquery (truy vấn con) và CTE (Common Table Expression - Biểu thức Bảng Chung) đều được sử dụng để thực hiện các truy vấn phức tạp hoặc tái sử dụng dữ liệu. Sự linh hoạt được tăng cường khi sử dụng CTE so với subquery, và điều này có thể được thấy qua một số điểm sau:

### Khái niệm:

- **Subquery:** Là một truy vấn lồng trong truy vấn khác, thường được sử dụng trong phần `WHERE` hoặc `FROM` của truy vấn chính.
- **CTE:** Là một biểu thức SQL cho phép tạo bảng tạm thời và tái sử dụng nó trong truy vấn sau đó.

### Ngữ cảnh và cách sử dụng:

- **Linh hoạt hơn trong việc tái sử dụng dữ liệu:** CTE có thể được sử dụng nhiều lần trong cùng một truy vấn hoặc trong các truy vấn khác mà không cần phải viết lại logic truy vấn.
- **Tạo cấu trúc truy vấn rõ ràng hơn:** CTE cho phép tạo cấu trúc truy vấn tốt hơn, với khả năng tái sử dụng dữ liệu tạm thời và cải thiện độ đọc và hiểu truy vấn.

### Ví dụ:

Dưới đây là một ví dụ về việc sử dụng CTE để tăng tính linh hoạt so với subquery:

#### Sử dụng Subquery:

```sql
SELECT *
FROM orders
WHERE customer_id IN (SELECT customer_id FROM customers WHERE country = 'USA');
```

#### Sử dụng CTE:

```sql
WITH USCustomers AS (
    SELECT customer_id FROM customers WHERE country = 'USA'
)
SELECT *
FROM orders
WHERE customer_id IN (SELECT customer_id FROM USCustomers);
```

### Giải thích:

- Cả hai truy vấn trên đều lấy thông tin đơn hàng từ các khách hàng ở Mỹ (`country = 'USA'`).
- Subquery lồng trong `IN` sử dụng một truy vấn con để lấy `customer_id`. Trong khi đó, CTE tạo ra một bảng tạm thời (`USCustomers`) chứa danh sách `customer_id` ở Mỹ, sau đó tái sử dụng nó trong truy vấn chính.

### Ưu điểm của việc sử dụng CTE:

1. **Tính linh hoạt cao hơn:** CTE có thể tái sử dụng trong nhiều truy vấn, cải thiện tính linh hoạt của mã nguồn SQL.
2. **Cấu trúc truy vấn rõ ràng:** Giúp tạo cấu trúc truy vấn rõ ràng hơn và dễ đọc hơn, đặc biệt khi cần sử dụng logic truy vấn phức tạp.

Tóm lại, việc sử dụng CTE so với subquery tăng tính linh hoạt và cung cấp một cách tiếp cận cấu trúc truy vấn rõ ràng và dễ hiểu hơn.

---

## Khả năng lồng ghép câu lệnh như Sub-query

Lồng ghép câu lệnh trong SQL, cụ thể là sử dụng subquery (truy vấn con), cho phép bạn nhúng một truy vấn bên trong một truy vấn khác. Điều này giúp tạo ra các truy vấn phức tạp hơn, kết quả từ truy vấn con có thể được sử dụng trong điều kiện hoặc dữ liệu cho truy vấn chính.

### Khái niệm:

- **Subquery (Truy vấn con):** Là một truy vấn lồng trong một truy vấn khác và thường xuất hiện trong phần SELECT, WHERE, FROM, hoặc HAVING của truy vấn chính.

### Ngữ cảnh và cách sử dụng:

- **Tạo điều kiện phức tạp:** Subquery cho phép tạo điều kiện phức tạp hơn bằng cách sử dụng kết quả của một truy vấn trong một truy vấn khác.
- **Lấy dữ liệu tùy chỉnh:** Kết quả của truy vấn con có thể được sử dụng như một bảng ảo để lấy dữ liệu tùy chỉnh cho truy vấn chính.

### Ví dụ:

Dưới đây là một ví dụ về việc sử dụng subquery để tìm các sản phẩm có số lượng tồn kho nhỏ hơn số lượng trung bình:

```sql
SELECT product_name, quantity_in_stock
FROM products
WHERE quantity_in_stock < (
    SELECT AVG(quantity_in_stock)
    FROM products
);
```

### Giải thích:

- Trong ví dụ này, truy vấn chính lấy tên sản phẩm và số lượng tồn kho của các sản phẩm có số lượng tồn kho ít hơn số lượng trung bình của tất cả các sản phẩm.
- Subquery trong WHERE sử dụng AVG để tính số lượng trung bình, sau đó dùng điều kiện WHERE để so sánh số lượng tồn kho với giá trị trung bình này.

### Ưu điểm của subquery:

1. **Tạo điều kiện phức tạp:** Cho phép tạo các điều kiện hoặc lọc dữ liệu dựa trên kết quả của truy vấn con.
2. **Tính linh hoạt:** Cung cấp cách tiếp cận phong phú cho việc truy vấn và lấy dữ liệu tùy chỉnh.

Subquery là một công cụ mạnh mẽ trong SQL, giúp tạo ra các truy vấn phức tạp và linh hoạt, cho phép bạn thực hiện các phân tích chi tiết trên dữ liệu trong cơ sở dữ liệu của mình.

---

# Cách khởi tạo CTE

# Tạo một Common Table Expression đệ quy

Common Table Expression (CTE) có thể được sử dụng để tạo truy vấn đệ quy trong SQL. Truy vấn đệ quy là một loại truy vấn mà nó gọi lại chính nó để giải quyết vấn đề phức tạp hoặc cấu trúc dữ liệu phức tạp, thông qua việc thêm dữ liệu vào từng vòng lặp để đạt được kết quả cuối cùng.

### Khái niệm:

- **CTE đệ quy:** Là một biểu thức SQL được sử dụng để tạo bảng tạm thời có thể thực hiện truy vấn lặp đi lặp lại, gọi lại chính nó trong một truy vấn.

### Ngữ cảnh và cách sử dụng:

- **Phù hợp với cấu trúc dữ liệu đệ quy:** CTE đệ quy thường được sử dụng để thực hiện truy vấn trên các cấu trúc dữ liệu đệ quy như cây, đồ thị, v.v.
- **Gọi lại chính nó trong truy vấn:** Phải có truy vấn đệ quy ban đầu và trường hợp dừng để tránh vòng lặp vô hạn.

### Ví dụ:

Dưới đây là một ví dụ về việc sử dụng CTE đệ quy để tạo câu lệnh đệ quy:

#### Tính tổng của các số từ 1 đến n:

```sql
WITH RECURSIVE Numbers AS (
    SELECT 1 AS num
    UNION ALL
    SELECT num + 1 FROM Numbers WHERE num < 10
)
SELECT SUM(num) FROM Numbers;
```

### Giải thích:

- Truy vấn trên sử dụng CTE đệ quy để tạo một bảng tạm thời `Numbers`, bắt đầu từ số 1.
- Sau đó, nó gọi lại chính nó thông qua `UNION ALL`, tăng giá trị số lên 1 mỗi lần cho đến khi giá trị số đạt đến 10.
- Kết quả cuối cùng là tổng của các số từ 1 đến 10.

### Ưu điểm của CTE đệ quy:

1. **Giải quyết vấn đề phức tạp:** Cho phép giải quyết các vấn đề phức tạp yêu cầu truy vấn lặp đi lặp lại.
2. **Tính linh hoạt:** Cung cấp cách tiếp cận linh hoạt và mạnh mẽ cho việc xử lý cấu trúc dữ liệu phức tạp.

CTE đệ quy cung cấp một cách tiếp cận mạnh mẽ để giải quyết các vấn đề phức tạp dựa trên cấu trúc dữ liệu đệ quy, như cây, đồ thị, hoặc chuỗi số, đồng thời giúp tăng tính linh hoạt và đơn giản hóa việc thực hiện các truy vấn đệ quy trong SQL.

---
