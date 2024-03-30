## Sử dụng Nullish Coalescing Operator (??) để mặc định giá trị khi biến là null hoặc undefined

**Khái niệm:**

**Nullish Coalescing Operator (??)** là toán tử được giới thiệu trong JavaScript ES2020 giúp gán giá trị mặc định cho biến nếu biến đó là `null` hoặc `undefined`.

**Ngữ cảnh sử dụng:**

- Khi bạn muốn gán giá trị mặc định cho biến có thể là `null` hoặc `undefined`.
- Khi bạn muốn viết mã ngắn gọn và dễ đọc hơn.

**Cách sử dụng:**

```javascript
const name = null;

// Gán giá trị mặc định "John Doe" cho biến `name` nếu `name` là null hoặc undefined
const defaultName = name ?? "John Doe";

console.log(defaultName); // "John Doe"
```

**Cấu trúc:**

- `variable ?? defaultValue`:
  - `variable`: Biến cần kiểm tra.
  - `defaultValue`: Giá trị mặc định được gán cho `variable` nếu `variable` là `null` hoặc `undefined`.

**Ví dụ:**

```javascript
let age;

// Gán giá trị mặc định 20 cho biến `age` nếu `age` là null hoặc undefined
age = age ?? 20;

console.log(age); // 20

const person = {
  name: null,
};

// Gán giá trị mặc định "Unknown" cho thuộc tính `name` của object `person`
person.name = person.name ?? "Unknown";

console.log(person.name); // "Unknown"
```

**Lưu ý:**

- Toán tử `??` chỉ hoạt động với các giá trị `null` và `undefined`.
- Toán tử `??` có thể được sử dụng với các toán tử khác như `&&` và `||`.

**Tài liệu tham khảo:**

- Toán tử Nullish Coalescing trong JavaScript: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- Sử dụng Nullish Coalescing Operator (??) trong Javascript: [https://viblo.asia/p/optional-chaining-va-nullish-coalescing-operator-trong-javascript-V3m5WQYwZO7](https://viblo.asia/p/optional-chaining-va-nullish-coalescing-operator-trong-javascript-V3m5WQYwZO7)

**Kết luận:**

**Nullish Coalescing Operator (??)** là toán tử hữu ích giúp bạn gán giá trị mặc định cho biến một cách dễ dàng và hiệu quả. Sử dụng Nullish Coalescing Operator giúp viết mã JavaScript ngắn gọn, dễ đọc và dễ hiểu hơn.

**So sánh với toán tử ||:**

Toán tử `||` cũng có thể được sử dụng để gán giá trị mặc định, nhưng nó có một số điểm khác biệt với toán tử `??`.

- Toán tử `||` sẽ trả về giá trị bên phải nếu giá trị bên trái là `false`, `0`, `""`, hoặc `null`.
- Toán tử `??` chỉ trả về giá trị bên phải nếu giá trị bên trái là `null` hoặc `undefined`.

Do đó, trong hầu hết các trường hợp, nên sử dụng toán tử `??` thay vì toán tử `||` để gán giá trị mặc định cho biến.
