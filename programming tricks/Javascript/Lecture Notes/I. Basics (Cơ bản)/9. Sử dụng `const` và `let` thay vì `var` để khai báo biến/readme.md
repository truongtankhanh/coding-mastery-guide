## Sử dụng `const` và `let` thay vì `var` để khai báo biến

**Khái niệm:**

`const` và `let` là hai từ khóa mới được giới thiệu trong ES6 để khai báo biến với phạm vi và tính bất biến khác nhau. `var` là từ khóa khai báo biến truyền thống trong JavaScript.

**Ngữ cảnh sử dụng:**

Nên sử dụng `const` và `let` thay vì `var` vì những lý do sau:

- **Phạm vi:** `const` và `let` có phạm vi khối, trong khi `var` có phạm vi hàm.
- **Tính bất biến:** `const` không thể thay đổi giá trị sau khi được khai báo, trong khi `let` có thể thay đổi.
- **Khả năng đọc:** Sử dụng `const` và `let` giúp mã dễ đọc và dễ hiểu hơn.

**Cách sử dụng:**

**1. Sử dụng `const`:**

```javascript
const PI = 3.14159;

// PI = 3.14; // Lỗi: không thể thay đổi giá trị của biến const

console.log(PI); // 3.14159
```

**2. Sử dụng `let`:**

```javascript
let age = 30;

age = 31;

console.log(age); // 31
```

**3. So sánh `const`, `let` và `var`:**

| Từ khóa | Phạm vi | Tính bất biến   |
| ------- | ------- | --------------- |
| `const` | Khối    | Bất biến        |
| `let`   | Khối    | Có thể thay đổi |
| `var`   | Hàm     | Có thể thay đổi |

**Lưu ý:**

- Nên sử dụng `const` cho các biến không thay đổi giá trị, ví dụ như hằng số.
- Nên sử dụng `let` cho các biến thay đổi giá trị trong một khối.
- Nên hạn chế sử dụng `var` vì nó có thể dẫn đến lỗi và khó hiểu.

**Tài liệu tham khảo:**

- Phân biệt var, let, const và xử lý mảng trong Javascript: [https://blog.haposoft.com/phan-biet-let-var-const-va-xu-ly-mang-trong-javascript/](https://blog.haposoft.com/phan-biet-let-var-const-va-xu-ly-mang-trong-javascript/)

**Kết luận:**

Sử dụng `const` và `let` thay vì `var` là một cách tốt để viết mã JavaScript hiệu quả và dễ hiểu hơn.
