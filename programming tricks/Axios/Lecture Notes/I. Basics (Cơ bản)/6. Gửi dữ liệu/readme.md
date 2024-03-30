## Gửi dữ liệu với Axios

**Axios** là một thư viện JavaScript phổ biến giúp đơn giản hóa việc thực hiện các yêu cầu HTTP. Axios hỗ trợ gửi dữ liệu với các yêu cầu POST, PUT và PATCH.

### Khái niệm

**Gửi dữ liệu** với Axios được thực hiện thông qua đối tượng `data`. Đối tượng `data` có thể chứa bất kỳ loại dữ liệu JavaScript nào, chẳng hạn như object, array, string hoặc number.

### Ngữ cảnh sử dụng

Gửi dữ liệu hữu ích trong các trường hợp sau:

- **Tạo mới dữ liệu:** Gửi dữ liệu mới đến API để tạo một bản ghi mới.
- **Cập nhật dữ liệu:** Gửi dữ liệu cập nhật đến API để thay đổi thông tin của một bản ghi hiện có.
- **Xóa dữ liệu:** Gửi yêu cầu đến API để xóa một bản ghi.

### Ví dụ sử dụng

**Yêu cầu POST:**

Dưới đây là ví dụ về cách gửi dữ liệu với yêu cầu POST:

```javascript
const data = {
  name: "John Doe",
  email: "johndoe@example.com",
};

axios.post("https://api.example.com/users", data);
```

Ví dụ này gửi dữ liệu trong object `data` đến API với yêu cầu POST.

**Yêu cầu PUT:**

Dưới đây là ví dụ về cách gửi dữ liệu với yêu cầu PUT:

```javascript
const data = {
  name: "Jane Doe",
  email: "janedoe@example.com",
};

axios.put("https://api.example.com/users/1", data);
```

Ví dụ này gửi dữ liệu trong object `data` đến API với yêu cầu PUT để cập nhật thông tin của người dùng có ID là 1.

**Yêu cầu PATCH:**

Dưới đây là ví dụ về cách gửi dữ liệu với yêu cầu PATCH:

```javascript
const data = {
  email: "janedoe@example.com",
};

axios.patch("https://api.example.com/users/1", data);
```

Ví dụ này gửi dữ liệu trong object `data` đến API với yêu cầu PATCH để cập nhật email của người dùng có ID là 1.

### Tham khảo thêm

- Tài liệu chính thức về gửi dữ liệu với Axios: [https://axios-http.com/docs/api_intro](https://axios-http.com/docs/api_intro)

## Lời kết

Gửi dữ liệu là một tính năng quan trọng của Axios. Sử dụng Axios giúp bạn dễ dàng gửi dữ liệu đến API với các yêu cầu POST, PUT và PATCH.
