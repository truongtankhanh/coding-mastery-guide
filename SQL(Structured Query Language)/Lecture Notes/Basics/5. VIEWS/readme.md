## Tạo VIEW trong SQL

Tạo VIEW trong SQL là quá trình tạo ra một "cửa sổ" ảo của dữ liệu từ một hoặc nhiều bảng dữ liệu (hoặc VIEW khác) dựa trên một truy vấn SQL. VIEW không lưu trữ dữ liệu trong bản thân mình, nhưng nó cung cấp một cách để xem và truy cập dữ liệu từ nhiều bảng theo một cách tiện lợi.

### Khái Niệm:

VIEW là một tập hợp kết quả của một truy vấn SELECT được đặt tên và lưu trữ trong cơ sở dữ liệu. Nó thường giữ các kết quả của truy vấn và có thể được sử dụng như một bảng ảo để truy vấn dữ liệu.

### Ngữ Cảnh:

- **Tạo giao diện dễ dàng truy vấn:** VIEW có thể tạo ra giao diện dữ liệu thuận tiện và dễ hiểu cho người dùng cuối.
- **Bảo mật và kiểm soát truy cập:** VIEW có thể được sử dụng để hạn chế quyền truy cập vào dữ liệu gốc, chỉ cho phép truy cập dựa trên các tiêu chí nhất định.

### Cách Sử Dụng và Ví Dụ:

**Ví dụ:**

```sql
CREATE VIEW SalesSummary AS
SELECT ProductID, SUM(Quantity) AS TotalSold
FROM Sales
GROUP BY ProductID;
```

Trong ví dụ trên:

- **CREATE VIEW SalesSummary:** Tạo một VIEW mới có tên là "SalesSummary".
- **SELECT ProductID, SUM(Quantity) AS TotalSold FROM Sales GROUP BY ProductID:** Truy vấn này tạo VIEW bằng cách tổng hợp dữ liệu từ bảng Sales và tạo một bảng ảo chứa ProductID và tổng số lượng bán được.

Khi VIEW này được tạo, bạn có thể truy vấn nó như một bảng thông thường:

```sql
SELECT * FROM SalesSummary;
```

Kết quả của truy vấn này sẽ hiển thị dữ liệu trong VIEW "SalesSummary" - tổng số lượng sản phẩm bán được cho từng sản phẩm.

VIEW cung cấp một cách linh hoạt và thuận tiện để truy cập dữ liệu từ nhiều bảng hoặc kết quả truy vấn phức tạp mà không cần lưu trữ dữ liệu thực sự. Nó cũng giúp trong việc quản lý quyền truy cập và bảo mật dữ liệu.

---

## Ví dụ về VIEW trong SQL

Tạo và sử dụng VIEW trong SQL cung cấp khả năng tạo các tập hợp dữ liệu ảo từ các truy vấn, giúp quản lý, truy xuất và phân tích dữ liệu một cách thuận tiện và linh hoạt. Dưới đây là một ví dụ minh họa cách tạo và sử dụng VIEW trong SQL.

### Khái Niệm:

VIEW là một cách để tạo một tập hợp dữ liệu ảo dựa trên một hoặc nhiều bảng hoặc các VIEW khác, sử dụng truy vấn SQL. Nó không lưu trữ dữ liệu mà chỉ lưu trữ truy vấn để truy cập dữ liệu.

### Ngữ Cảnh:

VIEW hữu ích khi cần thực hiện truy vấn phức tạp hoặc khi cần tạo một giao diện dữ liệu dễ sử dụng cho người dùng cuối.

### Cách Sử Dụng và Ví Dụ:

**Ví dụ: Tạo VIEW để hiển thị thông tin sản phẩm đã bán và số lượng bán được từ các bảng Sales và Products.**

Assume có hai bảng: Products (chứa thông tin về sản phẩm) và Sales (chứa thông tin về doanh số bán hàng).

```sql
-- Tạo VIEW
CREATE VIEW SalesSummary AS
SELECT P.ProductID, P.ProductName, SUM(S.Quantity) AS TotalSold
FROM Products P
LEFT JOIN Sales S ON P.ProductID = S.ProductID
GROUP BY P.ProductID, P.ProductName;
```

