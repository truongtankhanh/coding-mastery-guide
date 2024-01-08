## BIN()

**Khái niệm:** `BIN()` chuyển đổi một số nguyên không dấu thành một chuỗi nhị phân. Chuỗi nhị phân đại diện cho giá trị số nguyên đó theo cơ số 2 (số hệ nhị phân).

**Ngữ cảnh và cách sử dụng:** Khi bạn cần biểu diễn một số nguyên dưới dạng chuỗi nhị phân để thực hiện các thao tác xử lý hoặc lưu trữ dữ liệu theo chuẩn nhị phân, `BIN()` là công cụ hữu ích.

**Ví dụ với lệnh/code và giải thích chi tiết:**

```sql
SELECT BIN(10) AS BinaryRepresentation;
```

Trong ví dụ này, `BIN(10)` chuyển đổi số nguyên `10` thành dạng chuỗi nhị phân. Kết quả trả về sẽ là chuỗi `'1010'`, biểu diễn số `10` dưới dạng nhị phân.

Hàm `BIN()` hữu ích khi bạn cần biểu diễn một số nguyên dưới dạng chuỗi nhị phân để thực hiện các phép toán hoặc lưu trữ dữ liệu theo cơ sở nhị phân. Điều này có thể hữu ích trong nhiều trường hợp như xử lý dữ liệu số học, mã hóa, hoặc thực hiện các phép so sánh dựa trên biểu diễn nhị phân của dữ liệu.

---

## BINARY()

**Khái niệm:** `BINARY()` trong SQL chuyển đổi một chuỗi thành một chuỗi nhị phân. Điều này không phải là việc chuyển đổi giữa các cơ số như hàm `BIN()`, mà là việc chuyển đổi chuỗi văn bản thành một chuỗi nhị phân theo bảng mã ASCII.

**Ngữ cảnh và cách sử dụng:** Khi bạn cần chuyển đổi một chuỗi văn bản thành dạng nhị phân để thực hiện mã hóa hoặc xử lý dữ liệu nhị phân trong SQL, `BINARY()` có thể hữu ích.

**Ví dụ với lệnh/code và giải thích chi tiết:**

```sql
SELECT BINARY('hello') AS BinaryString;
```

Trong ví dụ này, `BINARY('hello')` chuyển đổi chuỗi văn bản `'hello'` thành chuỗi nhị phân. Kết quả trả về sẽ là chuỗi nhị phân tương ứng với chuỗi văn bản `'hello'`.

Hàm `BINARY()` hữu ích khi bạn cần chuyển đổi chuỗi văn bản thành dạng nhị phân, đặc biệt là trong việc mã hóa, xử lý dữ liệu nhị phân hoặc trong các tình huống yêu cầu xử lý dữ liệu theo chuẩn nhị phân. Điều này có thể hữu ích khi làm việc với mã hóa dữ liệu, tạo chuỗi băm (hash), hoặc thực hiện các phép toán cơ bản trên dữ liệu nhị phân.

---

## COALESCE()

**Khái niệm:** `COALESCE()` cho phép bạn xác định một danh sách các giá trị và trả về giá trị đầu tiên không rỗng từ danh sách đó. Nếu tất cả các giá trị đều rỗng, hàm sẽ trả về `NULL`.

**Ngữ cảnh và cách sử dụng:** Khi bạn cần lựa chọn giá trị không rỗng từ một danh sách các cột trong cơ sở dữ liệu, `COALESCE()` là công cụ hữu ích. Điều này thường được sử dụng để xử lý giá trị mặc định hoặc kết hợp nhiều cột thành một giá trị duy nhất.

**Ví dụ với lệnh/code và giải thích chi tiết:**

Giả sử bạn có một bảng với các cột `name`, `nickname`, và `alias`. Bạn muốn tạo một cột mới gồm tên đầy đủ hoặc biệt danh (nếu có) của mỗi người.

```sql
SELECT COALESCE(name, nickname, alias) AS fullname FROM people;
```

