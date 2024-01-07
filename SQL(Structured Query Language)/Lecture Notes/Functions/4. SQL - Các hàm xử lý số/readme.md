## **ABS():** Trả về giá trị tuyệt đối của một số.

Hàm `ABS()` trong SQL được sử dụng để trả về giá trị tuyệt đối của một số. Nó chuyển đổi mọi số âm thành số dương và giữ nguyên các số không âm.

**Ngữ cảnh và khái niệm:**

- `ABS()` rất hữu ích khi bạn cần lấy giá trị tuyệt đối của một số để không cần phải quan tâm đến dấu (+/-).

**Cách sử dụng và ví dụ:**

Cú pháp cơ bản của `ABS()` như sau:

```sql
SELECT ABS(column_name) FROM table_name;
```

Trong đó:

- `column_name` là tên cột chứa các giá trị bạn muốn lấy giá trị tuyệt đối.

Ví dụ, để lấy giá trị tuyệt đối của cột `age` từ bảng `students`:

```sql
SELECT ABS(age) AS absolute_age FROM students;
```

**Giải thích chi tiết:**

- Hàm `ABS()` sẽ lấy giá trị tuyệt đối của mọi số trong cột được chỉ định và trả về kết quả.
- Kết quả của `ABS()` sẽ bao gồm các số không âm, bất kể ban đầu là số dương hay số âm.

Hàm này thường được sử dụng khi bạn cần lấy giá trị tuyệt đối để thực hiện các tính toán, so sánh hoặc hiển thị dữ liệu mà không cần quan tâm đến dấu của số.

---

## **ROUND():** Làm tròn một số đến số chữ số thập phân xác định.

Hàm `ROUND()` trong SQL được sử dụng để làm tròn một số đến số chữ số thập phân xác định.

**Ngữ cảnh và khái niệm:**

- `ROUND()` rất hữu ích khi bạn cần làm tròn một số với độ chính xác cụ thể hoặc giảm số chữ số thập phân.

**Cách sử dụng và ví dụ:**

Cú pháp cơ bản của `ROUND()` như sau:

```sql
SELECT ROUND(column_name, decimal_places) FROM table_name;
```

Trong đó:

- `column_name` là tên cột chứa các giá trị bạn muốn làm tròn.
- `decimal_places` là số chữ số thập phân bạn muốn làm tròn tới.

Ví dụ, để làm tròn cột `price` từ bảng `products` đến hai chữ số thập phân:

```sql
SELECT ROUND(price, 2) AS rounded_price FROM products;
```

**Giải thích chi tiết:**

- Hàm `ROUND()` sẽ làm tròn các giá trị trong cột được chỉ định đến số chữ số thập phân xác định và trả về kết quả.
- Kết quả của `ROUND()` sẽ là các số với số chữ số thập phân đã chỉ định.

Hàm này thường được sử dụng khi bạn cần làm tròn giá trị số để hiển thị hoặc làm việc với dữ liệu với độ chính xác nhất định.

---

## **CEIL() hoặc CEILING():** Làm tròn số lên tới số nguyên gần nhất lớn hơn hoặc bằng số đó.

Hai hàm `CEIL()` và `CEILING()` trong SQL được sử dụng để làm tròn số lên tới số nguyên gần nhất lớn hơn hoặc bằng số đó.

**Ngữ cảnh và khái niệm:**

- Cả hai hàm `CEIL()` và `CEILING()` đều thực hiện cùng một chức năng là làm tròn một số lên tới số nguyên lớn nhất gần nhất.
- Chúng hữu ích khi bạn cần làm tròn một giá trị số lên để làm việc với các giá trị nguyên.

**Cách sử dụng và ví dụ:**

Cú pháp cơ bản của `CEIL()` hoặc `CEILING()` như sau:

```sql
SELECT CEIL(column_name) FROM table_name;
SELECT CEILING(column_name) FROM table_name;
```

Trong đó:

- `column_name` là tên cột chứa các giá trị bạn muốn làm tròn lên.

Ví dụ, để làm tròn cột `price` từ bảng `products` lên đến số nguyên lớn nhất:

