## Sign In Reactive Forms Component trong Angular

**Khái niệm:**

**Sign In Reactive Forms Component** là một component Angular sử dụng Reactive Forms để tạo form đăng nhập. Reactive Forms là một phương pháp xây dựng form dựa trên **model-driven approach**, sử dụng các object model để biểu diễn dữ liệu và cấu trúc của form.

**Ngữ cảnh:**

**Sign In Reactive Forms Component** được sử dụng trong các trường hợp sau:

- **Tạo form đăng nhập phức tạp:** Phù hợp cho form đăng nhập với nhiều field, nested forms, logic validate phức tạp.
- **Tách biệt logic và giao diện:** Giúp code dễ đọc, dễ bảo trì hơn.
- **Kiểm soát dữ liệu tốt hơn:** Cho phép truy cập và cập nhật dữ liệu form dễ dàng.

**Cách sử dụng:**

**1. FormBuilder:**

Sử dụng **FormBuilder** để tạo các object model cho form, bao gồm FormGroup, FormControl và Validators.

**Ví dụ:**

```typescript
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "my-sign-in",
  templateUrl: "./sign-in.component.html",
})
export class SignInComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Submit form
    }
  }
}
```

**2. FormGroup:**

Sử dụng **FormGroup** để biểu diễn một nhóm các field trong form.

**Ví dụ:**

```typescript
this.myForm = this.fb.group({
  username: ["", Validators.required],
  password: ["", Validators.required],
});
```

**3. FormControl:**

Sử dụng **FormControl** để biểu diễn một field trong form.

**Ví dụ:**

```typescript
this.myForm = this.fb.group({
  username: new FormControl("", Validators.required),
  password: new FormControl("", Validators.required),
});
```

**4. Validators:**

Sử dụng **Validators** để validate dữ liệu của field.

**Ví dụ:**

```typescript
this.myForm = this.fb.group({
  username: ["", Validators.required],
  password: ["", Validators.required],
});
```

**5. Submit form:**

Kiểm tra **myForm.valid** trước khi submit form để đảm bảo dữ liệu hợp lệ.

**Ví dụ:**

```typescript
onSubmit() {
  if (this.myForm.valid) {
    // Submit form
  }
}
```

**6. Template:**

Sử dụng directive **formGroup** để bind form group với template.

**Ví dụ:**

```html
<form [formGroup]="myForm" (submit)="onSubmit()">
  <input type="text" formControlName="username" />
  <input type="password" formControlName="password" />
  <button type="submit">Submit</button>
</form>
```

**7. Ví dụ chi tiết:**

**1. Cấu trúc thư mục:**

```
app
├── app.component.html
├── app.component.ts
├── app.module.ts
└── sign-in
    ├── sign-in.component.html
    └── sign-in.component.ts
```

**2. Nội dung file:**

**app.component.html:**

```html
<h1>Sign In</h1>
<my-sign-in></my-sign-in>
```

**app.component.ts:**

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
})
export class AppComponent {}
```

**sign-in.component.html:**

```html
<form [formGroup]="myForm" (submit)="onSubmit()">
  <input type="text" formControlName="username" />
  <input type="password" formControlName="password" />
  <button type="submit">Submit</button>
</form>
```

**sign-in.component.ts:**

```typescript
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "my-sign-in",
  templateUrl: "./sign-in.component.html",
})
export class SignInComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Submit form
      console.log(this.myForm.value);
    }
  }
}
```

**8. Khởi chạy ứng dụng:**

```
ng serve
```

**9. Truy cập ứng dụng:**

Mở trình duyệt web và truy cập địa chỉ `http://localhost:4200/`.

**10. Kết quả:**

- Nhập tên đăng nhập và mật khẩu vào form.
- Nhấp vào nút "Submit".
- Dữ liệu form sẽ được log ra console nếu dữ liệu hợp lệ.

**11. Giải thích:**

- **FormBuilder** được sử dụng để tạo các object model cho form.
- **FormGroup** được sử dụng để biểu diễn một nhóm các field trong form.
- **FormControl** được sử dụng để biểu diễn một field trong form.
- **Validators** được sử dụng để validate dữ liệu của field.
- **Directive formGroup** được sử dụng để bind form group với template.
- **Method onSubmit()** được gọi khi người dùng submit form.

**12. Hỏi đáp:**

**Câu hỏi:** Làm thế nào để hiển thị lỗi validation cho từng field trong form?

**Trả lời:** Sử dụng directive **ngClass** để hiển thị lỗi validation cho từng field trong form.

**Câu hỏi:** Làm thế nào để redirect người dùng sau khi submit form thành công?

**Trả lời:** Sử dụng **Router** để redirect người dùng sau khi submit form thành công.

**Kết luận:**

**Sign In Reactive Forms Component** là một ví dụ điển hình về cách sử dụng Reactive Forms để tạo form đăng nhập. Reactive Forms là một phương pháp hiệu quả để tạo form phức tạp với logic validate phức tạp.

**Ngoài ra:**

- Bạn có thể tham khảo tài liệu chính thức của Angular Forms để biết thêm thông tin chi tiết về Reactive Forms: [https://angular.io/guide/forms-overview](https://angular.io/guide/forms-overview).
- Bạn có thể tìm hiểu về các Validators khác được cung cấp bởi Angular: [https://angular.io/api/forms/Validators](https://angular.io/api/forms/Validators).
- Bạn có thể tìm hiểu về cách sử dụng **Router** để navigate trong ứng dụng Angular: [https://angular.io/guide/router](https://angular.io/guide/router).

**Hướng dẫn tiếp theo:**

- Tìm hiểu về cách sử dụng **ngClass** để hiển thị lỗi validation cho từng field trong form.
- Tìm hiểu về cách sử dụng **Router** để redirect người dùng sau khi submit form thành công.
- Tìm hiểu về cách tạo form phức tạp hơn với nested forms và logic validate phức tạp.

**Bạn có muốn tôi hướng dẫn thêm về bất kỳ chủ đề nào liên quan đến Angular Forms không?**

**Gợi ý:**

- Bạn có thể thử tạo một form đăng nhập phức tạp hơn với nhiều field, nested forms và logic validate phức tạp.
- Bạn có thể thử sử dụng **ngClass** để hiển thị lỗi validation cho từng field trong form.
- Bạn có thể thử sử dụng **Router** để redirect người dùng sau khi submit form thành công.
