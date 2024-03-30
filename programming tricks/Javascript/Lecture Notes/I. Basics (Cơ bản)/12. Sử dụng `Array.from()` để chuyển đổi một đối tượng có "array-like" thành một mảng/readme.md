## Sử dụng `Array.from()` để chuyển đổi một đối tượng có "array-like" thành một mảng

**Khái niệm:**

`Array.from()` là một phương thức được cung cấp sẵn trong JavaScript để chuyển đổi một đối tượng có "array-like" thành một mảng thực sự.

**Đối tượng "array-like":**

Là một đối tượng có các thuộc tính sau:

- `length`: Thuộc tính này chứa số lượng phần tử trong đối tượng.
- Truy cập phần tử: Có thể truy cập các phần tử của đối tượng bằng cách sử dụng chỉ số.

**Ví dụ:**

- `arguments` object: Đối tượng chứa các tham số được truyền vào hàm.
- NodeList: Danh sách các node trong DOM.

**Ngữ cảnh sử dụng:**

`Array.from()` thường được sử dụng trong các trường hợp sau:

- Chuyển đổi một đối tượng "array-like" thành một mảng thực sự để có thể sử dụng các phương thức của mảng.
- Tạo một bản sao của một mảng hiện có.
- Lọc các phần tử của một mảng.

**Cách sử dụng:**

Cú pháp cơ bản của `Array.from()`:

```javascript
const array = Array.from(object);
```

- `object`: Đối tượng "array-like" mà bạn muốn chuyển đổi.
- `array`: Mảng mới được tạo từ đối tượng "array-like".

**Ví dụ:**

```javascript
// Chuyển đổi arguments object thành mảng
const args = Array.from(arguments);

console.log(args); // ["a", "b", "c"]

// Tạo một bản sao của mảng
const numbers = [1, 2, 3];
const copyNumbers = Array.from(numbers);

console.log(copyNumbers); // [1, 2, 3]

// Lọc các phần tử của mảng
const evenNumbers = Array.from(numbers, (number) => number % 2 === 0);

console.log(evenNumbers); // [2]
```

**Lưu ý:**

- `Array.from()` có thể sử dụng một hàm map để chuyển đổi các phần tử của đối tượng "array-like" trước khi thêm vào mảng mới.

**Kết luận:**

`Array.from()` là một phương thức hữu ích giúp bạn chuyển đổi một đối tượng "array-like" thành một mảng thực sự một cách dễ dàng và hiệu quả. Sử dụng `Array.from()` giúp viết mã JavaScript ngắn gọn, dễ đọc và dễ hiểu hơn.
