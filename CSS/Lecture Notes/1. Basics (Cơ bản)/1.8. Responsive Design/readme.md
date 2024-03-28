## Media queries.

**Khái Niệm:**
Media queries là một tính năng trong CSS cho phép bạn điều chỉnh kiểu dáng của trang web dựa trên các điều kiện như kích thước màn hình, độ phân giải, hoặc loại thiết bị.

**Ngữ Cảnh:**
Với sự phát triển của thiết bị di động và đa dạng của kích thước màn hình, việc sử dụng media queries là cần thiết để đảm bảo trang web hiển thị đẹp mắt và có trải nghiệm người dùng tốt trên mọi thiết bị.

**Cách Sử Dụng và Ví Dụ:**
Dưới đây là một ví dụ về cách sử dụng media queries để điều chỉnh kiểu dáng của một trang web:

```css
/* Quy tắc CSS mặc định */
body {
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #333;
}

/* Sử dụng media query để điều chỉnh kiểu dáng cho màn hình có độ rộng nhỏ hơn 768px */
@media only screen and (max-width: 768px) {
  body {
    font-size: 14px;
  }
  .header {
    display: none; /* Ẩn header khi màn hình nhỏ hơn 768px */
  }
}

/* Sử dụng media query để điều chỉnh kiểu dáng cho màn hình có độ rộng lớn hơn hoặc bằng 768px */
@media only screen and (min-width: 768px) {
  .sidebar {
    float: left;
    width: 30%;
  }
  .content {
    float: right;
    width: 70%;
  }
}
```

Trong ví dụ này:

- Mặc định, trang web sẽ sử dụng font-size là 16px.
- Khi màn hình có độ rộng nhỏ hơn 768px, font-size sẽ được giảm xuống còn 14px và header sẽ được ẩn đi.
- Khi màn hình có độ rộng lớn hơn hoặc bằng 768px, sidebar sẽ chiếm 30% chiều rộng và content sẽ chiếm 70% chiều rộng.

Media queries cho phép bạn tùy chỉnh kiểu dáng của trang web dựa trên các điều kiện như kích thước màn hình, độ phân giải, hoặc loại thiết bị. Điều này giúp trang web của bạn hiển thị đẹp mắt và có trải nghiệm người dùng tốt trên mọi thiết bị.

---

---

## Fluid layouts.

**Khái Niệm:**
Trong phát triển web, "fluid layouts" là kiểu bố cục linh hoạt được thiết kế để tự động điều chỉnh kích thước và bố trí của các phần tử trên trang web dựa trên kích thước của màn hình hoặc cửa sổ trình duyệt. Điều này giúp trang web tự động thích ứng với nhiều loại thiết bị và kích thước màn hình khác nhau, bao gồm cả máy tính để bàn, máy tính bảng và điện thoại di động.

**Ngữ Cảnh:**
Trong một thế giới đa thiết bị, fluid layouts giúp đảm bảo rằng trang web sẽ hiển thị đẹp mắt và dễ sử dụng trên mọi loại thiết bị mà không cần phải tạo ra nhiều phiên bản của trang.

**Cách Sử Dụng và Ví Dụ:**
Dưới đây là cách tạo một fluid layout bằng CSS:

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fluid Layout</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Fluid Layout Example</h1>
      </div>
      <div class="content">
        <p>
          This is a fluid layout example. The content will adjust its size based
          on the width of the viewport.
        </p>
      </div>
      <div class="footer">
        <p>Footer</p>
      </div>
    </div>
  </body>
</html>
```

**CSS (styles.css):**

```css
body,
html {
  margin: 0;
  padding: 0;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header,
.content,
.footer {
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}

@media screen and (min-width: 768px) {
  .header,
  .content,
  .footer {
    float: left;
    width: 30%;
  }
}
```

Trong ví dụ này:

- `.container` là phần tử chứa toàn bộ nội dung của trang.
- `.header`, `.content`, và `.footer` là các phần tử con trong `.container`.
- Khi màn hình có kích thước nhỏ hơn 768px, `.header`, `.content`, và `.footer` sẽ hiển thị theo chiều dọc. Khi kích thước màn hình lớn hơn 768px, chúng sẽ hiển thị theo chiều ngang.

Kỹ thuật fluid layouts cho phép trang web tự động thích ứng với nhiều kích thước màn hình khác nhau, tạo ra trải nghiệm người dùng tốt hơn trên nhiều thiết bị.

---

---

## Viewport meta tag.

**Khái Niệm:**
Trong phát triển web, thẻ `<meta>` viewport là một thẻ siêu dữ liệu trong phần `<head>` của trang HTML được sử dụng để điều chỉnh cách trình duyệt hiển thị nội dung trên các thiết bị di động. Thẻ viewport giúp kiểm soát các phép đo và zoom trên các thiết bị di động để đảm bảo rằng trang web hiển thị đúng cách trên các màn hình nhỏ.

**Ngữ Cảnh:**
Trong thời đại mà người dùng truy cập trang web từ nhiều thiết bị và kích thước màn hình khác nhau, việc sử dụng thẻ viewport meta tag là cần thiết để tạo ra trải nghiệm người dùng tốt nhất trên tất cả các thiết bị.

**Cách Sử Dụng và Ví Dụ:**
Dưới đây là một ví dụ cách sử dụng thẻ viewport meta tag trong trang HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Viewport Meta Tag Example</title>
  </head>
  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

Trong ví dụ này:

- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` là thẻ viewport meta tag.
- Thuộc tính `width=device-width` khai báo rằng chiều rộng của viewport sẽ bằng với chiều rộng của thiết bị.
- Thuộc tính `initial-scale=1.0` thiết lập tỉ lệ zoom mặc định của trang là 1.0, tức là không có zoom khi trang được tải lần đầu.

Khi sử dụng thẻ viewport meta tag, trang web sẽ hiển thị đúng cách trên các thiết bị di động và tránh các vấn đề về kích thước và zoom không mong muốn. Điều này giúp cải thiện trải nghiệm người dùng và đảm bảo rằng trang web của bạn sẽ hiển thị đẹp mắt và dễ đọc trên mọi thiết bị.

---

---
