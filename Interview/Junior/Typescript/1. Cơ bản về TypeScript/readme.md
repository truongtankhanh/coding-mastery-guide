# Cơ bản về TypeScript:

## 1. TypeScript là gì? Tại sao chúng ta nên sử dụng TypeScript?

Câu hỏi này tập trung vào TypeScript và lý do tại sao nó được sử dụng trong dự án Node.js. Đây là cơ hội để bạn thể hiện hiểu biết của mình về TypeScript và tầm quan trọng của nó trong việc phát triển Node.js.

**Phân tích và trình bày:**

1. **TypeScript là gì?**
   TypeScript là một siêu tập hợp của JavaScript, mở rộng JavaScript bằng cách cung cấp kiểu dữ liệu tĩnh và các tính năng của lập trình hướng đối tượng. Nó cho phép xác định kiểu dữ liệu cho biến, tham số hàm và giúp phát hiện lỗi tại thời điểm biên dịch.

2. **Tại sao chúng ta nên sử dụng TypeScript?**

   - **Kiểm tra kiểu dữ liệu tại thời điểm biên dịch:** TypeScript giúp phát hiện và ngăn chặn lỗi liên quan đến kiểu dữ liệu trước khi chương trình chạy. Điều này giúp giảm thiểu lỗi runtime.
   - **Tăng tính bảo trì và hiệu suất:** Kiểu dữ liệu tĩnh và tính năng của TypeScript giúp code dễ đọc, dễ bảo trì hơn, đồng thời cung cấp tính linh hoạt cao.
   - **Hỗ trợ tooling mạnh mẽ:** TypeScript tích hợp tốt với nhiều công cụ phổ biến như Visual Studio Code, cung cấp tính năng autocomplete, refactoring và navigation tốt hơn.

3. **Ví dụ cụ thể:**
   - Ví dụ, khi xây dựng một ứng dụng Node.js có hàng chục hoặc hàng trăm file JavaScript, việc sử dụng TypeScript sẽ giúp quản lý mã nguồn dễ dàng hơn. Nó cung cấp khả năng xác định kiểu dữ liệu, giúp tìm lỗi và refactor code một cách an toàn hơn, đặc biệt khi làm việc trong nhóm phát triển lớn.

**Trả lời chuyên nghiệp:**

"TypeScript là một siêu tập hợp của JavaScript, cung cấp kiểu dữ liệu tĩnh và các tính năng của lập trình hướng đối tượng. Việc sử dụng TypeScript trong dự án Node.js mang lại nhiều lợi ích. Đầu tiên, kiểm tra kiểu dữ liệu tại thời điểm biên dịch giúp phát hiện và ngăn chặn lỗi trước khi chạy ứng dụng, giảm thiểu các lỗi runtime không mong muốn. Thứ hai, TypeScript tăng tính bảo trì và hiệu suất của mã nguồn thông qua việc cung cấp kiểu dữ liệu tĩnh, làm cho code dễ đọc, dễ bảo trì hơn. Cuối cùng, sự tích hợp tốt với các công cụ phát triển và hỗ trợ tooling mạnh mẽ của TypeScript như Visual Studio Code giúp tăng năng suất và linh hoạt trong việc phát triển ứng dụng Node.js. Ví dụ, khi xây dựng một dự án Node.js lớn, việc sử dụng TypeScript giúp quản lý mã nguồn hiệu quả, đặc biệt trong việc tìm lỗi và refactor code trong một môi trường phát triển đa người dùng."

---

## 2. Khác biệt chính giữa TypeScript và JavaScript là gì?

Câu hỏi này tập trung vào sự khác biệt giữa TypeScript và JavaScript, đây là cơ hội để bạn trình bày sự hiểu biết về cả hai ngôn ngữ và nhấn mạnh những điểm khác biệt quan trọng.

**Phân tích và trình bày:**

1. **JavaScript:**

   - JavaScript là ngôn ngữ lập trình thông dịch, được sử dụng phổ biến trong phát triển web.
   - Đây là một ngôn ngữ không kiểm tra kiểu dữ liệu tại thời điểm biên dịch, có tự động chuyển đổi kiểu dữ liệu (dynamically typed).
   - JavaScript không hỗ trợ các tính năng của lập trình hướng đối tượng một cách trực tiếp, mặc dù có thể sử dụng các kỹ thuật của Prototype để mô phỏng OOP.

