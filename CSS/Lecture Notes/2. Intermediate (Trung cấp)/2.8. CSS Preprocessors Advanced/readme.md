## Sử dụng mixins và functions trong SASS hoặc LESS để tái sử dụng mã.

**Khái niệm:**
Trong SASS hoặc LESS, mixins và functions là các công cụ mạnh mẽ giúp tái sử dụng mã CSS và tạo ra mã CSS hiệu quả hơn.

- **Mixins:** Mixins cho phép bạn tái sử dụng một tập hợp các khai báo CSS trong nhiều nơi khác nhau mà không cần phải sao chép và dán lại.
- **Functions:** Functions là các hàm tính toán giúp bạn tạo ra giá trị CSS dựa trên các tham số đầu vào, giúp giảm thiểu mã lặp lại và tăng tính linh hoạt của mã CSS.

**Ngữ cảnh:**
Trong quá trình phát triển web, việc tái sử dụng mã CSS là một phần quan trọng giúp giảm thiểu lặp lại và làm cho mã CSS dễ bảo trì hơn. Mixins và functions trong SASS hoặc LESS là công cụ hữu ích để đạt được mục tiêu này.

**Cách sử dụng:**

1. **Sử dụng Mixins:**
   Mixins được định nghĩa bằng cách sử dụng từ khóa `@mixin` trong SASS hoặc `.` trong LESS.

   Ví dụ (SASS):

   ```scss
   @mixin button($background-color, $color) {
     background-color: $background-color;
     color: $color;
     padding: 10px 20px;
     border-radius: 5px;
   }

   .primary-button {
     @include button(#007bff, #fff);
   }

   .secondary-button {
     @include button(#ccc, #000);
   }
   ```

   Ví dụ (LESS):

   ```less
   .button(@background-color, @color) {
     background-color: @background-color;
     color: @color;
     padding: 10px 20px;
     border-radius: 5px;
   }

   .primary-button {
     .button(#007bff, #fff);
   }

   .secondary-button {
     .button(#ccc, #000);
   }
   ```

2. **Sử dụng Functions:**
   Functions được định nghĩa bằng cách sử dụng từ khóa `@function` trong SASS hoặc `.` trong LESS.

   Ví dụ (SASS):

   ```scss
   @function calculate-width($width) {
     @return $width * 2;
   }

   .element {
     width: calculate-width(100px);
   }
   ```

   Ví dụ (LESS):

   ```less
   .calculate-width(@width) {
     @return @width * 2;
   }

   .element {
     width: .calculate-width(100px);
   }
   ```

Trong cả hai ví dụ trên, chúng ta sử dụng mixins và functions để tái sử dụng mã CSS và giảm thiểu mã lặp lại. Điều này giúp cho mã CSS trở nên ngắn gọn, dễ bảo trì và linh hoạt hơn.

---

---

## Nested CSS và lồng nhau.

**Khái niệm:**
Nested CSS (CSS lồng nhau) là một kỹ thuật trong CSS cho phép bạn viết CSS dựa trên cấu trúc lồng nhau của các phần tử HTML. Khi sử dụng nested CSS, bạn có thể áp dụng CSS cho các phần tử con bên trong phần tử cha một cách dễ đọc và tổ chức.

**Ngữ cảnh:**
Nested CSS thường được sử dụng trong các preprocessors CSS như SASS hoặc LESS, nhưng cũng có thể được áp dụng trong CSS thông thường. Việc sử dụng nested CSS giúp cho việc viết và bảo trì CSS trở nên dễ dàng hơn, đặc biệt là trong các dự án lớn hoặc có cấu trúc phức tạp.

**Cách sử dụng:**
Trong nested CSS, bạn có thể viết CSS dựa trên cấu trúc lồng nhau của các phần tử HTML. Dưới đây là một ví dụ về cách sử dụng nested CSS trong SASS:

```scss
// Sử dụng SASS

.navbar {
  background-color: #333;
  padding: 10px;

  ul {
    list-style: none;
    padding: 0;

    li {
      display: inline-block;
      margin-right: 10px;

      a {
        text-decoration: none;
        color: #fff;
      }

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
```

Trong ví dụ trên, `.navbar` là phần tử cha, và các thuộc tính CSS của nó được định nghĩa bên trong nó. Các phần tử con như `ul`, `li`, và `a` cũng được định nghĩa và áp dụng CSS bên trong phần tử cha tương ứng.

Ví dụ tương tự có thể áp dụng trong CSS thông thường, nhưng bạn sẽ phải viết các selector riêng biệt cho từng phần tử con.

```css
/* Sử dụng CSS thông thường */

.navbar {
  background-color: #333;
  padding: 10px;
}

.navbar ul {
  list-style: none;
  padding: 0;
}

.navbar ul li {
  display: inline-block;
  margin-right: 10px;
}

.navbar ul li a {
  text-decoration: none;
  color: #fff;
}

.navbar ul li:last-child {
  margin-right: 0;
}

.navbar ul li:hover {
  text-decoration: underline;
}
```

Trong cả hai ví dụ, nested CSS giúp tổ chức mã CSS một cách dễ đọc và hiểu, đồng thời giảm thiểu lặp lại và làm cho mã CSS trở nên linh hoạt hơn.

---

---
