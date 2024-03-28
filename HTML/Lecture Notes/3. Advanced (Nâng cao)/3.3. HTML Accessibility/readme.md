## Sử dụng các thuộc tính như `aria-*` để cải thiện khả năng truy cập cho người dùng khuyết tật.

### Khái Niệm:

Trong HTML, thuộc tính `aria-*` được sử dụng để cải thiện khả năng truy cập cho người dùng khuyết tật, bằng cách cung cấp thông tin bổ sung và chỉ dẫn cho các công cụ hỗ trợ như trình đọc màn hình. "ARIA" là viết tắt của "Accessible Rich Internet Applications" (Ứng dụng Internet giàu tính truy cập), và các thuộc tính ARIA được sử dụng để mô tả và làm cho các phần tử HTML trở nên truy cập dễ dàng hơn cho người dùng có khuyết tật.

### Ngữ Cảnh:

Khi phát triển các trang web hoặc ứng dụng web, việc đảm bảo khả năng truy cập cho tất cả mọi người là rất quan trọng. Người dùng có khuyết tật có thể sử dụng các công cụ hỗ trợ như trình đọc màn hình để truy cập nội dung trên trang web. Sử dụng các thuộc tính `aria-*` giúp làm cho trang web trở nên dễ đọc và dễ sử dụng hơn cho những người dùng này.

### Cách Sử Dụng và Ví Dụ:

Dưới đây là một số ví dụ về cách sử dụng các thuộc tính `aria-*`:

1. **Thuộc tính `aria-label`**:

```html
<button aria-label="Close">X</button>
```

2. **Thuộc tính `aria-labelledby`**:

```html
<h2 id="modalTitle">Welcome Message</h2>
<div role="dialog" aria-labelledby="modalTitle">
  <!-- Nội dung của modal -->
</div>
```

3. **Thuộc tính `aria-describedby`**:

```html
<input type="password" id="password" aria-describedby="passwordInstructions" />
<div id="passwordInstructions" hidden>
  Password must be at least 8 characters long.
</div>
```

4. **Thuộc tính `aria-hidden`**:

```html
<div aria-hidden="true">
  <!-- Phần tử này sẽ không được trình đọc màn hình đọc ra -->
</div>
```

5. **Thuộc tính `aria-expanded`**:

```html
<button aria-expanded="true" aria-controls="submenu">Menu</button>
<div id="submenu" aria-hidden="false">
  <!-- Nội dung của submenu -->
</div>
```

6. **Thuộc tính `aria-live`**:

```html
<div role="status" aria-live="polite">
  <!-- Thông báo này sẽ được trình đọc màn hình đọc ra khi có sự thay đổi -->
</div>
```

7. **Thuộc tính `aria-haspopup`**:

```html
<button aria-haspopup="true" aria-controls="menu">Menu</button>
<ul id="menu">
  <!-- Các mục menu -->
</ul>
```

### Ví dụ Toàn Bộ:

```html
<button aria-label="Close">X</button>

<h2 id="modalTitle">Welcome Message</h2>
<div role="dialog" aria-labelledby="modalTitle">
  <!-- Nội dung của modal -->
</div>

<input type="password" id="password" aria-describedby="passwordInstructions" />
<div id="passwordInstructions" hidden>
  Password must be at least 8 characters long.
</div>

<div aria-hidden="true">
  <!-- Phần tử này sẽ không được trình đọc màn hình đọc ra -->
</div>

<button aria-expanded="true" aria-controls="submenu">Menu</button>
<div id="submenu" aria-hidden="false">
  <!-- Nội dung của submenu -->
</div>

<div role="status" aria-live="polite">
  <!-- Thông báo này sẽ được trình đọc màn hình đọc ra khi có sự thay đổi -->
</div>

<button aria-haspopup="true" aria-controls="menu">Menu</button>
<ul id="menu">
  <!-- Các mục menu -->
</ul>
```

Trong ví dụ trên, mỗi thuộc tính `aria-*` đều có một mục đích cụ thể để cải thiện khả năng truy cập cho người dùng khuyết tật. Sử dụng chúng giúp tạo ra một trải nghiệm truy cập tốt hơn cho mọi người sử dụng trang web.

