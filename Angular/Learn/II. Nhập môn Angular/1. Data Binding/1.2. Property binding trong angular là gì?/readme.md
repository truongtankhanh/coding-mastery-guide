## Property Binding trong Angular

**Khái niệm:**

Property binding là kỹ thuật đồng bộ dữ liệu từ component sang view (template file html) trong Angular. Nó cho phép hiển thị giá trị của một biến trong component lên một element HTML.

**Ngữ cảnh:**

Property binding được sử dụng để:

- Hiển thị dữ liệu động trên giao diện người dùng.
- Cập nhật giao diện người dùng khi dữ liệu trong component thay đổi.
- Tạo giao diện người dùng tương tác.

**Cách sử dụng:**

Có hai cách để sử dụng property binding:

**1. Interpolation:**

Sử dụng {{ }} để hiển thị giá trị của một biến trong component. Ví dụ:

```html
<h1>{{ title }}</h1>
```

**2. Property binding:**

Sử dụng [] để bind giá trị của một biến vào thuộc tính của một element HTML. Ví dụ:

```html
<input type="text" [(ngModel)]="name" />
```

**Ví dụ:**

- **Interpolation:**

```html
<h1>{{ title }}</h1>
```

- **Property binding:**

```html
<input type="text" [(ngModel)]="name" />
```

**Lợi ích:**

- Giúp code gọn gàng và dễ đọc hơn.
- Tạo giao diện người dùng động và tương tác.
- Tăng hiệu quả phát triển ứng dụng.

**Hạn chế:**

- Có thể ảnh hưởng đến hiệu suất nếu sử dụng không hợp lý.
- Khó gỡ lỗi nếu code phức tạp.

**Lưu ý:**

- Property binding chỉ có thể được sử dụng để bind dữ liệu từ component sang view.
- Để bind dữ liệu từ view sang component, cần sử dụng event binding.

**Tài liệu tham khảo:**

- Angular Property Binding: [https://angular.io/guide/property-binding](https://angular.io/guide/property-binding)
- Sử dụng Property binding trong Angular: [https://levunguyen.com/laptrinhweb/2021/06/05/su-dung-data-binding-trong-angular/](https://levunguyen.com/laptrinhweb/2021/06/05/su-dung-data-binding-trong-angular/)

### Một số ví dụ nâng cao về property binding:

- **Bind giá trị của một object:**

```html
<p>{{ person.name }}</p>
```

- **Bind giá trị của một array:**

```html
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

- **Bind giá trị của một expression:**

```html
<p>{{ 2 + 2 }}</p>
```

- **Bind giá trị của một function:**

```html
<button (click)="onClick()">{{ buttonText }}</button>
```

### Một số best practices khi sử dụng property binding:

- Sử dụng tên biến rõ ràng và dễ hiểu.
- Tránh sử dụng property binding cho các giá trị không thay đổi.
- Sử dụng event binding để cập nhật dữ liệu từ view sang component.
- Sử dụng pipe để format dữ liệu trước khi hiển thị trên giao diện người dùng.

**Kết luận:**

Property binding là một kỹ thuật quan trọng trong Angular giúp bạn tạo giao diện người dùng động và tương tác. Sử dụng property binding một cách hiệu quả sẽ giúp bạn phát triển ứng dụng Angular nhanh chóng và dễ dàng hơn.
