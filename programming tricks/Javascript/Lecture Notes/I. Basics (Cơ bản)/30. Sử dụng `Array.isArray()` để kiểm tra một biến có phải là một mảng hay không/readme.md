## Sử dụng `Array.isArray()` để kiểm tra một biến có phải là một mảng hay không

**Khái niệm:**

`Array.isArray()` là phương thức được sử dụng để kiểm tra xem một biến có phải là một mảng hay không.

**Ngữ cảnh sử dụng:**

- Viết mã an toàn và tránh lỗi.
- Xác định kiểu dữ liệu của biến trước khi thực hiện các thao tác.
- Sử dụng trong các điều kiện logic.

**Cách sử dụng:**

```javascript
const numbers = [1, 2, 3, 4, 5];

const isArray = Array.isArray(numbers);

console.log(isArray); // true
```

**Cấu trúc:**

- `Array.isArray(variable)`:
  - `variable`: Biến cần kiểm tra.
  - Phương thức `Array.isArray()` trả về `true` nếu biến là mảng, `false` nếu không.

**Ví dụ:**

```javascript
const numbers = [1, 2, 3, 4, 5];

// Kiểm tra xem numbers có phải là mảng hay không
const isArray = Array.isArray(numbers);

console.log(isArray); // true

const string = "Hello world!";

// Kiểm tra xem string có phải là mảng hay không
const isArray = Array.isArray(string);

console.log(isArray); // false
```

**Lưu ý:**

- Phương thức `Array.isArray()` chỉ kiểm tra xem biến có phải là mảng hay không. Nó không kiểm tra xem biến có phải là mảng rỗng hay không.
- Để kiểm tra xem biến có phải là mảng rỗng hay không, hãy sử dụng thuộc tính `length`.

**Tài liệu tham khảo:**

- Phương thức Array.isArray(): [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

**Kết luận:**

`Array.isArray()` là phương thức đơn giản và hiệu quả để kiểm tra xem một biến có phải là một mảng hay không. Sử dụng `Array.isArray()` giúp viết mã JavaScript an toàn, dễ đọc và dễ hiểu hơn.

**So sánh với các cách khác:**

Có một số cách khác để kiểm tra xem một biến có phải là một mảng hay không, chẳng hạn như:

- Kiểm tra kiểu dữ liệu của biến bằng cách sử dụng `typeof`.
- Kiểm tra thuộc tính `length` của biến.

Tuy nhiên, cách sử dụng `Array.isArray()` là cách ngắn gọn và dễ đọc nhất.
