### 1. Thẻ `<header>`:

**Khái niệm:**

Trong HTML, thẻ `<header>` được sử dụng để xác định phần tiêu đề hoặc đầu trang của một trang web. Phần này thường chứa các thông tin quan trọng như logo, tiêu đề của trang, menu điều hướng, hoặc các phần tử khác liên quan đến tiêu đề của trang.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<header>` thường được đặt ở đầu trang HTML và bao gồm các phần tử có liên quan đến tiêu đề của trang. Điều này giúp người dùng dễ dàng nhận biết phần tiêu đề và tạo ra một trải nghiệm người dùng tốt hơn.

Thẻ `<header>` thường được sử dụng để:

1. Hiển thị logo của trang web.
2. Hiển thị tiêu đề chính của trang.
3. Hiển thị menu điều hướng.
4. Hiển thị các liên kết hoặc thông tin khác liên quan đến tiêu đề của trang.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<header>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example Page</title>
    <style>
      /* Định dạng CSS để làm đẹp header */
      header {
        background-color: #333;
        color: #fff;
        padding: 10px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Trang Chủ</h1>
      <nav>
        <ul>
          <li><a href="#">Trang Chủ</a></li>
          <li><a href="#">Giới Thiệu</a></li>
          <li><a href="#">Dịch Vụ</a></li>
          <li><a href="#">Liên Hệ</a></li>
        </ul>
      </nav>
    </header>

    <!-- Nội dung của trang web -->
  </body>
</html>
```

Trong ví dụ này:

- Thẻ `<header>` bao gồm một tiêu đề `<h1>` cho trang chính và một menu điều hướng `<nav>` được đặt trong một danh sách không thứ bậc `<ul>`.
- CSS được sử dụng để tạo một giao diện đẹp cho phần header bằng cách thiết lập màu nền, màu chữ, padding, và canh giữa nội dung.

---

---

### 2. Thẻ `<footer>`:

**Khái niệm:**

Trong HTML, thẻ `<footer>` được sử dụng để xác định phần cuối của một trang web. Phần này thường chứa các thông tin như thông tin liên hệ, thông tin bản quyền, các liên kết tới các trang khác hoặc bất kỳ nội dung cuối trang nào khác.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<footer>` thường được đặt ở cuối trang HTML và chứa các thông tin cuối trang cần được hiển thị cho người dùng. Việc đặt nội dung quan trọng như thông tin liên hệ hoặc thông tin bản quyền ở phần cuối trang giúp người dùng dễ dàng tìm thấy thông tin này.

Thẻ `<footer>` thường được sử dụng để:

1. Hiển thị thông tin liên hệ.
2. Hiển thị thông tin bản quyền.
3. Hiển thị các liên kết tới các trang khác trong trang web hoặc ngoài trang web.
4. Hiển thị các phần tử cuối trang khác như biểu tượng mạng xã hội, form đăng ký nhận tin, v.v.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<footer>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example Page</title>
    <style>
      /* Định dạng CSS để làm đẹp footer */
      footer {
        background-color: #333;
        color: #fff;
        padding: 10px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <!-- Nội dung của trang web -->

    <footer>
      <p>&copy; 2024 Example Company. All rights reserved.</p>
      <p>Contact: example@example.com</p>
    </footer>
  </body>
</html>
```

Trong ví dụ này:

- Thẻ `<footer>` bao gồm các phần tử `<p>` chứa thông tin bản quyền và thông tin liên hệ.
- CSS được sử dụng để tạo một giao diện đẹp cho phần footer bằng cách thiết lập màu nền, màu chữ, padding, và canh giữa nội dung.

---

---

### 3. Thẻ `<nav>`:

**Khái niệm:**

