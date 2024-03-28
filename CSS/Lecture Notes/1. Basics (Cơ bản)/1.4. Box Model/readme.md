## Margin.

**Khái Niệm:**
Trong CSS, `margin` là một thuộc tính được sử dụng để xác định khoảng cách bên ngoài của một phần tử. Margin được sử dụng để tạo ra khoảng cách giữa phần tử hiện tại và các phần tử xung quanh.

**Ngữ Cảnh:**
Margin là một phần quan trọng của việc kiểm soát khoảng cách và bố cục của trang web. Bằng cách sử dụng margin, bạn có thể tạo ra các khoảng cách không gian giữa các phần tử hoặc phần tử và ranh giới của trang.

**Cách Sử Dụng và Ví Dụ:**
Thuộc tính `margin` có thể được áp dụng theo một trong ba cách:

1. **Margin Đơn Giản:**

   - Sử dụng một giá trị: `margin: 10px;` (khoảng cách đều các phía là 10px).
   - Sử dụng nhiều giá trị: `margin: 10px 20px;` (khoảng cách trên/dưới là 10px, trái/phải là 20px).
   - Sử dụng cụ thể cho mỗi hướng: `margin-top: 10px; margin-right: 20px; margin-bottom: 15px; margin-left: 25px;`.

2. **Margin Âm:**

   - Cho phép bạn đặt một margin âm, khi muốn các phần tử đặt sát nhau.

   ```css
   .element {
     margin: -10px;
   }
   ```

3. **Kết Hợp Margin với Margin Auto:**
   - `margin: 0 auto;` để căn giữa phần tử theo chiều ngang.
   ```css
   .container {
     width: 50%;
     margin: 0 auto; /* Căn giữa theo chiều ngang */
   }
   ```

**Ví Dụ:**

```css
.box {
  width: 200px;
  height: 100px;
  background-color: #f0f0f0;
  margin: 20px; /* Khoảng cách đều các phía là 20px */
}
```

Trong ví dụ này, `.box` sẽ có kích thước là 200x100px và có màu nền #f0f0f0. Khoảng cách bên ngoài của phần tử sẽ là 20px.

Margin là một công cụ mạnh mẽ trong CSS để kiểm soát khoảng cách và bố cục của các phần tử trên trang web của bạn. Điều này giúp tạo ra giao diện trang web hấp dẫn và dễ đọc.

---

---

## Border.

**Khái Niệm:**
Trong CSS, `border` là một thuộc tính được sử dụng để tạo ra đường viền xung quanh một phần tử HTML. Border giúp tạo ra ranh giới cho phần tử và làm nổi bật hoặc tách biệt phần tử từ các phần tử khác trên trang web.

**Ngữ Cảnh:**
Border là một phần quan trọng của việc trình bày và thiết kế trang web. Việc sử dụng border giúp cải thiện cấu trúc và tạo điểm nhấn cho các phần tử trên trang web.

**Cách Sử Dụng và Ví Dụ:**

1. **Border Style:**
   Border có thể có nhiều kiểu khác nhau như solid, dashed, dotted, double, vv.

   ```css
   .box {
     border-style: solid;
     border-width: 2px;
     border-color: #000;
   }
   ```

   Trong đoạn mã trên, `.box` sẽ có đường viền kiểu solid, rộng 2px, và màu đen.

2. **Border Color:**
   Bạn có thể chỉ định màu sắc của border bằng cách sử dụng tên màu, mã màu hex hoặc RGBA.

   ```css
   .box {
     border: 1px solid red;
   }
   ```

   Trong đoạn mã này, `.box` sẽ có đường viền màu đỏ.

3. **Border Width:**
   Border có thể có độ rộng khác nhau, được đo bằng đơn vị như px, em, rem, vv.

   ```css
   .box {
     border: 3px solid #ccc;
   }
   ```

   Trong đoạn mã này, `.box` sẽ có đường viền rộng 3px màu xám nhạt.

4. **Border Radius:**
   Border radius được sử dụng để làm mịn góc của border bằng cách làm tròn chúng.

   ```css
   .box {
     border: 1px solid #000;
     border-radius: 5px;
   }
   ```

   Trong đoạn mã này, `.box` sẽ có đường viền với góc được làm tròn với bán kính 5px.

5. **Border Collapse:**
   Đối với các bảng HTML, bạn có thể điều chỉnh cách các đường viền của các ô sát nhau được hiển thị bằng cách sử dụng border-collapse.
   ```css
   table {
     border-collapse: collapse;
   }
   ```
   Trong đoạn mã này, các đường viền của các ô trong bảng sẽ được hiển thị mà không có khoảng cách giữa chúng.

