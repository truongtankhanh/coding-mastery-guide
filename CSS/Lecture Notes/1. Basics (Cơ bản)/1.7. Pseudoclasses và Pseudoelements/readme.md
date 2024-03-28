## Hover.

**Khái Niệm:**
Trong CSS, `:hover` là một pseudo-class (lớp giả) được sử dụng để áp dụng các quy tắc CSS khi người dùng di chuột qua hoặc tập vào một phần tử.

**Ngữ Cảnh:**
`hover` thường được sử dụng để tạo hiệu ứng tương tác khi người dùng tương tác với các phần tử trên trang web, như làm thay đổi màu sắc, kích thước hoặc hiển thị các phần tử khác.

**Cách Sử Dụng và Ví Dụ:**
Dưới đây là cách sử dụng `hover` và ví dụ đi kèm:

1. **Thay Đổi Màu Chữ Khi Hover:**

   ```css
   /* CSS */
   .button {
     background-color: #007bff;
     color: #fff;
     padding: 10px 20px;
     border-radius: 5px;
   }

   .button:hover {
     background-color: #0056b3;
   }
   ```

   ```html
   <!-- HTML -->
   <button class="button">Hover over me</button>
   ```

   Trong ví dụ này, màu nền của nút sẽ thay đổi thành màu xanh đậm khi người dùng di chuột qua nút.

2. **Hiển Thị Một Phần Tử Khác Khi Hover:**

   ```css
   /* CSS */
   .tooltip {
     position: relative;
     display: inline-block;
   }

   .tooltip .tooltiptext {
     visibility: hidden;
     width: 120px;
     background-color: #555;
     color: #fff;
     text-align: center;
     border-radius: 6px;
     padding: 5px;
     position: absolute;
     z-index: 1;
     bottom: 125%;
     left: 50%;
     margin-left: -60px;
   }

   .tooltip:hover .tooltiptext {
     visibility: visible;
   }
   ```

   ```html
   <!-- HTML -->
   <div class="tooltip">
     Hover over me
     <span class="tooltiptext">Tooltip text</span>
   </div>
   ```

   Trong ví dụ này, khi người dùng di chuột qua phần tử có class là "tooltip", một phần tử span với class "tooltiptext" sẽ hiển thị, tạo hiệu ứng tooltip.

Pseudo-class `hover` cho phép bạn tạo ra các hiệu ứng tương tác khi người dùng tương tác với các phần tử trên trang web. Điều này làm cho trải nghiệm người dùng trở nên phong phú và hấp dẫn hơn.

---

---

## Active.

**Khái Niệm:**
Trong CSS, pseudo-class `:active` được sử dụng để áp dụng kiểu cho một phần tử khi nó được kích hoạt, tức là khi người dùng nhấn và giữ chuột hoặc nhấn một phím trên bàn phím.

**Ngữ Cảnh:**
Pseudo-class `:active` thường được sử dụng để cung cấp phản hồi trực quan khi người dùng tương tác với các phần tử trên trang web. Điều này giúp cải thiện trải nghiệm người dùng bằng cách hiển thị rõ ràng các hành động tương tác.

**Cách Sử Dụng và Ví Dụ:**
Dưới đây là cách sử dụng và ví dụ về pseudo-class `:active`:

**CSS:**

```css
.button {
  background-color: #4caf50; /* Màu nền mặc định */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.button:active {
  background-color: #45a049; /* Màu nền khi kích hoạt */
  transform: translateY(2px); /* Di chuyển phần tử xuống 2px khi kích hoạt */
}
```

**HTML:**

```html
<button class="button">Click me</button>
```

Trong ví dụ này, khi người dùng nhấn vào nút, CSS sẽ áp dụng quy tắc trong pseudo-class `:active` cho phần tử. Trong trường hợp này, màu nền của nút sẽ thay đổi thành màu xanh lá cây đậm (`#45a049`), và nút sẽ di chuyển xuống 2px (`translateY(2px)`) để tạo hiệu ứng nhấn nút.

