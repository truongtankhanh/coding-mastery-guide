## Tạo hiệu ứng chuyển động phức tạp với CSS animations và transitions.

### Khái Niệm:

Trong CSS, bạn có thể tạo hiệu ứng chuyển động phức tạp bằng cách sử dụng hai kỹ thuật chính là CSS animations và transitions.

1. **CSS Transitions:** Transitions cho phép bạn điều chỉnh trơn tru giữa hai trạng thái của một phần tử, chẳng hạn như thay đổi màu sắc hoặc kích thước, khi điều kiện thay đổi, như hover hoặc focus.

2. **CSS Animations:** Animations cho phép bạn tạo ra các hiệu ứng chuyển động phức tạp bằng cách xác định các keyframes để điều khiển các thuộc tính của phần tử qua thời gian.

### Ngữ Cảnh:

Khi phát triển trang web hoặc ứng dụng web, việc thêm các hiệu ứng chuyển động có thể làm cho trải nghiệm người dùng trở nên sinh động và hấp dẫn hơn. CSS animations và transitions là công cụ mạnh mẽ để tạo ra các hiệu ứng chuyển động phức tạp mà không cần sử dụng JavaScript.

### Cách Sử Dụng:

1. **CSS Transitions:**

   - Sử dụng thuộc tính `transition` để xác định các thuộc tính sẽ thay đổi và thời gian diễn ra của transition.
   - Ví dụ:

     ```css
     .box {
       width: 100px;
       height: 100px;
       background-color: blue;
       transition: width 0.5s ease-in-out;
     }

     .box:hover {
       width: 200px;
     }
     ```

2. **CSS Animations:**

   - Sử dụng `@keyframes` để xác định các bước của animation qua thời gian.
   - Sử dụng thuộc tính `animation` để kết hợp keyframes và xác định các thuộc tính khác của animation.
   - Ví dụ:

     ```css
     @keyframes move {
       0% {
         transform: translateX(0);
       }
       50% {
         transform: translateX(100px);
       }
       100% {
         transform: translateX(200px);
       }
     }

     .box {
       width: 100px;
       height: 100px;
       background-color: blue;
       animation: move 2s infinite alternate;
     }
     ```

### Ví Dụ:

#### HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Animations và Transitions</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="box-transition"></div>
    <div class="box-animation"></div>
  </body>
</html>
```

#### CSS (styles.css):

```css
/* CSS Transitions */
.box-transition {
  width: 100px;
  height: 100px;
  background-color: blue;
  transition: width 0.5s ease-in-out;
}

.box-transition:hover {
  width: 200px;
}

/* CSS Animations */
@keyframes move {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(200px);
  }
}

.box-animation {
  width: 100px;
  height: 100px;
  background-color: red;
  animation: move 2s infinite alternate;
}
```

### Kết Luận:

Sử dụng CSS animations và transitions là một cách hiệu quả để thêm hiệu ứng chuyển động phức tạp vào trang web hoặc ứng dụng web của bạn. Bằng cách sử dụng các thuộc tính và tính năng của chúng, bạn có thể tạo ra các hiệu ứng chuyển động đa dạng và sinh động mà không cần sử dụng JavaScript. Điều này giúp cải thiện trải nghiệm người dùng và làm cho trang web của bạn trở nên hấp dẫn hơn.

---

---

## Sử dụng JavaScript để tương tác với các hiệu ứng này.

### Khái Niệm:

Khi sử dụng JavaScript để tương tác với các hiệu ứng CSS như transitions và animations, bạn có thể tạo ra trải nghiệm tương tác phong phú và linh hoạt hơn cho người dùng. JavaScript cho phép bạn kiểm soát và kích hoạt các hiệu ứng CSS dựa trên các sự kiện như click, hover, scroll, và nhiều hơn nữa.

### Ngữ Cảnh:

JavaScript là ngôn ngữ lập trình phổ biến được sử dụng để thêm tính năng tương tác vào các trang web và ứng dụng web. Khi kết hợp với CSS, JavaScript có thể tạo ra các hiệu ứng chuyển động phức tạp và tương tác, cải thiện trải nghiệm người dùng.

### Cách Sử Dụng:

1. **Thêm/Xóa Class CSS:**

   - Sử dụng JavaScript để thêm hoặc xóa các class CSS trên phần tử khi xảy ra sự kiện.
   - Ví dụ:
     ```html
     <!-- HTML -->
     <div id="element" class="animation"></div>
     ```
     ```javascript
     // JavaScript
     const element = document.getElementById("element");
     element.addEventListener("click", function () {
       element.classList.toggle("animation-active");
     });
     ```

2. **Thay Đổi CSS Properties:**

   - Sử dụng JavaScript để thay đổi các thuộc tính CSS của phần tử khi xảy ra sự kiện.
   - Ví dụ:
     ```html
     <!-- HTML -->
     <div
       id="element"
       style="width: 100px; height: 100px; background-color: blue;"
     ></div>
     ```
     ```javascript
     // JavaScript
     const element = document.getElementById("element");
     element.addEventListener("mouseover", function () {
       element.style.backgroundColor = "red";
     });
     ```

3. **Tạo và Điều Khiển Animations:**
   - Sử dụng JavaScript để tạo và điều khiển các animations bằng cách thêm hoặc xóa các keyframes.
   - Ví dụ:
     ```html
     <!-- HTML -->
     <div id="element"></div>
     ```
     ```javascript
     // JavaScript
     const element = document.getElementById("element");
     element.addEventListener("click", function () {
       element.style.animation = "move 2s infinite alternate";
     });
     ```

### Ví Dụ:

#### HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript và CSS Interactions</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div id="element" class="animation"></div>
  </body>
  <script src="script.js"></script>
</html>
```

#### CSS (styles.css):

```css
/* CSS Animation */
@keyframes move {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(200px);
  }
}

.animation {
  width: 100px;
  height: 100px;
  background-color: blue;
  animation: move 2s infinite alternate;
}

.animation-active {
  animation-play-state: paused;
}
```

#### JavaScript (script.js):

```javascript
// JavaScript
const element = document.getElementById("element");
element.addEventListener("click", function () {
  element.classList.toggle("animation-active");
});
```

### Kết Luận:

Sử dụng JavaScript để tương tác với các hiệu ứng CSS là một cách mạnh mẽ để tạo ra trải nghiệm tương tác phong phú và đa dạng cho người dùng. Bằng cách kết hợp JavaScript với CSS, bạn có thể kiểm soát và tùy chỉnh các hiệu ứng chuyển động của trang web hoặc ứng dụng web của mình một cách linh hoạt và đáng kinh ngạc.

---

---
