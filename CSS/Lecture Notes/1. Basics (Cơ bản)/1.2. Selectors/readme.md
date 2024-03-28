## Selector phần tử (Element selectors).

**Khái Niệm:**
Trong CSS, Selector phần tử (Element selectors) là một loại selector được sử dụng để chọn tất cả các phần tử của một loại cụ thể trong HTML. Khi bạn sử dụng selector này, tất cả các phần tử có cùng tên loại sẽ được áp dụng các quy tắc CSS mà bạn định nghĩa.

**Ngữ Cảnh:**
Selector phần tử là một trong những selector cơ bản nhất trong CSS và thường được sử dụng để áp dụng các quy tắc CSS cho nhiều phần tử cùng loại trên một trang web. Điều này rất hữu ích khi bạn muốn áp dụng các quy tắc CSS cơ bản cho tất cả các phần tử của một loại, như là tất cả các đoạn văn bản `<p>` hoặc tất cả các tiêu đề `<h1>`.

**Cách Sử Dụng và Ví Dụ:**

1. **Selector cho Phần Tử `<p>` (Paragraphs):**
   Selector này áp dụng các quy tắc CSS cho tất cả các phần tử `<p>` trên trang web.

   ```css
   p {
     font-size: 16px;
     color: #333;
   }
   ```

   Ví dụ trên sẽ đặt kích thước chữ là 16px và màu chữ là #333 cho tất cả các đoạn văn bản `<p>`.

2. **Selector cho Phần Tử `<h2>` (Headings level 2):**
   Selector này áp dụng các quy tắc CSS cho tất cả các phần tử `<h2>` trên trang web.

   ```css
   h2 {
     font-size: 20px;
     font-weight: bold;
   }
   ```

   Ví dụ này sẽ đặt kích thước chữ là 20px và làm in đậm cho tất cả các tiêu đề cấp 2 `<h2>`.

3. **Selector cho Phần Tử `<ul>` (Unordered Lists):**
   Selector này áp dụng các quy tắc CSS cho tất cả các phần tử `<ul>` trên trang web.

   ```css
   ul {
     list-style-type: none;
     margin-left: 0;
     padding-left: 0;
   }
   ```

   Ví dụ trên sẽ loại bỏ ký hiệu danh sách và thiết lập các lề cho tất cả các danh sách không có thứ tự `<ul>`.

4. **Selector cho Phần Tử `<a>` (Links):**
   Selector này áp dụng các quy tắc CSS cho tất cả các phần tử `<a>` (liên kết) trên trang web.
   ```css
   a {
     text-decoration: none;
     color: blue;
   }
   ```
   Ví dụ này sẽ loại bỏ gạch chân dưới của liên kết và thiết lập màu chữ là màu xanh cho tất cả các liên kết `<a>`.

Selector phần tử là một công cụ quan trọng trong CSS để áp dụng các quy tắc trình bày cho các phần tử HTML một cách dễ dàng và linh hoạt.

---

---

## Selector lớp (Class selectors).

**Khái Niệm:**
Trong CSS, Selector lớp (Class selectors) là một loại selector được sử dụng để chọn các phần tử HTML dựa trên các lớp (classes) đã được định nghĩa trong mã HTML. Các lớp cho phép bạn áp dụng cùng một kiểu trình bày cho nhiều phần tử khác nhau mà không cần phải sử dụng một thẻ HTML cụ thể.

**Ngữ Cảnh:**
Selector lớp cho phép bạn áp dụng các quy tắc CSS cho nhóm các phần tử có cùng lớp, giúp tạo ra những kiểu trình bày phổ quát và dễ bảo trì. Điều này hữu ích khi bạn muốn áp dụng cùng một kiểu trình bày cho một nhóm các phần tử có cùng mục đích hoặc tính chất nhưng không cùng loại.

**Cách Sử Dụng và Ví Dụ:**

1. **Định nghĩa Lớp trong HTML:**
   Trước tiên, bạn cần định nghĩa một lớp cho các phần tử HTML bằng cách sử dụng thuộc tính `class`.

   ```html
   <p class="highlight">This is a highlighted paragraph.</p>
   <p>This is a normal paragraph.</p>
   ```

   Trong ví dụ trên, đoạn văn bản đầu tiên có lớp là "highlight".

2. **Sử Dụng Selector Lớp trong CSS:**
   Tiếp theo, bạn sử dụng selector lớp trong CSS để áp dụng kiểu trình bày cho các phần tử có cùng lớp.

   ```css
   .highlight {
     background-color: yellow;
     font-weight: bold;
   }
   ```

   Trong ví dụ này, các phần tử có lớp "highlight" sẽ có màu nền là màu vàng và được làm in đậm.

3. **Áp dụng nhiều Lớp:**
   Bạn cũng có thể áp dụng nhiều lớp cho một phần tử, bằng cách sử dụng cách ngăn cách bằng dấu cách.

   ```html
   <p class="highlight important">
     This is an important highlighted paragraph.
   </p>
   ```

   Trong ví dụ trên, phần tử có cả hai lớp "highlight" và "important".

4. **Sử Dụng Selector Lớp với Phần Tử Khác Nhau:**
   Bạn cũng có thể sử dụng selector lớp với bất kỳ phần tử HTML nào.
   ```css
   .button {
     background-color: blue;
     color: white;
     padding: 10px 20px;
     border-radius: 5px;
   }
   ```
   Trong ví dụ này, tất cả các phần tử có lớp "button" sẽ có kiểu trình bày của một nút bấm.

