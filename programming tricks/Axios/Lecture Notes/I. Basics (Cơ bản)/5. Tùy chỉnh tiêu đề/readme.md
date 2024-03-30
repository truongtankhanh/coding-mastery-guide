## Đặt tiêu đề trong Axios

**Tiêu đề** là các thông tin bổ sung được gửi cùng với yêu cầu HTTP. Tiêu đề giúp cung cấp thêm thông tin về yêu cầu, chẳng hạn như loại dữ liệu được yêu cầu, ngôn ngữ được sử dụng hoặc token xác thực.

### Khái niệm

**Tiêu đề** trong Axios được đặt trong đối tượng `headers`. Đối tượng `headers` có thể được định nghĩa trong cấu hình Axios hoặc trong từng yêu cầu riêng lẻ.

### Ngữ cảnh sử dụng

Đặt tiêu đề hữu ích trong các trường hợp sau:

- **Xác thực:** Gửi token xác thực để truy cập vào các API được bảo vệ.
- **Loại dữ liệu:** Xác định loại dữ liệu được yêu cầu hoặc gửi đi.
- **Ngôn ngữ:** Xác định ngôn ngữ được sử dụng trong yêu cầu.
- **Caching:** Xác định cách thức lưu trữ cache đối với phản hồi.

### Ví dụ sử dụng

**Cấu hình Axios:**

Dưới đây là ví dụ về cách đặt tiêu đề trong cấu hình Axios:

```javascript
const axios = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
```

Ví dụ này đặt hai tiêu đề:

- `Authorization`: Gửi token xác thực.
- `Content-Type`: Xác định loại dữ liệu được gửi đi là JSON.

**Từng yêu cầu riêng lẻ:**

Dưới đây là ví dụ về cách đặt tiêu đề trong từng yêu cầu riêng lẻ:

```javascript
const axios = axios.get("https://api.example.com/users", {
  headers: {
    "Accept-Language": "vi",
  },
});
```

Ví dụ này đặt tiêu đề `Accept-Language` để xác định ngôn ngữ được sử dụng trong yêu cầu là tiếng Việt.

## Lời kết

Đặt tiêu đề là một cách hiệu quả để cung cấp thêm thông tin về yêu cầu HTTP. Sử dụng tiêu đề giúp bạn xác thực, xác định loại dữ liệu, ngôn ngữ và kiểm soát caching cho các yêu cầu của bạn.
