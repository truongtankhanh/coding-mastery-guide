### Thẻ `<iframe>` trong HTML

#### Khái niệm:

Thẻ `<iframe>` trong HTML được sử dụng để nhúng nội dung từ một trang web khác vào trang web của bạn. Điều này cho phép bạn hiển thị nội dung từ một nguồn bên ngoài một cách dễ dàng trên trang web của mình, như video từ YouTube, bài viết từ một blog khác, hoặc bất kỳ loại nội dung web nào mà bạn muốn.

#### Ngữ cảnh:

Khi bạn muốn tích hợp nội dung từ một trang web hoặc ứng dụng khác vào trang web của mình một cách linh hoạt và tiện lợi, thẻ `<iframe>` là công cụ mạnh mẽ để làm điều này. Bạn có thể nhúng các trang web, ứng dụng web, hoặc phần tử web khác mà bạn muốn người dùng của bạn có thể truy cập trực tiếp từ trang web của bạn.

#### Cách sử dụng và ví dụ:

```html
<iframe
  src="url_to_external_page"
  width="600"
  height="400"
  frameborder="0"
></iframe>
```

Trong đoạn mã trên:

- Thuộc tính `src` xác định đường dẫn đến trang web hoặc tài nguyên ngoại tuyến bạn muốn nhúng vào.
- Thuộc tính `width` và `height` xác định kích thước của iframe trong trang web của bạn.
- Thuộc tính `frameborder="0"` được sử dụng để loại bỏ viền xung quanh iframe.

Ví dụ:

```html
<iframe
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  width="560"
  height="315"
  frameborder="0"
></iframe>
```

Trong ví dụ này, chúng ta nhúng một video từ YouTube vào trang web của mình bằng cách sử dụng thẻ `<iframe>`. URL của video được cung cấp trong thuộc tính `src`, và kích thước của iframe được đặt là 560x315 pixel. Người dùng có thể xem video trực tiếp từ trang web của bạn.
