### Thẻ `<canvas>` trong HTML

#### Khái niệm:

Thẻ `<canvas>` trong HTML là một phần tử cho phép bạn vẽ đồ thị, hình ảnh động và các đối tượng trực tiếp trên trang web của bạn bằng cách sử dụng JavaScript. Nó cung cấp một không gian làm việc đa dạng để tạo ra các hiệu ứng hình ảnh động, trò chơi, biểu đồ, và nhiều ứng dụng khác.

#### Ngữ cảnh:

Khi bạn muốn tạo ra các hình ảnh động, biểu đồ, hoặc trò chơi trực tiếp trên trang web của mình mà không cần sử dụng hình ảnh tĩnh, thẻ `<canvas>` là công cụ lý tưởng. Nó cung cấp một không gian làm việc mạnh mẽ để bạn có thể tùy chỉnh và tạo ra các hình ảnh phức tạp và đa dạng.

#### Cách sử dụng và ví dụ:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

Trong đoạn mã trên:

- Thẻ `<canvas>` được sử dụng để tạo ra một không gian làm việc cho việc vẽ hình ảnh động.
- Thuộc tính `id` được sử dụng để xác định một định danh cho thẻ canvas, giúp bạn có thể tìm thấy và thao tác với nó bằng JavaScript.
- Thuộc tính `width` và `height` được sử dụng để xác định kích thước của canvas trong trang.

#### Ví dụ về vẽ một hình vuông trên canvas bằng JavaScript:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000"; // Màu sắc của hình vuông
  ctx.fillRect(10, 10, 50, 50); // Vẽ hình vuông tại vị trí (10, 10) với chiều rộng và chiều cao là 50
</script>
```

Trong đoạn mã JavaScript trên:

- `var canvas = document.getElementById("myCanvas");` lấy tham chiếu đến canvas thông qua id.
- `var ctx = canvas.getContext("2d");` lấy ngữ cảnh vẽ 2D của canvas.
- `ctx.fillStyle = "#FF0000";` thiết lập màu sắc cho hình vẽ (ở đây là màu đỏ).
- `ctx.fillRect(10, 10, 50, 50);` vẽ một hình vuông tại vị trí (10, 10) với chiều rộng và chiều cao là 50.

---

---

### Thẻ `<svg>` trong HTML

#### Khái niệm:

Thẻ `<svg>` trong HTML là một phần tử được sử dụng để tạo đồ họa vector trên trang web. SVG viết tắt của Scalable Vector Graphics, là một định dạng đồ họa dựa trên XML cho phép bạn tạo các hình ảnh có thể co dãn mà không mất chất lượng, phù hợp cho nhiều loại thiết bị và kích thước màn hình.

#### Ngữ cảnh:

Khi bạn muốn tạo đồ họa trên trang web của mình mà không cần phải lo lắng về việc mất chất lượng hoặc vấn đề phản hồi, thẻ `<svg>` là một công cụ mạnh mẽ để làm điều này. Bạn có thể sử dụng nó để vẽ biểu đồ, biểu đồ, biểu đồ luồng công việc, logo, biểu tượng, và nhiều loại hình ảnh vector khác.

#### Cách sử dụng và ví dụ:

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
```

Trong đoạn mã trên:

- Thẻ `<svg>` được sử dụng để bao bọc các yếu tố SVG.
- Thuộc tính `width` và `height` xác định kích thước của khu vực vẽ SVG.
- Trong ví dụ này, chúng ta tạo một hình tròn (`<circle>`) với tâm tại `(50, 50)`, bán kính `40`, viền màu đen (`stroke="black"`) có độ dày `3` pixel và màu nền là màu đỏ (`fill="red"`).

Ví dụ khác:

```html
<svg width="200" height="100">
  <rect width="100" height="50" style="fill:blue;stroke:pink;stroke-width:5;" />
</svg>
```

Trong ví dụ này, chúng ta tạo một hình chữ nhật (`<rect>`) với chiều rộng `100`, chiều cao `50`, màu nền là màu xanh (`fill:blue;`), viền là màu hồng (`stroke:pink;`), và độ dày viền là `5` pixel (`stroke-width:5;`).

#### Tóm tắt:

- Thẻ `<svg>` trong HTML cho phép bạn tạo đồ họa vector trên trang web.
- Bạn có thể sử dụng nó để vẽ các hình ảnh vector như hình tròn, hình chữ nhật, đường thẳng, v.v.
- Sử dụng các thuộc tính như `width`, `height`, và các yếu tố SVG như `<circle>`, `<rect>`, `<line>`, v.v., để tạo và tùy chỉnh hình ảnh theo ý muốn.

---

---