Trong ví dụ này, `COALESCE()` sẽ trả về giá trị đầu tiên không rỗng từ danh sách `name`, `nickname`, và `alias`. Nếu `name` không rỗng, giá trị `name` sẽ được chọn. Nếu `name` rỗng nhưng `nickname` không rỗng, giá trị `nickname` sẽ được chọn. Nếu cả `name` và `nickname` đều rỗng nhưng `alias` không rỗng, giá trị `alias` sẽ được chọn. Nếu tất cả các cột đều rỗng, kết quả trả về sẽ là `NULL`.

Hàm `COALESCE()` hữu ích khi bạn cần lựa chọn giá trị không rỗng từ một danh sách các cột hoặc giá trị và sử dụng giá trị đó trong các truy vấn hoặc hiển thị dữ liệu.

---

## CONNECTION_ID()

**Khái niệm:** `CONNECTION_ID()` trả về một số nguyên đại diện cho ID kết nối của phiên làm việc đang sử dụng cơ sở dữ liệu. Mỗi phiên làm việc khi kết nối tới cơ sở dữ liệu sẽ có một ID kết nối duy nhất.

**Ngữ cảnh và cách sử dụng:** Khi bạn cần xác định một phiên làm việc cụ thể trong cơ sở dữ liệu, hoặc muốn theo dõi các kết nối và hoạt động của người dùng trong cơ sở dữ liệu, `CONNECTION_ID()` có thể hữu ích.

**Ví dụ với lệnh/code và giải thích chi tiết:**

```sql
SELECT CONNECTION_ID() AS SessionID;
```

Trong ví dụ này, `CONNECTION_ID()` sẽ trả về ID kết nối của phiên làm việc hiện tại. Kết quả trả về sẽ là một số nguyên duy nhất đại diện cho ID kết nối.

Hàm `CONNECTION_ID()` thường được sử dụng trong các truy vấn giám sát hoặc kiểm tra kết nối, đặc biệt khi cần theo dõi hoạt động của người dùng hoặc quản lý tài nguyên của cơ sở dữ liệu. Nó cung cấp một cách để xác định phiên làm việc cụ thể trong cơ sở dữ liệu để tiến hành các hoạt động xử lý hoặc kiểm tra liên quan đến kết nối.

---

## CURRENT_USER()

**Khái niệm:** `CURRENT_USER()` trả về tên người dùng đang thực hiện truy vấn hoặc thực hiện các thao tác trong cơ sở dữ liệu. Nó trả về thông tin về người dùng hiện tại.

**Ngữ cảnh và cách sử dụng:** Khi bạn cần xác định người dùng đang thực hiện các thao tác trong cơ sở dữ liệu, hoặc muốn kiểm tra quyền truy cập của người dùng hiện tại, `CURRENT_USER()` là công cụ hữu ích.

**Ví dụ với lệnh/code và giải thích chi tiết:**

```sql
SELECT CURRENT_USER() AS CurrentUser;
```

Trong ví dụ này, `CURRENT_USER()` sẽ trả về tên người dùng đang thực hiện truy vấn trong cơ sở dữ liệu. Kết quả trả về sẽ là tên người dùng hiện tại.

Hàm `CURRENT_USER()` thường được sử dụng để xác định người dùng đang thực hiện các hoạt động trong cơ sở dữ liệu, hoặc khi cần phải kiểm tra quyền truy cập của người dùng hiện tại để đảm bảo an toàn dữ liệu và quản lý quyền truy cập trong hệ thống cơ sở dữ liệu.

---

## DATABASE()

**Khái niệm:** `DATABASE()` trả về tên của cơ sở dữ liệu mà truy vấn hiện tại đang thực hiện.

**Ngữ cảnh và cách sử dụng:** Khi bạn cần xác định cơ sở dữ liệu đang được sử dụng trong phiên làm việc, hoặc muốn tính toán dữ liệu dựa trên tên cơ sở dữ liệu, `DATABASE()` là công cụ hữu ích.

**Ví dụ với lệnh/code và giải thích chi tiết:**

```sql
SELECT DATABASE() AS CurrentDatabase;
```

Trong ví dụ này, `DATABASE()` sẽ trả về tên của cơ sở dữ liệu đang được sử dụng trong phiên làm việc hiện tại. Kết quả trả về sẽ là tên của cơ sở dữ liệu.

