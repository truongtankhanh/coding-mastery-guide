## Sử dụng `Array.from()` cùng với hàm map để tạo một mảng mới từ một mảng hoặc iterable khác

**Khái niệm:**

- `Array.from()`: Phương thức tạo mảng mới từ iterable object.
- `map()`: Phương thức áp dụng một hàm cho từng phần tử của mảng và trả về một mảng mới với kết quả.

**Ngữ cảnh sử dụng:**

- Tạo mảng mới từ iterable object như string, map, set, etc.
- Biến đổi các phần tử của mảng dựa trên một hàm.
- Kết hợp hai phương thức để tạo mảng mới với các phần tử được biến đổi.

**Cách sử dụng:**

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = Array.from(numbers, (number) => number * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

**Cấu trúc:**

- `Array.from(iterable, mapFn)`:
  - `iterable`: Iterable object cần chuyển đổi thành mảng.
  - `mapFn`: Hàm được áp dụng cho từng phần tử của iterable object.
  - Hàm `mapFn` nhận một phần tử làm tham số và trả về giá trị mới cho phần tử đó.

**Ví dụ:**

```javascript
const numbers = [1, 2, 3, 4, 5];

// Tạo mảng mới với các phần tử được nhân đôi
const doubledNumbers = Array.from(numbers, (number) => number * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

const strings = ["a", "b", "c"];

// Tạo mảng mới với các phần tử được viết hoa
const upperCaseStrings = Array.from(strings, (string) => string.toUpperCase());

console.log(upperCaseStrings); // ["A", "B", "C"]
```

**Lưu ý:**

- Phương thức `Array.from()` có thể sử dụng với bất kỳ iterable object nào.
- Hàm `mapFn` là tùy chọn. Nếu không truyền `mapFn`, `Array.from()` sẽ tạo mảng mới với các phần tử giống như iterable object gốc.

**Tài liệu tham khảo:**

- Phương thức Array.from(): [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- Phương thức map(): [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

**Kết luận:**

Sử dụng `Array.from()` cùng với hàm `map` là cách hiệu quả để tạo mảng mới từ iterable object và biến đổi các phần tử của mảng dựa trên một hàm. Cách sử dụng này giúp viết mã JavaScript ngắn gọn, dễ đọc và dễ hiểu hơn.

**So sánh với cách sử dụng for loop:**

Trước đây, người ta thường sử dụng vòng lặp `for` để tạo mảng mới từ iterable object. Tuy nhiên, cách sử dụng `Array.from()` cùng với hàm `map` có một số ưu điểm:

- Ngắn gọn hơn và dễ đọc hơn.
- Hiệu quả hơn về mặt hiệu suất.
- Dễ dàng kết hợp với các phương thức khác của Array.
