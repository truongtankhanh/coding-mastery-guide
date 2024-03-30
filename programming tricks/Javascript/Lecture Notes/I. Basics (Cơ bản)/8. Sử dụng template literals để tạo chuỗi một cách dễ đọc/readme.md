## Sử dụng Template Literals để tạo chuỗi một cách dễ đọc

**Khái niệm:**

Template literals là một tính năng mới được giới thiệu trong ES6 cho phép tạo chuỗi một cách dễ dàng và linh hoạt hơn so với cách sử dụng chuỗi truyền thống.

**Ngữ cảnh sử dụng:**

Template literals thường được sử dụng trong các trường hợp sau:

- Tạo chuỗi đa dòng.
- Nhúng biểu thức JavaScript vào chuỗi.
- Định dạng chuỗi một cách dễ dàng.
- Làm cho mã ngắn gọn và dễ đọc hơn.

**Cách sử dụng:**

**1. Tạo chuỗi đa dòng:**

```javascript
const message = `Đây là một chuỗi
đa dòng
với template literals`;

console.log(message);
```

**2. Nhúng biểu thức JavaScript vào chuỗi:**

```javascript
const name = "John Doe";
const age = 30;

const greeting = `Chào ${name}, bạn ${age} tuổi rồi!`;

console.log(greeting);
```

**3. Định dạng chuỗi:**

```javascript
const price = 10000;

const formattedPrice = `Giá: ${price.toLocaleString()}đ`;

console.log(formattedPrice);
```

**4. Sử dụng các ký tự đặc biệt:**

Template literals cho phép bạn sử dụng các ký tự đặc biệt như `\n` (xuống dòng), `\t` (tab) và `\r` (carriage return) trong chuỗi của bạn.

**5. Template literals nâng cao:**

Ngoài những cách sử dụng cơ bản trên, template literals còn có thể sử dụng để tạo ra các chuỗi phức tạp hơn với các tính năng như tagged templates, expressions, và functions.

**Lưu ý:**

- Template literals được đánh dấu bằng dấu backtick (` `).
- Biểu thức JavaScript được nhúng vào chuỗi bằng cách sử dụng ${expression}.

**Tài liệu tham khảo:**

- Template literals trong JavaScript: [https://viblo.asia/p/tim-hieu-ve-template-literals-trong-javascript-XL6lA9MDlek](https://viblo.asia/p/tim-hieu-ve-template-literals-trong-javascript-XL6lA9MDlek)

**Kết luận:**

Template literals là một tính năng mạnh mẽ giúp bạn tạo chuỗi một cách dễ dàng, linh hoạt và dễ đọc hơn. Sử dụng template literals giúp viết mã JavaScript ngắn gọn và hiệu quả hơn.
