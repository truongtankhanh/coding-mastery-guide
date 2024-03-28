## Cách chọn phần tử (selectors).

**Khái Niệm:**
Trong CSS (Cascading Style Sheets), cách chọn phần tử (selectors) là cách để xác định các phần tử HTML mà bạn muốn áp dụng các quy tắc CSS. CSS cung cấp nhiều loại selectors khác nhau cho việc chọn các phần tử dựa trên vị trí, loại, thuộc tính và quan hệ với các phần tử khác.

**Ngữ Cảnh:**
Ngữ cảnh cho cách chọn phần tử trong CSS phụ thuộc vào cấu trúc của trang web HTML và yêu cầu cụ thể của thiết kế hoặc giao diện người dùng bạn đang làm việc. Việc hiểu cấu trúc của trang web và các yếu tố bạn muốn thiết kế sẽ giúp bạn chọn các selectors phù hợp để áp dụng các quy tắc CSS một cách hiệu quả.

**Cách Sử Dụng và Ví Dụ:**

1. **Selector theo Loại Phần Tử:**
   Selector này chọn tất cả các phần tử có cùng loại.

   ```css
   p {
     color: blue;
   }
   ```

   Ví dụ: Tất cả các đoạn văn bản `<p>` sẽ có màu chữ là màu xanh lam.

2. **Selector theo ID:**
   Selector này chọn một phần tử dựa trên ID của nó.

   ```css
   #header {
     background-color: black;
   }
   ```

   Ví dụ: Phần tử có ID là "header" sẽ có màu nền là đen.

3. **Selector theo Class:**
   Selector này chọn tất cả các phần tử có class tương ứng.

   ```css
   .highlight {
     font-weight: bold;
   }
   ```

   Ví dụ: Tất cả các phần tử có class "highlight" sẽ có kiểu chữ in đậm.

4. **Selector theo Quan Hệ:**
   Selector này chọn các phần tử dựa trên mối quan hệ với phần tử khác.

   ```css
   div p {
     margin: 10px;
   }
   ```

   Ví dụ: Tất cả các đoạn văn bản `<p>` trong một phần tử `<div>` sẽ có khoảng cách là 10px.

5. **Selector theo Thuộc Tính:**
   Selector này chọn các phần tử dựa trên thuộc tính của chúng.
   ```css
   input[type="text"] {
     width: 200px;
   }
   ```
   Ví dụ: Tất cả các ô nhập liệu có type là "text" sẽ có chiều rộng là 200px.

Đây chỉ là một số ví dụ cơ bản về cách sử dụng các selectors trong CSS. Sự hiểu biết về các selectors này sẽ giúp bạn điều chỉnh và tùy chỉnh giao diện của trang web một cách linh hoạt và hiệu quả.

---

---

## Cách áp dụng các thuộc tính và giá trị cho phần tử.

**Khái Niệm:**
Trong CSS (Cascading Style Sheets), việc áp dụng các thuộc tính và giá trị cho phần tử là cách để định rõ các quy tắc trình bày cho các phần tử HTML. Thuộc tính và giá trị trong CSS định nghĩa các đặc điểm trình bày của các phần tử, chẳng hạn như màu sắc, kích thước, khoảng cách, hiển thị, v.v.

**Ngữ Cảnh:**
Ngữ cảnh cho việc áp dụng các thuộc tính và giá trị phụ thuộc vào cấu trúc của trang web HTML và yêu cầu cụ thể của thiết kế hoặc giao diện người dùng bạn đang làm việc. Việc hiểu rõ các thuộc tính và giá trị có sẵn trong CSS cũng như cách chúng tương tác với nhau sẽ giúp bạn tạo ra giao diện trang web một cách linh hoạt và hấp dẫn.

**Cách Sử Dụng và Ví Dụ:**

1. **Thuộc tính `color`:**
   Thuộc tính này xác định màu chữ của phần tử.

   ```css
   p {
     color: red;
   }
   ```

   Ví dụ: Tất cả các đoạn văn bản `<p>` sẽ có màu chữ là màu đỏ.

2. **Thuộc tính `font-size`:**
   Thuộc tính này xác định kích thước chữ của phần tử.

   ```css
   h1 {
     font-size: 24px;
   }
   ```

   Ví dụ: Các tiêu đề `<h1>` sẽ có kích thước chữ là 24px.

3. **Thuộc tính `background-color`:**
   Thuộc tính này xác định màu nền của phần tử.

   ```css
   body {
     background-color: #f0f0f0;
   }
   ```

   Ví dụ: Nền của trang web sẽ có màu #f0f0f0 (xám nhạt).

4. **Thuộc tính `margin`:**
   Thuộc tính này xác định khoảng cách xung quanh phần tử.

   ```css
   .container {
     margin: 20px;
   }
   ```

   Ví dụ: Phần tử có class "container" sẽ có khoảng cách 20px xung quanh.

5. **Thuộc tính `display`:**
   Thuộc tính này xác định cách phần tử được hiển thị trong trang.
   ```css
   .menu {
     display: inline-block;
   }
   ```
   Ví dụ: Các phần tử có class "menu" sẽ được hiển thị theo dạng inline-block.

Các ví dụ trên chỉ là một phần nhỏ của các thuộc tính và giá trị có thể áp dụng trong CSS. Việc hiểu và sử dụng chúng một cách linh hoạt sẽ giúp bạn tạo ra giao diện web phong phú và đa dạng.

---

---
