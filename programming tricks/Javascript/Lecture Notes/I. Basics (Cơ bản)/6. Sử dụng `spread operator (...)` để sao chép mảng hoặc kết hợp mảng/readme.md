## Sử dụng Spread Operator (...) trong JavaScript

**Khái niệm:**

Spread operator, hay còn gọi là toán tử ba chấm (`...`), là một cú pháp mới được giới thiệu trong ES6 cho phép trải các phần tử của một mảng hoặc đối tượng iterable (như Map, Set) thành các phần tử riêng biệt.

**Ngữ cảnh sử dụng:**

Spread operator có thể được sử dụng trong nhiều ngữ cảnh khác nhau, bao gồm:

- **Sao chép mảng:** Tạo một bản sao độc lập của một mảng hiện có.
- **Kết hợp mảng:** Ghép hai hoặc nhiều mảng thành một mảng mới.
- **Thêm phần tử vào mảng:** Thêm các phần tử mới vào một mảng hiện có mà không cần sử dụng phương thức `push()`.
- **Truyền tham số cho hàm:** Truyền các phần tử của một mảng vào một hàm dưới dạng các tham số riêng biệt.

**Cách sử dụng:**

**1. Sao chép mảng:**

```javascript
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // [1, 2, 3]

// Thay đổi copiedArray không ảnh hưởng đến originalArray
copiedArray[0] = 4;

console.log(originalArray); // [1, 2, 3]
```

**2. Kết hợp mảng:**

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(combinedArray); // [1, 2, 3, 4, 5, 6]
```

**3. Thêm phần tử vào mảng:**

```javascript
const fruits = ["Táo", "Cam"];
const newFruits = ["Chuối", "Dưa hấu"];

const allFruits = [...fruits, ...newFruits];

console.log(allFruits); // ["Táo", "Cam", "Chuối", "Dưa hấu"]
```

**4. Truyền tham số cho hàm:**

```javascript
function sum(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

const numbers = [1, 2, 3, 4, 5];
const sumOfNumbers = sum(...numbers);

console.log(sumOfNumbers); // 15
```

**Lưu ý:**

- Spread operator chỉ hoạt động với các đối tượng iterable.
- Khi sử dụng spread operator để sao chép mảng, nó sẽ tạo ra một bản sao độc lập của mảng ban đầu. Bất kỳ thay đổi nào được thực hiện trên bản sao sẽ không ảnh hưởng đến mảng ban đầu.

**Tài liệu tham khảo:**

- Spread operator trong JavaScript: [https://viblo.asia/p/su-dung-spread-operator-trong-javascript-gDVK24welLj](https://viblo.asia/p/su-dung-spread-operator-trong-javascript-gDVK24welLj)

**Kết luận:**

Spread operator là một công cụ mạnh mẽ và linh hoạt trong JavaScript giúp viết mã ngắn gọn, dễ đọc và dễ hiểu hơn. Sử dụng spread operator có thể giúp bạn thao tác với mảng một cách hiệu quả và đơn giản.
