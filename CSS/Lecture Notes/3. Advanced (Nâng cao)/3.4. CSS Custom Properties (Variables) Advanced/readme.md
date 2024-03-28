## Sử dụng biến CSS để tạo ra mã CSS dễ bảo trì và tái sử dụng.

### Khái Niệm:

Biến CSS là các giá trị được đặt tên một cách dễ nhớ và tái sử dụng trong các quy tắc CSS. Chúng giúp tạo ra mã CSS dễ bảo trì và tái sử dụng bằng cách cho phép bạn định nghĩa một giá trị một lần và sử dụng nó nhiều lần trong toàn bộ stylesheet.

### Ngữ Cảnh:

Khi phát triển một trang web hoặc ứng dụng web, việc sử dụng biến CSS giúp giảm bớt lặp lại mã và làm cho mã CSS dễ bảo trì hơn. Điều này đặc biệt hữu ích khi bạn cần thay đổi giá trị của một thuộc tính CSS và muốn áp dụng thay đổi đó cho nhiều phần tử.

### Cách Sử Dụng:

1. **Định Nghĩa Biến CSS:**

   - Sử dụng `--` để bắt đầu tên biến và gán giá trị cho nó trong phần khai báo root của CSS.

   ```css
   :root {
     --primary-color: #007bff;
     --secondary-color: #6c757d;
   }
   ```

2. **Sử Dụng Biến CSS:**

   - Sử dụng hàm `var()` để lấy giá trị của biến và sử dụng nó trong các quy tắc CSS.

   ```css
   .button {
     background-color: var(--primary-color);
     color: white;
     padding: 10px 20px;
     border-radius: 5px;
   }
   ```

3. **Thay Đổi Giá Trị Biến:**
   - Để thay đổi giá trị của một biến trong toàn bộ stylesheet, bạn chỉ cần thay đổi giá trị của nó trong phần khai báo root.
   ```css
   :root {
     --primary-color: #ff0000; /* Thay đổi màu chính thành đỏ */
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
    <title>Using CSS Variables</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <button class="button">Click me</button>
  </body>
</html>
```

#### CSS (styles.css):

```css
/* Định nghĩa biến CSS */
:root {
  --primary-color: #007bff; /* Màu chính */
  --secondary-color: #6c757d; /* Màu phụ */
}

/* Sử dụng biến CSS */
.button {
  background-color: var(--primary-color);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

/* Thay đổi giá trị biến */
:root {
  --primary-color: #ff0000; /* Thay đổi màu chính thành đỏ */
}
```

### Kết Luận:

Sử dụng biến CSS là một cách hiệu quả để tạo ra mã CSS dễ bảo trì và tái sử dụng. Bằng cách định nghĩa và sử dụng biến, bạn có thể dễ dàng thay đổi giá trị của các thuộc tính CSS trong toàn bộ stylesheet mà không cần phải thay đổi mã CSS một cách thủ công. Điều này giúp giảm bớt lặp lại mã và làm cho mã CSS của bạn trở nên dễ bảo trì và quản lý hơn.

---

---

## Dynamic và computed variables.

### Khái Niệm:

Dynamic và computed variables là hai loại biến CSS có tính linh hoạt cao trong việc định nghĩa và sử dụng giá trị trong CSS.

1. **Dynamic Variables:** Đây là biến CSS mà giá trị có thể thay đổi theo thời gian hoặc theo các sự kiện khác nhau, như hover, focus, active, và transition. Các giá trị này thường được gán cho các pseudo-classes hoặc pseudo-elements.

2. **Computed Variables:** Đây là biến CSS mà giá trị được tính toán dựa trên các giá trị khác, chẳng hạn như kích thước của một phần tử hoặc các thuộc tính khác.

### Ngữ Cảnh:

Khi phát triển trang web hoặc ứng dụng web, bạn có thể cần sử dụng dynamic và computed variables để điều chỉnh giao diện và tạo ra các hiệu ứng tương tác phức tạp.

### Cách Sử Dụng:

1. **Dynamic Variables:**

   - Sử dụng pseudo-classes và pseudo-elements để định nghĩa giá trị của dynamic variables.
   - Ví dụ:

     ```css
     /* Dynamic variable được kích hoạt khi phần tử được hover */
     .button:hover {
       --button-background: #ff0000;
     }

     /* Sử dụng dynamic variable trong quy tắc CSS */
     .button {
       background-color: var(
         --button-background,
         #007bff
       ); /* Mặc định là màu xanh */
       color: white;
       padding: 10px 20px;
       border-radius: 5px;
     }
     ```

2. **Computed Variables:**

   - Sử dụng các hàm tính toán như `calc()` để tính toán giá trị của computed variables.
   - Ví dụ:

     ```css
     /* Computed variable được tính toán từ chiều rộng của container */
     :root {
       --container-width: 500px;
       --column-width: calc(var(--container-width) / 3);
     }

     /* Sử dụng computed variable trong quy tắc CSS */
     .column {
       width: var(--column-width);
       float: left;
       padding: 10px;
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
    <title>Dynamic và Computed Variables</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <button class="button">Hover over me</button>
    <div class="container">
      <div class="column">Column 1</div>
      <div class="column">Column 2</div>
      <div class="column">Column 3</div>
    </div>
  </body>
</html>
```

#### CSS (styles.css):

```css
/* Dynamic variable */
.button {
  --button-background: #007bff; /* Màu mặc định */
  background-color: var(--button-background);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

/* Dynamic variable được kích hoạt khi phần tử được hover */
.button:hover {
  --button-background: #ff0000;
}

/* Computed variable */
:root {
  --container-width: 500px;
  --column-width: calc(var(--container-width) / 3);
}

.column {
  width: var(--column-width);
  float: left;
  padding: 10px;
}
```

### Kết Luận:

Dynamic và computed variables là hai công cụ mạnh mẽ trong CSS giúp bạn tạo ra giao diện linh hoạt và phản hồi. Bằng cách sử dụng chúng, bạn có thể dễ dàng điều chỉnh giao diện của trang web hoặc ứng dụng web của bạn theo các điều kiện khác nhau và tính toán các giá trị phức tạp dựa trên các thuộc tính khác.

---

---
