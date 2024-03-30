# Các Mẹo Lập Trình JavaScript để Nâng Cao Hiệu Suất và Độ Bảo Trì

JavaScript là một ngôn ngữ lập trình linh hoạt và mạnh mẽ được sử dụng rộng rãi trong phát triển web và ứng dụng di động. Dưới đây là một số mẹo lập trình để tối ưu hóa mã JavaScript của bạn và nâng cao hiệu suất:

## 1. Sử dụng `const` và `let` thay vì `var`:

- `const` và `let` giới hạn phạm vi của biến trong các khối mã, giúp tránh các lỗi và xung đột biến.
- `const` được sử dụng cho các biến không thay đổi giá trị, trong khi `let` được sử dụng cho các biến có thể thay đổi giá trị.

```javascript
const PI = 3.14;
let count = 0;
```

## 2. Sử dụng Arrow Functions:

- Arrow functions giúp viết mã ngắn gọn hơn và làm cho mã của bạn dễ đọc hơn.

```javascript
const add = (a, b) => a + b;
```

## 3. Sử dụng Destructuring:

- Destructuring giúp bạn trích xuất các giá trị từ mảng hoặc đối tượng một cách dễ dàng.

```javascript
const person = { name: "John", age: 30 };
const { name, age } = person;
```

## 4. Sử dụng Template Literals:

- Template literals cho phép bạn tạo các chuỗi nhiều dòng và chèn biểu thức vào bên trong chuỗi.

```javascript
const name = "John";
console.log(`Hello, ${name}!`);
```

## 5. Sử dụng Rest Parameters và Spread Syntax:

- Rest parameters (`...args`) cho phép bạn truyền một số lượng biến động của đối số vào hàm.
- Spread syntax (`...array`) cho phép bạn mở rộng một mảng hoặc một đối tượng thành các thành phần riêng lẻ.

```javascript
function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
```

## 6. Sử dụng Map, Filter và Reduce:

- Các phương pháp này làm cho việc thao tác mảng trở nên dễ dàng hơn và mã của bạn trở nên sạch sẽ hơn.

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);
const evenNumbers = numbers.filter((num) => num % 2 === 0);
const sum = numbers.reduce((total, num) => total + num, 0);
```

## 7. Sử dụng Promises và Async/Await:

- Promises và async/await giúp xử lý các tác vụ bất đồng bộ một cách dễ dàng và dễ đọc hơn.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    // Logic to fetch data
    if (data) {
      resolve(data);
    } else {
      reject("Error fetching data");
    }
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```