Trong ví dụ này:

- **CREATE VIEW SalesSummary:** Tạo một VIEW mới với tên là "SalesSummary".
- **SELECT P.ProductID, P.ProductName, SUM(S.Quantity) AS TotalSold FROM ... :** Truy vấn này kết hợp thông tin từ bảng Products và Sales để tính tổng số lượng sản phẩm đã bán.

Sau khi VIEW được tạo, bạn có thể truy vấn nó như một bảng thông thường:

```sql
SELECT * FROM SalesSummary;
```

Kết quả của truy vấn này sẽ hiển thị dữ liệu từ VIEW "SalesSummary" - thông tin về sản phẩm và tổng số lượng đã bán được.

VIEW trong SQL giúp tạo ra giao diện dễ sử dụng cho dữ liệu phức tạp và giúp tối ưu hóa quản lý dữ liệu, cung cấp khả năng truy xuất thông tin một cách thuận tiện.

---

## Tùy chọn WITH CHECK OPTION trong SQL

Tùy chọn WITH CHECK OPTION trong SQL được sử dụng khi tạo hoặc thay đổi một VIEW để đảm bảo rằng mọi dòng dữ liệu mới hoặc thay đổi dữ liệu phải tuân theo điều kiện của VIEW. Nó giúp kiểm tra và đảm bảo tính nhất quán của dữ liệu được thao tác thông qua VIEW.

### Khái Niệm:

WITH CHECK OPTION là một tùy chọn được sử dụng khi tạo hoặc thay đổi VIEW trong SQL. Khi được kích hoạt, nó đảm bảo rằng bất kỳ dòng dữ liệu nào được thêm vào hoặc thay đổi thông qua VIEW cũng phải tuân theo điều kiện của VIEW.

### Ngữ Cảnh:

Khi một VIEW có tùy chọn WITH CHECK OPTION, nó sẽ đảm bảo rằng bất kỳ thay đổi nào vào dữ liệu thông qua VIEW đều phải đáp ứng điều kiện xác định trong truy vấn tạo VIEW ban đầu.

### Cách Sử Dụng và Ví Dụ:

**Ví dụ: Tạo VIEW với WITH CHECK OPTION để chỉ hiển thị sản phẩm có số lượng tồn kho lớn hơn 0.**

Assume có một bảng Products chứa thông tin về sản phẩm, và chúng ta muốn tạo VIEW chỉ hiển thị các sản phẩm có số lượng tồn kho lớn hơn 0.

```sql
CREATE VIEW AvailableProducts AS
SELECT ProductID, ProductName, Quantity
FROM Products
WHERE Quantity > 0
WITH CHECK OPTION;
```

- **CREATE VIEW AvailableProducts:** Tạo một VIEW mới với tên là "AvailableProducts".
- **SELECT ProductID, ProductName, Quantity FROM ... WHERE Quantity > 0:** Truy vấn này chỉ chọn các sản phẩm có số lượng tồn kho lớn hơn 0.
- **WITH CHECK OPTION:** Đảm bảo rằng bất kỳ thay đổi nào vào dữ liệu thông qua VIEW cũng phải tuân theo điều kiện "Quantity > 0".

Khi VIEW "AvailableProducts" được tạo và một người dùng cố gắng thêm dữ liệu mới thông qua VIEW nhưng không tuân theo điều kiện WHERE, hệ thống sẽ từ chối thao tác đó và báo lỗi.

Tùy chọn WITH CHECK OPTION giúp bảo vệ tính nhất quán của dữ liệu thông qua VIEW, đảm bảo rằng chỉ những thay đổi thỏa mãn điều kiện của VIEW mới được phép thực hiện.

---

## UPDATE một VIEW trong SQL

Trong SQL, UPDATE một VIEW thường không được thực hiện trực tiếp. Thay vào đó, để cập nhật dữ liệu thông qua một VIEW, ta cần cung cấp một cách rõ ràng để cập nhật dữ liệu trong bảng gốc mà VIEW dựa trên. Tuy nhiên, có một số trường hợp đặc biệt và hệ thống cơ sở dữ liệu cụ thể có thể hỗ trợ UPDATE trực tiếp trên VIEW.

