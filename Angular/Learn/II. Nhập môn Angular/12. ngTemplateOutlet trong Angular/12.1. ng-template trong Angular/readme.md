## `ng-template` trong Angular

**Khái niệm:**

`ng-template` là một directive trong Angular cho phép bạn định nghĩa một mẫu HTML có thể được sử dụng nhiều lần trong component.

**Ngữ cảnh:**

`ng-template` được sử dụng trong nhiều trường hợp khác nhau, ví dụ như:

- Tạo ra các component chung có thể được sử dụng với nhiều loại nội dung khác nhau.
- Tạo ra các layout phức tạp.
- Tái sử dụng code.
- Hiển thị nội dung động dựa trên điều kiện.

**Cách sử dụng:**

Để sử dụng `ng-template`, bạn cần thêm directive này vào template của component. Sau đó, bạn có thể sử dụng nó để định nghĩa một mẫu HTML có thể được sử dụng nhiều lần.

**Ví dụ:**

```html
<ng-template #header>
  <h1>Title</h1>
</ng-template>

<div>
  <ng-template outlet="header"></ng-template>
  <p>This is some content.</p>
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

- Có thể sử dụng directive `*ngIf` để hiển thị hoặc ẩn `ng-template` dựa trên điều kiện.
- Có thể sử dụng directive `*ngFor` để lặp lại `ng-template` nhiều lần.
- Có thể sử dụng directive `ngTemplateOutlet` để hiển thị `ng-template` ở một vị trí khác trong template.

**Ngoài ra, bạn có thể tham khảo thêm:**

- Angular documentation: [https://angular.io/api/core/ng-template](https://angular.io/api/core/ng-template)

**Một số ví dụ nâng cao về sử dụng `ng-template`:**

- Tạo ra một modal dialog chung có thể được sử dụng với nhiều loại nội dung khác nhau.
- Tạo ra một layout phức tạp với header, sidebar và content area.
- Tái sử dụng code bằng cách tạo ra một component chung có thể được sử dụng với nhiều loại dữ liệu khác nhau.
- Hiển thị nội dung động dựa trên dữ liệu từ API.

**Hy vọng những thông tin trên giúp bạn hiểu rõ hơn về `ng-template` trong Angular.**
