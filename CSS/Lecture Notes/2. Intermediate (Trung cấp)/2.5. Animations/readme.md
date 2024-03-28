## Cách sử dụng CSS animations để tạo các hiệu ứng chuyển động phức tạp.

**Khái niệm:**
Trong CSS, animations là một cách để tạo ra các hiệu ứng chuyển động phức tạp trên các phần tử của trang web. CSS animations cho phép bạn điều khiển các thuộc tính CSS của một phần tử để tạo ra các hiệu ứng như di chuyển, thay đổi kích thước, xoay, và thậm chí là thay đổi màu sắc theo thời gian.

**Ngữ cảnh:**
Animations là một công cụ mạnh mẽ để tạo ra các hiệu ứng động, làm cho trang web của bạn trở nên sinh động và thu hút hơn. Chúng thường được sử dụng để làm cho các yếu tố trên trang như menu, sliders, hoặc thông báo có hiệu ứng mượt mà và nổi bật hơn.

**Cách sử dụng:**
Để sử dụng animations trong CSS, bạn cần thực hiện các bước sau:

1. **Định nghĩa keyframes:**
   Keyframes là các khối định nghĩa các trạng thái cụ thể của phần tử trong quá trình hoạt động của animation. Keyframes được đặt tên và chia thành các phần trăm của thời gian animation.

   ```css
   @keyframes example {
     0% {
       opacity: 0;
       transform: translateY(-50px);
     }
     100% {
       opacity: 1;
       transform: translateY(0);
     }
   }
   ```

2. **Áp dụng animation cho phần tử:**
   Bạn cần sử dụng thuộc tính `animation` để áp dụng animation cho một phần tử cụ thể. Thuộc tính này gồm nhiều giá trị như tên của keyframes, thời gian hoàn thành, kiểu hình thức, v.v.

   ```css
   .element {
     animation: example 1s ease-in-out;
   }
   ```

**Ví dụ về cách sử dụng CSS animations:**

HTML:

```html
<div class="box"></div>
```

CSS:

```css
.box {
  width: 100px;
  height: 100px;
  background-color: #007bff;
  animation: example 2s ease-in-out infinite;
}

@keyframes example {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
```

Trong ví dụ này, chúng ta đã định nghĩa một animation có tên là `example` sử dụng keyframes. Animation này sẽ thay đổi kích thước của `.box` từ kích thước ban đầu đến kích thước lớn hơn 20% vào giữa animation, sau đó quay lại kích thước ban đầu. Animation sẽ diễn ra trong 2 giây và lặp vô hạn.

---

---

## Sử dụng keyframes để điều khiển quá trình animation.

**Khái niệm:**
Trong CSS, keyframes là các khối định nghĩa các trạng thái cụ thể của phần tử trong quá trình hoạt động của animation. Bằng cách sử dụng keyframes, bạn có thể xác định các bước cụ thể trong quá trình thay đổi thuộc tính của phần tử trong animation.

**Ngữ cảnh:**
Keyframes cung cấp khả năng kiểm soát linh hoạt và chi tiết trong việc tạo ra các hiệu ứng động. Bằng cách xác định các trạng thái cụ thể tại các thời điểm khác nhau trong quá trình animation, bạn có thể tạo ra các hiệu ứng phong phú và đa dạng.

**Cách sử dụng:**
Để sử dụng keyframes trong CSS, bạn cần thực hiện các bước sau:

1. **Định nghĩa keyframes:**
   Sử dụng từ khóa `@keyframes` để bắt đầu định nghĩa keyframes, sau đó đặt tên cho keyframes và xác định các trạng thái của phần tử tại các điểm khác nhau trong quá trình animation bằng cách sử dụng phần trăm thời gian.

   ```css
   @keyframes example {
     0% {
       opacity: 0;
     }
     50% {
       opacity: 1;
       transform: scale(1.2);
     }
     100% {
       opacity: 0;
     }
   }
   ```

2. **Áp dụng animation cho phần tử:**
   Sử dụng thuộc tính `animation` để áp dụng animation cho một phần tử cụ thể. Chỉ định tên của keyframes đã định nghĩa, thời gian hoàn thành, kiểu hình thức, v.v.

   ```css
   .element {
     animation: example 2s ease-in-out infinite;
   }
   ```

**Ví dụ về cách sử dụng keyframes trong CSS:**

HTML:

```html
<div class="box"></div>
```

CSS:

```css
.box {
  width: 100px;
  height: 100px;
  background-color: #007bff;
  animation: example 2s ease-in-out infinite;
}

@keyframes example {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
  }
}
```

Trong ví dụ này, chúng ta đã định nghĩa một animation có tên là `example` sử dụng keyframes. Animation này sẽ thay đổi opacity của `.box` từ 0% đến 100% và trở lại 0% trong quá trình animation, đồng thời thay đổi kích thước của `.box` lớn hơn 20% vào giữa animation. Animation này sẽ diễn ra trong 2 giây và lặp vô hạn.

---

---
