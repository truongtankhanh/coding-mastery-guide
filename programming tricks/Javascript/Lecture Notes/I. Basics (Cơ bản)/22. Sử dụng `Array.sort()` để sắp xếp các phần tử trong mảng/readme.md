## Sử dụng `Array.sort()` để sắp xếp các phần tử trong mảng

**Khái niệm:**

`Array.sort()` là phương thức được sử dụng để sắp xếp các phần tử trong mảng theo thứ tự cụ thể.

**Ngữ cảnh sử dụng:**

- Sắp xếp các phần tử trong mảng theo thứ tự tăng dần hoặc giảm dần.
- Sắp xếp các phần tử trong mảng theo một thuộc tính cụ thể.
- Sắp xếp các phần tử trong mảng theo một logic tùy chỉnh.

**Cách sử dụng:**

**1. Sắp xếp theo thứ tự tăng dần:**

```javascript
const numbers = [5, 2, 3, 1, 4];

numbers.sort();

console.log(numbers); // [1, 2, 3, 4, 5]
```

**2. Sắp xếp theo thứ tự giảm dần:**

```javascript
const numbers = [5, 2, 3, 1, 4];

numbers.sort((a, b) => b - a);

console.log(numbers); // [5, 4, 3, 2, 1]
```

**3. Sắp xếp theo thuộc tính:**

```javascript
const objects = [
  { name: "John", age: 30 },
  { name: "Mary", age: 25 },
];

objects.sort((a, b) => a.age - b.age);

console.log(objects); // [{name: "Mary", age: 25}, {name: "John", age: 30}]
```

**4. Sắp xếp theo logic tùy chỉnh:**

```javascript
const strings = ["a", "c", "b"];

strings.sort((a, b) => {
  if (a === "b") {
    return 1;
  } else if (b === "b") {
    return -1;
  } else {
    return a.localeCompare(b);
  }
});

console.log(strings); // ["a", "b", "c"]
```

**Cấu trúc:**

- `array.sort(compareFunction)`:
  - `array`: Mảng cần sắp xếp.
  - `compareFunction`: Hàm so sánh hai phần tử trong mảng.
  - Hàm `compareFunction` trả về giá trị âm nếu phần tử thứ nhất cần được xếp trước phần tử thứ hai, giá trị dương nếu phần tử thứ nhất cần được xếp sau phần tử thứ hai, và 0 nếu hai phần tử bằng nhau.

**Lưu ý:**

- `Array.sort()` sắp xếp các phần tử trong mảng tại chỗ.
- Nếu bạn không muốn thay đổi mảng gốc, hãy tạo một bản sao của mảng trước khi sắp xếp.
- Hàm `compareFunction` là tùy chọn. Nếu bạn không truyền hàm `compareFunction`, các phần tử trong mảng sẽ được sắp xếp theo thứ tự bảng mã Unicode.

**Tài liệu tham khảo:**

- Hàm sort trong JavaScript: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

**Kết luận:**

`Array.sort()` là phương thức hữu ích giúp bạn sắp xếp các phần tử trong mảng một cách dễ dàng và hiệu quả. Sử dụng `Array.sort()` giúp viết mã JavaScript ngắn gọn, dễ đọc và dễ hiểu hơn.
