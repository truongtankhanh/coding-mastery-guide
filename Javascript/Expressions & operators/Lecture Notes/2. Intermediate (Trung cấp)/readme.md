Dưới đây là một danh sách các khái niệm về biểu thức và toán tử trong JavaScript ở mức trung cấp mà bạn có thể tìm hiểu:

## Biểu Thức (Expressions)

1. **Biểu Thức Số Học và Chuỗi**

   - Kết hợp các biểu thức số học và chuỗi trong cùng một biểu thức: `let result = 10 * (5 + 3) + ' apples';`

2. **Biểu Thức Ternary**

   - Sử dụng toán tử ba ngôi (`condition ? expr1 : expr2`) để viết các điều kiện ngắn gọn: `let status = (age >= 18) ? 'Adult' : 'Minor';`

3. **Biểu Thức Gán Tăng/Giảm (+=, -=)**

   - Sử dụng các toán tử `+=`, `-=`, `*=`, `/=` để thực hiện phép gán kết hợp với phép tính: `let count = 10; count += 5; // count = 15;`

4. **Biểu Thức Logic và Short-circuit Evaluation**
   - Hiểu về đánh giá ngắn mạch trong biểu thức logic: `let result = (x > 0) && (y < 10) || (z === 5);`

## Toán Tử (Operators)

1. **So Sánh Cứng (===, !==) và Ép Kiểu Dữ Liệu**

   - Sử dụng so sánh cứng để so sánh cả kiểu dữ liệu và giá trị: `if (value === 10) { //... }`
   - Ép kiểu dữ liệu (Type Casting/Conversion): `let num = Number('10');`

2. **Toán Tử Bitwise (&, |, ^, ~)**

   - Sử dụng các toán tử bitwise để thực hiện các phép tính bitwise: `let result = 5 & 3; // Kết quả: 1`

3. **Toán Tử typeof và instanceof**

   - Sử dụng `typeof` để kiểm tra kiểu dữ liệu và `instanceof` để kiểm tra mối quan hệ giữa đối tượng và constructor: `typeof x; obj instanceof Array;`

4. **Toán Tử Logical Nullish (??)**

   - Sử dụng toán tử nullish coalescing (`??`) để thiết lập giá trị mặc định: `let result = variable ?? 'default';`

5. **Toán Tử Spread (…)**

   - Sử dụng toán tử spread để triển khai các mảng và đối tượng: `let arr = [1, 2, 3]; let newArr = [...arr];`

6. **Toán Tử Optional Chaining (?.)**
   - Toán tử optional chaining (`?.`) giúp tránh lỗi khi truy cập thuộc tính của một đối tượng không xác định: `let name = obj?.person?.name;`

Hiểu rõ về các biểu thức và toán tử này sẽ giúp bạn viết mã nguồn JavaScript phức tạp hơn và xử lý logic nâng cao hơn.