```sql
SELECT CEIL(price) AS rounded_price FROM products;
-- hoặc
SELECT CEILING(price) AS rounded_price FROM products;
```

**Giải thích chi tiết:**

- Cả `CEIL()` và `CEILING()` sẽ làm tròn các giá trị trong cột được chỉ định lên tới số nguyên gần nhất lớn hơn hoặc bằng số ban đầu.
- Kết quả trả về sẽ là các số nguyên lớn hơn hoặc bằng số ban đầu.

Hai hàm này thường được sử dụng khi cần làm tròn các giá trị số lên để thực hiện các tính toán hoặc hiển thị dữ liệu theo dạng số nguyên.Bạn có thể sử dụng `CEIL()` hoặc `CEILING()` tùy thuộc vào lựa chọn cá nhân hoặc theo sở thích của bạn vì chúng hoàn toàn tương đương trong việc làm tròn số lên.

---

## **FLOOR():** Làm tròn số xuống tới số nguyên gần nhất nhỏ hơn hoặc bằng số đó.

Hàm `FLOOR()` trong SQL được sử dụng để làm tròn số xuống tới số nguyên gần nhất nhỏ hơn hoặc bằng số đó.

**Ngữ cảnh và khái niệm:**

- `FLOOR()` rất hữu ích khi bạn cần làm tròn một số về số nguyên gần nhất nhỏ hơn hoặc bằng số đó.
- Hàm này thường được sử dụng khi cần làm việc với các giá trị nguyên như chỉ số hoặc số lượng.

**Cách sử dụng và ví dụ:**

Cú pháp cơ bản của `FLOOR()` như sau:

```sql
SELECT FLOOR(column_name) FROM table_name;
```

Trong đó:

- `column_name` là tên cột chứa các giá trị bạn muốn làm tròn xuống.

Ví dụ, để làm tròn cột `temperature` từ bảng `weather_data` xuống tới số nguyên gần nhất:

```sql
SELECT FLOOR(temperature) AS rounded_temperature FROM weather_data;
```

**Giải thích chi tiết:**

- Hàm `FLOOR()` sẽ làm tròn các giá trị trong cột được chỉ định xuống tới số nguyên gần nhất nhỏ hơn hoặc bằng số ban đầu.
- Kết quả trả về sẽ là các số nguyên nhỏ hơn hoặc bằng số ban đầu.

Hàm này thường được sử dụng khi cần làm tròn các giá trị số về phía dưới để thực hiện tính toán hoặc hiển thị dữ liệu theo dạng số nguyên.

---

## **POWER():** Trả về giá trị của một số được nâng lên một lũy thừa.

Hàm `POWER()` trong SQL được sử dụng để tính giá trị của một số được nâng lên một lũy thừa.

**Ngữ cảnh và khái niệm:**

- `POWER()` cho phép bạn tính toán giá trị của một số khi được nhân với chính nó hoặc số khác với một số mũ xác định.
- Hàm này hữu ích khi bạn cần tính toán các giá trị số mũ trong các công thức toán học hoặc tính toán khoa học.

**Cách sử dụng và ví dụ:**

Cú pháp cơ bản của `POWER()` như sau:

```sql
SELECT POWER(base, exponent);
```

Trong đó:

- `base` là số cơ sở (cơ số).
- `exponent` là số mũ.

Ví dụ, để tính giá trị của 2 mũ 3:

```sql
SELECT POWER(2, 3); -- Kết quả: 8 (2^3 = 8)
```

**Giải thích chi tiết:**

- Hàm `POWER()` nhận vào hai đối số: `base` là số cơ sở và `exponent` là số mũ.
- Nó tính toán và trả về giá trị của số `base` được nâng lên số mũ `exponent`.
- Trong ví dụ trên, `POWER(2, 3)` sẽ trả về giá trị là 8, vì 2 mũ 3 là 8.

Hàm `POWER()` thường được sử dụng trong các truy vấn SQL khi cần tính toán các giá trị số mũ hoặc trong các phép toán toán học phức tạp trong cơ sở dữ liệu.

---

## **SQRT():** Trả về căn bậc hai của một số.

Hàm `SQRT()` trong SQL được sử dụng để tính toán căn bậc hai của một số.

**Ngữ cảnh và khái niệm:**

