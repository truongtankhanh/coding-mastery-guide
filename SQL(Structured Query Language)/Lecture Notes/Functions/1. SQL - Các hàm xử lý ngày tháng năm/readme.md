## **1. CURDATE():** Trả về ngày hiện tại.

**Khái niệm:**

`CURDATE()` là một hàm trong SQL dùng để trả về ngày hiện tại từ hệ thống cơ sở dữ liệu. Hàm này trả về giá trị ngày dưới định dạng 'YYYY-MM-DD'.

**Ngữ cảnh:**

Thường được sử dụng khi bạn muốn lấy ngày hiện tại trong các truy vấn SQL mà không cần lấy cả thời gian.

**Cách sử dụng:**

Hãy xem ví dụ về cách sử dụng `CURDATE()` trong SQL:

```sql
SELECT CURDATE();
```

Khi bạn thực hiện truy vấn này, nó sẽ trả về kết quả là ngày hiện tại dưới định dạng 'YYYY-MM-DD'. Ví dụ, nếu ngày hiện tại là ngày 5 tháng 1 năm 2024, kết quả trả về sẽ là `'2024-01-05'`.

**Giải thích chi tiết:**

Hàm `CURDATE()` rất hữu ích khi bạn cần lấy thông tin về ngày hiện tại trong cơ sở dữ liệu mà không quan tâm đến thông tin thời gian. Ví dụ, trong việc lưu trữ thông tin về ngày sinh trong một bảng dữ liệu về người dùng, bạn có thể sử dụng `CURDATE()` để tự động điền ngày hiện tại khi người dùng được tạo.

```sql
INSERT INTO users (username, birthdate, created_at)
VALUES ('example_user', '1990-01-01', CURDATE());
```

Trong ví dụ trên, `CURDATE()` sẽ tự động điền ngày hiện tại vào cột `created_at` khi một bản ghi mới về người dùng được thêm vào. Điều này giúp bạn ghi nhận thông tin về thời gian mà không cần quan tâm đến thời gian cụ thể trong ngày.

---

## **2. NOW() hoặc CURRENT_TIMESTAMP():** Trả về ngày và giờ hiện tại.

**Khái niệm:**

`NOW()` hoặc `CURRENT_TIMESTAMP()` là hàm trong SQL được sử dụng để trả về thời gian hiện tại, bao gồm cả ngày và giờ. Kết quả trả về dưới dạng 'YYYY-MM-DD HH:MM:SS'.

**Ngữ cảnh:**

Thường được sử dụng khi bạn muốn ghi hoặc cập nhật thông tin về thời gian hiện tại khi thực hiện các thao tác insert hoặc update trong cơ sở dữ liệu.

**Cách sử dụng:**

Ví dụ về cách sử dụng `NOW()` hoặc `CURRENT_TIMESTAMP()` trong SQL:

```sql
INSERT INTO logs (event, timestamp) VALUES ('User login', NOW());
```

Khi bạn thực hiện truy vấn này, nó sẽ thêm một bản ghi mới vào bảng `logs` với thông tin về sự kiện là 'User login' và thời gian hiện tại của việc thực hiện truy vấn.

**Giải thích chi tiết:**

Hàm `NOW()` hoặc `CURRENT_TIMESTAMP()` rất hữu ích khi bạn cần ghi lại thời gian hiện tại khi có sự kiện xảy ra trong cơ sở dữ liệu. Ví dụ, khi người dùng đăng nhập vào hệ thống, bạn có thể ghi lại thời gian đó bằng cách sử dụng hàm này.

```sql
UPDATE users SET last_login = NOW() WHERE username = 'example_user';
```

Trong trường hợp này, cột `last_login` sẽ được cập nhật với thời gian hiện tại khi người dùng có tên là 'example_user' đăng nhập vào hệ thống. Điều này giúp bạn theo dõi và quản lý hoạt động của người dùng dựa trên thời gian thực hiện các hoạt động.

