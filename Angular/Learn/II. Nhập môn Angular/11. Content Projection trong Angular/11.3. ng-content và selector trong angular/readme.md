## `ng-content` và selector trong Angular

**Khái niệm:**

- **`ng-content`:** là directive trong Angular cho phép chiếu nội dung từ component cha vào component con.
- **Selector:** là một chuỗi được sử dụng để xác định các element HTML mà directive hoặc component sẽ được áp dụng.

**Ngữ cảnh:**

- **`ng-content`:** được sử dụng trong nhiều trường hợp khác nhau, ví dụ như:
  - Tạo ra các component chung có thể được sử dụng với nhiều loại nội dung khác nhau.
  - Tạo ra các layout phức tạp.
  - Tái sử dụng code.
- **Selector:** được sử dụng trong nhiều trường hợp khác nhau, ví dụ như:
  - Xác định các element HTML mà component sẽ được gắn vào.
  - Xác định các element HTML mà directive sẽ được áp dụng.
  - Lọc các element HTML trong template của component.

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

**Selector:**

- Để sử dụng selector, bạn cần thêm nó vào directive hoặc component.
- Sau đó, selector sẽ được sử dụng để xác định các element HTML mà directive hoặc component sẽ được áp dụng.

**Ví dụ:**

**Component:**

```typescript
@Component({
  selector: "app-component",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "app";
}
```

**Template:**

```html
<div>
  <h1>{{title}}</h1>
  <p>This is some content.</p>
</div>
```

**Kết quả:**

```html
<div>
  <h1>app</h1>
  <p>This is some content.</p>
</div>
```

**Sử dụng `ng-content` và selector cùng nhau:**

- Có thể sử dụng `ng-content` và selector cùng nhau để chiếu nội dung từ component cha vào component con theo các phần cụ thể.

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
- Có thể sử dụng nhiều directive khác với `ng-content` và selector, ví dụ như `*ngIf` và `*ngFor`.

**Ngoài ra, bạn có thể tham khảo thêm:**

- Bài viết về `ng-content` trên trang web của Angular: [https://angular.io/guide/content-projection](https://angular.io/guide/content-projection)