- `SQRT()` cho phép tính toán căn bậc hai của một số dương.
- Đây là một công cụ hữu ích khi cần tính toán giá trị căn bậc hai của một biểu thức số hoặc một cột chứa các giá trị số.

**Cách sử dụng và ví dụ:**

Cú pháp cơ bản của `SQRT()` như sau:

```sql
SELECT SQRT(number);
```

Trong đó:

- `number` là giá trị số dương bạn muốn tính căn bậc hai.

Ví dụ, để tính căn bậc hai của số 25:

```sql
SELECT SQRT(25); -- Kết quả: 5
```

**Giải thích chi tiết:**

- Hàm `SQRT()` nhận vào một đối số là `number`, là số dương cần tính căn bậc hai.
- Nó tính toán và trả về giá trị căn bậc hai của `number`.
- Trong ví dụ trên, `SQRT(25)` trả về giá trị là 5 vì căn bậc hai của 25 là 5.

Hàm `SQRT()` thường được sử dụng khi cần tính toán các giá trị căn bậc hai, ví dụ như trong tính toán khoa học hoặc trong các phép toán toán học phức tạp trong cơ sở dữ liệu. Lưu ý rằng hàm này chỉ hoạt động với các giá trị số dương.

---

## **MOD():** Trả về phần dư của phép chia giữa hai số.

Hàm `MOD()` trong SQL được sử dụng để tính phần dư của phép chia giữa hai số.

**Ngữ cảnh và khái niệm:**

- `MOD()` cho phép bạn lấy phần dư khi chia một số cho một số khác.
- Đây là một công cụ hữu ích khi bạn cần xác định phần dư sau khi thực hiện phép chia.

**Cách sử dụng và ví dụ:**

Cú pháp cơ bản của `MOD()` như sau:

```sql
SELECT MOD(dividend, divisor);
```

Trong đó:

- `dividend` là số bị chia.
- `divisor` là số chia.

Ví dụ, để tính phần dư của 17 khi chia cho 5:

```sql
SELECT MOD(17, 5); -- Kết quả: 2 (phần dư của 17 khi chia cho 5 là 2)
```

**Giải thích chi tiết:**

- Hàm `MOD()` nhận vào hai đối số: `dividend` là số bị chia và `divisor` là số chia.
- Nó thực hiện phép chia `dividend` cho `divisor` và trả về phần dư của phép chia.
- Trong ví dụ trên, `MOD(17, 5)` trả về giá trị là 2 vì phần dư của 17 khi chia cho 5 là 2.

Hàm `MOD()` thường được sử dụng trong các truy vấn SQL khi cần tính toán phần dư của một phép chia. Điều quan trọng cần nhớ là không thể chia cho số 0 vì điều này sẽ gây ra lỗi.

---

## **RAND():** Trả về một số ngẫu nhiên từ 0 đến 1.

Hàm `RAND()` trong SQL được sử dụng để tạo ra một số ngẫu nhiên trong phạm vi từ 0 đến 1.

**Ngữ cảnh và khái niệm:**

- `RAND()` tạo ra một giá trị ngẫu nhiên từ 0 đến 1.
- Đây là một công cụ hữu ích khi bạn cần tạo ra giá trị ngẫu nhiên trong các truy vấn SQL.

**Cách sử dụng và ví dụ:**

Cú pháp cơ bản của `RAND()` như sau:

```sql
SELECT RAND();
```

Ví dụ, để tạo ra một giá trị ngẫu nhiên:

```sql
SELECT RAND(); -- Kết quả: giá trị ngẫu nhiên từ 0 đến 1
```

**Giải thích chi tiết:**

- Hàm `RAND()` không nhận bất kỳ đối số nào.
- Khi được gọi, nó tạo ra và trả về một giá trị ngẫu nhiên từ 0 đến 1.
- Mỗi lần gọi hàm `RAND()`, nó sẽ tạo ra một giá trị ngẫu nhiên mới trong phạm vi từ 0 đến 1.

Hàm `RAND()` thường được sử dụng khi bạn cần tạo ra các giá trị ngẫu nhiên để sử dụng trong các truy vấn SQL, chẳng hạn như khi bạn muốn chèn dữ liệu ngẫu nhiên vào trong bảng hoặc thực hiện các thử nghiệm.