### Khái Niệm:

UPDATE một VIEW trong SQL ám chỉ việc cập nhật dữ liệu thông qua VIEW. Trong hầu hết trường hợp, nó đòi hỏi việc cập nhật dữ liệu trực tiếp trong bảng gốc mà VIEW dựa trên.

### Ngữ Cảnh:

Hầu hết các hệ thống cơ sở dữ liệu không hỗ trợ việc UPDATE trực tiếp trên VIEW khi không có một cách rõ ràng để hệ thống biết phải cập nhật dữ liệu trong bảng gốc nào.

### Cách Sử Dụng và Ví Dụ:

**Ví dụ:**
Giả sử có một VIEW tên là "HighValueProducts" hiển thị các sản phẩm có giá trị cao từ bảng "Products".

```sql
CREATE VIEW HighValueProducts AS
SELECT ProductID, ProductName, Price
FROM Products
WHERE Price > 1000;
```

Giờ ta muốn cập nhật giá của các sản phẩm có giá trị cao trong VIEW "HighValueProducts". Để làm điều này, ta cần cập nhật trực tiếp trong bảng "Products" mà VIEW dựa trên.

```sql
UPDATE Products
SET Price = Price * 1.1 -- Tăng giá 10%
WHERE ProductID IN (
    SELECT ProductID FROM HighValueProducts
);
```

Trong trường hợp này, UPDATE không diễn ra trực tiếp trong VIEW "HighValueProducts". Thay vào đó, nó cập nhật giá của các sản phẩm trong bảng "Products" dựa trên điều kiện được trích xuất từ VIEW.

Việc cập nhật một VIEW trực tiếp trong SQL thường không được hỗ trợ rộng rãi do vấn đề về tính nhất quán dữ liệu. Thay vào đó, nó đòi hỏi phải thực hiện UPDATE trên bảng gốc dựa trên điều kiện từ VIEW.

---

## Chèn hàng vào VIEW trong SQL

Trong SQL, thêm dữ liệu vào một VIEW thường không được thực hiện trực tiếp. Thay vào đó, để chèn dữ liệu vào một VIEW, ta cần chèn dữ liệu trực tiếp vào bảng gốc mà VIEW dựa trên.

### Khái Niệm:

Chèn dữ liệu vào một VIEW thông qua việc sử dụng INSERT không được hỗ trợ rộng rãi. Thay vào đó, chèn dữ liệu vào VIEW thường đòi hỏi việc chèn dữ liệu trực tiếp vào bảng gốc mà VIEW được tạo từ.

### Ngữ Cảnh:

Hầu hết các hệ thống cơ sở dữ liệu không hỗ trợ việc chèn trực tiếp vào VIEW vì điều này có thể gây nhầm lẫn và không rõ ràng, đặc biệt nếu VIEW được tạo từ nhiều bảng hoặc các truy vấn phức tạp.

### Cách Sử Dụng và Ví Dụ:

**Ví dụ:**
Giả sử có một VIEW tên là "HighValueProducts" hiển thị các sản phẩm có giá trị cao từ bảng "Products".

```sql
CREATE VIEW HighValueProducts AS
SELECT ProductID, ProductName, Price
FROM Products
WHERE Price > 1000;
```

Giờ ta muốn chèn một sản phẩm mới có giá trị cao vào VIEW "HighValueProducts". Để làm điều này, ta cần chèn dữ liệu trực tiếp vào bảng "Products".

```sql
INSERT INTO Products (ProductID, ProductName, Price)
VALUES (101, 'New High Value Product', 1500);
```

Việc chèn dữ liệu trực tiếp vào bảng "Products" làm thay đổi dữ liệu trong bảng gốc. Nếu điều kiện WHERE của VIEW "HighValueProducts" vẫn đúng, sản phẩm mới này cũng sẽ xuất hiện trong kết quả của VIEW.

Chèn dữ liệu vào VIEW trực tiếp thường không được hỗ trợ do tính nhất quán và tính dễ hiểu của dữ liệu. Thay vào đó, ta cần chèn dữ liệu vào bảng gốc mà VIEW được tạo từ để đảm bảo tính nhất quán của dữ liệu.

