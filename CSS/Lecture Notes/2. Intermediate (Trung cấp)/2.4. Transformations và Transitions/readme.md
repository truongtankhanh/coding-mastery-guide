## Cách sử dụng transformations để thay đổi hình dạng, kích thước và vị trí của các phần tử.

**Khái niệm:**
Trong CSS, transformations là một tập hợp các kỹ thuật được sử dụng để thay đổi hình dạng, kích thước và vị trí của các phần tử trên trang web mà không làm thay đổi vị trí của phần tử trong flow của tài liệu.

**Ngữ cảnh:**
Transformations là một phần quan trọng của CSS, cho phép bạn tạo ra hiệu ứng động và biến đổi các phần tử một cách linh hoạt. Chúng được sử dụng rộng rãi trong việc tạo ra các hiệu ứng chuyển động, zoom, xoay và biến đổi phần tử trong trang web.

**Cách sử dụng:**
Để sử dụng transformations trong CSS, bạn có thể áp dụng các thuộc tính sau cho các phần tử:

1. `transform`: Xác định các biến đổi được áp dụng cho phần tử.
2. `translate()`: Di chuyển phần tử theo trục x và y.
3. `scale()`: Thay đổi kích thước của phần tử theo hệ số.
4. `rotate()`: Xoay phần tử một góc nhất định.
5. `skew()`: Biến dạng phần tử bằng cách nghiêng nó trên trục x hoặc y.

**Ví dụ về cách sử dụng transformations trong CSS:**

HTML:

```html
<div class="element">This is an example</div>
```

CSS:

```css
.element {
  width: 100px;
  height: 100px;
  background-color: #007bff;
  transform: translate(50px, 50px) rotate(45deg) scale(1.5);
}
```

Trong ví dụ này, chúng ta đã sử dụng transformations để di chuyển (translate), xoay (rotate) và thay đổi kích thước (scale) của phần tử `.element`. Phần tử này sẽ được dịch chuyển đi 50px theo cả trục x và y, sau đó được xoay 45 độ, và cuối cùng thay đổi kích thước lên gấp 1.5 lần so với kích thước ban đầu.

---

---

## Cách sử dụng transitions để tạo hiệu ứng chuyển động mượt mà.

**Khái niệm:**
Trong CSS, transitions là một cách để tạo hiệu ứng chuyển động mượt mà cho các thuộc tính CSS khi giá trị của chúng thay đổi. Transitions cho phép bạn kiểm soát tốc độ và kiểu chuyển động khi các thuộc tính thay đổi.

**Ngữ cảnh:**
Transitions thường được sử dụng để tạo ra các hiệu ứng chuyển động mượt mà khi tương tác với các phần tử trên trang web. Chúng giúp tăng trải nghiệm người dùng và làm cho trang web trở nên sinh động hơn.

**Cách sử dụng:**
Để sử dụng transitions trong CSS, bạn cần xác định các thuộc tính mà bạn muốn tạo hiệu ứng chuyển động khi giá trị của chúng thay đổi. Sau đó, bạn cần định nghĩa thời gian và kiểu chuyển động bằng cách sử dụng thuộc tính `transition`.

**Ví dụ về cách sử dụng transitions trong CSS:**

HTML:

```html
<button class="btn">Hover me</button>
```

CSS:

```css
.btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Áp dụng transition cho thuộc tính background-color trong 0.3 giây với kiểu chuyển động ease */
}

.btn:hover {
  background-color: #0056b3; /* Thay đổi màu nền khi hover */
}
```

Trong ví dụ này, khi bạn di chuột qua nút (`<button>`), màu nền của nút sẽ chuyển đổi một cách mượt mà từ màu gốc (#007bff) sang màu mới (#0056b3) trong 0.3 giây, sử dụng kiểu chuyển động ease. Điều này tạo ra một hiệu ứng chuyển động mượt mà và thu hút sự chú ý của người dùng.

---

---