Trong HTML, thẻ `<nav>` được sử dụng để xác định một khu vực chứa các liên kết điều hướng của trang web. Các liên kết trong `<nav>` thường được sắp xếp để người dùng có thể dễ dàng di chuyển giữa các trang, phần, hoặc các vùng nội dung khác của trang web.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<nav>` thường được đặt trong phần header hoặc footer của trang web, hoặc trong một phần tử div lớn hơn để nhóm các liên kết điều hướng lại với nhau. Việc sử dụng thẻ `<nav>` giúp trình duyệt và các công cụ hỗ trợ cho người dùng (như trình đọc màn hình) hiểu được phần nào của trang web chứa các liên kết điều hướng.

Thẻ `<nav>` thường được sử dụng để:

1. Hiển thị menu điều hướng chính của trang web.
2. Hiển thị các liên kết đến các trang chính của trang web.
3. Hiển thị các liên kết đến các phần quan trọng khác trong trang web.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<nav>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example Page</title>
    <style>
      /* Định dạng CSS để làm đẹp menu điều hướng */
      nav {
        background-color: #333;
        color: #fff;
        padding: 10px;
        text-align: center;
      }
      nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      nav ul li {
        display: inline;
        margin-right: 10px;
      }
      nav ul li a {
        color: #fff;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Trang Chủ</h1>
      <nav>
        <ul>
          <li><a href="#">Trang Chủ</a></li>
          <li><a href="#">Giới Thiệu</a></li>
          <li><a href="#">Dịch Vụ</a></li>
          <li><a href="#">Liên Hệ</a></li>
        </ul>
      </nav>
    </header>

    <!-- Nội dung của trang web -->
  </body>
</html>
```

Trong ví dụ này:

- Thẻ `<nav>` bao gồm một danh sách `<ul>` chứa các mục menu điều hướng.
- Mỗi mục menu được định dạng bằng CSS để tạo ra một giao diện trực quan và dễ đọc.

---

---

### 4. Thẻ `<article>`:

**Khái niệm:**

Trong HTML, thẻ `<article>` được sử dụng để xác định một phần độc lập, tự đủ của nội dung trên trang web, thường là một bài viết hoặc blog post. Phần này thường chứa nội dung riêng biệt và có thể tồn tại độc lập khỏi các phần khác của trang.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<article>` thường được sử dụng để bao quanh nội dung chính của một bài viết hoặc bài đăng blog. Việc này giúp cho trình duyệt và các công cụ tìm kiếm hiểu được rằng phần này của trang web chứa nội dung quan trọng và tự đủ.

Thẻ `<article>` thường được sử dụng trong các trường hợp sau:

1. Bài viết hoặc bài đăng blog: Mỗi bài viết hoặc bài đăng blog có thể được bao quanh bởi một thẻ `<article>` để xác định rằng phần đó là một đơn vị nội dung độc lập.
2. Bài báo hoặc tin tức: Mỗi bài báo hoặc tin tức trên một trang web tin tức có thể được bao quanh bởi thẻ `<article>` để xác định phần nội dung của từng bài viết.
3. Bài hướng dẫn hoặc bài viết học thuật: Trong trường hợp các bài hướng dẫn hoặc bài viết học thuật, mỗi phần nội dung chính có thể được đánh dấu bằng một thẻ `<article>`.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<article>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example Page</title>
  </head>
  <body>
    <article>
      <h2>Tiêu đề bài viết</h2>
      <p>Đây là một đoạn văn bản mô tả nội dung của bài viết.</p>
      <p>Nội dung chi tiết của bài viết...</p>
    </article>
  </body>
</html>
```

Trong ví dụ này:

- Phần nội dung bài viết được bao quanh bởi thẻ `<article>`.
- Tiêu đề của bài viết được đánh dấu bằng thẻ `<h2>` trong phần `<article>`.
- Nội dung của bài viết được đặt trong các phần văn bản được bao quanh bởi thẻ `<p>` trong phần `<article>`.

---

---

### 5. Thẻ `<section>`:

**Khái niệm:**

