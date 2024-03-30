## Sử dụng `localStorage` hoặc `sessionStorage` để lưu trữ dữ liệu cục bộ trên trình duyệt

**Khái niệm:**

- **`localStorage`:** Lưu trữ dữ liệu vĩnh viễn trên trình duyệt, không bị xóa khi tắt trình duyệt hoặc khởi động lại máy tính.
- **`sessionStorage`:** Lưu trữ dữ liệu tạm thời trên trình duyệt, dữ liệu sẽ bị xóa khi tắt trình duyệt.

**Ngữ cảnh sử dụng:**

- Lưu trữ các cài đặt của người dùng.
- Lưu trữ trạng thái của ứng dụng web.
- Lưu trữ dữ liệu tạm thời như giỏ hàng trong ứng dụng mua sắm.

**Cách sử dụng:**

**1. Lưu trữ dữ liệu:**

```javascript
// Lưu trữ dữ liệu vào localStorage
localStorage.setItem("key", "value");

// Lưu trữ dữ liệu vào sessionStorage
sessionStorage.setItem("key", "value");
```

**2. Truy xuất dữ liệu:**

```javascript
// Truy xuất dữ liệu từ localStorage
const value = localStorage.getItem("key");

// Truy xuất dữ liệu từ sessionStorage
const value = sessionStorage.getItem("key");
```

**3. Xóa dữ liệu:**

```javascript
// Xóa dữ liệu khỏi localStorage
localStorage.removeItem("key");

// Xóa dữ liệu khỏi sessionStorage
sessionStorage.removeItem("key");

// Xóa tất cả dữ liệu khỏi localStorage
localStorage.clear();

// Xóa tất cả dữ liệu khỏi sessionStorage
sessionStorage.clear();
```

**Ví dụ:**

```javascript
// Lưu trữ tên người dùng
localStorage.setItem("username", "johndoe");

// Truy xuất tên người dùng
const username = localStorage.getItem("username");

// Xóa tên người dùng
localStorage.removeItem("username");
```

**Lưu ý:**

- `localStorage` và `sessionStorage` chỉ lưu trữ dữ liệu dưới dạng string.
- Dung lượng lưu trữ của `localStorage` và `sessionStorage` có giới hạn.
- Nên sử dụng `localStorage` cho dữ liệu cần lưu trữ vĩnh viễn, và `sessionStorage` cho dữ liệu tạm thời.

**Tài liệu tham khảo:**

- Local Storage là gì? Cách hoạt động và những lưu ý khi sử dụng Local storage - Stringee: [https://stringee.com/vi/blog/post/local-storage-la-gi](https://stringee.com/vi/blog/post/local-storage-la-gi)
- Lưu Trữ Dữ Liệu Với localStorage và sessionStorage: [https://suntech.edu.vn/luu-tru-du-lieu-voi-localstorage-va-sessionstorage.sunpost.html](https://suntech.edu.vn/luu-tru-du-lieu-voi-localstorage-va-sessionstorage.sunpost.html)

**Kết luận:**

`localStorage` và `sessionStorage` là hai phương thức hữu ích để lưu trữ dữ liệu cục bộ trên trình duyệt. Sử dụng `localStorage` và `sessionStorage` giúp bạn lưu trữ các cài đặt, trạng thái và dữ liệu tạm thời của ứng dụng web một cách dễ dàng và hiệu quả.
