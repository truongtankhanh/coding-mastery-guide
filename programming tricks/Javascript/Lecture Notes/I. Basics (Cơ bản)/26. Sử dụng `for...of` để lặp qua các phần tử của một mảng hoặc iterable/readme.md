## Sử dụng `for...of` để lặp qua các phần tử của một mảng hoặc iterable

**Khái niệm:**

`for...of` là vòng lặp được giới thiệu trong JavaScript ES6 để lặp qua các phần tử của một mảng hoặc iterable object.

**Ngữ cảnh sử dụng:**

- Lặp qua các phần tử của mảng.
- Lặp qua các phần tử của string.
- Lặp qua các phần tử của object có thể lặp lại (ví dụ: Map, Set).

**Cách sử dụng:**

```javascript
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}
```

**Cấu trúc:**

- `for (variable of iterable)`:
  - `variable`: Biến được gán giá trị từng phần tử của iterable object.
  - `iterable`: Mảng, string, hoặc object có thể lặp lại.

**Ví dụ:**

```javascript
const numbers = [1, 2, 3, 4, 5];

// Lặp qua các phần tử của mảng
for (const number of numbers) {
  console.log(number);
}

const string = "Hello world!";

// Lặp qua các ký tự của string
for (const character of string) {
  console.log(character);
}

const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

// Lặp qua các key-value pair của map
for (const [key, value] of map) {
  console.log(key, value);
}
```

**Lưu ý:**

- Vòng lặp `for...of` không lặp qua các thuộc tính của object.
- Nếu bạn muốn lặp qua các thuộc tính của object, hãy sử dụng `for...in`.

**Tài liệu tham khảo:**

- Vòng lặp for...of trong JavaScript: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

**Kết luận:**

`for...of` là vòng lặp hữu ích giúp bạn lặp qua các phần tử của mảng hoặc iterable object một cách dễ dàng và hiệu quả. Sử dụng `for...of` giúp viết mã JavaScript ngắn gọn, dễ đọc và dễ hiểu hơn.

**So sánh với vòng lặp for:**

Vòng lặp `for` truyền thống cũng có thể được sử dụng để lặp qua các phần tử của mảng. Tuy nhiên, vòng lặp `for...of` có một số ưu điểm:

- Dễ viết hơn và ngắn gọn hơn.
- Không cần sử dụng biến đếm.
- Tự động xử lý việc break và continue.

Do đó, trong hầu hết các trường hợp, nên sử dụng vòng lặp `for...of` thay vì vòng lặp `for` để lặp qua các phần tử của mảng hoặc iterable object.