---

## **LOG():** Trả về logarithm cơ số tự nhiên của một số.

Hàm `LOG()` trong SQL được sử dụng để tính logarithm tự nhiên của một số.

**Ngữ cảnh và khái niệm:**

- `LOG()` tính toán logarithm cơ số tự nhiên (logarithm cơ số e, hay còn gọi là logarithm tự nhiên) của một số.
- Đây là một công cụ hữu ích khi bạn cần tính toán logarithm tự nhiên trong cơ sở dữ liệu.

**Cách sử dụng và ví dụ:**

Cú pháp cơ bản của `LOG()` như sau:

```sql
SELECT LOG(number);
```

Trong đó:

- `number` là số mà bạn muốn tính logarithm tự nhiên.

Ví dụ, để tính logarithm tự nhiên của số 10:

```sql
SELECT LOG(10); -- Kết quả: khoảng 2.30259 (logarithm tự nhiên của 10)
```

**Giải thích chi tiết:**

- Hàm `LOG()` nhận một đối số là `number`, là số mà bạn muốn tính logarithm tự nhiên.
- Nó tính toán và trả về giá trị logarithm tự nhiên của `number` với cơ số tự nhiên (thường là cơ số e, khoảng 2.71828).
- Trong ví dụ trên, `LOG(10)` trả về giá trị khoảng 2.30259, là logarithm tự nhiên của số 10 với cơ số tự nhiên.

Hàm `LOG()` thường được sử dụng khi cần tính toán logarithm tự nhiên trong các truy vấn SQL, đặc biệt là trong các tính toán khoa học hoặc khi xử lý dữ liệu liên quan đến logarithm.

---

## **SIGN():** Trả về dấu của một số (-1 nếu số âm, 0 nếu số bằng 0, 1 nếu số dương).

Hàm `SIGN()` trong SQL được sử dụng để trả về dấu của một số theo quy ước: -1 nếu số âm, 0 nếu số bằng 0, và 1 nếu số dương.

**Ngữ cảnh và khái niệm:**

- `SIGN()` trả về giá trị số nguyên cho biết dấu của một số.
- Đây là một công cụ hữu ích khi bạn cần biết về dấu của một số trong quá trình tính toán hoặc kiểm tra dữ liệu.

**Cách sử dụng và ví dụ:**

Cú pháp cơ bản của `SIGN()` như sau:

```sql
SELECT SIGN(number);
```

Trong đó:

- `number` là số mà bạn muốn kiểm tra dấu.

Ví dụ, để kiểm tra dấu của một số nhất định:

```sql
SELECT SIGN(-10); -- Kết quả: -1 (vì số -10 là số âm)
SELECT SIGN(0); -- Kết quả: 0 (vì số 0 là số không âm không dương)
SELECT SIGN(7); -- Kết quả: 1 (vì số 7 là số dương)
```

**Giải thích chi tiết:**

- Hàm `SIGN()` nhận một đối số là `number`, là số mà bạn muốn kiểm tra dấu.
- Khi gọi hàm `SIGN()`, nó sẽ trả về -1 nếu số là số âm, 0 nếu số bằng 0 và 1 nếu số là số dương.
- Trong ví dụ trên, `SIGN(-10)` trả về -1 vì số -10 là số âm, `SIGN(0)` trả về 0 vì số 0 là số không âm không dương, và `SIGN(7)` trả về 1 vì số 7 là số dương.

Hàm `SIGN()` thường được sử dụng khi cần xác định dấu của một số trong các truy vấn SQL, đặc biệt khi cần kiểm tra và xử lý dữ liệu theo dấu của số.

---

## **PI():** Trả về giá trị xấp xỉ của π (pi).

Hàm `PI()` trong SQL được sử dụng để trả về giá trị xấp xỉ của π (pi).

**Ngữ cảnh và khái niệm:**

- `PI()` trả về một xấp xỉ gần đúng của giá trị số π, tức là 3.141592653589793.
- Đây là một hằng số toán học quan trọng và được sử dụng rộng rãi trong các tính toán và công thức toán học.

