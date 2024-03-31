## Sử dụng nhiều `ng-content`

**Khái niệm:**

Có thể sử dụng nhiều `ng-content` trong một component Angular, nhưng cần lưu ý một số điểm để sử dụng hiệu quả.

**Ngữ cảnh:**

Sử dụng nhiều `ng-content` có thể hữu ích trong các trường hợp sau:

- **Chiếu nội dung vào các phần khác nhau của component con:** Ví dụ, bạn có thể sử dụng một `ng-content` để chiếu tiêu đề và một `ng-content` khác để chiếu nội dung chính của component con.
- **Tạo layout phức tạp:** Ví dụ, bạn có thể sử dụng nhiều `ng-content` để tạo layout có header, sidebar và content area.
- **Tái sử dụng code:** Ví dụ, bạn có thể tạo component chung có thể được sử dụng với nhiều loại nội dung khác nhau, sử dụng nhiều `ng-content` để chiếu nội dung phù hợp vào component.

**Cách sử dụng:**

Để sử dụng nhiều `ng-content`, bạn cần thêm directive này vào template của component con nhiều lần. Sau đó, bạn có thể sử dụng nó để chiếu nội dung từ component cha vào component con theo thứ tự khai báo.

**Ví dụ:**

**Component cha:**

```html
<div>
  <app-component-con>
    <h1>Title</h1>
    <p>This is some content.</p>
  </app-component-con>
</div>
```

**Component con:**

```html
<div>
  <ng-content select=".header"></ng-content>
  <ng-content></ng-content>
</div>
```

**Kết quả:**

```html
<div>
  <h1>Title</h1>
  <p>This is some content.</p>
</div>
```

**Lưu ý:**

- Thứ tự khai báo `ng-content` trong template của component con quan trọng. Nội dung được chiếu vào component con sẽ theo thứ tự khai báo.
- Có thể sử dụng selector để chỉ định phần nội dung nào được chiếu vào `ng-content` cụ thể.
- Có thể sử dụng nhiều directive khác với `ng-content`, ví dụ như `*ngIf` và `*ngFor`.

**Một số lưu ý khi sử dụng nhiều `ng-content`:**

- Sử dụng nhiều `ng-content` có thể làm cho code khó đọc và khó hiểu hơn.
- Nên sử dụng nhiều `ng-content` một cách cẩn thận và chỉ khi cần thiết.
- Có thể sử dụng các giải pháp thay thế cho `ng-content`, ví dụ như component và directive.
