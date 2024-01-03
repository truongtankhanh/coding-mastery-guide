Dưới đây là các khái niệm về biểu thức và toán tử ở mức nâng cao trong JavaScript:

## Biểu Thức (Expressions)

1. **Biểu Thức Regular Expressions (Regex)**

   - Sử dụng biểu thức chính quy để tìm kiếm và xử lý chuỗi theo các quy tắc đặc biệt: `/pattern/flags`

2. **Biểu Thức Function Invocations**

   - Gọi hàm và truyền đối số: `functionName(argument1, argument2)`

3. **Biểu Thức Arrow Functions**

   - Sử dụng cú pháp ngắn gọn của arrow functions: `const add = (a, b) => a + b;`

4. **Biểu Thức Async Functions**

   - Sử dụng async/await để xử lý các thao tác không đồng bộ: `async function fetchData() { await ... }`

5. **Biểu Thức Generators**
   - Sử dụng generators để tạo ra các hàm sinh ra giá trị theo yêu cầu: `function* generatorFunction() { yield ... }`

## Toán Tử (Operators)

1. **Toán Tử Destructuring**

   - Sử dụng toán tử destructuring để gán giá trị từ mảng hoặc đối tượng vào các biến riêng lẻ: `const [a, b] = [1, 2];`

2. **Toán Tử Rest và Spread trong Functions**

   - Sử dụng Rest Parameters (`...`) để thu thập các tham số thành một mảng và Spread Operator (`...`) để mở rộng mảng hoặc đối tượng: `function example(...args) { }`

3. **Toán Tử Optional Chaining và Nullish Coalescing**

   - Sử dụng Optional Chaining (`?.`) để truy cập thuộc tính một cách an toàn và Nullish Coalescing (`??`) để thiết lập giá trị mặc định: `let value = object?.property ?? 'default';`

4. **Toán Tử Bitwise (<<, >>, >>>, &, |, ^, ~)**

   - Thực hiện các phép tính bitwise trên các giá trị số nguyên.

5. **Toán Tử Assignment (+=, -=, \*=, /=)**

   - Sử dụng toán tử assignment kết hợp với các phép tính: `let x = 5; x += 3; // x = 8;`

6. **Toán Tử Hoisting và Type Coercion**

   - Hiểu về hoisting trong JavaScript khi các biến và hàm được đưa lên đầu phạm vi và về kiểu ép buộc (Type coercion) khi JavaScript tự động chuyển đổi kiểu dữ liệu.

7. **Toán Tử Unary (++, --, typeof, delete)**
   - Sử dụng các toán tử unary để thực hiện các thao tác trên một toán hạng.

Hiểu sâu hơn về các biểu thức và toán tử này sẽ giúp bạn làm việc với JavaScript ở mức độ phức tạp hơn và hiệu quả hơn trong việc viết mã nguồn.
