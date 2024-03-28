## Cách khai báo và sử dụng biến trong CSS.

**Khái niệm:**
Biến trong CSS là một cách để lưu trữ và tái sử dụng các giá trị, như màu sắc, kích thước, hoặc các giá trị CSS khác, dễ dàng hơn. Biến giúp làm cho mã CSS của bạn trở nên dễ đọc hơn, dễ bảo trì hơn và giảm lặp lại mã.

**Ngữ cảnh:**
Khai báo và sử dụng biến trong CSS được sử dụng phổ biến trong các dự án lớn hoặc khi cần sử dụng các giá trị được lặp lại nhiều lần trong mã CSS. Việc sử dụng biến giúp làm cho mã CSS dễ hiểu hơn và dễ dàng cập nhật giá trị của biến một cách tập trung.

**Cách sử dụng:**

1. **Khai báo biến:**
   Để khai báo một biến trong CSS, bạn sử dụng từ khóa `--` và sau đó là tên của biến, sau đó là giá trị bạn muốn gán cho biến.

   ```css
   :root {
     --primary-color: #007bff; /* Khai báo một biến có tên là --primary-color và gán giá trị là #007bff */
   }
   ```

   Trong ví dụ trên, `:root` là một pseudo-class đặc biệt trong CSS, đại diện cho phần tử gốc của tài liệu (thường là thẻ `<html>`), nơi bạn có thể khai báo biến toàn cục cho toàn bộ trang.

2. **Sử dụng biến:**
   Sau khi đã khai báo biến, bạn có thể sử dụng chúng bằng cách sử dụng hàm `var()`.

   ```css
   .element {
     color: var(
       --primary-color
     ); /* Sử dụng biến --primary-color trong định dạng màu của phần tử */
   }
   ```

   Trong ví dụ trên, giá trị của biến `--primary-color` sẽ được sử dụng cho thuộc tính màu sắc của phần tử có class là `.element`.

**Ví dụ:**
HTML:

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
    <div class="box">Box with primary color</div>
  </body>
</html>
```

CSS (styles.css):

```css
:root {
  --primary-color: #007bff;
}

.box {
  width: 200px;
  height: 200px;
  background-color: var(--primary-color);
}
```

Trong ví dụ này, chúng ta đã khai báo một biến `--primary-color` với giá trị là `#007bff` trong phần `:root` của tài liệu CSS. Sau đó, chúng ta sử dụng biến này để đặt màu nền của một hộp (`.box`). Màu nền của hộp sẽ thay đổi tương ứng với giá trị của biến `--primary-color`.

---

---

## Ưu điểm của việc sử dụng biến CSS.

**Khái niệm:**
Biến CSS là một cách để lưu trữ và tái sử dụng các giá trị, như màu sắc, kích thước, hoặc các giá trị CSS khác, dễ dàng hơn. Chúng cho phép bạn gán một giá trị cho một biến, sau đó sử dụng lại biến đó trong nhiều nơi khác nhau trong mã CSS của bạn.

**Ngữ cảnh:**
Việc sử dụng biến CSS có nhiều ưu điểm quan trọng, đặc biệt là trong các dự án lớn hoặc khi cần sử dụng các giá trị được lặp lại nhiều lần trong mã CSS. Việc này giúp làm cho mã CSS của bạn dễ hiểu hơn, dễ bảo trì hơn và giảm lặp lại mã.

**Ưu điểm của việc sử dụng biến CSS:**

1. **Dễ bảo trì:** Nếu bạn muốn thay đổi một giá trị, bạn chỉ cần sửa đổi giá trị của biến một lần duy nhất. Tất cả các địa điểm sử dụng biến sẽ tự động cập nhật theo.

2. **Tính DRY (Don't Repeat Yourself):** Việc sử dụng biến giúp tránh việc lặp lại mã, giúp mã CSS của bạn trở nên ngắn gọn và dễ đọc hơn.

3. **Tính linh hoạt:** Bạn có thể dễ dàng thay đổi giá trị của biến để áp dụng cho toàn bộ trang web hoặc một phần nhất định mà không cần phải điều chỉnh từng địa điểm sử dụng.

4. **Quản lý được giá trị: **Biến cho phép bạn quản lý tất cả các giá trị CSS quan trọng ở một nơi duy nhất, giúp làm cho việc quản lý giá trị trở nên dễ dàng hơn.

**Cách sử dụng:**

1. **Khai báo biến:** Sử dụng `--` trước tên biến để khai báo biến CSS.

   ```css
   :root {
     --primary-color: #007bff; /* Khai báo biến --primary-color và gán giá trị là #007bff */
   }
   ```

2. **Sử dụng biến:** Sử dụng `var()` để sử dụng giá trị của biến trong mã CSS của bạn.
   ```css
   .element {
     color: var(
       --primary-color
     ); /* Sử dụng biến --primary-color trong định dạng màu sắc của phần tử */
   }
   ```

**Ví dụ:**
HTML:

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
    <div class="box">Box with primary color</div>
  </body>
</html>
```

CSS (styles.css):

```css
:root {
  --primary-color: #007bff; /* Khai báo biến --primary-color và gán giá trị là #007bff */
}

.box {
  width: 200px;
  height: 200px;
  background-color: var(
    --primary-color
  ); /* Sử dụng biến --primary-color cho màu nền */
}
```

Trong ví dụ này, chúng ta đã sử dụng biến CSS để quản lý màu chính của một hộp. Việc này giúp làm cho mã CSS dễ đọc hơn và dễ bảo trì hơn. Nếu bạn muốn thay đổi màu chính, bạn chỉ cần sửa đổi giá trị của biến `--primary-color` trong phần `:root`, và tất cả các phần tử sử dụng biến này sẽ tự động cập nhật theo.

---

---
