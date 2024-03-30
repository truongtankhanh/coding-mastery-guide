## Sử dụng `Math` object để thực hiện các phép toán toán học

**Khái niệm:**

`Math` là một object được tích hợp sẵn trong JavaScript cung cấp các phương thức để thực hiện các phép toán toán học.

**Ngữ cảnh sử dụng:**

`Math` object được sử dụng trong các trường hợp sau:

- Thực hiện các phép toán toán học cơ bản như cộng, trừ, nhân, chia.
- Tính toán các giá trị lượng giác như sin, cos, tan.
- Tìm giá trị lớn nhất, nhỏ nhất, trung bình cộng của một tập hợp số.
- Làm tròn số, tạo số ngẫu nhiên.

**Cách sử dụng:**

**1. Phép toán toán học cơ bản:**

- `Math.sum(a, b)`: Cộng hai số a và b.
- `Math.difference(a, b)`: Trừ b từ a.
- `Math.product(a, b)`: Nhân a với b.
- `Math.quotient(a, b)`: Chia a cho b.

**2. Giá trị lượng giác:**

- `Math.sin(x)`: Tính sin của x (radian).
- `Math.cos(x)`: Tính cos của x (radian).
- `Math.tan(x)`: Tính tan của x (radian).

**3. Tìm giá trị:**

- `Math.max(a, b, ...)`: Tìm giá trị lớn nhất trong tập hợp số.
- `Math.min(a, b, ...)`: Tìm giá trị nhỏ nhất trong tập hợp số.
- `Math.average(a, b, ...)`: Tìm giá trị trung bình cộng của tập hợp số.

**4. Làm tròn số, số ngẫu nhiên:**

- `Math.round(x)`: Làm tròn số x đến số nguyên gần nhất.
- `Math.floor(x)`: Làm tròn số x xuống số nguyên gần nhất.
- `Math.ceil(x)`: Làm tròn số x lên số nguyên gần nhất.
- `Math.random()` : Tạo số ngẫu nhiên từ 0 đến 1.

**Ví dụ:**

```javascript
// Cộng hai số
const sum = Math.sum(1, 2);

console.log(sum); // 3

// Tính sin của 30 độ
const sin30 = Math.sin((30 * Math.PI) / 180);

console.log(sin30); // 0.5

// Tìm giá trị lớn nhất trong tập hợp số
const max = Math.max(1, 2, 3, 4, 5);

console.log(max); // 5

// Tạo số ngẫu nhiên
const randomNumber = Math.random();

console.log(randomNumber); // 0.23456789012345678
```

**Lưu ý:**

- `Math` object cung cấp nhiều phương thức khác ngoài những phương thức được đề cập ở trên.
- Bạn có thể tham khảo tài liệu tham khảo để biết thêm thông tin về `Math` object.

**Tài liệu tham khảo:**

- Math trong JavaScript - NIIT - ICT HÀ NỘI: [https://hanoiict.edu.vn/math-trong-javascript](https://hanoiict.edu.vn/math-trong-javascript)
- JavaScript Math Object: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

**Kết luận:**

`Math` object là một công cụ hữu ích giúp bạn thực hiện các phép toán toán học một cách dễ dàng và hiệu quả. Sử dụng `Math` object giúp viết mã JavaScript ngắn gọn, dễ đọc và dễ hiểu hơn.
