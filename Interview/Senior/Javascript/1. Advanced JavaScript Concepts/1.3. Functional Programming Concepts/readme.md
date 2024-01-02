## Làm thế nào bạn áp dụng functional programming trong JavaScript? Ví dụ: Higher-order functions, immutability, và pure functions.

Trong JavaScript, functional programming là một phương pháp lập trình tập trung vào việc sử dụng các hàm và thao tác với chúng như là các giá trị. Điều này bao gồm việc sử dụng các higher-order functions, bảo toàn tính immutability (không thay đổi), và pure functions (hàm thuần túy) để tạo ra mã dễ đọc, dễ bảo trì và ít lỗi hơn.

### Higher-order functions (Hàm bậc cao):

#### Ví dụ 1: Sử dụng hàm map():

- `map()` là một higher-order function trong JavaScript cho phép thao tác trên mỗi phần tử trong một mảng và trả về một mảng mới.

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Kết quả: [2, 4, 6, 8, 10]
```

### Immutability (Tính không thay đổi):

#### Ví dụ 2: Sử dụng Object.assign():

- `Object.assign()` được sử dụng để tạo một bản sao của đối tượng mà không làm thay đổi đối tượng gốc.

```javascript
const person = { name: "Alice", age: 30 };

const updatedPerson = Object.assign({}, person, { age: 31 });
console.log(updatedPerson); // Kết quả: { name: 'Alice', age: 31 }
console.log(person); // Đối tượng person không bị thay đổi
```

### Pure functions (Hàm thuần túy):

#### Ví dụ 3: Pure Function:

- Hàm thuần túy là hàm mà không có side effects và luôn trả về kết quả dựa trên đầu vào của nó mà không làm thay đổi dữ liệu bên ngoài.

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(3, 5)); // Kết quả: 8
```

Khi trả lời câu hỏi trong phỏng vấn, bạn có thể mô tả cách sử dụng higher-order functions như `map()`, bảo toàn tính immutability thông qua `Object.assign()` hoặc các cách khác để làm việc với dữ liệu mà không thay đổi nó, và cách viết pure functions như `add()` để tạo ra các hàm không có side effects và trả về kết quả dựa trên đầu vào của chúng. Đồng thời, cung cấp ví dụ cụ thể để minh họa cách áp dụng functional programming trong JavaScript.

---

## Sự khác biệt giữa imperative programming và functional programming trong ngữ cảnh của JavaScript.

Imperative programming và functional programming là hai phong cách lập trình khác nhau trong JavaScript, mỗi phong cách đề cập đến cách tiếp cận khác nhau trong việc viết mã và giải quyết vấn đề.

### Imperative Programming:

- **Định nghĩa**: Imperative programming tập trung vào cách thực hiện một loạt các hành động để đạt được kết quả mong muốn. Nó mô tả chi tiết các bước cần thực hiện để thay đổi trạng thái của chương trình.
- **Ví dụ**: Sử dụng các câu lệnh `for`, `if/else`, `while` để chỉ định cách thực hiện từng bước một.

```javascript
// Imperative Programming
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum); // Kết quả: 15
```

### Functional Programming:

- **Định nghĩa**: Functional programming tập trung vào việc sử dụng các hàm và giải quyết vấn đề bằng cách tạo ra các hàm không thay đổi trạng thái và không có side effects.
- **Ví dụ**: Sử dụng các higher-order functions như `map`, `reduce`, `filter` để thao tác với dữ liệu mà không thay đổi trạng thái của nó.

```javascript
// Functional Programming
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // Kết quả: 15
```

### Sự khác biệt chính:

- **Imperative Programming** tập trung vào cách thực hiện từng bước cụ thể để đạt được kết quả, trong khi **Functional Programming** tập trung vào việc sử dụng các hàm và thao tác trên dữ liệu mà không làm thay đổi trạng thái của nó.
- **Imperative Programming** thường dễ hiểu với việc mô tả cụ thể các bước, trong khi **Functional Programming** thường dễ bảo trì và tái sử dụng với việc sử dụng các hàm không thay đổi trạng thái và có khả năng tái sử dụng cao.

Khi trả lời câu hỏi trong phỏng vấn, bạn có thể nêu rõ sự khác biệt giữa imperative programming và functional programming trong JavaScript bằng cách so sánh cách tiếp cận của chúng đối với việc viết mã và giải quyết vấn đề. Sử dụng ví dụ cụ thể như trên để minh họa cách thực hiện của cả hai phong cách này trong ngữ cảnh của JavaScript.

---
