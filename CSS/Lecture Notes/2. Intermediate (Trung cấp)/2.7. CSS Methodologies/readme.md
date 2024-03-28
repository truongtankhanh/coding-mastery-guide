## BEM (Block, Element, Modifier).

**Khái niệm:**
BEM là một phương pháp đặt tên lớp CSS giúp tổ chức và quản lý mã CSS của bạn một cách cấu trúc, dễ đọc và dễ bảo trì. BEM là viết tắt của Block, Element và Modifier, đại diện cho các phần cấu thành cơ bản của một phần tử trong giao diện người dùng.

- **Block**: Một khối là một phần tử độc lập có ý nghĩa trong giao diện người dùng. Đây thường là phần tử cha chứa các phần tử con.
- **Element**: Một phần tử là một phần tử nhỏ hơn, phụ thuộc vào khối và không thể tồn tại một cách độc lập.
- **Modifier**: Một bổ sung hoặc thay đổi trạng thái hoặc kiểu dáng của một khối hoặc một phần tử.

**Ngữ cảnh:**
BEM được sử dụng rộng rãi trong cộng đồng phát triển web để giảm thiểu sự phức tạp và mối quan hệ giữa các phần tử CSS, từ đó làm cho mã CSS dễ hiểu hơn, dễ bảo trì hơn và dễ mở rộng hơn. BEM thường được áp dụng trong các dự án lớn hoặc có tính mở rộng.

**Cách sử dụng:**

1. **Đặt tên lớp cho Block:**
   Đặt tên lớp cho khối, thường là tên của phần tử hoặc thành phần cụ thể mà bạn muốn tạo kiểu cho nó.

   ```html
   <div class="block"></div>
   ```

2. **Đặt tên lớp cho Element:**
   Sử dụng tên lớp của khối và kết hợp với tên của phần tử.

   ```html
   <div class="block">
     <div class="block__element"></div>
   </div>
   ```

3. **Đặt tên lớp cho Modifier:**
   Sử dụng tên lớp của khối hoặc phần tử, và kết hợp với tên của modifier.
   ```html
   <div class="block">
     <div class="block__element block__element--modifier"></div>
   </div>
   ```

**Ví dụ về sử dụng BEM trong CSS:**

HTML:

```html
<div class="card">
  <div class="card__header">Card Header</div>
  <div class="card__content">Card Content</div>
  <div class="card__footer">
    <button class="button button--primary">Submit</button>
    <button class="button button--secondary">Cancel</button>
  </div>
</div>
```

CSS:

```css
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
}

.card__header {
  font-size: 1.2em;
  font-weight: bold;
}

.card__content {
  margin-top: 10px;
}

.card__footer {
  margin-top: 20px;
}

.button {
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}

.button--primary {
  background-color: #007bff;
  color: #fff;
}

.button--secondary {
  background-color: #ccc;
  color: #000;
}
```

Trong ví dụ này, chúng ta sử dụng BEM để đặt tên lớp cho các khối, phần tử và modifiers trong HTML, sau đó sử dụng các lớp này trong CSS để tạo kiểu cho các phần tử tương ứng. Điều này giúp cho mã CSS dễ hiểu, dễ bảo trì và dễ mở rộng.

---

---

## SMACSS (Scalable and Modular Architecture for CSS).

**Khái niệm:**
SMACSS (Scalable and Modular Architecture for CSS) là một phương pháp phân loại, tổ chức và quản lý mã CSS để tạo ra các kiểu mạnh mẽ, linh hoạt và dễ bảo trì cho các dự án web. SMACSS tập trung vào việc chia nhỏ CSS thành các module độc lập, mỗi module có một trách nhiệm cụ thể và có thể tái sử dụng.

**Ngữ cảnh:**
Khi phát triển các dự án web lớn và phức tạp, việc quản lý mã CSS trở nên khó khăn và dễ dẫn đến sự phức tạp, khó bảo trì. SMACSS giúp giải quyết vấn đề này bằng cách cung cấp một cách tiếp cận có tổ chức, dễ bảo trì và linh hoạt hơn trong việc viết và tổ chức CSS.

**Cách sử dụng:**
SMACSS đề xuất một số nguyên tắc và quy tắc cho việc viết CSS. Dưới đây là một số nguyên tắc quan trọng của SMACSS:

1. **Phân chia CSS thành các module:** Phân chia CSS thành các module nhỏ, tự đủ, độc lập và tái sử dụng.
2. **Quy tắc đặt tên lớp cụ thể:** Sử dụng các tên lớp cụ thể, mô tả chức năng hoặc mục đích của phần tử.
3. **Tổ chức CSS thành các phần:** Phân chia CSS thành các phần như Base, Layout, Module, State và Theme để giữ cho mã CSS có tổ chức và dễ bảo trì.