**Cách sử dụng và ví dụ:**

Cú pháp cơ bản của `PI()` như sau:

```sql
SELECT PI();
```

Ví dụ, để trả về giá trị của π:

```sql
SELECT PI(); -- Kết quả: khoảng 3.14159
```

**Giải thích chi tiết:**

- Hàm `PI()` không cần bất kỳ đối số nào.
- Khi được gọi, nó trả về giá trị xấp xỉ của π, thường là 3.141592653589793.
- Kết quả trả về của `PI()` được sử dụng trong các tính toán toán học và công thức liên quan đến hình học và các lĩnh vực khác của toán học.

Hàm `PI()` là một trong những hằng số toán học cơ bản và quan trọng được cung cấp sẵn trong SQL, giúp cho việc tính toán và xử lý dữ liệu liên quan đến giá trị π trở nên thuận tiện hơn.

---

## **TRUNCATE():** Cắt số thập phân của một số về số nguyên.

Hàm `TRUNCATE()` trong SQL được sử dụng để cắt bỏ số thập phân của một số, giữ lại chỉ phần số nguyên.

**Ngữ cảnh và khái niệm:**

- `TRUNCATE()` chuyển đổi một số thực thành một số nguyên bằng cách loại bỏ phần thập phân, không làm tròn giá trị mà chỉ cắt bỏ phần thập phân.
- Đây là một công cụ hữu ích khi bạn cần làm việc chỉ với phần nguyên của một số mà không quan tâm đến phần thập phân.

**Cách sử dụng và ví dụ:**

Cú pháp cơ bản của `TRUNCATE()` như sau:

```sql
SELECT TRUNCATE(number, decimals);
```

Trong đó:

- `number` là số bạn muốn cắt bỏ phần thập phân.
- `decimals` là số lượng chữ số thập phân bạn muốn giữ lại (tức là số thập phân sau dấu chấm).

Ví dụ, để cắt bỏ phần thập phân của số 7.896 đến 2 chữ số thập phân:

```sql
SELECT TRUNCATE(7.896, 2); -- Kết quả: 7.89
```

**Giải thích chi tiết:**

- Hàm `TRUNCATE()` nhận hai đối số: `number` là số cần xử lý và `decimals` là số chữ số thập phân bạn muốn giữ lại.
- Nó cắt bỏ phần thập phân của `number` theo `decimals` đã chỉ định mà không làm tròn giá trị.
- Trong ví dụ trên, `TRUNCATE(7.896, 2)` trả về 7.89 bằng cách giữ lại hai chữ số thập phân sau dấu chấm từ số 7.896.

Hàm `TRUNCATE()` hữu ích khi bạn cần làm việc với số nguyên hoặc khi chỉ quan tâm đến phần nguyên của một số thực trong các thao tác tính toán.

---

## **EXP():** Trả về giá trị của e nâng lên một số.

Hàm `EXP()` trong SQL được sử dụng để tính giá trị của e (cơ số của logarithm tự nhiên) mũ một số xác định.

**Ngữ cảnh và khái niệm:**

- `EXP()` tính giá trị của e mũ một số đã cho, trong đó e là số Euler (khoảng 2.71828).
- Đây là một trong những hàm toán học cơ bản trong SQL, thường được sử dụng trong các tính toán liên quan đến mũ và công thức toán học phức tạp.

**Cách sử dụng và ví dụ:**

Cú pháp cơ bản của `EXP()` như sau:

```sql
SELECT EXP(number);
```

Trong đó:

- `number` là số mũ bạn muốn tính giá trị của e mũ với số mũ đó.

Ví dụ, để tính giá trị của e mũ 2:

```sql
SELECT EXP(2); -- Kết quả: khoảng 7.38906
```

**Giải thích chi tiết:**

- Hàm `EXP()` nhận một đối số là `number`, số mũ bạn muốn sử dụng để tính giá trị của e mũ với số mũ đó.
- Khi gọi hàm `EXP()`, nó tính toán và trả về giá trị của e mũ với số mũ đã cho.
- Trong ví dụ trên, `EXP(2)` trả về giá trị khoảng 7.38906, là giá trị của e mũ 2.

