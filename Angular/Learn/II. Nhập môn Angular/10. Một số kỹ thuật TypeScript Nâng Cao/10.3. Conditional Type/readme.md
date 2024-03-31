## Conditional Type trong TypeScript

**Khái niệm:**

Conditional Type là một tính năng nâng cao của TypeScript cho phép bạn tạo ra các kiểu dữ liệu mới dựa trên một điều kiện. Điều kiện này có thể là một kiểu dữ liệu hoặc một biểu thức Boolean.

**Ngữ cảnh:**

Conditional Type được sử dụng trong nhiều trường hợp khác nhau, ví dụ như:

- Định nghĩa kiểu dữ liệu cho một biến hoặc đối tượng dựa trên giá trị của một biến khác. Ví dụ, bạn có thể định nghĩa kiểu dữ liệu cho một biến có thể là `string` hoặc `number` dựa trên giá trị của một biến khác.
- Kiểm tra kiểu dữ liệu của một biến hoặc đối tượng trước khi sử dụng. Ví dụ, bạn có thể sử dụng Conditional Type để đảm bảo rằng một biến có giá trị là `string` trước khi sử dụng nó trong một hàm.
- Sử dụng các toán tử logic để thao tác với các biến hoặc đối tượng có kiểu Conditional Type. Ví dụ, bạn có thể sử dụng toán tử `&&` để kiểm tra xem một biến có giá trị là `string` và `number` hay không.

**Cách sử dụng:**

Để định nghĩa một Conditional Type, bạn sử dụng cú pháp sau:

```typescript
type ConditionalType<T, U> = T extends U ? T : U;
```

Trong đó:

- `ConditionalType` là tên của kiểu dữ liệu mới.
- `T` là kiểu dữ liệu đầu tiên.
- `U` là kiểu dữ liệu thứ hai.
- `extends` là toán tử kiểm tra xem kiểu dữ liệu `T` có thể được chuyển đổi sang kiểu dữ liệu `U` hay không.
- `?` là toán tử ternary (toán tử ba ngôi) được sử dụng để trả về giá trị `T` nếu điều kiện `T extends U` đúng, hoặc trả về giá trị `U` nếu điều kiện `T extends U` sai.

**Ví dụ:**

```typescript
type IsString<T> = T extends string ? true : false;

let name: string = "John Doe";

let isString: IsString<name> = true; // OK

let age: number = 123;

let isString: IsString<age> = false; // OK
```

**Lợi ích:**

- Conditional Type giúp code dễ đọc và dễ hiểu hơn.
- Conditional Type giúp phát hiện lỗi sớm hơn.
- Conditional Type giúp code an toàn và hiệu quả hơn.

**Kết luận:**

Conditional Type là một tính năng mạnh mẽ của TypeScript giúp bạn viết code an toàn, hiệu quả và dễ đọc.

**Tài liệu tham khảo:**

- TypeScript documentation: [https://www.typescriptlang.org/docs/handbook/2/conditional-types.html](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)

**Lưu ý:**

- Conditional Type chỉ được hỗ trợ bởi TypeScript, không được hỗ trợ bởi JavaScript.
- Nên sử dụng Conditional Type một cách cẩn thận để tránh các lỗi logic.