---

## **3. DATE():** Trích xuất phần ngày từ một giá trị datetime.

**Khái niệm:**

Hàm `DATE()` trong SQL được sử dụng để trích xuất phần ngày từ một giá trị datetime. Nó chuyển đổi giá trị datetime thành một giá trị chỉ chứa thông tin về ngày, loại bỏ thông tin về thời gian.

**Ngữ cảnh:**

Thường được sử dụng khi bạn muốn làm việc với thông tin ngày tháng mà không quan trọng đến thông tin thời gian. Điều này có thể hữu ích trong việc so sánh ngày, nhóm dữ liệu theo ngày hoặc lọc dữ liệu dựa trên ngày cụ thể.

**Cách sử dụng:**

Ví dụ về cách sử dụng `DATE()` trong SQL:

```sql
SELECT DATE('2024-01-05 15:30:00');
```

Khi bạn thực hiện truy vấn này, nó sẽ trả về kết quả là ngày từ giá trị datetime được cung cấp, trong trường hợp này là '2024-01-05'.

**Giải thích chi tiết:**

Hàm `DATE()` trong SQL rất hữu ích khi bạn cần làm việc với ngày tháng mà không quan trọng đến thông tin thời gian. Ví dụ, trong trường hợp bạn muốn lấy ngày tháng của việc tạo bản ghi trong bảng logs:

```sql
SELECT DATE(timestamp) AS log_date FROM logs;
```

Trong trường hợp này, `DATE(timestamp)` sẽ trích xuất chỉ thông tin ngày từ cột `timestamp`, cho phép bạn nhận được danh sách các ngày mà các bản ghi được tạo ra mà không cần quan tâm đến thông tin về thời gian. Điều này có thể giúp bạn nhóm hoặc lọc dữ liệu theo ngày một cách dễ dàng hơn.

---

## **4. EXTRACT():** Trích xuất một phần cụ thể của ngày, ví dụ như YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, vv.

Hàm `EXTRACT()` trong SQL được sử dụng để trích xuất một phần cụ thể của ngày từ một giá trị datetime, như năm, tháng, ngày, giờ, phút, giây hoặc các phần khác của ngày tháng.

**Ngữ cảnh và khái niệm:**

Hàm này thường được sử dụng khi bạn muốn lấy ra một phần cụ thể của ngày tháng từ một giá trị datetime, ví dụ như lấy ra năm, tháng hoặc ngày từ một ngày đã cho.

**Cách sử dụng:**

Dưới đây là một số ví dụ về cách sử dụng `EXTRACT()` trong SQL:

1. **Trích xuất năm từ một ngày:**

   ```sql
   SELECT EXTRACT(YEAR FROM '2024-01-05');
   ```

   Kết quả sẽ trả về năm từ ngày '2024-01-05', trong trường hợp này là '2024'.

2. **Trích xuất tháng từ một ngày:**

   ```sql
   SELECT EXTRACT(MONTH FROM '2024-01-05');
   ```

   Kết quả sẽ trả về tháng từ ngày '2024-01-05', trong trường hợp này là '1'.

3. **Trích xuất ngày từ một ngày:**

   ```sql
   SELECT EXTRACT(DAY FROM '2024-01-05');
   ```

   Kết quả sẽ trả về ngày từ ngày '2024-01-05', trong trường hợp này là '5'.

4. **Trích xuất giờ từ một giá trị datetime:**

   ```sql
   SELECT EXTRACT(HOUR FROM '2024-01-05 15:30:00');
   ```

   Kết quả sẽ trả về giờ từ datetime '2024-01-05 15:30:00', trong trường hợp này là '15'.

5. **Trích xuất phút từ một giá trị datetime:**

   ```sql
   SELECT EXTRACT(MINUTE FROM '2024-01-05 15:30:00');
   ```

   Kết quả sẽ trả về phút từ datetime '2024-01-05 15:30:00', trong trường hợp này là '30'.