2. **TypeScript:**
   - TypeScript là một siêu tập hợp của JavaScript, cung cấp kiểu dữ liệu tĩnh và các tính năng của lập trình hướng đối tượng.
   - Ngôn ngữ này thêm vào JavaScript khả năng kiểm tra kiểu dữ liệu tại thời điểm biên dịch (statically typed), giúp phát hiện lỗi sớm hơn.
   - TypeScript hỗ trợ các tính năng của lập trình hướng đối tượng như interface, class, module một cách trực tiếp và rõ ràng hơn.

**Ví dụ cụ thể:**

- Ví dụ, trong JavaScript, việc thao tác với kiểu dữ liệu có thể gây ra các lỗi không mong muốn, ví dụ như:
  ```javascript
  let x = "5";
  let y = 10;
  let result = x + y; // Kết quả là chuỗi "510" chứ không phải số 15
  ```
- Trong khi đó, TypeScript sẽ báo lỗi tại thời điểm biên dịch nếu có lỗi kiểu dữ liệu như trên, giúp phát hiện và sửa lỗi trước khi chạy chương trình.

**Trả lời chuyên nghiệp:**

"Khác biệt chính giữa TypeScript và JavaScript nằm ở cách kiểm tra kiểu dữ liệu. JavaScript là ngôn ngữ không kiểm tra kiểu dữ liệu tại thời điểm biên dịch, trong khi TypeScript cung cấp kiểm tra kiểu dữ liệu tĩnh giúp phát hiện và ngăn chặn lỗi kiểu dữ liệu trước khi chạy chương trình. Ví dụ, trong JavaScript, phép toán cộng một chuỗi với một số có thể dẫn đến kết quả không mong muốn, trong khi TypeScript sẽ báo lỗi tại thời điểm biên dịch để ngăn chặn những lỗi này."

---

## 3. Lợi ích của việc sử dụng kiểu dữ liệu (type) trong TypeScript là gì? Ví dụ điển hình?

Câu hỏi này nhằm đánh giá kiến thức của bạn về lợi ích của việc sử dụng kiểu dữ liệu trong TypeScript, điểm quan trọng khi làm việc với TypeScript trong phát triển Node.js.

**Phân tích và trình bày:**

1. **Tính chắc chắn về kiểu dữ liệu:**

   - Sử dụng kiểu dữ liệu trong TypeScript giúp xác định rõ ràng loại dữ liệu mà biến hoặc hàm có thể chứa.
   - Điều này giúp giảm thiểu lỗi trong quá trình phát triển do việc gán sai kiểu dữ liệu cho biến.

2. **Phát hiện lỗi sớm hơn:**

   - Kiểm tra kiểu dữ liệu tại thời điểm biên dịch giúp phát hiện lỗi kiểu dữ liệu trước khi chương trình chạy.
   - Điều này cung cấp một lớp bảo vệ an toàn hơn khi phát triển ứng dụng Node.js.

3. **Tăng tính bảo trì và hiệu suất:**
   - Kiểu dữ liệu tĩnh giúp làm cho code dễ đọc, dễ bảo trì hơn và cung cấp thông tin chi tiết hơn về cấu trúc dữ liệu.
   - Sự tự tin trong việc refactor và mở rộng code, đồng thời giúp tăng hiệu suất khi làm việc trong nhóm.

**Ví dụ cụ thể:**

- Ví dụ, khi phát triển một ứng dụng Node.js, sử dụng TypeScript có thể ngăn chặn lỗi kiểu dữ liệu như sau:

  ```typescript
  function calculateArea(width: number, height: number): number {
    return width * height; // TypeScript sẽ báo lỗi nếu width hoặc height không phải là number
  }

  let area = calculateArea("5", 10); // TypeScript sẽ báo lỗi tại thời điểm biên dịch
  ```

  - Trong ví dụ này, TypeScript sẽ báo lỗi ngay khi biên dịch vì kiểu dữ liệu của `width` hoặc `height` không phải là `number`, giúp phát hiện và sửa lỗi trước khi chạy chương trình.

**Trả lời chuyên nghiệp:**

"Sử dụng kiểu dữ liệu trong TypeScript mang lại nhiều lợi ích quan trọng. Tính chắc chắn về kiểu dữ liệu giúp xác định rõ ràng loại dữ liệu mà biến hoặc hàm có thể chứa, giảm thiểu lỗi trong quá trình phát triển. Phát hiện lỗi kiểu dữ liệu sớm hơn tại thời điểm biên dịch cung cấp một lớp bảo vệ an toàn hơn và giúp tăng tính bảo trì của mã nguồn. Một ví dụ điển hình, khi sử dụng TypeScript, nếu có lỗi trong việc gán sai kiểu dữ liệu cho biến hoặc tham số hàm, như trong ví dụ về `calculateArea`, TypeScript sẽ báo lỗi ngay tại thời điểm biên dịch để ngăn chặn các lỗi không mong muốn trước khi chương trình chạy."