4. **Tránh sử dụng ID trong CSS:** ID có thứ độ ưu tiên cao hơn so với lớp, điều này có thể gây ra vấn đề khi viết CSS tái sử dụng.

**Ví dụ về sử dụng SMACSS trong CSS:**

HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SMACSS Example</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="header">
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item"><a href="#" class="nav__link">Home</a></li>
          <li class="nav__item"><a href="#" class="nav__link">About</a></li>
          <li class="nav__item"><a href="#" class="nav__link">Services</a></li>
          <li class="nav__item"><a href="#" class="nav__link">Contact</a></li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <section class="content">
        <h1 class="content__title">Welcome to Our Website</h1>
        <p class="content__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>
      <aside class="sidebar">
        <h3 class="sidebar__title">Sidebar Title</h3>
        <ul class="sidebar__list">
          <li class="sidebar__item">Item 1</li>
          <li class="sidebar__item">Item 2</li>
          <li class="sidebar__item">Item 3</li>
        </ul>
      </aside>
    </div>
    <footer class="footer">
      <p class="footer__copyright">&copy; 2024 Example Company</p>
    </footer>
  </body>
</html>
```

CSS (styles.css):

```css
/* Base */
html,
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

/* Layout */
.container {
  display: flex;
}

.header,
.footer {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;
}

.content {
  flex-grow: 2;
}

.sidebar {
  flex-grow: 1;
}

/* Module */
.nav__list {
  list-style: none;
  padding: 0;
}

.nav__item {
  display: inline-block;
  margin-right: 10px;
}

.nav__link {
  text-decoration: none;
  color: #fff;
}

/* State */
.nav__link:hover {
  text-decoration: underline;
}

/* Theme */
.footer {
  background-color: #555;
}

/* Responsive */
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

Trong ví dụ này, chúng ta sử dụng SMACSS để tổ chức mã CSS thành các phần Base, Layout, Module, State và Theme. Các phần tử HTML được đặt tên lớp theo nguyên tắc SMACSS và được kiểm soát bằng các quy tắc CSS tương ứng. Điều này giúp mã CSS dễ đọc, dễ bảo trì và linh hoạt trong việc mở rộng.

---

---

## OOCSS (Object-Oriented CSS).

**Khái niệm:**
OOCSS (Object-Oriented CSS) là một phương pháp viết CSS dựa trên nguyên tắc lập trình hướng đối tượng. Nó tập trung vào việc tạo ra các đối tượng CSS tái sử dụng, tổ chức và linh hoạt, thay vì việc viết CSS dựa trên cấu trúc trang web cụ thể.

**Ngữ cảnh:**
Khi phát triển các dự án web lớn và phức tạp, việc quản lý mã CSS trở nên phức tạp và khó bảo trì. OOCSS giúp giải quyết vấn đề này bằng cách tạo ra các đối tượng CSS độc lập, có thể tái sử dụng, từ đó giảm thiểu lặp lại mã CSS và làm cho mã CSS dễ bảo trì hơn.

**Cách sử dụng:**

1. **Tạo các đối tượng CSS (Objects):**
   Tạo ra các đối tượng CSS độc lập, tái sử dụng, mà không phụ thuộc vào cấu trúc của trang web cụ thể. Mỗi đối tượng có thể chứa một hoặc nhiều thuộc tính CSS.

2. **Tách biệt cấu trúc và văn bản (Separate Structure and Skin):**
   Tách biệt cấu trúc (structure) và văn bản (skin) của một đối tượng. Cấu trúc là các quy tắc liên quan đến cấu trúc HTML của đối tượng, trong khi văn bản là các quy tắc liên quan đến kiểu dáng, màu sắc, v.v.

3. **Tách biệt layout và content:**
   Tách biệt việc xác định layout (định vị và kích thước) và nội dung (kiểu dáng và màu sắc) của các đối tượng. Điều này giúp tái sử dụng các đối tượng CSS trong các mục đích khác nhau.

**Ví dụ về sử dụng OOCSS trong CSS:**

HTML:

```html
<div class="button primary-button">Submit</div>
<div class="button secondary-button">Cancel</div>
```

CSS:

```css
/* Đối tượng Button */
.button {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
}

/* Layout: Phần định vị và kích thước */
.primary-button {
  background-color: #007bff;
  color: #fff;
}

.secondary-button {
  background-color: #ccc;
  color: #000;
}
```

Trong ví dụ này, `.button` là một đối tượng CSS tái sử dụng, định nghĩa các thuộc tính chung cho tất cả các nút. `.primary-button` và `.secondary-button` là các đối tượng con của `.button`, tách biệt việc định vị và kích thước (layout) từ kiểu dáng và màu sắc (skin) của nút. Điều này giúp mã CSS dễ bảo trì và linh hoạt hơn khi cần thay đổi kiểu dáng của các nút.

---

---