6. **Trích xuất giây từ một giá trị datetime:**
   ```sql
   SELECT EXTRACT(SECOND FROM '2024-01-05 15:30:45');
   ```
   Kết quả sẽ trả về giây từ datetime '2024-01-05 15:30:45', trong trường hợp này là '45'.

**Giải thích chi tiết:**

Hàm `EXTRACT()` rất hữu ích khi bạn cần trích xuất thông tin cụ thể từ một giá trị datetime như năm, tháng, ngày, giờ, phút, giây. Việc này giúp bạn thực hiện các phân tích dữ liệu, thống kê hoặc nhóm dữ liệu theo các thành phần khác nhau của ngày tháng một cách linh hoạt.

---

## **5. DATE_ADD() và DATE_SUB():** Thêm hoặc bớt một số ngày, tháng hoặc năm từ một giá trị ngày đã cho.

**Khái niệm:**

`DATE_ADD()` và `DATE_SUB()` là hai hàm trong SQL được sử dụng để thêm hoặc bớt một số ngày, tháng hoặc năm từ một giá trị ngày đã cho.

**Ngữ cảnh:**

Các hàm này hữu ích khi bạn cần thay đổi giá trị ngày tháng bằng cách thêm hoặc bớt một khoảng thời gian cụ thể, chẳng hạn như thêm một tuần, bớt một tháng, v.v.

**Cách sử dụng:**

Dưới đây là các ví dụ về cách sử dụng `DATE_ADD()` và `DATE_SUB()` trong SQL:

1. **Thêm một số ngày vào một giá trị ngày đã cho:**

   ```sql
   SELECT DATE_ADD('2024-01-05', INTERVAL 7 DAY);
   ```

   Kết quả sẽ trả về ngày sau khi thêm 7 ngày vào ngày '2024-01-05', tức là '2024-01-12'.

2. **Bớt một số tháng từ một giá trị ngày:**

   ```sql
   SELECT DATE_SUB('2024-01-05', INTERVAL 1 MONTH);
   ```

   Kết quả sẽ trả về ngày sau khi bớt 1 tháng từ ngày '2024-01-05', tức là '2023-12-05'.

3. **Thêm một số năm vào một giá trị ngày đã cho:**
   ```sql
   SELECT DATE_ADD('2024-01-05', INTERVAL 3 YEAR);
   ```
   Kết quả sẽ trả về ngày sau khi thêm 3 năm vào ngày '2024-01-05', tức là '2027-01-05'.

**Giải thích chi tiết:**

`DATE_ADD()` và `DATE_SUB()` cung cấp khả năng thêm hoặc bớt một khoảng thời gian cụ thể từ một giá trị ngày tháng đã cho. Bạn có thể thay đổi giá trị ngày tháng dễ dàng hơn bằng cách chỉ định khoảng thời gian (ngày, tháng, năm) cần thay đổi và hàm sẽ trả về giá trị mới sau khi thực hiện thay đổi đó. Điều này hữu ích khi bạn cần tính toán thời gian trong các truy vấn SQL hoặc cần điều chỉnh các giá trị ngày tháng trong cơ sở dữ liệu.

---

## **6. DATEDIFF():** Tính số ngày giữa hai ngày.

**Khái niệm:**

`DATEDIFF()` là một hàm trong SQL được sử dụng để tính toán số ngày giữa hai giá trị ngày.

**Ngữ cảnh:**

Hàm này thường được sử dụng khi bạn cần biết khoảng cách thời gian giữa hai ngày, ví dụ như số ngày giữa ngày tạo và ngày cập nhật trong cơ sở dữ liệu.

**Cách sử dụng:**

Dưới đây là ví dụ về cách sử dụng `DATEDIFF()` trong SQL:

```sql
SELECT DATEDIFF('2024-01-10', '2024-01-05');
```