Hàm `DATABASE()` thường được sử dụng để kiểm tra hoặc xác định cơ sở dữ liệu đang được sử dụng trong truy vấn, hoặc khi cần phải thực hiện các thao tác dựa trên cơ sở dữ liệu cụ thể trong các truy vấn hoặc quy trình lưu trữ.

---

## IF()

**Khái niệm:** Hàm `IF()` có cú pháp `IF(condition, value_if_true, value_if_false)`. Nó đánh giá `condition` và trả về `value_if_true` nếu điều kiện là đúng và `value_if_false` nếu điều kiện là sai.

**Ngữ cảnh và cách sử dụng:** Hàm `IF()` được sử dụng khi bạn cần thực hiện một loạt các tác vụ hoặc trả về các giá trị khác nhau dựa trên điều kiện cụ thể.

**Ví dụ với lệnh/code và giải thích chi tiết:**

```sql
SELECT
    IF(salary > 50000, 'High Salary', 'Low Salary') AS SalaryCategory
FROM
    employees;
```

Trong ví dụ này, `IF(salary > 50000, 'High Salary', 'Low Salary')` sẽ kiểm tra mức lương (`salary`) của nhân viên. Nếu mức lương lớn hơn 50000, nó sẽ trả về chuỗi `'High Salary'`, ngược lại nó sẽ trả về `'Low Salary'`. Kết quả sẽ là cột mới có tên `SalaryCategory`, hiển thị danh mục mức lương của mỗi nhân viên.

Hàm `IF()` rất hữu ích trong SQL khi bạn cần thực hiện các câu lệnh điều kiện, như đánh giá giá trị và trả về kết quả tùy thuộc vào điều kiện được xác định. Điều này cho phép bạn tạo ra các truy vấn linh hoạt và điều chỉnh kết quả dựa trên các điều kiện cụ thể.

---

## LAST_INSERT_ID()

**Khái niệm:** `LAST_INSERT_ID()` trả về giá trị ID của hàng cuối cùng được chèn vào một bảng có cột tự tăng tự động. Nó thường được sử dụng sau khi thực hiện một truy vấn INSERT để lấy ID của hàng vừa được chèn.

**Ngữ cảnh và cách sử dụng:** Hàm `LAST_INSERT_ID()` hữu ích khi bạn cần lấy giá trị ID của hàng vừa được chèn để thực hiện các thao tác kết hợp hoặc thực hiện các thao tác khác liên quan đến dữ liệu vừa được thêm vào.

**Ví dụ với lệnh/code và giải thích chi tiết:**

Giả sử bạn chèn một hàng mới vào bảng `users` có trường `id` là trường tự tăng tự động:

```sql
INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');
SELECT LAST_INSERT_ID() AS NewUserID;
```

Trong đoạn mã trên, sau khi bạn chèn một hàng mới vào bảng `users`, hàm `LAST_INSERT_ID()` được sử dụng để trả về giá trị ID của hàng vừa được chèn. Kết quả trả về sẽ là ID của bản ghi vừa được thêm vào.

Hàm `LAST_INSERT_ID()` thường được sử dụng trong các tình huống khi bạn cần lấy ID của bản ghi vừa được thêm vào để sử dụng cho các mục đích tiếp theo như thêm dữ liệu liên quan, thống kê, hoặc quản lý dữ liệu.

---

## NULLIF()

**Khái niệm:** Hàm `NULLIF()` nhận hai tham số. Nó so sánh hai giá trị, nếu chúng bằng nhau, kết quả trả về sẽ là `NULL`, ngược lại, giá trị đầu tiên sẽ được trả về.

**Ngữ cảnh và cách sử dụng:** Hàm `NULLIF()` thường được sử dụng để kiểm tra xem hai giá trị có bằng nhau không và thay thế giá trị bằng `NULL` trong trường hợp chúng giống nhau.

**Ví dụ với lệnh/code và giải thích chi tiết:**

```sql
SELECT NULLIF(10, 10) AS Result;
```

