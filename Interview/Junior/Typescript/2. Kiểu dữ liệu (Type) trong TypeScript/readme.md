# Kiểu dữ liệu (Type) trong TypeScript:

## 1. Khác biệt giữa kiểu dữ liệu 'any' và 'unknown' là gì?

Câu hỏi này tập trung vào sự khác biệt giữa hai kiểu dữ liệu `any` và `unknown` trong TypeScript, đề cập đến sự hiểu biết chi tiết về cách mà hai kiểu dữ liệu này hoạt động trong quá trình phát triển Node.js.

**Phân tích và trình bày:**

1. **`any` và `unknown` trong TypeScript:**

   - **`any`:**

     - Kiểu dữ liệu `any` cho phép biến chứa bất kỳ giá trị nào và TypeScript sẽ bỏ qua việc kiểm tra kiểu dữ liệu khi sử dụng.
     - Biến có kiểu `any` cho phép thực hiện các phép toán, gán giá trị từ bất kỳ kiểu dữ liệu nào mà không cần kiểm tra kiểu tại thời điểm biên dịch.

   - **`unknown`:**
     - Kiểu dữ liệu `unknown` cũng cho phép biến chứa bất kỳ giá trị nào, tuy nhiên TypeScript yêu cầu kiểm tra và xác nhận kiểu dữ liệu trước khi sử dụng biến có kiểu `unknown`.
     - Để sử dụng giá trị từ biến có kiểu `unknown`, chúng ta cần phải thực hiện kiểm tra kiểu dữ liệu hoặc sử dụng các phép ép kiểu để TypeScript chấp nhận sử dụng giá trị đó.

**Ví dụ cụ thể:**

- **Sử dụng `any`:**

  ```typescript
  let variable1: any;
  variable1 = 10; // Cho phép gán giá trị số
  variable1 = "Hello"; // Cho phép gán giá trị chuỗi
  // TypeScript không kiểm tra kiểu dữ liệu khi sử dụng biến có kiểu any
  ```

- **Sử dụng `unknown`:**
  ```typescript
  let userInput: unknown;
  userInput = 10;
  if (typeof userInput === "number") {
    let doubleValue = userInput * 2; // TypeScript yêu cầu kiểm tra kiểu trước khi sử dụng
  }
  ```

**Trả lời chuyên nghiệp:**

"Trong TypeScript, `any` và `unknown` là hai kiểu dữ liệu linh hoạt nhưng có sự khác biệt quan trọng. `any` cho phép biến chứa bất kỳ giá trị nào mà không cần kiểm tra kiểu dữ liệu, trong khi `unknown` yêu cầu kiểm tra kiểu trước khi sử dụng giá trị. Ví dụ, khi sử dụng `any`, chúng ta có thể gán và sử dụng giá trị từ biến mà không cần kiểm tra kiểu dữ liệu. Tuy nhiên, với `unknown`, chúng ta cần thực hiện kiểm tra kiểu trước khi sử dụng giá trị từ biến."

---

## 2. Giải thích về Union và Intersection Types trong TypeScript.

Câu hỏi này yêu cầu bạn giải thích về hai khái niệm Union và Intersection Types trong TypeScript. Đây là một khái niệm quan trọng trong TypeScript giúp bạn xử lý kiểu dữ liệu một cách linh hoạt và mạnh mẽ.

**Phân tích và trình bày:**

1. **Union Types (Kiểu hợp nhất):**

   - Union Types cho phép khai báo một biến có thể chứa giá trị thuộc nhiều kiểu dữ liệu khác nhau.
   - Để định nghĩa Union Types, chúng ta sử dụng dấu gạch chéo `|` giữa các kiểu dữ liệu.

   Ví dụ:

   ```typescript
   let result: number | string;
   result = 10; // Hợp lệ vì number là một phần của Union Types
   result = "Hello"; // Hợp lệ vì string là một phần của Union Types
   ```

2. **Intersection Types (Kiểu giao nhau):**

   - Intersection Types cho phép tạo ra một kiểu dữ liệu mới bằng cách kết hợp các kiểu dữ liệu đã có.
   - Để định nghĩa Intersection Types, chúng ta sử dụng ký hiệu `&` giữa các kiểu dữ liệu.

   Ví dụ:

   ```typescript
   interface Human {
     name: string;
     age: number;
   }

   interface Employee {
     jobTitle: string;
     department: string;
   }

   type EmployeeInfo = Human & Employee;

   let person: EmployeeInfo;
   person = {
     name: "John",
     age: 30,
     jobTitle: "Developer",
     department: "IT",
   };
   ```

**Trả lời chuyên nghiệp:**

"Trong TypeScript, Union Types (Kiểu hợp nhất) cho phép khai báo một biến có thể chứa giá trị thuộc nhiều kiểu dữ liệu khác nhau, sử dụng dấu gạch chéo `|`. Ví dụ, biến `result: number | string` có thể chứa giá trị là số hoặc chuỗi. Trong khi đó, Intersection Types (Kiểu giao nhau) cho phép tạo ra một kiểu dữ liệu mới bằng cách kết hợp các kiểu dữ liệu đã có, sử dụng ký hiệu `&`. Ví dụ, khi kết hợp hai interface `Human` và `Employee` thành `EmployeeInfo = Human & Employee`, chúng ta có thể tạo ra một kiểu dữ liệu mới chứa các thuộc tính của cả hai interface đó, giúp mô tả thông tin của một nhân viên."

---

## 3. Type assertions là gì? Khi nào chúng ta cần sử dụng chúng?

Type assertions trong TypeScript là cách để cho trình biên dịch biết rằng bạn (lập trình viên) hiểu rõ hơn về kiểu dữ liệu của một biến hơn trình biên dịch. Đây là cách bạn thông báo với TypeScript rằng một biến nào đó có kiểu dữ liệu nhất định, mặc dù TypeScript không thể suy luận được hoặc không chắc chắn về kiểu dữ liệu đó.

**Ví dụ:**

```typescript
let x: any = "Hello!";
let strLength: number = (x as string).length;

// Hoặc sử dụng cú pháp 'as' trong TypeScript
let strLength2: number = (<string>x).length;
```

Trong ví dụ trên, `x` được khai báo với kiểu `any`, nhưng bạn biết rằng nó thực sự là một chuỗi. Bằng cách sử dụng Type assertions, bạn thông báo cho TypeScript rằng bạn đang ép kiểu biến `x` thành `string` và sau đó sử dụng thuộc tính `length` của chuỗi.

**Khi nào chúng ta cần sử dụng Type assertions?**
Chúng ta cần sử dụng Type assertions khi:

1. TypeScript không thể suy luận được hoặc không chắc chắn về kiểu dữ liệu của một biến.
2. Chúng ta biết rõ hơn về kiểu dữ liệu mà một biến cụ thể có thể có trong một số trường hợp cụ thể.

Tuy nhiên, cần phải sử dụng Type assertions cẩn thận vì TypeScript không kiểm tra kiểu dữ liệu thực sự tại thời điểm chạy. Nếu kiểu dữ liệu được khai báo không đúng, có thể gây ra lỗi runtime.

**Trả lời chuyên nghiệp:**

"Type assertions trong TypeScript là cách để thông báo cho trình biên dịch rằng một biến có kiểu dữ liệu nhất định, mặc dù TypeScript không thể suy luận được hoặc không chắc chắn về kiểu dữ liệu đó. Chúng ta sử dụng Type assertions khi TypeScript không thể suy luận được kiểu dữ liệu hoặc khi chúng ta biết rõ hơn về kiểu dữ liệu của một biến trong một số trường hợp cụ thể."

---
