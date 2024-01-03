Debugging trong JavaScript là quá trình tìm và sửa các lỗi trong mã của bạn. Công cụ chính để debugging là console, nơi bạn có thể hiển thị thông tin, biến, và cảnh báo từ mã JavaScript.

### Sử dụng Console để Debug:

#### In thông tin ra Console:

```javascript
console.log("Thông tin này sẽ được hiển thị trong console");
```

#### Cảnh báo và Lỗi:

```javascript
console.warn("Đây là cảnh báo!");
console.error("Đây là một lỗi!");
```

#### Hiển thị Giá trị Biến:

```javascript
let x = 10;
console.log(`Giá trị của x: ${x}`);
```

#### Xem Cấu Trúc Đối Tượng:

```javascript
let person = {
  name: "Alice",
  age: 30,
  city: "New York",
};
console.dir(person);
```

### Sử dụng Công cụ Debugging:

#### Trình duyệt DevTools:

Trình duyệt như Chrome hoặc Firefox cung cấp Công cụ Developer (DevTools) cho phép bạn debug JavaScript. Bạn có thể sử dụng DevTools để xem và thay đổi giá trị biến, theo dõi lịch sử call stack, và thậm chí là debug qua breakpoints (điểm dừng).

#### Sử dụng Breakpoints:

```javascript
function divide(a, b) {
  let result = a / b;
  debugger; // Tạo breakpoint ở đây
  return result;
}

console.log(divide(10, 2)); // Debugger sẽ dừng ở đây
```

### Ví dụ Tổng Hợp:

```javascript
function calculateSquareArea(sideLength) {
  if (typeof sideLength !== "number") {
    console.error("Vui lòng nhập một số.");
    return;
  }
  let area = sideLength * sideLength;
  console.log(`Diện tích hình vuông là: ${area}`);
}

calculateSquareArea(5); // Kết quả: Diện tích hình vuông là: 25
calculateSquareArea("abc"); // In ra lỗi trong console
```

Trong ví dụ này, hàm `calculateSquareArea` tính diện tích hình vuông từ chiều dài cạnh được truyền vào. Nếu đầu vào không phải là số, nó sẽ in ra một lỗi trong console sử dụng `console.error`.

Debugging và sử dụng console là những công cụ mạnh mẽ giúp bạn tìm và sửa lỗi trong JavaScript, giúp mã của bạn trở nên ổn định và chính xác hơn.
