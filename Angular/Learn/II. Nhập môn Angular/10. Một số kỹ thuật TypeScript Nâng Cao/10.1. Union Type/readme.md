## Union Type trong TypeScript

**Khái niệm:**

Union Type là một tính năng của TypeScript cho phép bạn định nghĩa một biến có thể thuộc một trong nhiều kiểu dữ liệu khác nhau. Ví dụ, bạn có thể định nghĩa một biến có thể là kiểu `string` hoặc `number`.

**Ngữ cảnh:**

Union Type được sử dụng trong nhiều trường hợp khác nhau, ví dụ như:

- Định nghĩa kiểu dữ liệu cho một biến có thể có nhiều giá trị khác nhau. Ví dụ, bạn có thể định nghĩa một biến có thể là tên của một người hoặc tên của một công ty.
- Kiểm tra kiểu dữ liệu của một biến trước khi sử dụng. Ví dụ, bạn có thể sử dụng Union Type để đảm bảo rằng một biến có giá trị là `string` trước khi sử dụng nó trong một hàm.
- Sử dụng các toán tử logic để thao tác với các biến có kiểu Union Type. Ví dụ, bạn có thể sử dụng toán tử `||` để kiểm tra xem một biến có giá trị là `string` hay `number`.

**Cách sử dụng:**

Để định nghĩa một Union Type, bạn sử dụng ký hiệu `|` để nối các kiểu dữ liệu khác nhau. Ví dụ:

```typescript
let name: string | number;

name = "John Doe"; // OK
name = 123; // OK
```

Bạn cũng có thể sử dụng Union Type với các interface và class. Ví dụ:

```typescript
interface User {
  name: string;
}

interface Company {
  name: string;
}

let entity: User | Company;

entity = { name: "John Doe" }; // OK
entity = { name: "Acme Corporation" }; // OK
```

**Ví dụ:**

```typescript
function greet(person: string | number) {
  if (typeof person === "string") {
    console.log(`Hello, ${person}!`);
  } else {
    console.log(`Hello, person ${person}!`);
  }
}

greet("John Doe"); // Hello, John Doe!
greet(123); // Hello, person 123!
```

**Lợi ích:**

- Union Type giúp code dễ đọc và dễ hiểu hơn.
- Union Type giúp phát hiện lỗi sớm hơn.
- Union Type giúp code an toàn và hiệu quả hơn.

**Kết luận:**

Union Type là một tính năng mạnh mẽ của TypeScript giúp bạn viết code an toàn, hiệu quả và dễ đọc.

**Lưu ý:**

- Union Type chỉ được hỗ trợ bởi TypeScript, không được hỗ trợ bởi JavaScript.
- Nên sử dụng Union Type một cách cẩn thận để tránh các lỗi logic.
