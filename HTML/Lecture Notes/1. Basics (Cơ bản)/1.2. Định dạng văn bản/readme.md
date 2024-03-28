### 1. Thẻ `<h1>` đến `<h6>`:

**Khái niệm:**

Trong HTML, thẻ `<h1>` đến `<h6>` được sử dụng để tạo các tiêu đề với các cấp độ khác nhau. Các tiêu đề này có độ quan trọng giảm dần từ `<h1>` (cao nhất) đến `<h6>` (thấp nhất), với mục đích là định dạng và hiển thị văn bản để làm nổi bật các phần quan trọng trên trang web.

**Ngữ cảnh và cách sử dụng:**

Các thẻ tiêu đề từ `<h1>` đến `<h6>` được sử dụng để phân biệt giữa các phần khác nhau của trang web và chỉ ra mức độ quan trọng của từng phần. Thông thường, `<h1>` được sử dụng cho tiêu đề trang chính, trong khi các tiêu đề `<h2>` đến `<h6>` được sử dụng cho các phần phụ của trang.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ tiêu đề trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Heading Example</title>
  </head>
  <body>
    <h1>This is a heading level 1</h1>
    <h2>This is a heading level 2</h2>
    <h3>This is a heading level 3</h3>
    <h4>This is a heading level 4</h4>
    <h5>This is a heading level 5</h5>
    <h6>This is a heading level 6</h6>
  </body>
</html>
```

Trong ví dụ này:

- Các thẻ tiêu đề từ `<h1>` đến `<h6>` được sử dụng để tạo các tiêu đề với các cấp độ khác nhau.
- Mỗi thẻ tiêu đề có độ quan trọng và kích thước văn bản khác nhau, với `<h1>` có độ quan trọng cao nhất và `<h6>` có độ quan trọng thấp nhất.

---

---

### 2. Thẻ `<p>`:

**Khái niệm:**

Trong HTML, thẻ `<p>` được sử dụng để định dạng một đoạn văn bản. Thẻ này tạo ra một đoạn văn bản mới và thường được sử dụng để phân biệt các đoạn văn bản khác nhau trên trang web.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<p>` được sử dụng để bao bọc một đoạn văn bản, giúp trình duyệt hiểu rằng các phần tử bên trong nó tạo thành một đoạn văn bản riêng biệt. Điều này giúp trong việc định dạng và kiểm soát khoảng cách giữa các đoạn văn bản khác nhau trên trang web.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<p>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Paragraph Example</title>
  </head>
  <body>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
  </body>
</html>
```

Trong ví dụ này:

- Mỗi thẻ `<p>` được sử dụng để bao bọc một đoạn văn bản, tạo ra hai đoạn văn bản riêng biệt.
- Các đoạn văn bản này sẽ hiển thị trên trang web với khoảng cách giữa chúng được định dạng tự động bởi trình duyệt.

---

---

### 3. Thẻ `<strong>`:

**Khái niệm:**

Trong HTML, thẻ `<strong>` được sử dụng để làm cho văn bản được bao quanh bởi nó trở nên in đậm. Thẻ này thường được sử dụng để làm nổi bật hoặc nhấn mạnh vào một phần cụ thể của văn bản.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<strong>` được sử dụng để chỉ định rằng văn bản bên trong nó có ý nghĩa quan trọng hoặc cần được làm nổi bật. Trình duyệt sẽ hiển thị văn bản bên trong thẻ `<strong>` với kiểu chữ in đậm.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<strong>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Strong Example</title>
  </head>
  <body>
    <p>This is a <strong>bold</strong> text.</p>
    <p><strong>This text is bold.</strong></p>
  </body>
</html>
```

Trong ví dụ này:

- Thẻ `<strong>` được sử dụng để bao quanh một phần của văn bản trong một đoạn `<p>` để làm cho nó in đậm.
- Cả hai ví dụ đều sử dụng thẻ `<strong>` để làm cho văn bản được bao quanh bởi nó trở nên in đậm.

---

---

### 4. Thẻ `<em>`:

**Khái niệm:**

Trong HTML, thẻ `<em>` được sử dụng để làm cho văn bản được bao quanh bởi nó trở nên in nghiêng. Thẻ này thường được sử dụng để làm nổi bật hoặc nhấn mạnh vào một phần cụ thể của văn bản, thường là nhấn mạnh về ý nghĩa hoặc ngữ cảnh của văn bản.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<em>` thường được sử dụng để chỉ định rằng văn bản bên trong nó đang được nhấn mạnh hoặc làm nổi bật trong ngữ cảnh của văn bản xung quanh. Trình duyệt sẽ hiển thị văn bản bên trong thẻ `<em>` với kiểu chữ in nghiêng.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<em>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Emphasis Example</title>
  </head>
  <body>
    <p>This is an <em>italicized</em> text.</p>
    <p><em>This text is italicized.</em></p>
  </body>
</html>
```

Trong ví dụ này:

- Thẻ `<em>` được sử dụng để bao quanh một phần của văn bản trong một đoạn `<p>` để làm cho nó in nghiêng.
- Cả hai ví dụ đều sử dụng thẻ `<em>` để làm cho văn bản được bao quanh bởi nó trở nên in nghiêng.

---

---

### 5. Thẻ `<br>`:

**Khái niệm:**

Trong HTML, thẻ `<br>` được sử dụng để tạo ra một dòng mới trong văn bản. Thường được sử dụng khi cần phân tách các dòng văn bản mà không cần tạo ra một đoạn văn bản mới hoặc một đề mục mới.

**Ngữ cảnh và cách sử dụng:**

Thẻ `<br>` thường được sử dụng khi cần thêm một dòng mới trong văn bản mà không muốn tạo ra một đoạn văn bản mới. Nó hữu ích khi bạn muốn chia nhỏ nội dung thành các dòng riêng biệt hoặc khi cần tạo các dòng dọc trong các phần tử như `<p>`, `<div>`, và `<td>`.

**Ví dụ và lệnh/code chi tiết:**

Dưới đây là một ví dụ minh họa về cách sử dụng thẻ `<br>` trong HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Line Break Example</title>
  </head>
  <body>
    <p>This is the first line.<br />This is the second line.</p>
  </body>
</html>
```

Trong ví dụ này:

- Thẻ `<br>` được sử dụng sau "first line" để tạo ra một dòng mới, và "second line" sẽ xuất hiện trên dòng mới sau đó.
- Cả hai dòng văn bản này sẽ hiển thị trong cùng một đoạn văn bản `<p>`, nhưng được phân tách thành hai dòng riêng biệt.

---

---