---

## 4. Cách khai báo biến với kiểu dữ liệu trong TypeScript?

Câu hỏi này tập trung vào cách khai báo biến với kiểu dữ liệu trong TypeScript, điều cơ bản nhưng quan trọng khi làm việc với TypeScript trong phát triển Node.js.

**Phân tích và trình bày:**

1. **Khai báo biến với kiểu dữ liệu trong TypeScript:**

   - Để khai báo biến với kiểu dữ liệu trong TypeScript, chúng ta sử dụng cú pháp `tên_biến: kiểu_dữ_liệu = giá_trị;`.
   - Kiểu dữ liệu có thể là `number`, `string`, `boolean`, `any`, `undefined`, `null`, `void`, hoặc kiểu dữ liệu tùy chỉnh như `interface` hoặc `type`.

2. **Ví dụ cụ thể:**
   - Ví dụ, để khai báo một biến `age` có kiểu dữ liệu `number` và gán giá trị ban đầu là `25`, chúng ta sẽ làm như sau:
     ```typescript
     let age: number = 25;
     ```
   - Ngoài ra, nếu chúng ta không cung cấp giá trị ban đầu, chúng ta có thể sử dụng cú pháp:
     ```typescript
     let name: string;
     name = "John Doe";
     ```

**Trả lời chuyên nghiệp:**

"Cách khai báo biến với kiểu dữ liệu trong TypeScript sử dụng cú pháp `tên_biến: kiểu_dữ_liệu = giá_trị;`. Ví dụ, để khai báo một biến `age` với kiểu dữ liệu `number` và gán giá trị ban đầu là `25`, chúng ta sẽ sử dụng `let age: number = 25;`. Nếu không cung cấp giá trị ban đầu, chúng ta có thể khai báo biến và gán giá trị sau như `let name: string; name = 'John Doe';`."

---

## 5. Có bao nhiêu kiểu dữ liệu cơ bản trong TypeScript? Liệt kê và mô tả một số trong số chúng.

Câu hỏi này đề cập đến kiểu dữ liệu cơ bản trong TypeScript, một điểm cơ bản nhưng quan trọng khi làm việc với TypeScript trong phát triển Node.js.

**Phân tích và trình bày:**

1. **Kiểu dữ liệu cơ bản trong TypeScript:**

   - TypeScript cung cấp một số kiểu dữ liệu cơ bản để định nghĩa loại dữ liệu của biến và giúp xác định cách mà dữ liệu có thể được sử dụng và xử lý.

2. **Liệt kê và mô tả một số kiểu dữ liệu cơ bản trong TypeScript:**
   - **number**: Đại diện cho các số, bao gồm cả số nguyên và số thập phân. Ví dụ: `let age: number = 25;`
   - **string**: Đại diện cho chuỗi ký tự. Ví dụ: `let name: string = 'John Doe';`
   - **boolean**: Đại diện cho giá trị logic `true` hoặc `false`. Ví dụ: `let isStudent: boolean = true;`
   - **any**: Đại diện cho bất kỳ kiểu dữ liệu nào. TypeScript sẽ không kiểm tra kiểu dữ liệu khi sử dụng `any`. Ví dụ: `let data: any = 10;`
   - **undefined**: Đại diện cho giá trị không được gán. Ví dụ: `let value: undefined;`
   - **null**: Đại diện cho giá trị rỗng hoặc không tồn tại. Ví dụ: `let empty: null;`
   - **void**: Thường được sử dụng trong hàm để chỉ ra rằng hàm không trả về giá trị. Ví dụ: `function logMessage(): void { console.log('Hello!'); }`

**Trả lời chuyên nghiệp:**

"Trong TypeScript, có nhiều kiểu dữ liệu cơ bản nhằm định nghĩa loại dữ liệu của biến. Một số trong số chúng bao gồm `number` (đại diện cho số), `string` (đại diện cho chuỗi ký tự), `boolean` (đại diện cho giá trị logic), `any` (đại diện cho bất kỳ kiểu dữ liệu nào), `undefined` (đại diện cho giá trị không được gán), `null` (đại diện cho giá trị rỗng hoặc không tồn tại), và `void` (thường được sử dụng để chỉ ra rằng hàm không trả về giá trị)."

---
