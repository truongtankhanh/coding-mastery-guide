## Content và View trong Angular

**Khái niệm:**

- **Content:** là phần nội dung được truyền vào component thông qua thẻ mở/đóng. Nó không được quản lý trực tiếp bởi component.
- **View:** là phần template được định nghĩa trong component. Nó được quản lý trực tiếp bởi component.

**Ngữ cảnh:**

- **Content:** được sử dụng để tạo ra các component có thể tái sử dụng với nhiều loại nội dung khác nhau.
- **View:** được sử dụng để định nghĩa giao diện của component.

**Cách sử dụng:**

- **Content:** có thể được truy cập thông qua directive `@ContentChildren` hoặc service.
- **View:** có thể được định nghĩa bằng cách sử dụng template string hoặc file HTML.

**Ví dụ:**

```html
<app-child>
  <h1>This is content</h1>
</app-child>

<ng-content></ng-content>
```

```typescript
// child.component.ts
@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
})
export class ChildComponent {
  constructor() {}
}
```

**Output:**

```html
<h1>This is content</h1>
```

**Lưu ý:**

- Cần chú ý đến việc sử dụng `ng-content` một cách cẩn thận để tránh các vấn đề về layout.
- Có thể sử dụng các cách khác nhau để tạo ra các component có thể tái sử dụng.

**Ngoài ra, bạn có thể tham khảo thêm:**

- Angular documentation: [https://angular.io/guide/component-interaction](https://angular.io/guide/component-interaction)

**Một số ví dụ nâng cao về sử dụng Content và View:**

- **Tạo ra một modal dialog chung có thể được sử dụng với nhiều loại nội dung khác nhau.**
- **Tạo ra một layout phức tạp với header, sidebar và content area.**
- **Tái sử dụng code bằng cách tạo ra một component chung có thể được sử dụng với nhiều loại dữ liệu khác nhau.**
- **Hiển thị nội dung động dựa trên dữ liệu từ API.**

**Hy vọng những thông tin trên giúp bạn hiểu rõ hơn về Content và View trong Angular.**
