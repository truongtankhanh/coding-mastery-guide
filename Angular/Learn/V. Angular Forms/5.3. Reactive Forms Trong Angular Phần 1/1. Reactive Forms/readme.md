## Reactive Forms trong Angular

### Khái niệm:

Reactive Forms là phương pháp xây dựng form trong Angular dựa trên **model-driven approach**. Thay vì sử dụng các directive như **ngModel** trong template, Reactive Forms sử dụng các object model trong component để biểu diễn dữ liệu và cấu trúc của form.

### Ngữ cảnh:

Reactive Forms được sử dụng trong các trường hợp sau:

- **Tạo form phức tạp:** Phù hợp cho các form với nhiều field, nested forms, logic validate phức tạp.
- **Tách biệt logic và giao diện:** Giúp code dễ đọc, dễ bảo trì hơn.
- **Kiểm soát dữ liệu tốt hơn:** Cho phép truy cập và cập nhật dữ liệu form dễ dàng.

### Cách sử dụng:

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
  name: ["", Validators.required],
  email: ["", [Validators.required, Validators.email]],
});
```

**3. FormControl:**

Sử dụng **FormControl** để biểu diễn một field trong form.

**Ví dụ:**

```typescript
this.myForm = this.fb.group({
  name: new FormControl("", Validators.required),
  email: new FormControl("", [Validators.required, Validators.email]),
});
```

**4. Validators:**

Sử dụng **Validators** để validate dữ liệu của field.

**Ví dụ:**

```typescript
this.myForm = this.fb.group({
  name: ["", Validators.required],
  email: ["", [Validators.required, Validators.email]],
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
<form [formGroup]="myForm" (submit)="onSubmit()">
  <input type="text" formControlName="name" />
  <input type="email" formControlName="email" />
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
      // Submit form
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

- Nhập dữ liệu vào các field trong form.
- Nhấp vào nút "Submit".
- Lỗi validation sẽ được hiển thị nếu dữ
