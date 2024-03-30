## Sử dụng `Object.keys()` để lặp qua các key của một object

**Khái niệm:**

`Object.keys()` là một phương thức được cung cấp sẵn trong JavaScript để lấy ra một mảng chứa tất cả các key của một object.

**Ngữ cảnh sử dụng:**

`Object.keys()` thường được sử dụng trong các trường hợp sau:

- Lặp qua các key của một object để thực hiện một hành động nào đó.
- Truy xuất giá trị của một key cụ thể trong object.
- Kiểm tra xem một key có tồn tại trong object hay không.

**Cách sử dụng:**

Cú pháp cơ bản của `Object.keys()`:

```javascript
const keys = Object.keys(object);
```

- `object`: Object mà bạn muốn lấy key.
- `keys`: Mảng chứa tất cả các key của object.

**Ví dụ:**

```javascript
const person = {
  name: "John Doe",
  age: 30,
  gender: "male",
};

const keys = Object.keys(person);

console.log(keys); // ["name", "age", "gender"]

// Lặp qua các key và in ra giá trị
for (const key of keys) {
  console.log(person[key]);
}
```

**Lưu ý:**

- `Object.keys()` chỉ lấy ra các key của object, không lấy ra các giá trị.
- Thứ tự của các key trong mảng được trả về bởi `Object.keys()` không được đảm bảo.

**Tài liệu tham khảo:**

- Phương thức Object.keys() trong JavaScript: [https://viblo.asia/p/mot-so-cach-viet-javascript-ngan-gon-hon-aWj53XneK6m](https://viblo.asia/p/mot-so-cach-viet-javascript-ngan-gon-hon-aWj53XneK6m)

**Kết luận:**

`Object.keys()` là một phương thức hữu ích giúp bạn lặp qua các key của một object một cách dễ dàng và hiệu quả. Sử dụng `Object.keys()` giúp viết mã JavaScript ngắn gọn, dễ đọc và dễ hiểu hơn.
