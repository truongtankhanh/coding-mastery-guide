## Sử dụng `setTimeout()` hoặc `setInterval()` để thực hiện các hành động theo thời gian

**Khái niệm:**

- **`setTimeout()`:** Hàm được sử dụng để thực hiện một hành động sau một khoảng thời gian nhất định.
- **`setInterval()`:** Hàm được sử dụng để thực hiện một hành động lặp đi lặp lại sau mỗi khoảng thời gian nhất định.

**Ngữ cảnh sử dụng:**

- Hiển thị thông báo sau một khoảng thời gian.
- Cập nhật nội dung trang web theo thời gian thực.
- Tạo hiệu ứng động trên trang web.

**Cách sử dụng:**

**1. `setTimeout()`:**

```javascript
setTimeout(function () {
  // Hành động được thực hiện sau một khoảng thời gian
}, delay);
```

- `function`: Hàm chứa hành động muốn thực hiện.
- `delay`: Khoảng thời gian (tính bằng mili giây) trước khi thực hiện hành động.

**2. `setInterval()`:**

```javascript
setInterval(function () {
  // Hành động được thực hiện lặp đi lặp lại
}, delay);
```

- `function`: Hàm chứa hành động muốn thực hiện.
- `delay`: Khoảng thời gian (tính bằng mili giây) giữa mỗi lần thực hiện hành động.

**Ví dụ:**

**1. Hiển thị thông báo sau 3 giây:**

```javascript
setTimeout(function () {
  alert("Thông báo!");
}, 3000);
```

**2. Cập nhật nội dung trang web mỗi giây:**

```javascript
setInterval(function () {
  const date = new Date();
  const time = date.toLocaleTimeString();

  document.getElementById("time").innerHTML = time;
}, 1000);
```

**Lưu ý:**

- `setTimeout()` chỉ thực hiện hành động một lần, trong khi `setInterval()` thực hiện hành động lặp đi lặp lại.
- Để dừng hành động được thực hiện bởi `setInterval()`, bạn cần sử dụng hàm `clearInterval()`.

**Tài liệu tham khảo:**

- Hàm setTimeout trong Javascript - kungfu tech: [https://kungfutech.edu.vn/bai-viet/javascript/ham-settimeout-trong-javascript](https://kungfutech.edu.vn/bai-viet/javascript/ham-settimeout-trong-javascript)
- Hiểu về setTimeout và setInterval trong Javascript - TopDev: [https://topdev.vn/blog/ban-luan-ve-settimeout-va-setinterval-trong-javascript/](https://topdev.vn/blog/ban-luan-ve-settimeout-va-setinterval-trong-javascript/)

**Kết luận:**

`setTimeout()` và `setInterval()` là hai hàm hữu ích giúp bạn thực hiện các hành động theo thời gian. Sử dụng `setTimeout()` và `setInterval()` giúp bạn tạo ra các trang web động và tương tác với người dùng tốt hơn.
