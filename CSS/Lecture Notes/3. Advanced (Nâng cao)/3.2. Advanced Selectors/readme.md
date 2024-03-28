## Pseudoclasses và pseudoelements phức tạp.

### Khái Niệm:

Pseudoclasses và pseudoelements là các phần của CSS được sử dụng để chọn các phần tử trong HTML dựa trên trạng thái hoặc cấu trúc của các phần tử đó. Pseudoclasses được sử dụng để áp dụng kiểu cho các phần tử trong các trạng thái nhất định (ví dụ: hover, focus), trong khi pseudoelements được sử dụng để tạo ra các phần tử ảo để thêm nội dung hoặc trang trí vào các phần tử thực tế.

### Ngữ Cảnh:

Trong một số trường hợp, bạn có thể muốn chọn các phần tử dựa trên trạng thái của chúng hoặc muốn thêm nội dung hoặc trang trí cho các phần tử mà không cần phải thay đổi cấu trúc HTML. Pseudoclasses và pseudoelements cung cấp cách để làm điều này mà không cần phải sửa đổi HTML.

### Cách Sử Dụng:

1. **Pseudoclasses:**

   - Sử dụng pseudoclasses để chọn các phần tử dựa trên trạng thái của chúng như hover, focus, active, visited, v.v.
   - Ví dụ:

     ```css
     /* Chọn phần tử khi được hover */
     a:hover {
       color: red;
     }

     /* Chọn phần tử khi được focus */
     input:focus {
       border: 2px solid blue;
     }
     ```

2. **Pseudoelements:**

   - Sử dụng pseudoelements để tạo ra các phần tử ảo và thêm nội dung hoặc trang trí cho các phần tử thực tế.
   - Ví dụ:

     ```css
     /* Thêm nội dung trước phần tử */
     p::before {
       content: "Đây là nội dung được thêm vào trước phần tử p";
     }

     /* Thêm trang trí sau phần tử */
     div::after {
       content: "";
       display: block;
       width: 100px;
       height: 100px;
       background-color: blue;
     }
     ```

3. **Kết Hợp Pseudoclasses và Pseudoelements:**

   - Bạn có thể kết hợp cả hai để tạo ra các hiệu ứng phức tạp hơn.
   - Ví dụ:

     ```css
     /* Thêm nội dung vào cuối mỗi phần tử li trong một danh sách */
     ul li::after {
       content: "-";
       margin-left: 5px;
     }

     /* Chọn phần tử li đầu tiên của một danh sách */
     ul li:first-child {
       color: red;
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
    <title>Pseudoclasses và Pseudoelements</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <a href="#">Hover over me</a>
    <input type="text" placeholder="Click here" />
    <p>This is a paragraph</p>
    <div>This is a div</div>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </body>
</html>
```

#### CSS (styles.css):

```css
/* Chọn phần tử khi được hover */
a:hover {
  color: red;
}

/* Chọn phần tử khi được focus */
input:focus {
  border: 2px solid blue;
}

/* Thêm nội dung trước mỗi phần tử p */
p::before {
  content: "Before ";
}

/* Thêm trang trí sau mỗi phần tử div */
div::after {
  content: "";
  display: block;
  width: 100px;
  height: 100px;
  background-color: blue;
}

/* Thêm nội dung vào cuối mỗi phần tử li trong một danh sách */
ul li::after {
  content: "-";
  margin-left: 5px;
}

/* Chọn phần tử li đầu tiên của một danh sách */
ul li:first-child {
  color: red;
}
```

### Kết Luận:

Pseudoclasses và pseudoelements là một phần quan trọng của CSS, cho phép bạn chọn các phần tử dựa trên trạng thái hoặc tạo ra các phần tử ảo để thêm nội dung hoặc trang trí. Việc hiểu và sử dụng chúng có thể giúp bạn tạo ra các hiệu ứng phức tạp và linh hoạt trong thiết kế web của bạn.

---

---

## Selectors combinators và selectors specificity.

### Khái Niệm:

Selectors combinators và selectors specificity là các khái niệm trong CSS để chọn và ứng dụng kiểu cho các phần tử HTML dựa trên cấu trúc và vị trí của chúng trong cây DOM. Selectors combinators cho phép bạn kết hợp các selectors lại với nhau, trong khi selectors specificity xác định xem các styles nào sẽ được áp dụng khi có các selectors cùng áp dụng lên một phần tử.

### Ngữ Cảnh:

Khi viết CSS cho một trang web, bạn cần phải biết cách chọn các phần tử một cách chính xác để áp dụng kiểu cho chúng. Selectors combinators giúp bạn kết hợp các selectors lại với nhau để chọn các phần tử cụ thể trong cây DOM. Trong khi đó, selectors specificity giúp xác định thứ tự ưu tiên của các selectors khi có các styles trùng lặp.

### Cách Sử Dụng:

1. **Selectors Combinators:**

   - **Descendant combinator (space)**: Chọn các phần tử con của một phần tử khác.

     ```css
     /* Chọn tất cả các phần tử <p> nằm trong một phần tử <div> */
     div p {
       color: blue;
     }
     ```

   - **Child combinator (>)**: Chọn các phần tử con trực tiếp của một phần tử khác.

     ```css
     /* Chọn tất cả các phần tử <p> là con trực tiếp của một phần tử <div> */
     div > p {
       color: red;
     }
     ```

   - **Adjacent sibling combinator (+)**: Chọn phần tử kế tiếp cùng cấp với một phần tử khác.

     ```css
     /* Chọn phần tử <p> ngay sau một phần tử <div> */
     div + p {
       font-weight: bold;
     }
     ```

   - **General sibling combinator (~)**: Chọn tất cả các phần tử cùng cấp với một phần tử khác.
     ```css
     /* Chọn tất cả các phần tử <p> cùng cấp với một phần tử <div> */
     div ~ p {
       font-style: italic;
     }
     ```

2. **Selectors Specificity:**

   - CSS specificity được xác định bằng cách đếm số lượng id selectors, class selectors và element selectors trong một rule.
   - Ví dụ:

     ```css
     /* Selectors Specificity */
     /* Có id selector */
     #header {
       color: red;
     }

     /* Có class selector và element selector */
     .container p {
       color: blue;
     }

     /* Có 3 element selectors */
     div p a {
       color: green;
     }
     ```

   - Khi có các selectors trùng lặp, browser sẽ ưu tiên áp dụng styles của selector có specificity cao hơn.

### Ví Dụ:

#### HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Selectors Combinators và Selectors Specificity</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div id="container">
      <p>This is a paragraph inside a div.</p>
      <span>This is a span inside a div.</span>
      <p>This is another paragraph inside a div.</p>
    </div>
  </body>
</html>
```

#### CSS (styles.css):

```css
/* Descendant combinator */
#container p {
  color: blue;
}

/* Child combinator */
#container > p {
  font-weight: bold;
}

/* Adjacent sibling combinator */
p + span {
  font-style: italic;
}

/* General sibling combinator */
p ~ p {
  text-decoration: underline;
}

/* Selectors Specificity */
/* Có id selector */
#container {
  background-color: yellow;
}

/* Có class selector và element selector */
.container p {
  color: red;
}

/* Có 3 element selectors */
div p a {
  color: green;
}
```

### Kết Luận:

Selectors combinators và selectors specificity là hai khái niệm quan trọng trong CSS giúp bạn chọn và áp dụng kiểu cho các phần tử HTML một cách chính xác. Bằng cách hiểu và sử dụng chúng, bạn có thể tạo ra mã CSS hiệu quả và dễ bảo trì cho trang web của mình.

---

---
