## Validate Forms trong Angular

**Khái niệm:**

Validation là quá trình kiểm tra dữ liệu do người dùng nhập vào form để đảm bảo dữ liệu hợp lệ và chính xác.

**Ngữ cảnh:**

Validation được sử dụng trong các trường hợp sau:

- **Đảm bảo dữ liệu do người dùng nhập vào form hợp lệ.**
- **Hiển thị lỗi validation cho người dùng.**
- **Ngăn chặn người dùng submit form với dữ liệu không hợp lệ.**

**Cách sử dụng:**

Có hai cách chính để validate form trong Angular:

**1. Template-driven validation:**

- Sử dụng directive **ngModel** và **ngClass** để validate dữ liệu trực tiếp trong template.
- **Ví dụ:**

```html
<input type="text" name="name" [(ngModel)]="name" required />
<div *ngIf="name.invalid">Tên không hợp lệ.</div>
```

**2. Reactive forms:**

- Sử dụng FormGroup, FormControl và Validators để validate dữ liệu trong component.
- **Ví dụ:**

```typescript
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

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

  onSubmit() {
    if (this.myForm.valid) {
      // Submit form
    }
  }
}
```

**Ví dụ chi tiết:**

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
  <input type="text" name="name" [(ngModel)]="name" required />
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

- Nhập tên vào input field.
- Nhấp vào nút "Submit".
- Nếu tên hợp lệ, thông báo "Tên hợp lệ" sẽ được hiển thị.
- Nếu tên không hợp lệ, thông báo "Tên không được để trống" sẽ được hiển thị.

**6. Giải thích:**

- Directive **ngModel** được sử dụng để liên kết dữ liệu giữa component và template.
- Directive **required** được sử dụng để validate dữ liệu không được để trống.
- Method **onSubmit()** được gọi khi người dùng submit form.
- Method **onSubmit()** kiểm tra xem dữ liệu hợp lệ hay không và hiển thị thông báo cho người dùng.

**Hỏi đáp:**

**Câu hỏi:** Làm thế nào để sử dụng nhiều Validators cho một form control?

**Trả lời:** Bạn có thể sử dụng mảng Validators để sử dụng nhiều Validators cho một form control.

**Câu hỏi:** Làm thế nào để hiển thị lỗi validation cho từng field trong form?

**Trả lời:** Bạn có thể sử dụng directive **ngClass** để hiển thị lỗi validation cho từng field trong form.

**Kết luận:**

Validation là một phần quan trọng của Angular Forms. Validation giúp đảm bảo dữ liệu do người dùng nhập vào form hợp lệ và chính xác. Có hai cách chính để validate form trong Angular: template-driven validation và reactive forms.

**Ngoài ra:**

- Bạn có thể tham khảo tài liệu chính thức của Angular Forms để biết thêm thông tin chi tiết về validation: [https://angular.io/guide/forms-overview](https://angular.io/guide/forms-overview).