---

## Xóa hàng từ VIEW trong SQL

Trong SQL, việc xóa dữ liệu từ một VIEW thường không được thực hiện trực tiếp. Thay vào đó, để xóa dữ liệu từ một VIEW, ta cần xóa dữ liệu trực tiếp từ bảng gốc mà VIEW dựa trên.

### Khái Niệm:

Xóa dữ liệu từ một VIEW không phải là một thao tác được hỗ trợ rộng rãi trong SQL. Thay vào đó, để xóa dữ liệu từ một VIEW, ta cần xóa dữ liệu trực tiếp từ bảng gốc mà VIEW được tạo từ.

### Ngữ Cảnh:

Hầu hết các hệ thống cơ sở dữ liệu không hỗ trợ việc xóa trực tiếp từ một VIEW vì việc này có thể gây nhầm lẫn và không rõ ràng, đặc biệt nếu VIEW được tạo từ nhiều bảng hoặc các truy vấn phức tạp.

### Cách Sử Dụng và Ví Dụ:

**Ví dụ:**
Giả sử có một VIEW tên là "HighValueProducts" hiển thị các sản phẩm có giá trị cao từ bảng "Products".

```sql
CREATE VIEW HighValueProducts AS
SELECT ProductID, ProductName, Price
FROM Products
WHERE Price > 1000;
```

Giờ ta muốn xóa một sản phẩm có giá trị cao từ VIEW "HighValueProducts". Để làm điều này, ta cần xóa dữ liệu trực tiếp từ bảng "Products".

```sql
DELETE FROM Products
WHERE ProductID = 101;
```

Lệnh DELETE này xóa sản phẩm có ProductID là 101 từ bảng "Products". Nếu điều kiện WHERE của VIEW "HighValueProducts" vẫn đúng, sản phẩm này cũng sẽ bị xóa khỏi kết quả của VIEW.

Xóa dữ liệu từ VIEW trực tiếp thường không được hỗ trợ vì tính nhất quán và tính dễ hiểu của dữ liệu. Thay vào đó, ta cần xóa dữ liệu trực tiếp từ bảng gốc mà VIEW được tạo từ để đảm bảo tính nhất quán của dữ liệu.

---

## Xóa VIEW trong SQL

Trong SQL, để xóa một VIEW (cửa sổ ảo hiển thị dữ liệu từ một hoặc nhiều bảng), ta sử dụng câu lệnh DROP VIEW.

### Khái Niệm:

DROP VIEW là câu lệnh SQL được sử dụng để xóa một VIEW khỏi cơ sở dữ liệu. Việc xóa VIEW sẽ loại bỏ cấu trúc cửa sổ ảo đó mà không ảnh hưởng đến dữ liệu trong các bảng gốc.

### Ngữ Cảnh:

Việc xóa VIEW thường được sử dụng khi không còn cần thiết hoặc khi cần phải tái tạo lại VIEW với cấu trúc mới.

### Cách Sử Dụng và Ví Dụ:

**Ví dụ:**
Giả sử ta có một VIEW là "HighValueProducts" hiển thị các sản phẩm có giá trị cao từ bảng "Products".

```sql
CREATE VIEW HighValueProducts AS
SELECT ProductID, ProductName, Price
FROM Products
WHERE Price > 1000;
```

Để xóa VIEW "HighValueProducts", ta sử dụng câu lệnh DROP VIEW:

```sql
DROP VIEW HighValueProducts;
```

Lệnh này sẽ xóa cấu trúc của VIEW "HighValueProducts" khỏi cơ sở dữ liệu, không ảnh hưởng đến dữ liệu trong bảng "Products". Sau khi DROP VIEW được thực thi, VIEW "HighValueProducts" sẽ không còn tồn tại trong cơ sở dữ liệu nữa.

Việc xóa VIEW làm cho cửa sổ ảo đó không còn khả dụng nữa và không thể truy cập dữ liệu thông qua VIEW đó. Thực hiện DROP VIEW cẩn thận để đảm bảo không xóa nhầm các đối tượng quan trọng trong cơ sở dữ liệu.

---