---

---

## Sử dụng các kỹ thuật như "focus management" và "keyboard navigation" để tạo ra trải nghiệm truy cập tốt hơn cho tất cả mọi người.

### Khái Niệm:

"Focus management" và "keyboard navigation" là hai kỹ thuật quan trọng trong việc tạo ra trải nghiệm truy cập tốt hơn trên các trang web và ứng dụng web.

- **Focus management**: Là quá trình quản lý việc focus của người dùng trên các phần tử trên trang web. Focus được sử dụng để xác định phần tử nào đang được tương tác và điều hướng bằng bàn phím.
- **Keyboard navigation**: Là khả năng điều hướng trên trang web hoặc ứng dụng web bằng bàn phím mà không cần sử dụng chuột.

### Ngữ Cảnh:

Khi phát triển trang web hoặc ứng dụng web, việc đảm bảo rằng người dùng có thể dễ dàng tương tác với các phần tử trên trang bằng cả chuột và bàn phím là rất quan trọng. Điều này đặc biệt quan trọng đối với những người dùng có khuyết tật hoặc người dùng không sử dụng chuột.

### Cách Sử Dụng và Ví Dụ:

Dưới đây là một số cách sử dụng "focus management" và "keyboard navigation":

1. **Sử Dụng `tabindex` để Quản Lý Focus**:

```html
<input type="text" tabindex="1" />
<input type="text" tabindex="2" />
<button tabindex="3">Submit</button>
```

2. **Xử Lý Sự Kiện Focus Trong JavaScript**:

```html
<input type="text" id="myInput" />
<script>
  document.getElementById("myInput").addEventListener("focus", function () {
    this.style.backgroundColor = "yellow";
  });
</script>
```

3. **Xử Lý Sự Kiện Keyboard Trong JavaScript**:

```html
<input type="text" id="myInput" />
<script>
  document
    .getElementById("myInput")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        alert("Enter key pressed");
      }
    });
</script>
```

4. **Sử Dụng `aria-*` để Cung Cấp Hướng Dẫn và Thông Tin Cho Người Dùng**:

```html
<div role="button" tabindex="0" aria-label="Click me">Click me</div>
```

5. **Tạo Navigation Menu Sử Dụng Bàn Phím**:

```html
<ul>
  <li><a href="#" accesskey="1">Home</a></li>
  <li><a href="#" accesskey="2">About</a></li>
  <li><a href="#" accesskey="3">Services</a></li>
</ul>
```

### Ví Dụ Toàn Bộ:

```html
<!-- Sử dụng tabindex để quản lý focus -->
<input type="text" tabindex="1" />
<input type="text" tabindex="2" />
<button tabindex="3">Submit</button>

<!-- Xử lý sự kiện focus trong JavaScript -->
<input type="text" id="myInput" />
<script>
  document.getElementById("myInput").addEventListener("focus", function () {
    this.style.backgroundColor = "yellow";
  });
</script>

<!-- Xử lý sự kiện keyboard trong JavaScript -->
<input type="text" id="myInput" />
<script>
  document
    .getElementById("myInput")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        alert("Enter key pressed");
      }
    });
</script>

<!-- Sử dụng aria-* để cung cấp hướng dẫn và thông tin cho người dùng -->
<div role="button" tabindex="0" aria-label="Click me">Click me</div>

<!-- Tạo navigation menu sử dụng bàn phím -->
<ul>
  <li><a href="#" accesskey="1">Home</a></li>
  <li><a href="#" accesskey="2">About</a></li>
  <li><a href="#" accesskey="3">Services</a></li>
</ul>
```

Trong ví dụ trên, mỗi kỹ thuật "focus management" và "keyboard navigation" đều có một mục đích cụ thể để cải thiện khả năng truy cập cho người dùng. Sử dụng chúng giúp tạo ra một trải nghiệm truy cập tốt hơn cho mọi người sử dụng trang web hoặc ứng dụng web.

---

---
