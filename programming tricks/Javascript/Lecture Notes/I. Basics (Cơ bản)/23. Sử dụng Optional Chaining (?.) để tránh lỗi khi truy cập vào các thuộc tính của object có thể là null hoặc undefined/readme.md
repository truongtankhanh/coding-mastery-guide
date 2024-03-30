## Sử dụng Optional Chaining (?.) để tránh lỗi khi truy cập vào các thuộc tính của object có thể là null hoặc undefined

**Khái niệm:**

**Optional Chaining (?.)** là toán tử được giới thiệu trong JavaScript ES2020 giúp truy cập an toàn vào các thuộc tính của object lồng nhau mà không cần kiểm tra null hoặc undefined.

**Ngữ cảnh sử dụng:**

- Khi bạn cần truy cập vào thuộc tính của object có thể là null hoặc undefined.
- Khi bạn muốn viết mã ngắn gọn và dễ đọc hơn.

**Cách sử dụng:**

```javascript
const user = {
  name: "John Doe",
  address: {
    city: "New York",
    state: "NY",
  },
};

// Truy cập an toàn vào thuộc tính `state`
const state = user?.address?.state;

console.log(state); // "NY"
```

**Cấu trúc:**

- `object?.property`:
  - `object`: Object cần truy cập thuộc tính.
  - `property`: Thuộc tính cần truy cập.
  - Nếu `object` là null hoặc undefined, toán tử `?.` sẽ trả về `undefined` ngay lập tức và không truy cập vào `property`.

**Ví dụ:**

```javascript
const user = null;

// Tránh lỗi khi truy cập `name` của object null
const name = user?.name;

console.log(name); // undefined

const person = {
  name: "John Doe",
  address: null,
};

// Tránh lỗi khi truy cập `city` của object null
const city = person?.address?.city;

console.log(city); // undefined
```

**Lưu ý:**

- Toán tử `?.` chỉ hoạt động với các thuộc tính trực tiếp của object.
- Nếu bạn cần truy cập vào thuộc tính lồng nhau sâu hơn, bạn cần sử dụng nhiều toán tử `?.`.
- Toán tử `?.` có thể được sử dụng với các toán tử khác như `&&` và `||`.

**Tài liệu tham khảo:**

- Toán tử Optional Chaining trong JavaScript: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- Sử dụng Optional Chaining (?.) trong Javascript: [https://viblo.asia/p/optional-chaining-va-nullish-coalescing-operator-trong-javascript-V3m5WQYwZO7](https://viblo.asia/p/optional-chaining-va-nullish-coalescing-operator-trong-javascript-V3m5WQYwZO7)

**Kết luận:**

**Optional Chaining (?.)** là toán tử hữu ích giúp bạn truy cập an toàn vào các thuộc tính của object lồng nhau một cách dễ dàng và hiệu quả. Sử dụng Optional Chaining giúp viết mã JavaScript ngắn gọn, dễ đọc và dễ hiểu hơn.