Khi bạn thực hiện truy vấn này, nó sẽ trả về số ngày giữa hai ngày '2024-01-10' và '2024-01-05', tức là '5'.

**Giải thích chi tiết:**

Hàm `DATEDIFF()` tính số ngày giữa hai giá trị ngày tháng. Trong ví dụ trên, nó trả về kết quả là 5 ngày, đại diện cho khoảng cách giữa ngày '2024-01-10' và ngày '2024-01-05'.

Điều này có thể hữu ích khi bạn cần tính toán hoặc hiển thị thông tin về khoảng cách thời gian giữa các sự kiện hoặc ngày tháng trong cơ sở dữ liệu. Ví dụ, bạn có thể sử dụng `DATEDIFF()` để kiểm tra xem một bản ghi đã được tạo từ bao lâu trong quá khứ hoặc tính toán thời gian giữa ngày hiện tại và một sự kiện xảy ra.

---

## **7. DATE_FORMAT():** Định dạng một giá trị ngày tháng theo định dạng mong muốn.

**Khái niệm:**

`DATE_FORMAT()` là một hàm trong SQL được sử dụng để định dạng một giá trị ngày tháng theo định dạng mong muốn.

**Ngữ cảnh:**

Hàm này thường được sử dụng khi bạn muốn hiển thị hoặc xuất dữ liệu ngày tháng dưới dạng chuỗi theo định dạng cụ thể, chẳng hạn như định dạng ngày/tháng/năm hoặc tháng/ngày/năm.

**Cách sử dụng:**

Dưới đây là ví dụ về cách sử dụng `DATE_FORMAT()` trong SQL:

```sql
SELECT DATE_FORMAT('2024-01-05', '%d/%m/%Y');
```

Kết quả sẽ trả về ngày '2024-01-05' dưới dạng chuỗi có định dạng '05/01/2024' theo định dạng '%d/%m/%Y'.

**Giải thích chi tiết:**

Hàm `DATE_FORMAT()` cho phép bạn chuyển đổi giá trị ngày tháng thành chuỗi với định dạng tùy chỉnh. Trong ví dụ trên, giá trị ngày '2024-01-05' được chuyển đổi thành chuỗi có định dạng '05/01/2024'.

Để thực hiện điều này, bạn cung cấp một chuỗi định dạng đặc biệt trong hàm `DATE_FORMAT()`. Ví dụ, '%d' đại diện cho ngày, '%m' đại diện cho tháng và '%Y' đại diện cho năm. Bằng cách kết hợp các ký tự này với dấu phân cách mong muốn (như '/', '-') và xác định vị trí của từng phần trong ngày tháng, bạn có thể định dạng ngày tháng theo cách bạn mong muốn.

Hàm `DATE_FORMAT()` thường được sử dụng để hiển thị thông tin ngày tháng theo định dạng mà người dùng mong muốn hoặc để xuất dữ liệu ngày tháng dưới dạng chuỗi theo định dạng cụ thể khi truy vấn cơ sở dữ liệu.

---

## **8. DAY(), MONTH(), YEAR():** Trả về phần ngày, tháng, hoặc năm từ một giá trị ngày tháng.

**Khái niệm:**

`DAY()`, `MONTH()`, và `YEAR()` là các hàm trong SQL được sử dụng để trích xuất các phần cụ thể của ngày tháng từ một giá trị datetime.

**Ngữ cảnh:**

Các hàm này thường được sử dụng khi bạn cần lấy thông tin cụ thể về ngày, tháng hoặc năm từ một giá trị datetime để sử dụng trong tính toán hoặc hiển thị.

**Cách sử dụng:**

Dưới đây là ví dụ về cách sử dụng `DAY()`, `MONTH()`, và `YEAR()` trong SQL:

```sql
SELECT DAY('2024-01-05') AS ngay, MONTH('2024-01-05') AS thang, YEAR('2024-01-05') AS nam;
```

