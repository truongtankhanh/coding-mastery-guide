## Sử dụng Flexbox và CSS Grid để tạo layout phức tạp và linh hoạt.

### Khái Niệm:

Flexbox và CSS Grid là hai kỹ thuật trong CSS được sử dụng để tạo layout phức tạp và linh hoạt cho trang web.

1. **Flexbox:** Flexbox là một mô hình layout linh hoạt mà cho phép bạn tự động căn chỉnh và sắp xếp các phần tử trong một container theo các hướng và tỷ lệ khác nhau.

2. **CSS Grid:** CSS Grid là một hệ thống grid layout hai chiều mạnh mẽ, cho phép bạn xây dựng layout của trang web bằng cách xác định các hàng và cột, và định vị các phần tử trong grid.

### Ngữ Cảnh:

Khi phát triển trang web, bạn có thể cần tạo ra các layout phức tạp và linh hoạt để hiển thị nội dung theo cách tốt nhất trên mọi thiết bị và kích thước màn hình. Sử dụng Flexbox và CSS Grid giúp bạn dễ dàng tạo ra những layout đa dạng và phức tạp mà không cần phải dựa vào các kỹ thuật cũ như floating và positioning.

### Cách Sử Dụng:

1. **Flexbox:**

   - Sử dụng thuộc tính `display: flex;` trên container và các thuộc tính khác như `flex-direction`, `justify-content`, `align-items`, và `flex-wrap` để điều chỉnh layout.
   - Ví dụ:
     ```css
     .container {
       display: flex;
       flex-direction: row; /* Hoặc column */
       justify-content: space-between;
       align-items: center;
       flex-wrap: wrap;
     }
     ```

2. **CSS Grid:**
   - Sử dụng thuộc tính `display: grid;` trên container và các thuộc tính như `grid-template-rows`, `grid-template-columns`, `grid-gap`, và `grid-template-areas` để xác định layout.
   - Ví dụ:
     ```css
     .container {
       display: grid;
       grid-template-columns: 1fr 2fr 1fr;
       grid-template-rows: auto;
       grid-gap: 10px;
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
    <title>Flexbox và CSS Grid Layout</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="flex-container">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
    </div>

    <div class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
    </div>
  </body>
</html>
```

#### CSS (styles.css):

```css
/* Flexbox Layout */
.flex-container {
  display: flex;
  justify-content: space-around;
}

.flex-item {
  width: 100px;
  height: 100px;
  background-color: #007bff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* CSS Grid Layout */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}

.grid-item {
  width: 100px;
  height: 100px;
  background-color: #6c757d;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### Kết Luận:

Sử dụng Flexbox và CSS Grid là cách hiệu quả để tạo ra các layout phức tạp và linh hoạt trong CSS. Bằng cách sử dụng các thuộc tính và tính năng của chúng, bạn có thể dễ dàng điều chỉnh và tùy chỉnh layout của trang web của mình để phản ánh đúng ý đồ thiết kế và cung cấp trải nghiệm người dùng tốt nhất có thể trên mọi thiết bị và kích thước màn hình.

---

---

## Layouts với multiple columns và regions.

### Khái Niệm:

Trong CSS, layouts với multiple columns và regions là cách tổ chức nội dung của trang web thành nhiều cột và khu vực khác nhau. Điều này cho phép bạn cải thiện tổ chức và trải nghiệm người dùng của trang web bằng cách phân chia nội dung thành các phần đồng nhất hoặc không đồng nhất, tùy thuộc vào nhu cầu thiết kế cụ thể.

### Ngữ Cảnh:

Khi phát triển một trang web hoặc ứng dụng web, việc sử dụng layouts với multiple columns và regions giúp bạn tạo ra giao diện linh hoạt và hấp dẫn. Điều này có thể hữu ích cho việc hiển thị các bài viết, danh sách sản phẩm, hoặc các loại nội dung khác một cách có tổ chức.

### Cách Sử Dụng:

1. **Multiple Columns:**

   - Sử dụng thuộc tính `column-count` để xác định số lượng cột và `column-gap` để xác định khoảng cách giữa các cột.
   - Ví dụ:
     ```css
     .container {
       column-count: 3; /* Chia layout thành 3 cột */
       column-gap: 20px; /* Khoảng cách giữa các cột */
     }
     ```

2. **Regions:**
   - Sử dụng CSS Grid hoặc Flexbox để tạo ra các khu vực và xác định vị trí của chúng.
   - Ví dụ sử dụng CSS Grid:
     ```css
     .container {
       display: grid;
       grid-template-columns: repeat(3, 1fr); /* 3 cột */
       grid-template-rows: auto; /* Chiều cao tự động */
       grid-gap: 20px; /* Khoảng cách giữa các khu vực */
     }
     .region-1 {
       grid-column: 1 / 2; /* Bắt đầu từ cột 1 và kết thúc ở cột 2 */
     }
     .region-2 {
       grid-column: 2 / 4; /* Bắt đầu từ cột 2 và kết thúc ở cột 4 */
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
    <title>Layouts với Multiple Columns và Regions</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <div class="column">Column 1</div>
      <div class="column">Column 2</div>
      <div class="column">Column 3</div>
    </div>
    <div class="container-grid">
      <div class="region region-1">Region 1</div>
      <div class="region region-2">Region 2</div>
      <div class="region region-3">Region 3</div>
    </div>
  </body>
</html>
```

#### CSS (styles.css):

```css
/* Layouts với Multiple Columns */
.container {
  column-count: 3;
  column-gap: 20px;
}

.column {
  background-color: #007bff;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
}

/* Layouts với Regions sử dụng CSS Grid */
.container-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
}

.region {
  background-color: #6c757d;
  color: white;
  padding: 20px;
  text-align: center;
}

.region-1 {
  grid-column: 1 / 2;
}

.region-2 {
  grid-column: 2 / 4;
}
```

### Kết Luận:

Sử dụng layouts với multiple columns và regions trong CSS là một cách hiệu quả để tổ chức nội dung của trang web thành các phần đồng nhất hoặc không đồng nhất, tùy thuộc vào nhu cầu thiết kế cụ thể. Bằng cách sử dụng các thuộc tính và tính năng của CSS Grid, Flexbox, hoặc CSS Columns, bạn có thể tạo ra giao diện linh hoạt và hấp dẫn cho trang web hoặc ứng dụng web của mình.

---

---
