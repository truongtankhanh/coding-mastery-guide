## Ng-template trong Angular

**Khái niệm:**

`Ng-template` là một directive trong Angular cho phép bạn định nghĩa một mẫu HTML có thể được sử dụng nhiều lần trong component.

**Ngữ cảnh:**

`Ng-template` được sử dụng để:

- Tái sử dụng một phần HTML trong component.
- Tạo giao diện người dùng động và tương tác.
- Giảm thiểu code cần viết.

**Cách sử dụng:**

`Ng-template` được sử dụng bằng cách sử dụng directive `<ng-template>` trong template HTML. Directive `<ng-template>` nhận một tên làm đầu vào và định nghĩa nội dung HTML của template.

**Ví dụ:**

```html
<ng-template #myTemplate>
  <h1>Đây là nội dung của template</h1>
</ng-template>

<div *ngIf="condition">
  <ng-container *ngTemplateOutlet="myTemplate"></ng-container>
</div>
```

**Lợi ích:**

- Giúp code gọn gàng và dễ đọc hơn.
- Tạo giao diện người dùng động và tương tác.
- Giảm thiểu code cần viết.

**Hạn chế:**

- Có thể ảnh hưởng đến hiệu suất nếu sử dụng không hợp lý.
- Khó gỡ lỗi nếu code phức tạp.

**Lưu ý:**

- Directive `<ng-template>` chỉ có thể được sử dụng trong template HTML.
- Để sử dụng `ng-template` với directive `*ngIf`, bạn cần sử dụng directive `ng-container`.

**Tài liệu tham khảo:**

- Angular Ng-template: [https://angular.io/api/core/ng-template](https://angular.io/api/core/ng-template)
- Sử dụng Ng-template trong Angular: [https://levunguyen.com/laptrinhweb/2021/06/14/su-dung-directive-ngFor-trong-angular/](https://levunguyen.com/laptrinhweb/2021/06/14/su-dung-directive-ngFor-trong-angular/)

### Một số ví dụ nâng cao về ng-template:

- **Sử dụng `ng-template` với directive `*ngFor`:**

```html
<ul>
  <li *ngFor="let item of items">
    <ng-template #myTemplate>
      <h1>{{ item.name }}</h1>
    </ng-template>

    <div *ngIf="item.condition">
      <ng-container *ngTemplateOutlet="myTemplate"></ng-container>
    </div>
  </li>
</ul>
```

- **Sử dụng `ng-template` với directive `*ngSwitch`:**

```html
<div [ngSwitch]="variable">
  <div *ngSwitchCase="value1">
    <ng-template #myTemplate>
      <h1>Đây là nội dung được hiển thị nếu variable bằng value1</h1>
    </ng-template>

    <ng-container *ngTemplateOutlet="myTemplate"></ng-container>
  </div>
  <div *ngSwitchCase="value2">
    <ng-template #myTemplate>
      <h1>Đây là nội dung được hiển thị nếu variable bằng value2</h1>
    </ng-template>

    <ng-container *ngTemplateOutlet="myTemplate"></ng-container>
  </div>
  <div *ngSwitchDefault>
    <ng-template #myTemplate>
      <h1>
        Đây là nội dung được hiển thị nếu variable không bằng value1 hoặc value2
      </h1>
    </ng-template>

    <ng-container *ngTemplateOutlet="myTemplate"></ng-container>
  </div>
</div>
```

### Một số best practices khi sử dụng ng-template:

- Sử dụng `ng-template` cho các trường hợp cần tái sử dụng một phần HTML.
- Sử dụng directive `*ngIf` và `*ngSwitch` để hiển thị nội dung động.
- Sử dụng pipe để format dữ liệu trước khi hiển thị trên giao diện người dùng.

**Kết luận:**

`Ng-template` là một directive quan trọng trong Angular giúp bạn tạo giao diện người dùng động và tương tác một cách dễ dàng. Sử dụng `ng-template` một cách hiệu quả sẽ giúp bạn phát triển ứng dụng Angular nhanh chóng và hiệu quả hơn.
