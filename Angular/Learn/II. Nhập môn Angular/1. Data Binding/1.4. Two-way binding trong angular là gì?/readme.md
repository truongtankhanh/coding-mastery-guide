## Two-Way Binding trong Angular

**Khái niệm:**

Two-way binding là kỹ thuật đồng bộ dữ liệu giữa component và view (template file html) trong Angular một cách tự động. Nó cho phép bạn cập nhật dữ liệu trong component khi người dùng thay đổi giá trị trên giao diện người dùng và ngược lại.

**Ngữ cảnh:**

Two-way binding được sử dụng để:

* Tạo giao diện người dùng tương tác và phản hồi.
* Giảm thiểu code cần viết để đồng bộ dữ liệu giữa component và view.
* Tăng hiệu quả phát triển ứng dụng.

**Cách sử dụng:**

Có hai cách để sử dụng two-way binding:

**1. Sử dụng directive ngModel:**

Directive `ngModel` được sử dụng để bind giá trị của một element HTML với một biến trong component. Ví dụ:

```html
<input type="text" [(ngModel)]="name" />
```

**2. Sử dụng custom directive:**

Bạn có thể tạo custom directive để implement two-way binding cho các component riêng của bạn.

**Ví dụ:**

```html
<input type="text" [(myCustomBinding)]="name" />
```

**Lợi ích:**

* Giúp code gọn gàng và dễ đọc hơn.
* Tạo giao diện người dùng tương tác và phản hồi.
* Tăng hiệu quả phát triển ứng dụng.

**Hạn chế:**

* Có thể ảnh hưởng đến hiệu suất nếu sử dụng không hợp lý.
* Khó gỡ lỗi nếu code phức tạp.

**Lưu ý:**

* Two-way binding chỉ hoạt động với các element HTML có thuộc tính `value`.
* Để sử dụng two-way binding với custom directive, bạn cần implement directive đó theo đúng cách.

**Tài liệu tham khảo:**

* Angular Two-Way Binding: [https://angular.io/guide/two-way-binding](https://angular.io/guide/two-way-binding)
* Sử dụng Two-way binding trong Angular: [https://levunguyen.com/laptrinhweb/2021/06/05/su-dung-data-binding-trong-angular/](https://levunguyen.com/laptrinhweb/2021/06/05/su-dung-data-binding-trong-angular/)

### Một số ví dụ nâng cao về two-way binding:

* **Bind giá trị của một object:**

```html
<input type="text" [(ngModel)]="person.name" />
```

* **Bind giá trị của một array:**

```html
<ul>
  <li *ngFor="let item of items" [(ngModel)]="item"></li>
</ul>
```

* **Bind giá trị của một expression:**

```html
<input type="text" [(ngModel)]="2 + 2" />
```

* **Bind giá trị của một function:**

```html
<button (click)="onClick()">{{ buttonText }}</button>
```

### Một số best practices khi sử dụng two-way binding:

* Sử dụng two-way binding cho các trường hợp cần thiết.
* Sử dụng property binding cho các trường hợp không cần cập nhật dữ liệu liên tục.
* Sử dụng event binding để thực hiện các hành động khi người dùng tương tác với giao diện người dùng.
* Sử dụng pipe để format dữ liệu trước khi hiển thị trên giao diện người dùng.

**Kết luận:**

Two-way binding là một kỹ thuật quan trọng trong Angular giúp bạn tạo giao diện người dùng tương tác và phản hồi một cách dễ dàng. Sử dụng two-way binding một cách hiệu quả sẽ giúp bạn phát triển ứng dụng Angular nhanh chóng và hiệu quả hơn.