Selector lớp là một cách hiệu quả để tạo ra nhóm các phần tử và áp dụng các kiểu trình bày chung cho chúng. Nó giúp tăng tính linh hoạt và tái sử dụng trong việc phát triển trang web.

---

---

## Selector ID (ID selectors).

**Khái Niệm:**
Trong CSS, Selector ID (ID selectors) là một loại selector được sử dụng để chọn một phần tử cụ thể trong HTML dựa trên giá trị của thuộc tính ID của nó. Mỗi phần tử trong tài liệu HTML có thể có một ID duy nhất và selector ID giúp bạn chọn ra phần tử cụ thể đó để áp dụng các quy tắc CSS.

**Ngữ Cảnh:**
Selector ID thường được sử dụng khi bạn muốn áp dụng các quy tắc CSS cho một phần tử cụ thể trong HTML mà không muốn ảnh hưởng đến các phần tử khác. Ví dụ, nếu bạn muốn tạo một phần tử với kiểu trang trí hoặc vị trí đặc biệt, bạn có thể sử dụng selector ID để xác định phần tử đó và áp dụng CSS tùy chỉnh cho nó.

**Cách Sử Dụng và Ví Dụ:**

1. **Sử Dụng Selector ID:**
   Selector ID được ký hiệu bằng ký tự `#`, theo sau là tên của ID cụ thể mà bạn muốn chọn.

   ```css
   #header {
     background-color: #333;
     color: #fff;
     padding: 10px;
   }
   ```

   Trong ví dụ trên, selector ID `#header` sẽ chọn phần tử có ID là "header" và áp dụng các quy tắc CSS chỉ định cho nó.

2. **Ví Dụ Áp Dụng CSS cho Một Phần Tử HTML:**

   ```html
   <div id="content">
     <p>This is a paragraph inside a div.</p>
   </div>
   ```

   ```css
   #content {
     border: 1px solid #ccc;
     padding: 10px;
   }

   #content p {
     font-size: 16px;
     color: #333;
   }
   ```

   Trong ví dụ này, chúng ta áp dụng một số quy tắc CSS cho phần tử `<div>` có ID là "content" và các phần tử `<p>` bên trong nó.

3. **Lưu Ý:**
   - Mỗi ID trong HTML phải là duy nhất trên mỗi trang.
   - Selector ID thường được ưu tiên cao hơn so với các loại selector khác, vì vậy chỉ cần một lần áp dụng CSS cho mỗi ID.

Selector ID là một cách mạnh mẽ để tùy chỉnh và kiểm soát phần tử cụ thể trong tài liệu HTML của bạn bằng CSS. Tuy nhiên, bạn nên sử dụng chúng một cách cẩn thận để tránh việc gây ra sự phụ thuộc cứng giữa HTML và CSS.

---

---

## Selector kết hợp (Combining selectors).

**Khái Niệm:**
Trong CSS, Selector kết hợp (Combining selectors) là kỹ thuật cho phép bạn kết hợp nhiều loại selector lại với nhau để chọn ra các phần tử cụ thể hoặc nhóm phần tử mà bạn muốn áp dụng các quy tắc CSS.

**Ngữ Cảnh:**
Selector kết hợp là một công cụ mạnh mẽ trong CSS cho phép bạn chọn ra các phần tử dựa trên các tiêu chí phức tạp hơn so với việc sử dụng một loại selector đơn giản. Bằng cách kết hợp các selector lại với nhau, bạn có thể tạo ra các quy tắc CSS linh hoạt và tiết kiệm thời gian.

**Cách Sử Dụng và Ví Dụ:**

1. **Kết Hợp Selector Loại và Selector Class:**
   Bạn có thể kết hợp một selector loại với một selector class để chọn ra các phần tử cụ thể có cùng loại và class.

   ```css
   h2.title {
     color: blue;
   }
   ```

   Trong ví dụ này, chúng ta áp dụng màu xanh cho tất cả các tiêu đề cấp 2 có class là "title".

2. **Kết Hợp Nhiều Selector Class:**
   Bạn cũng có thể kết hợp nhiều selector class lại với nhau để chọn ra các phần tử có tất cả các class tương ứng.

   ```css
   .menu-item.active {
     font-weight: bold;
   }
   ```

   Trong ví dụ này, chúng ta áp dụng font in đậm cho tất cả các mục menu có class là "menu-item" và "active".

3. **Kết Hợp Selector Descendant:**
   Bạn cũng có thể kết hợp selector descendant để chọn ra các phần tử con của một phần tử khác.

   ```css
   .container p {
     margin: 10px;
   }
   ```

   Trong ví dụ này, chúng ta áp dụng margin là 10px cho tất cả các đoạn văn bản `<p>` trong phần tử có class là "container".

4. **Kết Hợp Selector Child:**
   Bạn có thể sử dụng selector child để chọn ra các phần tử con trực tiếp của một phần tử khác.
   ```css
   .menu > li {
     list-style-type: none;
   }
   ```
   Trong ví dụ này, chúng ta loại bỏ ký hiệu danh sách cho tất cả các mục danh sách con trực tiếp của phần tử có class là "menu".

Kết hợp các selector lại với nhau là một cách mạnh mẽ để lựa chọn và áp dụng các quy tắc CSS cho các phần tử cụ thể hoặc nhóm phần tử trong tài liệu HTML của bạn. Điều này giúp bạn kiểm soát trang web của mình một cách linh hoạt và hiệu quả.

---

---
