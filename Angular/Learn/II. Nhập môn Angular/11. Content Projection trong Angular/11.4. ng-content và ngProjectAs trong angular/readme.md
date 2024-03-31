## `ng-content` và `ngProjectAs` trong Angular

**Khái niệm:**

- **`ng-content`:** là directive trong Angular cho phép chiếu nội dung từ component cha vào component con.
- **`ngProjectAs`:** là attribute directive trong Angular cho phép thay đổi cách thức chiếu nội dung từ component cha vào component con.

**Ngữ cảnh:**

- **`ng-content`:** được sử dụng trong nhiều trường hợp khác nhau, ví dụ như:
  - Tạo ra các component chung có thể được sử dụng với nhiều loại nội dung khác nhau.
  - Tạo ra các layout phức tạp.
  - Tái sử dụng code.
- **`ngProjectAs`:** được sử dụng trong các trường hợp sau:
  - Thay đổi cách thức chiếu nội dung từ component cha vào component con khi component con được lồng nhau nhiều cấp.
  - Chiếu nội dung vào component con theo các phần cụ thể.

**Cách sử dụng:**

**`ng-content`:**

- Để sử dụng `ng-content`, bạn cần thêm directive này vào template của component con.
- Sau đó, bạn có thể sử dụng nó để chiếu nội dung từ component cha vào component con.

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

**`ngProjectAs`:**

- Để sử dụng `ngProjectAs`, bạn cần thêm attribute directive này vào element HTML trong template của component con.
- Sau đó, bạn cần sử dụng selector của component con để chiếu nội dung vào element HTML có attribute directive `ngProjectAs`.

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

<div ngProjectAs="header">
  <h1>Title</h1>
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
- Có thể sử dụng nhiều directive khác với `ng-content` và `ngProjectAs`, ví dụ như `*ngIf` và `*ngFor`.

**Ngoài ra, bạn có thể tham khảo thêm:**

- Bài viết về `ng-content` trên trang web của Angular: [https://angular.io/guide/content-projection](https://angular.io/guide/content-projection)

**Một số điểm khác biệt giữa `ng-content` và `ngProjectAs`:**

- `ng-content` được sử dụng để chiếu nội dung từ component cha vào component con, trong khi `ngProjectAs` được sử dụng để thay đổi cách thức chiếu nội dung.
- `ng-content` có thể được sử dụng nhiều lần trong template của component con, trong khi `ngProjectAs` chỉ có thể được sử dụng một lần.
- `ng-content` là directive, trong khi `ngProjectAs` là attribute directive.
