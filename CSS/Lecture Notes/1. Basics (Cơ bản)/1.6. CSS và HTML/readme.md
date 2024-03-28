## Cách liên kết CSS với HTML.

**Khái Niệm:**
Trong phát triển web, CSS (Cascading Style Sheets) được sử dụng để kiểm soát trình bày và giao diện của trang HTML. Để sử dụng CSS trong một trang HTML, bạn cần liên kết (link) tệp CSS với tài liệu HTML.

**Ngữ Cảnh:**
Việc liên kết CSS với HTML giúp tách biệt nội dung và kiểu dáng, giúp mã nguồn dễ đọc và bảo trì. Nó cũng cho phép bạn tái sử dụng cùng một tệp CSS cho nhiều trang HTML khác nhau.

**Cách Sử Dụng và Ví Dụ:**

1. **Liên Kết Tệp CSS Bên Ngoài:**
   Bạn có thể liên kết một tệp CSS bên ngoài với HTML bằng cách sử dụng thẻ `<link>` trong phần `<head>` của trang HTML.

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Document</title>
       <link rel="stylesheet" href="styles.css" />
     </head>
     <body>
       <h1>This is a heading</h1>
       <p>This is a paragraph.</p>
     </body>
   </html>
   ```

   Trong ví dụ này, tệp CSS được liên kết là "styles.css" sẽ được áp dụng cho toàn bộ trang HTML.

2. **CSS Nội Bộ:**
   Bạn cũng có thể nhúng CSS trực tiếp vào trang HTML bằng cách sử dụng thẻ `<style>` trong phần `<head>` của tài liệu HTML.

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Document</title>
       <style>
         h1 {
           color: blue;
         }
         p {
           font-size: 16px;
         }
       </style>
     </head>
     <body>
       <h1>This is a heading</h1>
       <p>This is a paragraph.</p>
     </body>
   </html>
   ```

   Trong ví dụ này, CSS được đặt trực tiếp trong phần `<head>` của trang HTML và áp dụng cho các phần tử h1 và p.

3. **Inline CSS:**
   Bạn cũng có thể áp dụng CSS trực tiếp cho một phần tử HTML bằng cách sử dụng thuộc tính `style`.
   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Document</title>
     </head>
     <body>
       <h1 style="color: red;">This is a heading</h1>
       <p style="font-size: 20px;">This is a paragraph.</p>
     </body>
   </html>
   ```
   Trong ví dụ này, CSS được áp dụng trực tiếp cho các phần tử h1 và p bằng cách sử dụng thuộc tính `style`.

Khi sử dụng CSS, bạn có thể liên kết tệp CSS bên ngoài, nhúng CSS vào tài liệu HTML hoặc áp dụng CSS trực tiếp cho các phần tử HTML. Cách sử dụng cụ thể phụ thuộc vào yêu cầu cụ thể của dự án và quản lý mã nguồn của bạn.

---

---

## Inline CSS.

**Khái Niệm:**
Trong CSS, Inline CSS là cách áp dụng các quy tắc CSS trực tiếp cho một phần tử HTML bằng cách sử dụng thuộc tính `style`. Khi sử dụng Inline CSS, các quy tắc CSS chỉ áp dụng cho phần tử cụ thể mà chúng được đặt trong.

**Ngữ Cảnh:**
Inline CSS thường được sử dụng khi bạn muốn áp dụng một số quy tắc CSS cụ thể cho một phần tử duy nhất mà không cần tạo một tệp CSS riêng biệt. Tuy nhiên, việc sử dụng Inline CSS có thể làm cho mã HTML trở nên lộn xộn và khó bảo trì trong các dự án lớn.

**Cách Sử Dụng và Ví Dụ:**
Dưới đây là một số cách sử dụng Inline CSS và ví dụ đi kèm:

1. **Áp Dụng Màu Chữ:**

   ```html
   <p style="color: red;">This text is red.</p>
   ```

   Trong ví dụ này, thuộc tính `style` được sử dụng để đặt màu chữ của đoạn văn bản thành màu đỏ.

2. **Thiết Lập Kích Thước Font:**

   ```html
   <h1 style="font-size: 24px;">This is a large heading</h1>
   ```

   Trong ví dụ này, thuộc tính `style` được sử dụng để thiết lập kích thước font của tiêu đề h1 là 24px.

3. **Gán Nền Màu:**

   ```html
   <div style="background-color: #f0f0f0; padding: 10px;">
     This is a gray box
   </div>
   ```

   Trong ví dụ này, Inline CSS được sử dụng để gán màu nền xám cho một hộp div và thiết lập padding là 10px.

4. **Sử Dụng Multiple Properties:**
   ```html
   <button style="background-color: blue; color: white; padding: 5px 10px;">
     Click me
   </button>
   ```
   Trong đoạn mã này, Inline CSS được sử dụng để thiết lập màu nền, màu chữ và padding của một nút button.

Inline CSS cho phép bạn áp dụng các quy tắc CSS trực tiếp cho một phần tử HTML mà không cần tạo một tệp CSS riêng biệt. Tuy nhiên, nên sử dụng Inline CSS một cách cẩn thận để tránh làm cho mã HTML trở nên lộn xộn và khó bảo trì, đặc biệt trong các dự án lớn.

---

---

## Internal CSS.

**Khái Niệm:**
Trong CSS, Internal CSS là phương pháp sử dụng CSS bằng cách nhúng các quy tắc CSS trực tiếp vào trong tài liệu HTML bằng thẻ `<style>` trong phần `<head>` của trang.

**Ngữ Cảnh:**
Internal CSS thường được sử dụng khi bạn muốn áp dụng các quy tắc CSS cho toàn bộ hoặc một phần của trang HTML mà không cần tạo một tệp CSS riêng biệt. Internal CSS là lựa chọn phù hợp cho các trang web nhỏ hoặc trong các tình huống khi bạn chỉ cần một số quy tắc CSS đơn giản.

**Cách Sử Dụng và Ví Dụ:**
Dưới đây là cách sử dụng Internal CSS và ví dụ đi kèm:

1. **Nhúng Quy Tắc CSS Trực Tiếp:**

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Document</title>
       <style>
         h1 {
           color: blue;
         }
         p {
           font-size: 16px;
         }
       </style>
     </head>
     <body>
       <h1>This is a heading</h1>
       <p>This is a paragraph.</p>
     </body>
   </html>
   ```

   Trong ví dụ này, các quy tắc CSS được nhúng trực tiếp vào phần `<head>` của trang HTML bằng thẻ `<style>`. Quy tắc này sẽ áp dụng cho tất cả các phần tử h1 và p trong trang.

