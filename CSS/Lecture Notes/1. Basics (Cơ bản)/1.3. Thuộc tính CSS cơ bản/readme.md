## Màu sắc (color).

**Khái Niệm:**
Trong CSS, màu sắc (color) là một thuộc tính quan trọng để xác định màu chữ hoặc màu nền của các phần tử trên trang web. Màu sắc có thể được định nghĩa bằng cách sử dụng tên màu, mã màu hex, mã màu RGB hoặc RGBA.

**Ngữ Cảnh:**
Màu sắc là một phần quan trọng trong thiết kế web, vì nó có thể tạo ra sự thu hút, tương phản và tương thích với thiết kế chung của trang web. Việc chọn màu sắc phù hợp có thể cải thiện trải nghiệm người dùng và tăng tính hấp dẫn của trang web.

**Cách Sử Dụng và Ví Dụ:**

1. **Sử Dụng Tên Màu:**
   Bạn có thể sử dụng tên màu tiêu chuẩn như "red", "blue", "green", vv.

   ```css
   p {
     color: red;
   }
   ```

   Trong ví dụ này, tất cả các đoạn văn bản `<p>` sẽ có màu chữ là đỏ.

2. **Sử Dụng Mã Màu Hex:**
   Bạn cũng có thể sử dụng mã màu hex để chỉ định màu sắc một cách chính xác.

   ```css
   h1 {
     color: #ff0000; /* Màu đỏ */
   }
   ```

   Trong ví dụ này, các tiêu đề `<h1>` sẽ có màu chữ là đỏ.

3. **Sử Dụng Mã Màu RGB:**
   Mã màu RGB định nghĩa màu sắc bằng cách chỉ định các giá trị của đỏ, xanh lá cây và xanh lam.

   ```css
   .container {
     background-color: rgb(255, 0, 0); /* Màu đỏ */
   }
   ```

   Trong ví dụ này, phần tử có class "container" sẽ có màu nền là đỏ.

4. **Sử Dụng Mã Màu RGBA:**
   Mã màu RGBA tương tự như mã màu RGB, nhưng bạn cũng có thể chỉ định một giá trị độ trong suốt (alpha) cho màu sắc.
   ```css
   .overlay {
     background-color: rgba(
       0,
       0,
       255,
       0.5
     ); /* Màu xanh lam với độ trong suốt là 50% */
   }
   ```
   Trong ví dụ này, phần tử có class "overlay" sẽ có màu nền là xanh lam với độ trong suốt là 50%.

Màu sắc là một phần quan trọng của thiết kế web và bạn có thể sử dụng nó để tạo ra một giao diện hấp dẫn và dễ đọc cho trang web của bạn. Đồng thời, việc sử dụng màu sắc một cách hợp lý cũng giúp cải thiện trải nghiệm người dùng và tạo ra ấn tượng tích cực.

---

---

## Font (font-family, font-size, font-weight, font-style).

**Khái Niệm:**
Trong CSS, font là tập hợp các thuộc tính được sử dụng để kiểm soát kiểu chữ (font) được hiển thị trên trang web. Các thuộc tính phổ biến của font bao gồm font-family, font-size, font-weight và font-style.

- **font-family**: Xác định font chữ được sử dụng cho một phần tử hoặc một nhóm phần tử trên trang web.
- **font-size**: Định rõ kích thước của font chữ.
- **font-weight**: Xác định độ đậm của font chữ, như là "bold" (đậm) hoặc "normal" (bình thường).
- **font-style**: Xác định kiểu dáng của font chữ, như là "italic" (nghiêng) hoặc "normal" (bình thường).

**Ngữ Cảnh:**
Việc chọn font chữ phù hợp và điều chỉnh các thuộc tính font trong CSS là quan trọng để tạo ra một trải nghiệm đọc tốt và một giao diện hấp dẫn trên trang web. Font chữ có thể tạo ra sự ấn tượng đầu tiên cho người đọc và có thể ảnh hưởng đến cảm nhận về nội dung trên trang web.

**Cách Sử Dụng và Ví Dụ:**

1. **font-family:**
   Xác định font chữ được sử dụng. Bạn có thể chỉ định một danh sách các font sau khi dấu phẩy, với font ưu tiên đầu tiên trong danh sách được trình duyệt chọn nếu không thể tìm thấy font đầu tiên.

   ```css
   body {
     font-family: Arial, sans-serif;
   }
   ```

   Trong ví dụ này, trình duyệt sẽ sử dụng font Arial nếu nó có sẵn, nếu không, nó sẽ sử dụng một font sans-serif mặc định.

2. **font-size:**
   Xác định kích thước của font chữ.

   ```css
   h1 {
     font-size: 24px;
   }
   ```

   Trong ví dụ này, các tiêu đề `<h1>` sẽ có kích thước là 24px.

3. **font-weight:**
   Xác định độ đậm của font chữ.

   ```css
   p {
     font-weight: bold;
   }
   ```

   Trong ví dụ này, tất cả các đoạn văn bản `<p>` sẽ được hiển thị với font đậm.

4. **font-style:**
   Xác định kiểu dáng của font chữ.
   ```css
   em {
     font-style: italic;
   }
   ```
   Trong ví dụ này, tất cả các phần tử `<em>` sẽ được hiển thị với font chữ nghiêng.

Kết hợp các thuộc tính font trong CSS là cách mạnh mẽ để tùy chỉnh và kiểm soát kiểu chữ trên trang web của bạn, tạo ra một trải nghiệm đọc dễ đọc và thú vị cho người dùng.

---

---

## Canh lề (text-align, margin, padding).

**Khái Niệm:**
Trong CSS, canh lề là cách để kiểm soát vị trí của nội dung trong phần tử HTML. Các thuộc tính canh lề chủ yếu bao gồm `text-align`, `margin`, và `padding`.

