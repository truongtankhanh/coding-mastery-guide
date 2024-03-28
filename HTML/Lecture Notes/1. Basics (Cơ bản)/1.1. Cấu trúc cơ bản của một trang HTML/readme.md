```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- Link to CSS file -->
    <link rel="stylesheet" href="styles.css" />
    <!-- Link to JavaScript file -->
    <script src="script.js"></script>
  </head>
  <body>
    <!-- Your content here -->
  </body>
</html>
```

---

---

### 1. Doctype:

Doctype (`<!DOCTYPE html>`) là một phần bắt buộc đầu tiên trong một tài liệu HTML và nó chỉ định phiên bản HTML mà trang web sử dụng.

```html
<!DOCTYPE html>
```

---

---

### 2. Thẻ `<html>`:

**Khái niệm:**

Trong HTML, thẻ `<html>` đánh dấu phần bắt đầu và kết thúc của tài liệu HTML. Nó bao quanh toàn bộ nội dung của trang web và là phần cơ bản nhất của một tài liệu HTML.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<html>` định nghĩa phần bắt đầu và kết thúc của một tài liệu HTML. Tất cả các phần của trang web, bao gồm tiêu đề, thẻ meta, thẻ body, và các phần tử khác, đều được đặt bên trong thẻ này.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<html>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML Document</title>
  </head>
  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

Trong ví dụ này:

- Thẻ `<html>` bao quanh toàn bộ nội dung của trang web.
- Tất cả các phần tử HTML khác như `<head>` và `<body>` đều được đặt bên trong thẻ `<html>`.
- Mọi thứ trên trang web, từ tiêu đề đến đoạn văn bản, đều nằm trong ngữ cảnh của thẻ `<html>`.

---

---

### 3. Thẻ `<head>`:

**Khái niệm:**

Trong HTML, thẻ `<head>` chứa các thông tin đầu mục của trang web như tiêu đề, các liên kết đến CSS, JavaScript, và các thông tin meta khác. Nó là một phần không hiển thị trực tiếp trên trình duyệt, nhưng chứa các thông tin quan trọng được sử dụng bởi trình duyệt và các công cụ tìm kiếm.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<head>` định nghĩa các thông tin quan trọng về trang web mà không được hiển thị trực tiếp cho người dùng. Điều này bao gồm tiêu đề của trang, các liên kết đến các tệp CSS và JavaScript, cũng như các thông tin meta như ngôn ngữ và mô tả trang. Tất cả các phần tử trong thẻ `<head>` đều ảnh hưởng đến cách trình duyệt hiển thị trang web.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<head>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Title of the Document</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="script.js"></script>
  </head>
  <body>
    <!-- Nội dung của trang web -->
  </body>
</html>
```

Trong ví dụ này:

- Thẻ `<head>` chứa các thông tin đầu mục của trang web, bao gồm các thẻ meta để chỉ định mã hóa ký tự, cấu hình hiển thị trên các thiết bị di động, tiêu đề của trang, các liên kết đến các tệp CSS và JavaScript.
- Các thông tin trong thẻ `<head>` không được hiển thị trên trình duyệt nhưng đóng vai trò quan trọng trong việc định dạng và hiển thị trang web.

---

---

### 4. Thẻ `<title>`:

**Khái niệm:**

Trong HTML, thẻ `<title>` định nghĩa tiêu đề của trang web. Tiêu đề này sẽ được hiển thị trên thanh tiêu đề của trình duyệt và là một phần quan trọng giúp người dùng nhận biết nội dung của trang web khi họ duyệt qua các tab hoặc bookmark.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<title>` được đặt trong phần `<head>` của tài liệu HTML và chỉ định tiêu đề của trang web. Nó không hiển thị trực tiếp trên trang web, nhưng sẽ xuất hiện trong thanh tiêu đề của trình duyệt khi người dùng truy cập vào trang.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<title>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Title of the Document</title>
  </head>
  <body>
    <!-- Nội dung của trang web -->
  </body>
</html>
```

Trong ví dụ này:

- Thẻ `<title>` được đặt trong phần `<head>` của tài liệu HTML.
- Nội dung bên trong thẻ `<title>` là "Title of the Document", điều này sẽ được hiển thị trên thanh tiêu đề của trình duyệt khi trang web được truy cập.

---

---

### 5. Thẻ `<body>`:

**Khái niệm:**

Trong HTML, thẻ `<body>` chứa nội dung hiển thị trên trình duyệt. Mọi thứ từ văn bản, hình ảnh, đến các phần tử khác đều được đặt trong thẻ này. Thẻ `<body>` là một phần quan trọng của tài liệu HTML vì nó chứa toàn bộ nội dung mà người dùng sẽ nhìn thấy và tương tác trên trình duyệt.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<body>` là nơi chứa tất cả nội dung mà người dùng sẽ thấy trên trang web, bao gồm văn bản, hình ảnh, liên kết, và các phần tử HTML khác. Bất kỳ phần tử HTML nào được đặt bên trong thẻ `<body>` sẽ được hiển thị trên trình duyệt của người dùng.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<body>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
    <img src="example.jpg" alt="Example Image" />
    <a href="https://www.example.com">Visit Example Website</a>
  </body>
</html>
```

Trong ví dụ này:

- Tất cả các phần tử HTML như `<h1>`, `<p>`, `<img>`, và `<a>` đều được đặt bên trong thẻ `<body>`.
- Nội dung bên trong thẻ `<body>` bao gồm một tiêu đề, một đoạn văn bản, một hình ảnh, và một liên kết. Tất cả các phần tử này sẽ được hiển thị trên trình duyệt khi trang web được truy cập.

---

---
