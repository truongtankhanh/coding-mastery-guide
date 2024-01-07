## Single line comments

Single line comments trong SQL được sử dụng để thêm chú thích hoặc mô tả vào mã SQL và chỉ áp dụng cho một dòng duy nhất.

### Khái Niệm:

Single line comments trong SQL giúp mô tả hoặc giải thích các phần của mã SQL cho người đọc hoặc người sử dụng mà không ảnh hưởng đến việc thực thi câu lệnh SQL.

### Ngữ Cảnh:

Single line comments hữu ích khi cần giải thích ý nghĩa của một câu lệnh, cung cấp thông tin cho người đọc hoặc để tạm thời bỏ qua một phần của mã SQL trong quá trình phát triển hoặc debug.

### Cách Sử Dụng và Ví Dụ:

Trong SQL, để thêm single line comments, ta sử dụng ký hiệu "--" (khi sử dụng các hệ thống cơ sở dữ liệu như MySQL, PostgreSQL, SQL Server) hoặc "//" (trong một số hệ thống khác như SQLite, Oracle).

**Ví dụ sử dụng "--" (MySQL, PostgreSQL, SQL Server):**

```sql
-- Đây là một single line comment trong SQL
SELECT * FROM Products; -- Lấy tất cả dữ liệu từ bảng Products
```

**Ví dụ sử dụng "//" (SQLite, Oracle):**

```sql
-- Đây là một single line comment trong SQL
SELECT * FROM Products; -- Lấy tất cả dữ liệu từ bảng Products
```

Khi mã SQL được thực thi, bất kỳ điều gì sau dấu "--" hoặc "//" sẽ được coi là chú thích và sẽ không ảnh hưởng đến việc thực thi câu lệnh SQL. Chú thích có thể được sử dụng để giải thích ý nghĩa của câu lệnh, cung cấp thông tin bổ sung cho mã, hoặc tạm thời loại bỏ một phần mã trong quá trình phát triển.

---

## Multi-line comments

Multi-line comments trong SQL được sử dụng để chú thích hoặc mô tả một phần mã SQL, và có thể bao gồm nhiều dòng.

### Khái Niệm:

Multi-line comments trong SQL là cách để chèn chú thích mô tả nhiều dòng trong mã SQL mà không ảnh hưởng đến việc thực thi câu lệnh.

### Ngữ Cảnh:

Multi-line comments hữu ích khi cần mô tả hoặc giải thích một phần lớn mã SQL, có thể bao gồm nhiều dòng, để làm rõ ý nghĩa của các phần khối mã hoặc tạm thời loại bỏ một phần của mã trong quá trình debug hoặc phát triển.

### Cách Sử Dụng và Ví Dụ:

Trong SQL, cú pháp để bắt đầu multi-line comments thường khác nhau giữa các hệ thống cơ sở dữ liệu. Một số hệ thống sử dụng /_ và _/, trong khi các hệ thống khác có thể sử dụng BEGIN và END.

**Ví dụ sử dụng /_ và _/ (phổ biến trong nhiều hệ thống):**

```sql
/* Đây là một multi-line comment trong SQL
   Chú thích nhiều dòng giúp giải thích mã SQL
   Nó có thể bao gồm nhiều dòng và không ảnh hưởng đến việc thực thi câu lệnh */
SELECT * FROM Products;
```

Trong ví dụ này, tất cả những gì nằm giữa /_ và _/ được coi là chú thích và sẽ không được thực thi khi chạy câu lệnh SQL. Điều này giúp mô tả hoặc giải thích một phần mã SQL dài hoặc phức tạp.

**Ví dụ sử dụng BEGIN và END (một số hệ thống khác có thể sử dụng cú pháp này):**

```sql
BEGIN
  -- Đây là một multi-line comment trong SQL
  -- Chú thích nhiều dòng giúp giải thích mã SQL
  -- Nó có thể bao gồm nhiều dòng và không ảnh hưởng đến việc thực thi câu lệnh
  SELECT * FROM Products;
END;
```

Multi-line comments cho phép bạn thêm các chú thích dài hơn, mô tả rõ ràng hơn và không ảnh hưởng đến việc thực thi của câu lệnh SQL. Điều này giúp cải thiện tính rõ ràng và dễ đọc của mã SQL, đặc biệt khi làm việc với mã phức tạp hoặc cần giải thích cho người đọc.

---

## Inline comment

Inline comments trong SQL được sử dụng để chú thích hoặc mô tả một phần cụ thể của câu lệnh SQL trên cùng một dòng.

### Khái Niệm:

Inline comments trong SQL cho phép người viết mã chèn chú thích ngắn gọn, mô tả ý nghĩa hoặc chức năng của một phần cụ thể của câu lệnh SQL.

### Ngữ Cảnh:

Inline comments hữu ích khi cần giải thích một phần nhỏ của câu lệnh SQL để làm rõ ý nghĩa, chức năng hoặc thông tin bổ sung mà không làm mất đi tính ngắn gọn của câu lệnh.

### Cách Sử Dụng và Ví Dụ:

Trong SQL, inline comments thường được thực hiện bằng cách sử dụng ký hiệu -- hoặc //, tùy thuộc vào hệ thống cơ sở dữ liệu.

**Ví dụ sử dụng -- (phổ biến trong nhiều hệ thống):**

```sql
SELECT * FROM Products WHERE Price > 1000; -- Lấy các sản phẩm có giá trị lớn hơn 1000
```

Trong ví dụ này, phần "--" đánh dấu từ sau nó là chú thích và sẽ không ảnh hưởng đến việc thực thi câu lệnh SQL. Nó giúp người đọc hiểu ý nghĩa của điều kiện WHERE một cách nhanh chóng.

**Ví dụ sử dụng // (một số hệ thống khác như SQLite, Oracle):**

```sql
SELECT * FROM Products WHERE Price > 1000; // Lấy các sản phẩm có giá trị lớn hơn 1000
```

Tương tự như trên, ký hiệu // sẽ chú thích phần còn lại của dòng và không ảnh hưởng đến việc thực thi của câu lệnh SQL.

Inline comments giúp làm rõ ý nghĩa của một phần cụ thể trong câu lệnh SQL, giúp đẩy nhanh quá trình hiểu và sử dụng mã trong quá trình phát triển và bảo trì cơ sở dữ liệu.

---
