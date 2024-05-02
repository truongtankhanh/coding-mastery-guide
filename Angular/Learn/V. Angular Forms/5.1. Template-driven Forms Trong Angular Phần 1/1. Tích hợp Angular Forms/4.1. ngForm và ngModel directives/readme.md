## Angular Forms - ngForm và ngModel Directives

**Khái niệm:**

**NgForm** và **ngModel** là hai directives quan trọng trong Angular Forms, được sử dụng để tạo và quản lý các form trong Angular applications.

**NgForm:**

- Là directive giúp tạo một form instance.
- Cho phép truy cập vào các giá trị, trạng thái và các thuộc tính khác của form.
- Có thể được sử dụng với các directive khác như ngModel để tạo các form phức tạp.

**NgModel:**

- Là directive giúp liên kết dữ liệu giữa các element HTML và form control.
- Cho phép cập nhật giá trị của form control khi người dùng thay đổi dữ liệu trong element HTML.
- Có thể được sử dụng với các directive khác như ngForm để tạo các form phức tạp.

**Ngữ cảnh:**

**NgForm** và **ngModel** được sử dụng trong các trường hợp sau:

- Tạo các form đơn giản với một vài input fields.
- Tạo các form phức tạp với nhiều input fields, nested forms và validation.
- Thu thập dữ liệu từ người dùng.
- Cập nhật dữ liệu trong ứng dụng dựa trên input của người dùng.

**Cách sử dụng:**

**1. Tạo form instance:**

Sử dụng directive **ngForm** trong template HTML để tạo một form instance:

```html
<form [ngForm]="myForm"></form>
```

**2. Liên kết dữ liệu:**

Sử dụng directive **ngModel** để liên kết dữ liệu giữa các element HTML và form control:

```html
<form [ngForm]="myForm">
  <input type="text" name="name" [(ngModel)]="name" />
</form>
```

**3. Truy cập form instance:**

Sử dụng component class để truy cập vào form instance:

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  myForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl("", Validators.required),
    });
  }
}
```

**4. Ví dụ chi tiết:**

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
<form [ngForm]="myForm">
  <input type="text" name="name" [(ngModel)]="name" />
  <button type="submit">Submit</button>
</form>

<h1>{{ name }}</h1>
```

**app.component.ts:**

```typescript
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  name: string;

  constructor() {}

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl("", Validators.required),
    });
  }

  onSubmit() {
    this.name = this.myForm.value.name;
  }
}
```

**5. Khởi chạy ứng dụng:**

```
ng serve
```

**6. Truy cập ứng dụng:**

Mở trình duyệt web và truy cập địa chỉ `http://localhost:4200/`.

**7. Kết quả:**

- Nhập tên vào input field.
- Nhấp vào nút "Submit".
- Tên người dùng sẽ được hiển thị dưới form.

**8. Giải thích:**

- Directive **ngForm** được sử dụng để tạo một form instance.
- Directive **ngModel** được sử dụng để liên kết dữ liệu giữa input field và form control.
- Component class được sử dụng để truy cập vào form instance và giá trị của form control.

**9. Hỏi đáp:**

**Câu hỏi:** Làm thế nào để tôi sử dụng **ngModel** với các element HTML khác?

**Trả lời:** **ngModel** có thể được sử dụng với nhiều element HTML khác như textarea, select, checkbox, radio button, etc.

**Câu hỏi:** Làm thế nào để tôi validate dữ liệu trong form?

**Trả lời:** Bạn có thể sử dụng Angular Validators để validate dữ liệu trong form.
