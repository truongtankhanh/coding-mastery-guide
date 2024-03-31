## Sử dụng `ng-content` trong Angular

**Khái niệm:**

`ng-content` là một directive trong Angular cho phép bạn chiếu nội dung từ component cha vào component con.

**Ngữ cảnh:**

`ng-content` được sử dụng trong nhiều trường hợp khác nhau, ví dụ như:

- Tạo ra các component chung có thể được sử dụng với nhiều loại nội dung khác nhau. Ví dụ, bạn có thể tạo ra một component chung cho một modal dialog và sử dụng `ng-content` để chiếu nội dung của modal dialog vào component này.
- Tạo ra các layout phức tạp. Ví dụ, bạn có thể sử dụng `ng-content` để tạo ra một layout có header, sidebar và content area.
- Tái sử dụng code. Ví dụ, bạn có thể sử dụng `ng-content` để tạo ra một component có thể được sử dụng để hiển thị một danh sách các item, và sử dụng component này trong nhiều trang khác nhau của ứng dụng.

**Cách sử dụng:**

Để sử dụng `ng-content`, bạn cần thêm directive này vào template của component con. Sau đó, bạn có thể sử dụng nó để chiếu nội dung từ component cha vào component con.

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

- `ng-content` chỉ có thể được sử dụng trong template của component con.
- `ng-content` chỉ có thể được sử dụng một lần trong template của component con.
- `ng-content` có thể được sử dụng với các directive khác, ví dụ như `*ngIf` và `*ngFor`.