2. **Sử Dụng Internal CSS Cho Một Phần của Trang:**
   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Document</title>
     </head>
     <body>
       <h1>This is a heading</h1>
       <div style="background-color: lightgray; padding: 10px;">
         <p>This paragraph has internal CSS.</p>
         <p style="color: blue;">This paragraph also has internal CSS.</p>
       </div>
     </body>
   </html>
   ```
   Trong ví dụ này, CSS được nhúng bên trong thẻ `<div>` bằng thuộc tính `style`, và chỉ áp dụng cho các phần tử bên trong thẻ `<div>` đó.

Internal CSS cho phép bạn nhúng các quy tắc CSS trực tiếp vào trong trang HTML mà không cần tạo một tệp CSS riêng biệt. Điều này làm cho mã nguồn trở nên dễ đọc và bảo trì trong các trường hợp đơn giản hoặc khi bạn cần áp dụng CSS cho một phần nhất định của trang. Tuy nhiên, nên sử dụng một tệp CSS riêng biệt cho các dự án lớn hoặc khi bạn cần tái sử dụng CSS cho nhiều trang.

---

---

## External CSS.

**Khái Niệm:**
Trong CSS, External CSS là phương pháp sử dụng CSS bằng cách tạo một tệp CSS riêng biệt và sau đó liên kết tệp CSS này với tài liệu HTML bằng thẻ `<link>` trong phần `<head>` của trang.

**Ngữ Cảnh:**
External CSS thường được sử dụng trong các dự án lớn hoặc khi bạn muốn tái sử dụng các quy tắc CSS cho nhiều trang HTML khác nhau. Bằng cách tách biệt CSS thành một tệp riêng, bạn có thể dễ dàng duy trì, cập nhật và quản lý mã nguồn.

**Cách Sử Dụng và Ví Dụ:**
Dưới đây là cách sử dụng External CSS và ví dụ đi kèm:

1. **Tạo Tệp CSS Bên Ngoài:**
   Tạo một tệp CSS riêng biệt với phần mở rộng `.css`. Ví dụ, tạo một tệp có tên `styles.css`.

2. **Liên Kết Tệp CSS Với Tài Liệu HTML:**

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Document</title>
       <link rel="stylesheet" href="styles.css" />
     </head>
     <body>
       <h1>This is a heading</h1>
       <p>This is a paragraph.</p>
     </body>
   </html>
   ```

   Trong ví dụ này, tệp CSS có tên `styles.css` được liên kết với tài liệu HTML bằng thẻ `<link>` trong phần `<head>` của trang.

3. **Nội Dung của Tệp CSS (styles.css):**
   ```css
   h1 {
     color: blue;
   }
   p {
     font-size: 16px;
   }
   ```
   Trong tệp CSS `styles.css`, các quy tắc CSS được đặt trong cặp dấu ngoặc nhọn `{}` và áp dụng cho các phần tử h1 và p trong trang HTML.

External CSS cho phép bạn tạo và quản lý các quy tắc CSS trong một tệp riêng biệt, giúp mã nguồn trở nên dễ đọc, bảo trì và tái sử dụng. Nó cũng giúp tách biệt nội dung và kiểu dáng, làm cho mã HTML trở nên gọn gàng và dễ quản lý.

---

---