Trong HTML, thẻ `<section>` được sử dụng để nhóm các nội dung có chung mục đích hoặc chủ đề trong một trang web. Mỗi phần `<section>` thường chứa một phần nội dung riêng biệt, tự đủ và liên quan đến một chủ đề cụ thể.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<section>` thường được sử dụng để chia nhỏ và tổ chức nội dung của trang web thành các phần có ý nghĩa. Việc này giúp người đọc dễ dàng định hình và hiểu cấu trúc của trang web.

Thẻ `<section>` thường được sử dụng trong các tình huống sau:

1. **Tổ chức nội dung:** Một trang web có thể được chia thành các phần như "Giới Thiệu", "Dịch Vụ", "Tin Tức", và "Liên Hệ", mỗi phần có thể được đặt trong một thẻ `<section>`.
2. **Nhóm các phần có cùng mục đích:** Các phần nội dung có cùng mục đích hoặc chức năng, như các phần đề cập đến một loại sản phẩm cụ thể, có thể được nhóm lại trong một thẻ `<section>`.
3. **Tổ chức bố cục:** Thẻ `<section>` cũng có thể được sử dụng để tổ chức bố cục của trang web, giúp phân tách và sắp xếp các phần của trang một cách rõ ràng.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<section>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example Page</title>
    <style>
      /* CSS để làm đẹp phần section */
      section {
        padding: 20px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
      }
    </style>
  </head>
  <body>
    <section>
      <h2>Giới Thiệu</h2>
      <p>Đây là phần giới thiệu về trang web.</p>
    </section>

    <section>
      <h2>Dịch Vụ</h2>
      <p>Đây là phần giới thiệu về các dịch vụ của chúng tôi.</p>
    </section>

    <section>
      <h2>Tin Tức</h2>
      <p>Đây là phần hiển thị các tin tức mới nhất.</p>
    </section>

    <section>
      <h2>Liên Hệ</h2>
      <p>Đây là phần liên hệ với chúng tôi.</p>
    </section>
  </body>
</html>
```

Trong ví dụ này:

- Mỗi phần nội dung như "Giới Thiệu", "Dịch Vụ", "Tin Tức", và "Liên Hệ" được bao quanh bởi thẻ `<section>`.
- CSS được sử dụng để tạo ra một giao diện đẹp cho các phần `<section>`, bao gồm padding, margin, và viền.

---

---

### 6. Thẻ `<aside>`:

**Khái niệm:**

Trong HTML, thẻ `<aside>` được sử dụng để xác định một phần bên lề trong một trang web. Phần này thường chứa thông tin phụ tùy chọn, như quảng cáo, các liên kết liên quan hoặc nội dung hỗ trợ, không cần thiết cho việc hiểu nội dung chính của trang.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<aside>` thường được đặt bên cạnh phần nội dung chính của trang web. Phần này không cần thiết cho việc hiểu nội dung chính, nhưng nó cung cấp thông tin bổ sung, phụ trợ hoặc quảng cáo cho người dùng.

Thẻ `<aside>` thường được sử dụng để:

1. Hiển thị quảng cáo: Thông tin quảng cáo có thể được đặt trong một phần bên lề để thu hút sự chú ý của người dùng.
2. Hiển thị các liên kết liên quan: Các liên kết tới các bài viết hoặc trang web liên quan có thể được đặt trong phần này để cung cấp cho người dùng các tài nguyên phụ trợ.
3. Hiển thị nội dung phụ tùy chọn: Các phần nội dung như bảng điều khiển, tin tức hoặc hướng dẫn ngắn có thể được đặt trong phần này.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<aside>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example Page</title>
    <style>
      /* CSS để tạo giao diện cho phần bên lề */
      aside {
        background-color: #f4f4f4;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Nội dung chính của trang</h1>
      <p>Đây là nội dung chính của trang web.</p>
    </main>

    <aside>
      <h2>Thông tin phụ</h2>
      <p>
        Đây là một phần thông tin phụ tùy chọn, có thể chứa các liên kết liên
        quan hoặc nội dung hỗ trợ.
      </p>
    </aside>
  </body>
</html>
```

Trong ví dụ này:

- Phần `<aside>` được đặt sau phần `<main>`, đại diện cho một phần bên lề của trang web.
- Trong phần `<aside>`, có một tiêu đề `<h2>` và một đoạn văn bản `<p>` để hiển thị thông tin phụ tùy chọn.
- CSS được sử dụng để tạo giao diện cho phần bên lề bằng cách thiết lập màu nền và padding.

---

---
