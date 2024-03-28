## Sử dụng các thuộc tính dữ liệu (data attributes) để lưu trữ dữ liệu tùy chỉnh trong HTML.

### Khái Niệm:

Trong HTML, thuộc tính dữ liệu (data attributes) là các thuộc tính được đặt tên bắt đầu bằng `data-` và được sử dụng để lưu trữ dữ liệu tùy chỉnh cho các phần tử HTML. Các thuộc tính này không ảnh hưởng đến cách trình duyệt hiển thị phần tử, nhưng chúng cung cấp một cách để truy cập dữ liệu trong JavaScript hoặc CSS.

### Ngữ Cảnh:

Khi xây dựng trang web hoặc ứng dụng web, đôi khi chúng ta cần lưu trữ các dữ liệu tùy chỉnh mà không phải là một phần của ngữ cảnh mặc định của một phần tử. Trong trường hợp này, sử dụng các thuộc tính dữ liệu là một cách tiện lợi và linh hoạt để lưu trữ và truy cập dữ liệu từ phía mã nguồn.

### Cách Sử Dụng và Ví Dụ:

Dưới đây là cách sử dụng và một ví dụ về các thuộc tính dữ liệu trong HTML:

#### Sử Dụng Thuộc Tính Dữ Liệu:

```html
<div id="product" data-id="123" data-category="electronics" data-price="499">
  <!-- Nội dung của phần tử -->
</div>
```

Trong ví dụ trên, chúng ta đã thêm ba thuộc tính dữ liệu vào phần tử `<div>` với các giá trị tương ứng là `data-id`, `data-category`, và `data-price`. Các giá trị này là dữ liệu tùy chỉnh mà chúng ta muốn lưu trữ và truy cập từ phía mã nguồn.

#### Truy Cập Dữ Liệu Từ JavaScript:

```javascript
// Lấy phần tử có id là "product"
var productElement = document.getElementById("product");

// Lấy dữ liệu từ thuộc tính dữ liệu và hiển thị ra màn hình
var productId = productElement.getAttribute("data-id");
var productCategory = productElement.getAttribute("data-category");
var productPrice = productElement.getAttribute("data-price");

console.log("Product ID:", productId);
console.log("Product Category:", productCategory);
console.log("Product Price:", productPrice);
```

Trong ví dụ JavaScript trên, chúng ta đã lấy các giá trị của các thuộc tính dữ liệu từ phần tử có id là "product" và hiển thị chúng ra màn hình bằng cách sử dụng phương thức `getAttribute()`. Điều này cho phép chúng ta truy cập và sử dụng dữ liệu tùy chỉnh trong JavaScript.

#### Sử Dụng Dữ Liệu Trong CSS:

```css
/* CSS styles dựa trên dữ liệu từ thuộc tính dữ liệu */
[data-category="electronics"] {
  color: blue;
}

[data-category="clothing"] {
  color: green;
}

[data-category="books"] {
  color: red;
}
```

Trong ví dụ CSS trên, chúng ta đã sử dụng các điều kiện dựa trên giá trị của thuộc tính dữ liệu `data-category` để áp dụng các kiểu CSS khác nhau cho các phần tử với các loại sản phẩm khác nhau. Điều này cho phép chúng ta tạo ra các kiểu CSS linh hoạt dựa trên dữ liệu tùy chỉnh.

---

---
