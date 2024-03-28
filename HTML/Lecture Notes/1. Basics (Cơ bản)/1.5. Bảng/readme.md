### 1. Thẻ `<table>` - Tạo bảng:

**Khái niệm:**

Trong HTML, thẻ `<table>` được sử dụng để tạo ra một bảng trên trang web. Bảng có thể chứa các hàng và cột, giúp hiển thị dữ liệu theo dạng bảng định dạng.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<table>` là một phần quan trọng trong việc hiển thị dữ liệu dưới dạng bảng trên trang web. Các thẻ `<tr>` (hàng) và `<td>` hoặc `<th>` (cột) được sử dụng để xác định cấu trúc của bảng, trong đó `<th>` được sử dụng cho các ô tiêu đề.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<table>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example Table</title>
    <style>
      /* CSS để tạo giao diện cho bảng */
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th,
      td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
      }
      th {
        background-color: #f2f2f2;
      }
    </style>
  </head>
  <body>
    <table>
      <tr>
        <th>Họ và tên</th>
        <th>Địa chỉ</th>
        <th>Email</th>
      </tr>
      <tr>
        <td>Nguyễn Văn A</td>
        <td>Hà Nội</td>
        <td>example1@example.com</td>
      </tr>
      <tr>
        <td>Trần Thị B</td>
        <td>Hồ Chí Minh</td>
        <td>example2@example.com</td>
      </tr>
    </table>
  </body>
</html>
```

Trong ví dụ này:

- Thẻ `<table>` được sử dụng để bắt đầu một bảng.
- Các thẻ `<tr>` được sử dụng để định nghĩa các hàng của bảng.
- Các thẻ `<th>` được sử dụng cho các ô tiêu đề của bảng.
- Các thẻ `<td>` được sử dụng cho các ô dữ liệu của bảng.
- CSS được sử dụng để tạo giao diện cho bảng, bao gồm cách hiển thị đường viền và căn chỉnh dữ liệu.

---

---

### 2. Thẻ `<tr>` - Định nghĩa một hàng trong bảng:

**Khái niệm:**

Trong HTML, thẻ `<tr>` được sử dụng để định nghĩa một hàng trong bảng. Mỗi hàng chứa các ô dữ liệu, được đặt trong các thẻ `<td>` (ô dữ liệu) hoặc `<th>` (ô tiêu đề) tương ứng.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<tr>` là một phần quan trọng của cấu trúc của bảng trong HTML. Nó đại diện cho một hàng trong bảng và chứa các ô dữ liệu tương ứng. Mỗi ô dữ liệu được đặt trong một thẻ `<td>` hoặc `<th>`, tùy thuộc vào ý nghĩa của ô đó là dữ liệu thông thường hay tiêu đề.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<tr>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example Table</title>
    <style>
      /* CSS để tạo giao diện cho bảng */
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th,
      td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
      }
      th {
        background-color: #f2f2f2;
      }
    </style>
  </head>
  <body>
    <table>
      <tr>
        <th>Họ và tên</th>
        <th>Địa chỉ</th>
        <th>Email</th>
      </tr>
      <tr>
        <td>Nguyễn Văn A</td>
        <td>Hà Nội</td>
        <td>example1@example.com</td>
      </tr>
      <tr>
        <td>Trần Thị B</td>
        <td>Hồ Chí Minh</td>
        <td>example2@example.com</td>
      </tr>
    </table>
  </body>
</html>
```

Trong ví dụ này:

- Mỗi dòng dữ liệu của bảng được định nghĩa bởi một thẻ `<tr>`.
- Mỗi ô dữ liệu trong mỗi dòng được định nghĩa bằng các thẻ `<td>`.
- Các thẻ `<th>` được sử dụng cho ô tiêu đề của bảng.

---

---

### 3. Thẻ `<th>` - Định nghĩa một ô tiêu đề trong bảng:

**Khái niệm:**

Trong HTML, thẻ `<th>` được sử dụng để định nghĩa một ô tiêu đề trong bảng. Các ô tiêu đề này thường được sử dụng để làm tiêu đề cho các cột hoặc hàng trong bảng, giúp người đọc hiểu được ý nghĩa của dữ liệu trong bảng.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<th>` là một phần quan trọng trong việc xây dựng cấu trúc của bảng trong HTML. Nó thường được sử dụng để làm tiêu đề cho các cột hoặc hàng trong bảng, giúp người đọc hiểu được ý nghĩa của dữ liệu trong bảng. Các ô dữ liệu thông thường được đặt trong các thẻ `<td>`.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<th>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example Table</title>
    <style>
      /* CSS để tạo giao diện cho bảng */
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th,
      td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
      }
      th {
        background-color: #f2f2f2;
      }
    </style>
  </head>
  <body>
    <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>Doe</td>
        <td>jane@example.com</td>
      </tr>
    </table>
  </body>
</html>
```

Trong ví dụ này:

- Các thẻ `<th>` được sử dụng để định nghĩa các ô tiêu đề cho các cột của bảng.
- Các ô dữ liệu thông thường được định nghĩa bằng các thẻ `<td>`.

---

---

### 4. Thẻ `<td>` - Định nghĩa một ô dữ liệu trong bảng:

**Khái niệm:**

Trong HTML, thẻ `<td>` được sử dụng để định nghĩa một ô dữ liệu trong bảng. Các ô dữ liệu này thường chứa thông tin cụ thể như dữ liệu số, văn bản, hình ảnh hoặc các phần tử HTML khác.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<td>` là một phần quan trọng trong việc tạo ra bảng trong HTML. Nó được sử dụng để định nghĩa các ô dữ liệu cụ thể trong bảng, với mỗi ô chứa một phần thông tin cụ thể. Các thẻ `<td>` thường được sử dụng cùng với các thẻ `<tr>` (hàng) và `<th>` (tiêu đề) để tạo ra cấu trúc hoàn chỉnh của bảng.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<td>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example Table</title>
    <style>
      /* CSS để tạo giao diện cho bảng */
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th,
      td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
      }
      th {
        background-color: #f2f2f2;
      }
    </style>
  </head>
  <body>
    <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>Doe</td>
        <td>jane@example.com</td>
      </tr>
    </table>
  </body>
</html>
```

Trong ví dụ này:

- Các thẻ `<td>` được sử dụng để định nghĩa các ô dữ liệu cụ thể trong bảng.
- Mỗi ô dữ liệu chứa một phần thông tin cụ thể, chẳng hạn như tên, email, v.v.

---

---