Kết quả sẽ trả về ngày, tháng và năm từ giá trị datetime '2024-01-05', tương ứng là ngày 5, tháng 1 và năm 2024.

**Giải thích chi tiết:**

- Hàm `DAY()` trả về phần ngày từ một giá trị ngày tháng.
- Hàm `MONTH()` trả về phần tháng từ một giá trị ngày tháng.
- Hàm `YEAR()` trả về phần năm từ một giá trị ngày tháng.

Trong ví dụ trên, các hàm này được áp dụng cho giá trị datetime '2024-01-05', trích xuất các phần cụ thể của ngày, tháng và năm từ giá trị này và trả về kết quả tương ứng.

Các hàm `DAY()`, `MONTH()`, và `YEAR()` thường được sử dụng khi bạn cần lấy thông tin cụ thể về ngày, tháng hoặc năm từ một giá trị datetime để sử dụng trong các tính toán hoặc hiển thị thông tin ngày tháng trong cơ sở dữ liệu.

---

## **9. WEEKDAY():** Trả về số thứ tự của ngày trong tuần (0 cho thứ hai, 1 cho thứ ba, v.v.).

Hàm `WEEKDAY()` trong SQL được sử dụng để trả về số thứ tự của ngày trong tuần, bắt đầu từ thứ Hai (0 cho thứ Hai, 1 cho thứ Ba, và cứ tiếp tục như vậy).

**Ngữ cảnh và khái niệm:**

Hàm này thường được sử dụng khi bạn muốn biết ngày đó trong tuần là thứ mấy, giúp xác định thông tin ngày tháng trong bối cảnh của tuần làm việc.

**Cách sử dụng:**

Dưới đây là một ví dụ về cách sử dụng `WEEKDAY()` trong SQL:

```sql
SELECT WEEKDAY('2024-01-05');
```

Kết quả sẽ trả về số thứ tự của ngày '2024-01-05' trong tuần. Ví dụ, nếu '2024-01-05' là thứ Hai, kết quả sẽ là 0.

**Giải thích chi tiết:**

Hàm `WEEKDAY()` trả về số thứ tự của ngày trong tuần. Điều này hữu ích khi bạn cần phân loại hoặc xử lý dữ liệu dựa trên ngày trong tuần, ví dụ như xác định ngày làm việc hay ngày nghỉ, thực hiện các tính toán dựa trên ngày trong tuần.

Ví dụ, trong các ứng dụng lịch hoặc quản lý thời gian, việc biết được ngày nằm ở vị trí thứ mấy trong tuần giúp trong việc xác định và tổ chức các sự kiện hoặc nhiệm vụ theo các ngày cụ thể trong tuần.

---

## **10. TIMESTAMPADD() và TIMESTAMPDIFF():** Thêm hoặc trừ một khoảng thời gian từ một ngày tháng, và tính toán sự khác biệt giữa hai giá trị datetime.

`TIMESTAMPADD()` và `TIMESTAMPDIFF()` là hai hàm trong SQL được sử dụng để thao tác với ngày tháng và tính toán sự khác biệt giữa hai giá trị datetime.

**`TIMESTAMPADD()` - Thêm hoặc trừ một khoảng thời gian từ một ngày tháng:**

Hàm `TIMESTAMPADD()` cho phép bạn thêm hoặc trừ một khoảng thời gian nhất định (ngày, tháng, năm, giờ, phút, giây) từ một giá trị datetime.

Ví dụ sử dụng `TIMESTAMPADD()` để thêm 7 ngày vào ngày '2024-01-05':

```sql
SELECT TIMESTAMPADD(DAY, 7, '2024-01-05');
```

Kết quả sẽ trả về giá trị datetime sau khi thêm 7 ngày vào ngày '2024-01-05'.

**`TIMESTAMPDIFF()` - Tính toán sự khác biệt giữa hai giá trị datetime:**

