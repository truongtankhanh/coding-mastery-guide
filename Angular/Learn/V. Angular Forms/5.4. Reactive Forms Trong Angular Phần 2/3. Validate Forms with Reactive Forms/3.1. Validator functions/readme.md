## Validator Functions trong Angular Forms

**Khái niệm:**

**Validator functions** là các hàm được sử dụng để validate dữ liệu nhập vào trong Angular Forms.

**Ngữ cảnh:**

**Validator functions** được sử dụng trong các trường hợp sau:

- **Kiểm tra tính hợp lệ của dữ liệu:** Đảm bảo dữ liệu nhập vào hợp lệ trước khi submit form.
- **Hiển thị thông báo lỗi cho người dùng:** Hiển thị thông báo lỗi cho người dùng khi dữ liệu nhập vào không hợp lệ.
- **Tùy chỉnh logic validate:** Tùy chỉnh logic validate theo yêu cầu cụ thể của ứng dụng.

**Cách sử dụng:**

**1. Validators có sẵn:**

Angular Forms cung cấp một số **Validators** có sẵn để validate dữ liệu, ví dụ:

- **required:** Kiểm tra dữ liệu không được để trống.
- **email:** Kiểm tra dữ liệu có định dạng email hợp lệ.
- **minLength:** Kiểm tra độ dài tối thiểu của dữ liệu.
- **maxLength:** Kiểm tra độ dài tối đa của dữ liệu.

**Ví dụ:**

```html
<form [formGroup]="myForm">
  <input type="text" formControlName="name" required />
  <input type="email" formControlName="email" required email />
</form>
```

**2. Tạo custom validator function:**

Bạn có thể tạo custom validator function để validate dữ liệu theo yêu cầu cụ thể của ứng dụng.

**Ví dụ:**

```typescript
export function forbiddenUsernameValidator(c: AbstractControl) {
  const users = ["admin", "manager"];
  return users.indexOf(c.value) !== -1 ? { forbiddenUsername: true } : null;
}
```

**3. Sử dụng custom validator function:**

```html
<form [formGroup]="myForm">
  <input type="text" formControlName="username" required forbiddenUsername />
</form>
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
<h1>{{ name }}</h1>
<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" required />
  <input type="email" formControlName="email" required email />
  <button type="submit">Submit</button>
</form>
```

**app.component.ts:**

```typescript
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Gửi dữ liệu form đến server
      // Lưu trữ dữ liệu form vào database
      // ...
      console.log(this.myForm.value);
    } else {
      // Hiển thị lỗi validation cho người dùng
      alert("Dữ liệu nhập vào không hợp lệ.");
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

- Nhập tên và email vào input field.
- Nhấp vào nút "Submit".
- Dữ liệu form sẽ được log ra console nếu dữ liệu hợp lệ.

**6. Giải thích:**

- **Validators** được sử dụng để validate dữ liệu nhập vào.
- **Custom validator function** được tạo để validate username theo yêu cầu cụ thể.
- **Form** chỉ submit khi tất cả dữ liệu đều hợp lệ.