Pseudo-class `:active` cho phép bạn tùy chỉnh kiểu dáng của phần tử khi nó được kích hoạt, làm cho giao diện trở nên phản ứng và trực quan hơn khi người dùng tương tác với nó.

---

---

## First-child.

**Khái Niệm:**
Trong CSS, `:first-child` là một pseudo-class được sử dụng để chọn phần tử con đầu tiên của một phần tử cha cụ thể. Nó là một cách để áp dụng các quy tắc CSS cho phần tử đầu tiên trong danh sách các phần tử con của một phần tử cha.

**Ngữ Cảnh:**
Pseudo-class `:first-child` thường được sử dụng để thiết lập kiểu cho phần tử con đầu tiên của một phần tử cha. Điều này hữu ích khi bạn muốn tạo ra một giao diện có cấu trúc hoặc tạo kiểu cho phần tử đầu tiên trong một danh sách.

**Cách Sử Dụng và Ví Dụ:**
Dưới đây là cách sử dụng và một ví dụ minh họa về cách sử dụng `:first-child`:

**CSS:**

```css
/* Áp dụng một số kiểu cho phần tử đầu tiên trong một danh sách */
ul li:first-child {
  font-weight: bold;
}

/* Áp dụng kiểu cho phần tử p đầu tiên trong phần tử div */
div p:first-child {
  color: blue;
}
```

Trong ví dụ này:

- `ul li:first-child` chọn phần tử đầu tiên trong danh sách các phần tử `<li>` nằm trong một phần tử `<ul>`, và thiết lập font-weight là bold cho nó.
- `div p:first-child` chọn phần tử p đầu tiên trong phần tử `<div>`, và thiết lập màu chữ là màu xanh cho nó.

**HTML:**

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<div>
  <p>First paragraph</p>
  <p>Second paragraph</p>
  <p>Third paragraph</p>
</div>
```

Trong ví dụ HTML, các quy tắc CSS sẽ được áp dụng cho phần tử đầu tiên trong danh sách và phần tử đầu tiên trong phần tử `<div>`.

Pseudo-class `:first-child` là một công cụ hữu ích trong CSS để chọn phần tử con đầu tiên của một phần tử cha và áp dụng các quy tắc CSS cho nó. Điều này giúp bạn tạo ra giao diện linh hoạt và dễ bảo trì.

---

---

## Before và after.

**Khái Niệm:**
Trong CSS, `::before` và `::after` là các pseudo-elements (phần tử giả) được sử dụng để chèn nội dung vào trước và sau nội dung của một phần tử HTML mà không cần thêm phần tử HTML thực sự vào trong.

**Ngữ Cảnh:**
`::before` và `::after` rất hữu ích khi bạn muốn thêm một số nội dung hoặc trang trí vào một phần tử mà không muốn thay đổi cấu trúc HTML.

**Cách Sử Dụng và Ví Dụ:**
Dưới đây là cách sử dụng `::before` và `::after` cùng với một ví dụ đi kèm:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>::before và ::after</title>
    <style>
      .box {
        width: 200px;
        height: 100px;
        background-color: lightblue;
        position: relative;
      }

      .box::before {
        content: "Before content";
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: lightgreen;
        padding: 5px;
      }

      .box::after {
        content: "After content";
        position: absolute;
        bottom: 10px;
        right: 10px;
        background-color: lightcoral;
        padding: 5px;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

Trong ví dụ này:

- `.box::before` được sử dụng để chèn nội dung "Before content" vào trước phần tử `.box`.
- `.box::after` được sử dụng để chèn nội dung "After content" vào sau phần tử `.box`.

Cả hai pseudo-elements này sẽ hiển thị với màu nền và vị trí được xác định, và chúng không làm thay đổi cấu trúc HTML. Điều này giúp bạn thêm nội dung hoặc trang trí mà không làm thay đổi HTML và tạo ra hiệu ứng trực quan đáng chú ý.

---

---