Trong trường hợp này, `NULLIF(10, 10)` sẽ so sánh hai giá trị. Bởi vì chúng bằng nhau, kết quả trả về sẽ là `NULL`.

Hàm `NULLIF()` thường được sử dụng khi cần so sánh hai giá trị và thay thế giá trị bằng `NULL` trong trường hợp chúng giống nhau. Điều này có thể hữu ích khi bạn muốn xử lý các trường hợp đặc biệt trong câu lệnh SQL.

---

## SESSION_USER()

**Khái niệm:** `SESSION_USER()` trả về tên người dùng đang thực hiện truy vấn hoặc thực hiện các thao tác trong phiên làm việc hiện tại.

**Ngữ cảnh và cách sử dụng:** Khi bạn cần xác định người dùng đang thực hiện các thao tác trong cơ sở dữ liệu, hoặc muốn kiểm tra thông tin về người dùng đang đăng nhập vào phiên làm việc, `SESSION_USER()` là công cụ hữu ích.

**Ví dụ với lệnh/code và giải thích chi tiết:**

```sql
SELECT SESSION_USER() AS CurrentUser;
```

Trong ví dụ này, `SESSION_USER()` sẽ trả về tên của người dùng đang thực hiện truy vấn trong cơ sở dữ liệu. Kết quả trả về sẽ là tên người dùng hiện tại.

Hàm `SESSION_USER()` thường được sử dụng để xác định người dùng đang thực hiện các hoạt động trong cơ sở dữ liệu hoặc để kiểm tra thông tin về người dùng hiện tại trong các truy vấn SQL. Nó cung cấp thông tin về người dùng hiện tại để quản lý quyền truy cập và an ninh trong hệ thống cơ sở dữ liệu.

---

## USER()

**Khái niệm:** `USER()` trả về tên người dùng đang thực hiện truy vấn hoặc thực hiện các thao tác trong cơ sở dữ liệu.

**Ngữ cảnh và cách sử dụng:** Khi bạn cần xác định người dùng đang thực hiện các thao tác trong cơ sở dữ liệu, hoặc muốn kiểm tra thông tin về người dùng đang thực hiện truy vấn, `USER()` là công cụ hữu ích.

**Ví dụ với lệnh/code và giải thích chi tiết:**

```sql
SELECT USER() AS CurrentUser;
```

Trong ví dụ này, `USER()` sẽ trả về tên của người dùng đang thực hiện truy vấn trong cơ sở dữ liệu. Kết quả trả về sẽ là tên người dùng hiện tại.

Hàm `USER()` thường được sử dụng để xác định người dùng đang thực hiện các hoạt động trong cơ sở dữ liệu hoặc để kiểm tra thông tin về người dùng hiện tại trong các truy vấn SQL. Nó cung cấp thông tin về người dùng hiện tại để quản lý quyền truy cập và an ninh trong hệ thống cơ sở dữ liệu.

---

## VERSION()

**Khái niệm:** `VERSION()` trả về thông tin về phiên bản của hệ thống quản lý cơ sở dữ liệu.

**Ngữ cảnh và cách sử dụng:** Khi bạn cần biết thông tin chi tiết về phiên bản của hệ thống quản lý cơ sở dữ liệu đang được sử dụng, `VERSION()` là một công cụ hữu ích.

**Ví dụ với lệnh/code và giải thích chi tiết:**

```sql
SELECT VERSION() AS DBVersion;
```

Trong ví dụ trên, `VERSION()` sẽ trả về thông tin về phiên bản của hệ thống quản lý cơ sở dữ liệu. Kết quả trả về sẽ là phiên bản của DBMS đang được sử dụng.

Hàm `VERSION()` thường được sử dụng khi cần xác định thông tin chi tiết về phiên bản của hệ thống quản lý cơ sở dữ liệu, đặc biệt khi làm việc với nhiều phiên bản hoặc khi cần kiểm tra tính tương thích của truy vấn với phiên bản cụ thể của DBMS. Điều này giúp trong việc quản lý và điều chỉnh truy vấn hoặc chương trình tương thích với phiên bản cụ thể của hệ thống quản lý cơ sở dữ liệu.

---
