## Sử dụng `JSON.stringify()` và `JSON.parse()` để chuyển đổi giữa chuỗi JSON và object JavaScript

**Khái niệm:**

- **JSON:** JavaScript Object Notation, là một định dạng dữ liệu nhẹ và dễ sử dụng để trao đổi dữ liệu giữa các ứng dụng web.
- `JSON.stringify()`: Hàm được sử dụng để chuyển đổi một object JavaScript sang chuỗi JSON.
- `JSON.parse()`: Hàm được sử dụng để chuyển đổi một chuỗi JSON sang object JavaScript.

**Ngữ cảnh sử dụng:**

- Lưu trữ dữ liệu trên trình duyệt web.
- Gửi dữ liệu giữa các ứng dụng web.
- Trao đổi dữ liệu với API.

**Cách sử dụng:**

**1. Chuyển đổi object JavaScript sang chuỗi JSON:**

```javascript
const object = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};

const json = JSON.stringify(object);

console.log(json);
```

**Kết quả:**

```json
{
  "name": "John Doe",
  "age": 30,
  "address": {
    "street": "123 Main Street",
    "city": "New York",
    "state": "NY",
    "zip": "10001"
  }
}
```

**2. Chuyển đổi chuỗi JSON sang object JavaScript:**

```javascript
const json = `{"name":"John Doe","age":30,"address":{"street":"123 Main Street","city":"New York","state":"NY","zip":"10001"}}`;

const object = JSON.parse(json);

console.log(object);
```

**Kết quả:**

```
{name: "John Doe", age: 30, address: {…}}
```

**Lưu ý:**

- `JSON.stringify()` chỉ chuyển đổi các thuộc tính có thể JSON hóa của object sang chuỗi JSON.
- `JSON.parse()` chỉ chuyển đổi chuỗi JSON hợp lệ sang object JavaScript.

**Tài liệu tham khảo:**

- JSON.stringify(): [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- JSON.parse(): [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

**Kết luận:**

`JSON.stringify()` và `JSON.parse()` là hai hàm hữu ích giúp bạn chuyển đổi giữa chuỗi JSON và object JavaScript một cách dễ dàng và hiệu quả. Sử dụng `JSON.stringify()` và `JSON.parse()` giúp viết mã JavaScript ngắn gọn, dễ đọc và dễ hiểu hơn.