- `text-align`: Được sử dụng để căn chỉnh văn bản bên trong một phần tử theo chiều ngang.
- `margin`: Là khoảng cách bên ngoài của phần tử, giữa nó và các phần tử khác.
- `padding`: Là khoảng cách bên trong của phần tử, giữa nội dung và ranh giới của phần tử.

**Ngữ Cảnh:**
Việc sử dụng canh lề giúp điều chỉnh vị trí và trình bày của nội dung trên trang web. Điều này quan trọng trong việc tạo ra một giao diện người dùng hấp dẫn và dễ đọc.

**Cách Sử Dụng và Ví Dụ:**

1. **Thuộc Tính `text-align`:**

   - `text-align: left;`: Căn chỉnh văn bản về phía trái.
   - `text-align: center;`: Căn chỉnh văn bản vào giữa.
   - `text-align: right;`: Căn chỉnh văn bản về phía phải.
   - `text-align: justify;`: Căn chỉnh văn bản theo cả hai lề, tạo ra các dòng có độ dài đều nhau.

   Ví dụ:

   ```css
   .content {
     text-align: center;
   }
   ```

   Trong ví dụ này, tất cả nội dung trong phần tử có class "content" sẽ được căn giữa.

2. **Thuộc Tính `margin` và `padding`:**

   - `margin`: Được sử dụng để thiết lập khoảng cách bên ngoài của phần tử.
   - `padding`: Được sử dụng để thiết lập khoảng cách bên trong của phần tử.

   Ví dụ:

   ```css
   .box {
     margin: 10px; /* Khoảng cách bên ngoài là 10px */
     padding: 20px; /* Khoảng cách bên trong là 20px */
   }
   ```

   Trong ví dụ này, phần tử có class "box" sẽ có khoảng cách bên ngoài là 10px và khoảng cách bên trong là 20px.

Các thuộc tính canh lề trong CSS giúp điều chỉnh vị trí và trình bày của nội dung trong trang web của bạn, tạo ra một giao diện người dùng dễ đọc và hấp dẫn.

---

---

## Hiển thị và vị trí (display, position).

**Khái Niệm:**
Trong CSS, hai thuộc tính quan trọng là `display` và `position` được sử dụng để điều chỉnh hiển thị và vị trí của các phần tử trên trang web.

- `display`: Xác định cách mà một phần tử được hiển thị trên trang. Có nhiều giá trị khác nhau cho thuộc tính này như `block`, `inline`, `inline-block`, `flex`, `grid`, vv.
- `position`: Xác định cách một phần tử được định vị trong tài liệu HTML. Có các giá trị như `static`, `relative`, `absolute`, `fixed`, `sticky`.

**Ngữ Cảnh:**
Việc sử dụng `display` và `position` cho phép bạn kiểm soát cách các phần tử được tổ chức và hiển thị trên trang web của bạn. Điều này rất hữu ích để tạo ra các bố cục phức tạp, hiệu ứng di chuyển và các yếu tố giao diện người dùng động.

**Cách Sử Dụng và Ví Dụ:**

1. **Thuộc Tính `display`:**

   - `display: block;`: Phần tử sẽ chiếm toàn bộ chiều rộng của dòng và bắt đầu từ dòng mới.
   - `display: inline;`: Phần tử sẽ chỉ chiếm không gian cần thiết và không bắt đầu từ dòng mới.
   - `display: inline-block;`: Phần tử sẽ chiếm không gian cần thiết nhưng vẫn bắt đầu từ dòng mới.
   - `display: none;`: Phần tử sẽ không được hiển thị trên trang.

   Ví dụ:

   ```css
   .block-element {
     display: block;
   }

   .inline-element {
     display: inline;
   }
   ```

   Trong ví dụ này, `.block-element` sẽ hiển thị như một phần tử block, trong khi `.inline-element` sẽ hiển thị như một phần tử inline.

2. **Thuộc Tính `position`:**

   - `position: static;`: Phần tử sẽ hiển thị theo vị trí mặc định của nó trong luồng tài liệu.
   - `position: relative;`: Phần tử sẽ hiển thị tại vị trí ban đầu, nhưng bạn có thể dịch chuyển nó bằng cách sử dụng thuộc tính `top`, `right`, `bottom`, và `left`.
   - `position: absolute;`: Phần tử sẽ hiển thị tại vị trí được xác định bằng cách sử dụng các thuộc tính `top`, `right`, `bottom`, và `left`, dựa trên phần tử cha mà nó có thuộc tính `position` là `relative`, `absolute`, hoặc `fixed`.
   - `position: fixed;`: Phần tử sẽ hiển thị tại một vị trí cố định trên trình duyệt và sẽ không di chuyển khi cuộn trang.
   - `position: sticky;`: Phần tử sẽ hiển thị theo vị trí mặc định của nó, nhưng sẽ "bám" vào màn hình khi cuộn trang, nếu nó đi ra ngoài vùng hiển thị.

   Ví dụ:

   ```css
   .relative-element {
     position: relative;
     top: 20px;
     left: 30px;
   }

   .fixed-element {
     position: fixed;
     top: 10px;
     right: 10px;
   }
   ```

   Trong ví dụ này, `.relative-element` sẽ hiển thị tại vị trí ban đầu và được dịch chuyển 20px theo phía trên và 30px theo phía trái, trong khi `.fixed-element` sẽ hiển thị ở góc trên bên phải của trình duyệt và không thay đổi vị trí khi cuộn trang.

Việc sử dụng các thuộc tính `display` và `position` trong CSS giúp bạn tạo ra các bố cục phức tạp và hiệu ứng di chuyển trên trang web của bạn. Điều này tạo ra trải nghiệm người dùng động và thú vị.

---

---
