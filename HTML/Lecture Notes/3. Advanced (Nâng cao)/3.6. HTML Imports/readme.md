## Sử dụng thẻ `<link>` để nhập các tài liệu HTML khác vào tài liệu hiện tại.

### Khái Niệm:

Trong HTML, thẻ `<link>` không chỉ được sử dụng để liên kết với các tài nguyên bên ngoài như CSS, icon như đã thảo luận ở trên, mà còn được sử dụng để nhập các tài liệu HTML khác vào tài liệu hiện tại. Việc này giúp tạo ra một cấu trúc modul và phân tách tài liệu thành các phần nhỏ, dễ quản lý hơn.

### Ngữ Cảnh:

Khi phát triển các trang web lớn hoặc ứng dụng web với nhiều thành phần tái sử dụng, việc sử dụng thẻ `<link>` để nhập các tài liệu HTML khác vào tài liệu hiện tại là rất hữu ích. Điều này giúp tạo ra một cấu trúc modul và làm cho mã nguồn trở nên dễ quản lý và bảo trì hơn.

### Cách Sử Dụng và Ví Dụ:

Dưới đây là cách sử dụng thẻ `<link>` để nhập các tài liệu HTML khác vào tài liệu hiện tại:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Main Document</title>
    <!-- Liên kết với tài liệu HTML khác -->
    <link rel="import" href="sidebar.html" />
  </head>
  <body>
    <!-- Nội dung của trang web -->

    <!-- Thẻ <link> được sử dụng để nhập tài liệu HTML khác -->
    <link rel="import" href="sidebar.html" />
  </body>
</html>
```

Trong ví dụ trên, thẻ `<link>` được sử dụng với thuộc tính `rel="import"` để nhập tài liệu HTML khác vào tài liệu hiện tại. Đường dẫn của tài liệu cần nhập được chỉ định trong thuộc tính `href`.

### Ví Dụ Toàn Bộ:

Đây là một ví dụ cụ thể về cách sử dụng thẻ `<link>` để nhập một tài liệu HTML khác vào tài liệu hiện tại:

#### index.html:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Main Document</title>
    <!-- Liên kết với tài liệu HTML khác -->
    <link rel="import" href="sidebar.html" />
  </head>
  <body>
    <h1>Main Document Content</h1>

    <!-- Thẻ <link> được sử dụng để nhập tài liệu HTML khác -->
    <link rel="import" href="sidebar.html" />
  </body>
</html>
```

#### sidebar.html:

```html
<div id="sidebar">
  <h2>Sidebar Content</h2>
  <ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li><a href="#">Link 3</a></li>
  </ul>
</div>
```

Trong ví dụ này, tài liệu `index.html` sẽ nhập nội dung từ tài liệu `sidebar.html` vào trong trang. Điều này giúp tạo ra một trang web với cấu trúc modul và dễ dàng bảo trì.

---

---