Hàm `TIMESTAMPDIFF()` tính toán số lượng đơn vị (ngày, tháng, năm, giờ, phút, giây) giữa hai giá trị datetime.

Ví dụ tính toán sự khác biệt (tính bằng ngày) giữa '2024-01-10' và '2024-01-05':

```sql
SELECT TIMESTAMPDIFF(DAY, '2024-01-05', '2024-01-10');
```

Kết quả sẽ trả về số ngày giữa hai giá trị datetime.

**Giải thích chi tiết:**

- `TIMESTAMPADD()` cho phép bạn thay đổi một giá trị datetime bằng cách thêm hoặc trừ một khoảng thời gian cụ thể.
- `TIMESTAMPDIFF()` giúp bạn tính toán sự khác biệt giữa hai giá trị datetime, được đo bằng số lượng đơn vị thời gian nhất định (ngày, tháng, năm, v.v.).

Cả hai hàm đều hữu ích khi bạn cần thực hiện các tính toán liên quan đến thời gian trong SQL, như tính toán khoảng cách thời gian giữa hai sự kiện, điều chỉnh thời gian, hoặc tính toán thời gian dựa trên một số lượng đơn vị cụ thể.

---

## **11. DAYOFMONTH():** Trả về ngày trong tháng từ một giá trị ngày.

Hàm `DAYOFMONTH()` trong SQL được sử dụng để trích xuất ngày từ một giá trị ngày tháng và trả về giá trị ngày trong tháng đó.

**Ngữ cảnh và khái niệm:**

Khi bạn cần lấy thông tin cụ thể về ngày trong tháng từ một giá trị ngày tháng, hàm `DAYOFMONTH()` sẽ trả về giá trị ngày (từ 1 đến 31) từ giá trị ngày tháng đã cho.

**Cách sử dụng:**

Dưới đây là ví dụ về cách sử dụng `DAYOFMONTH()` trong SQL:

```sql
SELECT DAYOFMONTH('2024-01-05');
```

Kết quả sẽ trả về số ngày trong tháng từ giá trị ngày '2024-01-05', tức là 5.

**Giải thích chi tiết:**

Hàm `DAYOFMONTH()` trích xuất và trả về giá trị ngày trong tháng từ một giá trị ngày tháng cụ thể. Trong ví dụ trên, khi áp dụng hàm cho ngày '2024-01-05', nó trả về số 5, đại diện cho ngày thứ 5 trong tháng.

Hàm này hữu ích khi bạn cần biết ngày cụ thể trong một tháng nào đó hoặc khi bạn muốn trích xuất thông tin về ngày từ một ngày tháng trong cơ sở dữ liệu.

---

## **12. LAST_DAY():** Trả về ngày cuối cùng trong tháng của một ngày được chỉ định.

Hàm `LAST_DAY()` trong SQL được sử dụng để trả về ngày cuối cùng trong tháng của một ngày được chỉ định.

**Ngữ cảnh và khái niệm:**

Khi bạn muốn xác định ngày cuối cùng trong tháng từ một ngày cụ thể, hàm `LAST_DAY()` sẽ trả về ngày cuối cùng của tháng đó.

**Cách sử dụng:**

Dưới đây là ví dụ về cách sử dụng `LAST_DAY()` trong SQL:

```sql
SELECT LAST_DAY('2024-01-05');
```

Kết quả sẽ trả về ngày cuối cùng trong tháng của ngày '2024-01-05', tức là '2024-01-31'.

**Giải thích chi tiết:**

Hàm `LAST_DAY()` trả về ngày cuối cùng của tháng từ một ngày cụ thể. Trong ví dụ trên, khi áp dụng hàm cho ngày '2024-01-05', nó trả về ngày cuối cùng trong tháng của ngày đó, tức là ngày '2024-01-31'.