Hàm `EXP()` thường được sử dụng trong các truy vấn SQL khi cần tính toán các giá trị mũ trong các công thức toán học hoặc trong các tính toán liên quan đến xác suất, thống kê, và các lĩnh vực khoa học khác.

---

## **LOG10():** Trả về logarithm cơ số 10 của một số.

Hàm `LOG10()` trong SQL được sử dụng để tính logarithm cơ số 10 của một số.

**Ngữ cảnh và khái niệm:**

- `LOG10()` tính toán giá trị logarithm cơ số 10 của một số đã cho.
- Logarithm cơ số 10 là logarithm được tính dựa trên cơ số 10. Logarithm cơ số 10 của một số x là số mũ mà 10 cần được nhân với bao nhiêu lần để có được x.
- Đây là một trong những hàm toán học cơ bản trong SQL, thường được sử dụng trong các tính toán liên quan đến logarithm.

**Cách sử dụng và ví dụ:**

Cú pháp cơ bản của `LOG10()` như sau:

```sql
SELECT LOG10(number);
```

Trong đó:

- `number` là số mà bạn muốn tính logarithm cơ số 10.

Ví dụ, để tính logarithm cơ số 10 của số 1000:

```sql
SELECT LOG10(1000); -- Kết quả: 3
```

**Giải thích chi tiết:**

- Hàm `LOG10()` nhận một đối số là `number`, là số mà bạn muốn tính logarithm cơ số 10.
- Khi gọi hàm `LOG10()`, nó tính toán và trả về giá trị của logarithm cơ số 10 của `number`.
- Trong ví dụ trên, `LOG10(1000)` trả về 3, vì logarithm cơ số 10 của 1000 là 3 (vì \(10^3 = 1000\)).

Hàm `LOG10()` thường được sử dụng trong các truy vấn SQL khi cần tính toán logarithm theo cơ số 10, đặc biệt trong các báo cáo, phân tích dữ liệu, và các tính toán khoa học.

---

## **GREATEST() hoặc LEAST():** Trả về giá trị lớn nhất hoặc nhỏ nhất từ danh sách các giá trị.

Cả hai hàm `GREATEST()` và `LEAST()` trong SQL được sử dụng để tìm giá trị lớn nhất hoặc nhỏ nhất trong danh sách các giá trị.

**Ngữ cảnh và khái niệm:**

- `GREATEST()` trả về giá trị lớn nhất từ danh sách các giá trị đưa vào.
- `LEAST()` trả về giá trị nhỏ nhất từ danh sách các giá trị đưa vào.
- Đây là những hàm hữu ích khi bạn cần so sánh và lựa chọn giá trị lớn nhất hoặc nhỏ nhất từ một nhóm các giá trị.

**Cách sử dụng và ví dụ:**

Cú pháp cơ bản của `GREATEST()` và `LEAST()` như sau:

```sql
SELECT GREATEST(value1, value2, ...);
SELECT LEAST(value1, value2, ...);
```

Trong đó:

- `value1`, `value2`,... là danh sách các giá trị bạn muốn so sánh để tìm giá trị lớn nhất hoặc nhỏ nhất.

Ví dụ, để tìm giá trị lớn nhất và nhỏ nhất từ một danh sách các số:

```sql
SELECT GREATEST(10, 5, 8, 15, 3); -- Kết quả: 15
SELECT LEAST(10, 5, 8, 15, 3); -- Kết quả: 3
```

**Giải thích chi tiết:**

- Hàm `GREATEST()` và `LEAST()` nhận danh sách các giá trị và trả về giá trị lớn nhất hoặc nhỏ nhất trong danh sách đó.
- Trong ví dụ trên, `GREATEST(10, 5, 8, 15, 3)` trả về 15 (lớn nhất từ danh sách các số), và `LEAST(10, 5, 8, 15, 3)` trả về 3 (nhỏ nhất từ danh sách các số).

Cả `GREATEST()` và `LEAST()` thường được sử dụng trong SQL khi cần so sánh và chọn ra giá trị lớn nhất hoặc nhỏ nhất từ một tập hợp các giá trị, đặc biệt trong các truy vấn SQL phức tạp hoặc trong việc xử lý dữ liệu.

---
