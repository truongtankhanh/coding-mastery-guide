## Sử dụng Arrow Functions để viết mã ngắn gọn hơn

**Khái niệm:**

Arrow functions (hàm mũi tên) là một tính năng mới được giới thiệu trong ES6 giúp viết mã JavaScript ngắn gọn và dễ đọc hơn so với các hàm truyền thống.

**Ngữ cảnh sử dụng:**

Arrow functions thường được sử dụng trong các trường hợp sau:

- Viết các hàm đơn giản với một biểu thức.
- Thay thế cho các hàm ẩn danh (anonymous functions).
- Sử dụng trong các phương thức array như `map`, `filter`, `reduce`.

**Cách sử dụng:**

Cú pháp cơ bản của arrow function:

```javascript
(parameter1, parameter2) => expression;
```

- `parameter1`, `parameter2`: Danh sách tham số của hàm.
- `expression`: Biểu thức được thực thi khi hàm được gọi.

**Ví dụ:**

**1. Viết hàm đơn giản:**

```javascript
const double = (number) => number * 2;

console.log(double(5)); // 10
```

**2. Thay thế cho hàm ẩn danh:**

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers); // [2, 4]
```

**3. Sử dụng trong phương thức array:**

```javascript
const sum = numbers.reduce((total, number) => total + number, 0);

console.log(sum); // 15
```

**So sánh với hàm truyền thống:**

```javascript
function double(number) {
  return number * 2;
}

console.log(double(5)); // 10
```

**Lưu ý:**

- Arrow functions không có từ khóa `function`.
- Arrow functions không có `this` binding của riêng mình.
- Arrow functions không thể được sử dụng như constructor functions.

**Tài liệu tham khảo:**

- Arrow function trong Javascript là gì? [https://kungfutech.edu.vn/bai-viet/javascript/arrow-function-trong-javascript](https://kungfutech.edu.vn/bai-viet/javascript/arrow-function-trong-javascript)
- ES6 Arrow Functions: [https://viblo.asia/p/es6-arrow-functions-QpmleLr9Zrd](https://viblo.asia/p/es6-arrow-functions-QpmleLr9Zrd)

**Kết luận:**

Arrow functions là một công cụ hữu ích giúp viết mã JavaScript ngắn gọn, dễ đọc và dễ hiểu hơn. Sử dụng arrow functions giúp tăng hiệu quả và năng suất của lập trình viên.
