## Sử dụng import để nhúng các file SCSS khác vào một file SCSS chính, giúp phân chia mã thành các phần nhỏ và dễ quản lý hơn.

Trong SCSS, bạn có thể sử dụng import để nhúng các file SCSS khác vào một file SCSS chính, giúp phân chia mã thành các phần nhỏ và dễ quản lý hơn.

### Khái niệm:

- **Import trong SCSS**: Import là cách để nhúng nội dung của một file SCSS vào một file SCSS khác. Điều này giúp chia nhỏ mã nguồn thành các module nhỏ hơn, dễ quản lý và tái sử dụng.

### Ngữ cảnh:

- Import trong SCSS thường được sử dụng trong các dự án lớn hoặc có cấu trúc phức tạp, nơi bạn cần chia nhỏ mã nguồn thành các phần nhỏ hơn để dễ quản lý và bảo trì.

### Cách sử dụng:

Đầu tiên, chúng ta cần tạo ra các file SCSS nhỏ chứa các phần mã cụ thể. Ví dụ, chúng ta có thể tạo các file như `_variables.scss`, `_mixins.scss`, `_buttons.scss` và `_layout.scss`. Sau đó, chúng ta sẽ import các file này vào file SCSS chính.

#### Ví dụ:

1. `_variables.scss`:

```scss
// _variables.scss
$primary-color: #3498db;
$secondary-color: #2ecc71;
```

2. `_buttons.scss`:

```scss
// _buttons.scss
.button {
  padding: 10px 20px;
  border: none;
}

.button-primary {
  background-color: $primary-color;
  color: white;
}

.button-secondary {
  background-color: $secondary-color;
  color: white;
}
```

3. `_layout.scss`:

```scss
// _layout.scss
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  background-color: $primary-color;
  color: white;
}
```

4. `main.scss` (file SCSS chính):

```scss
// main.scss
@import "variables";
@import "buttons";
@import "layout";

// Other styles
```

Trong file `main.scss`, chúng ta sử dụng câu lệnh `@import` để nhúng các file SCSS khác vào file này. Khi biên dịch `main.scss`, toàn bộ nội dung của các file SCSS được import sẽ được tổng hợp thành một file CSS duy nhất. Điều này giúp phân chia mã nguồn thành các phần nhỏ hơn, dễ quản lý và bảo trì.

---

---

## Sử dụng partials để chia nhỏ mã SCSS thành các phần nhỏ và tái sử dụng chúng trong các dự án khác nhau.

Trong SCSS, partials là cách để chia nhỏ mã SCSS thành các phần nhỏ và tái sử dụng chúng trong các dự án khác nhau. Partial là một file SCSS có tên bắt đầu bằng dấu gạch dưới (\_), và nó không được biên dịch thành một file CSS độc lập mà thường được import vào các file SCSS chính.

### Khái niệm:

- **Partials trong SCSS**: Partials là các file SCSS chứa một phần nhỏ của mã, thường được sử dụng để chứa các biến, mixins, functions, hoặc các quy tắc CSS nhỏ.

### Ngữ cảnh:

- Sử dụng partials giúp phân chia mã SCSS thành các phần nhỏ hơn, dễ quản lý và bảo trì.
- Partials cũng giúp tái sử dụng mã giữa các dự án khác nhau bằng cách import chúng vào các file SCSS chính.

### Cách sử dụng:

1. Tạo partials: Tạo các file SCSS với tên bắt đầu bằng dấu gạch dưới (\_), ví dụ: `_variables.scss`, `_mixins.scss`, `_buttons.scss`.

2. Viết mã SCSS trong các partials: Viết các biến, mixins, functions hoặc các quy tắc CSS trong các file partials.

3. Import partials vào file SCSS chính: Sử dụng câu lệnh `@import` để nhúng các partials vào file SCSS chính.

#### Ví dụ:

1. `_variables.scss`:

```scss
// _variables.scss
$primary-color: #3498db;
$secondary-color: #2ecc71;
```

2. `_mixins.scss`:

```scss
// _mixins.scss
@mixin button($background-color, $text-color) {
  background-color: $background-color;
  color: $text-color;
  padding: 10px 20px;
  border: none;
}
```

3. `_buttons.scss`:

```scss
// _buttons.scss
@import "mixins";

.button {
  @include button(#3498db, white);
}
```

4. `main.scss` (file SCSS chính):

```scss
// main.scss
@import "variables";
@import "buttons";

// Other styles
```

Trong ví dụ trên, chúng ta sử dụng các partials để chia nhỏ mã SCSS thành các phần nhỏ (biến, mixins, buttons) và tái sử dụng chúng trong file SCSS chính (`main.scss`). Điều này giúp mã nguồn trở nên dễ quản lý và bảo trì hơn, cũng như tái sử dụng được giữa các dự án khác nhau.

---

---
