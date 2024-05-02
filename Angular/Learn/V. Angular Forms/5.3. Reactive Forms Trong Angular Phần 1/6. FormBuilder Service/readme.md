## FormBuilder Service trong Angular Forms

**Khái niệm:**

**FormBuilder Service** là một service trong Angular Forms được sử dụng để tạo các FormGroup, FormControl và FormArray một cách dễ dàng. FormBuilder Service giúp đơn giản hóa việc tạo form phức tạp với nhiều field, nested forms và logic validate phức tạp.

**Ngữ cảnh:**

**FormBuilder Service** được sử dụng trong các trường hợp sau:

- **Tạo form phức tạp:** Phù hợp cho các form với nhiều field, nested forms, logic validate phức tạp.
- **Tạo form động:** Phù hợp cho các form với số lượng field không xác định trước, ví dụ: danh sách sản phẩm, danh sách người dùng.
- **Tạo form lặp lại:** Phù hợp cho các form với các field lặp lại, ví dụ: form đăng ký nhiều người tham gia.

**Cách sử dụng:**

**1. Inject FormBuilder Service:**

Inject FormBuilder Service vào component.

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
}
```

**2. Tạo FormGroup:**

Sử dụng method **group()** của FormBuilder Service để tạo FormGroup.

**Ví dụ:**

```typescript
this.myForm = this.fb.group({
  name: ["", Validators.required],
  email: ["", [Validators.required, Validators.email]],
});
```

**3. Tạo FormControl:**

Sử dụng method **control()** của FormBuilder Service để tạo FormControl.

**Ví dụ:**

```typescript
const name = this.fb.control("", Validators.required);
```

**4. Tạo FormArray:**

Sử dụng method **array()** của FormBuilder Service để tạo FormArray.

**Ví dụ:**

```typescript
const products = this.fb.array([this.fb.control(""), this.fb.control("")]);
```

**5. Ví dụ chi tiết:**

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
      console.log(this.myForm.value);
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

- Nhập tên và email vào form.
- Nhấp vào nút "Submit".
- Dữ liệu form sẽ được log ra console nếu dữ liệu hợp lệ.

**6. Giải thích:**

- FormBuilder Service được inject vào component.
- Method **group()** được sử dụng để tạo FormGroup.
- Method **control()** được sử dụng để tạo FormControl.
- Method **array()** được sử dụng để tạo FormArray.
- Directive **formGroup** được sử dụng để bind FormGroup với template.
- Directive **formControlName** được sử dụng để bind
