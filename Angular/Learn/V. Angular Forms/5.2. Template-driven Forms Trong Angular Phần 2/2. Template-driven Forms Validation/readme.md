## Template-driven Forms Validation trong Angular

### Khái niệm:

Template-driven forms validation là phương pháp validate dữ liệu trong Angular forms dựa trên template HTML. Sử dụng các directives và binding Angular để thực hiện validate trực tiếp trong template.

### Ngữ cảnh:

Template-driven forms validation được sử dụng trong các trường hợp sau:

- **Validate dữ liệu đơn giản:** Thích hợp cho các form nhỏ gọn với ít field và logic validate đơn giản.
- **Tạo form nhanh chóng:** Tiết kiệm thời gian so với reactive forms.
- **Dễ dàng sử dụng:** Phù hợp cho người mới bắt đầu với Angular forms.

### Cách sử dụng:

**1. Directives validation:**

Sử dụng các directives Angular như `required`, `minlength`, `maxlength`, `pattern` để validate dữ liệu trực tiếp trong template.

**Ví dụ:**

```html
<input type="text" name="name" [(ngModel)]="name" required minlength="3" />
<div *ngIf="name.invalid && name.touched">
  Tên không hợp lệ (tối thiểu 3 ký tự).
</div>
```

**2. Directive `ngClass`:**

Sử dụng directive `ngClass` để thêm class CSS cho element dựa trên trạng thái validate.

**Ví dụ:**

```html
<input
  type="text"
  name="name"
  [(ngModel)]="name"
  required
  class="form-control"
  [ngClass]="{'is-invalid': name.invalid && name.touched}"
/>
```

**3. Hiển thị lỗi validation:**

Sử dụng directive `ngIf` để hiển thị thông báo lỗi validation.

**Ví dụ:**

```html
<div *ngIf="name.invalid && name.touched">Tên không hợp lệ.</div>
```

### Ví dụ chi tiết:

**1. Cấu trúc thư mục:**

```
app
├── app.component.html
├── app.component.ts
└── app.module.ts
```

**2. Nội dung file:**

**app.component.html:**

```html
<h1>{{ name }}</h1>
<form (submit)="onSubmit()">
  <input type="text" name="name" [(ngModel)]="name" required minlength="3" />
  <button type="submit">Submit</button>
</form>
```

**app.component.ts:**

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  name: string;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    if (this.name === "") {
      alert("Tên không được để trống.");
    } else {
      alert("Tên hợp lệ.");
    }
  }
}
```

**3. Khởi chạy ứng dụng:**

```
ng serve
```

**4. Truy cập ứng dụng:**

Mở trình duyệt web và truy cập địa chỉ `http://localhost:4200/`.

**5. Kết quả:**

- Nhập tên ngắn hơn 3 ký tự vào input field.
- Nhấp vào nút "Submit".
- Lỗi validation sẽ được hiển thị.

**6. Giải thích:**

- Directive `required` đảm bảo người dùng nhập dữ liệu.
- Directive `minlength` đảm bảo tên dài tối thiểu 3 ký tự.
- Directive `ngClass` thêm class `is-invalid` cho input field khi lỗi validation xảy ra.
- Directive `ngIf` hiển thị thông báo lỗi validation.

### Hỏi đáp:

**Câu hỏi:** Làm thế nào để sử dụng nhiều validators cho một field?

**Trả lời:** Sử dụng mảng validators trong directive `ngModel`.

**Ví dụ:**

```html
<input
  type="email"
  name="email"
  [(ngModel)]="email"
  required
  pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
/>
```

**Câu hỏi:** Làm thế nào để validate dữ liệu trong nested form?

**Trả lời:** Sử dụng directive `ngModelGroup` cho nested form và validate như normal form.

### Kết luận:

Template-driven forms validation là phương pháp đơn giản để validate dữ liệu trong Angular forms. Tuy nhiên, nó chỉ phù hợp cho các form đơn giản. Đối với các form phức tạp, nên sử dụng reactive forms.
