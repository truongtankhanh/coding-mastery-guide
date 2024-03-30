## Sử dụng `Array.splice()` để thay đổi nội dung của mảng bằng cách xóa hoặc thêm các phần tử

**Khái niệm:**

`Array.splice()` là phương thức được sử dụng để thay đổi nội dung của mảng bằng cách xóa hoặc thêm các phần tử.

**Ngữ cảnh sử dụng:**

- Xóa các phần tử khỏi mảng.
- Thêm các phần tử vào mảng.
- Thay thế các phần tử trong mảng.

**Cách sử dụng:**

**1. Xóa phần tử khỏi mảng:**

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.splice(2, 1);

console.log(numbers); // [1, 2, 4, 5]
```

**2. Thêm phần tử vào mảng:**

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.splice(2, 0, "a", "b");

console.log(numbers); // [1, 2, "a", "b", 3, 4, 5]
```

**3. Thay thế phần tử trong mảng:**

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.splice(2, 1, "c");

console.log(numbers); // [1, 2, "c", 4, 5]
```

**Cấu trúc:**

- `array.splice(start, deleteCount, items)`:
  - `array`: Mảng cần thay đổi nội dung.
  - `start`: Chỉ số bắt đầu (bao gồm).
  - `deleteCount`: Số lượng phần tử cần xóa.
  - `items`: Các phần tử cần thêm vào mảng (tùy chọn).
  - Phương thức `Array.splice()` trả về một mảng chứa các phần tử đã bị xóa.

**Ví dụ:**

```javascript
const numbers = [1, 2, 3, 4, 5];

// Xóa phần tử thứ ba
numbers.splice(2, 1);

console.log(numbers); // [1, 2, 4, 5]

// Thêm hai phần tử vào vị trí thứ ba
numbers.splice(2, 0, "a", "b");

console.log(numbers); // [1, 2, "a", "b", 3, 4, 5]

// Thay thế phần tử thứ ba bằng một phần tử mới
numbers.splice(2, 1, "c");

console.log(numbers); // [1, 2, "c", 4, 5]
```

**Lưu ý:**

- Phương thức `Array.splice()` thay đổi mảng gốc.
- Nếu bạn không muốn thay đổi mảng gốc, hãy tạo một bản sao của mảng trước khi sử dụng `Array.splice()`.

**Tài liệu tham khảo:**

- Phương thức splice trong JavaScript: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

**Kết luận:**

`Array.splice()` là phương thức hữu ích giúp bạn thay đổi nội dung của mảng bằng cách xóa hoặc thêm các phần tử một cách dễ dàng và hiệu quả. Sử dụng `Array.splice()` giúp viết mã JavaScript ngắn gọn, dễ đọc và dễ hiểu hơn.
