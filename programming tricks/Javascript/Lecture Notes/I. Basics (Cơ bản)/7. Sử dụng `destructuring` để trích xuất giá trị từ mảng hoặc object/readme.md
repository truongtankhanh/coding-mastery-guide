## Sử dụng Destructuring để trích xuất giá trị từ mảng hoặc object

**Khái niệm:**

Destructuring là một tính năng mới được giới thiệu trong ES6 cho phép bạn trích xuất các giá trị từ mảng hoặc object một cách dễ dàng và hiệu quả.

**Ngữ cảnh sử dụng:**

Destructuring thường được sử dụng trong các trường hợp sau:

- Truy xuất các thuộc tính cụ thể từ object.
- Lấy ra các phần tử cụ thể từ mảng.
- Gán các giá trị trích xuất được vào các biến mới.
- Làm cho mã ngắn gọn và dễ đọc hơn.

**Cách sử dụng:**

**1. Destructuring với object:**

```javascript
const person = {
  name: "John Doe",
  age: 30,
  gender: "male",
};

const { name, age } = person;

console.log(name); // "John Doe"
console.log(age); // 30
```

**2. Destructuring với mảng:**

```javascript
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
```

**3. Gán giá trị trích xuất được vào các biến mới:**

```javascript
const person = {
  name: "John Doe",
  age: 30,
  gender: "male",
};

const { name: fullName, age } = person;

console.log(fullName); // "John Doe"
console.log(age); // 30
```

**4. Destructuring với nested object:**

```javascript
const person = {
  name: "John Doe",
  age: 30,
  address: {
    city: "Hồ Chí Minh",
    country: "Việt Nam",
  },
};

const {
  name,
  address: { city },
} = person;

console.log(name); // "John Doe"
console.log(city); // "Hồ Chí Minh"
```

**Lưu ý:**

- Destructuring chỉ hoạt động với các object và mảng.
- Khi sử dụng destructuring, bạn cần phải biết tên của các thuộc tính hoặc phần tử mà bạn muốn trích xuất.

**Tài liệu tham khảo:**

- Destructuring assignment trong Javascript: [https://kungfutech.edu.vn/bai-viet/javascript/destructuring-assignment-trong-javascript](https://kungfutech.edu.vn/bai-viet/javascript/destructuring-assignment-trong-javascript)

**Kết luận:**

Destructuring là một tính năng hữu ích giúp bạn trích xuất giá trị từ mảng hoặc object một cách dễ dàng và hiệu quả. Sử dụng destructuring giúp viết mã ngắn gọn, dễ đọc và dễ hiểu hơn.
