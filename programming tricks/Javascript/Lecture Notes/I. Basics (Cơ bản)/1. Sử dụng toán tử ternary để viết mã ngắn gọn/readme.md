## Sử dụng toán tử ternary để viết mã ngắn gọn

**Khái niệm:**

Toán tử ternary, hay còn gọi là toán tử ba ngôi, là một toán tử điều kiện trong JavaScript cho phép viết mã ngắn gọn hơn so với câu lệnh if/else.

**Cú pháp:**

```javascript
condition ? value1 : value2;
```

**Giải thích:**

- `condition`: Biểu thức điều kiện
- `value1`: Giá trị trả về nếu `condition` đúng
- `value2`: Giá trị trả về nếu `condition` sai

**Ngữ cảnh sử dụng:**

Toán tử ternary thường được sử dụng trong các trường hợp đơn giản, nơi chỉ cần kiểm tra một điều kiện và trả về một trong hai giá trị. Ví dụ:

- Gán giá trị mặc định cho biến:

```javascript
const age = 18;
const isAdult = age >= 18 ? "Trưởng thành" : "Dưới tuổi vị thành niên";
```

- So sánh hai giá trị và trả về giá trị lớn hơn:

```javascript
const num1 = 10;
const num2 = 20;
const max = num1 > num2 ? num1 : num2;
```

**Ví dụ:**

```javascript
// Sử dụng toán tử ternary để kiểm tra số chẵn lẻ

function isEven(number) {
  return number % 2 === 0 ? "Chẵn" : "Lẻ";
}

console.log(isEven(10)); // "Chẵn"
console.log(isEven(11)); // "Lẻ"

// Sử dụng toán tử ternary để gán giá trị mặc định

const name = "";
const greeting = name ? `Xin chào, ${name}` : "Xin chào!";

console.log(greeting); // "Xin chào!"
```

**Lưu ý:**

- Toán tử ternary chỉ nên sử dụng trong các trường hợp đơn giản. Việc sử dụng quá nhiều toán tử ternary có thể khiến mã trở nên khó đọc và khó hiểu.
- Nên sử dụng câu lệnh if/else cho các trường hợp phức tạp hơn.

**Tài liệu tham khảo:**

- Toán tử ternary trong JavaScript: [https://viblo.asia/p/mot-so-cach-viet-javascript-ngan-gon-hon-aWj53XneK6m](https://viblo.asia/p/mot-so-cach-viet-javascript-ngan-gon-hon-aWj53XneK6m)
- Cách sử dụng toán tử 3 ngôi trong JavaScript: [https://nodemy.vn/cach-su-dung-toan-tu-3-ngoi-trong-javascript/](https://nodemy.vn/cach-su-dung-toan-tu-3-ngoi-trong-javascript/)

**Kết luận:**

Toán tử ternary là một công cụ hữu ích giúp viết mã JavaScript ngắn gọn hơn. Tuy nhiên, cần sử dụng nó một cách hợp lý để đảm bảo tính dễ đọc và dễ hiểu của mã.
