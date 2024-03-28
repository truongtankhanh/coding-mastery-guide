### Thẻ `<meta>` trong HTML

#### Khái niệm:

Thẻ `<meta>` trong HTML được sử dụng để định nghĩa thông tin về tài liệu HTML. Thông tin này thường không được hiển thị trực tiếp cho người dùng mà được sử dụng bởi trình duyệt web, các công cụ tìm kiếm, hoặc các dịch vụ khác để hiểu và xử lý tài liệu một cách chính xác.

#### Ngữ cảnh:

Khi bạn tạo một trang web, đôi khi bạn cần cung cấp thông tin bổ sung về trang web của bạn cho các công cụ tìm kiếm hoặc các dịch vụ khác. Thẻ `<meta>` được sử dụng để cung cấp các thông tin này, bao gồm mô tả của trang, từ khóa liên quan, tác giả, và các thông tin khác.

#### Cách sử dụng và ví dụ:

1. **Định nghĩa mô tả của trang (`description`)**:

   ```html
   <meta
     name="description"
     content="Mô tả ngắn gọn về nội dung của trang web"
   />
   ```

   Trong ví dụ này, chúng ta đang cung cấp một mô tả ngắn gọn về nội dung của trang web.

2. **Cung cấp từ khóa (`keywords`)**:

   ```html
   <meta name="keywords" content="HTML, CSS, JavaScript, Web Development" />
   ```

   Thẻ này cho phép bạn liệt kê các từ khóa mà trang web của bạn liên quan đến.

3. **Xác định tác giả (`author`)**:

   ```html
   <meta name="author" content="Tên tác giả" />
   ```

   Thẻ này cho phép bạn xác định tác giả của trang web.

4. **Xác định bộ ký tự (`charset`)**:

   ```html
   <meta charset="UTF-8" />
   ```

   Thẻ này định nghĩa bộ ký tự UTF-8 được sử dụng cho trang web. Điều này quan trọng để đảm bảo rằng các ký tự được hiển thị đúng trên mọi trình duyệt.

5. **Thiết lập khung nhìn (`viewport`)**:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   ```
   Thẻ này cho phép bạn thiết lập khung nhìn (viewport) của trình duyệt, quan trọng cho việc tạo ra trang web đáp ứng (responsive).

#### Ví dụ hoàn chỉnh:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="description"
      content="Mô tả ngắn gọn về nội dung của trang web"
    />
    <meta name="keywords" content="HTML, CSS, JavaScript, Web Development" />
    <meta name="author" content="Tên tác giả" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tiêu đề của trang</title>
  </head>
  <body>
    <!-- Nội dung trang web -->
  </body>
</html>
```

Trong ví dụ này, chúng ta đã sử dụng các thẻ `<meta>` để cung cấp các thông tin quan trọng về trang web của chúng ta, giúp trình duyệt và các dịch vụ trực tuyến hiểu và xử lý trang web một cách chính xác.
