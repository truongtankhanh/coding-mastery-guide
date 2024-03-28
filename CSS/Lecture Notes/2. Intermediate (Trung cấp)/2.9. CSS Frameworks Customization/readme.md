## Cách tùy chỉnh và ghi đè CSS framework để đáp ứng yêu cầu thiết kế cụ thể.

**Khái niệm:**
Tùy chỉnh và ghi đè CSS framework là quá trình sửa đổi hoặc mở rộng các quy tắc CSS mặc định của một framework CSS nhất định để đáp ứng yêu cầu thiết kế cụ thể của một dự án.

**Ngữ cảnh:**
Trong quá trình phát triển web, việc sử dụng framework CSS như Bootstrap, Foundation, hoặc Bulma là một cách hiệu quả để tăng tốc quá trình phát triển và đảm bảo giao diện người dùng được thiết kế một cách đồng nhất. Tuy nhiên, đôi khi bạn có thể cần tùy chỉnh hoặc điều chỉnh các quy tắc CSS mặc định của framework để phù hợp với yêu cầu thiết kế cụ thể của dự án.

**Cách sử dụng:**
Dưới đây là các bước cơ bản để tùy chỉnh và ghi đè CSS framework:

1. **Hiểu cấu trúc của framework:** Đọc tài liệu và nắm vững cấu trúc và quy tắc của framework CSS bạn đang sử dụng.

2. **Tùy chỉnh thông qua biến (variables) và mixin:** Một số framework CSS như Bootstrap cho phép bạn tùy chỉnh các giá trị thông qua việc sử dụng biến (variables) và mixin. Sử dụng chúng để thay đổi màu sắc, kích thước, hoặc các thuộc tính khác theo yêu cầu.

3. **Ghi đè CSS mặc định:** Sử dụng các quy tắc CSS tùy chỉnh để ghi đè hoặc thay đổi CSS mặc định của framework. Bạn có thể sử dụng các selector cụ thể hoặc ID/class để áp dụng các quy tắc mới.

4. **Sử dụng !important:** Trong một số trường hợp cần thiết, bạn có thể sử dụng !important để đảm bảo rằng các quy tắc của bạn sẽ được ưu tiên hơn các quy tắc mặc định của framework. Tuy nhiên, hãy sử dụng !important một cách cẩn thận để tránh gây ra sự rối loạn trong mã CSS của bạn.

**Ví dụ:**

Giả sử bạn muốn thay đổi màu sắc chủ đạo của các button trong Bootstrap từ màu xanh như mặc định sang màu đỏ. Bạn có thể thực hiện như sau:

```css
/* Ghi đè CSS mặc định */
.btn-primary {
  background-color: #ff0000; /* Màu đỏ */
  border-color: #ff0000; /* Màu đỏ cho viền */
}

/* Sử dụng biến để thay đổi màu chủ đạo */
$primary-color: #ff0000; /* Màu đỏ */
$btn-primary-bg: $primary-color;
$btn-primary-border: $primary-color;
```

Trong ví dụ này, chúng ta đã sử dụng các quy tắc CSS tùy chỉnh để ghi đè màu sắc chủ đạo của button trong Bootstrap và cũng có thể sử dụng biến để thay đổi màu sắc chủ đạo một cách toàn diện.

---

---
