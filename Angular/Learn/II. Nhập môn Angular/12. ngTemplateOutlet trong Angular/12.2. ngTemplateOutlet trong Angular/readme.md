## `ngTemplateOutlet` trong Angular

**Khái niệm:**

`ngTemplateOutlet` là directive trong Angular cho phép bạn hiển thị một `ng-template` ở một vị trí khác trong template.

**Ngữ cảnh:**

`ngTemplateOutlet` được sử dụng trong nhiều trường hợp khác nhau, ví dụ như:

- Tạo ra các component chung có thể được sử dụng với nhiều loại nội dung khác nhau.
- Tạo ra các layout phức tạp.
- Tái sử dụng code.
- Hiển thị nội dung động dựa trên điều kiện.

**Cách sử dụng:**

Để sử dụng `ngTemplateOutlet`, bạn cần thêm directive này vào template của component. Sau đó, bạn cần sử dụng nó để xác định `ng-template` nào sẽ được hiển thị và vị trí hiển thị.

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

- Có thể sử dụng directive `*ngIf` để hiển thị hoặc ẩn `ngTemplateOutlet` dựa trên điều kiện.
- Có thể sử dụng directive `*ngFor` để lặp lại `ngTemplateOutlet` nhiều lần.
- Có thể sử dụng directive `ngTemplateOutletContext` để truyền dữ liệu vào `ng-template` được hiển thị bởi `ngTemplateOutlet`.

**Ngoài ra, bạn có thể tham khảo thêm:**

- Angular documentation: [https://angular.io/api/common/NgTemplateOutlet](https://angular.io/api/common/NgTemplateOutlet)

**Một số ví dụ nâng cao về sử dụng `ngTemplateOutlet`:**

- Tạo ra một modal dialog chung có thể được sử dụng với nhiều loại nội dung khác nhau.
- Tạo ra một layout phức tạp với header, sidebar và content area.
- Tái sử dụng code bằng cách tạo ra một component chung có thể được sử dụng với nhiều loại dữ liệu khác nhau.
- Hiển thị nội dung động dựa trên dữ liệu từ API.

**Hy vọng những thông tin trên giúp bạn hiểu rõ hơn về `ngTemplateOutlet` trong Angular.**

**Ví dụ:**

```html
<ng-template #header>
  <h1>Title</h1>
</ng-template>

<div>
  <button (click)="toggle()">Toggle Header</button>
  <ng-template [ngTemplateOutlet]="header" *ngIf="showHeader"></ng-template>
  <p>This is some content.</p>
</div>
```

**Kết quả:**

```html
<div>
  <button (click)="toggle()">Toggle Header</button>
  <h1>Title</h1>
  <p>This is some content.</p>
</div>
```

**Lưu ý:**

- Có thể sử dụng directive `*ngIf` để hiển thị hoặc ẩn `ngTemplateOutlet` dựa trên điều kiện.
- Có thể sử dụng directive `*ngFor` để lặp lại `ngTemplateOutlet` nhiều lần.
- Có thể sử dụng directive `ngTemplateOutletContext` để truyền dữ liệu vào `ng-template` được hiển thị bởi `ngTemplateOutlet`.

**Ngoài ra, bạn có thể tham khảo thêm:**

- Angular documentation: [https://angular.io/api/common/NgTemplateOutlet](https://angular.io/api/common/NgTemplateOutlet)

**Một số ví dụ nâng cao về sử dụng `ngTemplateOutlet`:**

- Tạo ra một modal dialog chung có thể được sử dụng với nhiều loại nội dung khác nhau.
- Tạo ra một layout phức tạp với header, sidebar và content area.
- Tái sử dụng code bằng cách tạo ra một component chung có thể được sử dụng với nhiều loại dữ liệu khác nhau.
- Hiển thị nội dung động dựa trên dữ liệu từ API.

**Hy vọng những thông tin trên giúp bạn hiểu rõ hơn về `ngTemplateOutlet` trong Angular.**