Hàm này hữu ích khi bạn cần làm việc với thông tin ngày cuối cùng trong tháng, ví dụ như khi bạn muốn xác định ngày cuối cùng để tính toán dữ liệu hoặc hiển thị thông tin theo chu kỳ tháng.

---

## **13. TIME():** Trích xuất phần thời gian từ một giá trị datetime.

Hàm `TIME()` trong SQL được sử dụng để trích xuất phần thời gian từ một giá trị datetime và trả về giá trị thời gian.

**Ngữ cảnh và khái niệm:**

Khi bạn cần chỉ lấy thông tin về phần thời gian từ một giá trị datetime mà không quan tâm đến ngày tháng, hàm `TIME()` sẽ trích xuất và trả về phần thời gian đó.

**Cách sử dụng:**

Dưới đây là ví dụ về cách sử dụng `TIME()` trong SQL:

```sql
SELECT TIME('2024-01-05 12:30:45');
```

Kết quả sẽ trả về phần thời gian từ giá trị datetime '2024-01-05 12:30:45', tức là '12:30:45'.

**Giải thích chi tiết:**

Hàm `TIME()` trích xuất phần thời gian từ một giá trị datetime và trả về kết quả là giá trị thời gian. Trong ví dụ trên, khi áp dụng hàm cho giá trị datetime '2024-01-05 12:30:45', nó chỉ trả về phần thời gian '12:30:45', bỏ qua phần ngày tháng.

Hàm này hữu ích khi bạn chỉ quan tâm đến thông tin về thời gian trong các truy vấn hoặc khi bạn cần lấy phần thời gian từ một giá trị datetime để thực hiện tính toán hoặc hiển thị dữ liệu liên quan đến thời gian.

---

## **14. HOUR(), MINUTE(), SECOND():** Trích xuất giờ, phút hoặc giây từ một giá trị thời gian.

Các hàm `HOUR()`, `MINUTE()`, và `SECOND()` trong SQL được sử dụng để trích xuất các thành phần cụ thể của thời gian từ một giá trị datetime.

**Ngữ cảnh và khái niệm:**

Khi bạn muốn chỉ lấy thông tin về giờ, phút hoặc giây từ một giá trị thời gian cụ thể, các hàm này sẽ trích xuất và trả về các thành phần thời gian đó.

**Cách sử dụng:**

Dưới đây là ví dụ về cách sử dụng `HOUR()`, `MINUTE()`, và `SECOND()` trong SQL:

```sql
SELECT HOUR('2024-01-05 12:30:45') AS gio, MINUTE('2024-01-05 12:30:45') AS phut, SECOND('2024-01-05 12:30:45') AS giay;
```

Kết quả sẽ trả về giờ, phút và giây từ giá trị datetime '2024-01-05 12:30:45'.

**Giải thích chi tiết:**

- Hàm `HOUR()` trả về phần giờ từ một giá trị thời gian.
- Hàm `MINUTE()` trả về phần phút từ một giá trị thời gian.
- Hàm `SECOND()` trả về phần giây từ một giá trị thời gian.

Trong ví dụ trên, khi áp dụng các hàm này cho giá trị datetime '2024-01-05 12:30:45', chúng trả về giờ là 12, phút là 30 và giây là 45.

Các hàm này hữu ích khi bạn cần chỉ lấy thông tin cụ thể về giờ, phút hoặc giây từ một giá trị thời gian để sử dụng trong tính toán hoặc hiển thị thông tin thời gian.

---

## **15. ADDTIME() và SUBTIME():** Thêm hoặc bớt một khoảng thời gian từ một giá trị thời gian.

Hai hàm `ADDTIME()` và `SUBTIME()` trong SQL được sử dụng để thêm hoặc bớt một khoảng thời gian từ một giá trị thời gian (time).

**Ngữ cảnh và khái niệm:**

Khi bạn muốn điều chỉnh một giá trị thời gian bằng cách thêm hoặc bớt một khoảng thời gian nhất định, các hàm này sẽ thực hiện thao tác đó.

