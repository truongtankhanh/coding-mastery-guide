Tất nay! Xử lý sự kiện là cách JavaScript phản ứng khi người dùng tương tác với trang web, chẳng hạn như nhấn nút, di chuột, hoặc thực hiện các hành động tương tự.

### Xử lý sự kiện trong JavaScript:

#### Định nghĩa hàm xử lý sự kiện:

Có thể gắn các hàm xử lý sự kiện vào các phần tử HTML bằng cách sử dụng các phương thức như `addEventListener()`.

Ví dụ:

```html
<button id="myButton">Click me</button>

<script>
  // Lấy phần tử button
  let button = document.getElementById("myButton");

  // Gắn hàm xử lý sự kiện khi click vào button
  button.addEventListener("click", function () {
    alert("Bạn vừa nhấn vào nút!");
  });
</script>
```

#### Loại sự kiện phổ biến:

- `click`: Khi người dùng nhấn chuột.
- `mouseover` và `mouseout`: Khi con trỏ chuột di chuyển vào hoặc ra khỏi một phần tử.
- `keydown` và `keyup`: Khi một phím trên bàn phím được nhấn xuống hoặc nhả ra.

### Ví dụ tổng hợp:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Event Handling Example</title>
    <style>
      #myButton {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <button id="myButton">Click me</button>

    <script>
      let button = document.getElementById("myButton");

      // Xử lý sự kiện khi click vào nút
      button.addEventListener("click", function () {
        button.textContent = "Đã được click!";
        button.style.backgroundColor = "green";
      });

      // Xử lý sự kiện khi di chuột vào nút
      button.addEventListener("mouseover", function () {
        button.style.color = "white";
        button.style.backgroundColor = "blue";
      });

      // Xử lý sự kiện khi di chuột ra khỏi nút
      button.addEventListener("mouseout", function () {
        button.style.color = "black";
        button.style.backgroundColor = "";
      });
    </script>
  </body>
</html>
```

Đoạn mã trên tạo một nút trên trang web và gắn các sự kiện `click`, `mouseover`, và `mouseout` vào nút đó. Khi người dùng tương tác với nút, các hành động tương ứng sẽ được thực hiện như thay đổi màu sắc hoặc nội dung của nút.
