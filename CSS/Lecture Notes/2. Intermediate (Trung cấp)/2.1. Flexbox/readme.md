## Cách sử dụng Flexbox để tổ chức layout trong CSS.

**Khái niệm:**
Flexbox là một phương pháp layout trong CSS, cho phép bạn sắp xếp các phần tử trong một container một cách linh hoạt và dễ dàng điều chỉnh, dựa trên các thuộc tính của flexbox.

**Ngữ cảnh:**
Flexbox là một cách tiếp cận hiệu quả để xây dựng các layout linh hoạt và đáp ứng được các thiết bị khác nhau. Nó cho phép bạn tự do sắp xếp các phần tử theo hướng ngang hoặc dọc, điều chỉnh các phần tử con để đáp ứng các kích thước màn hình khác nhau một cách tự nhiên.

**Cách sử dụng:**
Để sử dụng Flexbox trong CSS, bạn cần đặt thuộc tính `display` của container là `flex`, sau đó sử dụng các thuộc tính của flexbox để điều chỉnh layout theo ý muốn.

**Ví dụ:**
Giả sử bạn muốn tạo một layout với hai phần tử, một phần tử chiếm 30% chiều rộng và phần tử còn lại chiếm 70% chiều rộng, bạn có thể sử dụng Flexbox như sau:

HTML:

```html
<div class="container">
  <div class="item1">Phần tử 1</div>
  <div class="item2">Phần tử 2</div>
</div>
```

CSS:

```css
.container {
  display: flex;
}

.item1 {
  flex: 30%;
  background-color: #f0f0f0;
}

.item2 {
  flex: 70%;
  background-color: #ccc;
}
```

Trong đoạn mã trên, `display: flex;` được sử dụng để khai báo container là một flex container. Hai phần tử con được sử dụng để sắp xếp các phần tử trong container theo tỉ lệ 30% và 70% của không gian available theo chiều ngang. Các phần tử con được căn chỉnh theo chiều ngang mặc định.

---

---

## Thuộc tính và giá trị của Flexbox.

**Khái niệm:**
Flexbox là một phương pháp layout trong CSS giúp tổ chức và sắp xếp các phần tử trong một container theo các hướng linh hoạt: ngang hoặc dọc. Thuộc tính và giá trị của Flexbox cho phép điều chỉnh cách các phần tử con được phân phối, căn chỉnh và thứ tự của chúng trong container.

**Ngữ cảnh:**
Flexbox rất hữu ích khi bạn muốn tạo ra các layout linh hoạt và đáp ứng được các kích thước màn hình khác nhau. Nó cung cấp một cách tiếp cận hiệu quả để sắp xếp và căn chỉnh các phần tử, giúp tránh được việc sử dụng float hoặc các kỹ thuật layout cũ kỹ.

**Cách sử dụng:**

1. Để sử dụng Flexbox, bạn cần đặt thuộc tính `display` của container là `flex`.
2. Sau đó, bạn có thể sử dụng các thuộc tính và giá trị của Flexbox để điều chỉnh layout theo ý muốn.

**Ví dụ về thuộc tính và giá trị của Flexbox:**

1. `display`: Xác định loại flex container.

   - Giá trị: `flex`, `inline-flex`

   ```css
   .container {
     display: flex; /* hoặc inline-flex */
   }
   ```

2. `flex-direction`: Xác định hướng của các phần tử trong flex container.

   - Giá trị: `row`, `row-reverse`, `column`, `column-reverse`

   ```css
   .container {
     flex-direction: row; /* hoặc column, row-reverse, column-reverse */
   }
   ```

3. `flex-wrap`: Xác định liệu các phần tử con có được phép xuống dòng khi không còn không gian trong container hay không.

   - Giá trị: `nowrap`, `wrap`, `wrap-reverse`

   ```css
   .container {
     flex-wrap: nowrap; /* hoặc wrap, wrap-reverse */
   }
   ```

4. `justify-content`: Điều chỉnh căn chỉnh theo chiều chính của flex container.

   - Giá trị: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`

   ```css
   .container {
     justify-content: flex-start; /* hoặc flex-end, center, space-between, space-around, space-evenly */
   }
   ```

5. `align-items`: Điều chỉnh căn chỉnh theo chiều chéo của flex container.

   - Giá trị: `flex-start`, `flex-end`, `center`, `baseline`, `stretch`

   ```css
   .container {
     align-items: center; /* hoặc flex-start, flex-end, baseline, stretch */
   }
   ```

6. `align-content`: Điều chỉnh căn chỉnh giữa các dòng trong flex container khi có nhiều dòng.
   - Giá trị: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`
   ```css
   .container {
     align-content: center; /* hoặc flex-start, flex-end, space-between, space-around, stretch */
   }
   ```

Với các thuộc tính và giá trị này, bạn có thể điều chỉnh layout của các phần tử trong flex container một cách linh hoạt và dễ dàng.

---

---
