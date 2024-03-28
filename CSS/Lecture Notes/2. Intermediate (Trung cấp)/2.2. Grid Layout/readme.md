## Cách sử dụng Grid Layout để tạo layout phức tạp và linh hoạt.

**Khái niệm:**
Grid Layout là một cách tiếp cận trong CSS để tạo layout phức tạp và linh hoạt. Nó cho phép bạn chia các phần của trang web thành các ô lưới (grid) để điều chỉnh vị trí và kích thước của các phần tử một cách dễ dàng.

**Ngữ cảnh:**
Grid Layout được sử dụng khi bạn cần tạo ra các layout phức tạp, chẳng hạn như các trang web với nhiều phần tử, cột và hàng. Nó cung cấp một cách tiếp cận linh hoạt và mạnh mẽ để kiểm soát vị trí và kích thước của các phần tử trên trang.

**Cách sử dụng:**

1. Để sử dụng Grid Layout, bạn cần đặt thuộc tính `display` của container là `grid`.
2. Sau đó, bạn định nghĩa các hàng và cột của grid bằng cách sử dụng các thuộc tính như `grid-template-rows`, `grid-template-columns`, và `grid-gap`.
3. Cuối cùng, bạn sử dụng các thuộc tính `grid-row` và `grid-column` để xác định vị trí của các phần tử trong grid.

**Ví dụ về cách sử dụng Grid Layout:**

HTML:

```html
<div class="grid-container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
</div>
```

CSS:

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Chia layout thành 3 cột có chiều rộng bằng nhau */
  grid-template-rows: 100px 200px; /* Có 2 hàng, hàng đầu có chiều cao là 100px, hàng thứ 2 có chiều cao là 200px */
  grid-gap: 10px; /* Khoảng cách giữa các ô là 10px */
}

.item1 {
  grid-column: 1 / 3; /* Phần tử 1 chiếm từ cột 1 đến cột 3 */
  grid-row: 1; /* Phần tử 1 nằm ở hàng đầu */
}

.item2 {
  grid-column: 3; /* Phần tử 2 nằm ở cột thứ 3 */
  grid-row: 1 / span 2; /* Phần tử 2 chiếm từ hàng 1 đến hàng 2 */
}

.item3 {
  grid-column: 1; /* Phần tử 3 nằm ở cột thứ 1 */
  grid-row: 2; /* Phần tử 3 nằm ở hàng thứ 2 */
}

.item4 {
  grid-column: 2; /* Phần tử 4 nằm ở cột thứ 2 */
  grid-row: 2; /* Phần tử 4 nằm ở hàng thứ 2 */
}
```

Trong ví dụ này, chúng ta đã tạo một grid layout với 3 cột và 2 hàng. Mỗi phần tử trong grid được xác định vị trí bằng cách sử dụng các thuộc tính `grid-column` và `grid-row`. Điều này cho phép chúng ta tạo ra một layout phức tạp và linh hoạt dễ dàng.

---

---

## Thuộc tính và giá trị của Grid Layout.

**Khái niệm:**
Grid Layout là một phương pháp layout trong CSS giúp tạo ra các lưới (grid) để tổ chức và căn chỉnh các phần tử trên trang web. Grid Layout cho phép bạn định nghĩa các hàng và cột, xác định vị trí và kích thước của các ô lưới để tạo ra các layout phức tạp và linh hoạt.

**Ngữ cảnh:**
Grid Layout là một công cụ mạnh mẽ khi bạn cần tạo ra các layout phức tạp, chẳng hạn như các trang web với nhiều cột và hàng khác nhau. Nó cung cấp một cách tiếp cận linh hoạt để kiểm soát vị trí và kích thước của các phần tử trên trang.

**Cách sử dụng:**
Để sử dụng Grid Layout, bạn cần áp dụng các thuộc tính và giá trị sau:

1. `display`: Xác định loại grid container.

   - Giá trị: `grid`, `inline-grid`

   ```css
   .container {
     display: grid; /* hoặc inline-grid */
   }
   ```

2. `grid-template-columns`, `grid-template-rows`: Định nghĩa kích thước và số lượng cột/hàng trong grid.

   - Giá trị: ví dụ `100px`, `1fr`, `repeat(3, 1fr)`

   ```css
   .container {
     grid-template-columns: 100px 1fr 2fr; /* 3 cột với kích thước là 100px, 1/3 và 2/3 chiều rộng của container */
     grid-template-rows: 50px auto; /* 2 hàng, hàng đầu có kích thước 50px, hàng thứ hai co dãn tự động */
   }
   ```

3. `grid-gap`: Xác định khoảng cách giữa các ô lưới.

   - Giá trị: `10px`, `1em`, `2rem`

   ```css
   .container {
     grid-gap: 10px; /* Khoảng cách giữa các ô lưới là 10px */
   }
   ```

4. `grid-column`, `grid-row`: Xác định vị trí của phần tử trong grid.

   - Giá trị: `span`, `start`, `end`

   ```css
   .item {
     grid-column: 1 / span 2; /* Phần tử chiếm từ cột 1 đến 2 */
     grid-row: 2; /* Phần tử nằm ở hàng thứ 2 */
   }
   ```

5. `justify-items`, `align-items`: Điều chỉnh vị trí của phần tử bên trong ô lưới.
   - Giá trị: `start`, `end`, `center`, `stretch`
   ```css
   .container {
     justify-items: center; /* Căn giữa phần tử theo chiều ngang */
     align-items: center; /* Căn giữa phần tử theo chiều dọc */
   }
   ```

**Ví dụ:**
HTML:

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

CSS:

```css
.container {
  display: grid;
  grid-template-columns: 100px 1fr 2fr; /* 3 cột với kích thước là 100px, 1/3 và 2/3 chiều rộng của container */
  grid-template-rows: 50px auto; /* 2 hàng, hàng đầu có kích thước 50px, hàng thứ hai co dãn tự động */
  grid-gap: 10px; /* Khoảng cách giữa các ô lưới là 10px */
}

.item {
  grid-column: 1 / span 2; /* Phần tử chiếm từ cột 1 đến 2 */
  grid-row: 2; /* Phần tử nằm ở hàng thứ 2 */
  justify-self: center; /* Căn giữa phần tử theo chiều ngang trong ô lưới */
  align-self: center; /* Căn giữa phần tử theo chiều dọc trong ô lưới */
}
```

Trong ví dụ này, chúng ta đã sử dụng Grid Layout để tạo ra một grid container với 3 cột và 2 hàng. Các phần tử được xác định vị trí và kích thước bằng cách sử dụng các thuộc tính `grid-column` và `grid-row`.

---

---