Border là một phần quan trọng của việc thiết kế trang web, giúp cải thiện cấu trúc và trình bày của trang web. Điều này giúp tạo ra giao diện người dùng dễ đọc và hấp dẫn hơn.

---

---

## Padding.

**Khái Niệm:**
Trong CSS, `padding` là một thuộc tính được sử dụng để tạo ra khoảng cách giữa ranh giới của một phần tử và nội dung bên trong của nó. Padding giúp tạo ra khoảng cách bên trong của một phần tử, giúp kiểm soát khoảng trắng xung quanh nội dung bên trong phần tử đó.

**Ngữ Cảnh:**
Padding là một phần quan trọng của việc kiểm soát khoảng cách và trình bày của nội dung trong các phần tử HTML. Việc sử dụng padding giúp tạo ra giao diện người dùng dễ đọc và hấp dẫn hơn.

**Cách Sử Dụng và Ví Dụ:**

1. **Sử Dụng Padding Với Giá Trị Đơn:**

   ```css
   .box {
     padding: 20px;
   }
   ```

   Trong đoạn mã này, `.box` sẽ có padding 20px xung quanh nội dung bên trong.

2. **Sử Dụng Padding Với Giá Trị Tách Biệt Cho Mỗi Hướng:**

   ```css
   .box {
     padding-top: 10px;
     padding-right: 20px;
     padding-bottom: 15px;
     padding-left: 30px;
   }
   ```

   Trong đoạn mã này, `.box` sẽ có padding là 10px phía trên, 20px bên phải, 15px phía dưới, và 30px bên trái.

3. **Sử Dụng Padding Tạo Hiệu Ứng Biên Nhẹ:**

   ```css
   .button {
     padding: 10px 20px;
     background-color: #ccc;
   }
   ```

   Trong đoạn mã này, `.button` sẽ có padding 10px phía trên và dưới, 20px bên trái và phải, tạo ra một khoảng trắng nhẹ xung quanh nút.

4. **Sử Dụng Padding Với Phần Tử Inline:**
   ```css
   span {
     padding: 5px;
   }
   ```
   Trong đoạn mã này, các phần tử `<span>` sẽ có padding 5px, tạo ra một khoảng trắng nhẹ xung quanh nội dung bên trong.

Padding là một phần quan trọng của việc kiểm soát khoảng cách và trình bày của nội dung trong các phần tử HTML. Việc sử dụng padding giúp tạo ra giao diện người dùng dễ đọc và hấp dẫn hơn.

---

---

## Content.

**Khái Niệm:**
Trong CSS, thuộc tính `content` không phải là một thuộc tính riêng lẻ mà thường được sử dụng trong ngữ cảnh của các thuộc tính khác như `::before` và `::after`.

**Ngữ Cảnh:**
Thuộc tính `content` được sử dụng để định nghĩa nội dung mới được thêm vào trước hoặc sau nội dung chính của một phần tử, thông qua việc sử dụng các pseudo-elements như `::before` và `::after`. Điều này cho phép bạn chèn nội dung vào phần tử mà không cần phải thêm trực tiếp vào HTML.

**Cách Sử Dụng và Ví Dụ:**

1. **Sử Dụng với `::before` và `::after`:**

   ```css
   .quote::before {
     content: open-quote;
   }

   .quote::after {
     content: close-quote;
   }
   ```

   Trong ví dụ này, nội dung của các phần tử có class là "quote" sẽ được bao bọc bởi dấu ngoặc mở và đóng.

2. **Thêm Nội Dung Hình Ảnh:**

   ```css
   .icon::before {
     content: url("icon.png");
   }
   ```

   Trong ví dụ này, nội dung của phần tử có class là "icon" sẽ là hình ảnh được chỉ định trong tệp `icon.png`.

3. **Thêm Nội Dung Văn Bản:**

   ```css
   .notification::after {
     content: "New!";
     color: red;
   }
   ```

   Trong đoạn mã này, nội dung "New!" sẽ được thêm vào sau nội dung của các phần tử có class là "notification", và sẽ có màu đỏ.

4. **Sử Dụng Content với Trạng Thái:**
   ```css
   .button:hover::before {
     content: "Click me!";
     color: blue;
   }
   ```
   Trong ví dụ này, khi người dùng di chuột qua phần tử có class là "button", nội dung "Click me!" sẽ được hiển thị trước nội dung của phần tử và có màu xanh.

Thuộc tính `content` trong CSS được sử dụng để thêm nội dung vào phần tử thông qua việc sử dụng pseudo-elements như `::before` và `::after`. Điều này mở ra nhiều cơ hội để tạo ra giao diện phong phú và linh hoạt hơn mà không cần sửa đổi trực tiếp HTML.

---

---
