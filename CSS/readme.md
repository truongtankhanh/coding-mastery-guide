# Hướng dẫn CSS chi tiết từ cơ bản đến nâng cao

## Giới thiệu về CSS

CSS (Cascading Style Sheets) là một ngôn ngữ định dạng được sử dụng để định dạng và trang trí các trang web. Với CSS, bạn có thể kiểm soát cách các trang web của bạn được hiển thị trên các trình duyệt web khác nhau. Trong bài viết này, chúng ta sẽ đi sâu vào các khái niệm cơ bản và nâng cao của CSS.

## Cú pháp cơ bản

Cú pháp của CSS dựa trên việc chọn các phần tử HTML và áp dụng các thuộc tính định dạng cho chúng. Cấu trúc cơ bản của một quy tắc CSS như sau:

```css
selector {
  property: value;
}
```

- **Selector**: Là phần xác định phần tử HTML mà bạn muốn áp dụng CSS.
- **Property**: Là thuộc tính bạn muốn thiết lập cho phần tử.
- **Value**: Là giá trị của thuộc tính đó.

Ví dụ:

```css
h1 {
  color: blue;
  font-size: 24px;
}
```

Trong ví dụ này, mọi tiêu đề h1 sẽ có màu xanh và kích thước font là 24px.

## Các loại Selector

CSS cung cấp nhiều loại selector cho phép bạn chọn các phần tử HTML theo cách khác nhau. Dưới đây là một số loại selector phổ biến:

- **Selector phần tử**: Chọn phần tử dựa trên tên phần tử, ví dụ: `h1`, `p`, `div`.
- **Selector lớp**: Chọn phần tử dựa trên class, bắt đầu bằng dấu chấm ".", ví dụ: `.container`, `.btn`.
- **Selector ID**: Chọn phần tử dựa trên id, bắt đầu bằng dấu thăng "#", ví dụ: `#header`, `#content`.

Ví dụ:

```css
.container {
  width: 80%;
  margin: 0 auto;
}

#header {
  background-color: #333;
  color: white;
}
```

## Thuộc tính định dạng phổ biến

Có hàng trăm thuộc tính CSS có thể được sử dụng để tùy chỉnh giao diện của trang web. Dưới đây là một số thuộc tính phổ biến:

- **color**: Thiết lập màu chữ.
- **background-color**: Thiết lập màu nền.
- **font-size**: Thiết lập kích thước chữ.
- **font-family**: Thiết lập font chữ.
- **width, height**: Thiết lập chiều rộng và chiều cao của phần tử.
- **margin, padding**: Thiết lập khoảng cách bên ngoài và bên trong của phần tử.

## Kết luận

Trong bài viết này, chúng ta đã đi qua các khái niệm cơ bản của CSS, bao gồm cú pháp, các loại selector, và một số thuộc tính phổ biến. Điều này sẽ giúp bạn bắt đầu sử dụng CSS để tạo ra các trang web tuyệt vời với giao diện đẹp mắt và linh hoạt. Để tìm hiểu thêm, bạn có thể khám phá các tài liệu và ví dụ thực tế trên Internet. Chúc bạn thành công!
