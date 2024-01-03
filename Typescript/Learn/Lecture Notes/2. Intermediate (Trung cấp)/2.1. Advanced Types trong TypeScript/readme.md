## Conditional types: sử dụng `extends` keyword để xác định kiểu dữ liệu dựa trên các điều kiện.

Conditional types trong TypeScript là một tính năng mạnh mẽ cho phép bạn xác định kiểu dữ liệu dựa trên các điều kiện. Chúng cho phép bạn tạo ra các kiểu dữ liệu phụ thuộc vào các điều kiện khác nhau, giúp tạo ra các kiểu linh hoạt và tái sử dụng.

Ngữ cảnh của conditional types thường là khi bạn cần xác định kiểu dữ liệu dựa trên các thông tin đã biết hoặc điều kiện trong quá trình phát triển. Ví dụ, bạn muốn xác định một kiểu dữ liệu dựa trên một tính chất của kiểu dữ liệu khác, hoặc xác định kiểu dữ liệu dựa trên giá trị của một biến.

Để sử dụng conditional types, chúng ta sử dụng từ khóa `extends` trong TypeScript. Dưới đây là một ví dụ minh họa:

```typescript
// Định nghĩa một type Condition để kiểm tra kiểu của T
type Condition<T> = T extends string ? string : number;

// Sử dụng conditional type
function testFunc(input: Condition<number>) {
  // Hàm này sẽ chấp nhận input kiểu number và trả về kiểu number
  return input * 2;
}

// Sử dụng hàm testFunc với kiểu dữ liệu là number
const result1 = testFunc(10); // result1 sẽ có kiểu number

// Sử dụng hàm testFunc với kiểu dữ liệu là string (kiểu không phù hợp)
// const result2 = testFunc("hello"); // Sẽ báo lỗi vì kiểu string không thỏa mãn Condition<number>
```

Trong ví dụ trên, chúng ta định nghĩa một conditional type `Condition<T>`, nó sẽ kiểm tra xem kiểu dữ liệu `T` có phải là `string` hay không. Nếu `T` là `string`, kiểu của `Condition<T>` sẽ là `string`, ngược lại sẽ là `number`.

Sử dụng hàm `testFunc`, khi chúng ta truyền một tham số kiểu `number`, hàm sẽ hoạt động đúng và trả về một giá trị kiểu `number`. Tuy nhiên, nếu chúng ta cố gắng truyền vào một tham số kiểu `string`, TypeScript sẽ báo lỗi vì không thỏa mãn điều kiện của conditional type đã được xác định.

---

## Mapped types: tạo ra một kiểu dữ liệu mới dựa trên một kiểu dữ liệu hiện có.

Mapped types trong TypeScript là một tính năng mạnh mẽ cho phép tạo ra các kiểu dữ liệu mới từ một kiểu dữ liệu đã có sẵn. Chúng cho phép bạn duyệt qua từng thành phần của một kiểu dữ liệu và tạo ra một kiểu dữ liệu mới dựa trên các thuộc tính hoặc phương thức của kiểu dữ liệu đó.

Ngữ cảnh của mapped types thường xuất hiện khi bạn cần biến đổi hoặc tái sử dụng kiểu dữ liệu hiện có mà không cần phải viết lại các định nghĩa kiểu dữ liệu đó.

Dưới đây là một ví dụ minh họa về mapped types:

```typescript
// Định nghĩa một kiểu dữ liệu Person
type Person = {
  name: string;
  age: number;
  email: string;
};

// Mapped type để tạo ra một kiểu dữ liệu mới PersonOptional, với tất cả các thuộc tính trở thành optional
type PersonOptional = {
  [Key in keyof Person]?: Person[Key];
};

// Sử dụng mapped type
const optionalPerson: PersonOptional = {
  name: "John",
  age: 30,
  // email là optional nên có thể không cần thiết khi khai báo
};

// Mapped type có thể tạo ra các kiểu dữ liệu khác nhau, không chỉ là optional
type PersonReadOnly = {
  readonly [Key in keyof Person]: Person[Key];
};

// Sử dụng mapped type ReadOnly
const readOnlyPerson: PersonReadOnly = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};
// readOnlyPerson.name = "AnotherName"; // Sẽ báo lỗi vì thuộc tính đã được đặt là readonly
```

Trong ví dụ trên, chúng ta định nghĩa một kiểu dữ liệu `Person` với các thuộc tính `name`, `age`, và `email`. Tiếp theo, chúng ta sử dụng mapped type để tạo ra hai kiểu dữ liệu mới. `PersonOptional` là một kiểu dữ liệu mới với tất cả các thuộc tính trở thành optional (có thể có hoặc không cần thiết khi khai báo). `PersonReadOnly` là một kiểu dữ liệu mới với các thuộc tính trở thành `readonly`, tức là không thể thay đổi giá trị của chúng sau khi khai báo.

Sử dụng mapped types cho phép bạn tái sử dụng, biến đổi và tạo ra các kiểu dữ liệu mới dựa trên kiểu dữ liệu đã có, giúp tăng tính linh hoạt và tái sử dụng trong TypeScript.

---