**Cách sử dụng:**

Dưới đây là ví dụ về cách sử dụng `ADDTIME()` và `SUBTIME()` trong SQL:

```sql
SELECT ADDTIME('08:30:00', '02:15:00') AS added_time, SUBTIME('12:00:00', '00:30:00') AS subtracted_time;
```

Kết quả sẽ trả về `added_time` là '10:45:00' (08:30:00 + 02:15:00) và `subtracted_time` là '11:30:00' (12:00:00 - 00:30:00).

**Giải thích chi tiết:**

- `ADDTIME(time1, time2)` thêm một khoảng thời gian `time2` vào `time1` và trả về kết quả.
- `SUBTIME(time1, time2)` bớt một khoảng thời gian `time2` từ `time1` và trả về kết quả.

Trong ví dụ trên, `ADDTIME('08:30:00', '02:15:00')` thực hiện phép cộng thời gian, và `SUBTIME('12:00:00', '00:30:00')` thực hiện phép trừ thời gian. Cả hai hàm trả về giá trị thời gian mới dựa trên phép tính được thực hiện.

Các hàm này thường được sử dụng khi bạn cần điều chỉnh thời gian trong cơ sở dữ liệu, chẳng hạn như khi tính toán thời gian hoặc điều chỉnh thời gian thực hiện các hoạt động, sự kiện.

---

## **16. STR_TO_DATE() và DATE_FORMAT():** Chuyển đổi một chuỗi thành giá trị ngày tháng hoặc định dạng một giá trị ngày tháng theo chuỗi.

Hai hàm `STR_TO_DATE()` và `DATE_FORMAT()` trong SQL thường được sử dụng để chuyển đổi giữa chuỗi và giá trị ngày tháng hoặc định dạng lại một giá trị ngày tháng theo chuỗi cụ thể.

**Ngữ cảnh và khái niệm:**

- `STR_TO_DATE()` được sử dụng để chuyển đổi một chuỗi thành giá trị ngày tháng.
- `DATE_FORMAT()` được sử dụng để định dạng lại một giá trị ngày tháng theo một chuỗi định dạng cụ thể.

**Cách sử dụng:**

1. **STR_TO_DATE():**
   Hàm `STR_TO_DATE()` chuyển đổi một chuỗi thành giá trị ngày tháng. Ví dụ sau chuyển đổi chuỗi '2024-01-05' thành giá trị ngày tháng:

   ```sql
   SELECT STR_TO_DATE('2024-01-05', '%Y-%m-%d');
   ```

   Kết quả sẽ trả về giá trị ngày tháng tương ứng với chuỗi '2024-01-05'.

2. **DATE_FORMAT():**
   Hàm `DATE_FORMAT()` định dạng lại một giá trị ngày tháng theo một chuỗi định dạng cụ thể. Ví dụ dưới đây định dạng lại ngày '2024-01-05' theo định dạng 'Ngày %d, Tháng %m, Năm %Y':

   ```sql
   SELECT DATE_FORMAT('2024-01-05', 'Ngày %d, Tháng %m, Năm %Y');
   ```

   Kết quả sẽ trả về chuỗi được định dạng theo mẫu 'Ngày 05, Tháng 01, Năm 2024'.

**Giải thích chi tiết:**

- `%Y`, `%m`, `%d` là các chuỗi định dạng trong `STR_TO_DATE()` và `DATE_FORMAT()` để chỉ ra năm, tháng và ngày lần lượt.
- `STR_TO_DATE()` rất hữu ích khi bạn cần chuyển đổi một chuỗi thành giá trị ngày tháng để lưu trữ trong cơ sở dữ liệu hoặc thực hiện so sánh với các giá trị ngày tháng.
- `DATE_FORMAT()` giúp bạn định dạng lại các giá trị ngày tháng để hiển thị cho người dùng hoặc để xuất dữ liệu theo định dạng mong muốn.

---
