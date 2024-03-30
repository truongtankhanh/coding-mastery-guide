## Thủ thuật lập trình Axios - Gửi dữ liệu dạng form

**Khái niệm:**

**Gửi dữ liệu dạng form** là phương thức phổ biến để gửi dữ liệu từ ứng dụng web đến máy chủ. Dữ liệu dạng form được mã hóa theo định dạng URL-encoded.

**Ngữ cảnh:**

Gửi dữ liệu dạng form hữu ích trong các trường hợp sau:

- **Gửi dữ liệu đăng nhập:** Ví dụ, bạn có thể sử dụng dữ liệu dạng form để gửi tên người dùng và mật khẩu đến máy chủ để xác thực.
- **Gửi dữ liệu biểu mẫu:** Ví dụ, bạn có thể sử dụng dữ liệu dạng form để gửi thông tin liên hệ của người dùng đến máy chủ.

**Cách sử dụng:**

Để gửi dữ liệu dạng form bằng Axios, bạn sử dụng phương thức `POST` và thiết lập thuộc tính `data` của đối tượng cấu hình yêu cầu thành một đối tượng `FormData`.

Đối tượng `FormData` có thể được tạo từ một đối tượng JavaScript hoặc từ một element HTML `<form>`.

**Ví dụ:**

```javascript
const data = {
  username: "my-username",
  password: "my-password",
};

axios.post("/login", data).then((response) => {
  // Xử lý dữ liệu trả về
});
```

**Ví dụ chi tiết:**

Giả sử bạn có một biểu mẫu HTML với hai trường nhập liệu:

- **Tên:** `name`
- **Email:** `email`

Bạn có thể sử dụng Axios để gửi dữ liệu từ biểu mẫu này đến máy chủ:

```html
<form id="my-form">
  <input type="text" name="name" />
  <input type="email" name="email" />
  <button type="submit">Gửi</button>
</form>
```

```javascript
const form = document.getElementById("my-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  axios.post("/submit-form", formData).then((response) => {
    // Xử lý dữ liệu trả về
  });
});
```

**Lợi ích:**

- **Dễ sử dụng:** Việc sử dụng Axios để gửi dữ liệu dạng form rất dễ dàng và đơn giản.
- **Tương thích rộng rãi:** Dữ liệu dạng form được hỗ trợ bởi hầu hết các máy chủ web.

**Lưu ý:**

- Bạn nên đảm bảo rằng dữ liệu được gửi đến máy chủ là hợp lệ.
- Bạn nên sử dụng HTTPS để bảo mật dữ liệu được gửi đến máy chủ.
