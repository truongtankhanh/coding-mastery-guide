Trong SCSS, "Import" là một tính năng cho phép bạn nhúng các tệp SCSS khác vào một tệp SCSS hiện tại. Điều này giúp chia nhỏ mã của bạn thành các phần nhỏ hơn, dễ quản lý hơn và tái sử dụng hơn. Dưới đây là một phân tích chi tiết:

### Khái niệm:

Import trong SCSS cho phép bạn chia nhỏ mã của mình thành các phần nhỏ hơn và nhúng chúng vào một tệp SCSS chính. Điều này giúp tổ chức mã của bạn một cách cấu trúc và rõ ràng hơn, đồng thời giúp tái sử dụng mã trong nhiều dự án.

### Ngữ cảnh:

Import thường được sử dụng khi bạn muốn chia nhỏ mã của mình thành các phần nhỏ hơn, chẳng hạn như các tệp SCSS riêng lẻ cho biến, mixin, hoặc phần định dạng. Bằng cách này, bạn có thể tái sử dụng các phần của mã của mình một cách dễ dàng và duy trì tính chất tổ chức của dự án.

### Cách sử dụng:

Để sử dụng Import trong SCSS, bạn sử dụng từ khóa `@import` và chỉ định đường dẫn của tệp SCSS mà bạn muốn nhúng vào.

Ví dụ:
Suppose we have three SCSS files: `_variables.scss`, `_mixins.scss`, and `styles.scss`.

**\_variables.scss**

```scss
$primary-color: #3498db;
$secondary-color: #2ecc71;
```

**\_mixins.scss**

```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

**styles.scss**

```scss
@import "_variables";
@import "_mixins";

body {
  background-color: $primary-color;
}

.container {
  @include flex-center;
}
```

Trong ví dụ trên, chúng ta sử dụng `@import` để nhúng các tệp `_variables.scss` và `_mixins.scss` vào tệp `styles.scss`. Các biến và mixin từ các tệp nhúng này sau đó có thể được sử dụng trong tệp `styles.scss`. Khi biên dịch, các tệp được nhúng sẽ được hợp nhất vào một tệp CSS duy nhất.
