## Sử dụng `forEach()` để lặp qua các phần tử trong mảng

**Khái niệm:**

`forEach()` là phương thức có sẵn của mảng trong JavaScript, cho phép lặp qua từng phần tử của mảng và thực hiện một hành động nào đó.

**Ngữ cảnh sử dụng:**

`forEach()` thường được sử dụng trong các trường hợp sau:

- Duyệt qua mảng và thực hiện một hành động trên mỗi phần tử (ví dụ: in ra giá trị, tính toán,...)
- Tìm kiếm một phần tử cụ thể trong mảng
- Lọc các phần tử trong mảng dựa trên một điều kiện

**Cách sử dụng:**

Cú pháp cơ bản của `forEach()` như sau:

```javascript
array.forEach(callback);
```

- `array`: Mảng cần lặp qua
- `callback`: Hàm được gọi cho mỗi phần tử trong mảng

Hàm `callback` nhận vào ba tham số:

- `value`: Giá trị của phần tử hiện tại
- `index`: Vị trí của phần tử hiện tại trong mảng
- `array`: Mảng ban đầu

**Ví dụ:**

```javascript
const fruits = ["Táo", "Cam", "Chuối", "Dưa hấu"];

// In ra giá trị của mỗi phần tử trong mảng

fruits.forEach((fruit) => {
  console.log(fruit);
});

// Tìm kiếm phần tử "Chuối" trong mảng

const isBananaFound = fruits.some((fruit) => fruit === "Chuối");

console.log(isBananaFound); // true

// Lọc các phần tử có độ dài lớn hơn 5 ký tự

const longFruits = fruits.filter((fruit) => fruit.length > 5);

console.log(longFruits); // ["Dưa hấu"]
```

**Lưu ý:**

- `forEach()` không thay đổi mảng ban đầu.
- Nên sử dụng `forEach()` thay vì vòng lặp for thông thường để viết mã ngắn gọn và dễ đọc hơn.

**Tài liệu tham khảo:**

- Phương thức forEach trong JavaScript: [https://viblo.asia/p/su-dung-foreach-de-duyet-mang-trong-javascript-XL6lARrN5ek](https://viblo.asia/p/su-dung-foreach-de-duyet-mang-trong-javascript-XL6lARrN5ek)
- Vòng lặp forEach trong JavaScript: [https://kungfutech.edu.vn/bai-viet/javascript/tim-hieu-ve-foreach-trong-javascript](https://kungfutech.edu.vn/bai-viet/javascript/tim-hieu-ve-foreach-trong-javascript)

**Kết luận:**

`forEach()` là một phương thức hữu ích để lặp qua các phần tử trong mảng và thực hiện các thao tác khác nhau. Sử dụng `forEach()` giúp viết mã JavaScript ngắn gọn, dễ đọc và dễ hiểu hơn.
