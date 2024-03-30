## Sử dụng `filter()` để lọc các phần tử trong mảng

**Khái niệm:**

`filter()` là phương thức có sẵn của mảng trong JavaScript, cho phép lọc các phần tử trong mảng dựa trên một điều kiện.

**Ngữ cảnh sử dụng:**

`filter()` thường được sử dụng trong các trường hợp sau:

- Lấy ra các phần tử thỏa mãn một điều kiện nhất định từ mảng
- Loại bỏ các phần tử không mong muốn khỏi mảng
- Chia mảng thành các nhóm nhỏ hơn dựa trên các tiêu chí khác nhau

**Cách sử dụng:**

Cú pháp cơ bản của `filter()` như sau:

```javascript
const filteredArray = array.filter(callback);
```

- `array`: Mảng cần lọc
- `callback`: Hàm được gọi cho mỗi phần tử trong mảng

Hàm `callback` nhận vào ba tham số:

- `value`: Giá trị của phần tử hiện tại
- `index`: Vị trí của phần tử hiện tại trong mảng
- `array`: Mảng ban đầu

Hàm `callback` cần trả về `true` nếu muốn giữ lại phần tử hiện tại trong mảng mới, và `false` nếu muốn loại bỏ phần tử đó.

**Ví dụ:**

```javascript
const products = [
  { name: "Táo", price: 10000 },
  { name: "Cam", price: 15000 },
  { name: "Chuối", price: 5000 },
  { name: "Dưa hấu", price: 20000 },
];

// Lọc ra các sản phẩm có giá dưới 10.000đ

const cheapProducts = products.filter((product) => product.price < 10000);

console.log(cheapProducts); // [{ name: "Chuối", price: 5000 }]

// Lấy ra các sản phẩm có tên bắt đầu bằng chữ "C"

const productsStartingWithC = products.filter(
  (product) => product.name.charAt(0) === "C"
);

console.log(productsStartingWithC); // [{ name: "Cam", price: 15000 }, { name: "Chuối", price: 5000 }]
```

**Lưu ý:**

- `filter()` không thay đổi mảng ban đầu.
- Nên sử dụng `filter()` thay vì vòng lặp for thông thường để viết mã ngắn gọn và dễ đọc hơn.

**Tài liệu tham khảo:**

- Phương thức filter trong JavaScript: [https://viblo.asia/p/mot-so-cach-viet-javascript-ngan-gon-hon-aWj53XneK6m](https://viblo.asia/p/mot-so-cach-viet-javascript-ngan-gon-hon-aWj53XneK6m)

**Kết luận:**

`filter()` là một phương thức hữu ích để lọc các phần tử trong mảng dựa trên một điều kiện. Sử dụng `filter()` giúp viết mã JavaScript ngắn gọn, dễ đọc và dễ hiểu hơn.
