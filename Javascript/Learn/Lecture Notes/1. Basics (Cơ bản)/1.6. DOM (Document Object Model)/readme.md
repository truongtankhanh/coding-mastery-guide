Tất nay! DOM (Document Object Model) là cách JavaScript tương tác và thay đổi nội dung, cấu trúc và kiểu dáng của trang web.

### Khái niệm về DOM:

#### DOM là gì?

DOM đại diện cho cấu trúc cây của trang web, trong đó mỗi phần tử HTML được biểu diễn như một đối tượng, và các đối tượng này được kết nối với nhau tạo thành một cấu trúc.

#### Tương tác với DOM:

JavaScript có thể sử dụng DOM để thay đổi nội dung HTML, thêm hoặc xóa các phần tử, thay đổi kiểu dáng và thuộc tính của các phần tử HTML.

### Ví dụ về tương tác với DOM:

#### Thay đổi nội dung của một phần tử HTML:

```javascript
// Lấy phần tử có id là "myElement"
let element = document.getElementById("myElement");

// Thay đổi nội dung của phần tử
element.innerHTML = "Nội dung mới";
```

#### Thêm hoặc xóa một phần tử HTML:

```javascript
// Tạo một phần tử mới
let newElement = document.createElement("div");
newElement.textContent = "Nội dung mới";

// Thêm phần tử vào cuối body của trang web
document.body.appendChild(newElement);

// Xóa phần tử
let elementToRemove = document.getElementById("elementToRemove");
elementToRemove.parentNode.removeChild(elementToRemove);
```

#### Thay đổi kiểu dáng của phần tử:

```javascript
// Lấy phần tử có id là "myElement"
let element = document.getElementById("myElement");

// Thay đổi kiểu dáng của phần tử
element.style.color = "red";
element.style.fontSize = "20px";
```

### Ví dụ tổng hợp:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM Example</title>
    <style>
      .highlight {
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <h1 id="title">Chào mừng bạn đến với trang web của chúng tôi!</h1>
    <p id="paragraph">Nhấp chuột vào tiêu đề để thay đổi kiểu dáng.</p>

    <script>
      // Lấy phần tử tiêu đề và đoạn văn bản
      let title = document.getElementById("title");
      let paragraph = document.getElementById("paragraph");

      // Thay đổi kiểu dáng khi click vào tiêu đề
      title.addEventListener("click", function () {
        title.classList.toggle("highlight");
        paragraph.textContent = "Kiểu dáng đã được thay đổi!";
      });
    </script>
  </body>
</html>
```

Đoạn mã HTML trên định nghĩa một trang web đơn giản với một tiêu đề và một đoạn văn bản. JavaScript được sử dụng để thêm sự kiện click vào tiêu đề, khi click vào tiêu đề, nó thay đổi kiểu dáng của tiêu đề và đoạn văn bản tương ứng.
