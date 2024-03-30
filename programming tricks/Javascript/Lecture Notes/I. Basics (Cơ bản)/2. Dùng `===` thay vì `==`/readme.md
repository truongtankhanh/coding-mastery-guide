## Sử dụng `===` thay vì `==` trong JavaScript

**Khái niệm:**

- `==`: Toán tử so sánh bằng (so sánh giá trị)
- `===`: Toán tử so sánh bằng nghiêm ngặt (so sánh cả giá trị và kiểu dữ liệu)

**Ngữ cảnh sử dụng:**

Nên sử dụng `===` thay vì `==` trong hầu hết các trường hợp để đảm bảo tính chính xác và rõ ràng của mã.

**Lý do:**

- `==` có thể dẫn đến kết quả không mong muốn do nó thực hiện chuyển đổi kiểu dữ liệu trước khi so sánh. Ví dụ:

```javascript
"1" == 1; // true
```

- `===` không thực hiện chuyển đổi kiểu dữ liệu, do đó nó sẽ cho kết quả chính xác hơn. Ví dụ:

```javascript
"1" === 1; // false
```

**Ví dụ:**

```javascript
// So sánh hai giá trị số

const num1 = 10;
const num2 = "10";

console.log(num1 == num2); // true
console.log(num1 === num2); // false

// So sánh hai giá trị null và undefined

const x = null;
const y = undefined;

console.log(x == y); // true
console.log(x === y); // false
```

**Lưu ý:**

- Chỉ sử dụng `==` khi bạn thực sự muốn chuyển đổi kiểu dữ liệu trước khi so sánh.
- Nên sử dụng `===` để so sánh các giá trị Boolean, null, undefined, chuỗi và số.

**Tài liệu tham khảo:**

- Toán tử so sánh bằng và so sánh bằng nghiêm ngặt trong JavaScript: [https://www.w3schools.com/js/js_comparisons.asp](https://www.w3schools.com/js/js_comparisons.asp)

**Kết luận:**

Sử dụng `===` thay vì `==` là một thói quen tốt giúp viết mã JavaScript chính xác và rõ ràng hơn.
