### 1. Thẻ `<form>` - Tạo biểu mẫu:

**Khái niệm:**

Trong HTML, thẻ `<form>` được sử dụng để tạo một biểu mẫu trên trang web. Biểu mẫu này cho phép người dùng nhập dữ liệu và gửi nó đi để xử lý hoặc lưu trữ thông tin. Các phần tử nhập liệu như ô văn bản, nút radio, nút nhấn, và hộp kiểm có thể được đặt bên trong thẻ `<form>`.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<form>` là một phần cực kỳ quan trọng trong việc tạo ra các trang web tương tác. Nó cho phép người dùng gửi thông tin hoặc tương tác với trang web theo cách cụ thể. Các trường nhập liệu được đặt bên trong thẻ `<form>` để gửi dữ liệu cho máy chủ thông qua các phương thức như `POST` hoặc `GET`.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<form>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example Form</title>
  </head>
  <body>
    <h2>Đăng nhập</h2>

    <form action="/login" method="POST">
      <label for="username">Tên người dùng:</label><br />
      <input type="text" id="username" name="username" /><br />
      <label for="password">Mật khẩu:</label><br />
      <input type="password" id="password" name="password" /><br /><br />
      <input type="submit" value="Đăng nhập" />
    </form>
  </body>
</html>
```

Trong ví dụ này:

- Thẻ `<form>` được sử dụng để tạo một biểu mẫu đăng nhập.
- Thuộc tính `action` xác định đường dẫn mà dữ liệu biểu mẫu sẽ được gửi đến khi người dùng nhấn nút "Đăng nhập". Trong ví dụ này, dữ liệu sẽ được gửi đến `"/login"`.
- Thuộc tính `method` xác định phương thức gửi dữ liệu. Trong ví dụ này, dữ liệu sẽ được gửi bằng phương thức `POST`.
- Các phần tử nhập liệu như ô văn bản (`<input type="text">`) và ô mật khẩu (`<input type="password">`) được đặt trong thẻ `<form>` để người dùng có thể nhập thông tin.
- Nút submit (`<input type="submit">`) cho phép người dùng gửi dữ liệu biểu mẫu.

---

---

### 2. Thẻ `<input>` - Phần tử nhập liệu:

**Khái niệm:**

Trong HTML, thẻ `<input>` được sử dụng để tạo các ô nhập liệu như hộp văn bản, ô chọn, nút radio, và nút gửi. Điều này cho phép người dùng nhập dữ liệu hoặc thực hiện các hành động cụ thể trên trang web, như gửi dữ liệu biểu mẫu.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<input>` là một trong những phần tử quan trọng nhất trong HTML khi xây dựng các biểu mẫu hoặc các phần tương tác với người dùng. Bằng cách sử dụng các giá trị của thuộc tính `type`, `name`, và `placeholder`, bạn có thể tạo ra các loại ô nhập liệu khác nhau như hộp văn bản, ô chọn, nút radio, và nút gửi.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<input>` với các loại khác nhau:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Input Examples</title>
  </head>
  <body>
    <form action="/submit-form" method="POST">
      <label for="username">Username:</label><br />
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter your username"
      /><br />

      <label for="password">Password:</label><br />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
      /><br />

      <input type="checkbox" id="subscribe" name="subscribe" />
      <label for="subscribe">Subscribe to newsletter</label><br />

      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

Trong ví dụ này:

- Hai ô nhập liệu dạng hộp văn bản được tạo ra bằng cách sử dụng `<input type="text">` và `<input type="password">`. Người dùng có thể nhập tên người dùng và mật khẩu vào các ô này.
- Một ô chọn dạng checkbox được tạo ra bằng `<input type="checkbox">`, cho phép người dùng chọn hoặc bỏ chọn tùy ý.
- Một nút gửi dữ liệu biểu mẫu được tạo ra bằng `<input type="submit">`, cho phép người dùng gửi dữ liệu biểu mẫu đi khi nhấn vào nút này.

Mỗi `<input>` có thuộc tính `name` để xác định tên của phần tử trong dữ liệu biểu mẫu gửi đi, và thuộc tính `placeholder` để hiển thị một gợi ý cho người dùng.

---

---

### 3. Thẻ `<button>` - Tạo nút:

**Khái niệm:**

Trong HTML, thẻ `<button>` được sử dụng để tạo ra các nút trên trang web. Nút này có thể được sử dụng để thực hiện các hành động như gửi dữ liệu biểu mẫu hoặc đặt lại các trường nhập liệu.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<button>` là một phần quan trọng trong việc tạo ra các biểu mẫu tương tác trên trang web. Bằng cách sử dụng thuộc tính `type`, bạn có thể xác định hành động của nút là gửi dữ liệu (`submit`) hoặc xóa dữ liệu đã nhập (`reset`). Nút submit thường được sử dụng cùng với thẻ `<form>` để gửi dữ liệu biểu mẫu, trong khi nút reset thường được sử dụng để xóa dữ liệu đã nhập trong các trường hợp cần thiết.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<button>` trong HTML:

```html
<form action="/submit-form" method="POST">
  <input type="text" name="username" placeholder="Enter your username" /><br />
  <input
    type="password"
    name="password"
    placeholder="Enter your password"
  /><br />
  <input type="checkbox" name="subscribe" id="subscribe" />
  <label for="subscribe">Subscribe to newsletter</label><br />
  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
</form>
```

Trong ví dụ này:

- Hai ô nhập liệu dạng hộp văn bản và một ô chọn checkbox được tạo ra bằng các thẻ `<input>`.
- Hai nút được tạo ra bằng thẻ `<button>`. Nút đầu tiên có `type="submit"`, xác định rằng nút này sẽ gửi dữ liệu biểu mẫu đi khi được nhấn. Nút thứ hai có `type="reset"`, xác định rằng nút này sẽ xóa dữ liệu đã nhập trong biểu mẫu khi được nhấn.
- Cả hai nút được đặt trong thẻ `<form>`, do đó khi nhấn vào chúng, các hành động tương ứng sẽ được thực hiện trên biểu mẫu.

---

---
