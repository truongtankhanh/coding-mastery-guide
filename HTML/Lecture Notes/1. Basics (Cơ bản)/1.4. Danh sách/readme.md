### 1. Thẻ `<ul>` - Danh sách không có thứ tự (Unordered List):

**Khái niệm:**

Trong HTML, thẻ `<ul>` được sử dụng để tạo danh sách không có thứ tự. Danh sách này chứa các mục mà không có sự sắp xếp cụ thể theo thứ tự nhất định.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<ul>` thường được sử dụng khi bạn muốn liệt kê các mục mà không quan trọng về thứ tự. Ví dụ, danh sách các tính năng của một sản phẩm, danh sách các bước trong một hướng dẫn, vv. Các mục trong danh sách không có thứ tự sẽ hiển thị với dấu chấm đầu dòng hoặc ký hiệu tùy chọn.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<ul>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example Unordered List</title>
  </head>
  <body>
    <h2>Features of Product X:</h2>
    <ul>
      <li>High resolution display</li>
      <li>Long-lasting battery life</li>
      <li>Waterproof design</li>
      <li>Wireless charging</li>
    </ul>
  </body>
</html>
```

Trong ví dụ này:

- Thẻ `<ul>` được sử dụng để bắt đầu một danh sách không có thứ tự.
- Mỗi mục trong danh sách được đặt trong thẻ `<li>`, tạo ra các mục riêng biệt trong danh sách. Các mục này không có thứ tự cụ thể và được hiển thị với dấu chấm đầu dòng theo mặc định.

---

---

### 2. Thẻ `<ol>` - Danh sách có thứ tự (Ordered List):

**Khái niệm:**

Trong HTML, thẻ `<ol>` được sử dụng để tạo danh sách có thứ tự. Mỗi mục trong danh sách này được đánh số hoặc đánh dấu bằng các ký tự có thứ tự, như số, chữ cái, hoặc các ký hiệu tùy chọn.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<ol>` thường được sử dụng khi bạn muốn liệt kê các mục theo một thứ tự nhất định. Ví dụ, danh sách các bước trong một hướng dẫn, các mục tiêu cụ thể, vv. Các mục trong danh sách có thứ tự sẽ hiển thị với số hoặc ký tự đánh dấu tương ứng.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<ol>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example Ordered List</title>
  </head>
  <body>
    <h2>Steps to Prepare a Cake:</h2>
    <ol>
      <li>Preheat the oven to 350°F (180°C).</li>
      <li>Grease and flour the cake pans.</li>
      <li>Prepare the cake batter.</li>
      <li>Pour the batter into the pans.</li>
      <li>Bake the cakes in the preheated oven for 25-30 minutes.</li>
      <li>Let the cakes cool before frosting.</li>
    </ol>
  </body>
</html>
```

Trong ví dụ này:

- Thẻ `<ol>` được sử dụng để bắt đầu một danh sách có thứ tự.
- Mỗi mục trong danh sách được đặt trong thẻ `<li>`, tạo ra các mục riêng biệt trong danh sách. Các mục này sẽ được đánh số theo thứ tự mặc định (bắt đầu từ 1) và được hiển thị với số đó.

---

---

### 3. Thẻ `<li>` - Mục trong danh sách:

**Khái niệm:**

Trong HTML, thẻ `<li>` được sử dụng để định nghĩa một mục trong danh sách, không phụ thuộc vào việc danh sách đó có thứ tự hay không.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<li>` là một phần quan trọng trong việc tạo ra danh sách trong HTML. Nó có thể được sử dụng cùng với thẻ `<ul>` (danh sách không có thứ tự) hoặc `<ol>` (danh sách có thứ tự) để định nghĩa các mục trong danh sách. Các mục này có thể là văn bản, hình ảnh, hoặc các phần tử HTML khác.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<li>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>List Example</title>
  </head>
  <body>
    <h2>Unordered List:</h2>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <h2>Ordered List:</h2>
    <ol>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ol>
  </body>
</html>
```

Trong ví dụ này:

- Thẻ `<li>` được sử dụng để định nghĩa các mục trong danh sách.
- Các mục được liệt kê trong thẻ `<ul>` tạo ra một danh sách không có thứ tự, trong khi các mục trong thẻ `<ol>` tạo ra một danh sách có thứ tự.

---

---
