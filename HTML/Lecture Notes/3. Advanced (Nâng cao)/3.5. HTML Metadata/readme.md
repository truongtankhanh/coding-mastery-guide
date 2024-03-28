## Sử dụng các thẻ meta để cung cấp thông tin về tài liệu như mô tả, từ khóa, tác giả, v.v.

### Khái Niệm:

Trong HTML, các thẻ `<meta>` được sử dụng để cung cấp thông tin về tài liệu web cho các trình duyệt và các công cụ tìm kiếm. Các thông tin này có thể bao gồm mô tả, từ khóa, tác giả, cấu trúc tài liệu, mã ngôn ngữ, và nhiều thông tin khác.

### Ngữ Cảnh:

Thông tin cung cấp bởi các thẻ `<meta>` giúp trình duyệt hiểu cách hiển thị và tìm kiếm tài liệu web. Nó cũng cung cấp thông tin quan trọng cho các công cụ tìm kiếm để hiển thị kết quả tìm kiếm phù hợp với người dùng.

### Cách Sử Dụng và Ví Dụ:

Dưới đây là các thẻ `<meta>` thông dụng và cách sử dụng chúng:

1. **Mô Tả (Description)**:

```html
<meta
  name="description"
  content="This is an example description for a web page."
/>
```

2. **Từ Khóa (Keywords)**:

```html
<meta name="keywords" content="HTML, CSS, JavaScript, web development" />
```

3. **Tác Giả (Author)**:

```html
<meta name="author" content="John Doe" />
```

4. **Xác Định Mã Ngôn Ngữ (Language)**:

```html
<meta http-equiv="Content-Language" content="en" />
```

5. **Xác Định Mã Kí Tự (Character Set)**:

```html
<meta charset="UTF-8" />
```

6. **Xác Định Thuộc Tính Robots (Robots Meta)**:

```html
<meta name="robots" content="index, follow" />
```

7. **Xác Định Viewport (Viewport)**:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Ví dụ Toàn Bộ:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="description"
      content="This is an example description for a web page."
    />
    <meta name="keywords" content="HTML, CSS, JavaScript, web development" />
    <meta name="author" content="John Doe" />
    <meta http-equiv="Content-Language" content="en" />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- Nội dung của trang web -->
  </body>
</html>
```

Trong ví dụ trên, các thẻ `<meta>` được sử dụng để cung cấp thông tin quan trọng về tài liệu web. Điều này giúp trình duyệt và các công cụ tìm kiếm hiểu và xử lý trang web một cách chính xác, cũng như cung cấp trải nghiệm tốt hơn cho người dùng khi tìm kiếm và truy cập vào trang web.

---

---

## Sử dụng các thẻ link để liên kết với các tài nguyên như CSS, icon, v.v.

### Khái Niệm:

Trong HTML, thẻ `<link>` được sử dụng để tạo liên kết với các tài nguyên bên ngoài như tệp CSS, biểu tượng (icon), hoặc tài liệu khác. Việc sử dụng thẻ `<link>` giúp trang web nạp các tài nguyên cần thiết và cung cấp một trải nghiệm người dùng tốt hơn.

### Ngữ Cảnh:

Khi xây dựng trang web, việc sử dụng CSS để tạo ra giao diện hấp dẫn và biểu tượng để cung cấp nhận dạng cho trang web là rất quan trọng. Sử dụng thẻ `<link>` giúp kết nối trang web với các tệp CSS, biểu tượng và các tài nguyên khác một cách dễ dàng và hiệu quả.

### Cách Sử Dụng và Ví Dụ:

Dưới đây là các cách sử dụng thẻ `<link>` để liên kết với các tài nguyên khác nhau:

1. **Liên Kết với Tệp CSS:**

```html
<link rel="stylesheet" type="text/css" href="styles.css" />
```

Trong ví dụ trên, tệp CSS có đường dẫn là "styles.css" được liên kết với trang web.

2. **Liên Kết với Biểu Tượng (Favicon):**

```html
<link rel="icon" type="image/png" href="favicon.png" />
```

Trong ví dụ trên, biểu tượng (favicon) có đường dẫn là "favicon.png" được liên kết với trang web.

3. **Liên Kết với Tài Nguyên Khác:**

```html
<link rel="resource" type="application/pdf" href="document.pdf" />
```

Trong ví dụ trên, một tài liệu PDF có đường dẫn là "document.pdf" được liên kết với trang web.

### Ví Dụ Toàn Bộ:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- Liên kết với tệp CSS -->
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <!-- Liên kết với biểu tượng (favicon) -->
    <link rel="icon" type="image/png" href="favicon.png" />
    <!-- Liên kết với tài liệu PDF -->
    <link rel="resource" type="application/pdf" href="document.pdf" />
  </head>
  <body>
    <!-- Nội dung của trang web -->
  </body>
</html>
```

Trong ví dụ trên, thẻ `<link>` được sử dụng để liên kết với các tài nguyên khác nhau như tệp CSS, biểu tượng và tài liệu PDF, giúp trang web hiển thị và hoạt động một cách chính xác và đầy đủ.

---

---
