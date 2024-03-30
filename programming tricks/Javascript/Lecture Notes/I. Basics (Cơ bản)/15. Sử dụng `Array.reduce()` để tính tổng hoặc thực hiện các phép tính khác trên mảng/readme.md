## Sử dụng `Array.reduce()` để tính tổng hoặc thực hiện các phép tính khác trên mảng

**Khái niệm:**

`Array.reduce()` là phương thức được cung cấp sẵn trong JavaScript để lặp qua các phần tử của mảng và tính toán một giá trị duy nhất.

**Ngữ cảnh sử dụng:**

`Array.reduce()` thường được sử dụng để:

- Tính tổng các phần tử trong mảng.
- Tìm giá trị lớn nhất hoặc nhỏ nhất trong mảng.
- Tính trung bình cộng các phần tử trong mảng.
- Thực hiện các phép toán khác trên mảng như cộng, trừ, nhân, chia.

**Cách sử dụng:**

Cú pháp cơ bản của `Array.reduce()`:

```javascript
const result = array.reduce((accumulator, currentValue) => {
  // ...
  return accumulator;
});
```

- `array`: Mảng mà bạn muốn thực hiện phép toán.
- `accumulator`: Biến tích lũy, lưu trữ kết quả của các lần tính toán trước đó.
- `currentValue`: Phần tử hiện tại của mảng đang được xử lý.
- `return`: Giá trị trả về của hàm `reduce()`, sẽ là giá trị cuối cùng của `accumulator`.

**Ví dụ:**

**1. Tính tổng các phần tử trong mảng:**

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, number) => total + number, 0);

console.log(sum); // 15
```

**2. Tìm giá trị lớn nhất trong mảng:**

```javascript
const numbers = [1, 2, 3, 4, 5];

const max = numbers.reduce((max, number) => Math.max(max, number), -Infinity);

console.log(max); // 5
```

**3. Tính trung bình cộng các phần tử trong mảng:**

```javascript
const numbers = [1, 2, 3, 4, 5];

const average = numbers.reduce((sum, number, index, array) => {
  sum += number;

  if (index === array.length - 1) {
    return sum / array.length;
  }

  return sum;
}, 0);

console.log(average); // 3
```

**Lưu ý:**

- `Array.reduce()` có thể sử dụng một giá trị khởi tạo cho `accumulator`.
- `Array.reduce()` có thể sử dụng ba tham số bổ sung: `currentIndex`, `array`.

**Kết luận:**

`Array.reduce()` là một phương thức hữu ích giúp bạn thực hiện các phép toán trên mảng một cách dễ dàng và hiệu quả. Sử dụng `Array.reduce()` giúp viết mã JavaScript ngắn gọn, dễ đọc và dễ hiểu hơn.
